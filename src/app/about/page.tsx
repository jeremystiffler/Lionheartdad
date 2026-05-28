import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Lion Intentional Fathers",
  description:
    "Learn about Lion and Jeremy Stiffler's vision for equipping fathers through biblical brotherhood, mentorship, and intentional community.",
};

export default function AboutPage() {
  return (
    <>

      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden min-h-[50vh] flex items-center">
        <div className="glow-orb glow-orb-accent w-[500px] h-[500px] -top-40 right-0 opacity-[0.06]" />
        <div className="relative mx-auto max-w-4xl px-6 py-20 md:py-28 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-accent mb-6">
            About
          </span>
          <h1
            className="text-4xl md:text-6xl font-bold leading-[1.1] mb-8 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            About Lion
          </h1>
          <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
            This is about more than good intentions. It&apos;s about a
            generation of fathers choosing, deliberately, to lead their homes
            with the gospel at the center.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

      {/* ═══ SCRIPTURE BREAK ═══ */}
      <section className="relative py-16 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/[0.03] to-transparent" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <div className="w-10 h-[1.5px] bg-accent/20 mx-auto mb-8" />
          <blockquote
            className="text-2xl md:text-3xl font-bold leading-snug italic text-foreground/90"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            &ldquo;For I have chosen him, so that he will direct his children
            and his household after him to keep the way of the Lord by doing
            what is right and just.&rdquo;
          </blockquote>
          <cite className="block mt-5 text-sm text-text-muted not-italic tracking-wide">
            — Genesis 18:19 (NIV)
          </cite>
          <div className="w-10 h-[1.5px] bg-accent/20 mx-auto mt-8" />
        </div>
      </section>

      {/* ═══ JEREMY STORY ═══ */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
          {/* Profile Card */}
          <div className="md:col-span-2">
            <div className="card-elevated p-8 text-center sticky top-24">
              <div className="w-24 h-24 rounded-full bg-surface-elevated border-2 border-accent/20 mx-auto mb-5 flex items-center justify-center text-5xl shadow-lg shadow-accent/5">
                🦁
              </div>
              <h3
                className="text-xl font-bold mb-1"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Jeremy Stiffler
              </h3>
              <p className="text-sm text-text-muted mb-4">
                Lexington, Kentucky
              </p>
              <div className="flex flex-wrap gap-2 justify-center text-xs text-text-muted">
                {[
                  "Father of boys (8 & 11)",
                  "Worship Leader",
                  "AV/Media Director",
                  "Musician & Songwriter",
                ].map((tag) => (
                  <span key={tag} className="rounded-full border border-border/60 px-3 py-1 bg-background/50">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Story */}
          <div className="md:col-span-3 space-y-6">
            <h2
              className="text-3xl md:text-4xl font-bold text-foreground text-balance"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              A Dad Who Decided
              <br />
              <span className="gradient-text">to Get Serious</span>
            </h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                It started simply: a handful of guys, meeting over lunch, talking
                about what it actually means to lead your family when the world
                is pulling your kids in a hundred directions.
              </p>
              <p>
                Jeremy Stiffler isn&apos;t a professional counselor or a
                seminary professor. He&apos;s a dad. A worship leader at Man of
                War Church in Lexington, KY. A multi-instrumentalist and songwriter
                who&apos;s spent years helping churches encounter God through
                music. And a father of two boys, ages 8 and 11, who knows firsthand
                that loving your kids well is the hardest, holy work you&apos;ll
                ever do.
              </p>
              <blockquote
                className="text-lg font-semibold text-foreground/80 border-l-[3px] border-accent/40 pl-5 py-2 italic"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                &ldquo;I kept running into guys who loved their families but had
                no one holding them accountable. No brotherhood. No one asking,
                &lsquo;How are you really doing as a father?&rsquo; I knew that
                had to change.&rdquo;
              </blockquote>
              <p>
                So Lion was born — not as a program, but as a commitment. A small
                group of men who decided they would rather be intentional fathers
                than accidental ones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ THE VISION ═══ */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/30 to-transparent" />
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-accent mb-4">
                The Vision
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-balance"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                15 Years From Now
              </h2>
              <p className="text-text-muted leading-relaxed mb-6">
                The vision isn&apos;t small. Over the next 15 years, Lion aims
                to see a network of fathers and young men across communities —
                men who were discipled as dads, who disciple their sons, who
                then disciple the next generation.
              </p>
              <p className="text-text-muted leading-relaxed">
                It&apos;s a multiplication model. One father impacts his
                household. His sons learn to lead. And the cycle breaks:
                generations of passive, disengaged fatherhood replaced by men
                who lead with courage and humility.
              </p>
            </div>

            <div className="space-y-4">
              <h3
                className="text-lg font-bold text-foreground mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                What We&apos;re Building Toward
              </h3>
              {[
                {
                  phase: "Now → 2027",
                  text: "Weekly lunch brotherhoods. Church small groups. First weekend camp (20 men, May 2027).",
                },
                {
                  phase: "2027 → 2029",
                  text: "Multiple small groups running concurrently. Annual camps scaling to 50+ men. Youth mentorship pilot.",
                },
                {
                  phase: "2029 → 2032",
                  text: "Regional expansion. Father-son retreats. Emerging men's ministry for young adults.",
                },
                {
                  phase: "2032 → 2041",
                  text: "A generation of fathers who were fathered well, now fathering the next. The vision compounds.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="card-soft p-5"
                >
                  <div className="text-xs font-bold uppercase tracking-widest text-accent mb-2">
                    {item.phase}
                  </div>
                  <p className="text-sm text-text-muted">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ THEOLOGY / FOUNDATION ═══ */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-accent mb-4">
              Our Foundation
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold leading-tight mb-8 text-balance"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Not Self-Help.
              <br />
              <span className="gradient-text">Scripture.</span>
            </h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                Lion is not a motivational seminar. We don&apos;t believe
                there&apos;s a 5-step system to being a great dad. We believe
                there&apos;s a God who designed fatherhood, and that His Word is
                sufficient.
              </p>
              <p>
                Our approach is simple: gather men around Scripture, make space
                for honest conversation, and hold each other accountable to live
                what we read.
              </p>
              <p className="text-foreground font-semibold pt-2">We believe:</p>
            </div>
          </div>

          <div className="card-elevated p-8 md:p-10">
            <ul className="space-y-4 text-sm">
              {[
                "The Bible is the authoritative guide for fatherhood and family.",
                "Fathers are called to lead — not with tyranny, but with sacrificial love, the way Christ leads the Church.",
                "Children are a heritage from the Lord — a sacred trust, not an accident.",
                "Accountability is not optional for the man of God.",
                "Brotherhood is biblical: iron sharpens iron.",
                "The local church is central — we do this inside the body, not apart from it.",
              ].map((belief, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-accent mt-0.5 shrink-0 opacity-70">✝</span>
                  <span className="text-text-muted leading-relaxed">{belief}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/40 to-transparent" />
        <div className="glow-orb glow-orb-accent w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06]" />
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <h2
            className="text-2xl md:text-4xl font-bold leading-tight mb-6 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Join the Brotherhood
          </h2>
          <p className="text-text-muted leading-relaxed mb-10 max-w-md mx-auto">
            The front door is a lunch table. Pull up a chair.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/small-group" className="btn-primary">
              Small Group Info
            </Link>
            <Link href="/camp" className="btn-secondary">
              Weekend Camp 2027
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
