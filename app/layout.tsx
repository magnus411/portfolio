// app/layout.tsx
import HreflangTags from "@/components/HreflangTags";
import "./globals.css";
import type { Metadata } from "next";
import { StructuredData } from "@/components/StructuredData";
export const metadata: Metadata = {
  title: "Magnus Gjerstad |  Portfolio",
  description:
    "Portfolio and CV of Magnus Gjerstad, Computer Engineer student at NTNU. Showcasing projects, skills, and professional experience in software development and engineering.",
  keywords: [
    "Computer Engineer",
    "NTNU",
    "Software Developer",
    "full-stack developer",
    "full stack",
    "Portfolio",
    "CV",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Web Development",
    "Software Engineering",
    "Computer Science",
    "Engineering Projects",
    "C",
    "Python",
    "Java",
    "Spring boot",
    "dataingeniør",
    "programmering",
    "norsk utvikler",
    "norsk ingeniør",
    "trondheim",
    "magnus gjerstad",
    "magnus",
    "gjerstad",
    "magnusgjerstad",
    "gjerstad.tech",
    "trondheim utvikler",
    "trondheim ingeniør",
    "trondheim dataingeniør",
    "trondheim datateknologi",
    "trondheim student",
    "NTNU student",
    "datateknologi",
  ],
  authors: [{ name: "Magnus Gjerstad", url: "https://gjerstad.tech" }],
  creator: "Magnus Gjerstad",
  publisher: "Magnus Gjerstad",
  openGraph: {
    title: "Magnus Gjerstad | Computer Engineer student | Portfolio",
    description:
      "Portfolio and CV of Magnus Gjertsad, Computer Engineer student at NTNU.",
    url: "https://gjerstad.tech",
    siteName: "Magnus Gjerstad Portfolio",
    images: [
      {
        url: "https://gjerstad.tech/_next/image?url=%2FGjerstad.webp&w=1080&q=75",
        width: 1350,
        height: 1080,
        alt: "Magnus Gjerstad Portfolio",
      },
    ],
    locale: "no_NO",
    type: "website",
  },
  metadataBase: new URL("https://gjerstad.tech"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
