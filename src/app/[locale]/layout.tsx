import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export default function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (!(routing.locales as readonly string[]).includes(params.locale)) notFound();
  return children;
}
