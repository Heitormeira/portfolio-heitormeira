/* Teste E2E do Jogo da Forca via Chrome DevTools Protocol (sem dependências). */
import { spawn } from "node:child_process";
import http from "node:http";

const PORT = 9222;
const APP = "http://localhost:3000/forca";

function httpGetJson(url) {
  return new Promise((resolve, reject) => {
    http
      .get(url, (res) => {
        let data = "";
        res.on("data", (c) => (data += c));
        res.on("end", () => {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            reject(e);
          }
        });
      })
      .on("error", reject);
  });
}

function httpRequest(url, method = "GET") {
  return new Promise((resolve, reject) => {
    const req = http.request(url, { method }, (res) => {
      let data = "";
      res.on("data", (c) => (data += c));
      res.on("end", () => resolve(data));
    });
    req.on("error", reject);
    req.end();
  });
}

async function waitPort(port, tries = 50) {
  for (let i = 0; i < tries; i++) {
    try {
      await httpGetJson(`http://127.0.0.1:${port}/json/version`);
      return true;
    } catch {
      await new Promise((r) => setTimeout(r, 300));
    }
  }
  throw new Error("Chrome CDP não subiu");
}

async function main() {
  const chrome = spawn(
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    [
      "--headless=new",
      `--remote-debugging-port=${PORT}`,
      "--user-data-dir=" + process.env.TEMP + "\\cdp-chrome-profile",
      "--no-first-run",
      "--no-default-browser-check",
      "--disable-gpu",
      "--window-size=1280,900",
      "about:blank",
    ],
    { stdio: "ignore" }
  );

  try {
    await waitPort(PORT);

    // Cria target via PUT (Chrome moderno exige PUT para /json/new)
    const target = JSON.parse(
      await httpRequest(
        `http://127.0.0.1:${PORT}/json/new?${encodeURIComponent(APP)}`,
        "PUT"
      )
    );
    const wsUrl = target.webSocketDebuggerUrl;

    // WebSocket nativo (Node 22+)
    const ws = new WebSocket(wsUrl);
    await new Promise((resolve, reject) => {
      ws.onopen = resolve;
      ws.onerror = reject;
    });

    let id = 0;
    const pending = new Map();
    ws.onmessage = (ev) => {
      const msg = JSON.parse(ev.data);
      if (msg.id && pending.has(msg.id)) {
        const { resolve, reject } = pending.get(msg.id);
        pending.delete(msg.id);
        if (msg.error) reject(new Error(msg.error.message));
        else resolve(msg.result);
      }
    };

    const send = (method, params = {}) =>
      new Promise((resolve, reject) => {
        const mid = ++id;
        pending.set(mid, { resolve, reject });
        ws.send(JSON.stringify({ id: mid, method, params }));
      });

    const evaluate = async (expr) => {
      const r = await send("Runtime.evaluate", {
        expression: expr,
        awaitPromise: true,
        returnByValue: true,
      });
      if (r.exceptionDetails) {
        throw new Error(
          r.exceptionDetails.exception?.description || "Erro na avaliação"
        );
      }
      return r.result.value;
    };

    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    const results = [];
    const check = (name, cond) => {
      results.push({ name, ok: Boolean(cond) });
      console.log(`${cond ? "PASS" : "FAIL"} - ${name}`);
    };

    await send("Page.enable");
    await send("Runtime.enable");
    ws.addEventListener("message", (ev) => {
      const msg = JSON.parse(ev.data);
      if (msg.method === "Runtime.exceptionThrown") {
        console.log(
          "[PAGE ERROR]",
          msg.params.exceptionDetails.exception?.description ||
            msg.params.exceptionDetails.text
        );
      }
      if (msg.method === "Runtime.consoleAPICalled" && msg.params.type === "error") {
        console.log("[CONSOLE ERROR]", JSON.stringify(msg.params.args));
      }
    });
    await evaluate(`location.href = ${JSON.stringify(APP)}`);
    await sleep(3000);

    // ---------- Testes ----------
    // 1. Tela inicial
    const hasStart = await evaluate(
      `document.body.innerText.includes("Começar partida")`
    );
    check("Tela inicial exibe botão 'Começar partida'", hasStart);

    // 2. Inicia a partida
    await evaluate(
      `[...document.querySelectorAll("button")].find(b => b.textContent.includes("Começar partida")).click()`
    );
    await sleep(1500);
    const startedState = await evaluate(`(() => {
      const keys = [...document.querySelectorAll(".key")];
      const boxes = document.querySelectorAll(".letter-box");
      return {
        keys: keys.length,
        enabledKeys: keys.filter(k => !k.disabled).length,
        boxes: boxes.length,
        attemptsText: document.querySelector(".attempts")?.textContent ?? "",
        hasTentar: [...document.querySelectorAll("button")].some(b => b.textContent.trim() === "Tentar"),
      };
    })()`);
    check("Teclado virtual tem 26 letras", startedState.keys === 26);
    check("Partida iniciou com letras habilitadas", startedState.enabledKeys === 26);
    check("Campo de entrada + botão Tentar visíveis", startedState.hasTentar);
    check("Mostra 'Tentativas restantes: 6'", startedState.attemptsText.includes("6"));

    // 3. Validações de entrada
    const validation = await evaluate(`(async () => {
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const input = document.querySelector(".guess-row input");
      const setter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype, "value"
      ).set;
      setter.call(input, "1");
      input.dispatchEvent(new Event("input", { bubbles: true }));
      await sleep(150);
      document.querySelector(".guess-row button").click();
      await sleep(300);
      return {
        invalidMsg: document.querySelector(".input-error")?.textContent ?? "",
      };
    })()`);
    check(
      "Rejeita caractere inválido (número/símbolo)",
      validation.invalidMsg.includes("apenas uma letra")
    );

    // 4. Descobre a palavra "lendo" as caixas ao acertar letras
    const wordLen = await evaluate(
      `document.querySelectorAll(".letter-box").length`
    );
    check("Palavra sorteada tem caixas visíveis", wordLen >= 3 && wordLen <= 12);

    // Estratégia: ordem de frequência de letras; se perder, reinicia e tenta
    // de novo (adaptativo) até obter uma vitória para validar o fluxo.
    const winRun = await evaluate(`(async () => {
      const sleep = (ms) => new Promise(r => setTimeout(r, ms));
      const letters = "EAROSINDMTCULPGVHQBFZJXKWY".split("");
      const clickStart = () => {
        const b = [...document.querySelectorAll("button")].find(
          x => x.textContent.includes("Começar partida") || x.textContent.includes("Jogar novamente")
        );
        if (b) { b.click(); return true; }
        return false;
      };
      let won = false, statusText = "", rounds = 0;
      for (let round = 0; round < 25 && !won; round++) {
        rounds++;
        await sleep(250);
        for (const L of letters) {
          if (document.querySelector(".game-status")) break;
          const key = [...document.querySelectorAll(".key")].find(
            k => k.textContent === L && !k.disabled
          );
          if (!key) continue;
          key.click();
          await sleep(90);
        }
        await sleep(300);
        won = Boolean(document.querySelector(".game-status.win"));
        statusText = document.querySelector(".game-status h3")?.textContent ?? "";
        if (!won) clickStart();
      }
      return {
        won,
        rounds,
        status: statusText,
        attemptsText: document.querySelector(".attempts")?.textContent ?? "",
      };
    })()`);
    console.log("[DEBUG status]", JSON.stringify(winRun.status));
    check(
      `Venceu uma partida (em ${winRun.rounds} rodada(s) de tentativa)`,
      winRun.won
    );
    check("Status de vitória mostra 'Venceu'", winRun.status.includes("Venceu"));

    // 5. Reinicia e força derrota
    await evaluate(
      `[...document.querySelectorAll("button")].find(b => b.textContent.includes("Jogar novamente")).click()`
    );
    await sleep(300);
    const afterRestart = await evaluate(`(() => {
      const keys = [...document.querySelectorAll(".key")];
      return {
        enabled: keys.filter(k => !k.disabled).length,
        attempts: document.querySelector(".attempts")?.textContent ?? "",
        hits: document.querySelector(".letters-box.hits .letters-cloud")?.textContent ?? "",
        misses: document.querySelector(".letters-box.misses .letters-cloud")?.textContent ?? "",
      };
    })()`);
    check(
      "Reinício: teclado limpo e 26 letras habilitadas",
      afterRestart.enabled === 26
    );
    check("Reinício: 6 tentativas restauradas", afterRestart.attempts.includes("6"));

    // Força 6 erros com letras raras
    const loseRun = await evaluate(`(async () => {
      const sleep = (ms) => new Promise(r => setTimeout(r, ms));
      const rare = "ZXYKQWB".split("");
      for (const L of rare) {
        const status = document.querySelector(".game-status");
        if (status) break;
        const key = [...document.querySelectorAll(".key")].find(
          k => k.textContent === L && !k.disabled
        );
        if (!key) continue;
        key.click();
        await sleep(120);
      }
      await sleep(400);
      const missBox = document.querySelector(".letters-box.misses .letters-cloud");
      return {
        lost: Boolean(document.querySelector(".game-status.lose")),
        status: document.querySelector(".game-status h3")?.textContent ?? "",
        wordShown: document.querySelector(".game-status p")?.textContent ?? "",
        misses: missBox?.textContent ?? "",
        attemptsText: document.querySelector(".attempts")?.textContent ?? "",
      };
    })()`);
    check("Derrota após 6 erros", loseRun.lost);
    check("Status de derrota mostra 'Você perdeu'", loseRun.status.includes("Você perdeu"));
    check("Painel de erros lista 6 letras", (loseRun.misses.match(/[A-Z]/g) || []).length === 6);

    // 6. Campo de entrada: letra repetida após reinício
    await evaluate(
      `[...document.querySelectorAll("button")].find(b => b.textContent.includes("Jogar novamente")).click()`
    );
    await sleep(300);
    const repeat = await evaluate(`(async () => {
      const sleep = (ms) => new Promise(r => setTimeout(r, ms));
      const tryKey = async (L) => {
        const key = [...document.querySelectorAll(".key")].find(
          k => k.textContent === L && !k.disabled
        );
        if (key) { key.click(); await sleep(120); }
      };
      // encontra uma letra que dá erro (rara) e depois tenta repeti-la
      const rare = ["Z", "X", "Y", "K", "Q", "W"];
      let firstMiss = null;
      for (const L of rare) {
        await tryKey(L);
        const miss = document.querySelector(".letters-box.misses .letters-cloud")?.textContent ?? "";
        if (miss.includes(L)) { firstMiss = L; break; }
      }
      if (!firstMiss) return { repeated: false, msg: "não encontrou erro para repetir" };
      // tenta repetir a mesma letra: tecla deve estar desabilitada
      const key = [...document.querySelectorAll(".key")].find(k => k.textContent === firstMiss);
      const disabled = key?.disabled ?? false;
      // e via input
      const input = document.querySelector(".guess-row input");
      let repeatMsg = "";
      if (input && !disabled) {
        const setter = Object.getOwnPropertyDescriptor(
          window.HTMLInputElement.prototype, "value"
        ).set;
        setter.call(input, firstMiss);
        input.dispatchEvent(new Event("input", { bubbles: true }));
        document.querySelector(".guess-row button").click();
        await sleep(200);
        repeatMsg = document.querySelector(".input-error")?.textContent ?? "";
      }
      return { repeated: disabled || repeatMsg.includes("já foi utilizada"), msg: repeatMsg };
    })()`);
    check("Não permite repetir letra utilizada", repeat.repeated);

    // 7. Sem erros de console críticos: verifica se a página segue responsiva
    const alive = await evaluate(`document.title`);
    check("Página continua responsiva após partida completa", typeof alive === "string" && alive.length > 0);

    await send("Page.close").catch(() => {});
    ws.close();

    const failed = results.filter((r) => !r.ok);
    console.log(`\n${results.length - failed.length}/${results.length} testes passaram`);
    process.exitCode = failed.length ? 1 : 0;
  } finally {
    chrome.kill();
  }
}

main().catch((e) => {
  console.error("E2E falhou:", e.message);
  process.exit(1);
});
