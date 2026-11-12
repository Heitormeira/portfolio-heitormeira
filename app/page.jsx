import Link from "next/link";

const experiencias = [
  {
    periodo: "out. 2026 — atual",
    cargo: "Estagiário de Redes — N2 · CMC",
    org: "UM Telecom · Recife/PE",
    atual: true,
    desc: "Atuação na equipe N2 – CMC (Configuração e Manutenção de Clientes) de um provedor de telecomunicações, com foco em provisionamento, configuração e manutenção de serviços e equipamentos de rede.",
    itens: [
      "Provisionamento e configuração de clientes e serviços de telecomunicações",
      "Configuração e manutenção de equipamentos MikroTik, Datacom, Huawei e Juniper",
      "Configuração de VLANs, portas e interfaces de switches, com endereçamento IP de gerência",
      "Execução de ativações, bloqueios e cancelamentos de clientes",
      "Upgrades e downgrades de banda, com análise de viabilidade técnica",
      "Execução e validação de alterações de configuração nos equipamentos",
      "Migrações, mudanças de serviço e adequações de infraestrutura",
      "Identificação e correção de inconsistências de configuração",
      "Documentação e padronização das configurações e informações técnicas dos clientes",
    ],
  },
  {
    periodo: "2026",
    cargo: "Estagiário de TI — infraestrutura e suporte",
    org: "SINDHOSPE · Recife/PE",
    atual: false,
    itens: [
      "Suporte técnico a usuários e sistemas",
      "Diagnóstico de problemas de sistemas e conectividade",
      "Análise de infraestrutura",
      "Organização e tratamento de dados com Excel e Power BI",
      "Relatórios e documentação de rotinas",
    ],
  },
  {
    periodo: "2024",
    cargo: "Atendente — experiência internacional",
    org: "City Beach · Austrália",
    atual: false,
    desc: "Atendimento ao público em inglês e imersão em ambiente multicultural.",
  },
];

const formacao = [
  {
    label: "Graduação",
    value: "Ciência da Computação — UNICAP · 2024.2 – 2028.2 (5º período)",
  },
  {
    label: "Certificação",
    value: "Cisco CCNA 200-301 — em preparação",
  },
  {
    label: "Idioma",
    value: "Inglês avançado — ILSC Australia, 2024",
  },
  {
    label: "Ensino médio",
    value: "Colégio Damas · 2021 – 2023",
  },
];

const projetos = [
  {
    nome: "Portal SINDHOSPE — dados CNES/DATASUS",
    desc: "Dashboard do projeto integrador com o sindicato: cada associado consulta leitos, serviços e habilitações do próprio estabelecimento, comparados com município e estado, a partir de dados abertos do CNES.",
    stack: "Next.js · Node.js · Express · Firebase",
    links: [
      { label: "demo", url: "https://sindhospe-frontend.vercel.app" },
      { label: "código", url: "https://github.com/Heitormeira/sindhospe-backend" },
    ],
  },
  {
    nome: "Lab de rede corporativa — Mininet + Docker",
    desc: "Rede corporativa simulada com três switches em hierarquia, sete hosts em três sub-redes, rotas estáticas, controle de banda e latência por link, medição de throughput com iperf e serviços em contêineres.",
    stack: "Mininet · Open vSwitch · Docker · Python",
    links: [
      {
        label: "código",
        url: "https://github.com/Heitormeira/lab-mininet-docker-networking",
      },
    ],
  },
  {
    nome: "Análise de tráfego — Wireshark e Scapy",
    desc: "Captura guiada em oito cenários de protocolo e um analisador em Python que gera relatório de protocolos, top IPs e portas, flags TCP e alertas de SYN flood, RST e ARP spoofing.",
    stack: "tcpdump · Wireshark · Scapy",
    links: [
      {
        label: "código",
        url: "https://github.com/Heitormeira/wireshark-traffic-analysis",
      },
    ],
  },
  {
    nome: "Gestão de Sócios CNC",
    desc: "Sistema de gestão de sócios em Java com menu de operações, persistência de dados e lógica concorrente, desenvolvido em equipe.",
    stack: "Java · POO · Threads",
    links: [
      {
        label: "código",
        url: "https://github.com/joaodafontequeiroz/gestao-socios-cnc",
      },
    ],
  },
  {
    nome: "HashGuard System",
    desc: "Sistema em C para verificação de integridade com tabela hash e manipulação direta de memória, em equipe.",
    stack: "C · Tabela hash · Algoritmos",
    links: [
      {
        label: "código",
        url: "https://github.com/joaodafontequeiroz/projeto-Tabela-Hash-estrutura-de-dados-",
      },
    ],
  },
  {
    nome: "Jogo da Forca — web",
    desc: "Jogo integrado ao próprio site: estado em React, validação de entrada, desenho em SVG e teclado virtual.",
    stack: "React · Next.js",
    links: [{ label: "executar", url: "/forca", internal: true }],
  },
];

