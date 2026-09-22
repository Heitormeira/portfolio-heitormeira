"use client";

import { useCallback, useState } from "react";

/* Palavras brasileiras (futebol, Recife, cultura de Pernambuco) +
   tecnologia, redes e infraestrutura/telecom. Sem acentos e cedilhas,
   estilo jogo da forca de papel. Cada palavra tem uma dica. */
const WORDS = [
  // Futebol e Náutico
  { w: "NAUTICO", d: "Clube dos Aflitos — o Timbu!" },
  { w: "KIEZA", d: "Ídolo e maior artilheiro da história do Náutico" },
  { w: "TIMBU", d: "Apelido do Náutico" },
  { w: "AFLITOS", d: "Bairro do Recife — casa do Náutico" },
  { w: "ESTADIO", d: "Os Aflitos, a arena do Timbu" },
  { w: "ARRUDA", d: "Estádio do Santa Cruz, no bairro do Arruda" },
  { w: "BAHIA", d: "Rival do Timbu no Nordeste, de outro estado" },
  { w: "PERNAMBUCO", d: "Estado do Recife e do Náutico" },
  { w: "RECIFE", d: "Capital de Pernambuco" },
  { w: "OLINDA", d: "Cidade histórica vizinha ao Recife" },
  { w: "FREVO", d: "Ritmo e dança do carnaval pernambucano" },
  { w: "MARACATU", d: "Batuque tradicional do carnaval do Recife" },
  { w: "CORDA", d: "Peça do frevo e também parte da forca" },
  { w: "GUARANA", d: "Refrigerante brasileiro, ou fruta amazônica" },
  { w: "BRIGADEIRO", d: "Doce de festa de aniversário no Brasil" },
  { w: "PACOCA", d: "Doce de amendoim típico nordestino" },
  { w: "PRAIA", d: "Boa Viagem tem uma bem frequentada" },

  // Tecnologia, redes e infraestrutura
  { w: "ROTEADOR", d: "Equipamento que encaminha pacotes entre redes" },
  { w: "FIREWALL", d: "Barreira de proteção entre redes" },
  { w: "SWITCH", d: "Equipamento que conecta dispositivos na mesma rede" },
  { w: "SUBREDE", d: "Divisão lógica de uma rede IP" },
  { w: "MASCARA", d: "Define rede e host num endereço IP" },
  { w: "GATEWAY", d: "Porta de saída de uma rede local" },
  { w: "PROTOCOLO", d: "Conjunto de regras de comunicação (ex.: TCP/IP)" },
  { w: "DNS", d: "Traduz nomes de sites em endereços IP" },
  { w: "DHCP", d: "Distribui endereços IP automaticamente" },
  { w: "VLAN", d: "Rede local virtual, segmenta o switch" },
  { w: "QOS", d: "Qualidade de serviço — prioridade de tráfego" },
  { w: "FIBRA", d: "Meio físico que transmite luz, base da telecom" },
  { w: "TELECOM", d: "Setor de telecomunicações" },
  { w: "BANDA", d: "Largura de ___: capacidade de transmissão" },
  { w: "LATENCIA", d: "Atraso de uma conexão de rede" },
  { w: "PACKET", d: "Unidade de dados trafegada na rede (inglês)" },
  { w: "CABO", d: "Meio físico de conexão (par trançado, coaxial...)" },
  { w: "PING", d: "Testa conectividade entre dois hosts" },
  { w: "TRACERT", d: "Mostra a rota dos pacotes até o destino" },
  { w: "MININET", d: "Simulador de redes usado em laboratórios" },
  { w: "WIRESHARK", d: "Analisador de tráfego de rede" },
  { w: "DOCKER", d: "Plataforma de containers" },
  { w: "LINUX", d: "Sistema operacional livre muito usado em servidores" },
  { w: "SERVIDOR", d: "Máquina que fornece serviços na rede" },
  { w: "DATACENTER", d: "Instalação que hospeda servidores e equipamentos" },
  { w: "BACKBONE", d: "Espinha dorsal da internet" },
  { w: "UPLINK", d: "Enlace de subida entre equipamentos" },
  { w: "ALGORITMO", d: "Sequência de passos para resolver um problema" },
  { w: "PROGRAMA", d: "Código que instrui o computador" },
  { w: "JAVA", d: "Linguagem orientada a objetos da Oracle" },
  { w: "PYTHON", d: "Linguagem versátil muito usada em redes e dados" },
  { w: "COMPUTADOR", d: "Máquina que processa dados" },
  { w: "TECLADO", d: "Periférico de entrada com letras" },
  { w: "BINARIO", d: "Sistema numérico com 0 e 1" },
  { w: "MEMORIA", d: "Onde o computador guarda dados em execução" },
  { w: "VARIAVEL", d: "Espaço nomeado para guardar um valor" },
  { w: "FUNCAO", d: "Bloco de código reutilizável" },
];

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const MAX_ERRORS = 6;
const LETTER_RE = /^[A-Z]$/; // uma letra por tentativa, sem acentos/números/símbolos

