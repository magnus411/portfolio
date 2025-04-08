import { i18n } from "@/lib/i18n-config";
import { redirect } from "next/navigation";

export default function Home() {
  redirect(`/${i18n.defaultLocale}`);
}
