"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform, type MotionStyle } from "motion/react";
import { experiences, type Exp } from "@/data/experience";
import { companyDetails } from "./company-details";
import CompanyArtwork from "./CompanyArtwork";
import styles from "./career-book.module.css";

const easeInOut = (value: number) => value * value * (3 - 2 * value);

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
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target, offset: ["start 0.25", "end 0.85"] });
  // One shared spring keeps the page, companion and lighting in sync, even on reversal.
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 32, mass: 0.8, restDelta: 0.0001 });
  const phase = useTransform(progress, [0.1, 0.9], [0, 1], { ease: easeInOut });
  const turn = useTransform(phase, [0, 1], ["0deg", "-180deg"]);
  const mobileTurn = useTransform(phase, [0, 0.5, 1], ["0deg", "-9deg", "0deg"], { ease: easeInOut });
  const companyX = useTransform(phase, [0.08, 0.92], ["0%", "100%"], { ease: easeInOut });
  const companyY = useTransform(phase, (value) => `${Math.sin(value * Math.PI) * 20}px`);
  const companyScale = useTransform(phase, (value) => 1 - Math.sin(value * Math.PI) * 0.045);
  const shade = useTransform(phase, (value) => Math.sin(value * Math.PI) * 0.32);
  const shadow = useTransform(phase, (value) => Math.sin(value * Math.PI) * 0.5);
  const details = companyDetails[experience.company];

  return (
    <li ref={target} className={styles.chapter}>
      <div className={styles.stage}>
        <div className={styles.date}><span>{experience.period.slice(0, 4)}</span><i aria-hidden="true" /></div>
        <div className={styles.scene}>
          {details && (
            <motion.aside className={styles.companyTrack} aria-label={`About ${experience.company}`}
              style={{ "--company-x": reducedMotion ? "0%" : companyX, "--company-y": reducedMotion ? "0px" : companyY, "--company-scale": reducedMotion ? 1 : companyScale } as MotionStyle}>
              <div className={styles.companyDetails}>
                <div className={styles.companyMasthead}><span className={styles.monogram} aria-hidden="true">{details.initials}</span><span>{details.sector}</span></div>
                <div className={styles.artwork}><CompanyArtwork visual={details.visual} /></div>
                <span className={styles.companyEyebrow}>Behind the chapter / {String(index + 1).padStart(2, "0")}</span>
                <h4>{details.headline}</h4>
                <p>{details.context}</p>
                {details.websiteUrl && <a href={details.websiteUrl} target="_blank" rel="noreferrer">{details.websiteLabel}<span aria-hidden="true">↗</span></a>}
              </div>
            </motion.aside>
          )}
          <motion.div className={`${styles.leaf} ${experience.period.includes("Present") ? styles.dark : ""}`}
            style={{ "--turn": reducedMotion ? "0deg" : turn, "--mobile-turn": reducedMotion ? "0deg" : mobileTurn } as MotionStyle}>
            <article className={`${styles.face} ${styles.front}`}>
              <PageContent experience={experience} index={index} />
              <motion.div className={styles.shade} style={{ opacity: reducedMotion ? 0 : shade }} aria-hidden="true" />
            </article>
            <div className={`${styles.face} ${styles.back}`} aria-hidden="true" inert>
              <PageContent experience={experience} index={index} />
              <motion.div className={styles.shade} style={{ opacity: reducedMotion ? 0 : shade }} />
            </div>
            <motion.div className={styles.castShadow} style={{ opacity: reducedMotion ? 0 : shadow }} aria-hidden="true" />
          </motion.div>
        </div>
      </div>
    </li>
  );
}

export default function CareerBook() {
  return (
    <div className={styles.book}>
      <div className={styles.guide}><p>Every chapter. A new perspective.</p><span className={styles.scrollHint}>Scroll to turn the pages <span aria-hidden="true">↓</span></span><a href="/tumuhaise">Explore my résumé ↗</a></div>
      <ol className={styles.chapters}>
        {experiences.map((experience, index) => <CareerPage key={experience.company} experience={experience} index={index} />)}
      </ol>
    </div>
  );
}
