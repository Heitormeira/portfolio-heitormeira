import Link from "next/link";
import PrintButton from "@/components/PrintButton";

export const metadata = {
  title: "Currículo — Heitor Meira",
  description:
    "Currículo de Heitor Meira — estudante de Ciência da Computação (UNICAP), estagiário na UM Telecom, com foco em Redes, Infraestrutura de TI e Telecomunicações.",
};

const experiencias = [
  {
    cargo: "Estagiário",
    org: "UM Telecom — Recife, Pernambuco",
    periodo: "2026 – Atual",
    atual: true,
    desc: "Atuação na área de tecnologia, com foco em Infraestrutura de TI, Redes e Telecomunicações.",
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
    titulo: "Redes e Infraestrutura",
    itens: [
      "Mininet",
      "Wireshark",
      "Docker",
      "Oracle VirtualBox",
      "Linux",
      "TCP/IP",
      "DNS",
      "DHCP",
      "Roteamento",
      "VLAN",
      "QoS",
      "Segurança de Redes",
    ],
  },
  {
    titulo: "Linguagens",
    itens: ["Java", "Python", "C", "Bash/Shell", "JavaScript"],
  },
  {
    titulo: "Programação",
    itens: ["POO", "Estruturas de Dados", "Lógica de Programação"],
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
        <div className="resume-actions" style={{ marginTop: 0, marginBottom: 26 }}>
          <PrintButton />
          <Link href="/" className="btn btn-ghost">
            ← Voltar ao portfólio
          </Link>
        </div>

        <article className="resume-sheet">
          <header>
            <h1>Heitor Meira</h1>
            <p className="resume-headline">
              Estudante de Ciência da Computação · Estagiário na UM Telecom
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
            <p style={{ color: "var(--text-muted)", fontSize: "0.94rem" }}>
              Estudante de Bacharelado em Ciência da Computação na UNICAP (2024 – 2028),
              atualmente iniciando minha trajetória profissional como estagiário na UM
              Telecom, com direcionamento para Redes, Infraestrutura de TI e
              Telecomunicações. Experiência anterior em suporte de TI, análise de
              infraestrutura e tratamento de dados no SINDHOSPE. Estudo contínuo por
              meio de laboratórios práticos com Mininet, Wireshark, Docker e Linux.
            </p>
          </section>

          <section className="resume-block">
            <h2>Experiência</h2>
            {experiencias.map((exp) => (
              <div className="resume-item" key={exp.org} style={{ marginBottom: 18 }}>
                <h3>
                  {exp.cargo}{" "}
                  {exp.atual && (
                    <span
                      className="tag tag-now"
                      style={{ marginLeft: 8, fontSize: "0.68rem" }}
                    >
                      Atual
                    </span>
                  )}
                </h3>
                <p className="resume-place">{exp.org}</p>
                <p className="resume-period">{exp.periodo}</p>
                {exp.desc && (
                  <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: 6 }}>
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
                UNICAP — Universidade Católica de Pernambuco · 2024 – 2028 (em andamento)
              </p>
            </div>
            <div className="resume-item">
              <h3>Ensino Médio</h3>
              <p className="resume-place">Colégio Damas · 2021 – 2023</p>
            </div>
          </section>

          <section className="resume-block">
            <h2>Idiomas</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "0.92rem" }}>
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
                  <p style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>
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
