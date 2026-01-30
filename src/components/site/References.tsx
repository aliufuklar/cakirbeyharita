"use client";

import { Building, Landmark, Scale, GraduationCap, HardHat } from "lucide-react";
import { motion } from "framer-motion";

const references = [
  { id: 1, name: "T.C. Çevre ve Şehircilik Bakanlığı", icon: Building },
  { id: 2, name: "Tapu ve Kadastro Genel Müdürlüğü", icon: Scale },
  { id: 3, name: "Şanlıurfa Büyükşehir Belediyesi", icon: Landmark },
  { id: 4, name: "Haliliye Belediyesi", icon: Landmark },
  { id: 5, name: "Harran Üniversitesi", icon: GraduationCap },
  { id: 6, name: "DSİ Bölge Müdürlüğü", icon: HardHat },
];

export default function References() {
  const items = [...references, ...references];

  return (
    <section className="py-10 border-y border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white/90 to-transparent dark:from-zinc-900/60" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white/90 to-transparent dark:from-zinc-900/60" />

          <motion.div
            className="flex w-max items-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-500"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 34, ease: "linear", repeat: Infinity }}
          >
            {items.map((ref, idx) => (
              <div
                key={`${ref.id}-${idx}`}
                className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300 group select-none"
              >
                <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg group-hover:bg-amber-100 dark:group-hover:bg-amber-900/30 transition-colors">
                  <ref.icon className="w-8 h-8 text-zinc-400 group-hover:text-amber-600 dark:text-zinc-500 dark:group-hover:text-amber-500 transition-colors" />
                </div>
                <span className="text-sm md:text-base font-semibold text-zinc-400 group-hover:text-navy-900 dark:group-hover:text-zinc-200 transition-colors max-w-[150px] leading-tight hidden md:block whitespace-nowrap">
                  {ref.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
