import type { Metadata } from "next";
import Image from "next/image";
import {
  siDocker,
  siDjango,
  siExpress,
  siFastapi,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPython,
  siReact,
  siTailwindcss,
  siTypescript,
  siVercel,
} from "simple-icons";
import styles from "./trialdesign.module.css";

export const metadata: Metadata = {
  title: "Michael Tumuhaise — Full Stack Software Engineer",
  description: "Portfolio of Michael Tumuhaise, Full Stack Software Engineer.",
};

const navigation = ["About me", "Projects", "Services", "Notes"];
const technologies = [
  { name: "React", icon: siReact },
  { name: "Next.js", icon: siNextdotjs },
  { name: "Node.js", icon: siNodedotjs },
  { name: "JavaScript", icon: siJavascript },
  { name: "Python", icon: siPython },
  { name: "PostgreSQL", icon: siPostgresql },
  { name: "Git", icon: siGit },
  { name: "GitHub", icon: siGithub },
];

const capabilityGroups = [
  {
    title: "Languages",
    symbol: "⌘",
    items: [
      { name: "JavaScript", icon: siJavascript },
      { name: "TypeScript", icon: siTypescript },
      { name: "Python", icon: siPython },
      { name: "PostgreSQL", icon: siPostgresql },
    ],
  },
  {
    title: "Frontend",
    symbol: "▣",
    items: [
      { name: "React", icon: siReact },
      { name: "Next.js", icon: siNextdotjs },
      { name: "Tailwind CSS", icon: siTailwindcss },
      { name: "HTML5", icon: siHtml5 },
    ],
  },
  {
    title: "Backend & data",
    symbol: "◉",
    items: [
      { name: "Node.js", icon: siNodedotjs },
      { name: "Express", icon: siExpress },
      { name: "Django", icon: siDjango },
      { name: "REST APIs", icon: siFastapi },
    ],
  },
  {
    title: "Data & Cloud",
    symbol: "◫",
    items: [
      { name: "PostgreSQL", icon: siPostgresql },
      { name: "Docker", icon: siDocker },
      { name: "Vercel", icon: siVercel },
    ],
  },
  {
    title: "Workflow",
    symbol: "↗",
    items: [
      { name: "Git", icon: siGit },
      { name: "GitHub", icon: siGithub },
      { name: "Docker", icon: siDocker },
    ],
  },
  {
    title: "Product Engineering",
    symbol: "✦",
    items: [
      { name: "React", icon: siReact },
      { name: "Node.js", icon: siNodedotjs },
      { name: "PostgreSQL", icon: siPostgresql },
    ],
  },
];

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

      <section className={styles.about} id="about-me" aria-labelledby="about-title">
        <div className={styles.aboutHeading}>
          <p className={styles.sectionLabel}>02 / About me</p>
          <h2 id="about-title">Engineering with clarity, from idea to launch.</h2>
          <div className={styles.aboutAside}>
            <p className={styles.aboutLead}>
              I turn complex requirements into dependable software people can use with confidence.
            </p>
            <div className={styles.signature}>
              <i />
              <Image
                src="/Michael-signature.png"
                alt="Michael signature"
                width={112}
                height={29}
                className={styles.signatureImage}
              />
            </div>
          </div>
        </div>

        <div className={styles.aboutGrid}>
          <article className={styles.aboutCopy}>
            <span className={styles.cardEyebrow}>Who I am</span>
            <p>
              I&apos;m a full stack software engineer based in Kampala, Uganda. I enjoy the work between a good idea and a working product: understanding the problem, shaping the system, and shipping the details properly.
            </p>
            <a href="#projects">Explore selected work <span aria-hidden="true">↗</span></a>
          </article>

          <div className={styles.impactCard}>
            <span>Delivery focus</span>
            <i className={styles.impactAction} aria-hidden="true">↗</i>
            <strong>19+</strong>
            <p>products and technical solutions brought from concept to usable release.</p>
            <a href="#projects">View case studies <span aria-hidden="true">↗</span></a>
          </div>

          <div className={styles.aboutPortrait}>
            <Image
              src="/Michael-hero-portrait-cutout-v2.png"
              alt="Michael Tumuhaise"
              fill
              sizes="(max-width: 780px) 100vw, 32vw"
              className={styles.aboutPortraitImage}
            />
            <span>Build · test · refine</span>
          </div>
        </div>

        <div className={styles.principles}>
          <p>How I work</p>
          <div><i aria-hidden="true">✦</i><b>01</b><span>Start with the real problem, not the technology.</span></div>
          <div><i aria-hidden="true">&lt;/&gt;</i><b>02</b><span>Build scalable systems that remain practical to maintain.</span></div>
          <div><i aria-hidden="true">➤</i><b>03</b><span>Ship, measure, and improve with intention.</span></div>
        </div>

        <div className={styles.detailsGrid}>
          <article>
            <h3>What drives me</h3>
            <p className={styles.quote}>Simplicity is the soul of efficiency. The best architecture solves the problem, not just today, but tomorrow.</p>
          </article>
          <article>
            <h3>Core values</h3>
            <ul>
              <li>Clarity in communication</li>
              <li>Quality in execution</li>
              <li>Continuous improvement</li>
              <li>Empathy in teamwork</li>
            </ul>
          </article>
          <article>
            <h3>Tools &amp; technologies</h3>
            <div className={styles.toolList} aria-label="Tools and technologies">
              {technologies.map(({ name, icon }) => (
                <span key={name} aria-label={name} title={name}>
                  <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.toolIcon}>
                    <path d={icon.path} />
                  </svg>
                </span>
              ))}
            </div>
            <a href="#services">and more...</a>
          </article>
          <article className={styles.locationCard}>
            <p><b>⌖</b><span>Kampala, Uganda<small>East Africa</small></span></p>
            <p><b>◷</b><span>Local time<small>EAT · UTC +3</small></span></p>
          </article>
        </div>
      </section>

      <section className={styles.capabilities} id="services" aria-labelledby="capabilities-title">
        <div className={styles.capabilitiesHeading}>
          <p>Technical arsenal</p>
          <h2 id="capabilities-title">Languages, frameworks &amp; tools.</h2>
          <p>A curated set of technologies I use to ship robust, scalable products.</p>
        </div>

        <div className={styles.capabilityGrid}>
          {capabilityGroups.map((group) => (
            <article key={group.title}>
              <div className={styles.capabilityLabel}>
                <b aria-hidden="true">{group.symbol}</b>
                <h3>{group.title}</h3>
              </div>
              <ul>
                {group.items.map(({ name, icon }) => (
                  <li key={name}>
                    <button type="button" aria-label={name}>
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path d={icon.path} /></svg>
                      <span>{name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className={styles.capabilityFooter}>
          <span aria-hidden="true">&lt;/&gt;</span>
          <p>I choose tools based on the problem, then use them to build software that stays reliable as it grows.</p>
          <small>Build deliberately · keep it maintainable</small>
        </div>
      </section>
    </main>
  );
}
