import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import ScrollProgress from "@/components/site/ScrollProgress";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (!(routing.locales as readonly string[]).includes(params.locale)) notFound();

  setRequestLocale(params.locale as "tr" | "en");
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={params.locale} messages={messages}>
      <ScrollProgress />
      <Header />
      {children}
      <Footer />
    </NextIntlClientProvider>
  );
}
