"use client";

interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  bg: string;
  skills: string[];
}

const cats: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: "ri-layout-line",
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-950/30",
    skills: ["React.js", "Next.js", "TypeScript", "HTML5 & CSS3", "Tailwind CSS", "JavaScript ES6+", "Bootstrap"],
  },
  {
    title: "Backend & Databases",
    icon: "ri-database-2-line",
    color: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
    skills: ["Node.js", "Express.js", "Django", "Laravel", "FastAPI", "PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    title: "Mobile & IoT",
    icon: "ri-smartphone-line",
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-950/30",
    skills: ["Flutter", "React Native", "Firebase", "Supabase", "C/C++ (Arduino/ESP32)", "MQTT", "IoT Protocols"],
  },
  {
    title: "AI, ML & Cloud",
    icon: "ri-brain-line",
    color: "text-amber-500",
    bg: "bg-amber-50 dark:bg-amber-950/30",
    skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "Docker", "AWS", "CI/CD", "Linux/Bash", "Git / GitHub"],
  },
  {
    title: "CMS & Marketing",
    icon: "ri-pages-line",
    color: "text-pink-500",
    bg: "bg-pink-50 dark:bg-pink-950/30",
    skills: ["WordPress", "Shopify", "SEO", "Google Analytics", "Search Console", "Keyword Optimisation"],
  },
  {
    title: "Workflows & Architecture",
    icon: "ri-git-branch-line",
    color: "text-indigo-500",
    bg: "bg-indigo-50 dark:bg-indigo-950/30",
    skills: ["Agile / Scrum", "TDD", "RESTful API Design", "System Design", "Microservices", "Web Hosting"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="eyebrow block mb-3">Technical Arsenal</span>
          <h2 className="section-title mb-4">Languages, Frameworks &amp; Tools</h2>
          <p className="section-subtitle mx-auto">
            A curated set of technologies I use to ship robust, scalable products.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cats.map((cat, i) => (
            <div
              key={i}
              className="card p-7 hover-lift flex flex-col gap-6"
            >
              {/* Card header */}
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-lg ${cat.bg} ${cat.color}
                                 flex items-center justify-center text-2xl flex-shrink-0`}>
                  <i className={cat.icon} />
                </div>
                <h3 className="text-base font-bold leading-snug" style={{ color: "var(--text)" }}>
                  {cat.title}
                </h3>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s, si) => (
                  <span key={si} className="skill-badge">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
