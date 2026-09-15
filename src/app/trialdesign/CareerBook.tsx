"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, type MotionStyle } from "motion/react";
import { experiences, type Exp } from "@/data/experience";
import styles from "./career-book.module.css";

function PageContent({ experience, index }: { experience: Exp; index: number }) {
  return (
    <>
      <div className={styles.topline}>
        <span>Chapter {String(index + 1).padStart(2, "0")}</span>
        {experience.period.includes("Present") && <span className={styles.current}>● Current role</span>}
        <i className={experience.icon} aria-hidden="true" />
      </div>
      <p className={styles.role}>{experience.role}</p>
      <h3>{experience.company}</h3>
      <p className={styles.description}>{experience.description}</p>
      <ul className={styles.tags} aria-label="Areas of work">
        {experience.tags.map((tag) => <li key={tag}>{tag}</li>)}
      </ul>
      <div className={styles.folio}><span>{experience.period}</span><span>{String(index + 1).padStart(2, "0")} / {String(experiences.length).padStart(2, "0")}</span></div>
    </>
  );
}

function CareerPage({ experience, index }: { experience: Exp; index: number }) {
  const target = useRef<HTMLLIElement>(null);
  const { scrollYProgress } = useScroll({ target, offset: ["start 0.25", "end 0.85"] });
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 28, restDelta: 0.001 });
  // The leaf starts at the spine, so a half turn places it on the opposite side.
  const turn = useTransform(progress, [0.12, 0.88], ["0deg", "-180deg"]);
  const mobileTurn = useTransform(progress, [0, 0.5, 1], ["0deg", "-22deg", "0deg"]);
  const shade = useTransform(progress, [0, 0.5, 1], [0, 0.3, 0]);
  return (
    <li ref={target} className={styles.chapter}>
      <div className={styles.stage}>
        <div className={styles.date}><span>{experience.period.slice(0, 4)}</span><i aria-hidden="true" /></div>
        <div className={styles.scene}>
          <motion.div className={`${styles.leaf} ${experience.period.includes("Present") ? styles.dark : ""}`}
            style={{ "--turn": turn, "--mobile-turn": mobileTurn } as MotionStyle}>
            <article className={`${styles.face} ${styles.front}`}>
              <PageContent experience={experience} index={index} />
              <motion.div className={styles.shade} style={{ opacity: shade }} aria-hidden="true" />
            </article>
            <div className={`${styles.face} ${styles.back}`} aria-hidden="true">
              <PageContent experience={experience} index={index} />
              <motion.div className={styles.shade} style={{ opacity: shade }} />
            </div>
          </motion.div>
        </div>
      </div>
    </li>
  );
}

export default function CareerBook() {
  return (
    <div className={styles.book}>
      <div className={styles.guide}><p>Every chapter. A new perspective.</p><span>Scroll to turn the pages ↓</span><a href="/tumuhaise">Explore my résumé ↗</a></div>
      <ol className={styles.chapters}>
        {experiences.map((experience, index) => <CareerPage key={experience.company} experience={experience} index={index} />)}
      </ol>
    </div>
  );
}
