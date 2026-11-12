import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Heitor Meira — Redes e Infraestrutura",
  description:
    "Heitor Meira — estudante de Ciência da Computação na UNICAP e estagiário de redes na UM Telecom. Redes, infraestrutura de TI e telecomunicações, em preparação para o CCNA 200-301.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300..800&family=JetBrains+Mono:wght@400;500;700&display=swap"
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
