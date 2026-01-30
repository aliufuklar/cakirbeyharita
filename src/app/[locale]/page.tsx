import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Services from "@/components/site/Services";
import References from "@/components/site/References";
import Contact from "@/components/site/Contact";
import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { SITE, localizedPath, type SiteLocale } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as SiteLocale;
  const t = await getTranslations({ locale, namespace: "SEO" });

  const canonical = `${SITE.url}${localizedPath(locale, "/")}`;

  return {
    title: { absolute: t("homeTitle") },
    description: t("homeDescription"),
    keywords: t("homeKeywords"),
    alternates: {
      canonical,
      languages: {
        tr: `${SITE.url}${localizedPath("tr", "/")}`,
        en: `${SITE.url}${localizedPath("en", "/")}`,
      },
    },
  };
}

export default function Home() {
  return (
    <main className="pt-24">
      <Hero />
      <Services />
      <About />
      <References />
      <Contact />
    </main>
  );
}

