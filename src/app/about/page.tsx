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
      <section className="section-spacious flex items-center">
        <div className="container text-center">
          <span className="eyebrow mb-6">About</span>
          <h1 className="text-balance mb-6">About Lion</h1>
          <p className="lead max-w-xl mx-auto">
            This is about more than good intentions. It&apos;s about a
            generation of fathers choosing, deliberately, to lead their homes
            with the gospel at the center.
          </p>
        </div>
      </section>

      {/* ═══ SCRIPTURE ═══ */}
      <section className="section bg-warm">
        <div className="container text-center">
          <div className="pullquote">
            &ldquo;For I have chosen him, so that he will direct his children
            and his household after him to keep the way of the Lord by doing
            what is right and just.&rdquo;
            <cite>— Genesis 18:19</cite>
          </div>
        </div>
      </section>

      {/* ═══ JEREMY ═══ */}
      <section className="section-spacious">
        <div className="container">
          <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
            {/* Profile */}
            <div className="md:col-span-2">
              <div className="card text-center md:sticky md:top-24">
                <div className="w-20 h-20 rounded-full bg-[#ede8e1] border border-[#8b6f47]/15 mx-auto mb-5 flex items-center justify-center text-4xl">
                  🦁
                </div>
                <h3
                  className="text-xl mb-1"
                  style={{ fontFamily: "var(--heading)" }}
                >
                  Jeremy Stiffler
                </h3>
                <p className="text-sm text-[#8a8078] mb-5">Lexington, Kentucky</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {[
                    "Father of boys (8 & 11)",
                    "Worship Leader",
                    "AV/Media Director",
                    "Musician & Songwriter",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-[0.65rem] font-semibold tracking-[0.1em] uppercase text-[#8a8078] border border-[#8b6f47]/10 rounded-full px-3 py-1 bg-[#faf8f5]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Story */}
            <div className="md:col-span-3">
              <span className="eyebrow mb-4">The Story</span>
              <h2 className="mb-8 text-balance">
                A Dad Who Decided
                <br />
                to Get Serious
              </h2>
              <div className="space-y-5 text-[#5c554d] leading-relaxed">
                <p>
                  It started simply: a handful of guys, meeting over lunch,
                  talking about what it actually means to lead your family when
                  the world is pulling your kids in a hundred directions.
                </p>
                <p>
                  Jeremy Stiffler isn&apos;t a professional counselor or a
                  seminary professor. He&apos;s a dad. A worship leader at Man
                  of War Church in Lexington, KY. A multi-instrumentalist and
                  songwriter who&apos;s spent years helping churches encounter
                  God through music. And a father of two boys, ages 8 and 11,
                  who knows firsthand that loving your kids well is the
                  hardest, holy work you&apos;ll ever do.
                </p>
                <blockquote
                  className="border-l-2 border-[#8b6f47]/30 pl-5 py-2 italic text-[#1a1714]"
                  style={{ fontFamily: "var(--heading)" }}
                >
                  &ldquo;I kept running into guys who loved their families but
                  had no one holding them accountable. No brotherhood. No one
                  asking, &lsquo;How are you really doing as a father?&rsquo; I
                  knew that had to change.&rdquo;
                </blockquote>
                <p>
                  So Lion was born — not as a program, but as a commitment. A
                  small group of men who decided they would rather be
                  intentional fathers than accidental ones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ VISION ═══ */}
      <section className="section-spacious bg-secondary">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <span className="eyebrow mb-4">The Vision</span>
              <h2 className="mb-6 text-balance">15 Years From Now</h2>
              <div className="space-y-4 text-[#5c554d] leading-relaxed">
                <p>
                  The vision isn&apos;t small. Over the next 15 years, Lion
                  aims to see a network of fathers and young men across
                  communities — men who were discipled as dads, who disciple
                  their sons, who then disciple the next generation.
                </p>
                <p>
                  It&apos;s a multiplication model. One father impacts his
                  household. His sons learn to lead. And the cycle breaks:
                  generations of passive, disengaged fatherhood replaced by
                  men who lead with courage and humility.
                </p>
              </div>
            </div>

            <div>
              <h3
                className="text-[0.85rem] font-semibold tracking-wide uppercase mb-5"
                style={{ fontFamily: "var(--body)" }}
              >
                What We&apos;re Building Toward
              </h3>
              <div className="space-y-3">
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
                  <div key={i} className="card">
                    <div className="eyebrow mb-1.5 text-[#8b6f47]">{item.phase}</div>
                    <p className="text-sm text-[#5c554d]">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOUNDATION ═══ */}
      <section className="section-spacious">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <span className="eyebrow mb-4">Our Foundation</span>
              <h2 className="mb-8 text-balance">
                Not Self-Help.
                <br />
                Scripture.
              </h2>
              <div className="space-y-4 text-[#5c554d] leading-relaxed">
                <p>
                  Lion is not a motivational seminar. We don&apos;t believe
                  there&apos;s a 5-step system to being a great dad. We believe
                  there&apos;s a God who designed fatherhood, and that His Word
                  is sufficient.
                </p>
                <p>
                  Our approach is simple: gather men around Scripture, make
                  space for honest conversation, and hold each other accountable
                  to live what we read.
                </p>
              </div>
            </div>

            <div className="card">
              <h3 className="text-[0.85rem] font-semibold tracking-wide uppercase mb-5">
                What We Believe
              </h3>
              <ul className="space-y-3.5">
                {[
                  "The Bible is the authoritative guide for fatherhood and family.",
                  "Fathers are called to lead — not with tyranny, but with sacrificial love, the way Christ leads the Church.",
                  "Children are a heritage from the Lord — a sacred trust, not an accident.",
                  "Accountability is not optional for the man of God.",
                  "Brotherhood is biblical: iron sharpens iron.",
                  "The local church is central — we do this inside the body, not apart from it.",
                ].map((belief, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-[#8b6f47] mt-0.5 opacity-50">✝</span>
                    <span className="text-sm text-[#5c554d] leading-relaxed">{belief}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="section-spacious bg-warm">
        <div className="container text-center">
          <h2 className="mb-4">Join the Brotherhood</h2>
          <p className="lead max-w-md mx-auto mb-10">
            The front door is a lunch table. Pull up a chair.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/small-group" className="btn-primary">
              Small Group Info
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
