"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Home",       href: "#home" },
  { label: "About",      href: "#about" },
  { label: "Projects",   href: "#projects" },
  { label: "Skills",     href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [activeSection, setActive]    = useState("home");
  const [scrollPct, setScrollPct]     = useState(0);
  const [scrolled, setScrolled]       = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const top    = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollPct((top / height) * 100);
      setScrolled(top > 20);

      const sections = Array.from(document.querySelectorAll("section[id]")) as HTMLElement[];
      const offset = 130;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (window.scrollY + offset >= sections[i].offsetTop) {
          setActive(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.getElementById(href.replace("#", ""));
    if (el) window.scrollTo({ top: el.offsetTop - 76, behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll progress */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollPct}%` }}
        aria-hidden
      />

      <nav
        className={`site-nav fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[68px]">
            {/* Brand */}
            <a
              href="#home"
              onClick={(e) => scrollTo(e, "#home")}
              className="brand text-xl font-bold gradient-text select-none"
            >
              Michael<span className="opacity-50">.</span>
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => scrollTo(e, l.href)}
                  className={`nav-link px-3 py-1.5 rounded-lg text-sm ${
                    activeSection === l.href.replace("#", "") ? "nav-active" : ""
                  }`}
                >
                  {l.label}
                </a>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
                className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg
                           text-[var(--text-muted)] hover:bg-[var(--surface-2)] transition-colors cursor-pointer"
              >
                <i className={mobileOpen ? "ri-close-line ri-lg" : "ri-menu-3-line ri-lg"} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className="px-4 pb-4 pt-2 space-y-1 border-t"
            style={{ borderColor: "var(--border)" }}
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => scrollTo(e, l.href)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  activeSection === l.href.replace("#", "")
                    ? "text-primary bg-teal-50 dark:bg-teal-950/30"
                    : "text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface-2)]"
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
