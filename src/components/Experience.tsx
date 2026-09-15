"use client";

import { experiences, type Exp } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="eyebrow block mb-3">Career Path</span>
          <h2 className="section-title mb-4">Professional Milestones</h2>
          <p className="section-subtitle mx-auto">
            My career journey and the companies I&apos;ve had the pleasure to work with.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — hidden on mobile */}
          <div className="hidden md:block timeline-line" />

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className="relative flex flex-col md:flex-row items-start md:items-center gap-6"
                >
                  {/* Left card / spacer */}
                  <div className={`md:w-5/12 ${isLeft ? "md:order-1" : "md:order-3 md:invisible"}`}>
                    {isLeft && <TimelineCard exp={exp} />}
                  </div>

                  {/* Centre dot */}
                  <div className="hidden md:flex md:order-2 md:w-2/12 justify-center z-10">
                    <div className={`w-11 h-11 rounded-full ${exp.dotColor} border-4
                                    border-[var(--bg)] shadow-lg flex items-center justify-center
                                    text-white transition-transform hover:scale-110`}>
                      <i className={`${exp.icon} text-sm`} />
                    </div>
                  </div>

                  {/* Right card / spacer */}
                  <div className={`md:w-5/12 ${isLeft ? "md:order-3 md:invisible" : "md:order-1"}`}>
                    {!isLeft && <TimelineCard exp={exp} />}
                  </div>

                  {/* Mobile card (always shown below) */}
                  <div className="md:hidden w-full">
                    <TimelineCard exp={exp} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

function TimelineCard({ exp }: { exp: Exp }) {
  return (
    <div className="card p-6 hover-lift">
      {/* Period badge */}
      <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full
                       ${exp.accentBg} ${exp.accentColor} mb-4`}>
        <i className="ri-time-line" />
        {exp.period}
      </span>

      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <h3 className="text-lg font-bold" style={{ color: "var(--text)" }}>
            {exp.role}
          </h3>
          <p className="text-sm font-semibold" style={{ color: "var(--text-muted)" }}>
            {exp.company}
          </p>
        </div>
        <div className={`w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center
                         ${exp.accentBg} ${exp.accentColor} text-lg`}>
          <i className={exp.icon} />
        </div>
      </div>

      <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
        {exp.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {exp.tags.map((t, ti) => (
          <span key={ti} className="skill-badge text-xs">{t}</span>
        ))}
      </div>
    </div>
  );
}
