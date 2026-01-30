export const SITE = {
  name: "Çakırbey Harita",
  legalName: "Çakırbey Harita ve Mühendislik",
  licenseNo: "6307-775",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  logoPath: "/cakirbey-logo.svg",
  telephone: "+90 414 316 55 66",
  telephoneAlt: "+90 534 770 60 75",
  email: "cakirbeyharita@gmail.com",
  emailAlt: "lihkab775@gmail.com",
  address: {
    streetAddress: "Yenişehir Mah. 231.Sk. Melek Apt No:1/1",
    addressLocality: "Haliliye",
    addressRegion: "Şanlıurfa",
    addressCountry: "TR"
  }
} as const;

export type SiteLocale = "tr" | "en";

export function getLocalePrefix(locale: SiteLocale) {
  return `/${locale}`;
}

export function localizedPath(locale: SiteLocale, path: string) {
  const prefix = getLocalePrefix(locale);
  if (path === "/") return prefix;
  return `${prefix}${path}`;
}
