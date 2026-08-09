"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/data/site";

const nav = [
  ["Home", "/"],
  ["About", "/about/"],
  ["Projects", "/projects/"],
  ["Certifications", "/certifications/"],
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <span className="brand-mark">{site.shortName}</span>
          <span>{site.name}</span>
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${open ? "is-open" : ""}`} aria-label="Main navigation">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <a className="nav-cta" href={`mailto:${site.email}`} onClick={() => setOpen(false)}>
            Let&apos;s connect
          </a>
        </nav>
      </div>
    </header>
  );
}
