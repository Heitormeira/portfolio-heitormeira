import Link from "next/link";
import PrintButton from "@/components/PrintButton";

export const metadata = {
  title: "Currículo — Heitor Meira",
  description:
    "Currículo de Heitor Meira — estudante de Ciência da Computação (UNICAP) e estagiário de redes na UM Telecom, equipe N2 · CMC. MikroTik, Datacom, Huawei e Juniper, VLANs, provisionamento de clientes.",
};

const experiencias = [
  {
    cargo: "Estagiário de Redes — N2 · CMC",
    org: "UM Telecom — Recife, Pernambuco",
    periodo: "out. 2026 – Atual",
    atual: true,
    desc: "Atuação na equipe N2 – CMC (Configuração e Manutenção de Clientes), com foco em provisionamento, configuração e manutenção de serviços e equipamentos de redes de telecomunicações.",
    itens: [
      "Provisionamento e configuração de clientes e serviços de telecomunicações",
      "Configuração e manutenção de equipamentos MikroTik, Datacom, Huawei e Juniper",
      "Configuração de VLANs, portas e interfaces de switches",
      "Atribuição e configuração de endereços IP para VLANs de gerenciamento",
      "Execução de ativações, bloqueios e cancelamentos de clientes",
      "Upgrades e downgrades de banda",
      "Análise de viabilidade técnica para upgrades de clientes",
      "Execução e validação de alterações de configuração em equipamentos de rede",
      "Migrações, mudanças de serviço e adequações de infraestrutura",
      "Identificação e correção de inconsistências de configuração",
      "Documentação e padronização das configurações e informações técnicas dos clientes",
    ],
  },
  {
    cargo: "Estagiário de TI — Infraestrutura & Suporte",
    org: "SINDHOSPE — Recife, Pernambuco",
    periodo: "2026",
    atual: false,
    itens: [
      "Suporte técnico a usuários e sistemas",
      "Diagnóstico de problemas de sistemas e conectividade",
      "Levantamento de necessidades tecnológicas",
      "Análise de infraestrutura",
      "Organização e tratamento de dados",
      "Rotinas de dados com Excel e Power BI",
      "Identificação de soluções tecnológicas",
      "Relatórios e documentação",
    ],
  },
  {
    cargo: "Atendente — Experiência internacional",
    org: "City Beach — Austrália",
    periodo: "2024",
    atual: false,
    desc: "Atendimento ao público em inglês e imersão multicultural. Certificação ILSC Australia (2024) — Upper-Intermediate/Avançado.",
  },
];

const competencias = [
  {
    titulo: "Redes e telecom",
    itens: [
      "MikroTik RouterOS (WinBox)",
      "Datacom",
      "Huawei",
      "Juniper",
      "Cisco Packet Tracer",
      "VLAN e VLAN de gerência",
      "TCP/IP",
      "Roteamento",
      "QoS",
      "DHCP",
      "DNS",
      "Provisionamento de clientes",
      "Ativação, bloqueio e cancelamento",
      "Upgrade e downgrade de banda",
      "Documentação técnica",
    ],
  },
  {
    titulo: "Operação e análise",
    itens: [
      "Zabbix",
      "MobaXterm",
      "Wireshark",
      "tcpdump",
      "Scapy",
      "Mininet",
      "Open vSwitch",
      "Linux",
      "Docker",
    ],
  },
  {
    titulo: "Linguagens",
    itens: ["Python", "C", "Java", "JavaScript", "Bash/Shell"],
  },
  {
    titulo: "Ferramentas",
    itens: ["Git", "GitHub", "VS Code", "Excel", "Power BI"],
  },
];

export default function CurriculoPage() {
  return (
    <div className="resume-page">
      <div className="container">
        <div className="resume-actions">
          <PrintButton />
          <Link href="/" className="btn btn-ghost">
            ← Voltar ao portfólio
          </Link>
        </div>

        <article className="resume-sheet">
          <header>
            <h1>Heitor Meira</h1>
            <p className="resume-headline">
              Estagiário de Redes (N2 · CMC) · Ciência da Computação, UNICAP
            </p>
            <p className="resume-contact">
              <span>heitormeira14@gmail.com</span>
              <span>(81) 9 9981-0132</span>
              <span>linkedin.com/in/heitormeira/</span>
              <span>Recife, Pernambuco</span>
            </p>
          </header>

          <section className="resume-block">
            <h2>Resumo</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "0.98rem", maxWidth: "64ch" }}>
              Estagiário de redes na UM Telecom, na equipe N2 – CMC (Configuração e
              Manutenção de Clientes), atuando em provisionamento e configuração de
              clientes de telecom, manutenção de equipamentos MikroTik, Datacom, Huawei e
              Juniper, VLANs e endereçamento de gerência, upgrades de banda e correção de
              inconsistências de configuração. Estudante de Ciência da Computação na
              UNICAP (2024.2 – 2028.2, 5º período), com experiência anterior em
              infraestrutura e suporte no SINDHOSPE. Em preparação para o Cisco CCNA
              200-301, com laboratórios em Mininet, Docker, Wireshark e Packet Tracer.
            </p>
          </section>

          <section className="resume-block">
            <h2>Experiência</h2>
            {experiencias.map((exp) => (
              <div className="resume-item" key={exp.org} style={{ marginBottom: 20 }}>
                <h3>
                  {exp.cargo}{" "}
                  {exp.atual && (
                    <span className="tag" style={{ marginLeft: 6 }}>
                      atual
                    </span>
                  )}
                </h3>
                <p className="resume-place">{exp.org}</p>
                <p className="resume-period">{exp.periodo}</p>
                {exp.desc && (
                  <p
                    style={{
                      color: "var(--text-muted)",
                      fontSize: "0.96rem",
                      marginTop: 6,
                    }}
                  >
                    {exp.desc}
                  </p>
                )}
                {exp.itens && (
                  <ul>
                    {exp.itens.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>

          <section className="resume-block">
            <h2>Formação</h2>
            <div className="resume-item" style={{ marginBottom: 12 }}>
              <h3>Bacharelado em Ciência da Computação</h3>
              <p className="resume-place">
                UNICAP — Universidade Católica de Pernambuco · 2024.2 – 2028.2 (em
                andamento · 5º período)
              </p>
            </div>
            <div className="resume-item">
              <h3>Ensino Médio</h3>
              <p className="resume-place">Colégio Damas · 2021 – 2023</p>
            </div>
          </section>

          <section className="resume-block">
            <h2>Certificação e idiomas</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "0.96rem" }}>
              <strong>Cisco CCNA 200-301</strong> — em preparação
            </p>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.96rem",
                marginTop: 4,
              }}
            >
              <strong>Inglês</strong> — Upper-Intermediate/Avançado · Certificado ILSC
              Australia, 2024
            </p>
          </section>

          <section className="resume-block">
            <h2>Competências</h2>
            <div className="resume-cols">
              {competencias.map((grupo) => (
                <div className="resume-item" key={grupo.titulo}>
                  <h3 style={{ fontSize: "0.92rem" }}>{grupo.titulo}</h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                    {grupo.itens.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
