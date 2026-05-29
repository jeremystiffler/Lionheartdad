"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/small-group", label: "Small Group" },
  { href: "/camp", label: "Camp" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#141210]/90 backdrop-blur-sm border-b border-border">
      <div className="container-wide flex items-center justify-between py-5 px-6">
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="text-xl">🦁</span>
          <span
            className="text-lg font-normal tracking-tight text-[#f5f0eb]"
            style={{ fontFamily: "var(--heading)" }}
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
              className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-[#8a7e74] hover:text-[#c9a85c] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 flex items-center justify-center text-[#f5f0eb] text-lg"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden border-t border-border px-6 py-4 flex flex-col gap-1 bg-[#141210]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[0.75rem] font-semibold tracking-[0.15em] uppercase text-[#c4b9ae] hover:text-[#c9a85c] py-3 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
