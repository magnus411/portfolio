import { Locale } from "@/lib/i18n-config";

export default function HreflangTags({ lang }: { lang: Locale }) {
  return (
    <>
      <link rel="alternate" hrefLang="en" href={`https://gjerstad.tech/en`} />
      <link rel="alternate" hrefLang="no" href={`https://gjerstad.tech/no`} />
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`https://gjerstad.tech/en`}
      />
    </>
  );
}
