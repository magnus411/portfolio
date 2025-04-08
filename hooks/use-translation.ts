import { useLanguage } from "@/contexts/language-context";
import { Language } from "@/types/language";
import { en } from "@/locales/en";
import { no } from "@/locales/no";

export function useTranslation() {
  const { language } = useLanguage();
  return language === "en" ? en : no;
}
