// src/components/LanguageToggle.tsx
"use client";

import { useLanguage } from "@/contexts/language-context";
import { motion } from "framer-motion";

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="flex items-center">
      <button
        onClick={toggleLanguage}
        className="relative w-20 h-9 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors duration-300 focus:outline-none flex items-center px-1"
        aria-label="Toggle language"
      >
        <motion.div
          className="absolute w-8 h-7 rounded-full bg-white dark:bg-gray-700 shadow-sm flex items-center justify-center"
          initial={false}
          animate={{
            x: language === "no" ? "calc(100% + 0.25rem)" : "0",
          }}
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 30,
          }}
        >
          <span className="text-xs font-medium text-gray-800 dark:text-gray-200">
            {language === "en" ? "EN" : "NO"}
          </span>
        </motion.div>
        <span
          className={`text-xs font-medium flex-1 text-center ${
            language === "no" ? "text-primary" : "text-gray-400"
          }`}
        >
          EN
        </span>
        <span
          className={`text-xs font-medium flex-1 text-center ${
            language === "en" ? "text-primary" : "text-gray-400"
          }`}
        >
          NO
        </span>
      </button>
    </div>
  );
}
