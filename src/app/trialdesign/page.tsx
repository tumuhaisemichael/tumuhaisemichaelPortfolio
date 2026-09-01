import type { Metadata } from "next";
import Image from "next/image";
import type { CSSProperties } from "react";
import {
  siDocker,
  siDjango,
  siCss,
  siExpress,
  siFastapi,
  siFirebase,
  siFlutter,
  siGit,
  siGithub,
  siGoogleanalytics,
  siGooglesearchconsole,
  siHtml5,
  siJavascript,
  siLaravel,
  siLinux,
  siLivewire,
  siMqtt,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPrisma,
  siPython,
  siPytorch,
  siReact,
  siScikitlearn,
  siScrumalliance,
  siShopify,
  siSocketdotio,
  siSupabase,
  siTailwindcss,
  siTensorflow,
  siTypescript,
  siVercel,
  siWordpress,
  siArduino,
  siBootstrap,
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
    title: "Frontend Development",
    icon: "ri-layout-4-line",
    featured: "React.js",
    accent: "#13e0d2",
    surface: "#092327",
    items: [
      { name: "React.js", icon: siReact },
      { name: "Next.js", icon: siNextdotjs },
      { name: "TypeScript", icon: siTypescript },
      { name: "HTML5 & CSS3", icon: siHtml5 },
      { name: "Tailwind CSS", icon: siTailwindcss },
      { name: "JavaScript ES6+", icon: siJavascript },
      { name: "Bootstrap", icon: siBootstrap },
    ],
  },
  {
    title: "Backend & Databases",
    icon: "ri-database-2-line",
    featured: "Django",
    accent: "#3191ff",
    surface: "#101e4a",
    items: [
      { name: "Node.js", icon: siNodedotjs },
      { name: "Express.js", icon: siExpress },
      { name: "Django", icon: siDjango },
      { name: "FastAPI", icon: siFastapi },
      { name: "PostgreSQL", icon: siPostgresql },
      { name: "REST APIs", icon: siFastapi },
    ],
  },
  {
    title: "Mobile & IoT",
    icon: "ri-smartphone-line",
    featured: "Firebase",
    accent: "#18d386",
    surface: "#072d28",
    items: [
      { name: "React Native", icon: siReact },
      { name: "Flutter", icon: siFlutter },
      { name: "Firebase", icon: siFirebase },
      { name: "Supabase", icon: siSupabase },
      { name: "Arduino / ESP32", icon: siArduino },
      { name: "MQTT", icon: siMqtt },
    ],
  },
  {
    title: "AI, ML & Cloud",
    icon: "ri-brain-line",
    featured: "Docker",
    accent: "#ffad22",
    surface: "#392204",
    items: [
      { name: "TensorFlow", icon: siTensorflow },
      { name: "PyTorch", icon: siPytorch },
      { name: "Scikit-Learn", icon: siScikitlearn },
      { name: "Docker", icon: siDocker },
      { name: "Vercel", icon: siVercel },
      { name: "CI/CD", icon: siGithub },
      { name: "Linux / Bash", icon: siLinux },
    ],
  },
  {
    title: "CMS & Marketing",
    icon: "ri-pages-line",
    featured: "Shopify",
    accent: "#f047a8",
    surface: "#390c28",
    items: [
      { name: "WordPress", icon: siWordpress },
      { name: "Shopify", icon: siShopify },
      { name: "SEO", icon: siGooglesearchconsole },
      { name: "Google Analytics", icon: siGoogleanalytics },
      { name: "Search Console", icon: siGooglesearchconsole },
    ],
  },
  {
    title: "Workflows & Architecture",
    icon: "ri-git-branch-line",
    featured: "System Design",
    accent: "#8b7cff",
    surface: "#191740",
    items: [
      { name: "Agile / Scrum", icon: siScrumalliance },
      { name: "TDD", icon: siGithub },
      { name: "RESTful API Design", icon: siFastapi },
      { name: "System Design", icon: siDocker },
      { name: "Microservices", icon: siNodedotjs },
      { name: "Web Hosting", icon: siVercel },
    ],
  },
];

