import type { MetadataRoute } from "next";
import { SITE, localizedPath, type SiteLocale } from "@/lib/site";
import { SERVICE_SLUGS } from "@/data/serviceSlugs";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales: SiteLocale[] = ["tr", "en"];
  const now = new Date();

  const paths = [
    "/",
    "/hizmetler/iha-haritalama",
    ...SERVICE_SLUGS.map((slug) => `/hizmetler/${slug}`),
  ];

  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${SITE.url}${localizedPath(locale, path)}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: path === "/" ? 1 : 0.7,
    }))
  );
}

