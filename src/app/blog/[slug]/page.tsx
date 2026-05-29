import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import EmailSignup from "@/components/EmailSignup";

const POSTS: Record<
  string,
  {
    title: string;
    date: string;
    category: string;
    image: string;
    imageAlt: string;
    body: React.ReactNode;
  }
> = {
  "welcome-to-lion": {
    title: "Welcome to Lion",
    date: "2026",
    category: "Vision",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    imageAlt: "Majestic mountain landscape",
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
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&q=80",
    imageAlt: "Father and sons together in warm light",
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
    image: "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?w=1200&q=80",
    imageAlt: "Warm light through trees",
    body: (
      <>
        <p>
          Before &ldquo;train up a child in the way he should go&rdquo; —
          before any parenting advice, before any fatherhood framework — Jesus
          said something that reshapes everything.
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
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: `${post.title} — ${post.category} — reflections on biblical fatherhood from Lion.`,
    openGraph: {
      title: `${post.title} — Lion Blog`,
      description: `${post.title} — reflections on biblical fatherhood.`,
      type: "article",
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POSTS[slug];

  if (!post) {
    return (
      <section className="section-spacious flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="text-[#8a7e74] mb-8">
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
      <section className="hero-overlay" style={{ minHeight: "60vh" }}>
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          priority
          className="hero-bg-image"
          sizes="100vw"
        />
        <div className="container text-center py-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#c9a85c] bg-[#141210]/50 px-4 py-1.5 rounded-full backdrop-blur-sm border border-[#c9a85c]/20">
              {post.category}
            </span>
            <span className="text-sm text-[#f5f0eb]/50">·</span>
            <span className="text-sm text-[#f5f0eb]/60">{post.date}</span>
          </div>
          <h1 className="text-balance">{post.title}</h1>
        </div>
      </section>

      {/* ═══ ARTICLE BODY ═══ */}
      <article className="section">
        <div className="container">
          <div className="blog-prose max-w-3xl mx-auto">{post.body}</div>
        </div>
      </article>

      {/* ═══ EMAIL SIGNUP — every blog post ═══ */}
      <section className="section bg-warm">
        <div className="container">
          <EmailSignup
            heading="Want More Like This?"
            subtext="Join the Lion email list and get new posts, verses, and fatherhood reflections delivered straight to your inbox."
          />
        </div>
      </section>
    </>
  );
}
