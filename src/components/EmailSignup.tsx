import MailchimpForm from "@/components/MailchimpForm";

interface EmailSignupProps {
  heading?: string;
  subtext?: string;
  className?: string;
}

export default function EmailSignup({
  heading = "Stay in the Loop",
  subtext = "Get occasional emails — a verse, a thought for dads, and updates from Lion. No spam. Just substance.",
  className = "",
}: EmailSignupProps) {
  return (
    <div className={`card text-center ${className}`}>
      <h3 className="mb-2">{heading}</h3>
      <p className="text-sm text-[var(--text-muted)] mb-5 max-w-md mx-auto">{subtext}</p>
      <MailchimpForm />
    </div>
  );
}
