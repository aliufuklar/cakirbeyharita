import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { SITE, localizedPath, type SiteLocale } from "@/lib/site";
import IhaClient from "@/components/pages/IhaClient";

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as SiteLocale;
  const t = await getTranslations({ locale, namespace: "SEO" });
  const path = "/hizmetler/iha-haritalama";
  const canonical = `${SITE.url}${localizedPath(locale, path)}`;

  return {
    title: { absolute: t("ihaTitle") },
    description: t("ihaDescription"),
    keywords: t("ihaKeywords"),
    alternates: {
      canonical,
      languages: {
        tr: `${SITE.url}${localizedPath("tr", path)}`,
        en: `${SITE.url}${localizedPath("en", path)}`,
      },
    },
  };
}

export default function IhaPage() {
  return <IhaClient />;
}

