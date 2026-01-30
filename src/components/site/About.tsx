"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useSpring, useMotionValue } from "framer-motion";
import { Award, CheckCircle2, Users } from "lucide-react";
import Image from "next/image";

const AnimatedCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref} className="text-3xl font-bold text-navy-900 dark:text-white" />;
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="hakkimizda" className="py-24 relative overflow-hidden bg-zinc-50 dark:bg-black/50">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Image with Geometric Mask */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/3] w-full max-w-lg mx-auto lg:mx-0">
              {/* Main Image Container */}
              <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative w-full h-full">
                  <Image
                    src="/Cadastral Map Blueprint 512x384.webp"
                    alt="Kadastro harita blueprint görseli"
                    fill
                    priority
                    sizes="(min-width: 1024px) 520px, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/55 via-navy-900/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(158,50,56,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(158,50,56,0.10)_1px,transparent_1px)] bg-[size:44px_44px] opacity-20" />

                  <div className="absolute bottom-8 left-8 right-8 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-xs font-mono text-white/85">SİSTEM AKTİF • 37.16° N, 38.79° E</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Geometric Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-amber-500 rounded-tl-3xl opacity-60"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 border-navy-500 dark:border-white rounded-br-3xl opacity-60"></div>
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -right-8 top-12 bg-white dark:bg-zinc-900 p-4 rounded-xl shadow-xl border border-zinc-100 dark:border-zinc-800 hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg text-amber-600 dark:text-amber-500">
                    <Award size={24} />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 font-medium uppercase">Lisans No</div>
                    <div className="text-lg font-bold text-navy-900 dark:text-white">6307-775</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white leading-tight">
                Modern Teknoloji, <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">Lisanslı Tecrübe</span>
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Şanlıurfa ve Haliliye bölgesinde, Fikret Çakır liderliğinde; Harita, Kadastro ve Mühendislik alanlarında resmi yetki ve yüksek teknolojiyle hizmet veriyoruz. 
              </p>
              <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                6307-775 nolu lisansımızla, mülkiyet sorunlarından imar uygulamalarına, hassas şantiye ölçümlerinden drone haritalamaya kadar geniş bir yelpazede güvenilir çözüm ortağınızız. Her projemizde hukuksal geçerliliği ve teknik doğruluğu esas alıyoruz.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              {/* Stat 1 */}
              <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-3 text-amber-500">
                  <Award size={28} />
                </div>
                <div className="mb-1">
                  <AnimatedCounter value={10} suffix="+" />
                </div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">Yıllık Tecrübe</div>
              </div>

              {/* Stat 2 */}
              <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-3 text-navy-600 dark:text-navy-400">
                  <CheckCircle2 size={28} />
                </div>
                <div className="mb-1">
                  <AnimatedCounter value={1000} suffix="+" />
                </div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">Başarılı Proje</div>
              </div>

              {/* Stat 3 */}
              <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-3 text-green-600 dark:text-green-500">
                  <Users size={28} />
                </div>
                <div className="mb-1">
                  <AnimatedCounter value={100} suffix="%" />
                </div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">Müşteri Memnuniyeti</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