const ferramentas = [
  {
    titulo: "Redes e telecom",
    itens: [
      "MikroTik RouterOS (WinBox)",
      "Datacom",
      "Huawei",
      "Juniper",
      "Cisco Packet Tracer",
      "VLAN",
      "TCP/IP",
      "Roteamento",
      "QoS",
      "Zabbix",
      "Mininet",
      "Open vSwitch",
    ],
  },
  {
    titulo: "Análise e operação",
    itens: [
      "Wireshark",
      "tcpdump",
      "Scapy",
      "MobaXterm",
      "Provisionamento de clientes",
      "Documentação técnica",
    ],
  },
  {
    titulo: "Sistemas e código",
    itens: ["Linux", "Docker", "Python", "C", "Java", "JavaScript", "Bash", "Git"],
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
];

export default function Home() {
  return (
    <>
      {/* ---------- abertura ---------- */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-name">Heitor Meira</h1>
          <p className="hero-role">
            Redes e infraestrutura de telecomunicações · Recife, Pernambuco
          </p>

          <p className="hero-intro">
            Estagiário de redes na <strong>UM Telecom</strong>, na equipe N2 – CMC, e
            estudante de Ciência da Computação na <strong>UNICAP</strong>. Trabalho com
            provisionamento de clientes e configuração de equipamentos de operadora —
            MikroTik, Datacom, Huawei e Juniper —, VLANs e endereçamento de gerência,
            upgrades de banda e correção de inconsistências de configuração.
          </p>
          <p className="hero-intro">
            Antes disso, estagiei no SINDHOSPE, onde comecei pelo suporte e acabei
            chegando ao software: hoje escrevo sistemas web em Next.js e scripts em
            Python quando a operação pede. Estudo para o <strong>CCNA 200-301</strong> e
            mantenho laboratórios com Mininet, Docker e Wireshark.
          </p>

          <ul className="hero-links">
            <li>
              <Link href="/curriculo">Currículo completo</Link>
            </li>
            <li>
              <a href="mailto:heitormeira14@gmail.com">heitormeira14@gmail.com</a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/heitormeira/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Heitormeira"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* ---------- experiência ---------- */}
      <section className="section" id="experiencia">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Experiência</h2>
          </div>

          <ol className="jobs">
            {experiencias.map((exp) => (
              <li className="job" key={exp.org}>
                <div className="job-head">
                  <h3 className="job-role">{exp.cargo}</h3>
                  <p className="job-period">{exp.periodo}</p>
                </div>
                <p className="job-org">{exp.org}</p>

                {exp.desc && <p className="job-desc">{exp.desc}</p>}

                {exp.itens && (
                  <ul className="job-list">
                    {exp.itens.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- formação ---------- */}
      <section className="section" id="formacao">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Formação e certificação</h2>
          </div>

          <ul className="facts">
            {formacao.map((item) => (
              <li key={item.label}>
                <span className="fact-label">{item.label}</span>
                <span className="fact-value">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- projetos ---------- */}
      <section className="section" id="projetos">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Projetos</h2>
            <p className="section-sub">
              O que está em produção, o que existe como laboratório e o que foi trabalho
              de disciplina.
            </p>
          </div>

          <ul className="projects">
            {projetos.map((projeto) => (
              <li className="project" key={projeto.nome}>
                <p className="project-title">
                  {projeto.links[0].internal ? (
                    <Link href={projeto.links[0].url}>{projeto.nome}</Link>
                  ) : (
                    <a
                      href={projeto.links[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {projeto.nome}
                    </a>
                  )}
                </p>
                <p className="project-desc">{projeto.desc}</p>
                <p className="project-stack">{projeto.stack}</p>
                {projeto.links.length > 1 && (
                  <ul className="project-links">
                    {projeto.links.map((link) => (
                      <li key={link.label}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- ferramentas ---------- */}
      <section className="section" id="ferramentas">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Ferramentas</h2>
          </div>

          <ul className="skills">
            {ferramentas.map((grupo) => (
              <li className="skill-group" key={grupo.titulo}>
                <h3>{grupo.titulo}</h3>
                <p>{grupo.itens.join(", ")}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- contato ---------- */}
      <section className="section" id="contato">
        <div className="container">
          <div className="section-head">
            <h2 className="section-title">Contato</h2>
          </div>

          <ul className="contact-list">
            {contatos.map((contato) => (
              <li key={contato.chave}>
                <a
                  href={contato.href}
                  target={contato.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    contato.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {contato.valor}
                </a>
              </li>
            ))}
          </ul>

          <p className="contact-note">
            Currículo completo em <Link href="/curriculo">/curriculo</Link>, com opção de
            impressão em PDF.
          </p>
        </div>
      </section>
    </>
  );
}
