import type { Metadata } from "next";
import Link from "next/link";
import {
  siCss,
  siDjango,
  siJavascript,
  siLaravel,
  siMysql,
  siNextdotjs,
  siPrisma,
  siPython,
  siReact,
  siSocketdotio,
  siTailwindcss,
  siTypescript,
} from "simple-icons";
import { experiences } from "@/data/experience";
import { earlierExperience, resumeProjects, resumeSkills } from "@/data/resume";
import ResumeActions from "./ResumeActions";
import styles from "./resume.module.css";

const technologyIcons = {
  "Next.js": siNextdotjs,
  TypeScript: siTypescript,
  "React Native": siReact,
  Django: siDjango,
  Python: siPython,
  Laravel: siLaravel,
  MySQL: siMysql,
  "Socket.IO": siSocketdotio,
  Prisma: siPrisma,
  Livewire: siLaravel,
  CSS: siCss,
  "Tailwind CSS": siTailwindcss,
  JavaScript: siJavascript,
} as const;

const technologyFallbackIcons: Record<string, string> = {
  AI: "ri-brain-line",
  IoT: "ri-radar-line",
  ML: "ri-line-chart-line",
  SEO: "ri-search-eye-line",
  Booking: "ri-calendar-check-line",
  PHP: "ri-code-s-slash-line",
};

export const metadata: Metadata = {
  title: "Tumuhaise Michael — Résumé",
  description: "Résumé of Tumuhaise Michael, Software Engineer based in Kampala, Uganda.",
};

export default function ResumePage() {
  return (
    <main className={styles.resumePage}>
      <ResumeActions />
      <article className={styles.resume}>
        <header className={styles.hero}>
          <div className={styles.heroMeta}><span>Curriculum vitae</span><span>Kampala, Uganda</span></div>
          <h1>Tumuhaise<br /><span>Michael</span></h1>
          <div className={styles.heroBottom}>
            <p>Software Engineer building useful web, mobile, IoT, and AI-assisted products.</p>
            <div className={styles.directLinks}>
              <a href="mailto:michaeltumuhaise11@gmail.com"><i className="ri-mail-line" aria-hidden="true" />Email</a>
              <a href="tel:+256782711856"><i className="ri-phone-line" aria-hidden="true" />+256 782 711 856</a>
              <a href="https://github.com/tumuhaisemichael" target="_blank" rel="noreferrer"><i className="ri-github-line" aria-hidden="true" />GitHub</a>
              <a href="https://www.linkedin.com/in/tumuhaise-michael-225515352/" target="_blank" rel="noreferrer"><i className="ri-linkedin-line" aria-hidden="true" />LinkedIn</a>
            </div>
          </div>
        </header>

        <section className={styles.intro}>
          <p className={styles.sectionNumber}>01 / Profile</p>
          <div><h2>Engineering from a clear understanding of the problem.</h2><p>I&apos;m a multidisciplinary software engineer with a Bachelor&apos;s degree in Software Engineering from Makerere University. I combine full-stack product development with mobile, IoT, AI/ML, and digital growth experience to turn complex needs into dependable systems.</p></div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeading}><p>02 / Experience</p><span>{String(experiences.length).padStart(2, "0")} current chapters</span></div>
          <div className={styles.experienceList}>
            {experiences.map((experience) => (
              <article className={styles.experience} key={experience.company}>
                <span className={styles.experiencePeriod}>{experience.period}</span>
                <div><p className={styles.experienceRole}>{experience.role}</p><h3>{experience.company}</h3></div>
                <p className={styles.experienceText}>{experience.description}</p>
                <ul className={styles.experienceTags}>{experience.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
              </article>
            ))}
          </div>
          <div className={styles.earlierExperience}>
            <p>Earlier experience</p>
            {earlierExperience.map((experience) => <article key={experience.company}><div><h3>{experience.company}</h3><span>{experience.role}</span></div><p>{experience.text}</p></article>)}
          </div>
        </section>

        <section className={styles.twoColumn}>
          <div className={styles.section}><div className={styles.sectionHeading}><p>03 / Education</p></div><div className={styles.education}><article><span>2021 — 2025</span><h3>Bachelor of Science in Software Engineering</h3><p>Makerere University, Uganda</p></article><article><span>2018 — 2020</span><h3>Diploma in Computer Science</h3><p>Makerere University Business School</p></article></div></div>
          <div className={styles.section}><div className={styles.sectionHeading}><p>04 / Skills</p></div><div className={styles.skills}>{resumeSkills.map(([title, list]) => <article key={title}><h3>{title}</h3><p>{list}</p></article>)}</div></div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeading}><p>05 / Selected systems</p><Link href="/#projects">View full portfolio ↗</Link></div>
          <div className={styles.projects}>{resumeProjects.map((project) => <article key={project.name}><div className={styles.projectTop}><i className={project.icon} aria-hidden="true" />{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name}`}><i className="ri-arrow-right-up-line" aria-hidden="true" /></a>}</div><h3>{project.name}</h3><p>{project.text}</p><ul>{project.technologies.map((technology) => {
            const icon = technologyIcons[technology as keyof typeof technologyIcons];
            return <li key={technology}>{icon ? <svg viewBox="0 0 24 24" aria-hidden="true"><path d={icon.path} /></svg> : <i className={technologyFallbackIcons[technology] ?? "ri-code-line"} aria-hidden="true" />}<span>{technology}</span></li>;
          })}</ul>{project.liveUrl && <a className={styles.projectLink} href={project.liveUrl} target="_blank" rel="noreferrer">Live project <span aria-hidden="true">↗</span></a>}</article>)}</div>
        </section>

        <footer className={styles.resumeFooter}><span>Michael Tumuhaise · Software Engineer</span><a href="https://tumuhaise.com/">tumuhaise.com ↗</a></footer>
      </article>
    </main>
  );
}
