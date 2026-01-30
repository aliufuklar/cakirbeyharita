import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/site/ScrollProgress";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { SITE } from "@/lib/site";

const fontSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fontMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "SEO" });

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: SITE.name,
      template: `%s | Çakırbey Harita`,
    },
    description: t("homeDescription"),
    keywords: t("homeKeywords"),
    icons: {
      icon: [{ url: "/fav.svg", type: "image/svg+xml" }],
      shortcut: ["/fav.svg"],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}#localbusiness`,
    name: SITE.legalName,
    url: SITE.url,
    logo: `${SITE.url}${SITE.logoPath}`,
    email: SITE.email,
    telephone: SITE.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.streetAddress,
      addressLocality: SITE.address.addressLocality,
      addressRegion: SITE.address.addressRegion,
      addressCountry: SITE.address.addressCountry,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE.telephone,
        contactType: "customer service",
        areaServed: "TR",
        availableLanguage: ["tr", "en"],
      },
      {
        "@type": "ContactPoint",
        telephone: SITE.telephoneAlt,
        contactType: "customer service",
        areaServed: "TR",
        availableLanguage: ["tr", "en"],
      },
    ],
    additionalProperty: [
      { "@type": "PropertyValue", name: "Lisans No", value: SITE.licenseNo },
    ],
  };

  return (
    <html lang={locale}>
      <body className={`${fontSans.variable} ${fontMono.variable} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ScrollProgress />
          <Header />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
