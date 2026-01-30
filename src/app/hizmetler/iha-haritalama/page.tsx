"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  ScanLine, 
  Layers, 
  Mountain, 
  Box, 
  MessageCircle, 
  Zap, 
  Database,
  ArrowRight
} from "lucide-react";

export default function IhaPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black selection:bg-amber-500 selection:text-white">
      <main>
        {/* Tech Hero Section - Light Mode */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
          {/* Animated Tech Background */}
          <div className="absolute inset-0 bg-zinc-50 dark:bg-black">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-50"></div>
            <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-white via-white/80 to-transparent dark:from-black dark:via-black/80"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10 pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
              >
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-500 font-mono text-xs font-bold tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                  Çakırbey Harita ve Mühendislik
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight text-navy-900 dark:text-white">
                  Yeni Nesil Ölçüm Teknolojisi: <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700 dark:from-amber-400 dark:to-amber-600">
                    İHA ile Haritalama
                  </span>
                </h1>
                
                <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed mb-10">
                  Geniş arazilerde santimetre hassasiyetinde, hızlı ve güvenilir dijital veriler. 
                  Geleneksel yöntemlerin ötesinde, projenizi geleceğe taşıyan mühendislik çözümleri.
                </p>

                <motion.a 
                  href="#teknoloji"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 rounded-full border border-zinc-200 bg-white px-8 py-4 text-lg font-bold text-navy-900 shadow-xl shadow-black/5 transition-colors hover:bg-zinc-50 dark:border-white/15 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                >
                  Teknolojiyi Keşfet
                  <ArrowRight size={20} />
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="relative"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-amber-500/25 bg-white/50 dark:bg-black/40 backdrop-blur shadow-2xl shadow-amber-500/10">
                  <Image
                    src="/Industrial Mapping Drone 512x384.webp"
                    alt="Çakırbey Harita İHA drone ölçümü"
                    fill
                    priority
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent" />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(158,50,56,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(158,50,56,0.10)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30" />
                  <div className="absolute inset-0 ring-1 ring-amber-500/20" />

                  <div className="pointer-events-none absolute left-6 top-6 h-10 w-10 border-l-2 border-t-2 border-amber-500/60 rounded-tl-xl" />
                  <div className="pointer-events-none absolute right-6 top-6 h-10 w-10 border-r-2 border-t-2 border-amber-500/60 rounded-tr-xl" />
                  <div className="pointer-events-none absolute left-6 bottom-6 h-10 w-10 border-l-2 border-b-2 border-amber-500/60 rounded-bl-xl" />
                  <div className="pointer-events-none absolute right-6 bottom-6 h-10 w-10 border-r-2 border-b-2 border-amber-500/60 rounded-br-xl" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technical Focus Areas */}
        <section id="teknoloji" className="py-32 relative bg-white dark:bg-black">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Mountain,
                  title: "Sayısal Arazi Modelleri (DTM/DSM)",
                  desc: "Arazi formunun 3 boyutlu dijital ikizlerinin oluşturulması. Yüzey analizleri ve eğim haritaları için temel altlık."
                },
                {
                  icon: Box,
                  title: "Hassas Kübaj Hesapları",
                  desc: "Hafriyat ve dolgu miktarlarının hatasız analizi. Şantiye maliyet kontrolü ve ilerleme raporları için kesin sonuçlar."
                },
                {
                  icon: ScanLine,
                  title: "Yüksek Çözünürlüklü Ortofoto",
                  desc: "Santimetre piksel hassasiyetinde güncel hava fotoğrafları. Planlama ve görselleştirme için detaylı altlıklar."
                },
                {
                  icon: Layers,
                  title: "3D Modelleme ve Görselleştirme",
                  desc: "Şehir planlama ve mühendislik projeleri için gerçekçi modeller. Yapıların ve çevrenin fotorealistik sunumu."
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 hover:bg-white dark:hover:bg-zinc-900 transition-all duration-500 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="w-14 h-14 rounded-2xl bg-white dark:bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-amber-500 text-amber-600 dark:text-amber-500 group-hover:text-white dark:group-hover:text-black transition-all duration-300 shadow-md shadow-zinc-200/50 dark:shadow-none">
                    <item.icon size={28} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-navy-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Speed & Precision Dashboard */}
        <section className="py-24 bg-zinc-50 dark:bg-zinc-900 border-y border-zinc-200 dark:border-zinc-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-50"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8 text-navy-900 dark:text-white">
                  Hız ve Hassasiyetin <br/>
                  <span className="text-amber-600 dark:text-amber-500">Mükemmel Dengesi</span>
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8 leading-relaxed">
                  Geleneksel yöntemlerle haftalar süren ölçümleri, İHA teknolojisi ile saatler içinde tamamlıyoruz. İnsan hatasını minimize eden otonom uçuşlar ve yapay zeka destekli veri işleme süreçleri.
                </p>
                
                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 flex items-center gap-6 shadow-lg shadow-zinc-200/50 dark:shadow-none">
                    <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-500/10 text-amber-600 dark:text-amber-500">
                      <Zap size={32} />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-navy-900 dark:text-white mb-1">5 Kat</div>
                      <div className="text-sm text-zinc-500 font-mono uppercase font-semibold">Daha Hızlı Veri Toplama</div>
                    </div>
                  </div>
                  
                  <div className="p-6 rounded-2xl bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 flex items-center gap-6 shadow-lg shadow-zinc-200/50 dark:shadow-none">
                    <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-500">
                      <Database size={32} />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-navy-900 dark:text-white mb-1">%100</div>
                      <div className="text-sm text-zinc-500 font-mono uppercase font-semibold">Dijital & İzlenebilir Veri</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative aspect-square">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="relative h-full w-full overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-700 bg-white/50 dark:bg-black/50 backdrop-blur-sm shadow-2xl">
                  <Image
                    src="/3D Digital Terrain Mesh 512x384.png"
                    alt="Çakırbey Harita 3D dijital arazi mesh modeli"
                    fill
                    priority
                    sizes="(min-width: 1024px) 520px, 100vw"
                    className="object-cover"
                    style={{ filter: "brightness(0.8)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/10 to-transparent" />
                  <div className="absolute inset-0 bg-white/10 dark:bg-black/20" />
                  <div className="relative z-10 flex h-full flex-col justify-between p-8 md:p-10">
                    <div className="flex justify-between items-start">
                      <div className="rounded-xl bg-black/20 px-3 py-2 font-mono text-xs font-bold text-white/90 backdrop-blur-sm [text-shadow:0_1px_2px_rgba(0,0,0,0.55)]">
                        SYSTEM STATUS: ONLINE
                      </div>
                      <div className="flex gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-sm"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 shadow-sm"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-sm"></div>
                      </div>
                    </div>
                    
                    <div className="rounded-2xl bg-black/20 p-5 font-mono text-sm text-white/90 backdrop-blur-sm [text-shadow:0_1px_2px_rgba(0,0,0,0.55)] md:p-6">
                      <div className="space-y-4">
                        <div className="flex justify-between border-b border-white/20 pb-3">
                          <span className="font-semibold">GNSS SATELLITES</span>
                          <span className="text-brand-amber">24 LOCKED</span>
                        </div>
                        <div className="flex justify-between border-b border-white/20 pb-3">
                          <span className="font-semibold">RTK PRECISION</span>
                          <span className="text-brand-amber">1.2 CM</span>
                        </div>
                        <div className="flex justify-between border-b border-white/20 pb-3">
                          <span className="font-semibold">FLIGHT ALTITUDE</span>
                          <span className="text-brand-amber">120 M</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold">BATTERY LEVEL</span>
                          <span className="text-brand-amber">98%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative bg-white dark:bg-black">
          <div className="container mx-auto px-6 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-navy-900 dark:text-white">Teknolojimizle Tanışın</h2>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-12">
                Projelerinizi bir üst seviyeye taşımak için en son teknolojiyi kullanıyoruz.
                Detaylı bilgi ve demo sunumu için bize ulaşın.
              </p>
              
              <a 
                href="https://wa.me/905347706075?text=Merhaba, İHA projeleriniz hakkında görüşmek istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#25D366] text-white rounded-2xl font-bold text-lg hover:bg-[#20bd5a] transition-all shadow-xl shadow-[#25D366]/20 hover:shadow-[#25D366]/40 hover:-translate-y-1"
              >
                <MessageCircle size={24} />
                İHA Projeleri İçin Görüşelim
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
