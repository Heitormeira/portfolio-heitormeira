import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Heitor Meira · Recife, Pernambuco</span>
        <span>
          <Link href="/curriculo">currículo</Link> · <Link href="/forca">forca</Link> ·{" "}
          <a
            href="https://github.com/Heitormeira"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>{" "}
          ·{" "}
          <a
            href="https://linkedin.com/in/heitormeira/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
        </span>
      </div>
    </footer>
  );
}
