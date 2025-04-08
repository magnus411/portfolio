// components/StructuredData.tsx
"use client";

export function StructuredData({ lang }: { lang: "en" | "no" }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Magnus Gjerstad",
    jobTitle:
      lang === "en" ? "Computer Engineer Student" : "Dataingeniørstudent",
    url: "https://gjerstad.tech",
    sameAs: [
      "https://www.linkedin.com/in/magnus-gjerstad-85b184177/",
      "https://github.com/magnus411",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
