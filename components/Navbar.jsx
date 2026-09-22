"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Início" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#experiencia", label: "Experiência" },
  { href: "/#projetos", label: "Projetos" },
  { href: "/#contato", label: "Contato" },
  { href: "/forca", label: "Jogo da Forca" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link href="/" className="brand" aria-label="Heitor Meira — início">
          <span className="brand-dot" aria-hidden="true" />
          Heitor Meira
        </Link>

        <button
          className={`nav-toggle ${open ? "open" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>

        <nav>
          <ul className={`nav-links ${open ? "open" : ""}`}>
            {links.map((link) => {
              const active =
                link.href === "/" ? pathname === "/" : pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={active ? "active" : undefined}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link href="/curriculo" className="nav-cta" onClick={closeMenu}>
                Currículo
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
