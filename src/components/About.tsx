"use client";

import { useEffect, useState } from "react";

export default function About() {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const tick = () => {
      setLocalTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: "Africa/Kampala",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="about" className="py-24 section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14">
          <span className="eyebrow block mb-3">About Me</span>
          <h2 className="section-title mb-4">My Journey &amp; Philosophy</h2>
          <div className="divider-gradient w-16 mt-4" />
        </div>

        {/* Bento grid */}
        <div className="bento-grid">

          {/* ── Who I Am — 2×2 ── */}
          <div className="bento-cell card lg:col-span-2 lg:row-span-2 flex flex-col justify-between p-8">
            <div>
              <div className="w-12 h-12 rounded-lg bg-teal-50 dark:bg-teal-950/30
                              flex items-center justify-center text-primary mb-6 text-2xl">
                <i className="ri-user-smile-line" />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--text)" }}>
                Who I Am
              </h3>
              <p className="leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                I am a passionate Full Stack Software Engineer dedicated to crafting
                robust, high-performance applications. With deep expertise across
                backend systems, web ecosystems, and mobile integration, I solve
                complex architectural puzzles and turn ideas into reality.
              </p>
              <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>
                My approach centres on clean architectures, semantic frontend
                engineering, and scale-friendly APIs. I thrive in environments where
                performance, maintainability, and clean code are top priorities.
              </p>
            </div>

            {/* Socials */}
            <div className="mt-8 pt-6 flex items-center gap-4"
                 style={{ borderTop: "1px solid var(--border-soft)" }}>
              <span className="text-sm font-semibold" style={{ color: "var(--text-subtle)" }}>
                Find me on:
              </span>
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
                  className="w-10 h-10 flex items-center justify-center rounded-lg
                             text-[var(--text-muted)] hover:text-primary
                             hover:bg-teal-50 dark:hover:bg-teal-950/30 transition-all"
                >
                  <i className={`${s.icon} ri-xl`} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Years Experience ── */}
          <div className="bento-cell card flex flex-col items-center justify-center text-center p-6
                          bg-gradient-to-br from-teal-500/5 to-amber-500/5">
            <span className="stat-number mb-2">4+</span>
            <span className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: "var(--text-subtle)" }}>
              Years of Professional<br />Experience
            </span>
          </div>

          {/* ── Education ── */}
          <div className="bento-cell card p-6 flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-lg bg-amber-50 dark:bg-amber-950/30
                              flex items-center justify-center text-amber-500 text-2xl mb-4">
                <i className="ri-graduation-cap-line" />
              </div>
              <h4 className="font-bold mb-1" style={{ color: "var(--text)" }}>
                Education
              </h4>
              <p className="text-sm font-semibold" style={{ color: "var(--text-muted)" }}>
                BSc. Software Engineering
              </p>
              <p className="text-xs mt-1" style={{ color: "var(--text-subtle)" }}>
                Makerere University, Uganda
              </p>
            </div>
            <div className="pt-4 mt-4" style={{ borderTop: "1px solid var(--border-soft)" }}>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                <i className="ri-sparkling-line align-[-1px]" /> Continuous Learner
              </span>
            </div>
          </div>

          {/* ── Location & Clock ── */}
          <div className="bento-cell card p-6 flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-lg bg-red-50 dark:bg-red-950/20
                              flex items-center justify-center text-red-500 text-2xl mb-4">
                <i className="ri-map-pin-2-fill" />
              </div>
              <h4 className="font-bold mb-1" style={{ color: "var(--text)" }}>
                Kampala, Uganda
              </h4>
              <p className="text-xs" style={{ color: "var(--text-subtle)" }}>
                GMT+3 · East Africa Time
              </p>
            </div>
            <div className="pt-4 mt-4" style={{ borderTop: "1px solid var(--border-soft)" }}>
              <span className="text-xs font-semibold uppercase tracking-wider block mb-1"
                    style={{ color: "var(--text-subtle)" }}>
                Local Time
              </span>
              <p className="text-lg font-black gradient-text tabular-nums">
                {localTime || "--"}
              </p>
            </div>
          </div>

          {/* ── Quick Facts ── */}
          <div className="bento-cell card p-6 flex flex-col">
            <div className="w-11 h-11 rounded-lg bg-blue-50 dark:bg-blue-950/30
                            flex items-center justify-center text-blue-500 text-2xl mb-4">
              <i className="ri-file-info-line" />
            </div>
            <h4 className="font-bold mb-4" style={{ color: "var(--text)" }}>
              Quick Facts
            </h4>
            <div className="space-y-3 text-xs flex-1">
              {[
                { label: "Email",        value: "michaeltumuhaise11@gmail.com", isLink: true },
                { label: "Status",       value: "Open to opportunities",        isGreen: true },
                { label: "Languages",    value: "English, Luganda" },
              ].map((f) => (
                <div key={f.label} className="flex justify-between items-center pb-3"
                     style={{ borderBottom: "1px solid var(--border-soft)" }}>
                  <span className="font-semibold" style={{ color: "var(--text-subtle)" }}>
                    {f.label}
                  </span>
                  {f.isLink ? (
                    <a href={`mailto:${f.value}`}
                       className="text-primary hover:underline font-semibold truncate max-w-[140px]">
                      {f.value}
                    </a>
                  ) : f.isGreen ? (
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">{f.value}</span>
                  ) : (
                    <span className="font-semibold" style={{ color: "var(--text-muted)" }}>{f.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── Philosophy — 2 cols ── */}
          <div className="bento-cell card lg:col-span-2 p-8 flex flex-col md:flex-row
                          items-start md:items-center gap-8">
            <div className="flex-1">
              <div className="w-11 h-11 rounded-lg bg-amber-50 dark:bg-amber-950/30
                              flex items-center justify-center text-amber-500 text-xl mb-4">
                <i className="ri-lightbulb-flash-line" />
              </div>
              <h4 className="text-lg font-bold mb-2" style={{ color: "var(--text)" }}>
                What Drives Me
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Building products is more than just coding — it is about crafting
                software that is highly maintainable, intuitive, and secure. I focus
                on clean, well-tested modular solutions built for the long run.
              </p>
            </div>
            <blockquote className="flex-shrink-0 max-w-xs p-5 rounded-lg
                                   bg-teal-50 dark:bg-teal-950/20
                                   border border-teal-200/60 dark:border-teal-500/20">
              <p className="text-sm italic leading-relaxed text-teal-700 dark:text-teal-300">
                &ldquo;Simplicity is the soul of efficiency. The best architecture
                solves the problem with the fewest moving parts.&rdquo;
              </p>
            </blockquote>
          </div>

        </div>
      </div>
    </section>
  );
}
