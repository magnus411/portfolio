"use client";

import { useLanguage } from "@/contexts/language-context";
import { getTranslation } from "@/types/language";
import { TranslatedText } from "@/types/language";

interface TextProps {
  text: TranslatedText | string;
  className?: string;
}

export function Text({ text, className }: TextProps) {
  const { language } = useLanguage();
  const content = getTranslation(text, language);

  return <span className={className}>{content}</span>;
}
