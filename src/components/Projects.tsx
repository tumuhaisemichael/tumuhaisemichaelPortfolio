"use client";

import { useState, useTransition } from "react";

interface Project {
  title: string;
  description: string;
  category: "web" | "mobile" | "ai" | "chatbot" | "website";
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
  frontendUrl?: string;
  backendUrl?: string;
  mlModelUrl?: string;
  pill: string;
  icon: string;
  iconColor: string;
}

const projects: Project[] = [
  {
    title: "OP Energy",
    description: "Estimates Uganda Yaka usage, tracks appliance power draw, and projects household energy cost with AI-guided tips.",
    category: "web",
    tags: ["Next.js", "AI Advisor", "IoT"],
    repoUrl: "https://github.com/tumuhaisemichael/openergy",
    liveUrl: "https://openergy.tumuhaise.com/",
    pill: "Energy · Web",
    icon: "ri-flashlight-line",
    iconColor: "text-emerald-500",
  },
  {
    title: "RouteWise",
    description: "Mobile shuttle routing with React Native UI, Django backend and an ML model that optimises routes using traffic history.",
    category: "mobile",
    tags: ["React Native", "Django", "ML"],
    frontendUrl: "https://github.com/walnatum/routewise",
    backendUrl: "https://github.com/walnatum/dynamic-shuttle-route-optimizer-backend",
    pill: "Mobile · ML",
    icon: "ri-road-map-line",
    iconColor: "text-orange-500",
  },
  {
    title: "WonderWedding",
    description: "Flutter + Firebase mobile experience for wedding planning, guest coordination, and AI personalisation.",
    category: "mobile",
    tags: ["Flutter", "Firebase", "AI"],
    repoUrl: "https://github.com/Alinator1993/wonderwedding",
    pill: "Mobile · AI",
    icon: "ri-heart-3-line",
    iconColor: "text-pink-500",
  },
  {
    title: "Ephemra",
    description: "Self-hosted, end-to-end encrypted messaging with ephemeral sessions, encrypted file transfer, and realtime calls.",
    category: "web",
    tags: ["Next.js", "Socket.IO", "Prisma"],
    repoUrl: "https://github.com/tumuhaisemichael/ephemralive",
    liveUrl: "https://ephemra.tumuhaise.com/",
    pill: "Secure · Web",
    icon: "ri-lock-2-line",
    iconColor: "text-slate-500",
  },
  {
    title: "CloudVault",
    description: "Premium digital asset vault with multi-format uploads, foldering, previews, and automated database maintenance.",
    category: "web",
    tags: ["Next.js 14", "TypeScript", "MySQL"],
    repoUrl: "https://github.com/tumuhaisemichael/store",
    liveUrl: "https://store.wildmedug.com/",
    pill: "Media · Web",
    icon: "ri-folders-line",
    iconColor: "text-amber-500",
  },
  {
    title: "Business Marketplace",
    description: "Multi-tenant marketplace with approval workflows, role-based access, and AI product recommendations.",
    category: "ai",
    tags: ["Next.js", "Django", "PostgreSQL"],
    repoUrl: "https://github.com/tumuhaisemichael/product-marketplace",
    pill: "SaaS · AI",
    icon: "ri-store-2-line",
    iconColor: "text-emerald-600",
  },
  {
    title: "Flux Studio",
    description: "Collaborative AI creative workshop with Dockerised Django + React architecture and glassmorphism UI.",
    category: "ai",
    tags: ["Django", "React", "Docker"],
    repoUrl: "https://github.com/tumuhaisemichael/django-react-supabase-docker",
    pill: "Collab · AI",
    icon: "ri-brush-2-line",
    iconColor: "text-indigo-500",
  },
  {
    title: "CommunityConnect",
    description: "Emergency response MVP with panic-button guard dispatch, realtime tracking, and push notifications.",
    category: "mobile",
    tags: ["React Native", "Node.js", "Socket.IO"],
    repoUrl: "https://github.com/tumuhaisemichael/community",
    pill: "Safety · Mobile",
    icon: "ri-shield-user-line",
    iconColor: "text-emerald-600",
  },
  {
    title: "Poultry Management",
    description: "Farm operations system for day-to-day poultry management, records, and detailed reporting.",
    category: "web",
    tags: ["Web App", "Farm Ops"],
    repoUrl: "https://github.com/tumuhaisemichael/poultry-management-system",
    pill: "Agri · Web",
    icon: "ri-leaf-line",
    iconColor: "text-green-600",
  },
  {
    title: "EcoTour Uganda",
    description: "Community tourism marketplace connecting travellers to eco-friendly experiences and local hosts.",
    category: "web",
    tags: ["Laravel", "Livewire", "Tailwind"],
    repoUrl: "https://github.com/tumuhaisemichael/Ecotour",
    pill: "Tourism · Web",
    icon: "ri-earth-line",
    iconColor: "text-emerald-600",
  },
  {
    title: "Matendo Medical",
    description: "Laravel medical platform for doctors, patients, and clients to manage care, records, and communication.",
    category: "web",
    tags: ["Laravel", "MySQL"],
    repoUrl: "https://github.com/TTatuIntel/Matendo",
    pill: "Health · Web",
    icon: "ri-hospital-line",
    iconColor: "text-rose-500",
  },
  {
    title: "Recipe Browser",
    description: "Flutter app that browses TheMealDB recipes with category filters, ingredient details, and smooth navigation.",
    category: "mobile",
    tags: ["Flutter", "REST API"],
    repoUrl: "https://github.com/tumuhaisemichael/recipe_browser",
    pill: "Mobile · Flutter",
    icon: "ri-restaurant-2-line",
    iconColor: "text-amber-500",
  },
  {
    title: "Agribot",
    description: "Agriculture-focused chatbot for quick farming answers and guidance.",
    category: "chatbot",
    tags: ["Chatbot", "NLP"],
    repoUrl: "https://github.com/tumuhaisemichael/Agribot",
    pill: "Chatbot · Agri",
    icon: "ri-robot-2-line",
    iconColor: "text-emerald-600",
  },
  {
    title: "Botpress Chatbot",
    description: "Botpress-based chatbot deployment for rapid conversational UX.",
    category: "chatbot",
    tags: ["Botpress"],
    repoUrl: "https://github.com/tumuhaisemichael/botpresschatbot",
    pill: "Chatbot",
    icon: "ri-message-3-line",
    iconColor: "text-slate-500",
  },
  {
    title: "Beefita AI Bot",
    description: "Conversational assistant for business support and FAQ automation.",
    category: "chatbot",
    tags: ["Chatbot", "AI"],
    repoUrl: "https://github.com/tumuhaisemichael/Beefitaibot",
    pill: "Chatbot · AI",
    icon: "ri-customer-service-2-line",
    iconColor: "text-amber-600",
  },
  {
    title: "Afrisoft Website",
    description: "Company website and digital presence for Afrisoft Ltd.",
    category: "website",
    tags: ["Livewire", "CSS"],
    liveUrl: "https://afrisoft.org/",
    pill: "Corporate Website",
    icon: "ri-global-line",
    iconColor: "text-emerald-600",
  },
  {
    title: "EduPartnerships",
    description: "Education partnerships website and content hub.",
    category: "website",
    tags: ["Tailwind", "SEO"],
    liveUrl: "https://edupartnerships.org/",
    pill: "Edu Website",
    icon: "ri-community-line",
    iconColor: "text-indigo-500",
  },
  {
    title: "WonderWedding Site",
    description: "Wedding marketing site and experience landing page.",
    category: "website",
    tags: ["Landing Page"],
    liveUrl: "https://wonderwedding.afrisoft.org/",
    pill: "Wedding Website",
    icon: "ri-heart-2-line",
    iconColor: "text-pink-500",
  },
  {
    title: "WildMed Uganda",
    description: "Tourism platform and booking experience for WildMed Safaris.",
    category: "website",
    tags: ["Laravel", "Booking"],
    liveUrl: "https://www.wildmedug.com/",
    pill: "Tourism Website",
    icon: "ri-leaf-line",
    iconColor: "text-emerald-600",
  },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Web Apps", value: "web" },
  { label: "Mobile", value: "mobile" },
  { label: "AI", value: "ai" },
  { label: "Chatbots", value: "chatbot" },
  { label: "Websites", value: "website" },
] as const;

