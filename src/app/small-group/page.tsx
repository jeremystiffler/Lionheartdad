import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Small Group",
  description:
    "A 7-week small group for fathers at Man of War Church. September 14 – October 26, 2026. Scripture, accountability, and brotherhood.",
  openGraph: {
    title: "Small Group — Lion Intentional Fathers",
    description:
      "A 7-week small group for fathers at Man of War Church. September 14 – October 26, 2026.",
  },
};

const curriculum = [
  {
    num: 1,
    title: "The Father God Intended",
    description:
      "Who is God as Father? What does His fatherhood reveal about ours? Genesis 1–3, Psalm 103:13, Matthew 7:11.",
  },
  {
    num: 2,
    title: "The Weight of the Crown",
    description:
      "What does biblical headship actually look like? Ephesians 5:25–33, Colossians 3:19. Sacrificial, not tyrannical.",
  },
  {
    num: 3,
    title: "Training Up Without Provoking",
    description:
      "Ephesians 6:4 unpacked. How to discipline in love, not anger. Deuteronomy 6:4–9 in the modern home.",
  },
  {
    num: 4,
    title: "The Praying Father",
    description:
      "Your weapon most neglected: intercession for your children. Mark 14:38, James 5:16.",
  },
  {
    num: 5,
    title: "Money, Work, and Priorities",
    description:
      "Stewarding what God entrusted. 1 Timothy 5:8, Matthew 6:33. Work-life balance is a myth — it's worship alignment.",
  },
  {
    num: 6,
    title: "Leading Through Crisis",
    description:
      "When your marriage is hard. When your kids rebel. When God feels silent. James 1:2–4, Psalm 46.",
  },
  {
    num: 7,
    title: "Leaving a Legacy",
    description:
      "Where do we go from here? Joshua 24:15, 2 Timothy 2:2. Building a plan. Committing to the men at your side.",
  },
];

export default function SmallGroupPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="hero-overlay">
        <Image
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1920&q=80"
          alt="Men in a small group discussion"
          fill
          priority
          className="hero-bg-image"
          sizes="100vw"
        />
        <div className="container text-center py-20 md:py-28">
          <span className="eyebrow mb-6">Small Group</span>
          <h1 className="text-balance mb-6">
            7 Weeks That Will
            <br />
            <span className="gold-shimmer">Change Your Fatherhood</span>
          </h1>
          <p className="lead max-w-xl mx-auto">
            A men&apos;s small group at Man of War Church. Real talk. Real
            Scripture. Real accountability. It starts September 14.
          </p>
        </div>
      </section>

      {/* ═══ DETAILS BAR ═══ */}
      <section className="bg-warm py-10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: "Starts", value: "September 14, 2026" },
              { label: "Duration", value: "7 Weeks" },
              { label: "Ends", value: "October 26, 2026" },
              { label: "Location", value: "Man of War Church" },
            ].map((item) => (
              <div key={item.label}>
                <div className="eyebrow mb-1">{item.label}</div>
                <div
                  className="text-lg text-[#f5f0eb]"
                  style={{ fontFamily: "var(--heading)" }}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHAT TO EXPECT ═══ */}
      <section className="section-spacious">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="eyebrow mb-4">What to Expect</span>
            <h2 className="mb-6">This Is Not a Bible Study</h2>
            <div className="space-y-5 text-[#c4b9ae] leading-relaxed text-left">
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

          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              {
                title: "Scripture-Centered",
                text: "Every week built around key passages on fatherhood, leadership, and the family.",
                icon: "📖",
              },
              {
                title: "Accountability",
                text: "Weekly check-ins. What did you do? What did you miss? No judgment — just faithfulness.",
                icon: "🤝",
              },
              {
                title: "Church-Anchored",
                text: "Hosted at Man of War Church. Connected to the body. Not a side project.",
                icon: "⛪",
              },
            ].map((card) => (
              <div key={card.title} className="card text-center">
                <div className="text-3xl mb-3">{card.icon}</div>
                <h3 className="mb-2 text-[0.8rem] font-bold tracking-wide uppercase">
                  {card.title}
                </h3>
                <p className="text-sm text-[#8a7e74] leading-relaxed">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ IMAGE BREAK ═══ */}
      <section className="relative h-[35vh] md:h-[40vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80"
          alt="Men in fellowship together"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#141210]/50" />
      </section>

      {/* ═══ CURRICULUM ═══ */}
      <section className="section-spacious bg-secondary">
        <div className="container">
          <div className="text-center mb-14">
            <span className="eyebrow mb-4">Curriculum Overview</span>
            <h2 className="mb-4">The 7-Week Journey</h2>
            <p className="lead max-w-lg mx-auto">
              Each week builds on the last. By the end, you&apos;ll have a
              framework for your household that&apos;s rooted in the gospel, not
              culture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {curriculum.map((week) => (
              <div key={week.num} className="card">
                <div className="flex items-start gap-4">
                  <div
                    className="shrink-0 w-10 h-10 rounded-full bg-[#c9a85c]/8 border border-[#c9a85c]/15 flex items-center justify-center text-[#c9a85c] font-normal text-sm"
                    style={{ fontFamily: "var(--heading)" }}
                  >
                    {week.num}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{week.title}</h3>
                    <p className="text-sm text-[#8a7e74] leading-relaxed">
                      {week.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ QUOTE ═══ */}
      <section className="section bg-warm">
        <div className="container text-center">
          <div className="pullquote">
            &ldquo;As for me and my house, we will serve the Lord.&rdquo;
            <cite>— Joshua 24:15</cite>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="section-spacious">
        <div className="container text-center">
          <span className="eyebrow mb-4">RSVP</span>
          <h2 className="mb-4">Reserve Your Seat</h2>
          <p className="lead max-w-md mx-auto mb-10">
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
