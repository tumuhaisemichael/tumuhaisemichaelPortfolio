"use client";

import { useEffect, useState } from "react";
import styles from "./trialdesign.module.css";

export interface SectionMenuItem {
  label: string;
  href: string;
  number: string;
  icon: string;
}

export default function SectionMenu({ sections }: { sections: SectionMenuItem[] }) {
  const [active, setActive] = useState("#about-me");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0.05, 0.25, 0.5] },
    );

    sections.forEach(({ href }) => {
      const element = document.querySelector(href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  const current = sections.find((section) => section.href === active) ?? sections[0];

  return (
    <nav className={styles.sectionMenu} aria-label="Section navigation">
      <button type="button" className={styles.menuTrigger} onClick={() => setOpen((value) => !value)} aria-expanded={open}>
        <span className={styles.menuKicker}>Index</span>
        <span className={styles.menuCurrent}><b>{current.number}</b>{current.label}</span>
        <i aria-hidden="true" className={open ? styles.menuOpen : ""} />
      </button>
      <div className={`${styles.menuPanel} ${open ? styles.menuPanelOpen : ""}`}>
        <div className={styles.menuPanelTop}><span>Portfolio sections</span><span>01—05</span></div>
        {sections.map((section) => (
          <a key={section.href} href={section.href} className={active === section.href ? styles.menuActive : ""} onClick={() => setOpen(false)}>
            <small>{section.number}</small><span>{section.label}</span><b aria-hidden="true">↗</b>
          </a>
        ))}
      </div>
    </nav>
  );
}
