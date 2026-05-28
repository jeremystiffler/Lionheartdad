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
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="text-2xl">🦁</span>
          <span
            className="text-xl font-bold tracking-tight group-hover:text-accent transition-colors"
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
              className="text-sm font-medium text-text-muted hover:text-foreground transition-colors uppercase tracking-widest"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#join"
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-white hover:bg-accent-light transition-colors"
          >
            Join Us
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground text-2xl leading-none"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden border-t border-border bg-surface px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-text-muted hover:text-foreground transition-colors uppercase tracking-widest py-2"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#join"
            onClick={() => setOpen(false)}
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-white text-center hover:bg-accent-light transition-colors"
          >
            Join Us
          </Link>
        </nav>
      )}
    </header>
  );
}
