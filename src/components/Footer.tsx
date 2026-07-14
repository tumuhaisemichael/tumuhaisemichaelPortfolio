"use client";

import { useEffect, useState } from "react";

const footerLinks = [
  { label: "About",      href: "#about" },
  { label: "Projects",   href: "#projects" },
  { label: "Skills",     href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact" },
];

const socials = [
  { href: "https://github.com/tumuhaisemichael", icon: "ri-github-fill", label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/tumuhaise-michael-225515352/",
    icon: "ri-linkedin-fill",
    label: "LinkedIn",
  },
];

export default function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.getElementById(href.replace("#", ""));
    if (el) window.scrollTo({ top: el.offsetTop - 76, behavior: "smooth" });
  };

  return (
    <footer className="relative" style={{ background: "#060d1a" }}>
      {/* Gradient fade-in from page */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <p className="brand text-xl font-bold gradient-text mb-3">Michael Tumuhaise</p>
            <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
              Full Stack Software Engineer crafting high-performance, modular
              digital solutions from Kampala, Uganda.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
              Quick Links
            </h4>
            <div className="space-y-2.5">
              {footerLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => scrollTo(e, l.href)}
                  className="block text-sm text-gray-500 hover:text-teal-400 transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-500
                             border border-white/10 hover:border-teal-500/50 hover:text-teal-400
                             transition-all hover:scale-110 cursor-pointer"
                >
                  <i className={`${s.icon} ri-lg`} />
                </a>
              ))}
            </div>

            <div className="mt-6">
              <a
                href="/tumuhaise"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold
                           rounded-lg border border-white/10 text-gray-400
                           hover:border-teal-500/50 hover:text-teal-400 transition-all"
              >
                <i className="ri-file-user-line" />
                View Full CV
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4"
             style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="text-xs" style={{ color: "#4b5563" }}>
            © {new Date().getFullYear()} Michael Tumuhaise. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "#374151" }}>
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-full shadow-xl
                    bg-gradient-to-br from-teal-500 to-teal-700 text-white
                    flex items-center justify-center z-50 cursor-pointer
                    transition-all duration-300 hover:scale-110 ${
                      visible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4 pointer-events-none"
                    }`}
      >
        <i className="ri-arrow-up-line ri-lg" />
      </button>
    </footer>
  );
}
