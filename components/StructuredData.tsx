// components/StructuredData.tsx
"use client";

import { Person } from "schema-dts";
import { ScriptProps } from "next/script";

export function StructuredData({ lang }: { lang: "en" | "no" }) {
  const personData: Person = {
    "@type": "Person",
    name: "Magnus Gjerstad",
    jobTitle:
      lang === "en" ? "Computer Engineer Student" : "Dataingeniørstudent",
    sameAs: [
      "https://www.linkedin.com/in/magnus-gjerstad-85b184177/",
      "https://github.com/magnus411",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
    />
  );
}
