export type CompanyVisual =
  | "software"
  | "safari"
  | "network"
  | "civic"
  | "research";

export interface CompanyDetails {
  sector: string;
  headline: string;
  context: string;
  websiteUrl?: string;
  websiteLabel?: string;
  initials: string;
  visual: CompanyVisual;
}

// Company context is separate from the shared career history so the original
// homepage keeps its existing content. Headlines are editorial, not brand slogans.
export const companyDetails: Record<string, CompanyDetails> = {
  "Baisoft Tech": {
    sector: "Product engineering",
    headline: "Systems built to move.",
    context:
      "A product-focused software team where web and mobile engineering meet dependable delivery.",
    websiteUrl: "https://baisoftglobal.com/",
    websiteLabel: "baisoftglobal.com",
    initials: "BT",
    visual: "software",
  },
  "Afrisoft Ltd": {
    sector: "Software & digital products",
    headline: "Ideas, made useful.",
    context:
      "A Kampala-based software company building digital products for business, agriculture, and logistics across African markets.",
    websiteUrl: "https://afrisoft.org/",
    websiteLabel: "afrisoft.org",
    initials: "AF",
    visual: "software",
  },
  "WildMed Safaris": {
    sector: "Travel & conservation",
    headline: "A window to the wild.",
    context:
      "Wildlife expeditions and field programmes connecting travel, conservation, and scientific learning across East Africa.",
    websiteUrl: "https://www.wildmedug.com/",
    websiteLabel: "wildmedug.com",
    initials: "WM",
    visual: "safari",
  },
  "Tattuintel Ltd": {
    sector: "Mobile & intelligent systems",
    headline: "Connecting the moving parts.",
    context:
      "Mobile and web solutions bringing software and machine learning into logistics and event planning.",
    websiteUrl: "https://tattuintel.com/",
    websiteLabel: "tattuintel.com",
    initials: "TI",
    visual: "network",
  },
  "NITA-U": {
    sector: "Public digital infrastructure",
    headline: "Digital services. Human impact.",
    context:
      "Uganda’s national authority coordinating IT development and enabling digital government services.",
    websiteUrl: "https://www.nita.go.ug/",
    websiteLabel: "www.nita.go.ug",
    initials: "NU",
    visual: "civic",
  },
  NARO: {
    sector: "Agricultural research",
    headline: "Where strong roots start.",
    context:
      "Uganda’s agricultural research organisation, supporting research across crops, livestock, fisheries, and forestry.",
    websiteUrl: "https://naro.go.ug/",
    websiteLabel: "naro.go.ug",
    initials: "NR",
    visual: "research",
  },
};
