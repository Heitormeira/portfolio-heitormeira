import Link from "next/link";

const projetos = [
  {
    icon: "🏛️",
    nome: "Gestão de Sócios CNC",
    desc: "Sistema de gestão de sócios em Java com menu de operações, persistência de dados e lógica concorrente.",
    techs: ["Java", "POO", "Threads", "Serialização", "Padrões de Projeto", "CLI"],
    links: [{ label: "GitHub", url: "https://github.com/joaodafontequeiroz/gestao-socios-cnc" }],
  },
  {
    icon: "🔐",
    nome: "HashGuard System",
    desc: "Sistema em C para verificação de integridade com tabelas hash, manipulação de memória e algoritmos de hash.",
    techs: ["C", "Hash", "Estruturas de Dados", "Ponteiros", "Memória", "Algoritmos"],
    links: [{ label: "GitHub", url: "https://github.com/joaodafontequeiroz/projeto-Tabela-Hash-estrutura-de-dados-" }],
  },
  {
    icon: "🏥",
    nome: "Portal SINDHOSPE — Dados do CNES/DATASUS",
    desc: "Dashboard web do Portal SINDHOSPE, projeto integrador com o sindicato: cada associado vê indicadores do próprio estabelecimento (leitos, serviços e habilitações) comparados com o município e o estado, a partir de dados reais do CNES/DATASUS.",
    techs: ["Next.js", "Node.js", "Express", "Firebase", "DATASUS"],
    links: [{ label: "Demo", url: "https://sindhospe-frontend.vercel.app" }, { label: "GitHub", url: "https://github.com/Heitormeira/sindhospe-backend" }],
  },
  {
    icon: "🌐",
    nome: "Lab de Rede Corporativa — Mininet + Docker",
    desc: "Rede corporativa simulada com Mininet e Open vSwitch: 3 switches em hierarquia, 7 hosts em 3 sub-redes, rotas estáticas, controle de banda e latência por link, throughput medido com iperf e serviços web/Redis em contêineres Docker.",
    techs: ["Mininet", "Open vSwitch", "Docker", "Python", "TCP/IP", "iperf"],
    links: [
      { label: "GitHub", url: "https://github.com/Heitormeira/lab-mininet-docker-networking" },
    ],
    featured: true,
  },
  {
    icon: "🔎",
    nome: "Análise de Tráfego — Wireshark, tcpdump e Scapy",
    desc: "Captura guiada com tcpdump em 8 cenários (ICMP, DNS, HTTP, TLS, DHCP, TCP, ARP) e analisador em Python/Scapy que gera relatório de protocolos, top IPs e portas, flags TCP e alertas de SYN flood, RST e ARP spoofing.",
    techs: [
      "Wireshark",
      "Análise de Tráfego",
      "Segurança de Redes",
      "Protocolos",
      "Linux",
      "Laboratório",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/Heitormeira/wireshark-traffic-analysis" },
    ],
    featured: true,
  },
  {
    icon: "🎮",
    nome: "Jogo da Forca — Web",
    desc: "Jogo da forca interativo desenvolvido para o portfólio: lógica de estado, validação de entradas e animações.",
    techs: ["React", "Next.js", "JavaScript", "CSS", "Lógica de Programação"],
    links: [{ label: "Jogar", url: "/forca", internal: true }],
    featured: true,
  },
];

const skills = [
  {
    icon: "🌐",
    titulo: "Redes e Infraestrutura",
    itens: [
      "Mininet",
      "Open vSwitch",
      "Cisco Packet Tracer",
      "MikroTik RouterOS (WinBox)",
      "Zabbix",
      "Wireshark",
      "tcpdump e Scapy",
      "Docker",
      "Linux",
      "Oracle VirtualBox",
      "MobaXterm",
      "TCP/IP",
      "DNS",
      "DHCP",
      "Roteamento",
      "VLAN",
      "ACL",
      "QoS",
      "Segurança de Redes",
    ],
  },
  {
    icon: "💻",
    titulo: "Linguagens",
    itens: ["Java", "Python", "C", "Bash/Shell", "JavaScript"],
  },
  {
    icon: "🧩",
    titulo: "Programação",
    itens: ["POO", "Estruturas de Dados", "Lógica de Programação"],
  },
  {
    icon: "🛠️",
    titulo: "Ferramentas",
    itens: ["Git", "GitHub", "VS Code", "MobaXterm", "Excel", "Power BI"],
  },
];

