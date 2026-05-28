import Link from "next/link";

/* ─── Shared Components ─── */

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl mx-auto text-center mb-16 md:mb-20">
      {eyebrow && (
        <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-accent mb-5 animate-fade-in-up">
          {eyebrow}
        </span>
      )}
      <h2
        className="text-3xl md:text-5xl font-bold leading-tight mb-5 text-balance animate-fade-in-up stagger-1"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h2>
      {description && (
        <p className="text-lg text-text-muted leading-relaxed animate-fade-in-up stagger-2">
          {description}
        </p>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════
   HOME PAGE
   ═══════════════════════════════════════════ */

export default function Home() {
  return (
    <>

      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center">
        {/* Ambient glow orbs */}
        <div className="glow-orb glow-orb-accent w-[600px] h-[600px] -top-40 -left-40 animate-pulse-glow" />
        <div className="glow-orb glow-orb-warm w-[400px] h-[400px] top-1/3 -right-20 animate-pulse-glow stagger-3" />
        <div className="glow-orb glow-orb-accent w-[300px] h-[300px] bottom-0 left-1/3 opacity-[0.06]" />

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface/40 via-transparent to-background pointer-events-none" />

        <div className="relative mx-auto max-w-5xl px-6 py-24 md:py-32 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-accent mb-8 border border-accent/20 rounded-full px-5 py-2 bg-accent/5 backdrop-blur-sm animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Brotherhood for Dads
          </span>

          <h1
            className="text-5xl sm:text-6xl md:text-8xl font-bold leading-[1.05] mb-8 text-balance animate-fade-in-up stagger-1"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Be the Dad
            <br />
            <span className="gradient-text-warm">Your Sons Need</span>
          </h1>

          <p className="max-w-xl mx-auto text-lg md:text-xl text-text-muted leading-relaxed mb-12 animate-fade-in-up stagger-2">
            Not perfect. Present. Intentional. Lion is a brotherhood of men
            committed to raising the next generation with courage, faith, and
            sacrificial love.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-3">
            <a href="#join" className="btn-primary text-base">
              Get Involved
            </a>
            <Link href="/about" className="btn-secondary text-base">
              Learn More
            </Link>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

      {/* ═══ QUOTE BREAK ═══ */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/[0.03] to-transparent" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <div className="w-10 h-[1.5px] bg-accent/30 mx-auto mb-8" />
          <blockquote
            className="text-2xl md:text-3xl font-bold leading-snug italic text-foreground/90"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            &ldquo;Fathers, do not exasperate your children; instead, bring them
            up in the training and instruction of the Lord.&rdquo;
          </blockquote>
          <cite className="block mt-5 text-sm text-text-muted not-italic tracking-wide">
            — Ephesians 6:4 (NIV)
          </cite>
          <div className="w-10 h-[1.5px] bg-accent/30 mx-auto mt-8" />
        </div>
      </section>

      {/* ═══ THE REALITY ═══ */}
      <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-accent mb-4">
              The Reality
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-balance"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Fatherhood Doesn&apos;t
              <br /> Come With a Map
            </h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                You love your kids. You show up. But somewhere between the
                morning chaos, the work deadlines, and the bedtime battles,
                intentionality gets lost.
              </p>
              <p>
                Most men are winging it. And most men are doing it alone.
                There&apos;s no playbook. No one asking the hard questions. No one
                calling you higher.
              </p>
              <p className="text-foreground font-semibold text-lg">
                That ends here.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { num: "71%", label: "of youth suicides come from fatherless homes" },
              { num: "63%", label: "of teen suicides are from fatherless homes" },
              { num: "85%", label: "of kids with behavioral disorders lack a father figure" },
              { num: "90%", label: "of homeless youth are from fatherless homes" },
            ].map((stat, i) => (
              <div
                key={i}
                className="card-soft p-6 text-center group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className="text-3xl md:text-4xl font-bold gradient-text mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {stat.num}
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHAT WE DO ═══ */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/40 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Three Streams"
            title="How Lion Works"
            description="We meet men where they are — lunch meetings, a church small group, and a transformative weekend camp."
          />
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: "🍽️",
                title: "Lunch Brotherhood",
                description: "Every few weeks, a small group of fathers sit down for lunch, talk honestly, and work through real fatherhood topics — no judgment, just men pointing each other to Christ.",
              },
              {
                icon: "📖",
                title: "Small Group",
                description: "A 7-week journey through Scripture and honest conversation. Hosted at Man of War Church. Deep study, deeper fellowship. Starting September 14.",
              },
              {
                icon: "🏕️",
                title: "Weekend Camp",
                description: "A camp for 20 men. Outdoors. Unplugged. Raw. May 7–9, 2027. This is where walls come down and real transformation happens.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="card-elevated p-8 md:p-10 group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl">{card.icon}</span>
                  <h3
                    className="text-xl font-bold"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {card.title}
                  </h3>
                </div>
                <p className="text-sm text-text-muted leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHO IS THIS FOR ═══ */}
      <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <SectionHeading
          eyebrow="Is This For You?"
          title="Built for Men Who Refuse to Coast"
        />
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          <div className="card-soft p-8 md:p-10">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-2xl">✓</span>
              <p className="text-lg font-bold" style={{ fontFamily: "var(--font-heading)" }}>This is for you if…</p>
            </div>
            <ul className="space-y-3.5 text-text-muted">
              {[
                "You have young kids and want to get ahead of the chaos",
                "You have teens and feel the clock ticking",
                "You grew up without a father and refuse to repeat the cycle",
                "You're doing \"okay\" but know there's more",
                "You need men around you who will tell you the truth",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-accent mt-0.5 text-sm">→</span>
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-soft p-8 md:p-10 opacity-80">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-2xl">✗</span>
              <p className="text-lg font-bold" style={{ fontFamily: "var(--font-heading)" }}>This isn&apos;t for you if…</p>
            </div>
            <ul className="space-y-3.5 text-text-muted">
              {[
                "You're looking for a lecture series",
                "You want to stay on the surface",
                "You're not willing to be honest about your struggles",
                "You think you have it all figured out",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-red-400/60 mt-0.5 text-sm">→</span>
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ CTA: JOIN ═══ */}
      <section id="join" className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/50 to-transparent" />

        {/* Ambient glow */}
        <div className="glow-orb glow-orb-accent w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.08]" />

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-accent mb-6">
            Ready?
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Take the First Step
          </h2>
          <p className="text-lg text-text-muted leading-relaxed mb-12 max-w-xl mx-auto">
            Lion started with a handful of guys meeting over lunch. That&apos;s
            still the front door. You don&apos;t need to commit to anything.
            Just show up.
          </p>

          <div className="space-y-6 max-w-lg mx-auto">
            {/* Book a Call */}
            <div className="card-elevated p-8 md:p-10 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-2xl">📅</span>
                <h3
                  className="text-xl font-bold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Book a Call
                </h3>
              </div>
              <p className="text-sm text-text-muted mb-6">
                Schedule a 15-minute chat with Jeremy. No pressure. Just a
                conversation.
              </p>
              <a
                href="mailto:jeremy@lionheartdad.com?subject=I'd like to get involved with Lion"
                className="btn-primary w-full sm:w-auto"
              >
                Reach Out Now
              </a>
              <p className="text-xs text-text-muted mt-4 opacity-60">
                (Calendly scheduling coming soon — email us for now)
              </p>
            </div>

            {/* Email List */}
            <div className="card-soft p-8 md:p-10 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-2xl">✉️</span>
                <h3
                  className="text-xl font-bold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Stay in the Loop
                </h3>
              </div>
              <p className="text-sm text-text-muted mb-6">
                Get occasional emails — a verse, a thought for dads, and updates
                from Lion. No spam. Just substance.
              </p>
              <a
                href="mailto:jeremy@lionheartdad.com?subject=Add me to the Lion email list"
                className="btn-secondary w-full sm:w-auto"
              >
                Join the List
              </a>
              <p className="text-xs text-text-muted mt-4 opacity-60">
                (Mailchimp signup form coming soon — email us to subscribe)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FINAL WORD ═══ */}
      <section className="mx-auto max-w-3xl px-6 py-20 md:py-28 text-center">
        <div className="w-10 h-[1.5px] bg-accent/20 mx-auto mb-8" />
        <blockquote
          className="text-2xl md:text-3xl font-bold leading-snug text-foreground/80 italic"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          &ldquo;The greatest thing a father can do for his children is love
          their mother — and point them to their Heavenly Father.&rdquo;
        </blockquote>
        <div className="mt-8">
          <div className="w-12 h-12 rounded-full bg-surface-light border-2 border-accent/20 mx-auto mb-3 flex items-center justify-center text-xl">
            🦁
          </div>
          <p className="text-sm font-semibold text-foreground mb-0.5">Jeremy Stiffler</p>
          <p className="text-xs text-text-muted/60">Founder, Lion</p>
        </div>
        <div className="w-10 h-[1.5px] bg-accent/20 mx-auto mt-8" />
      </section>

    </>
  );
}
