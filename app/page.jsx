import Link from "next/link";
import TopologyMap from "@/components/TopologyMap";

const projetos = [
  {
    id: "U1",
    nome: "Portal SINDHOSPE — dados CNES/DATASUS",
    estado: "em produção",
    live: true,
    stack: ["Next.js", "Node.js", "Express", "Firebase", "DATASUS"],
    desc: "Dashboard web do projeto integrador com o SINDHOSPE. Cada associado consulta os indicadores do próprio estabelecimento — leitos, serviços e habilitações — comparados com o município e o estado, a partir de dados abertos do CNES/DATASUS.",
    links: [
      { label: "demo", url: "https://sindhospe-frontend.vercel.app" },
      { label: "código", url: "https://github.com/Heitormeira/sindhospe-backend" },
    ],
  },
  {
    id: "U2",
    nome: "Lab de rede corporativa — Mininet + Docker",
    estado: "laboratório",
    stack: ["Mininet", "Open vSwitch", "Docker", "Python", "iperf"],
    desc: "Rede corporativa simulada com 3 switches em hierarquia e 7 hosts distribuídos em 3 sub-redes, com rotas estáticas, controle de banda e latência por link, medição de throughput com iperf e serviços web/Redis em contêineres.",
    links: [
      {
        label: "código",
        url: "https://github.com/Heitormeira/lab-mininet-docker-networking",
      },
    ],
  },
  {
    id: "U3",
    nome: "Análise de tráfego — Wireshark, tcpdump e Scapy",
    estado: "laboratório",
    stack: ["tcpdump", "Wireshark", "Scapy", "TCP/IP"],
    desc: "Captura guiada em 8 cenários (ICMP, DNS, HTTP, TLS, DHCP, TCP, ARP) e um analisador em Python/Scapy que gera relatório de protocolos, top IPs e portas, flags TCP e alertas de SYN flood, RST e ARP spoofing.",
    links: [
      {
        label: "código",
        url: "https://github.com/Heitormeira/wireshark-traffic-analysis",
      },
    ],
  },
  {
    id: "U4",
    nome: "Gestão de Sócios CNC",
    estado: "acadêmico",
    stack: ["Java", "POO", "Threads", "Serialização"],
    desc: "Sistema de gestão de sócios em Java com menu de operações, persistência de dados e lógica concorrente.",
    links: [
      {
        label: "código",
        url: "https://github.com/joaodafontequeiroz/gestao-socios-cnc",
      },
    ],
  },
  {
    id: "U5",
    nome: "HashGuard System",
    estado: "acadêmico",
    stack: ["C", "Tabela hash", "Ponteiros", "Algoritmos"],
    desc: "Sistema em C para verificação de integridade com tabelas hash, manipulação direta de memória e algoritmos de hash.",
    links: [
      {
        label: "código",
        url: "https://github.com/joaodafontequeiroz/projeto-Tabela-Hash-estrutura-de-dados-",
      },
    ],
  },
  {
    id: "U6",
    nome: "Jogo da Forca — web",
    estado: "web",
    stack: ["React", "Next.js", "CSS"],
    desc: "Jogo integrado ao próprio site: estado em React, validação de entrada, animação de SVG e teclado virtual.",
    links: [{ label: "executar", url: "/forca", internal: true }],
  },
];

const status = [
  {
    servico: "graduação",
    instancia: "UNICAP — Bacharelado em Ciência da Computação",
    detalhe: "2024.2 – 2028.2 · 5º período",
    estado: "em curso",
    tone: "ok",
  },
  {
    servico: "estágio",
    instancia: "UM Telecom — Estagiário de Redes",
    detalhe: "Recife/PE · desde out. 2026",
    estado: "ativo",
    tone: "ok",
  },
  {
    servico: "certificação",
    instancia: "Cisco CCNA 200-301",
    detalhe: "em preparação · data da prova: [PREENCHER]",
    estado: "em andamento",
    tone: "warn",
  },
  {
    servico: "idioma",
    instancia: "ILSC Australia — inglês",
    detalhe: "2024 · upper-intermediate/avançado",
    estado: "concluído",
    tone: "idle",
  },
];

