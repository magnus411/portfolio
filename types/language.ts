export type Language = "en" | "no";

export type TranslatedText = {
  en: string;
  no: string;
};

export function getTranslation(
  text: TranslatedText | string,
  language: Language
): string {
  if (typeof text === "string") return text;
  return text[language];
}
