"use client";

import { FormEvent, useState } from "react";
import styles from "./trialdesign.module.css";

const contactFacts = [
  { label: "Email", value: "michaeltumuhaise11@gmail.com", href: "mailto:michaeltumuhaise11@gmail.com" },
  { label: "Phone", value: "+256 782 711 856", href: "tel:+256782711856" },
  { label: "Based in", value: "Kampala, Uganda" },
];

export default function TrialContact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xjkoyvkg", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error("Unable to send message");
      setForm({ name: "", email: "", message: "" });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className={styles.contact} id="contact" aria-labelledby="contact-title">
      <div className={styles.contactTopline}><span>05 / Start a conversation</span><span>Available for selected work</span></div>
      <div className={styles.contactGrid}>
        <div className={styles.contactInvitation}>
          <p className={styles.contactMark} aria-hidden="true">✳</p>
          <h2 id="contact-title">Let&apos;s make<br />something <em>useful.</em></h2>
          <p>I&apos;m available for product work, technical partnerships, and focused ideas that deserve a dependable build.</p>
          <a className={styles.emailLink} href="mailto:michaeltumuhaise11@gmail.com">michaeltumuhaise11@gmail.com <span aria-hidden="true">↗</span></a>
          <dl className={styles.contactFacts}>
            {contactFacts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.href ? <a href={fact.href}>{fact.value}</a> : fact.value}</dd></div>)}
          </dl>
        </div>

        <div className={styles.contactFormShell}>
          {status === "sent" ? (
            <div className={styles.contactSuccess}>
              <span aria-hidden="true">✓</span><p>Message received.</p><small>Thank you — I&apos;ll be in touch soon.</small>
              <button type="button" onClick={() => setStatus("idle")}>Send another ↗</button>
            </div>
          ) : (
            <form className={styles.contactForm} onSubmit={submit}>
              <div className={styles.formHeading}><span>Project enquiry</span><p>Tell me what you&apos;re building.</p></div>
              {status === "error" && <p className={styles.formError}>Your message could not be sent. Please email me directly.</p>}
              <label>Your name<input name="name" required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Your name" /></label>
              <label>Email address<input name="email" type="email" required value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="you@company.com" /></label>
              <label>What&apos;s on your mind?<textarea name="message" required rows={5} value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder="A few details about the idea, challenge, or project…" /></label>
              <button type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send enquiry ↗"}</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
