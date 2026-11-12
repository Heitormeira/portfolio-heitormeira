import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Heitor Meira — Redes e Infraestrutura",
  description:
    "Heitor Meira — estudante de Ciência da Computação na UNICAP e estagiário de redes na UM Telecom (equipe N2 · CMC). Provisionamento e configuração de clientes em MikroTik, Datacom, Huawei e Juniper; VLANs, upgrades de banda e documentação técnica.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Source+Sans+3:ital,wght@0,300..700;1,400&display=swap"
        />
        <a className="skip-link" href="#conteudo">
          Ir para o conteúdo
        </a>
        <Navbar />
        <main id="conteudo">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