interface TrialProject {
  title: string;
  category: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
  frontendUrl?: string;
  backendUrl?: string;
}

const portfolioProjects: TrialProject[] = [
  {
    title: "OP Energy",
    category: "Energy intelligence",
    description: "A household energy platform that estimates Uganda Yaka usage, tracks appliance demand, and turns consumption data into practical AI-guided savings.",
    tags: ["Next.js", "AI Advisor", "IoT"],
    repoUrl: "https://github.com/tumuhaisemichael/openergy",
    liveUrl: "https://openergy.tumuhaise.com/",
  },
  {
    title: "RouteWise",
    category: "Mobility · Machine learning",
    description: "A mobile shuttle-routing system combining a React Native interface, Django services, and traffic-history modelling to produce more efficient routes.",
    tags: ["React Native", "Django", "ML"],
    frontendUrl: "https://github.com/walnatum/routewise",
    backendUrl: "https://github.com/walnatum/dynamic-shuttle-route-optimizer-backend",
  },
  {
    title: "WonderWedding",
    category: "Mobile · AI",
    description: "A Flutter and Firebase mobile experience for wedding planning, guest coordination, and AI personalisation.",
    tags: ["Flutter", "Firebase", "AI"],
    repoUrl: "https://github.com/Alinator1993/wonderwedding",
  },
  {
    title: "Ephemra",
    category: "Private communication",
    description: "A self-hosted encrypted messaging experience with ephemeral sessions, secure file transfer, and real-time calling designed around user privacy.",
    tags: ["Next.js", "Socket.IO", "Prisma"],
    repoUrl: "https://github.com/tumuhaisemichael/ephemralive",
    liveUrl: "https://ephemra.tumuhaise.com/",
  },
  {
    title: "CloudVault",
    category: "Digital asset management",
    description: "A focused asset vault supporting multi-format uploads, folders, file previews, and automated database maintenance in one dependable workspace.",
    tags: ["Next.js", "TypeScript", "MySQL"],
    repoUrl: "https://github.com/tumuhaisemichael/store",
    liveUrl: "https://store.wildmedug.com/",
  },
  {
    title: "Business Marketplace",
    category: "SaaS · AI",
    description: "A multi-tenant marketplace with approval workflows, role-based access, and AI-powered product recommendations.",
    tags: ["Next.js", "Django", "PostgreSQL"],
    repoUrl: "https://github.com/tumuhaisemichael/product-marketplace",
  },
  {
    title: "Flux Studio",
    category: "Collaborative AI",
    description: "A collaborative AI creative workshop built with a Dockerised Django and React architecture.",
    tags: ["Django", "React", "Docker"],
    repoUrl: "https://github.com/tumuhaisemichael/django-react-supabase-docker",
  },
  {
    title: "CommunityConnect",
    category: "Safety · Mobile",
    description: "An emergency-response MVP with panic-button guard dispatch, real-time tracking, and push notifications.",
    tags: ["React Native", "Node.js", "Socket.IO"],
    repoUrl: "https://github.com/tumuhaisemichael/community",
  },
  {
    title: "Poultry Management",
    category: "Agriculture · Web",
    description: "A farm operations system for day-to-day poultry management, record keeping, and detailed reporting.",
    tags: ["Web App", "Farm Operations"],
    repoUrl: "https://github.com/tumuhaisemichael/poultry-management-system",
  },
  {
    title: "EcoTour Uganda",
    category: "Tourism · Web",
    description: "A community tourism marketplace connecting travellers with eco-friendly experiences and local hosts.",
    tags: ["Laravel", "Livewire", "Tailwind"],
    repoUrl: "https://github.com/tumuhaisemichael/Ecotour",
  },
  {
    title: "Matendo Medical",
    category: "Healthcare · Web",
    description: "A Laravel medical platform helping doctors, patients, and clients manage care, records, and communication.",
    tags: ["Laravel", "MySQL"],
    repoUrl: "https://github.com/TTatuIntel/Matendo",
  },
  {
    title: "Recipe Browser",
    category: "Mobile · Flutter",
    description: "A Flutter application for browsing recipes by category with ingredient details and smooth navigation.",
    tags: ["Flutter", "REST API"],
    repoUrl: "https://github.com/tumuhaisemichael/recipe_browser",
  },
  {
    title: "Agribot",
    category: "Agriculture · Chatbot",
    description: "An agriculture-focused conversational assistant providing quick farming answers and practical guidance.",
    tags: ["Chatbot", "NLP"],
    repoUrl: "https://github.com/tumuhaisemichael/Agribot",
  },
  {
    title: "Botpress Chatbot",
    category: "Conversational UX",
    description: "A Botpress-based chatbot deployment built for rapid conversational experiences and support workflows.",
    tags: ["Botpress"],
    repoUrl: "https://github.com/tumuhaisemichael/botpresschatbot",
  },
  {
    title: "Beefita AI Bot",
    category: "Business · AI",
    description: "A conversational assistant designed for business support and frequently asked question automation.",
    tags: ["Chatbot", "AI"],
    repoUrl: "https://github.com/tumuhaisemichael/Beefitaibot",
  },
  {
    title: "Afrisoft Website",
    category: "Corporate website",
    description: "The company website and digital presence for Afrisoft Ltd.",
    tags: ["Livewire", "CSS"],
    liveUrl: "https://afrisoft.org/",
  },
  {
    title: "EduPartnerships",
    category: "Education website",
    description: "An education partnerships website and content hub focused on accessible information and discovery.",
    tags: ["Tailwind", "SEO"],
    liveUrl: "https://edupartnerships.org/",
  },
  {
    title: "WonderWedding Site",
    category: "Wedding website",
    description: "A wedding marketing site and focused landing-page experience.",
    tags: ["Landing Page"],
    liveUrl: "https://wonderwedding.afrisoft.org/",
  },
  {
    title: "WildMed Uganda",
    category: "Tourism website",
    description: "A tourism platform and booking experience for WildMed Safaris.",
    tags: ["Laravel", "Booking"],
    liveUrl: "https://www.wildmedug.com/",
  },
];

