import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>
          © {new Date().getFullYear()} Heitor Meira · Ciência da Computação — UNICAP
        </span>
        <span>
          <Link href="/">Portfólio</Link> · <Link href="/curriculo">Currículo</Link> ·{" "}
          <Link href="/forca">Jogo da Forca</Link> ·{" "}
          <a
            href="https://github.com/Heitormeira"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          ·{" "}
          <a
            href="https://linkedin.com/in/heitormeira/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </span>
      </div>
    </footer>
  );
}
