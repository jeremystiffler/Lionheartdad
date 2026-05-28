import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weekend Camp — Lion Intentional Fathers",
  description:
    "A camp for 20 men. Outdoors. Unplugged. Raw. May 7–9, 2027. Where walls come down and real transformation happens.",
};

const timeline = [
  { date: "Jun 2026", title: "Vision Locked", description: "Location confirmed. Speaker lineup drafted. Initial budget set." },
  { date: "Sep 2026", title: "Small Group Launches", description: "7-week cohort begins at Man of War Church. First wave of Lion men formed." },
  { date: "Nov 2026", title: "Camp Announced", description: "Formal announcement. Registration opens. Early-bird pricing." },
  { date: "Jan 2027", title: "Content Development", description: "Teaching series finalized. Worship leader confirmed. Logistics solidified." },
  { date: "Mar 2027", title: "Full Registration", description: "20 spots filled. Pre-camp reading and preparation begins." },
  { date: "May 7–9", title: "Camp Weekend", description: "Let's go. Twenty men. The Lord is in this place." },
];

const highlights = [
  { icon: "🔥", title: "Opening Night: The Call", desc: "An honest, raw session on what it means to be a man and father in this generation." },
  { icon: "📖", title: "Day 2: Deep Dive Teaching", desc: "Extended sessions on biblical fatherhood, marriage, prayer, and spiritual warfare." },
  { icon: "🙏", title: "Prayer & Fasting", desc: "A guided fast. Corporate intercession. Praying over your children by name." },
  { icon: "🎵", title: "Worship Around the Fire", desc: "Acoustic worship under the stars. No stage. No production. Just men and their God." },
  { icon: "✍️", title: "The Covenant", desc: "Writing a personal covenant with God about your household. Men witness. Men commit." },
  { icon: "👋", title: "Send-Off: Go Make Disciples", desc: "Practical next steps, accountability partnerships, and a commissioning prayer." },
];

const budget = [
  { item: "20 men × $250 registration", amount: "$5,000", type: "income" as const },
  { item: "Site rental & permits", amount: "$800", type: "cost" as const },
  { item: "Food & supplies", amount: "$1,200", type: "cost" as const },
  { item: "Speaker honorarium", amount: "$500", type: "cost" as const },
  { item: "Materials & print", amount: "$300", type: "cost" as const },
  { item: "Miscellaneous", amount: "$400", type: "cost" as const },
  { item: "Net to Fund Ministry", amount: "$1,800", type: "net" as const },
];

export default function CampPage() {
  return (
    <>

      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center">
        <div className="glow-orb glow-orb-warm w-[600px] h-[600px] -top-20 right-0 opacity-[0.1]" />
        <div className="glow-orb glow-orb-accent w-[400px] h-[400px] bottom-0 left-0 opacity-[0.06]" />

        <div className="absolute inset-0 bg-gradient-to-b from-surface/50 via-transparent to-background pointer-events-none" />

        <div className="relative mx-auto max-w-4xl px-6 py-24 md:py-32 text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-accent mb-8 border border-accent/20 rounded-full px-5 py-2 bg-accent/5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Weekend Camp 2027
          </span>
          <h1
            className="text-4xl md:text-6xl font-bold leading-[1.1] mb-8 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            20 Men.
            <br />
            One Weekend.
            <br />
            <span className="gradient-text-warm">No Turning Back.</span>
          </h1>
          <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
            Outdoors. Unplugged. Raw. This is where walls come down and real
            transformation happens. May 7–9, 2027.
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
              { label: "When", value: "May 7–9, 2027" },
              { label: "Capacity", value: "20 Men" },
              { label: "Format", value: "Outdoor Camp" },
              { label: "Revenue Model", value: "Self-Sustaining" },
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

      {/* ═══ THE CONCEPT ═══ */}
      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-accent mb-4">
              The Concept
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-balance"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              More Than
              <br />
              <span className="gradient-text">a Retreat</span>
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

          <div className="space-y-3">
            <h3
              className="text-lg font-bold mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Weekend Highlights
            </h3>
            {highlights.map((item, i) => (
              <div
                key={i}
                className="card-soft p-4 flex gap-4 items-start"
              >
                <span className="text-xl shrink-0 mt-0.5">{item.icon}</span>
                <div>
                  <div className="text-sm font-bold text-foreground mb-0.5">
                    {item.title}
                  </div>
                  <div className="text-xs text-text-muted leading-relaxed">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
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
            &ldquo;I have fought the good fight, I have finished the race, I
            have kept the faith.&rdquo;
          </blockquote>
          <cite className="block mt-5 text-sm text-text-muted not-italic tracking-wide">
            — 2 Timothy 4:7 (NIV)
          </cite>
          <div className="w-10 h-[1.5px] bg-accent/20 mx-auto mt-8" />
        </div>
      </section>

      {/* ═══ ROADMAP ═══ */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-accent mb-4">
            Road to the Ridge
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold leading-tight text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Milestones to May 2027
          </h2>
        </div>

        <div className="max-w-xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-[72px] top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-accent/30 via-accent/10 to-transparent" />

          {timeline.map((item, i) => (
            <div key={i} className="flex gap-5 mb-8 last:mb-0 group">
              <div className="shrink-0 w-[60px] text-right pt-1">
                <span className="text-xs font-bold uppercase tracking-widest text-accent">
                  {item.date}
                </span>
              </div>
              <div className="relative pl-6">
                {/* Dot */}
                <div className="absolute left-0 top-2 w-2.5 h-2.5 rounded-full bg-accent/30 border-2 border-background group-hover:bg-accent/60 transition-colors" />
                <h3
                  className="font-bold mb-1"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ REVENUE MODEL ═══ */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/30 to-transparent" />
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-accent mb-4">
                Sustainability
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-balance"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                A Ministry That
                <br />
                <span className="gradient-text">Pays for Itself</span>
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

            <div className="card-elevated p-8">
              <h3
                className="text-lg font-bold mb-5"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Camp Budget Snapshot
              </h3>
              <div className="space-y-3 text-sm">
                {budget.map((line, i) => (
                  <div
                    key={i}
                    className={`flex justify-between ${
                      line.type === "income"
                        ? "text-success font-bold"
                        : line.type === "net"
                        ? "text-accent font-bold border-t border-border pt-3 mt-3"
                        : "text-text-muted"
                    }`}
                  >
                    <span>{line.item}</span>
                    <span>{line.amount}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-text-muted mt-5 leading-relaxed opacity-70">
                Early pricing ($200) incentivizes commitment. Standard ($250)
                sustains the mission. Scholarships available for men who need it
                — no father turned away for finances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section id="join" className="relative py-16 md:py-24">
        <div className="glow-orb glow-orb-warm w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.08]" />
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-accent mb-6">
            Raise Your Hand
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Join Us at the Camp
          </h2>
          <p className="text-text-muted leading-relaxed mb-10 max-w-lg mx-auto">
            Registration won&apos;t open until November, but the planning starts
            now. Express interest and be the first to know.
          </p>
          <a
            href="mailto:jeremy@lionheartdad.com?subject=Weekend Camp 2027 Interest"
            className="btn-primary"
          >
            Express Interest
          </a>
        </div>
      </section>

    </>
  );
}
