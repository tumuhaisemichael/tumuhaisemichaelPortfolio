"use client";

import React, { useState } from "react";

export default function Contact() {
  const [form, setForm]           = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmit]   = useState(false);
  const [success, setSuccess]     = useState(false);
  const [error, setError]         = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmit(true);
    setError("");
    try {
      const res = await fetch("https://formspree.io/f/xjkoyvkg", {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "Content-Type": "application/json", Accept: "application/json" },
      });
      if (res.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection.");
    } finally {
      setSubmit(false);
    }
  };

  const contactItems = [
    {
      icon: "ri-mail-send-line",
      label: "Email",
      value: "michaeltumuhaise11@gmail.com",
      href: "mailto:michaeltumuhaise11@gmail.com",
      color: "text-blue-500",
      bg: "bg-blue-50 dark:bg-blue-950/30",
    },
    {
      icon: "ri-phone-line",
      label: "Phone",
      value: "+256 782 711 856",
      color: "text-emerald-500",
      bg: "bg-emerald-50 dark:bg-emerald-950/30",
    },
    {
      icon: "ri-map-pin-2-fill",
      label: "Location",
      value: "Kampala, Uganda",
      color: "text-red-500",
      bg: "bg-red-50 dark:bg-red-950/20",
    },
  ];

  return (
    <section id="contact" className="py-24 section-alt relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/40 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="eyebrow block mb-3">Get In Touch</span>
          <h2 className="section-title mb-4">Let&apos;s Work Together</h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind or want to say hi? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* ── Contact Info ── */}
          <div className="card p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "var(--text)" }}>
                Contact Information
              </h3>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
                I&apos;m currently available for freelance work and full-time
                opportunities. Let&apos;s build something great together.
              </p>

              <div className="space-y-5">
                {contactItems.map((item) => (
                  <div key={item.label} className="flex items-center gap-4 group">
                    <div className={`w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center
                                    ${item.bg} ${item.color} transition-transform group-hover:scale-110`}>
                      <i className={`${item.icon} ri-lg`} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider"
                         style={{ color: "var(--text-subtle)" }}>
                        {item.label}
                      </p>
                      {item.href ? (
                        <a href={item.href}
                           className="text-sm font-semibold text-primary hover:underline">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div className="mt-10 pt-6" style={{ borderTop: "1px solid var(--border-soft)" }}>
              <p className="text-xs font-bold uppercase tracking-wider mb-4"
                 style={{ color: "var(--text-subtle)" }}>
                Connect with me
              </p>
              <div className="flex gap-3">
                {[
                  { href: "https://github.com/tumuhaisemichael", icon: "ri-github-fill", label: "GitHub" },
                  { href: "https://www.linkedin.com/in/tumuhaise-michael-225515352/", icon: "ri-linkedin-fill", label: "LinkedIn" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-11 h-11 flex items-center justify-center rounded-lg
                               text-[var(--text-muted)] hover:text-primary
                               border transition-all hover:border-primary hover:scale-110 cursor-pointer"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <i className={`${s.icon} ri-lg`} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Contact Form ── */}
          <div className="card relative overflow-hidden" style={{ minHeight: 460 }}>
            {/* Top accent bar */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-teal-500 to-amber-500" />

            <div className="p-8 h-full">
              {success ? (
                <div className="flex flex-col items-center justify-center h-full text-center gap-5">
                  <div className="w-20 h-20 rounded-lg bg-emerald-50 dark:bg-emerald-950/30
                                  flex items-center justify-center text-4xl text-emerald-500 animate-bounce">
                    <i className="ri-check-line" />
                  </div>
                  <h3 className="text-2xl font-bold" style={{ color: "var(--text)" }}>
                    Message Sent!
                  </h3>
                  <p style={{ color: "var(--text-muted)" }}>
                    Thanks for reaching out — I&apos;ll reply as soon as possible.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="btn-primary px-6 py-3 cursor-pointer"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="flex flex-col h-full gap-5">
                  <h3 className="text-xl font-bold" style={{ color: "var(--text)" }}>
                    Send a Message
                  </h3>

                  {error && (
                    <div className="px-4 py-3 rounded-lg text-sm font-semibold
                                    bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400
                                    border border-red-200 dark:border-red-900/30">
                      {error}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider"
                             style={{ color: "var(--text-subtle)" }}>
                        Your Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={onChange}
                        placeholder="John Doe"
                        className="form-input"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider"
                             style={{ color: "var(--text-subtle)" }}>
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={onChange}
                        placeholder="john@example.com"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 flex-1">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider"
                           style={{ color: "var(--text-subtle)" }}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={onChange}
                      placeholder="Tell me about your project..."
                      className="form-input resize-none flex-1"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4 mt-auto">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-primary w-full sm:w-auto px-8 py-3.5 cursor-pointer
                                 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"
                                    strokeDasharray="32" strokeDashoffset="12" />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message
                          <i className="ri-send-plane-fill" />
                        </>
                      )}
                    </button>
                    <p className="text-xs text-center" style={{ color: "var(--text-subtle)" }}>
                      Or email directly:{" "}
                      <a href="mailto:michaeltumuhaise11@gmail.com"
                         className="text-primary font-semibold hover:underline">
                        michaeltumuhaise11@gmail.com
                      </a>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
