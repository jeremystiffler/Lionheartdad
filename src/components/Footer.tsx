import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-[#0f0d0b]">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-3">
              <span className="text-lg">🦁</span>
              <span
                className="text-base font-normal text-[#f5f0eb]"
                style={{ fontFamily: "var(--heading)" }}
              >
                Lion
              </span>
            </Link>
            <p className="text-sm text-[#8a7e74] max-w-xs leading-relaxed">
              Equipping men to be the fathers God called them to be.
              Rooted in Scripture. Built on brotherhood.
            </p>
          </div>

          {/* Navigate */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              { href: "/about", label: "About" },
              { href: "/small-group", label: "Small Group" },
              { href: "/camp", label: "Camp" },
              { href: "/blog", label: "Blog" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-[#8a7e74] hover:text-[#c9a85c] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[0.7rem] text-[#8a7e74] tracking-wide">
            © {new Date().getFullYear()} Lion — Intentional Fathers. All rights reserved.
          </p>
          <p className="text-[0.7rem] text-[#8a7e74]/60">
            Lexington, Kentucky
          </p>
        </div>
      </div>
    </footer>
  );
}
