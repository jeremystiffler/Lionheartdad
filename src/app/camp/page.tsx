import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weekend Camp — Lion Intentional Fathers",
  description:
    "A camp for 20 men. Outdoors. Unplugged. Raw. May 7–9, 2027. Where walls come down and real transformation happens.",
};

function TimelineItem({
  date,
  title,
  description,
}: {
  date: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="shrink-0 w-28 text-right">
        <span className="text-xs font-bold uppercase tracking-widest text-accent">
          {date}
        </span>
      </div>
      <div className="border-l border-border pl-4 pb-8 last:pb-0">
        <h3
          className="font-bold mb-1"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </h3>
        <p className="text-sm text-text-muted leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function CampPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-surface/80 via-transparent to-background pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-6 py-28 md:py-36 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-accent mb-6">
            Weekend Camp 2027
          </span>
          <h1
            className="text-4xl md:text-6xl font-bold leading-[1.1] mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            20 Men.
            <br />
            One Weekend.
            <br />
            <span className="text-accent">No Turning Back.</span>
          </h1>
          <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
            Outdoors. Unplugged. Raw. This is where walls come down and real
            transformation happens. May 7–9, 2027.
          </p>
        </div>
      </section>

      {/* DETAILS BAR */}
      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-border">
            <div className="py-2 sm:py-0">
              <div className="text-xs font-bold uppercase tracking-widest text-text-muted mb-1">
                When
              </div>
              <div className="text-lg font-bold text-foreground">
                May 7–9, 2027
              </div>
            </div>
            <div className="py-2 sm:py-0">
              <div className="text-xs font-bold uppercase tracking-widest text-text-muted mb-1">
                Capacity
              </div>
              <div className="text-lg font-bold text-foreground">20 Men</div>
            </div>
            <div className="py-2 sm:py-0">
              <div className="text-xs font-bold uppercase tracking-widest text-text-muted mb-1">
                Format
              </div>
              <div className="text-lg font-bold text-foreground">
                Outdoor Camp
              </div>
            </div>
            <div className="py-2 sm:py-0">
              <div className="text-xs font-bold uppercase tracking-widest text-text-muted mb-1">
                Revenue Model
              </div>
              <div className="text-lg font-bold text-foreground">
                Self-Sustaining
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS THIS */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-accent mb-4">
              The Concept
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold leading-tight mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              More Than a Retreat
            </h2>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                Most men&apos;s retreats are comfortable. Hotels. Keynote
                speakers. Maybe a breakout session. You go home inspired and
                unchanged.
              </p>
              <p>
                This is different. This is a camp — outdoors, stripped of
                distractions, with nothing to hide behind. Twenty men who
                committed to doing the hard work of becoming the fathers their
                families need.
              </p>
              <p>
                Over three days, we&apos;ll preach the Word, pray together, fast
                together, cry together, and worship together. You&apos;ll hear
                from men who&apos;ve walked through the fire of fatherhood and
                come out refined. You&apos;ll be asked hard questions. And
                you&apos;ll leave with a battle plan.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3
              className="text-lg font-bold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Weekend Highlights
            </h3>
            <div className="space-y-3">
              {[
                {
                  icon: "🔥",
                  title: "Opening Night: The Call",
                  desc: "An honest, raw session on what it means to be a man and father in this generation.",
                },
                {
                  icon: "📖",
                  title: "Day 2: Deep Dive Teaching",
                  desc: "Extended sessions on biblical fatherhood, marriage, prayer, and spiritual warfare.",
                },
                {
                  icon: "🙏",
                  title: "Prayer & Fasting",
                  desc: "A guided fast. Corporate intercession. Praying over your children by name.",
                },
                {
                  icon: "🎵",
                  title: "Worship Around the Fire",
                  desc: "Acoustic worship under the stars. No stage. No production. Just men and their God.",
                },
                {
                  icon: "✍️",
                  title: "The Covenant",
                  desc: "Writing a personal covenant with God about your household. Men witness. Men commit.",
                },
                {
                  icon: "👋",
                  title: "Send-Off: Go Make Disciples",
                  desc: "Practical next steps, accountability partnerships, and a commissioning prayer.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-border bg-surface p-4 flex gap-4"
                >
                  <span className="text-xl shrink-0">{item.icon}</span>
                  <div>
                    <div className="text-sm font-bold text-foreground">
                      {item.title}
                    </div>
                    <div className="text-xs text-text-muted">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SCRIPTURE BREAK */}
      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <blockquote
            className="text-2xl md:text-3xl font-bold leading-snug italic text-foreground/90"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            &ldquo;I have fought the good fight, I have finished the race, I
            have kept the faith.&rdquo;
          </blockquote>
          <cite className="block mt-4 text-sm text-text-muted not-italic">
            — 2 Timothy 4:7 (NIV)
          </cite>
        </div>
      </section>

      {/* ROADMAP TO CAMP */}
      <section className="mx-auto max-w-4xl px-6 py-24">
        <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-accent mb-4 block text-center">
          Road to the Ridge
        </span>
        <h2
          className="text-3xl md:text-4xl font-bold leading-tight mb-12 text-center"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Milestones to May 2027
        </h2>
        <div className="max-w-xl mx-auto">
          <TimelineItem
            date="Jun 2026"
            title="Vision Locked"
            description="Location confirmed. Speaker lineup drafted. Initial budget set."
          />
          <TimelineItem
            date="Sep 2026"
            title="Small Group Launches"
            description="7-week cohort begins at Man of War Church. First wave of Lion men formed."
          />
          <TimelineItem
            date="Nov 2026"
            title="Camp Announced"
            description="Formal announcement. Registration opens. Early-bird pricing."
          />
          <TimelineItem
            date="Jan 2027"
            title="Content Development"
            description="Teaching series finalized. Worship leader confirmed. Logistics solidified."
          />
          <TimelineItem
            date="Mar 2027"
            title="Full Registration"
            description="20 spots filled. Pre-camp reading and preparation begins."
          />
          <TimelineItem
            date="May 7–9"
            title="Camp Weekend"
            description="Let's go. Twenty men. The Lord is in this place."
          />
        </div>
      </section>

      {/* REVENUE MODEL */}
      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-accent mb-4">
                Sustainability
              </span>
              <h2
                text-3xl
                className="text-3xl md:text-4xl font-bold leading-tight mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                A Ministry That Pays for Itself
              </h2>
              <p className="text-text-muted leading-relaxed mb-4">
                Lion isn&apos;t funded by a megachurch budget. It&apos;s funded
                by men who believe in the mission enough to invest in it.
              </p>
              <p className="text-text-muted leading-relaxed">
                The weekend camp is the primary revenue engine: registration
                fees cover all costs and generate margin that funds small groups,
                materials, and future camps. It&apos;s sustainable, replicable,
                and scalable.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-background p-8">
              <h3
                className="text-lg font-bold mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Camp Budget Snapshot
              </h3>
              <div className="space-y-3 text-sm">
                {[
                  {
                    item: "20 men × $250 registration",
                    amount: "$5,000",
                    type: "income",
                  },
                  { item: "Site rental & permits", amount: "$800", type: "cost" },
                  { item: "Food & supplies", amount: "$1,200", type: "cost" },
                  {
                    item: "Speaker honorarium",
                    amount: "$500",
                    type: "cost",
                  },
                  {
                    item: "Materials & print",
                    amount: "$300",
                    type: "cost",
                  },
                  {
                    item: "Miscellaneous",
                    amount: "$400",
                    type: "cost",
                  },
                  {
                    item: "Net to Fund Ministry",
                    amount: "$1,800",
                    type: "net",
                  },
                ].map((line, i) => (
                  <div
                    key={i}
                    className={`flex justify-between ${
                      line.type === "income"
                        ? "text-success font-bold"
                        : line.type === "net"
                        ? "text-accent font-bold border-t border-border pt-2 mt-2"
                        : "text-text-muted"
                    }`}
                  >
                    <span>{line.item}</span>
                    <span>{line.amount}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-text-muted mt-4">
                Early pricing ($200) incentivizes commitment. Standard ($250)
                sustains the mission. Scholarships available for men who need it
                — no father turned away for finances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="join" className="mx-auto max-w-2xl px-6 py-24 text-center">
        <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-accent mb-6">
          Raise Your Hand
        </span>
        <h2
          className="text-3xl md:text-4xl font-bold leading-tight mb-6"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Join Us at the Camp
        </h2>
        <p className="text-text-muted leading-relaxed mb-8 max-w-lg mx-auto">
          Registration won&apos;t open until November, but the planning starts
          now. Express interest and be the first to know.
        </p>
        <a
          href="mailto:jeremy@lionheartdad.com?subject=Weekend Camp 2027 Interest"
          className="inline-flex items-center justify-center rounded-md bg-accent px-8 py-4 text-base font-bold uppercase tracking-wider text-white hover:bg-accent-light transition-colors"
        >
          Express Interest
        </a>
      </section>
    </>
  );
}
