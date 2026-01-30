import { notFound } from "next/navigation";
import { FileText, CheckCircle2, ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

// Service Data
const servicesData: Record<string, {
  title: string;
  description: string;
  longDescription: string;
  documents: string[];
  steps: string[];
  seoKeywords: string;
}> = {
  "aplikasyon-sinir-tespiti": {
    title: "Aplikasyon (Sınır Tespiti)",
    description: "Parsel sınırlarınızın zeminde hassas ölçümlerle tespit edilmesi.",
    longDescription: "Aplikasyon, taşınmazın kadastro paftasındaki sınırlarının zeminde işaretlenmesi işlemidir. İnşaat öncesi ruhsat aşamasında, sınır anlaşmazlıklarında veya tel çit/duvar çekimi öncesinde yapılması yasal bir zorunluluktur. Lisanslı Harita Kadastro Mühendislik Bürosu (LİHKAB) olarak, en son teknoloji GNSS ve Total Station cihazlarımızla parsel köşe noktalarınızı santimetre hassasiyetinde tespit ediyoruz.",
    documents: ["Tapu Senedi veya Kaydı", "Malik Kimliği veya Vekaletname", "Numarataj Belgesi (Gerekirse)"],
    steps: ["Başvuru ve Evrak Kontrolü", "Randevu Oluşturulması", "Zemin Ölçümü ve Sınır Tespiti", "Aplikasyon Krokisinin Hazırlanması", "Teslim ve Onay"],
    seoKeywords: "Şanlıurfa aplikasyon, sınır tespiti, parsel köşe belirleme, LİHKAB aplikasyon",
  },
  "cins-degisikligi": {
    title: "Cins Değişikliği",
    description: "Taşınmazın niteliğinin tapu kaydında güncellenmesi işlemi.",
    longDescription: "Cins değişikliği, tapu kütüğünde kayıtlı bir taşınmazın niteliğinin değiştirilerek, yeni durumunun tescil edilmesidir. Örneğin; 'Arsa' vasfındaki bir taşınmazın üzerine bina yapıldıktan sonra 'Kargir Ev' veya 'Apartman' olarak tescil edilmesi işlemidir. Yapı Kullanma İzin Belgesi (İskan) alındıktan sonra yapılması gereken zorunlu bir işlemdir.",
    documents: ["Yapı Kullanma İzin Belgesi (İskan)", "Tapu Senedi", "Vaziyet Planı", "Malik Kimliği"],
    steps: ["Başvuru ve Ön İnceleme", "Kadastro Kontrolü", "Zemin Ölçümü ve Tespiti", "Beyanname Hazırlanması", "Tapu Müdürlüğü Tescili"],
    seoKeywords: "Haliliye cins değişikliği, tapu cins tashihi, iskan sonrası tapu işlemleri",
  },
  "irtifak-hakki-tesisi": {
    title: "İrtifak Hakkı Tesisi",
    description: "Taşınmaz üzerinde kullanım haklarının (geçit, kaynak vb.) tesisi.",
    longDescription: "İrtifak hakkı, bir taşınmaz üzerinde başkasına ait bir kullanım hakkı kurulması işlemidir. Enerji nakil hatları, geçit hakkı (yol hakkı), kaynak hakkı gibi durumlar için teknik haritaların hazırlanması ve tescile esas dosyaların oluşturulması hizmetini kapsar.",
    documents: ["Tapu Senetleri (İlgili Parseller)", "Belediye Encümen Kararı (Gerekirse)", "Kimlik Belgeleri"],
    steps: ["Talep ve Etüt Çalışması", "Zemin Ölçümleri", "İrtifak Projesinin Hazırlanması", "Kontrol ve Onay Süreci"],
    seoKeywords: "Şanlıurfa irtifak hakkı, geçit hakkı haritası, enerji nakil hattı kamulaştırma",
  },
  "birlestirme-tevhid": {
    title: "Birleştirme (Tevhid)",
    description: "Birden fazla parselin teknik ve hukuki olarak birleştirilmesi.",
    longDescription: "Tevhid (birleştirme), birbirine bitişik birden fazla parselin, imar mevzuatına uygun olarak tek bir parsel haline getirilmesi işlemidir. Daha verimli bir yapılaşma alanı elde etmek veya imar şartlarını sağlamak amacıyla yapılır.",
    documents: ["Tapu Senetleri", "İmar Durum Belgesi", "Belediye Encümen Kararı", "Kimlik Belgeleri"],
    steps: ["İmar Durumu Analizi", "Tevhid Folyesinin Hazırlanması", "Belediye Onayı", "Kadastro Kontrolü", "Tapu Tescili"],
    seoKeywords: "Şanlıurfa parsel birleştirme, tevhid işlemi, ifraz tevhid haritası",
  },
  "yer-gosterme": {
    title: "Yer Gösterme",
    description: "Parselin konumunun kadastro paftasına göre zeminde gösterilmesi.",
    longDescription: "Satın almayı düşündüğünüz veya yerini tam olarak bilmediğiniz bir parselin, lisanslı harita mühendisleri tarafından kadastro verilerine dayalı olarak zeminde size gösterilmesi işlemidir. Bu işlem sonucunda size 'Yer Gösterme Belgesi' verilir.",
    documents: ["Tapu Senedi", "Kimlik Belgesi"],
    steps: ["Başvuru", "Kadastro Verilerinin Temini", "Araziye İntikal", "Sınırların Gösterilmesi", "Belge Düzenlenmesi"],
    seoKeywords: "Şanlıurfa yer gösterme, parsel sorgulama, arazi tespiti",
  },
  "halihazir-harita-uretimi": {
    title: "Halihazır Harita Üretimi",
    description: "Arazi ve yapıların güncel durumunun haritalanması.",
    longDescription: "Halihazır harita; yeryüzündeki doğal ve yapay tesislerin (bina, yol, elektrik direği, ağaç vb.) konumlarının ve yüksekliklerinin ölçülerek belirli bir ölçekte çizilmesidir. İmar planı çalışmaları, mimari projeler ve altyapı projeleri için temel altlıktır.",
    documents: ["Tapu Kaydı", "Koordinatlı Çap (Gerekirse)"],
    steps: ["Arazi Keşfi", "GNSS ve Total Station Ölçümleri", "Ofis Çizim İşlemleri", "Kurum Onayı"],
    seoKeywords: "Şanlıurfa halihazır harita, topografik harita, şeritvari harita",
  },
  "imar-uygulamalari": {
    title: "İmar Uygulamaları (18. Madde)",
    description: "Ham arazilerin imar planına uygun arsalara dönüştürülmesi.",
    longDescription: "3194 Sayılı İmar Kanunu'nun 18. maddesi kapsamında yapılan bu uygulama ile ham araziler (kadastro parselleri), imar planına uygun, altyapısı (yol, park, okul vb.) ayrılmış düzenli imar parsellerine dönüştürülür. Belediyeler ve özel mülkiyet sahipleri için teknik danışmanlık ve uygulama hizmeti sunuyoruz.",
    documents: ["Tapu Kayıtları", "Onaylı İmar Planı", "Encümen Kararı"],
    steps: ["Düzenleme Sınırının Tespiti", "Mülkiyet Analizi", "DOP Hesabı ve Dağıtım", "Parselasyon Planı", "Tescil"],
    seoKeywords: "18. madde uygulaması şanlıurfa, parselasyon, şuyulandırma",
  },
  "plankote": {
    title: "Plankote Haritası",
    description: "Mimari projeler için arazinin eğim ve kot detaylarını içeren harita.",
    longDescription: "Plankote; arazinin topografik yapısını, eğimini ve mevcut kotlarını gösteren detaylı haritadır. Mimari projelerin zemine oturtulması, hafriyat hesabı ve peyzaj çalışmaları için mimarlar ve mühendisler tarafından talep edilen kritik bir altlıktır.",
    documents: ["Tapu Senedi", "İmar Durumu"],
    steps: ["Saha Kot Alımı", "Detay Ölçümleri", "Ofis Çizimi ve Kotlandırma", "Raporlama"],
    seoKeywords: "Plankote ölçümü, mimari proje altlığı, kotlu kroki",
  },
  "santiye-olcumleri-kubaj": {
    title: "Şantiye Ölçümleri & Kübaj",
    description: "İnşaat ve hafriyat projelerinde hassas ölçüm ve hacim hesabı.",
    longDescription: "Şantiyelerde yapı aplikasyonu, kolon akslarının işaretlenmesi, temel kotlarının verilmesi ve hafriyat (kazı/dolgu) miktarlarının (kübaj) hassas bir şekilde hesaplanması hizmetlerini kapsar. Projelerin doğruluğu ve maliyet kontrolü için hayati öneme sahiptir.",
    documents: ["Mimari ve Statik Projeler", "Saha Teslim Tutanağı"],
    steps: ["Proje Sayısallaştırma", "Saha Aplikasyonu", "Periyodik Ölçümler", "Hacim (Kübaj) Raporu"],
    seoKeywords: "Hafriyat hesabı, kübaj hesaplama, şantiye şefliği ölçümleri",
  },
  "drone-ile-haritalama": {
    title: "Drone (İHA) ile Haritalama",
    description: "Fotogrametrik yöntemlerle havadan yüksek çözünürlüklü haritalama.",
    longDescription: "İnsansız Hava Araçları (İHA/Drone) kullanılarak geniş alanların hızlı, ekonomik ve yüksek doğrulukla haritalanması işlemidir. Ortofoto haritalar, 3B arazi modelleri, nokta bulutu verileri ve tarımsal analizler için kullanılır.",
    documents: ["Çalışma Alanı Sınırları"],
    steps: ["Uçuş Planlama", "Yer Kontrol Noktası Tesisi", "Otonom Uçuş ve Görüntü Alımı", "Görüntü İşleme ve Modelleme"],
    seoKeywords: "Şanlıurfa drone haritalama, ortofoto, fotogrametri, 3d arazi modelleme",
  }
};

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug];
  if (!service) return { title: "Hizmet Bulunamadı" };
  
  return {
    title: `${service.title} | Çakırbey Harita LİHKAB`,
    description: `${service.description} ${service.seoKeywords}`,
  };
}

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <main className="pt-24 pb-20">
        {/* Page Header */}
        <div className="bg-gradient-to-b from-slate-50 to-white dark:from-zinc-900 dark:to-black py-16 mb-12 relative overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
          {/* Background Grid - Lower opacity for better readability */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-50"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <Link 
              href="/#services" 
              className="group inline-flex items-center text-sm font-medium text-zinc-500 hover:text-navy-900 dark:text-zinc-400 dark:hover:text-white mb-8 transition-colors"
            >
              <span className="p-1 rounded-full bg-zinc-100 dark:bg-zinc-800 mr-2 group-hover:-translate-x-1 transition-transform">
                <ArrowRight className="rotate-180" size={14} />
              </span>
              Hizmetlere Dön
            </Link>
            
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                  <span className="text-sm font-semibold text-amber-600 dark:text-amber-500 uppercase tracking-wider">Hizmet Detayı</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-6 text-navy-900 dark:text-white leading-tight">
                  {service.title}
                </h1>
                <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              {/* Decorative Badge/Icon Area (Optional, based on user preference for 'badge') */}
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
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description Section */}
              <section className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800">
                <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-6 flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-amber-500 rounded-full"></span>
                  Hizmet Detayı
                </h2>
                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-lg">
                  {service.longDescription}
                </p>
              </section>

              {/* Steps Section */}
              <section>
                <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-6">İşlem Süreci</h3>
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

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Required Documents */}
              <div className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/30">
                <h3 className="text-lg font-bold text-navy-900 dark:text-white mb-4 flex items-center gap-2">
                  <FileText className="text-amber-600 dark:text-amber-500" />
                  Gerekli Belgeler
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

              {/* Quick Contact - Sticky */}
              <div className="sticky top-24">
                <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-zinc-200/50 dark:shadow-black/50 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl -mr-16 -mt-16 transition-transform group-hover:scale-110 duration-700"></div>
                  
                  <h3 className="text-xl font-bold mb-4 text-navy-900 dark:text-white">Hemen Başlayın</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-8 text-sm leading-relaxed">
                    Projeniz için hızlı teklif alın veya bize WhatsApp üzerinden danışın.
                  </p>
                  
                  <div className="space-y-4">
                    <a href="/#iletisim" className="block w-full py-4 bg-amber-500 text-white text-center rounded-xl font-bold hover:bg-amber-600 transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 hover:-translate-y-0.5">
                      Teklif İste
                    </a>

                    <a 
                      href={`https://wa.me/905347706075?text=Merhaba, ${service.title} hakkında bilgi almak istiyorum.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-4 bg-[#25D366] text-white text-center rounded-xl font-bold hover:bg-[#20bd5a] transition-all shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/30 hover:-translate-y-0.5"
                    >
                      <MessageCircle size={20} />
                      WhatsApp ile Bilgi Al
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
