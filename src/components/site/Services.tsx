"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight,
  FileCheck, 
  RefreshCw, 
  ArrowRightLeft, 
  Combine, 
  MapPin, 
  Map as MapIcon, 
  Building2, 
  Ruler, 
  Calculator, 
  Plane 
} from "lucide-react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

interface Service {
  id: string;
  slug: string;
  icon: React.ElementType;
}

const lihkabServices: Service[] = [
  {
    id: "l1",
    slug: "aplikasyon-sinir-tespiti",
    icon: MapPin,
  },
  {
    id: "l2",
    slug: "cins-degisikligi",
    icon: RefreshCw,
  },
  {
    id: "l3",
    slug: "irtifak-hakki-tesisi",
    icon: ArrowRightLeft,
  },
  {
    id: "l4",
    slug: "birlestirme-tevhid",
    icon: Combine,
  },
  {
    id: "l5",
    slug: "yer-gosterme",
    icon: FileCheck,
  },
];

const engineeringServices: Service[] = [
  {
    id: "e1",
    slug: "halihazir-harita-uretimi",
    icon: MapIcon,
  },
  {
    id: "e2",
    slug: "imar-uygulamalari",
    icon: Building2,
  },
  {
    id: "e3",
    slug: "plankote",
    icon: Ruler,
  },
  {
    id: "e4",
    slug: "santiye-olcumleri-kubaj",
    icon: Calculator,
  },
  {
    id: "e5",
    slug: "drone-ile-haritalama",
    icon: Plane,
  },
];

const ServiceCard = ({ service, type }: { service: Service; type: "lihkab" | "engineering" }) => {
  const locale = useLocale();
  const t = useTranslations("Services");
  const title = t(`${type}.${service.id}.title`);
  const description = t(`${type}.${service.id}.description`);
  const basePrefix = `/${locale}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`group relative mx-auto flex h-full w-full max-w-[90%] flex-col rounded-2xl border p-5 transition-all duration-300 sm:max-w-none sm:p-6
        ${
          type === "lihkab"
            ? "bg-white dark:bg-white border-zinc-200/90 dark:border-zinc-200/20 hover:border-[#9E3238]/40 hover:shadow-lg hover:shadow-[#9E3238]/10"
            : "bg-zinc-50 dark:bg-zinc-50 border-zinc-200/90 dark:border-zinc-200/20 hover:border-[#9E3238]/40 hover:shadow-lg hover:shadow-[#9E3238]/10"
        }
      `}
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy-50 text-navy-900 transition-colors duration-300 group-hover:bg-[#9E3238] group-hover:text-white">
        <service.icon size={24} strokeWidth={1.5} />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-navy-900 transition-colors group-hover:text-[#9E3238]">
        {title}
      </h3>
      <p className="mb-6 flex-grow text-sm leading-relaxed text-zinc-600">
        {description}
      </p>
      
      <Link 
        href={`${basePrefix}/hizmetler/${service.slug}`}
        className="inline-flex items-center text-sm font-medium text-[#9E3238] transition-colors hover:text-[#7f282d]"
      >
        {t("details")}
        <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
      </Link>
      
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-0 right-0 w-4 h-4 bg-amber-500/20 transform rotate-45 translate-x-2 -translate-y-2"></div>
      </div>
    </motion.div>
  );
};

export default function Services() {
  const t = useTranslations("Services");

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
      <div id="hizmetler" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mb-4"
          >
            {t("title")}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-600 dark:text-zinc-400"
          >
            {t("subtitle")}
          </motion.p>
        </div>

        {/* LİHKAB Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800"></div>
            <span className="px-4 py-1.5 rounded-full border border-zinc-200/90 dark:border-zinc-200/20 text-sm font-medium text-navy-900 bg-white dark:bg-white shadow-sm">
              {t("lihkabLabel")}
            </span>
            <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800"></div>
          </div>
          
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {lihkabServices.map((service) => (
              <ServiceCard key={service.id} service={service} type="lihkab" />
            ))}
          </div>
        </div>

        {/* Engineering Section */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800"></div>
            <span className="px-4 py-1.5 rounded-full border border-zinc-200/90 dark:border-zinc-200/20 text-sm font-medium text-navy-900 bg-white dark:bg-white shadow-sm">
              {t("engineeringLabel")}
            </span>
            <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800"></div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {engineeringServices.map((service) => (
              <ServiceCard key={service.id} service={service} type="engineering" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
