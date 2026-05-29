import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Small Group",
  description:
    "A 7-week small group for fathers at Man of War Church. September 14 – October 26, 2026. Based on Jon Tyson's 'The Intentional Father.'",
  openGraph: {
    title: "Small Group — Lion Intentional Fathers",
    description:
      "A 7-week small group for fathers at Man of War Church. September 14 – October 26, 2026.",
  },
};

// 7-week curriculum mapped to Jon Tyson's "The Intentional Father"
// Book structure: Part 1 (Ch 1-2), Part 2 (Ch 3-4), Part 3 (Ch 5-7),
//                 Part 4 (Ch 8-13), Part 5 (Ch 14-16)
const curriculum = [
  {
    num: 1,
    bookRef: "Ch. 1–2",
    bookPart: "Part 1: Introduction",
    title: "The Need for Fathers",
    description:
      "Why fatherhood is the most overlooked crucial role in society. The five kinds of fathers — which one are you? Malachi 4:6, Ephesians 6:4.",
  },
  {
    num: 2,
    bookRef: "Ch. 3–4",
    bookPart: "Part 2: Preparation",
    title: "A Preview of the Possible",
    description:
      "What does intentional fatherhood actually look like? Honoring your own father — even if he failed you. Practical preparation steps. Joshua 24:15.",
  },
  {
    num: 3,
    bookRef: "Ch. 5–7",
    bookPart: "Part 3: Initiation",
    title: "Ceremony, Home & Values",
    description:
      "The power of marking moments. Establishing your home's culture. Defining the values that will shape your sons. Deuteronomy 6:4–9.",
  },
  {
    num: 4,
    bookRef: "Ch. 8",
    bookPart: "Part 4: Formation",
    title: "The Five Shifts",
    description:
      "Five shifts every father must make to raise sons of character. Moving from passive to reactive to proactive. 2 Timothy 2:2.",
  },
  {
    num: 5,
    bookRef: "Ch. 9–10",
    bookPart: "Part 4: Formation",
    title: "Preparing for Moments",
    description:
      "The power of preparing for key moments — don't let them happen by accident. Being good at being a man: what that means biblically vs. culturally. Matthew 7:11, Psalm 103:13.",
  },
  {
    num: 6,
    bookRef: "Ch. 11–13",
    bookPart: "Part 4: Formation",
    title: "Roles, Identity & the Arc of Life",
    description:
      "The roles a father must master. Helping your son discover who God made him to be. Understanding the arc of life — from boyhood to manhood. James 1:2–4.",
  },
  {
    num: 7,
    bookRef: "Ch. 14–16",
    bookPart: "Part 5: Recognition",
    title: "Recognition & Legacy",
    description:
      "The gap year. The ceremony of welcome and blessing. Becoming the intentional father. Building a plan for the next season. Joshua 24:15.",
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
            A men&apos;s small group at Man of War Church. Based on Jon
            Tyson&apos;s book <em>The Intentional Father</em>. Real talk.
            Real Scripture. Real accountability.
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

      {/* ═══ THE BOOK ═══ */}
      <section className="section-spacious">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="eyebrow mb-4">The Book</span>
            <h2 className="mb-6">The Intentional Father</h2>
            <p className="mb-4" style={{ fontFamily: "var(--heading)", fontSize: "1.15rem", color: "var(--text-secondary)", fontStyle: "italic" }}>
              by Jon Tyson
            </p>
            <div className="space-y-5 text-[#c4b9ae] leading-relaxed text-left">
              <p>
                Over 150,000 copies sold. This is the roadmap we&apos;re
                walking through together — not as a book club, but as men who
                are putting it into practice in our own homes.
              </p>
              <p>
                Tyson lays out a clear path: <strong className="text-[#f5f0eb]">Introduction</strong> →{" "}
                <strong className="text-[#f5f0eb]">Preparation</strong> →{" "}
                <strong className="text-[#f5f0eb]">Initiation</strong> →{" "}
                <strong className="text-[#f5f0eb]">Formation</strong> →{" "}
                <strong className="text-[#f5f0eb]">Recognition</strong>.
              </p>
              <p>
                Each week covers 2–3 chapters. You&apos;ll read ahead, come
                ready to talk honestly, and commit to one concrete step for your
                household.
              </p>
            </div>
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
              Each week maps to Jon Tyson&apos;s book. By the end,
              you&apos;ll have a framework for your household rooted in the
              gospel, not culture.
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
                    <div className="eyebrow mb-1" style={{ fontSize: "0.55rem" }}>
                      {week.bookRef} · {week.bookPart}
                    </div>
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

      {/* ═══ WHAT TO EXPECT ═══ */}
      <section className="section-spacious">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <span className="eyebrow mb-4">What to Expect</span>
            <h2 className="mb-6">This Is Not a Bible Study</h2>
            <div className="space-y-5 text-[#c4b9ae] leading-relaxed text-left">
              <p>
                It&apos;s better. A Bible study teaches you <em>about</em>{" "}
                God&apos;s Word. This group <em>lives</em> it.
              </p>
              <p>
                Each week, you&apos;ll walk in having read the assigned chapters
                and answered some hard questions about your own household.
                Then you&apos;ll sit with men who are in the trenches just like
                you — working through the text, confessing failures,
                celebrating wins, and committing to one concrete step for the
                week ahead.
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
              },
              {
                title: "Accountability",
                text: "Weekly check-ins. What did you do? What did you miss? No judgment — just faithfulness.",
              },
              {
                title: "Church-Anchored",
                text: "Hosted at Man of War Church. Connected to the body. Not a side project.",
              },
            ].map((card) => (
              <div key={card.title} className="card text-center">
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

      {/* ═══ QUOTE ═══ */}
      <section className="section bg-warm">
        <div className="container text-center">
          <div className="pullquote">
            &ldquo;He will turn the hearts of the parents to their children, and
            the hearts of the children to their parents.&rdquo;
            <cite>— Malachi 4:6</cite>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="section-spacious">
        <div className="container text-center">
          <span className="eyebrow mb-4">RSVP</span>
          <h2 className="mb-4">Reserve Your Seat</h2>
          <p className="lead max-w-md mx-auto mb-4">
            We&apos;re looking for 10 men who are serious about leading their
            homes. Spots are limited to keep the group intimate.
          </p>
          <p className="text-[#8a7e74] max-w-md mx-auto mb-10 text-sm">
            Get the book: <em>The Intentional Father</em> by Jon Tyson. We'll start with Chapters 1–2 in Week 1.
          </p>
          <a
            href="mailto:jeremy@lionheartdad.com?subject=Small Group RSVP — 7-Week Intentional Father"
            className="btn-primary"
          >
            I'm In — Reserve My Seat
          </a>
        </div>
      </section>
    </>
  );
}