type Filter = typeof filters[number]["value"];

export default function Projects() {
  const [active, setActive]       = useState<Filter>("all");
  const [, startTransition]       = useTransition();

  const filtered = projects.filter(
    (p) => active === "all" || p.category === active
  );

  return (
    <section id="projects" className="py-24 section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="eyebrow block mb-3">My Portfolio</span>
          <h2 className="section-title mb-4">Recent Projects</h2>
          <p className="section-subtitle mx-auto">
            A snapshot of shipped work across web, mobile, AI, and platforms.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => startTransition(() => setActive(f.value))}
              className={`project-filter-btn ${active === f.value ? "active" : ""}`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <article
              key={p.title}
              className="project-card p-7 flex flex-col"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              {/* Card top */}
              <div className="flex items-start justify-between mb-5">
                <span className="pill">{p.pill}</span>
                <i className={`${p.icon} text-2xl ${p.iconColor}`} aria-hidden />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold mb-2" style={{ color: "var(--text)" }}>
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed mb-5 flex-1"
                 style={{ color: "var(--text-muted)" }}>
                {p.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map((t, ti) => (
                  <span key={ti} className="skill-badge text-xs">{t}</span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {p.repoUrl && (
                  <a href={p.repoUrl} target="_blank" rel="noopener noreferrer"
                    className="btn-primary px-4 py-2 text-xs rounded-lg">
                    <i className="ri-github-fill" /> Repo
                  </a>
                )}
                {p.liveUrl && (
                  <a href={p.liveUrl} target="_blank" rel="noopener noreferrer"
                    className="btn-primary px-4 py-2 text-xs rounded-lg">
                    <i className="ri-external-link-line" /> Live
                  </a>
                )}
                {p.frontendUrl && (
                  <a href={p.frontendUrl} target="_blank" rel="noopener noreferrer"
                    className="btn-primary px-4 py-2 text-xs rounded-lg">
                    Frontend
                  </a>
                )}
                {p.backendUrl && (
                  <a href={p.backendUrl} target="_blank" rel="noopener noreferrer"
                     className="px-4 py-2 text-xs rounded-lg font-bold border transition-colors
                                hover:text-primary hover:border-primary"
                     style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}>
                    Backend
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
