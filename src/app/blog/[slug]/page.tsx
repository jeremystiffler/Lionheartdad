import type { Metadata } from "next";
import Link from "next/link";
import EmailSignup from "@/components/EmailSignup";

// ─── Blog Post Data ───
// In the future this can be fetched from a CMS or markdown files.
// For now, we define posts here and look them up by slug.
const POSTS: Record<
  string,
  {
    title: string;
    date: string;
    category: string;
    body: React.ReactNode;
  }
> = {
  "welcome-to-lion": {
    title: "Welcome to Lion",
    date: "2026",
    category: "Vision",
    body: (
      <>
        <p>
          This is why we exist. Not a program. Not a curriculum. A commitment
          among men to lead our homes with courage and faith.
        </p>
        <p>
          Lion was born out of a simple conviction: fathers need other fathers.
          Not to judge. Not to lecture. But to stand shoulder to shoulder and
          say, &ldquo;Let&apos;s do this thing called fatherhood — on purpose.&rdquo;
        </p>
        <h2>It Starts With Showing Up</h2>
        <p>
          You don&apos;t need to have it all figured out. You don&apos;t need
          perfect theology or a flawless track record. You just need to show
          up — consistently, honestly, and willing to be changed.
        </p>
        <p>
          That&apos;s what Lion is. A brotherhood of men who refuse to coast.
        </p>
      </>
    ),
  },
  "fathered-well": {
    title: "What It Means to Be Fathered Well",
    date: "2026",
    category: "Identity",
    body: (
      <>
        <p>
          You can&apos;t give what you never received. It&apos;s one of the
          hardest truths in fatherhood — and one of the most important.
        </p>
        <p>
          Many of us grew up without a father present. Or without a father who
          was emotionally available. Or with a father who loved us but
          didn&apos;t know how to show it.
        </p>
        <h2>The Father Wound</h2>
        <p>
          Scripture tells us that God is a father to the fatherless (Psalm
          68:5). That&apos;s not a throwaway line. It&apos;s a promise that
          addresses one of the deepest wounds a person can carry.
        </p>
        <p>
          When we let God father us well, we learn what it looks like to father
          our own children well. The cycle breaks here.
        </p>
      </>
    ),
  },
  "first-commandment-for-dads": {
    title: "The First Commandment for Dads",
    date: "2026",
    category: "Teaching",
    body: (
      <>
        <p>
          Before &ldquo;train up a child in the way he should go&rdquo; —
          before any parenting advice, before any fatherhood framework —
          Jesus said something that reshapes everything.
        </p>
        <blockquote>
          <p>
            &ldquo;Love the Lord your God with all your heart and with all
            your soul and with all your mind. This is the first and greatest
            commandment.&rdquo;
          </p>
          <cite>— Matthew 22:37-38 (NIV)</cite>
        </blockquote>
        <h2>The Implication</h2>
        <p>
          If the first and greatest commandment is to love God — then our
          primary calling as fathers is not to raise good kids. It is to love
          God first. Everything else flows from that.
        </p>
        <p>
          When our kids see us pursuing God — not perfectly, but genuinely —
          they learn what it looks like to live with Him at the center.
        </p>
      </>
    ),
  },
};

// ─── Generate static params for Next.js ───
export async function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) return { title: "Post Not Found — Lion Blog" };
  return {
    title: `${post.title} — Lion Blog`,
    description: `${post.title} — ${post.category} — reflections on biblical fatherhood from Lion.`,
  };
}

// ─── Blog Post Page ───
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POSTS[slug];

  if (!post) {
    return (
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Post Not Found
          </h1>
          <p className="text-text-muted mb-8">
            Sorry, we couldn&apos;t find that article.
          </p>
          <Link href="/blog" className="btn-secondary">
            ← Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>

      {/* ═══ ARTICLE HERO ═══ */}
      <section className="relative overflow-hidden pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="glow-orb glow-orb-accent w-[400px] h-[400px] -top-20 right-1/4 opacity-[0.05]" />
        <div className="relative mx-auto max-w-3xl px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-foreground transition-colors duration-300 mb-8 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
            All Posts
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/8 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-xs text-text-muted/50">·</span>
            <span className="text-xs text-text-muted/60">{post.date}</span>
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {post.title}
          </h1>
        </div>
      </section>

      {/* ═══ ARTICLE BODY ═══ */}
      <article className="mx-auto max-w-3xl px-6 pb-20">
        <div className="prose prose-invert max-w-none space-y-6 text-text-muted leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:font-heading [&_h2]:mt-12 [&_h2]:mb-4 [&_p]:leading-relaxed [&_blockquote]:border-l-2 [&_blockquote]:border-accent/30 [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-foreground/80 [&_blockquote_p]:text-foreground/80 [&_cite]:block [&_cite]:mt-3 [&_cite]:text-sm [&_cite]:text-text-muted [&_cite]:not-italic">
          {post.body}
        </div>
      </article>

      {/* ═══ EMAIL SIGNUP — every blog post ═══ */}
      <section className="mx-auto max-w-2xl px-6 pb-20">
        <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent mb-16" />
        <EmailSignup
          heading="Want More Like This?"
          subtext="Join the Lion email list and get new posts, verses, and fatherhood reflections delivered straight to your inbox."
        />
      </section>

    </>
  );
}
