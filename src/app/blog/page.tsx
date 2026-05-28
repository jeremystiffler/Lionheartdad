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
      {/* HERO */}
      <section>
        <div className="mx-auto max-w-4xl px-6 py-24 md:py-32 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-accent mb-6">
            Blog
          </span>
          <h1
            className="text-4xl md:text-6xl font-bold leading-[1.1] mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Words for the Journey
          </h1>
          <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-2xl mx-auto">
            Reflections, teaching, and hard-won wisdom on the long road of
            fatherhood. New posts coming regularly.
          </p>
        </div>
      </section>

      {/* POSTS LIST */}
      <section className="mx-auto max-w-3xl px-6 pb-24">
        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="rounded-xl border border-border bg-surface p-8 md:p-10 transition-all hover:border-accent/30"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-accent">
                  {post.category}
                </span>
                <span className="text-xs text-text-muted">·</span>
                <span className="text-xs text-text-muted">{post.date}</span>
              </div>
              <h2
                className="text-2xl font-bold mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {post.title}
              </h2>
              <p className="text-text-muted leading-relaxed mb-4">
                {post.excerpt}
              </p>
              {post.comingSoon ? (
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-text-muted border border-border rounded-full px-3 py-1">
                  Coming Soon
                </span>
              ) : (
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block text-sm font-bold text-accent hover:text-accent-light transition-colors"
                >
                  Read More →
                </Link>
              )}
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xs text-text-muted">
            More posts are being written. Check back soon.
          </p>
        </div>
      </section>
    </>
  );
}
