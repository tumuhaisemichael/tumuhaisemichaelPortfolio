"use client";

import { motion, useReducedMotion } from "motion/react";
import type { CompanyVisual } from "./company-details";

const loop = { duration: 3.6, repeat: Infinity, repeatType: "mirror" as const, ease: "easeInOut" as const };

/** Original animated editorial illustrations, rather than representations of company logos. */
export default function CompanyArtwork({ visual }: { visual: CompanyVisual }) {
  const reducedMotion = useReducedMotion();
  const animate = <T extends Record<string, unknown>>(value: T) => reducedMotion ? undefined : value;

  return (
    <svg viewBox="0 0 400 180" fill="none" aria-hidden="true" focusable="false">
      <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        {visual === "software" && <>
          <path d="M42 134 200 169 357 134 200 99Z" opacity=".18" />
          <motion.path d="m42 109 158 35 157-35-157-35Z" opacity=".35" animate={animate({ opacity: [0.2, 0.65] })} transition={{ ...loop, duration: 2.6 }} />
          <motion.path d="m42 84 158 35 157-35L200 49Z" animate={animate({ y: [0, -4] })} transition={loop} />
          <path d="M42 84v25m315-25v25M200 119v25" opacity=".5" />
          <rect x="153" y="15" width="94" height="69" rx="8" fill="#f0f1f1" />
          <motion.path d="m178 37-12 11 12 11m44-22 12 11-12 11m-17-25-10 29" strokeWidth="2" animate={animate({ opacity: [0.38, 1] })} transition={{ ...loop, duration: 1.8 }} />
          <motion.circle cx="200" cy="119" r="3" fill="currentColor" animate={animate({ r: [3, 7, 3], opacity: [1, 0.2, 1] })} transition={{ duration: 2.4, repeat: Infinity }} />
        </>}
        {visual === "safari" && <>
          <motion.circle cx="269" cy="57" r="30" opacity=".3" animate={animate({ y: [-5, 5], opacity: [0.18, 0.42] })} transition={{ ...loop, duration: 5 }} />
          <motion.path d="M20 126 92 51l66 70 51-48 77 72 42-38 52 35" animate={animate({ y: [2, -2] })} transition={{ ...loop, duration: 5.2 }} />
          <path d="m65 79 27-28 25 27-15-4-10 8-12-9Z" fill="currentColor" opacity=".08" />
          <motion.path d="M20 150c60-34 103-32 160-5s110 24 200-8M20 165c67-28 110-19 153 0m62 0c61-15 92-12 145-1" opacity=".35" animate={animate({ x: [-4, 4] })} transition={{ ...loop, duration: 4.4 }} />
          <path d="M291 133V87m-23 12c-2-18 46-18 45 0Z" fill="#f0f1f1" />
          <motion.path d="m291 115-13-15m13 6 13-7" animate={animate({ x: [-3, 4], y: [2, -2] })} transition={{ ...loop, duration: 2.5 }} />
        </>}
        {visual === "network" && <>
          <path d="M65 45h96q39 0 39 39v14q0 39 39 39h96M65 137h59q39 0 39-39V84q0-39 39-39h133" opacity=".45" />
          <motion.path d="M65 91h270" strokeDasharray="3 7" opacity=".48" animate={animate({ strokeDashoffset: [0, -60] })} transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }} />
          <rect x="38" y="21" width="54" height="48" rx="9" fill="#f0f1f1" />
          <rect x="308" y="112" width="54" height="48" rx="9" fill="#f0f1f1" />
          <path d="m53 50 9-9 9 9m-9-9v17m260 67h26m-26 9h18m-18 9h22" />
          <motion.circle cx="65" cy="137" r="8" fill="#f0f1f1" animate={animate({ scale: [1, 1.35, 1] })} transition={{ duration: 2.1, repeat: Infinity }} />
          <motion.circle cx="335" cy="45" r="8" fill="currentColor" animate={animate({ scale: [1, 1.35, 1] })} transition={{ duration: 2.1, repeat: Infinity, delay: 1.05 }} />
          <motion.circle cx="200" cy="91" r="22" fill="#f0f1f1" animate={animate({ scale: [1, 1.08, 1] })} transition={loop} />
          <path d="m190 91 7 7 13-14" strokeWidth="2" />
        </>}
        {visual === "civic" && <>
          <motion.path d="m90 62 110-42 110 42Z" animate={animate({ y: [-3, 1] })} transition={loop} /><path d="M102 72h196M85 154h230M95 142h210" />
          {[120, 168, 216, 264].map((x, index) => <motion.path key={x} d={`M${x} 82v49m12-49v49`} animate={animate({ opacity: [0.25, 1, 0.25] })} transition={{ duration: 2.8, repeat: Infinity, delay: index * .22 }} />)}
          <path d="M48 87v38h28m248 0h28V87" opacity=".4" />
          <motion.circle cx="48" cy="77" r="5" animate={animate({ r: [5, 8, 5] })} transition={{ duration: 2, repeat: Infinity }} /><motion.circle cx="352" cy="77" r="5" animate={animate({ r: [5, 8, 5] })} transition={{ duration: 2, repeat: Infinity, delay: 1 }} />
          <path d="M200 42v8m-4-4h8" />
        </>}
        {visual === "research" && <>
          <motion.g animate={animate({ rotate: [-1.8, 1.8] })} transition={{ ...loop, duration: 4.6 }} style={{ transformOrigin: "200px 155px" }}>
            <path d="M200 155V80m0 39-39-33m39 15 38-34" />
            <path d="M200 99c-45 0-69-25-69-61 44 0 69 21 69 61Zm0-22c0-39 23-61 67-61 0 40-24 61-67 61Z" fill="currentColor" fillOpacity=".05" />
          </motion.g>
          <motion.ellipse cx="200" cy="147" rx="95" ry="24" opacity=".35" animate={animate({ scale: [1, 1.08, 1], opacity: [.2, .5, .2] })} transition={{ duration: 3, repeat: Infinity }} />
          <motion.ellipse cx="200" cy="147" rx="137" ry="32" strokeDasharray="3 7" opacity=".2" animate={animate({ strokeDashoffset: [0, -60] })} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
          <path d="M75 70h24m-12-12v24m223 28h16m-8-8v16" opacity=".5" />
        </>}
      </g>
    </svg>
  );
}