let lastWord = null;

function drawWord() {
  let next = WORDS[Math.floor(Math.random() * WORDS.length)];
  // Evita repetir imediatamente a palavra da partida anterior
  while (WORDS.length > 1 && next === lastWord) {
    next = WORDS[Math.floor(Math.random() * WORDS.length)];
  }
  lastWord = next;
  return next;
}

/* Boneco: cada parte corresponde a um erro (1 a 6) */
function Gallows({ errors }) {
  const visible = (n) => (errors >= n ? "g-part visible" : "g-part");
  return (
    <div
      className="gallows"
      role="img"
      aria-label={`Forca com ${errors} de ${MAX_ERRORS} erros`}
    >
      <svg
        viewBox="0 0 200 230"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* 1. Base */}
        <g className={visible(1)} stroke="#8a8a96" strokeWidth="6">
          <line x1="30" y1="220" x2="130" y2="220" />
        </g>
        {/* 2. Poste */}
        <g className={visible(2)} stroke="#8a8a96" strokeWidth="6">
          <line x1="60" y1="220" x2="60" y2="20" />
        </g>
        {/* 3. Parte superior */}
        <g className={visible(3)} stroke="#8a8a96" strokeWidth="6">
          <line x1="60" y1="20" x2="140" y2="20" />
          <line x1="60" y1="48" x2="88" y2="20" />
        </g>
        {/* 4. Corda */}
        <g className={visible(4)} stroke="#e0162b" strokeWidth="5">
          <line x1="140" y1="20" x2="140" y2="50" />
        </g>
        {/* 5. Cabeça */}
        <g className={visible(5)} stroke="#e0162b" strokeWidth="5">
          <circle cx="140" cy="70" r="20" />
        </g>
        {/* 6. Corpo, braços e pernas */}
        <g className={visible(6)} stroke="#e0162b" strokeWidth="5">
          <line x1="140" y1="90" x2="140" y2="150" />
          <line x1="140" y1="105" x2="115" y2="130" />
          <line x1="140" y1="105" x2="165" y2="130" />
          <line x1="140" y1="150" x2="118" y2="185" />
          <line x1="140" y1="150" x2="162" y2="185" />
        </g>
      </svg>
    </div>
  );
}

