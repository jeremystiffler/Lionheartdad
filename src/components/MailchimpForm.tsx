"use client";

import { useState } from "react";

// ─── Config ───
const MAILCHIMP_ACTION_URL =
  "https://gmail.us21.list-manage.com/subscribe/post?u=YOUR_U_VALUE&id=YOUR_ID_VALUE";
const MAILCHIMP_U = "YOUR_U_VALUE";
const MAILCHIMP_ID = "YOUR_ID_VALUE";

export default function MailchimpForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("idle");
    setMessage("");

    try {
      const form = document.createElement("form");
      form.action = MAILCHIMP_ACTION_URL;
      form.method = "POST";
      form.target = "mailchimp-iframe";
      form.style.display = "none";

      const emailInput = document.createElement("input");
      emailInput.type = "email";
      emailInput.name = "EMAIL";
      emailInput.value = email;
      form.appendChild(emailInput);

      const botTrap = document.createElement("input");
      botTrap.type = "text";
      botTrap.name = `b_${MAILCHIMP_U}_${MAILCHIMP_ID}`;
      botTrap.tabIndex = -1;
      botTrap.style.position = "absolute";
      botTrap.style.left = "-5000px";
      form.appendChild(botTrap);

      document.body.appendChild(form);

      const iframe = document.createElement("iframe");
      iframe.name = "mailchimp-iframe";
      iframe.style.display = "none";
      document.body.appendChild(iframe);

      form.submit();

      setTimeout(() => {
        document.body.removeChild(form);
        document.body.removeChild(iframe);
        setStatus("success");
        setMessage("You're in! Check your email to confirm.");
        setEmail("");
      }, 1500);
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Try again or email us directly.");
    }
  };

  if (MAILCHIMP_ACTION_URL.includes("YOUR_U_VALUE")) {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          window.location.href = `mailto:jeremy@lionheartdad.com?subject=Add me to the Lion email list&body=Please add ${encodeURIComponent(email || "my email")} to the list.`;
        }}
        className="flex flex-col gap-3"
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            required
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded-sm border border-[#8b6f47]/15 bg-white px-4 py-3 text-sm text-[#1a1714] placeholder:text-[#8a8078]/50 focus:outline-none focus:border-[#8b6f47]/30 transition-colors"
          />
          <button type="submit" className="btn-secondary whitespace-nowrap !rounded-sm">
            Join the List
          </button>
        </div>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 rounded-sm border border-[#8b6f47]/15 bg-white px-4 py-3 text-sm text-[#1a1714] placeholder:text-[#8a8078]/50 focus:outline-none focus:border-[#8b6f47]/30 transition-colors"
        />
        <button type="submit" className="btn-secondary whitespace-nowrap !rounded-sm">
          Join the List
        </button>
      </div>
      {status === "success" && (
        <p className="text-sm text-[#8b6f47] mt-1">{message}</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400 mt-1">{message}</p>
      )}
    </form>
  );
}
