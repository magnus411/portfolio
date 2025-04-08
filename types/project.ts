import { TranslatedText } from "./language";

export type ProjectLink = {
  url: string;
  title: TranslatedText;
  type: "github" | "demo" | "docs";
};

export type Project = {
  id: string;
  title: TranslatedText;
  description: TranslatedText;
  longDescription?: TranslatedText;
  image?: string;
  tags?: string[];
  category: "programming" | "design" | "work" | "education";
  links?: ProjectLink[];
  features?: string[];
  technologies?: string[];
  period?: string;
  company?: string;
  date?: string;
};
