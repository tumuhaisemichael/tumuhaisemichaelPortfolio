import type { Metadata } from "next";
import { Space_Grotesk, Fraunces } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tumuhaise.com"),
  title: "Michael Tumuhaise — Full Stack Software Engineer",
  description:
    "Michael Tumuhaise is a Full Stack Software Engineer in Kampala, Uganda. Specialising in Web, Mobile, IoT and AI/ML. Available for freelance, remote and full-time work.",
  keywords:
    "Michael Tumuhaise, Tumuhaise Michael, Full Stack Developer Uganda, React Developer, Node.js, Django, Flutter, AI Engineer, Mobile App Developer",
  icons: {
    icon: [{ url: "/michael.png", type: "image/png" }],
    shortcut: "/michael.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: "Michael Tumuhaise — Full Stack Software Engineer",
    description:
      "Software Engineer specialising in high-performance web platforms, cross-platform mobile apps, IoT systems and AI/ML solutions.",
    url: "https://tumuhaise.com",
    type: "website",
    images: [{ url: "/michael.png", width: 1207, height: 1303, alt: "Michael Tumuhaise" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael Tumuhaise — Full Stack Software Engineer",
    description: "Software Engineer specialising in high-performance web platforms, cross-platform mobile apps, IoT systems and AI/ML solutions.",
    images: ["/michael.png"],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Michael Tumuhaise",
  url: "https://tumuhaise.com",
  image: "https://tumuhaise.com/michael.png",
  jobTitle: "Full Stack Software Engineer",
  email: "mailto:michaeltumuhaise11@gmail.com",
  address: { "@type": "PostalAddress", addressLocality: "Kampala", addressCountry: "UG" },
  sameAs: [
    "https://github.com/tumuhaisemichael",
    "https://www.linkedin.com/in/tumuhaise-michael-225515352/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${fraunces.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.6.0/remixicon.min.css"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      </head>
      <body className="page-gradient min-h-full flex flex-col">{children}</body>
    </html>
  );
}
