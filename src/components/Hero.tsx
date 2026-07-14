"use client";

import { useEffect, useState } from "react";
import type { CSSProperties, MouseEvent } from "react";
import ParticlesBg from "./ParticlesBg";
import Image from "next/image";

const words = [
  "Robust Backend APIs",
  "Scalable Web Platforms",
  "Cross-Platform Mobile Apps",
  "Interactive IoT Solutions",
  "ML-Powered Products",
];

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "19+", label: "Projects Shipped" },
  { value: "5+", label: "Companies Served" },
];

export default function Hero() {
  const [idx, setIdx]         = useState(0);
  const [typed, setTyped]     = useState("");
  const [deleting, setDel]    = useState(false);
  const [speed, setSpeed]     = useState(90);
  const [tilt, setTilt]       = useState({ x: 0, y: 0 });

  useEffect(() => {
    const word = words[idx];
    const timer = setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, typed.length + 1);
        setTyped(next);
        setSpeed(90);
        if (next === word) {
          setTimeout(() => setDel(true), 2000);
          return;
        }
      } else {
        const next = word.slice(0, typed.length - 1);
        setTyped(next);
        setSpeed(45);
        if (next === "") {
          setDel(false);
          setIdx((i) => (i + 1) % words.length);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [typed, deleting, idx, speed]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 76, behavior: "smooth" });
  };

  const onHeroMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    setTilt({ x: Number(x.toFixed(3)), y: Number(y.toFixed(3)) });
  };

  const stageStyle: CSSProperties = {
    transform: `rotateX(${tilt.y * -5}deg) rotateY(${tilt.x * 7}deg)`,
  };

  return (
    <section
      id="home"
      className="hero-section min-h-screen pt-24 pb-20 flex items-center"
      onMouseMove={onHeroMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
    >
      <ParticlesBg />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-10 items-center">

          {/* ── Left column ── */}
          <div className="lg:col-span-7 text-center lg:text-left">

            {/* Status pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full
                            bg-white/7 border border-white/12 mb-8 animate-fade-up">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-bold text-emerald-400 tracking-wide">
                Available for remote, freelance &amp; full-time roles
              </span>
            </div>

            {/* Heading */}
            <h1 className="display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white
                           leading-[1.08] mb-5 animate-fade-up"
                style={{ animationDelay: "0.07s" }}>
              Michael Tumuhaise
            </h1>

            {/* Typed subtitle */}
            <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-300 mb-6
                            min-h-[2.5rem] animate-fade-up"
                 style={{ animationDelay: "0.14s" }}>
              I build&nbsp;
              <span className="gradient-text font-black">{typed}</span>
              <span className="text-teal-400 animate-pulse ml-0.5">|</span>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-400 mb-9 max-w-xl mx-auto lg:mx-0
                          leading-relaxed animate-fade-up"
               style={{ animationDelay: "0.21s" }}>
              Full Stack Software Engineer building production web platforms,
              mobile experiences, IoT systems, and AI-assisted products with
              practical engineering taste.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-12
                            animate-fade-up"
                 style={{ animationDelay: "0.28s" }}>
              <button
                onClick={() => scrollTo("projects")}
                className="btn-primary px-8 py-4 text-base cursor-pointer"
              >
                View Projects
                <i className="ri-arrow-right-line" />
              </button>
              <a
                href="/Michael-Tumuhaise-Software-Engineer-Resume.pdf"
                download
                className="btn-ghost px-8 py-4 text-base cursor-pointer"
              >
                Download CV
                <i className="ri-download-2-line" />
              </a>
            </div>

            {/* Mini stats */}
            <div className="border-t border-white/10 pt-8 max-w-lg mx-auto lg:mx-0
                            animate-fade-up"
                 style={{ animationDelay: "0.35s" }}>
              <div className="flex justify-center lg:justify-start gap-10">
                {stats.map((s) => (
                  <div key={s.label} className="text-center lg:text-left">
                    <p className="text-2xl font-black gradient-text">{s.value}</p>
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-0.5">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right column — Avatar ── */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="hero-stage w-full max-w-[430px]">
              <div
                className="hero-console relative min-h-[500px] p-5 sm:p-6 transition-transform duration-200 ease-out"
                style={stageStyle}
              >
                <div className="absolute top-5 left-5 right-5 z-10 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  <span>Build Console</span>
                  <span className="text-emerald-300">Live</span>
                </div>

                <div className="absolute inset-x-5 top-14 h-px bg-white/10" />
                <div className="absolute inset-x-8 top-20 h-20 bg-gradient-to-b from-teal-300/16 to-transparent animate-scan-line" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="orbital-ring w-[88%] h-[54%] animate-depth-sway" />
                  <div className="orbital-ring w-[70%] h-[40%] animate-spin-slow" />
                  <div className="orbital-ring w-[55%] h-[32%] animate-spin-rev border-dashed border-amber-300/20" />
                </div>

                <div className="relative z-20 flex h-full min-h-[452px] flex-col items-center justify-center pt-14">
                  <div className="relative h-64 w-64 sm:h-72 sm:w-72">
                    <div className="absolute inset-0 rounded-full border border-teal-300/20" />
                    <div className="absolute inset-5 rounded-full border border-blue-300/20 animate-spin-rev" />
                    <div className="absolute inset-9 rounded-full overflow-hidden border-4 border-teal-300/25 hero-avatar-glow animate-float">
                      <Image
                        src="/Michael.jpg"
                        alt="Michael Tumuhaise"
                        fill
                        sizes="(max-width: 768px) 220px, 300px"
                        priority
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="mt-5 grid w-full grid-cols-2 gap-3">
                    {[
                      ["API", "Django / Laravel"],
                      ["Mobile", "Flutter / RN"],
                      ["AI", "ML Products"],
                      ["IoT", "Sensors / Energy"],
                    ].map(([label, value]) => (
                      <div key={label} className="data-chip px-3 py-3">
                        <p className="text-[10px] font-black uppercase tracking-widest text-teal-300">
                          {label}
                        </p>
                        <p className="mt-1 text-xs font-semibold text-slate-200">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="data-chip absolute -left-3 top-24 z-30 hidden px-4 py-3 text-xs font-bold text-white shadow-xl sm:block animate-float-r">
                  <i className="ri-map-pin-2-fill text-teal-300" /> Kampala, Uganda
                </div>
                <div className="data-chip absolute -right-3 bottom-24 z-30 hidden px-4 py-3 text-xs font-bold text-white shadow-xl sm:block animate-float">
                  <i className="ri-terminal-box-line text-amber-300" /> 19+ shipped builds
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
