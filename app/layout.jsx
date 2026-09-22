import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Heitor Meira — Portfólio",
  description:
    "Estudante de Ciência da Computação na UNICAP e estagiário na UM Telecom, com foco em Redes, Infraestrutura de TI e Telecomunicações.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
