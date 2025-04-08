import { MetadataRoute } from "next";
import { i18n } from "@/lib/i18n-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gjerstad.tech";

  return i18n.locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 1,
    alternates: {
      languages: i18n.locales.reduce((acc, loc) => {
        if (loc !== locale) {
          acc[loc] = `${baseUrl}/${loc}`;
        }
        return acc;
      }, {} as Record<string, string>),
    },
  }));
}
