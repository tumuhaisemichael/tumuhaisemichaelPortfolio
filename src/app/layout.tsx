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
  title: "Michael Tumuhaise — Full Stack Software Engineer",
  description:
    "Michael Tumuhaise is a Full Stack Software Engineer in Kampala, Uganda. Specialising in Web, Mobile, IoT and AI/ML. Available for freelance, remote and full-time work.",
  keywords:
    "Michael Tumuhaise, Tumuhaise Michael, Full Stack Developer Uganda, React Developer, Node.js, Django, Flutter, AI Engineer, Mobile App Developer",
  openGraph: {
    title: "Michael Tumuhaise — Full Stack Software Engineer",
    description:
      "Software Engineer specialising in high-performance web platforms, cross-platform mobile apps, IoT systems and AI/ML solutions.",
    url: "https://tumuhaise.com",
    type: "website",
  },
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
      </head>
      <body className="page-gradient min-h-full flex flex-col">{children}</body>
    </html>
  );
}
