import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/contexts/language-context";
import { useLanguage } from "@/contexts/language-context";
import { i18n, Locale } from "@/lib/i18n-config";
import { ReactNode } from "react";
import { getMessages } from "@/lib/messages";
import HreflangTags from "@/components/HreflangTags";
import { StructuredData } from "@/components/StructuredData";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "no" }];
}
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const messages = await getMessages(params.lang);

  return {
    title: messages.metadata.title,
    description: messages.metadata.description,
    keywords: messages.metadata.keywords,
    authors: [{ name: "Magnus Gjerstad", url: "https://gjerstad.tech" }],
    creator: "Magnus Gjerstad",
    publisher: "Magnus Gjerstad",
    metadataBase: new URL("https://gjerstad.tech"),
    alternates: {
      canonical: `https://gjerstad.tech/${params.lang}`,
      languages: {
        en: "https://gjerstad.tech/en",
        no: "https://gjerstad.tech/no",
      },
    },
    openGraph: {
      title: messages.metadata.openGraph.title,
      description: messages.metadata.openGraph.description,
      url: `https://gjerstad.tech/${params.lang}`,
      siteName: "Magnus Gjerstad Portfolio",
      images: [
        {
          url: "https://www.gjerstad.tech/_next/image?url=%2FGjerstad.webp&w=1080&q=75",
          width: 1350,
          height: 1080,
          alt: "Magnus Gjerstad Portfolio",
        },
      ],
      locale: params.lang === "no" ? "no_NO" : "en_US",
      type: "website",
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
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <head>
        <HreflangTags lang={params.lang} />
        <StructuredData lang={params.lang} />
      </head>
      <body>
        <LanguageProvider initialLanguage={params.lang}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
