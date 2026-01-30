"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="iletisim" className="py-24 relative bg-zinc-50 dark:bg-black/80">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mb-4"
          >
            İletişime Geçin
          </motion.h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Projeleriniz için profesyonel çözümler ve teknik danışmanlık alın.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-lg border border-zinc-100 dark:border-zinc-800"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-navy-900 dark:text-zinc-300">Ad Soyad</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all duration-300"
                    placeholder="Adınız Soyadınız"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-navy-900 dark:text-zinc-300">Telefon</label>
                  <input 
                    type="tel" 
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all duration-300"
                    placeholder="05XX XXX XX XX"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-navy-900 dark:text-zinc-300">E-posta</label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all duration-300"
                  placeholder="ornek@email.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-navy-900 dark:text-zinc-300">Mesajınız</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all duration-300 resize-none"
                  placeholder="Projeniz veya talebiniz hakkında bilgi verin..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.01, boxShadow: "0 0 22px rgba(158, 50, 56, 0.32)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-amber-500 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-amber-600 transition-colors shadow-md shadow-amber-500/20"
              >
                <span>Gönder</span>
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>

          {/* Right Side: Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="text-lg font-semibold text-navy-900 dark:text-white">Bize Ulaşın</div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-100 dark:bg-amber-900/20 rounded-lg text-amber-600 dark:text-amber-500 mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 dark:text-white mb-1">Adres</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Yenişehir Mah. Haliliye / Şanlıurfa
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-navy-100 dark:bg-navy-900/30 rounded-lg text-navy-600 dark:text-navy-400 mt-1">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 dark:text-white mb-1">Telefon</h3>
                  <div className="space-y-1 text-zinc-600 dark:text-zinc-400">
                    <a
                      className="block font-medium text-navy-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
                      href="tel:+904147706075"
                    >
                      0 (414) 770 60 75
                    </a>
                    <a
                      className="inline-flex items-center gap-2 font-medium text-navy-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
                      href="tel:+905347706075"
                    >
                      0 (534) 770 60 75
                      <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-semibold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                        WhatsApp
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-lg text-zinc-600 dark:text-zinc-400 mt-1">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 dark:text-white mb-1">E-posta</h3>
                  <div className="space-y-1 text-zinc-600 dark:text-zinc-400">
                    <a
                      href="mailto:lihkab775@gmail.com"
                      className="block font-medium text-navy-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
                    >
                      LİHKAB: lihkab775@gmail.com
                    </a>
                    <a
                      href="mailto:cakirbeyharita@gmail.com"
                      className="block font-medium text-navy-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
                    >
                      Haritalama: cakirbeyharita@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Dark Mode Custom Map */}
            <div className="w-full h-64 rounded-2xl overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800 relative">
              <iframe 
                src="https://www.google.com/maps?q=Yeni%C5%9Fehir%20Mahallesi%20Haliliye%20%C5%9Eanl%C4%B1urfa&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: "grayscale(100%) contrast(1.2) opacity(0.85)" }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="hover:filter-none transition-all duration-500"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
