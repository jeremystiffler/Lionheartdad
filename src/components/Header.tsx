"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/small-group", label: "Small Group" },
  { href: "/camp", label: "Weekend Camp" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="text-2xl group-hover:scale-110 transition-transform duration-300">🦁</span>
          <span
            className="text-xl font-bold tracking-tight group-hover:text-accent transition-colors duration-300"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Lion
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-muted hover:text-foreground transition-colors duration-300 uppercase tracking-widest relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#join"
            className="btn-primary text-sm !py-2.5 !px-5 rounded-lg"
          >
            Join Us
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground text-2xl leading-none w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-light transition-colors"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="border-t border-border/50 bg-surface/95 backdrop-blur-sm px-6 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-text-muted hover:text-foreground transition-colors uppercase tracking-widest py-3 px-2 rounded-lg hover:bg-background/50"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#join"
            onClick={() => setOpen(false)}
            className="btn-primary text-sm text-center mt-2"
          >
            Join Us
          </Link>
        </nav>
      </div>
    </header>
  );
}
