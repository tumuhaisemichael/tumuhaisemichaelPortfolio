"use client";

import Link from "next/link";
import { useState } from "react";
import { experiences } from "@/data/experience";
import { earlierExperience, resumeProjects, resumeSkills } from "@/data/resume";
import styles from "./resume.module.css";

export default function ResumeActions() {
  const [creating, setCreating] = useState(false);

  async function downloadPdf() {
    setCreating(true);
    try {
      const { jsPDF } = await import("jspdf");
      const pdf = new jsPDF({ unit: "mm", format: "a4" });
      const margin = 16;
      const width = 210 - margin * 2;
      let y = 18;

      const newPage = () => { pdf.addPage(); y = 18; };
      const roomFor = (height: number) => { if (y + height > 280) newPage(); };
      const paragraph = (text: string, size = 9, color: [number, number, number] = [75, 75, 75]) => {
        pdf.setFontSize(size); pdf.setTextColor(...color);
        const lines = pdf.splitTextToSize(text, width);
        roomFor(lines.length * (size * .48) + 4);
        pdf.text(lines, margin, y); y += lines.length * (size * .48) + 4;
      };
      const section = (title: string) => {
        roomFor(15); y += 3; pdf.setDrawColor(190, 190, 190); pdf.line(margin, y, margin + width, y); y += 6;
        pdf.setFont("helvetica", "bold"); pdf.setFontSize(8); pdf.setTextColor(34, 34, 34); pdf.text(title.toUpperCase(), margin, y); y += 6;
        pdf.setFont("helvetica", "normal");
      };
      const link = (label: string, url: string) => { pdf.setTextColor(34, 34, 34); pdf.setFontSize(8); pdf.textWithLink(label, margin, y, { url }); y += 5; };

      pdf.setFillColor(34, 34, 34); pdf.rect(0, 0, 210, 58, "F");
      pdf.setTextColor(248, 248, 248); pdf.setFont("helvetica", "bold"); pdf.setFontSize(28); pdf.text("TUMUHAISE", margin, 25); pdf.text("MICHAEL", margin, 38);
      pdf.setFont("helvetica", "normal"); pdf.setFontSize(9); pdf.setTextColor(190, 190, 190); pdf.text("Software Engineer · Kampala, Uganda", margin, 49);
      y = 69;
      section("Profile");
      paragraph("Multidisciplinary software engineer with a Bachelor’s degree in Software Engineering from Makerere University. I build dependable web, mobile, IoT, and AI-assisted products from a clear understanding of the problem.");
      link("michaeltumuhaise11@gmail.com", "mailto:michaeltumuhaise11@gmail.com");
      link("+256 782 711 856", "tel:+256782711856");
      link("github.com/tumuhaisemichael", "https://github.com/tumuhaisemichael");
      link("linkedin.com/in/tumuhaise-michael-225515352", "https://www.linkedin.com/in/tumuhaise-michael-225515352/");

      section("Experience");
      experiences.forEach((experience) => {
        roomFor(24); pdf.setFont("helvetica", "bold"); pdf.setFontSize(10); pdf.setTextColor(34, 34, 34); pdf.text(`${experience.role} — ${experience.company}`, margin, y); y += 4;
        pdf.setFont("helvetica", "normal"); pdf.setFontSize(8); pdf.setTextColor(105, 105, 105); pdf.text(experience.period, margin, y); y += 4;
        paragraph(experience.description, 8); paragraph(experience.tags.join(" · "), 7, [105, 105, 105]);
      });
      earlierExperience.forEach((experience) => { roomFor(15); pdf.setFont("helvetica", "bold"); pdf.setFontSize(9); pdf.setTextColor(34, 34, 34); pdf.text(`${experience.company} — ${experience.role}`, margin, y); y += 4; pdf.setFont("helvetica", "normal"); paragraph(experience.text, 8); });

      section("Education");
      paragraph("Bachelor of Science in Software Engineering — Makerere University, Uganda (2021–2025)", 8, [34, 34, 34]);
      paragraph("Diploma in Computer Science — Makerere University Business School (2018–2020)", 8, [34, 34, 34]);
      section("Skills");
      resumeSkills.forEach(([title, value]) => paragraph(`${title}: ${value}`, 8));
      section("Selected systems");
      resumeProjects.forEach((project) => {
        roomFor(18); pdf.setFont("helvetica", "bold"); pdf.setFontSize(9); pdf.setTextColor(34, 34, 34); pdf.text(project.name, margin, y); y += 4;
        pdf.setFont("helvetica", "normal"); paragraph(project.text, 8); paragraph(project.technologies.join(" · "), 7, [105, 105, 105]);
        if (project.liveUrl) link(`Live project: ${project.liveUrl}`, project.liveUrl);
      });
      section("Portfolio"); link("tumuhaise.com", "https://tumuhaise.com/");
      pdf.save("Tumuhaise-Michael-Resume.pdf");
    } finally {
      setCreating(false);
    }
  }

  return (
    <div className={styles.actions}>
      <Link href="/" className={styles.backLink}><i className="ri-arrow-left-line" aria-hidden="true" />Portfolio</Link>
      <button type="button" onClick={downloadPdf} disabled={creating}><i className="ri-file-download-line" aria-hidden="true" />{creating ? "Generating…" : "Download PDF"}</button>
    </div>
  );
}
