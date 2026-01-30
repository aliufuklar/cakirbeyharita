import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/site/ScrollProgress";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

const fontSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fontMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Çakırbey Harita | Şanlıurfa Lisanslı Harita Kadastro (LİHKAB)",
  description: "Şanlıurfa/Haliliye merkezli, lisanslı harita ve kadastro hizmetleri. Aplikasyon, Cins Değişikliği, İmar Uygulamaları, Drone Haritalama ve Mühendislik çözümleri.",
  icons: {
    icon: [
      { url: "/fav.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/fav.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${fontSans.variable} ${fontMono.variable} antialiased`}>
        <ScrollProgress />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