const contatos = [
  {
    icon: "✉️",
    label: "Email",
    valor: "heitormeira14@gmail.com",
    href: "mailto:heitormeira14@gmail.com",
  },
  {
    icon: "📞",
    label: "Telefone",
    valor: "(81) 9 9981-0132",
    href: "tel:+5581999810132",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    valor: "linkedin.com/in/heitormeira/",
    href: "https://linkedin.com/in/heitormeira/",
  },
  {
    icon: "🐙",
    label: "GitHub",
    valor: "github.com/Heitormeira",
    href: "https://github.com/Heitormeira",
  },
  {
    icon: "📸",
    label: "Instagram",
    valor: "@heitormeiramelo",
    href: "https://instagram.com/heitormeiramelo",
  },
];

function ChevronIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="hero">
        <div className="hero-grid-bg" aria-hidden="true" />
        <div className="container">
          <span className="hero-badge">
            <span className="pulse" aria-hidden="true" />
            Disponível para novos desafios
          </span>

          <h1 className="hero-title">
            Heitor <span className="grad">Meira</span>
          </h1>

          <p className="hero-role">Estudante de Ciência da Computação</p>

          <p className="hero-desc">
            Estudante de Ciência da Computação na UNICAP e estagiário na UM Telecom,
            construindo minha trajetória profissional com foco em{" "}
            <strong>Redes, Infraestrutura de TI e Telecomunicações</strong>, em preparação{" "}
            para o <strong>Cisco CCNA 200-301</strong>.
          </p>

          <div className="hero-actions">
            <a href="#projetos" className="btn btn-primary">
              Ver projetos
            </a>
            <Link href="/curriculo" className="btn btn-ghost">
              Currículo
            </Link>
            <a
              href="https://linkedin.com/in/heitormeira/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              LinkedIn
            </a>
            <a href="#contato" className="btn btn-ghost">
              Contato
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <strong>UNICAP</strong>
              <span>Ciência da Computação · 2024.2 – 2028.2</span>
            </div>
            <div className="stat-card">
              <strong>UM Telecom</strong>
              <span>Estagiário de Redes · desde out. 2026</span>
            </div>
            <div className="stat-card">
              <strong>Redes &amp; Telecom</strong>
              <span>Área de interesse e especialização</span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SOBRE ---------- */}
      <section className="section" id="sobre">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Resumo profissional</span>
            <h2 className="section-title">Sobre mim</h2>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p>
                Sou estudante de <strong>Bacharelado em Ciência da Computação</strong> na{" "}
                <strong>UNICAP — Universidade Católica de Pernambuco</strong> (2024.2 – 2028.2 · 5º período)
                e, atualmente, estou iniciando minha trajetória profissional como
                estagiário na <strong>UM Telecom</strong>, em Recife, direcionando minha
                carreira para <strong>Redes, Infraestrutura de TI e Telecomunicações</strong>.
              </p>
              <p>
                Antes disso, estagiei no <strong>SINDHOSPE</strong>, onde tive meu primeiro
                contato prático com a área de tecnologia: suporte de TI, diagnóstico de
                problemas de sistemas e conectividade, análise de infraestrutura,
                organização e tratamento de dados com Excel e Power BI, além da
                identificação de soluções tecnológicas e documentação de rotinas.
              </p>
              <p>
                É um caminho de evolução constante: da base teórica na universidade, à
                experiência prática em suporte e dados, ao estágio atual em telecom —
                com estudo contínuo de redes por meio de laboratórios próprios com{" "}
                <strong>Mininet, Wireshark, Docker e Linux</strong>.
              </p>
            </div>

            <div className="card">
              <div className="journey">
                <div className="journey-step">
                  <span className="journey-dot" aria-hidden="true" />
                  <h4>UNICAP — Ciência da Computação</h4>
                  <p>Base teórica e prática · 2024.2 – 2028.2</p>
                </div>
                <div className="journey-step">
                  <span className="journey-dot" aria-hidden="true" />
                  <h4>SINDHOSPE — Estágio de TI</h4>
                  <p>Suporte, infraestrutura e dados · 2026</p>
                </div>
                <div className="journey-step now">
                  <span className="journey-dot" aria-hidden="true" />
                  <h4>UM Telecom — Estágio</h4>
                  <p>Redes, Infraestrutura e Telecom · Atual</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- EXPERIÊNCIA ---------- */}
      <section className="section" id="experiencia">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Trajetória</span>
            <h2 className="section-title">Experiência profissional</h2>
            <p className="section-sub">
              Do suporte e da análise de dados à área de redes e telecomunicações.
            </p>
          </div>

          <div className="timeline">
            {/* UM Telecom — atual */}
            <article className="exp-card current">
              <div className="exp-head">
                <div>
                  <h3 className="exp-role">Estagiário de Redes</h3>
                  <p className="exp-org">UM Telecom</p>
                  <p className="exp-meta">Recife, Pernambuco · out. 2026 – Atual</p>
                </div>
                <span className="tag tag-now">● Experiência atual</span>
              </div>
              <p className="exp-desc">
                Suporte técnico e atendimento a clientes, manutenção de rede e cabeamento,{" "}
                <strong>monitoramento com Zabbix</strong>, configuração de MikroTik RouterOS (WinBox){" "}
                e acesso a equipamentos com MobaXterm, além da configuração de Wi-Fi em ambiente{" "}
                SOHO e do registro e acompanhamento de chamados.
              </p>
              <div className="exp-tags">
                <span>MikroTik RouterOS</span>
                <span>Zabbix</span>
                <span>Cabeamento e Wi-Fi SOHO</span>
              </div>
            </article>

            {/* SINDHOSPE — anterior */}
            <article className="exp-card">
              <div className="exp-head">
                <div>
                  <h3 className="exp-role">Estagiário de TI — Infraestrutura &amp; Suporte</h3>
                  <p className="exp-org">SINDHOSPE</p>
                  <p className="exp-meta">Recife, Pernambuco · 2026</p>
                </div>
                <span className="tag tag-past">Experiência anterior</span>
              </div>
              <ul className="exp-list">
                <li>Suporte técnico a usuários e sistemas</li>
                <li>Diagnóstico de problemas de sistemas e conectividade</li>
                <li>Levantamento de necessidades tecnológicas</li>
                <li>Análise de infraestrutura</li>
                <li>Organização e tratamento de dados</li>
                <li>Rotinas de dados com Excel e Power BI</li>
                <li>Identificação de soluções tecnológicas</li>
                <li>Relatórios e documentação</li>
              </ul>
              <div className="exp-tags">
                <span>Suporte de TI</span>
                <span>Infraestrutura</span>
                <span>Excel</span>
                <span>Power BI</span>
                <span>Documentação</span>
              </div>
            </article>

            {/* City Beach — internacional */}
            <article className="exp-card">
              <div className="exp-head">
                <div>
                  <h3 className="exp-role">Atendente — Experiência internacional</h3>
                  <p className="exp-org">City Beach</p>
                  <p className="exp-meta">Austrália · 2024</p>
                </div>
                <span className="tag tag-past">Experiência anterior</span>
              </div>
              <p className="exp-desc">
                Experiência de trabalho no exterior, com atendimento ao público em inglês
                e imersão em ambiente multicultural. Certificação{" "}
                <strong>ILSC Australia (2024)</strong> — nível Upper-Intermediate/Avançado.
              </p>
              <div className="exp-tags">
                <span>Inglês avançado</span>
                <span>Atendimento ao cliente</span>
                <span>ILSC Australia · 2024</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ---------- HABILIDADES ---------- */}
      <section className="section" id="habilidades">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Stack</span>
            <h2 className="section-title">Tecnologias e conhecimentos</h2>
          </div>

          <div className="skills-grid">
            {skills.map((grupo) => (
              <div className="card skill-card" key={grupo.titulo}>
                <h3>
                  <span className="skill-icon" aria-hidden="true">
                    {grupo.icon}
                  </span>
                  {grupo.titulo}
                </h3>
                <ul className="chip-list">
                  {grupo.itens.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PROJETOS ---------- */}
      <section className="section" id="projetos">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Portfólio</span>
            <h2 className="section-title">Projetos e laboratórios</h2>
            <p className="section-sub">
              Projetos acadêmicos, laboratórios de redes e experimentos práticos.
            </p>
          </div>

          <div className="projects-grid">
            {projetos.map((p) => (
              <article
                className={`project-card ${p.featured ? "featured" : ""}`}
                key={p.nome}
              >
                <div className="project-top">
                  <span className="project-icon" aria-hidden="true">
                    {p.icon}
                  </span>
                  <div className="project-links">
                    {p.links.map((link) =>
                      link.internal ? (
                        <Link href={link.url} key={link.label}>
                          {link.label} <ChevronIcon />
                        </Link>
                      ) : (
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          key={link.label}
                        >
                          {link.label} <ChevronIcon />
                        </a>
                      )
                    )}
                  </div>
                </div>
                <h3>{p.nome}</h3>
                <p>{p.desc}</p>
                <ul className="tech-list">
                  {p.techs.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FORMAÇÃO ---------- */}
      <section className="section" id="formacao">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Educação</span>
            <h2 className="section-title">Formação</h2>
          </div>

          <div className="edu-grid">
            <div className="card edu-card">
              <h3>Bacharelado em Ciência da Computação</h3>
              <p className="edu-place">UNICAP — Universidade Católica de Pernambuco</p>
              <p className="edu-period">2024.2 – 2028.2 · Em andamento (5º período)</p>
              <p className="edu-note">
                Foco em estruturas de dados, programação orientada a objetos e redes de
                computadores, com laboratórios práticos de topologia, roteamento e
                análise de tráfego — em preparação para o Cisco CCNA 200-301.
              </p>
            </div>
            <div className="card edu-card">
              <h3>Ensino Médio</h3>
              <p className="edu-place">Colégio Damas</p>
              <p className="edu-period">2021 – 2023</p>
              <p className="edu-note">
                Conclusão do ensino médio com base sólida em exatas e ciências,
                antecedendo a graduação em computação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CONTATO ---------- */}
      <section className="section" id="contato">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Contato</span>
            <h2 className="section-title">Vamos conversar?</h2>
            <p className="section-sub">
              Aberto a conversar sobre estágios, projetos, redes e tecnologia.
            </p>
          </div>

          <div className="contact-wrap">
            <div>
              <p style={{ color: "var(--text-muted)", marginBottom: 20 }}>
                Prefere email, telefone ou redes sociais? Escolha o canal que for mais
                conveniente — respondo o quanto antes.
              </p>
              <Link href="/curriculo" className="btn btn-primary">
                Ver currículo completo
              </Link>
            </div>

            <ul className="contact-list">
              {contatos.map((c) => (
                <li key={c.label}>
                  <a href={c.href} target="_blank" rel="noopener noreferrer">
                    <span className="contact-ico" aria-hidden="true">
                      {c.icon}
                    </span>
                    <span>
                      <strong>{c.label}</strong>
                      <span>{c.valor}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
