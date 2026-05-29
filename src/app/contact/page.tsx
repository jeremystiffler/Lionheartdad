import type { Metadata } from "next";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import MailchimpForm from "@/components/MailchimpForm";

export const metadata: Metadata = {
  title: "Contact — Lion Intentional Fathers",
  description:
    "Get in touch with Lion. Whether you have questions, want to join the brotherhood, or are interested in the small group or camp — reach out.",
};

const CALENDLY_URL = "https://calendly.com/jeremystiffler/30min";

export default function ContactPage() {
  return (
    <>

      {/* ═══ HERO ═══ */}
      <section className="section-spacious flex items-center">
        <div className="container text-center">
          <span className="eyebrow mb-6">Contact</span>
          <h1 className="text-balance mb-6">Let&apos;s Talk</h1>
          <p className="lead max-w-lg mx-auto">
            Whether you have questions, want to join the brotherhood, or just
            need someone to listen — reach out. We&apos;ll get back to you.
          </p>
        </div>
      </section>

      {/* ═══ OPTIONS ═══ */}
      <section className="section-spacious bg-secondary">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

            {/* Email */}
            <div className="card text-center">
              <h3 className="mb-3">Send an Email</h3>
              <p className="sub leading-relaxed mb-6">
                The simplest way to reach us. Jeremy responds personally.
              </p>
              <a
                href="mailto:jeremy@lionheartdad.com"
                className="btn-primary"
              >
                Email Jeremy
              </a>
            </div>

            {/* Call */}
            <div className="card text-center">
              <h3 className="mb-3">Book a Call</h3>
              <p className="sub leading-relaxed mb-6">
                Schedule a 15-minute conversation. No pressure. Just two guys talking.
              </p>
              <CalendlyEmbed url={CALENDLY_URL} />
            </div>

          </div>
        </div>
      </section>

      {/* ═══ EMAIL LIST ═══ */}
      <section className="section-spacious">
        <div className="container">
          <div className="card max-w-xl mx-auto text-center">
            <h3 className="mb-3">Join the Brotherhood List</h3>
            <p className="sub leading-relaxed mb-6">
              Get occasional emails — a verse, a thought for dads, and updates
              from Lion. No spam. Just substance.
            </p>
            <MailchimpForm />
          </div>
        </div>
      </section>

      {/* ═══ QUOTE ═══ */}
      <section className="section bg-warm">
        <div className="container text-center">
          <div className="pullquote">
            &ldquo;Iron sharpens iron, and one man sharpens another.&rdquo;
            <cite>— Proverbs 27:17</cite>
          </div>
        </div>
      </section>

    </>
  );
}
