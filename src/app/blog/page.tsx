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
      <section className="section-spacious flex items-center">
        <div className="container text-center">
          <span className="eyebrow mb-6">Blog</span>
          <h1 className="text-balance mb-6">Words for the Journey</h1>
          <p className="lead max-w-lg mx-auto">
            Reflections, teaching, and hard-won wisdom on the long road of
            fatherhood. New posts coming regularly.
          </p>
        </div>
      </section>

      {/* ═══ POSTS ═══ */}
      <section className="section">
        <div className="container">
          <div className="space-y-4 max-w-3xl mx-auto">
            {posts.map((post) => (
              <article key={post.slug} className="card">
                <div className="flex items-center gap-3 mb-3">
                  <span className="eyebrow">{post.category}</span>
                  <span className="text-[#8a7e74]/30">·</span>
                  <span className="text-sm text-[#8a7e74]/60">{post.date}</span>
                </div>
                <h2 className="mb-2">{post.title}</h2>
                <p className="sub leading-relaxed mb-4">{post.excerpt}</p>
                {post.comingSoon ? (
                  <span className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-[#8a7e74]/40">
                    Coming Soon
                  </span>
                ) : (
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-[#c9a85c] hover:text-[#a88a48] transition-colors"
                  >
                    Read More →
                  </Link>
                )}
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="divider" />
            <p className="text-sm text-[#8a7e74]/50">
              More posts are being written. Check back soon.
            </p>
          </div>
        </div>
      </section>

    </>
  );
}
