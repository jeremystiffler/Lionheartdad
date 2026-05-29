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
  { date: "May 7–9", title: "Camp Weekend", description: "Twenty men. The Lord is in this place." },
];

const highlights = [
  { title: "Opening Night: The Call", desc: "An honest, raw session on what it means to be a man and father in this generation." },
  { title: "Day 2: Deep Dive Teaching", desc: "Extended sessions on biblical fatherhood, marriage, prayer, and spiritual warfare." },
  { title: "Prayer & Fasting", desc: "A guided fast. Corporate intercession. Praying over your children by name." },
  { title: "Worship Around the Fire", desc: "Acoustic worship under the stars. No stage. No production. Just men and their God." },
  { title: "The Covenant", desc: "Writing a personal covenant with God about your household. Men witness. Men commit." },
  { title: "Send-Off: Go Make Disciples", desc: "Practical next steps, accountability partnerships, and a commissioning prayer." },
];

export default function CampPage() {
  return (
    <>

      {/* ═══ HERO ═══ */}
      <section className="section-spacious flex items-center">
        <div className="container text-center">
          <span className="eyebrow mb-6">Weekend Camp 2027</span>
          <h1 className="text-balance mb-6">
            20 Men.
            <br />
            One Weekend.
            <br />
            No Turning Back.
          </h1>
          <p className="lead max-w-xl mx-auto">
            Outdoors. Unplugged. Raw. This is where walls come down and real
            transformation happens. May 7–9, 2027.
          </p>
        </div>
      </section>

      {/* ═══ DETAILS BAR ═══ */}
      <section className="bg-warm py-10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: "When", value: "May 7–9, 2027" },
              { label: "Capacity", value: "20 Men" },
              { label: "Format", value: "Outdoor Camp" },
              { label: "Cost", value: "$250" },
            ].map((item) => (
              <div key={item.label}>
                <div className="eyebrow mb-1">{item.label}</div>
                <div
                  className="text-lg text-[#1a1714]"
                  style={{ fontFamily: "var(--heading)" }}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ THE CONCEPT ═══ */}
      <section className="section-spacious">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <span className="eyebrow mb-4">The Concept</span>
              <h2 className="mb-6 text-balance">
                More Than a Retreat
              </h2>
              <div className="space-y-4 text-[#5c554d] leading-relaxed">
                <p>
                  Most men&apos;s retreats are comfortable. Hotels. Keynote
                  speakers. Maybe a breakout session. You go home inspired and
                  unchanged.
                </p>
                <p>
                  This is different. This is a camp — outdoors, stripped of
                  distractions, with nothing to hide behind. Twenty men who
                  committed to becoming the fathers their families need.
                </p>
                <p>
                  Over three days, we&apos;ll preach the Word, pray together, fast
                  together, cry together, and worship together. You&apos;ll leave
                  with a battle plan.
                </p>
              </div>
            </div>

            <div>
              <h3
                className="text-[0.85rem] font-semibold tracking-wide uppercase mb-5"
                style={{ fontFamily: "var(--body)" }}
              >
                Weekend Highlights
              </h3>
              <div className="space-y-3">
                {highlights.map((item, i) => (
                  <div key={i} className="card">
                    <div className="font-semibold mb-0.5">{item.title}</div>
                    <p className="text-sm text-[#8a8078] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SCRIPTURE ═══ */}
      <section className="section bg-warm">
        <div className="container text-center">
          <div className="pullquote">
            &ldquo;I have fought the good fight, I have finished the race, I
            have kept the faith.&rdquo;
            <cite>— 2 Timothy 4:7</cite>
          </div>
        </div>
      </section>

      {/* ═══ TIMELINE ═══ */}
      <section className="section-spacious">
        <div className="container">
          <div className="text-center mb-14">
            <span className="eyebrow mb-4">Road to the Ridge</span>
            <h2>Milestones to May 2027</h2>
          </div>

          <div className="max-w-xl mx-auto">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6 mb-8 last:mb-0">
                <div className="shrink-0 w-[70px] text-right pt-1">
                  <span className="eyebrow">{item.date}</span>
                </div>
                <div className="relative pl-6 border-l border-[#8b6f47]/10">
                  <h3
                    className="font-semibold mb-1"
                    style={{ fontFamily: "var(--heading)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#8a8078] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="section-spacious bg-warm">
        <div className="container text-center">
          <span className="eyebrow mb-4">Raise Your Hand</span>
          <h2 className="mb-4">Join Us at Camp</h2>
          <p className="lead max-w-md mx-auto mb-10">
            Registration opens November 2026. Express interest now and be the first
            to know.
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