type ProjectContent = "title" | "description" | "stack" | "links";

const projectContentOrders: ProjectContent[][] = [
  ["title", "description", "stack", "links"],
  ["title", "description", "links", "stack"],
  ["title", "stack", "description", "links"],
  ["title", "stack", "links", "description"],
  ["title", "links", "description", "stack"],
  ["title", "links", "stack", "description"],
  ["description", "title", "stack", "links"],
  ["description", "title", "links", "stack"],
  ["description", "stack", "title", "links"],
  ["description", "stack", "links", "title"],
  ["description", "links", "title", "stack"],
  ["description", "links", "stack", "title"],
  ["stack", "title", "description", "links"],
  ["stack", "title", "links", "description"],
  ["stack", "description", "title", "links"],
  ["stack", "description", "links", "title"],
  ["stack", "links", "title", "description"],
  ["stack", "links", "description", "title"],
  ["links", "title", "description", "stack"],
  ["links", "title", "stack", "description"],
  ["links", "description", "title", "stack"],
  ["links", "description", "stack", "title"],
  ["links", "stack", "title", "description"],
  ["links", "stack", "description", "title"],
];

const projectTagIcons: Record<string, typeof siReact> = {
  "Next.js": siNextdotjs,
  "React Native": siReact,
  React: siReact,
  "Node.js": siNodedotjs,
  TypeScript: siTypescript,
  Django: siDjango,
  Flutter: siFlutter,
  Firebase: siFirebase,
  PostgreSQL: siPostgresql,
  MySQL: siMysql,
  Docker: siDocker,
  "Socket.IO": siSocketdotio,
  Prisma: siPrisma,
  Laravel: siLaravel,
  Livewire: siLivewire,
  Tailwind: siTailwindcss,
  CSS: siCss,
  "REST API": siFastapi,
};

