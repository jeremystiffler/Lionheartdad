import Link from "next/link";

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
    <div className="max-w-2xl mx-auto text-center mb-16">
      {eyebrow && (
        <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-accent mb-4">
          {eyebrow}
        </span>
      )}
      <h2
        className="text-3xl md:text-5xl font-bold leading-tight mb-5"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h2>
      {description && (
        <p className="text-lg text-text-muted leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-surface p-8 transition-all hover:border-accent/40 hover:bg-surface-light">
      <span className="text-3xl mb-4 block">{icon}</span>
      <h3
        className="text-xl font-bold mb-3"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h3>
      <p className="text-sm text-text-muted leading-relaxed">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface/60 via-transparent to-background pointer-events-none" />
        <div className="relative mx-auto max-w-5xl px-6 py-28 md:py-40 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-accent mb-6 border border-accent/30 rounded-full px-4 py-1.5">
            Brotherhood for Dads
          </span>
          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Be the Dad
            <br />
            <span className="text-accent">Your Sons Need</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl text-text-muted leading-relaxed mb-10">
            Not perfect. Present. Intentional. Lion is a brotherhood of men
            committed to raising the next generation with courage, faith, and
            sacrificial love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#join"
              className="inline-flex items-center justify-center rounded-md bg-accent px-8 py-4 text-base font-bold uppercase tracking-wider text-white hover:bg-accent-light transition-colors"
            >
              Get Involved
            </a>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-md border border-border px-8 py-4 text-base font-bold uppercase tracking-wider text-foreground hover:border-accent/50 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* ─── QUOTE BREAK ─── */}
      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <blockquote
            className="text-2xl md:text-3xl font-bold leading-snug italic text-foreground/90"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            &ldquo;Fathers, do not exasperate your children; instead, bring them
            up in the training and instruction of the Lord.&rdquo;
          </blockquote>
          <cite className="block mt-4 text-sm text-text-muted not-italic">
            — Ephesians 6:4 (NIV)
          </cite>
        </div>
      </section>

      {/* ─── THE PROBLEM ─── */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-accent mb-4">
              The Reality
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold leading-tight mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Fatherhood Doesn&apos;t Come With a Map
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
              <p className="text-foreground font-medium">
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
                className="rounded-xl border border-border bg-surface p-6 text-center"
              >
                <div
                  className="text-3xl md:text-4xl font-bold text-accent mb-2"
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

      {/* ─── WHAT WE DO ─── */}
      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeading
            eyebrow="Three Streams"
            title="How Lion Works"
            description="We meet men where they are — lunch meetings, a church small group, and a transformative weekend camp."
          />
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon="🍽️"
              title="Lunch Brotherhood"
              description="Every few weeks, a small group of fathers sit down for lunch, talk honestly, and work through real fatherhood topics — no judgment, just men pointing each other to Christ."
            />
            <FeatureCard
              icon="📖"
              title="Small Group"
              description="A 7-week journey through Scripture and honest conversation. Hosted at Man of War Church. Deep study, deeper fellowship. Starting September 14."
            />
            <FeatureCard
              icon="🏕️"
              title="Weekend Camp"
              description="A camp for 20 men. Outdoors. Unplugged. Raw. May 7–9, 2027. This is where walls come down and real transformation happens."
            />
          </div>
        </div>
      </section>

      {/* ─── WHO IS THIS FOR ─── */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <SectionHeading
          eyebrow="Is This For You?"
          title="Built for Men Who Refuse to Coast"
        />
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="rounded-xl border border-border bg-surface p-8">
            <p className="text-2xl font-bold mb-3">✓ This is for you if…</p>
            <ul className="space-y-3 text-text-muted">
              <li className="flex gap-3">
                <span className="text-accent mt-0.5">→</span>
                You have young kids and want to get ahead of the chaos
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-0.5">→</span>
                You have teens and feel the clock ticking
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-0.5">→</span>
                You grew up without a father and refuse to repeat the cycle
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-0.5">→</span>
                You&apos;re doing &ldquo;okay&rdquo; but know there&apos;s more
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-0.5">→</span>
                You need men around you who will tell you the truth
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-border bg-surface p-8">
            <p className="text-2xl font-bold mb-3">
              ✗ This isn&apos;t for you if…
            </p>
            <ul className="space-y-3 text-text-muted">
              <li className="flex gap-3">
                <span className="text-red-400/70 mt-0.5">→</span>
                You&apos;re looking for a lecture series
              </li>
              <li className="flex gap-3">
                <span className="text-red-400/70 mt-0.5">→</span>
                You want to stay on the surface
              </li>
              <li className="flex gap-3">
                <span className="text-red-400/70 mt-0.5">→</span>
                You&apos;re not willing to be honest about your struggles
              </li>
              <li className="flex gap-3">
                <span className="text-red-400/70 mt-0.5">→</span>
                You think you have it all figured out
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ─── CTA: JOIN ─── */}
      <section id="join" className="bg-surface border-y border-border">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-accent mb-6">
            Ready?
          </span>
          <h2
            className="text-3xl md:text-5xl font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Take the First Step
          </h2>
          <p className="text-lg text-text-muted leading-relaxed mb-10 max-w-xl mx-auto">
            Lion started with a handful of guys meeting over lunch. That&apos;s
            still the front door. You don&apos;t need to commit to anything.
            Just show up.
          </p>

          {/* Calendly placeholder */}
          <div className="rounded-xl border border-border bg-surface-light p-8 md:p-12 mb-8">
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
            {/* Calendly inline widget would go here */}
            <a
              href="mailto:jeremy@lionheartdad.com?subject=I'd like to get involved with Lion"
              className="inline-flex items-center justify-center rounded-md bg-accent px-8 py-4 text-base font-bold uppercase tracking-wider text-white hover:bg-accent-light transition-colors"
            >
              Reach Out Now
            </a>
            <p className="text-xs text-text-muted mt-4">
              (Calendly scheduling coming soon — email us for now)
            </p>
          </div>

          {/* Mailchimp signup placeholder */}
          <div className="rounded-xl border border-border bg-surface-light p-8 md:p-12">
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
            {/* Mailchimp embed would go here */}
            <a
              href="mailto:jeremy@lionheartdad.com?subject=Add me to the Lion email list"
              className="inline-flex items-center justify-center rounded-md border border-accent/50 px-8 py-4 text-base font-bold uppercase tracking-wider text-accent hover:bg-accent/10 transition-colors"
            >
              Join the List
            </a>
            <p className="text-xs text-text-muted mt-4">
              (Mailchimp signup form coming soon — email us to subscribe)
            </p>
          </div>
        </div>
      </section>

      {/* ─── FINAL WORD ─── */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <blockquote
          className="text-2xl md:text-3xl font-bold leading-snug text-foreground/90"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          &ldquo;The greatest thing a father can do for his children is love
          their mother — and point them to their Heavenly Father.&rdquo;
        </blockquote>
        <div className="mt-12">
          <p className="text-sm text-text-muted mb-1">— Jeremy Stiffler</p>
          <p className="text-xs text-text-muted/60">Founder, Lion</p>
        </div>
      </section>
    </>
  );
}
