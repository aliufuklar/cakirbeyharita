import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";

const fontSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fontMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.name,
    template: `%s | Çakırbey Harita`,
  },
  icons: {
    icon: [{ url: "/fav.svg", type: "image/svg+xml" }],
    shortcut: ["/fav.svg"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
    <html lang="tr">
      <body className={`${fontSans.variable} ${fontMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