const projectTagFallbackIcons: Record<string, string> = {
  AI: "ri-brain-line",
  "AI Advisor": "ri-brain-line",
  ML: "ri-line-chart-line",
  NLP: "ri-message-3-line",
  IoT: "ri-radar-line",
  SEO: "ri-search-eye-line",
  Booking: "ri-calendar-check-line",
  "Landing Page": "ri-layout-4-line",
  Chatbot: "ri-robot-2-line",
  Botpress: "ri-message-3-line",
  "Farm Operations": "ri-leaf-line",
  "Web App": "ri-window-line",
};

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
            <article
              key={group.title}
              style={
                {
                  "--capability-accent": group.accent,
                  "--capability-surface": group.surface,
                } as CSSProperties
              }
            >
              <div className={styles.capabilityLabel}>
                <h3>{group.title}</h3>
                <i className={group.icon} aria-hidden="true" />
              </div>
              <ul>
                {group.items.map(({ name, icon }) => (
                  <li
                    key={name}
                    className={name === group.featured ? styles.featuredTech : undefined}
                  >
                    <span>{name}</span>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d={icon.path} />
                    </svg>
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

      <section className={styles.projects} id="projects" aria-labelledby="projects-title">
        <div className={styles.projectsHeading}>
          <p>03 / Recent projects</p>
          <h2 id="projects-title">Selected work, built to be useful.</h2>
          <p>A closer look at products shaped around real operational needs, clear interfaces, and dependable engineering.</p>
        </div>

        <div className={styles.projectList}>
          {portfolioProjects.map((project, index) => (
            <article
              className={styles.projectRow}
              key={project.title}
              tabIndex={0}
              aria-label={`${project.title} project`}
            >
              {projectContentOrders[index].map((content) => {
                if (content === "title") {
                  return (
                    <div className={`${styles.projectBlock} ${styles.projectTitle}`} key={content}>
                      <span>{String(index + 1).padStart(2, "0")} / {project.category}</span>
                      <h3>{project.title}</h3>
                    </div>
                  );
                }

                if (content === "description") {
                  return <p className={`${styles.projectBlock} ${styles.projectDescription}`} key={content}>{project.description}</p>;
                }

                if (content === "stack") {
                  return (
                    <div className={`${styles.projectBlock} ${styles.projectTags}`} aria-label={`${project.title} technologies`} key={content}>
                      {project.tags.map((tag) => {
                        const icon = projectTagIcons[tag];

                        return (
                          <span key={tag}>
                            <span>{tag}</span>
                            {icon ? (
                              <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d={icon.path} />
                              </svg>
                            ) : (
                              <i className={projectTagFallbackIcons[tag] ?? "ri-code-s-slash-line"} aria-hidden="true" />
                            )}
                          </span>
                        );
                      })}
                    </div>
                  );
                }

                return (
                  <div className={`${styles.projectBlock} ${styles.projectLinks}`} key={content}>
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer">
                        View live <i className="ri-arrow-right-up-line" aria-hidden="true" />
                      </a>
                    )}
                    {project.repoUrl && (
                      <a href={project.repoUrl} target="_blank" rel="noreferrer">
                        Source <i className="ri-github-line" aria-hidden="true" />
                      </a>
                    )}
                    {project.frontendUrl && (
                      <a href={project.frontendUrl} target="_blank" rel="noreferrer">
                        Frontend <i className="ri-github-line" aria-hidden="true" />
                      </a>
                    )}
                    {project.backendUrl && (
                      <a href={project.backendUrl} target="_blank" rel="noreferrer">
                        Backend <i className="ri-github-line" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                );
              })}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
