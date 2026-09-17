export interface Exp {
  period: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
  icon: string;
  dotColor: string;
  accentColor: string;
  accentBg: string;
}

export const experiences: Exp[] = [
  {
    period: "2026 – Present",
    role: "Software Developer",
    company: "Baisoft Tech",
    description:
      "Building software with Next.js on the frontend and Django on the backend, while developing mobile experiences with React Native, Flutter, and Firebase.",
    tags: ["Next.js", "Django", "React Native", "Flutter", "Firebase"],
    icon: "ri-code-s-slash-line",
    dotColor: "bg-slate-900",
    accentColor: "text-slate-900",
    accentBg: "bg-slate-100 dark:bg-slate-800",
  },
  {
    period: "2025 – Present",
    role: "Web Developer",
    company: "Afrisoft Ltd",
    description:
      "Lead frontend and backend development using Django, Laravel, and React. Specialised in mobile development with Flutter and Firebase to enhance user engagement.",
    tags: ["Flutter", "Firebase", "React", "Django"],
    icon: "ri-smartphone-line",
    dotColor: "bg-blue-500",
    accentColor: "text-blue-500",
    accentBg: "bg-blue-50 dark:bg-blue-950/30",
  },
  {
    period: "2024 – Present",
    role: "Web Developer",
    company: "WildMed Safaris",
    description:
      "Leading the digital transformation of tourism platforms. Managing SEO campaigns and developing user-centric booking solutions.",
    tags: ["Web Dev", "SEO", "Digital Marketing"],
    icon: "ri-rocket-line",
    dotColor: "bg-purple-500",
    accentColor: "text-purple-500",
    accentBg: "bg-purple-50 dark:bg-purple-950/30",
  },
  {
    period: "2023 – 2024",
    role: "Software Developer",
    company: "Tattuintel Ltd",
    description:
      "Built high-impact mobile and web solutions. Collaborated on ML-driven logistics and event-planning applications.",
    tags: ["Mobile", "ML", "Full Stack"],
    icon: "ri-code-s-slash-line",
    dotColor: "bg-emerald-500",
    accentColor: "text-emerald-500",
    accentBg: "bg-emerald-50 dark:bg-emerald-950/30",
  },
  {
    period: "2022 – 2023",
    role: "Intern",
    company: "NITA-U",
    description:
      "Created intelligent chatbots and internal dashboards. Automated processes for the National Information Technology Authority.",
    tags: ["Chatbots", "Automation", "Dashboards"],
    icon: "ri-government-line",
    dotColor: "bg-orange-500",
    accentColor: "text-orange-500",
    accentBg: "bg-orange-50 dark:bg-orange-950/30",
  },
  {
    period: "2020 – 2022",
    role: "IT Intern",
    company: "NARO",
    description:
      "Supported software installation, system setup, and day-to-day IT helpdesk needs for staff.",
    tags: ["IT Support", "Systems Setup", "Networking"],
    icon: "ri-tools-line",
    dotColor: "bg-teal-500",
    accentColor: "text-teal-500",
    accentBg: "bg-teal-50 dark:bg-teal-950/30",
  },
];
