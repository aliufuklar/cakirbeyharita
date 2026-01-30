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

interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const lihkabServices: Service[] = [
  {
    id: "l1",
    slug: "aplikasyon-sinir-tespiti",
    title: "Aplikasyon (Sınır Tespiti)",
    description: "Parsel sınırlarınızın zeminde hassas ölçümlerle tespit edilmesi ve işaretlenmesi.",
    icon: MapPin,
  },
  {
    id: "l2",
    slug: "cins-degisikligi",
    title: "Cins Değişikliği",
    description: "Taşınmazınızın niteliğinin yapılı veya yapısız olarak tapu kaydında güncellenmesi.",
    icon: RefreshCw,
  },
  {
    id: "l3",
    slug: "irtifak-hakki-tesisi",
    title: "İrtifak Hakkı Tesisi",
    description: "Taşınmaz üzerinde geçit, kaynak veya üst hakkı gibi kullanım haklarının tesisi.",
    icon: ArrowRightLeft,
  },
  {
    id: "l4",
    slug: "birlestirme-tevhid",
    title: "Birleştirme (Tevhid)",
    description: "Birden fazla komşu parselin tek bir parsel altında teknik olarak birleştirilmesi.",
    icon: Combine,
  },
  {
    id: "l5",
    slug: "yer-gosterme",
    title: "Yer Gösterme",
    description: "Parselinizin konumunun kadastro paftasına göre zeminde size gösterilmesi.",
    icon: FileCheck,
  },
];

const engineeringServices: Service[] = [
  {
    id: "e1",
    slug: "halihazir-harita-uretimi",
    title: "Halihazır Harita Üretimi",
    description: "Mevcut arazi durumunun, yapıların ve detayların güncel haritalara işlenmesi.",
    icon: MapIcon,
  },
  {
    id: "e2",
    slug: "imar-uygulamalari",
    title: "İmar Uygulamaları",
    description: "18. Madde uygulamaları ile ham arazilerin imar planına uygun arsalara dönüşümü.",
    icon: Building2,
  },
  {
    id: "e3",
    slug: "plankote",
    title: "Plankote",
    description: "Mimari projeler için arazinin eğim ve kot detaylarını içeren teknik haritalama.",
    icon: Ruler,
  },
  {
    id: "e4",
    slug: "santiye-olcumleri-kubaj",
    title: "Şantiye Ölçümleri & Kübaj",
    description: "Hafriyat, dolgu ve yapı aplikasyonu süreçlerinde hassas şantiye ölçümleri.",
    icon: Calculator,
  },
  {
    id: "e5",
    slug: "drone-ile-haritalama",
    title: "Drone (İHA) ile Haritalama",
    description: "Geniş alanların fotogrametrik yöntemlerle havadan yüksek çözünürlüklü haritalanması.",
    icon: Plane,
  },
];

const ServiceCard = ({ service, type }: { service: Service; type: "lihkab" | "engineering" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`group relative p-6 rounded-2xl border transition-all duration-300 h-full flex flex-col
        ${
          type === "lihkab"
            ? "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10"
            : "bg-zinc-50 dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10"
        }
      `}
    >
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-navy-50 dark:bg-navy-900/30 text-navy-900 dark:text-navy-100 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
        <service.icon size={24} strokeWidth={1.5} />
      </div>
      <h3 className="text-lg font-semibold text-navy-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors">
        {service.title}
      </h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 flex-grow">
        {service.description}
      </p>
      
      <Link 
        href={`/hizmetler/${service.slug}`}
        className="inline-flex items-center text-sm font-medium text-amber-600 hover:text-amber-700 dark:text-amber-500 dark:hover:text-amber-400 transition-colors"
      >
        Detaylı Bilgi
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
            Hizmetlerimiz
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-600 dark:text-zinc-400"
          >
            Profesyonel kadastro ve mühendislik çözümleri
          </motion.p>
        </div>

        {/* LİHKAB Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800"></div>
            <span className="px-4 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-sm font-medium text-navy-900 dark:text-zinc-300 bg-white dark:bg-black shadow-sm">
              LİHKAB (Lisanslı Harita Kadastro)
            </span>
            <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lihkabServices.map((service) => (
              <ServiceCard key={service.id} service={service} type="lihkab" />
            ))}
          </div>
        </div>

        {/* Engineering Section */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800"></div>
            <span className="px-4 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-sm font-medium text-navy-900 dark:text-zinc-300 bg-white dark:bg-black shadow-sm">
              Haritalama ve Mühendislik
            </span>
            <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {engineeringServices.map((service) => (
              <ServiceCard key={service.id} service={service} type="engineering" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
