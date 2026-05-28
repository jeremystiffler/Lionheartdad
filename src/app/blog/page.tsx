import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Lion Intentional Fathers",
  description:
    "Thoughts, reflections, and teaching from Lion on biblical fatherhood, mentorship, and building a legacy.",
};

const posts = [
  {
    slug: "welcome-to-lion",
    title: "Welcome to Lion",
    date: "2026",
    excerpt:
      "This is why we exist. Not a program. Not a curriculum. A commitment among men to lead our homes with courage and faith.",
    category: "Vision",
    comingSoon: true,
  },
  {
    slug: "fathered-well",
    title: "What It Means to Be Fathered Well",
    date: "2026",
    excerpt:
      "You can't give what you never received. A reflection on breaking cycles and receiving the Father's love.",
    category: "Identity",
    comingSoon: true,
  },
  {
    slug: "first-commandment-for-dads",
    title: "The First Commandment for Dads",
    date: "2026",
    excerpt:
      "Before 'train up a child' — there's a greater command. What Jesus said matters most and how it reshapes fatherhood.",
    category: "Teaching",
    comingSoon: true,
  },
];

export default function BlogPage() {
  return (
    <>

      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden min-h-[45vh] flex items-center">
        <div className="glow-orb glow-orb-accent w-[400px] h-[400px] top-0 right-1/4 opacity-[0.06]" />
        <div className="relative mx-auto max-w-4xl px-6 py-20 md:py-28 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-accent mb-6">
            Blog
          </span>
          <h1
            className="text-4xl md:text-6xl font-bold leading-[1.1] mb-8 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Words for
            <br />
            <span className="gradient-text-warm">the Journey</span>
          </h1>
          <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
            Reflections, teaching, and hard-won wisdom on the long road of
            fatherhood. New posts coming regularly.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

      {/* ═══ POSTS ═══ */}
      <section className="mx-auto max-w-3xl px-6 py-12 md:py-20">
        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="card-soft p-8 md:p-10 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/8 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-text-muted/50">·</span>
                <span className="text-xs text-text-muted/60">{post.date}</span>
              </div>
              <h2
                className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors duration-300"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {post.title}
              </h2>
              <p className="text-text-muted leading-relaxed mb-5">
                {post.excerpt}
              </p>
              {post.comingSoon ? (
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-text-muted/50 border border-border/50 rounded-full px-4 py-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                  Coming Soon
                </span>
              ) : (
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-accent-light transition-colors duration-300 group/link"
                >
                  Read More
                  <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              )}
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="w-10 h-[1.5px] bg-accent/15 mx-auto mb-6" />
          <p className="text-sm text-text-muted/50">
            More posts are being written. Check back soon.
          </p>
        </div>
      </section>

    </>
  );
}
