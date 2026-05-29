"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/small-group", label: "Small Group" },
  { href: "/camp", label: "Camp" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-[#141210]/95 backdrop-blur-md border-border shadow-lg shadow-black/20"
          : "bg-[#141210]/80 backdrop-blur-sm border-transparent"
      }`}
    >
      <div className="container-wide flex items-center justify-between py-4 px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="text-2xl group-hover:scale-105 transition-transform duration-200">
            🦁
          </span>
          <span
            className="text-xl font-normal tracking-tight text-[#f5f0eb] hidden sm:inline"
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
              className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-[#8a7e74] hover:text-[#c9a85c] transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#c9a85c] after:transition-all after:duration-300 hover:after:w-full"
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
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="border-t border-border px-6 py-4 flex flex-col gap-1 bg-[#141210]/98 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[0.8rem] font-semibold tracking-[0.15em] uppercase text-[#c4b9ae] hover:text-[#c9a85c] py-3 transition-colors border-b border-border-light last:border-0"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
