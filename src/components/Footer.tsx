import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-auto">
      {/* Top glow line */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <span className="text-2xl group-hover:scale-110 transition-transform duration-300">🦁</span>
              <span
                className="text-xl font-bold"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Lion
              </span>
            </Link>
            <p className="text-sm text-text-muted leading-relaxed max-w-xs">
              Equipping men to be the fathers God called them to be.
              Rooted in Scripture. Built on brotherhood.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-text-muted mb-4">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/about", label: "About" },
                { href: "/small-group", label: "Small Group" },
                { href: "/camp", label: "Weekend Camp" },
                { href: "/blog", label: "Blog" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-foreground transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-[1.5px] bg-accent transition-all duration-300 shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-text-muted mb-4">
              Get in Touch
            </h4>
            <p className="text-sm text-text-muted mb-4 leading-relaxed">
              Want to talk? Want to join? Reach out.
            </p>
            <a
              href="mailto:jeremy@lionheartdad.com"
              className="text-sm font-medium text-accent hover:text-accent-light transition-colors duration-300 inline-flex items-center gap-2"
            >
              <span>✉️</span> jeremy@lionheartdad.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} Lion — Intentional Fathers. All rights reserved.
          </p>
          <p className="text-xs text-text-muted/60">
            Made with faith in Lexington, KY
          </p>
        </div>
      </div>
    </footer>
  );
}
