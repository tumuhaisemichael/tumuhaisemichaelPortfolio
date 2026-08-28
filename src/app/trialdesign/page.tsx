import type { Metadata } from "next";
import Image from "next/image";
import styles from "./trialdesign.module.css";

export const metadata: Metadata = {
  title: "Michael Tumuhaise — Full Stack Software Engineer",
  description: "Portfolio of Michael Tumuhaise, Full Stack Software Engineer.",
};

const navigation = ["About me", "Projects", "Services", "Notes"];

export default function TrialDesignPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} id="top">
        <header className={styles.header}>
          <div className={styles.navigationGroup}>
            <a className={styles.mark} href="#top" aria-label="Michael Tumuhaise home">MT</a>
            <nav className={styles.nav} aria-label="Primary navigation">
              {navigation.map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`}>{item}</a>
              ))}
            </nav>
          </div>
          <a className={styles.callLink} href="mailto:michaeltumuhaise11@gmail.com">Book a call ↗</a>
        </header>

        <aside className={styles.sideRail}>
          <span>Full stack software engineer</span>
          <i />
          <small>2026</small>
        </aside>

        <div className={styles.stats}>
          <div><strong>19+</strong><span>Projects completed</span></div>
          <div><strong>4+</strong><span>Years building</span></div>
        </div>

        <section className={styles.heroCopy} aria-labelledby="hero-title">
          <h1 id="hero-title">Hello.</h1>
          <p>— I&apos;m Michael, a full stack developer.</p>
        </section>

        <div className={styles.portrait}>
          <Image
            src="/Michael-hero-portrait-cutout-v2.png"
            alt="Michael Tumuhaise"
            fill
            priority
            sizes="(max-width: 780px) 88vw, 49vw"
            className={styles.portraitImage}
          />
        </div>

        <p className={styles.scrollCue}>Scroll down ↓</p>
      </section>
    </main>
  );
}
