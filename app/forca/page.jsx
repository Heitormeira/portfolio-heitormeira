import Link from "next/link";
import HangmanGame from "@/components/HangmanGame";

export const metadata = {
  title: "Jogo da Forca — Heitor Meira",
  description:
    "Jogo da forca com palavras do futebol brasileiro, cultura de Pernambuco, tecnologia e redes. Um projeto prático do portfólio de Heitor Meira.",
};

export default function ForcaPage() {
  return (
    <div className="forca-page">
      <div className="container">
        <Link href="/" className="back-link">
          ← Voltar ao portfólio
        </Link>

        <div className="forca-header">
          <span className="eyebrow" style={{ justifyContent: "center" }}>
            Projeto prático
          </span>
          <h1 className="section-title">Jogo da Forca</h1>
          <p className="section-sub">
            Palavras do <strong>futebol brasileiro</strong>, da <strong>cultura de
            Pernambuco</strong> e da <strong>tecnologia e redes</strong>. Escolha uma
            letra, descubra a palavra — e cuide das suas 6 tentativas, Timbu!
          </p>
        </div>

        <HangmanGame />
      </div>
    </div>
  );
}
