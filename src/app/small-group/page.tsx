import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Small Group — Lion Intentional Fathers",
  description:
    "A 7-week small group for fathers at Man of War Church. September 14 – October 26, 2026. Scripture, accountability, and brotherhood.",
};

const curriculum = [
  {
    num: 1,
    title: "The Father God Intended",
    description: "Who is God as Father? What does His fatherhood reveal about ours? Genesis 1–3, Psalm 103:13, Matthew 7:11.",
  },
  {
    num: 2,
    title: "The Weight of the Crown",
    description: "What does biblical headship actually look like? Ephesians 5:25–33, Colossians 3:19. Sacrificial, not tyrannical.",
  },
  {
    num: 3,
    title: "Training Up Without Provoking",
    description: "Ephesians 6:4 unpacked. How to discipline in love, not anger. Deuteronomy 6:4–9 in the modern home.",
  },
  {
    num: 4,
    title: "The Praying Father",
    description: "Your weapon most neglected: intercession for your children. Mark 14:38, James 5:16, intercessory prayer practices.",
  },
  {
    num: 5,
    title: "Money, Work, and Priorities",
    description: "Stewarding what God entrusted. 1 Timothy 5:8, Matthew 6:33. Work-life balance is a myth — it's worship alignment.",
  },
  {
    num: 6,
    title: "Leading Through Crisis",
    description: "When your marriage is hard. When your kids rebel. When God feels silent. James 1:2–4, Psalm 46.",
  },
  {
    num: 7,
    title: "Leaving a Legacy",
    description: "Where do we go from here? Joshua 24:15, 2 Timothy 2:2. Building a plan. Committing to the men at your side.",
  },
];

export default function SmallGroupPage() {
  return (
    <>

      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="glow-orb glow-orb-warm w-[400px] h-[400px] top-0 left-1/4 opacity-[0.08]" />
        <div className="relative mx-auto max-w-4xl px-6 py-20 md:py-28 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-accent mb-6">
            Small Group
          </span>
          <h1
            className="text-4xl md:text-6xl font-bold leading-[1.1] mb-8 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            7 Weeks That Will
            <br />
            <span className="gradient-text-warm">Change Your Fatherhood</span>
          </h1>
          <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
            A men&apos;s small group at Man of War Church. Real talk. Real
            Scripture. Real accountability. It starts September 14.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

      {/* ═══ DETAILS BAR ═══ */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-surface/60 to-transparent" />
        <div className="relative mx-auto max-w-5xl px-6 py-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: "Starts", value: "September 14, 2026" },
              { label: "Duration", value: "7 Weeks" },
              { label: "Ends", value: "October 26, 2026" },
              { label: "Location", value: "Man of War Church" },
            ].map((item, i) => (
              <div key={i} className="py-2 sm:py-0">
                <div className="text-xs font-bold uppercase tracking-widest text-text-muted/60 mb-1.5">
                  {item.label}
                </div>
                <div
                  className="text-lg font-bold text-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHAT TO EXPECT ═══ */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-accent mb-4">
            What to Expect
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold leading-tight mb-8 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            This Is Not
            <br />
            <span className="gradient-text">a Bible Study</span>
          </h2>
          <div className="space-y-5 text-text-muted leading-relaxed">
            <p>
              It&apos;s better. A Bible study teaches you <em>about</em> God&apos;s
              Word. This group <em>lives</em> it.
            </p>
            <p>
              Each week, you&apos;ll walk in having read a passage and answered
              some hard questions about your own household. Then you&apos;ll sit
              with men who are in the trenches just like you — working through the
              text, confessing failures, celebrating wins, and committing to one
              concrete step for the week ahead.
            </p>
            <p>
              This is intercessory brotherhood: men who pray for each other,
              challenge each other, and refuse to let each other coast.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 mt-14">
          {[
            { icon: "📖", title: "Scripture-Centered", text: "Every week built around key passages on fatherhood, leadership, and the family." },
            { icon: "🤝", title: "Accountability", text: "Weekly check-ins. What did you do? What did you miss? No judgment — just faithfulness." },
            { icon: "⛪", title: "Church-Anchored", text: "Hosted at Man of War Church. Connected to the body. Not a side project." },
          ].map((card, i) => (
            <div key={i} className="card-soft p-6 text-center">
              <span className="text-3xl mb-3 block">{card.icon}</span>
              <h3 className="font-bold mb-2 text-sm" style={{ fontFamily: "var(--font-heading)" }}>{card.title}</h3>
              <p className="text-xs text-text-muted leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ CURRICULUM ═══ */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/30 to-transparent" />
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-accent mb-4">
              Curriculum Overview
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold leading-tight mb-4 text-balance"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              The 7-Week Journey
            </h2>
            <p className="text-text-muted max-w-xl mx-auto leading-relaxed">
              Each week builds on the last. By the end, you&apos;ll have a
              framework for your household that&apos;s rooted in the gospel, not
              culture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 lg:gap-5">
            {curriculum.map((week) => (
              <div
                key={week.num}
                className="card-soft p-6 md:p-7 group"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="shrink-0 w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent font-bold text-sm"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {week.num}
                  </div>
                  <div>
                    <h3
                      className="font-bold mb-1.5 text-base"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {week.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed">{week.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ QUOTE ═══ */}
      <section className="relative py-16 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/[0.03] to-transparent" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <div className="w-10 h-[1.5px] bg-accent/20 mx-auto mb-8" />
          <blockquote
            className="text-2xl md:text-3xl font-bold leading-snug italic text-foreground/90"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            &ldquo;As for me and my house, we will serve the Lord.&rdquo;
          </blockquote>
          <cite className="block mt-5 text-sm text-text-muted not-italic tracking-wide">
            — Joshua 24:15 (NIV)
          </cite>
          <div className="w-10 h-[1.5px] bg-accent/20 mx-auto mt-8" />
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
            RSVP Now
          </h2>
          <p className="text-text-muted leading-relaxed mb-10 max-w-lg mx-auto">
            Spots are limited to keep the group intimate. Tell us you&apos;re
            coming and we&apos;ll send you the details.
          </p>
          <a
            href="mailto:jeremy@lionheartdad.com?subject=Small Group RSVP"
            className="btn-primary"
          >
            Reserve Your Seat
          </a>
        </div>
      </section>

    </>
  );
}
