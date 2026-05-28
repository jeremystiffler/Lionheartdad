import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Small Group — Lion Intentional Fathers",
  description:
    "A 7-week small group for fathers at Man of War Church. September 14 – October 26, 2026. Scripture, accountability, and brotherhood.",
};

function WeekCard({
  num,
  title,
  description,
}: {
  num: number;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-surface p-6 md:p-8">
      <div className="text-xs font-bold uppercase tracking-widest text-accent mb-1">
        Week {num}
      </div>
      <h3
        className="text-lg font-bold mb-2"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h3>
      <p className="text-sm text-text-muted leading-relaxed">{description}</p>
    </div>
  );
}

export default function SmallGroupPage() {
  return (
    <>
      {/* HERO */}
      <section>
        <div className="mx-auto max-w-4xl px-6 py-24 md:py-32 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-accent mb-6">
            Small Group
          </span>
          <h1
            className="text-4xl md:text-6xl font-bold leading-[1.1] mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            7 Weeks That Will
            <br />
            Change Your Fatherhood
          </h1>
          <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
            A men&apos;s small group at Man of War Church. Real talk. Real
            Scripture. Real accountability. It starts September 14.
          </p>
        </div>
      </section>

      {/* DETAILS BAR */}
      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-border">
            <div className="py-2 sm:py-0">
              <div className="text-xs font-bold uppercase tracking-widest text-text-muted mb-1">
                Starts
              </div>
              <div className="text-lg font-bold text-foreground">
                September 14, 2026
              </div>
            </div>
            <div className="py-2 sm:py-0">
              <div className="text-xs font-bold uppercase tracking-widest text-text-muted mb-1">
                Duration
              </div>
              <div className="text-lg font-bold text-foreground">
                7 Weeks
              </div>
            </div>
            <div className="py-2 sm:py-0">
              <div className="text-xs font-bold uppercase tracking-widest text-text-muted mb-1">
                Ends
              </div>
              <div className="text-lg font-bold text-foreground">
                October 26, 2026
              </div>
            </div>
            <div className="py-2 sm:py-0">
              <div className="text-xs font-bold uppercase tracking-widest text-text-muted mb-1">
                Location
              </div>
              <div className="text-lg font-bold text-foreground">
                Man of War Church
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-accent mb-4">
          What to Expect
        </span>
        <h2
          className="text-3xl md:text-4xl font-bold leading-tight mb-8"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          This Is Not a Bible Study
        </h2>
        <div className="space-y-6 text-text-muted leading-relaxed max-w-3xl">
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

        <div className="grid sm:grid-cols-3 gap-6 mt-12">
          <div className="rounded-xl border border-border bg-surface p-6 text-center">
            <span className="text-3xl mb-3 block">📖</span>
            <h3 className="font-bold mb-1">Scripture-Centered</h3>
            <p className="text-xs text-text-muted">
              Every week built around key passages on fatherhood, leadership,
              and the family.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-6 text-center">
            <span className="text-3xl mb-3 block">🤝</span>
            <h3 className="font-bold mb-1">Accountability</h3>
            <p className="text-xs text-text-muted">
              Weekly check-ins. What did you do? What did you miss? No
              judgment — just faithfulness.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-6 text-center">
            <span className="text-3xl mb-3 block">⛪</span>
            <h3 className="font-bold mb-1">Church-Anchored</h3>
            <p className="text-xs text-text-muted">
              Hosted at Man of War Church. Connected to the body. Not a
              side project.
            </p>
          </div>
        </div>
      </section>

      {/* CURRICULUM OVERVIEW */}
      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-accent mb-4 text-center block">
            Curriculum Overview
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold leading-tight mb-4 text-center"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            The 7-Week Journey
          </h2>
          <p className="text-center text-text-muted max-w-xl mx-auto mb-12">
            Each week builds on the last. By the end, you&apos;ll have a
            framework for your household that&apos;s rooted in the gospel, not
            culture.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <WeekCard
              num={1}
              title="The Father God Intended"
              description="Who is God as Father? What does His fatherhood reveal about ours? Genesis 1–3, Psalm 103:13, Matthew 7:11."
            />
            <WeekCard
              num={2}
              title="The Weight of the Crown"
              description="What does biblical headship actually look like? Ephesians 5:25–33, Colossians 3:19. Sacrificial, not tyrannical."
            />
            <WeekCard
              num={3}
              title="Training Up Without Provoking"
              description="Ephesians 6:4 unpacked. How to discipline in love, not anger. Deuteronomy 6:4–9 in the modern home."
            />
            <WeekCard
              num={4}
              title="The Praying Father"
              description="Your weapon most neglected: intercession for your children. Mark 14:38, James 5:16, intercessory prayer practices."
            />
            <WeekCard
              num={5}
              title="Money, Work, and Priorities"
              description="Stewarding what God entrusted. 1 Timothy 5:8, Matthew 6:33. Work-life balance is a myth — it's worship alignment."
            />
            <WeekCard
              num={6}
              title="Leading Through Crisis"
              description="When your marriage is hard. When your kids rebel. When God feels silent. James 1:2–4, Psalm 46."
            />
            <WeekCard
              num={7}
              title="Leaving a Legacy"
              description="Where do we go from here? Joshua 24:15, 2 Timothy 2:2. Building a plan. Committing to the men at your side."
            />
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <blockquote
          className="text-2xl md:text-3xl font-bold leading-snug italic text-foreground/90"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          &ldquo;As for me and my house, we will serve the Lord.&rdquo;
        </blockquote>
        <cite className="block mt-4 text-sm text-text-muted not-italic">
          — Joshua 24:15 (NIV)
        </cite>
      </section>

      {/* CTA */}
      <section id="join" className="bg-surface border-y border-border">
        <div className="mx-auto max-w-2xl px-6 py-20 text-center">
          <h2
            className="text-2xl md:text-4xl font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            RSVP Now
          </h2>
          <p className="text-text-muted leading-relaxed mb-8 max-w-lg mx-auto">
            Spots are limited to keep the group intimate. Tell us you&apos;re
            coming and we&apos;ll send you the details.
          </p>
          <a
            href="mailto:jeremy@lionheartdad.com?subject=Small Group RSVP"
            className="inline-flex items-center justify-center rounded-md bg-accent px-8 py-4 text-base font-bold uppercase tracking-wider text-white hover:bg-accent-light transition-colors"
          >
            Reserve Your Seat
          </a>
        </div>
      </section>
    </>
  );
}
