import { notFound } from "next/navigation";
import { FileText, CheckCircle2, ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { SITE, localizedPath, type SiteLocale } from "@/lib/site";
import { getServiceDetail } from "@/data/serviceDetails";
import { SERVICE_SLUGS } from "@/data/serviceSlugs";

export async function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const locale = (await getLocale()) as SiteLocale;
  const t = await getTranslations({ locale, namespace: "SEO" });
  const service = getServiceDetail(locale, params.slug);

  if (!service) {
    return { title: t("notFoundTitle") };
  }

  const path = `/hizmetler/${params.slug}`;
  const canonical = `${SITE.url}${localizedPath(locale, path)}`;

  return {
    title: service.title,
    description: service.description,
    keywords: service.seoKeywords,
    alternates: {
      canonical,
      languages: {
        tr: `${SITE.url}${localizedPath("tr", path)}`,
        en: `${SITE.url}${localizedPath("en", path)}`,
      },
    },
  };
}

export default async function ServiceDetail({ params }: { params: { slug: string } }) {
  const locale = (await getLocale()) as SiteLocale;
  const t = await getTranslations({ locale, namespace: "ServiceDetail" });
  const homePath = localizedPath(locale, "/");
  const service = getServiceDetail(locale, params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <main className="pt-24 pb-20">
        <div className="bg-gradient-to-b from-slate-50 to-white dark:from-zinc-900 dark:to-black py-16 mb-12 relative overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-50"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <Link 
              href={`${homePath}#services`} 
              className="group inline-flex items-center text-sm font-medium text-zinc-500 hover:text-navy-900 dark:text-zinc-400 dark:hover:text-white mb-8 transition-colors"
            >
              <span className="p-1 rounded-full bg-zinc-100 dark:bg-zinc-800 mr-2 group-hover:-translate-x-1 transition-transform">
                <ArrowRight className="rotate-180" size={14} />
              </span>
              {t("back")}
            </Link>
            
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                  <span className="text-sm font-semibold text-amber-600 dark:text-amber-500 uppercase tracking-wider">{t("badge")}</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-6 text-navy-900 dark:text-white leading-tight">
                  {service.title}
                </h1>
                <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              <div className="hidden md:flex items-center justify-center w-24 h-24 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-xl shadow-zinc-200/50 dark:shadow-black/50">
                 <div className="text-amber-500">
                    <FileText size={40} strokeWidth={1.5} />
                 </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <section className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800">
                <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-6 flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-amber-500 rounded-full"></span>
                  {t("detailTitle")}
                </h2>
                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-lg">
                  {service.longDescription}
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-6">{t("processTitle")}</h3>
                <div className="space-y-4">
                  {service.steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-white dark:bg-zinc-900/50 rounded-xl border border-zinc-100 dark:border-zinc-800 transition-colors hover:border-amber-500/30">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-navy-50 dark:bg-navy-900/30 text-navy-700 dark:text-navy-300 flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <div className="pt-1 text-zinc-700 dark:text-zinc-300 font-medium">
                        {step}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="space-y-8">
              <div className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/30">
                <h3 className="text-lg font-bold text-navy-900 dark:text-white mb-4 flex items-center gap-2">
                  <FileText className="text-amber-600 dark:text-amber-500" />
                  {t("documentsTitle")}
                </h3>
                <ul className="space-y-3">
                  {service.documents.map((doc, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sticky top-24">
                <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-zinc-200/50 dark:shadow-black/50 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl -mr-16 -mt-16 transition-transform group-hover:scale-110 duration-700"></div>
                  
                  <h3 className="text-xl font-bold mb-4 text-navy-900 dark:text-white">{t("startNowTitle")}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-8 text-sm leading-relaxed">
                    {t("startNowText")}
                  </p>
                  
                  <div className="space-y-4">
                    <a href={`${homePath}#iletisim`} className="block w-full py-4 bg-amber-500 text-white text-center rounded-xl font-bold hover:bg-amber-600 transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 hover:-translate-y-0.5">
                      {t("quoteCta")}
                    </a>

                    <a 
                      href={`https://wa.me/905347706075?text=${encodeURIComponent(t("whatsappText", { service: service.title }))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-4 bg-[#25D366] text-white text-center rounded-xl font-bold hover:bg-[#20bd5a] transition-all shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/30 hover:-translate-y-0.5"
                    >
                      <MessageCircle size={20} />
                      {t("whatsappCta")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

