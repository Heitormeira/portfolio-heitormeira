"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/#sobre", label: "sobre" },
  { href: "/#status", label: "status" },
  { href: "/#experiencia", label: "experiência" },
  { href: "/#projetos", label: "projetos" },
  { href: "/#contato", label: "contato" },
  { href: "/forca", label: "forca" },
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
          heitormeira@noc
        </Link>

        <button
          type="button"
          className={`nav-toggle ${open ? "open" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>

        <nav aria-label="Seções do site">
          <ul className={`nav-links ${open ? "open" : ""}`}>
            {links.map((link) => {
              const active = !link.href.includes("#") && pathname === link.href;
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
                currículo
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