const experiencias = [
  {
    periodo: "out. 2026 — atual",
    cargo: "Estagiário de Redes",
    org: "UM Telecom",
    local: "Recife/PE",
    atual: true,
    desc: "Operação de rede em provedor: suporte técnico e atendimento a clientes, manutenção de rede e cabeamento estruturado, apoio a servidores, monitoramento com Zabbix, configuração de MikroTik RouterOS (WinBox), Wi-Fi em ambiente SOHO, acesso a equipamentos com MobaXterm e registro de chamados.",
    tags: ["MikroTik", "Zabbix", "MobaXterm", "Cabeamento", "Wi-Fi SOHO"],
  },
  {
    periodo: "2026",
    cargo: "Estagiário de TI — infraestrutura e suporte",
    org: "SINDHOSPE",
    local: "Recife/PE",
    itens: [
      "Suporte técnico a usuários e sistemas",
      "Diagnóstico de problemas de sistemas e conectividade",
      "Análise de infraestrutura",
      "Organização e tratamento de dados com Excel e Power BI",
      "Relatórios e documentação de rotinas",
    ],
    tags: ["Suporte de TI", "Infraestrutura", "Excel", "Power BI"],
  },
  {
    periodo: "2024",
    cargo: "Atendente — experiência internacional",
    org: "City Beach",
    local: "Austrália",
    desc: "Atendimento ao público em inglês e imersão em ambiente multicultural.",
    tags: ["Inglês avançado", "Atendimento"],
  },
];

const habilidades = [
  {
    numero: "01",
    titulo: "redes e infraestrutura",
    itens: [
      "Cisco Packet Tracer",
      "MikroTik RouterOS (WinBox)",
      "Zabbix",
      "Mininet",
      "Open vSwitch",
      "Wireshark",
      "tcpdump",
      "Scapy",
      "TCP/IP",
      "DNS",
      "DHCP",
      "Roteamento",
      "VLAN",
      "ACL",
      "QoS",
      "Docker",
      "Linux",
      "Oracle VirtualBox",
      "MobaXterm",
    ],
  },
  {
    numero: "02",
    titulo: "linguagens",
    itens: ["Python", "Java", "C", "JavaScript", "Bash/Shell", "SQL"],
  },
  {
    numero: "03",
    titulo: "programação",
    itens: ["POO", "Estruturas de dados", "Lógica", "Redes de computadores"],
  },
  {
    numero: "04",
    titulo: "ferramentas",
    itens: ["Git", "GitHub", "VS Code", "Excel", "Power BI", "MobaXterm"],
  },
];

const contatos = [
  {
    chave: "e-mail",
    valor: "heitormeira14@gmail.com",
    href: "mailto:heitormeira14@gmail.com",
  },
  {
    chave: "linkedin",
    valor: "linkedin.com/in/heitormeira",
    href: "https://linkedin.com/in/heitormeira/",
  },
  {
    chave: "github",
    valor: "github.com/Heitormeira",
    href: "https://github.com/Heitormeira",
  },
  {
    chave: "telefone",
    valor: "(81) 9 9981-0132",
    href: "tel:+5581999810132",
  },
  {
    chave: "instagram",
    valor: "@heitormeiramelo",
    href: "https://instagram.com/heitormeiramelo",
  },
];

function ArrowIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M2.5 9.5L9.5 2.5" />
      <path d="M3.5 2.5h6v6" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="hero">
        <div className="hero-grid-bg" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="hero-cmd">
              <span className="prompt">$</span> whoami
            </p>

            <h1 className="hero-name">
              <span className="hero-name-line">Heitor</span>
              <span className="hero-name-line accent">Meira</span>
            </h1>

            <p className="hero-role">
              redes · infraestrutura de TI · telecomunicações
            </p>

            <div className="terminal">
              <p className="terminal-line">
                <span className="prompt">$</span> uptime
              </p>
              <p className="terminal-out">
                estagiário de redes @ UM Telecom · desde out. 2026
              </p>
              <p className="terminal-line">
                <span className="prompt">$</span> cat certificacao.txt
              </p>
              <p className="terminal-out">Cisco CCNA 200-301 — em andamento</p>
              <p className="terminal-line">
                <span className="prompt">$</span>
                <span className="cursor" aria-hidden="true" />
              </p>
            </div>

            <div className="hero-actions">
              <a href="#projetos" className="btn btn-primary">
                ver rack de projetos
              </a>
              <Link href="/curriculo" className="btn btn-ghost">
                currículo
              </Link>
              <a
                href="https://linkedin.com/in/heitormeira/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                linkedin <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="hero-diagram">
            <TopologyMap />
          </div>
        </div>
      </section>

      {/* ---------- SOBRE ---------- */}
      <section className="section" id="sobre">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">01 / sobre</p>
            <h2 className="section-title">Opero rede, e escrevo o software que a apoia.</h2>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p>
                Sou estudante de <strong>Ciência da Computação na UNICAP</strong>{" "}
                (2024.2 – 2028.2, 5º período) e estagiário de redes na{" "}
                <strong>UM Telecom</strong>, em Recife. Meu foco é infraestrutura:
                cabeamento, endereçamento, monitoramento e o dia a dia de manter uma
                rede funcionando.
              </p>
              <p>
                Antes da UM Telecom, estagiei no <strong>SINDHOSPE</strong>, onde comecei
                pelo suporte: diagnóstico de conectividade, análise de infraestrutura e
                tratamento de dados. Foi ali que a parte de software deixou de ser
                disciplina e virou ferramenta — hoje desenvolvo sistemas web com Next.js
                e Node, além de scripts em Python para automatizar tarefas de rede.
              </p>
              <p>
                Estudo para o <strong>Cisco CCNA 200-301</strong> e mantenho laboratórios
                próprios com Mininet, Docker e Wireshark para testar topologia,
                roteamento e análise de tráfego sem depender de equipamento físico.
              </p>
            </div>

            <aside className="about-aside">
              <p className="aside-label">área de operação</p>
              <p className="aside-value">Recife / Pernambuco</p>
              <p className="aside-label">graduação</p>
              <p className="aside-value">UNICAP · Ciência da Computação</p>
              <p className="aside-label">formação complementar</p>
              <p className="aside-value">CCNA 200-301 · em andamento</p>
              <p className="aside-label">detalhes adicionais</p>
              <p className="aside-value muted">[PREENCHER]</p>
            </aside>
          </div>
        </div>
      </section>

      {/* ---------- STATUS / FORMAÇÃO ---------- */}
      <section className="section" id="status">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">02 / status de serviços</p>
            <h2 className="section-title">O que está no ar agora</h2>
            <p className="section-sub">
              Formação, estágio e certificação lidos como serviços monitorados — com
              estado atual em vez de três cards iguais.
            </p>
          </div>

          <div className="status-wrap">
            <table className="status-table">
              <caption className="sr-only">
                Estado atual de formação, estágio, certificação e idioma
              </caption>
              <thead>
                <tr>
                  <th scope="col">serviço</th>
                  <th scope="col">instância</th>
                  <th scope="col">janela</th>
                  <th scope="col">estado</th>
                </tr>
              </thead>
              <tbody>
                {status.map((item) => (
                  <tr key={item.servico}>
                    <th scope="row">{item.servico}</th>
                    <td className="status-instance">{item.instancia}</td>
                    <td className="status-window">{item.detalhe}</td>
                    <td>
                      <span className={`state ${item.tone}`}>{item.estado}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="status-note">
              ensino médio · Colégio Damas · 2021 – 2023 —{" "}
              <span className="muted">histórico completo no currículo</span>
            </p>
          </div>
        </div>
      </section>

      {/* ---------- EXPERIÊNCIA ---------- */}
      <section className="section" id="experiencia">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">03 / experiência</p>
            <h2 className="section-title">Linha do tempo</h2>
          </div>

          <ol className="log">
            {experiencias.map((exp) => (
              <li key={exp.org} className={`log-item ${exp.atual ? "now" : ""}`}>
                <p className="log-date">
                  {exp.periodo} · {exp.local}
                  {exp.atual && <span className="log-live"> · ativo</span>}
                </p>
                <h3 className="log-role">{exp.cargo}</h3>
                <p className="log-org">{exp.org}</p>

                {exp.desc && <p className="log-desc">{exp.desc}</p>}

                {exp.itens && (
                  <ul className="log-list">
                    {exp.itens.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}

                <ul className="log-tags">
                  {exp.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- PROJETOS ---------- */}
      <section className="section" id="projetos">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">04 / rack de projetos</p>
            <h2 className="section-title">Equipamentos em operação e em bancada</h2>
            <p className="section-sub">
              Cada linha é uma unidade do rack. Abra para ver o que faz, com o que foi
              construída e onde está o código.
            </p>
          </div>

          <div className="rack">
            <div className="rack-head" aria-hidden="true">
              <span>slot</span>
              <span>dispositivo</span>
              <span>stack</span>
              <span>estado</span>
              <span />
            </div>

            <ul className="rack-list">
              {projetos.map((projeto) => (
                <li key={projeto.id} className="rack-unit">
                  <details>
                    <summary>
                      <span className="rack-slot">{projeto.id}</span>
                      <span className="rack-name">{projeto.nome}</span>
                      <span className="rack-tech">{projeto.stack.join(" · ")}</span>
                      <span className={`rack-state ${projeto.live ? "live" : ""}`}>
                        {projeto.estado}
                      </span>
                      <span className="rack-toggle" aria-hidden="true" />
                    </summary>

                    <div className="rack-body">
                      <p>{projeto.desc}</p>
                      <ul className="rack-links">
                        {projeto.links.map((link) =>
                          link.internal ? (
                            <li key={link.label}>
                              <Link href={link.url}>
                                {link.label} <ArrowIcon />
                              </Link>
                            </li>
                          ) : (
                            <li key={link.label}>
                              <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {link.label} <ArrowIcon />
                              </a>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </details>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- HABILIDADES ---------- */}
      <section className="section" id="habilidades">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">05 / inventário</p>
            <h2 className="section-title">Ferramentas e tecnologias</h2>
          </div>

          <div className="inventory">
            {habilidades.map((grupo) => (
              <div className="inventory-group" key={grupo.titulo}>
                <h3>
                  <span className="inventory-number">{grupo.numero}</span>
                  {grupo.titulo}
                  <span className="inventory-count">{grupo.itens.length}</span>
                </h3>
                <ul>
                  {grupo.itens.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CONTATO ---------- */}
      <section className="section" id="contato">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">06 / contato</p>
            <h2 className="section-title">Canais diretos</h2>
          </div>

          <div className="contact-grid">
            {contatos.map((contato) => (
              <a
                key={contato.chave}
                href={contato.href}
                target={contato.href.startsWith("http") ? "_blank" : undefined}
                rel={contato.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="contact-item"
              >
                <span className="contact-key">{contato.chave}</span>
                <span className="contact-val">
                  {contato.valor} <ArrowIcon />
                </span>
              </a>
            ))}
          </div>

          <p className="contact-cta">
            <Link href="/curriculo" className="btn btn-primary">
              ver currículo completo
            </Link>
            <span className="muted">ou imprima em PDF pela própria página</span>
          </p>
        </div>
      </section>
    </>
  );
}