export default function HangmanGame() {
  // O sorteio usa Math.random. A partida só é criada ao clicar em
  // "Começar partida" (no cliente), evitando divergência de hidratação
  // entre o HTML do servidor e o primeiro render do cliente.
  const [started, setStarted] = useState(false);
  const [word, setWord] = useState(null);
  const [hint, setHint] = useState("");
  const [usedCorrect, setUsedCorrect] = useState([]);
  const [usedWrong, setUsedWrong] = useState([]);
  const [error, setError] = useState("");
  const [input, setInput] = useState("");

  const errors = usedWrong.length;
  const remaining = MAX_ERRORS - errors;
  const won = Boolean(word) && word.split("").every((l) => usedCorrect.includes(l));
  const lost = errors >= MAX_ERRORS && !won;
  const ended = won || lost;

  const tryLetter = useCallback(
    (raw) => {
      const letter = String(raw).trim().toUpperCase();
      setError("");

      if (ended) return;
      if (!letter) return;
      if (!LETTER_RE.test(letter)) {
        setError("Digite apenas uma letra (A–Z), sem números ou símbolos.");
        return;
      }
      if (usedCorrect.includes(letter) || usedWrong.includes(letter)) {
        setError(`A letra "${letter}" já foi utilizada. Tente outra.`);
        return;
      }

      if (word.includes(letter)) {
        setUsedCorrect((prev) => [...prev, letter]);
      } else {
        setUsedWrong((prev) => [...prev, letter]);
      }
      setInput("");
    },
    [ended, usedCorrect, usedWrong, word]
  );

  const startGame = useCallback(() => {
    const pick = drawWord();
    setWord(pick.w);
    setHint(pick.d);
    setUsedCorrect([]);
    setUsedWrong([]);
    setError("");
    setInput("");
    setStarted(true);
  }, []);

  const restart = useCallback(() => {
    const pick = drawWord();
    setWord(pick.w);
    setHint(pick.d);
    setUsedCorrect([]);
    setUsedWrong([]);
    setError("");
    setInput("");
  }, []);

  if (!started || !word) {
    return (
      <div className="forca-layout">
        <section className="forca-panel">
          <div className="forca-stage">
            <div className="word-display">
              {[0, 1, 2, 3, 4].map((i) => (
                <span key={i} className="letter-box" aria-hidden="true" />
              ))}
            </div>
            <p style={{ color: "var(--text-dim)", textAlign: "center" }}>
              Palavras do futebol brasileiro, cultura de Pernambuco, tecnologia e
              redes · 6 tentativas
            </p>
            <button type="button" className="btn btn-primary" onClick={startGame}>
              Começar partida
            </button>
          </div>
        </section>
        <section className="forca-panel" style={{ minHeight: 320 }} />
      </div>
    );
  }

  const onInputKeyDown = (e) => {
    if (e.key === "Enter") tryLetter(input);
  };

  return (
    <div className="forca-layout">
      {/* Painel da forca */}
      <section className="forca-panel" aria-label="Forca">
        <div className="forca-stage">
          <Gallows errors={errors} />

          <div className="word-display" aria-label="Palavra a descobrir">
            {word.split("").map((letter, i) => {
              const revealed = usedCorrect.includes(letter) || lost;
              const missedIt = lost && !usedCorrect.includes(letter);
              return (
                <span
                  key={`${letter}-${i}`}
                  className={`letter-box ${revealed ? "revealed" : ""} ${
                    missedIt ? "missed" : ""
                  }`}
                  aria-hidden="true"
                >
                  {revealed ? letter : ""}
                </span>
              );
            })}
          </div>

          <p className="hint">💡 Dica: {hint}</p>

          <div>
            <p className={`attempts ${remaining <= 2 ? "danger" : ""}`}>
              Tentativas restantes: {remaining}
            </p>
            <div className="attempts-bar" aria-hidden="true">
              <div
                className={`attempts-bar-fill ${remaining <= 2 ? "low" : ""}`}
                style={{ width: `${(remaining / MAX_ERRORS) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Painel do jogo */}
      <section className="forca-panel" aria-label="Controles do jogo">
        <div className="keyboard" role="group" aria-label="Teclado virtual">
          {ALPHABET.map((letter) => {
            const isHit = usedCorrect.includes(letter);
            const isMiss = usedWrong.includes(letter);
            return (
              <button
                key={letter}
                type="button"
                className={`key ${isHit ? "hit" : ""} ${isMiss ? "miss" : ""}`}
                onClick={() => tryLetter(letter)}
                disabled={ended || isHit || isMiss}
                aria-label={`Tentar letra ${letter}`}
              >
                {letter}
              </button>
            );
          })}
        </div>

        <div className="letters-panel">
          <div className="letters-box hits">
            <h4>Acertos</h4>
            <div className="letters-cloud">
              {usedCorrect.length ? (
                usedCorrect.map((l) => <span key={l}>{l}</span>)
              ) : (
                <span className="empty">Nenhuma ainda</span>
              )}
            </div>
          </div>
          <div className="letters-box misses">
            <h4>Erros</h4>
            <div className="letters-cloud">
              {usedWrong.length ? (
                usedWrong.map((l) => <span key={l}>{l}</span>)
              ) : (
                <span className="empty">Nenhuma ainda</span>
              )}
            </div>
          </div>
        </div>

        {!ended && (
          <div className="guess-row">
            <input
              type="text"
              value={input}
              maxLength={1}
              placeholder="Digite uma letra"
              aria-label="Letra para tentar"
              onChange={(e) => setInput(e.target.value.slice(0, 1))}
              onKeyDown={onInputKeyDown}
            />
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => tryLetter(input)}
            >
              Tentar
            </button>
          </div>
        )}
        {error && !ended && (
          <p className="input-error" role="alert">
            {error}
          </p>
        )}

        {won && (
          <div className="game-status win" role="status">
            <h3>🎉 Venceu, Timbu! 🇧🇷</h3>
            <p>
              A palavra era <strong>{word}</strong>. {hint}
            </p>
            <button type="button" className="btn btn-primary" onClick={restart}>
              Jogar novamente
            </button>
          </div>
        )}

        {lost && (
          <div className="game-status lose" role="status">
            <h3>PUTZ! Você perdeu!</h3>
            <p>
              A palavra era <strong>{word}</strong>. {hint}
            </p>
            <button type="button" className="btn btn-primary" onClick={restart}>
              Jogar novamente
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
