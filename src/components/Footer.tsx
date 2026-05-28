import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🦁</span>
              <span
                className="text-xl font-bold"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Lion
              </span>
            </Link>
            <p className="text-sm text-text-muted leading-relaxed">
              Equipping men to be the fathers God called them to be.
              Rooted in Scripture. Built on brotherhood.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-text-muted mb-4">
              Navigate
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-text-muted hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/small-group" className="text-sm text-text-muted hover:text-foreground transition-colors">
                  Small Group
                </Link>
              </li>
              <li>
                <Link href="/camp" className="text-sm text-text-muted hover:text-foreground transition-colors">
                  Weekend Camp
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-text-muted hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-text-muted mb-4">
              Get in Touch
            </h4>
            <p className="text-sm text-text-muted mb-4">
              Want to talk? Want to join? Reach out.
            </p>
            <a
              href="mailto:jeremy@lionheartdad.com"
              className="text-sm font-medium text-accent hover:text-accent-light transition-colors"
            >
              jeremy@lionheartdad.com
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} Lion — Intentional Fathers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
