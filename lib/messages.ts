import { Locale } from "./i18n-config";

export const messages = {
  en: {
    metadata: {
      title: "Magnus Gjerstad | Portfolio",
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
        "Spring Boot",
        "dataingeniør",
        "programmering",
        "norsk utvikler",
        "norsk ingeniør",
        "NTNU student",
        "datateknologi",
      ],
      openGraph: {
        title: "Magnus Gjerstad | Computer Engineer student | Portfolio",
        description:
          "Portfolio and CV of Magnus Gjerstad, Computer Engineer student at NTNU.",
      },
    },
  },
  no: {
    metadata: {
      title: "Magnus Gjerstad | Portefølje",
      description:
        "Portefølje og CV av Magnus Gjerstad, dataingeniørstudent ved NTNU. Viser frem prosjekter, ferdigheter og erfaring innen programvareutvikling og ingeniørfag.",
      keywords: [
        "Dataingeniør",
        "NTNU",
        "Programvareutvikler",
        "fullstack utvikler",
        "Portefølje",
        "CV",
        "React",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Webutvikling",
        "Programvareteknikk",
        "Datateknologi",
        "Ingeniørprosjekter",
        "C",
        "Python",
        "Java",
        "Spring Boot",
        "programmering",
        "norsk utvikler",
        "norsk ingeniør",
        "NTNU student",
      ],
      openGraph: {
        title: "Magnus Gjerstad | Dataingeniørstudent | Portefølje",
        description:
          "Portefølje og CV av Magnus Gjerstad, dataingeniørstudent ved NTNU.",
      },
    },
  },
};

export async function getMessages(locale: Locale) {
  switch (locale) {
    case "no":
      return messages.no;
    case "en":
    default:
      return messages.en;
  }
}

// Also export type for messages
export type Messages = typeof messages;
