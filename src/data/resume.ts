export const resumeSkills = [
  ["Frontend", "JavaScript · TypeScript · React · Next.js · Tailwind CSS"],
  ["Backend", "Django · Laravel · FastAPI · Node.js · REST APIs"],
  ["Mobile", "React Native · Flutter · Firebase"],
  ["Data & cloud", "PostgreSQL · MySQL · Supabase · Docker · Vercel"],
  ["Applied systems", "IoT · AI/ML · TensorFlow · Scikit-learn"],
  ["Growth", "SEO · Search Console · Analytics · Digital marketing"],
] as const;

export const resumeProjects = [
  { icon: "ri-flashlight-line", name: "OP Energy", text: "Household energy intelligence that estimates Yaka use, tracks appliance demand, and offers practical savings guidance.", technologies: ["Next.js", "TypeScript", "IoT", "AI"], liveUrl: "https://openergy.tumuhaise.com/" },
  { icon: "ri-route-line", name: "RouteWise", text: "A shuttle-routing system that uses traffic history to shape more efficient school transport routes.", technologies: ["React Native", "Django", "Python", "ML"], liveUrl: null },
  { icon: "ri-heart-pulse-line", name: "Matendo Medical", text: "A secure healthcare platform connecting patients and health workers around consultations and digital records.", technologies: ["Laravel", "PHP", "MySQL"], liveUrl: null },
  { icon: "ri-message-3-line", name: "Ephemra", text: "A self-hosted private communications experience with ephemeral sessions and secure transfer.", technologies: ["Next.js", "TypeScript", "Socket.IO", "Prisma"], liveUrl: "https://ephemra.tumuhaise.com/" },
  { icon: "ri-folder-cloud-line", name: "CloudVault", text: "A dependable workspace for uploading, organising, previewing, and maintaining digital assets.", technologies: ["Next.js", "TypeScript", "MySQL"], liveUrl: "https://store.wildmedug.com/" },
  { icon: "ri-building-2-line", name: "Afrisoft", text: "The company website and digital presence for Afrisoft Ltd.", technologies: ["Livewire", "PHP", "CSS"], liveUrl: "https://afrisoft.org/" },
  { icon: "ri-graduation-cap-line", name: "EduPartnerships", text: "An education partnerships content hub focused on accessible information and discovery.", technologies: ["Tailwind CSS", "SEO", "JavaScript"], liveUrl: "https://edupartnerships.org/" },
  { icon: "ri-compass-3-line", name: "WildMed Safaris", text: "A tourism platform and booking experience for WildMed Safaris.", technologies: ["Laravel", "PHP", "Booking"], liveUrl: "https://www.wildmedug.com/" },
] as const;

export const earlierExperience = [
  { company: "Kagoma Tech", role: "IT Officer", text: "Delivered IT support, system maintenance, and networking services." },
  { company: "Excel High School", role: "Volunteer", text: "Set up IT infrastructure and supported systems management." },
] as const;
