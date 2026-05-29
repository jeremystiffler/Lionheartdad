import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="hero-overlay">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
          alt="Mountains at golden hour — a father and son adventure"
          fill
          priority
          className="hero-bg-image"
          sizes="100vw"
        />
        <div className="container text-center py-20 md:py-28">
          <span className="eyebrow mb-8 animate-fade-in-up">
            Brotherhood for Dads
          </span>
          <h1 className="text-balance mb-6 animate-fade-in-up animate-delay-100">
            Be the Dad
            <br />
            <span className="gold-shimmer">Your Sons Need</span>
          </h1>
          <p className="lead max-w-lg mx-auto mb-10 animate-fade-in-up animate-delay-200">
            Not perfect. Present. Intentional. Lion is a brotherhood of men
            committed to raising the next generation with courage, faith, and
            sacrificial love.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-in-up animate-delay-300">
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
          <div className="text-center mb-14">
            <span className="eyebrow mb-4">Three Streams</span>
            <h2>How Lion Works</h2>
            <p className="lead mt-4 max-w-lg mx-auto">
              We meet men where they are — over lunch, in a small group, and at a
              weekend camp.
            </p>
          </div>

          <div className="grid-responsive-3">
            {[
              {
                title: "Lunch Brotherhood",
                description:
                  "Every few weeks, fathers sit down for lunch, talk honestly, and work through real fatherhood topics — no judgment, just men pointing each other to Christ.",
                cta: "/about",
                ctaLabel: "Learn More",
                image:
                  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
                imageAlt: "Men gathered together in fellowship",
              },
              {
                title: "Small Group",
                description:
                  "A 7-week journey through Scripture and honest conversation. Hosted at Man of War Church. Deep study, deeper fellowship. Starting September 14.",
                cta: "/small-group",
                ctaLabel: "See the Curriculum",
                image:
                  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&q=80",
                imageAlt: "Men in a small group discussion",
              },
              {
                title: "Weekend Camp",
                description:
                  "A camp for 20 men. Outdoors. Unplugged. Raw. May 7–9, 2027. This is where walls come down and real transformation happens.",
                cta: "/camp",
                ctaLabel: "Explore Camp",
                image:
                  "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=600&q=80",
                imageAlt: "Men around a campfire at night",
              },
            ].map((card) => (
              <div key={card.title} className="group">
                <div className="image-card mb-4">
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="rounded-t-md"
                  />
                </div>
                <div className="px-1">
                  <h3 className="mb-2">{card.title}</h3>
                  <p className="sub leading-relaxed mb-4">{card.description}</p>
                  <Link
                    href={card.cta}
                    className="text-[0.7rem] font-bold tracking-[0.2em] uppercase text-[#c9a85c] hover:text-[#dfc07a] transition-colors"
                  >
                    {card.ctaLabel} →
                  </Link>
                </div>
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
          <div className="text-center mb-14">
            <span className="eyebrow mb-4">Is This For You?</span>
            <h2>Built for Men Who Refuse to Coast</h2>
          </div>

          <div className="grid-responsive-2 max-w-3xl mx-auto">
            <div className="card">
              <h3 className="mb-4 text-[0.8rem] font-bold tracking-wide uppercase text-[#c9a85c]">
                This is for you if…
              </h3>
              <ul className="space-y-3">
                {[
                  "You have young kids and want to get ahead of the chaos",
                  "You have teens and feel the clock ticking",
                  "You grew up without a father and refuse to repeat the cycle",
                  'You\'re doing "okay" but know there\'s more',
                  "You need men around you who will tell you the truth",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 items-start text-sm text-[#c4b9ae]"
                  >
                    <span className="text-[#c9a85c] mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card opacity-70">
              <h3 className="mb-4 text-[0.8rem] font-bold tracking-wide uppercase text-[#8a7e74]">
                This isn&apos;t for you if…
              </h3>
              <ul className="space-y-3">
                {[
                  "You're looking for a lecture series",
                  "You want to stay on the surface",
                  "You're not willing to be honest about your struggles",
                  "You think you have it all figured out",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 items-start text-sm text-[#8a7e74]"
                  >
                    <span className="text-[#8a7e74] mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ IMAGE BREAK ═══ */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&q=80"
          alt="Father and son walking together in nature"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#141210]/60 flex items-center justify-center">
          <div className="text-center container px-4">
            <p
              className="text-2xl md:text-4xl text-[#f5f0eb] italic leading-snug"
              style={{ fontFamily: "var(--heading)" }}
            >
              &ldquo;The legacy a father leaves is not in his possessions —
              <br className="hidden sm:block" />
              it&apos;s in his <span className="gold-shimmer">presence</span>.&rdquo;
            </p>
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
            still the front door. You don&apos;t need to commit to anything. Just
            show up.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
