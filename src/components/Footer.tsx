import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-[#0d0b09]">
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <span className="text-2xl">🦁</span>
              <span
                className="text-xl font-normal text-[#f5f0eb]"
                style={{ fontFamily: "var(--heading)" }}
              >
                Lion
              </span>
            </Link>
            <p className="text-sm text-[#8a7e74] max-w-xs leading-relaxed">
              Equipping men to be the fathers God called them to be. Rooted in
              Scripture. Built on brotherhood.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4
              className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-[#c9a85c] mb-5"
            >
              Navigate
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { href: "/about", label: "About" },
                { href: "/small-group", label: "Small Group" },
                { href: "/camp", label: "Weekend Camp" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#8a7e74] hover:text-[#c9a85c] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Get Involved */}
          <div>
            <h4
              className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-[#c9a85c] mb-5"
            >
              Get Involved
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:jeremy@lionheartdad.com"
                className="text-sm text-[#8a7e74] hover:text-[#c9a85c] transition-colors"
              >
                Email Jeremy
              </a>
              <a
                href="https://calendly.com/jeremystiffler/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#8a7e74] hover:text-[#c9a85c] transition-colors"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[0.7rem] text-[#8a7e74] tracking-wide">
            © {new Date().getFullYear()} Lion — Intentional Fathers. All rights
            reserved.
          </p>
          <p className="text-[0.7rem] text-[#8a7e74]/60">
            Lexington, Kentucky
          </p>
        </div>
      </div>
    </footer>
  );
}
