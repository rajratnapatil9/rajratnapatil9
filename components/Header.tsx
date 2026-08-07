"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon } from "./Icon";

const nav = [
  ["Home", "/"],
  ["About", "/about/"],
  ["Projects", "/projects/"],
  ["Certifications", "/certifications/"],
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">RP</span>
          <span>Rajratna Patil</span>
        </Link>

        <nav className={`nav-links ${open ? "is-open" : ""}`} aria-label="Primary navigation">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>
          ))}
          <a className="nav-cta" href="mailto:rajratnapatil9@gmail.com" onClick={() => setOpen(false)}>Let&apos;s connect</a>
        </nav>

        <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>
    </header>
  );
}
