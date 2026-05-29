import Link from "next/link";

export default function Home() {
  return (
    <>

      {/* ═══ HERO ═══ */}
      <section className="section-spacious flex items-center">
        <div className="container text-center">
          <span className="eyebrow mb-8">Brotherhood for Dads</span>
          <h1 className="text-balance mb-6">
            Be the Dad
            <br />
            Your Sons Need
          </h1>
          <p className="lead max-w-lg mx-auto mb-10">
            Not perfect. Present. Intentional. Lion is a brotherhood of men
            committed to raising the next generation with courage, faith, and
            sacrificial love.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/about" className="btn-primary">
              Learn More
            </Link>
            <Link href="/contact" className="btn-secondary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ SCRIPTURE ═══ */}
      <section className="section bg-warm">
        <div className="container text-center">
          <div className="pullquote">
            &ldquo;Fathers, do not exasperate your children; instead, bring them
            up in the training and instruction of the Lord.&rdquo;
            <cite>— Ephesians 6:4</cite>
          </div>
        </div>
      </section>

      {/* ═══ THREE PATHS ═══ */}
      <section className="section-spacious">
        <div className="container">
          <div className="text-center mb-16">
            <span className="eyebrow mb-4">Three Streams</span>
            <h2>How Lion Works</h2>
            <p className="lead mt-4 max-w-lg mx-auto">
              We meet men where they are — over lunch, in a small group, and at a weekend camp.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Lunch Brotherhood",
                description:
                  "Every few weeks, fathers sit down for lunch, talk honestly, and work through real fatherhood topics — no judgment, just men pointing each other to Christ.",
                cta: "/about",
                ctaLabel: "Learn More",
              },
              {
                title: "Small Group",
                description:
                  "A 7-week journey through Scripture and honest conversation. Hosted at Man of War Church. Deep study, deeper fellowship. Starting September 14.",
                cta: "/small-group",
                ctaLabel: "See the Curriculum",
              },
              {
                title: "Weekend Camp",
                description:
                  "A camp for 20 men. Outdoors. Unplugged. Raw. May 7–9, 2027. This is where walls come down and real transformation happens.",
                cta: "/camp",
                ctaLabel: "Explore Camp",
              },
            ].map((card) => (
              <div key={card.title} className="card">
                <h3 className="mb-3">{card.title}</h3>
                <p className="sub leading-relaxed mb-5">{card.description}</p>
                <Link
                  href={card.cta}
                  className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-[#8b6f47] hover:text-[#6b5535] transition-colors"
                >
                  {card.ctaLabel} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ QUOTE 2 ═══ */}
      <section className="section bg-secondary">
        <div className="container text-center">
          <div className="pullquote">
            &ldquo;As for me and my house, we will serve the Lord.&rdquo;
            <cite>— Joshua 24:15</cite>
          </div>
        </div>
      </section>

      {/* ═══ WHO IS THIS FOR ═══ */}
      <section className="section-spacious">
        <div className="container">
          <div className="text-center mb-16">
            <span className="eyebrow mb-4">Is This For You?</span>
            <h2>Built for Men Who Refuse to Coast</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="card">
              <h3 className="mb-4 text-[0.85rem] font-semibold tracking-wide uppercase text-[#8b6f47]">
                This is for you if…
              </h3>
              <ul className="space-y-3">
                {[
                  "You have young kids and want to get ahead of the chaos",
                  "You have teens and feel the clock ticking",
                  "You grew up without a father and refuse to repeat the cycle",
                  "You're doing \"okay\" but know there's more",
                  "You need men around you who will tell you the truth",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start text-sm text-[#5c554d]">
                    <span className="text-[#8b6f47] mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card opacity-70">
              <h3 className="mb-4 text-[0.85rem] font-semibold tracking-wide uppercase text-[#8a8078]">
                This isn&apos;t for you if…
              </h3>
              <ul className="space-y-3">
                {[
                  "You're looking for a lecture series",
                  "You want to stay on the surface",
                  "You're not willing to be honest about your struggles",
                  "You think you have it all figured out",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start text-sm text-[#8a8078]">
                    <span className="text-[#8a8078] mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="section-spacious bg-warm">
        <div className="container text-center">
          <span className="eyebrow mb-4">Ready?</span>
          <h2 className="mb-4">Take the First Step</h2>
          <p className="lead max-w-md mx-auto mb-10">
            Lion started with a handful of guys meeting over lunch. That&apos;s
            still the front door. You don&apos;t need to commit to anything.
            Just show up.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>

    </>
  );
}
