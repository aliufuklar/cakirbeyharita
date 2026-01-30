import type { SiteLocale } from "@/lib/site";

export type ServiceDetail = {
  title: string;
  description: string;
  longDescription: string;
  documents: string[];
  steps: string[];
  seoKeywords: string;
};

const tr: Record<string, ServiceDetail> = {
  "aplikasyon-sinir-tespiti": {
    title: "Aplikasyon (Sınır Tespiti)",
    description: "Parsel sınırlarınızın zeminde hassas ölçümlerle tespit edilmesi.",
    longDescription:
      "Aplikasyon, taşınmazın kadastro paftasındaki sınırlarının zeminde işaretlenmesi işlemidir. İnşaat öncesi ruhsat aşamasında, sınır anlaşmazlıklarında veya tel çit/duvar çekimi öncesinde yapılması yasal bir zorunluluktur. Lisanslı Harita Kadastro Mühendislik Bürosu (LİHKAB) olarak, en son teknoloji GNSS ve Total Station cihazlarımızla parsel köşe noktalarınızı santimetre hassasiyetinde tespit ediyoruz.",
    documents: [
      "Tapu Senedi veya Kaydı",
      "Malik Kimliği veya Vekaletname",
      "Numarataj Belgesi (Gerekirse)"
    ],
    steps: [
      "Başvuru ve Evrak Kontrolü",
      "Randevu Oluşturulması",
      "Zemin Ölçümü ve Sınır Tespiti",
      "Aplikasyon Krokisinin Hazırlanması",
      "Teslim ve Onay"
    ],
    seoKeywords: "Şanlıurfa aplikasyon, sınır tespiti, parsel köşe belirleme, LİHKAB aplikasyon"
  },
  "cins-degisikligi": {
    title: "Cins Değişikliği",
    description: "Taşınmazın niteliğinin tapu kaydında güncellenmesi işlemi.",
    longDescription:
      "Cins değişikliği, tapu kütüğünde kayıtlı bir taşınmazın niteliğinin değiştirilerek, yeni durumunun tescil edilmesidir. Örneğin; 'Arsa' vasfındaki bir taşınmazın üzerine bina yapıldıktan sonra 'Kargir Ev' veya 'Apartman' olarak tescil edilmesi işlemidir. Yapı Kullanma İzin Belgesi (İskan) alındıktan sonra yapılması gereken zorunlu bir işlemdir.",
    documents: ["Yapı Kullanma İzin Belgesi (İskan)", "Tapu Senedi", "Vaziyet Planı", "Malik Kimliği"],
    steps: ["Başvuru ve Ön İnceleme", "Kadastro Kontrolü", "Zemin Ölçümü ve Tespiti", "Beyanname Hazırlanması", "Tapu Müdürlüğü Tescili"],
    seoKeywords: "Haliliye cins değişikliği, tapu cins tashihi, iskan sonrası tapu işlemleri"
  },
  "irtifak-hakki-tesisi": {
    title: "İrtifak Hakkı Tesisi",
    description: "Taşınmaz üzerinde kullanım haklarının (geçit, kaynak vb.) tesisi.",
    longDescription:
      "İrtifak hakkı, bir taşınmaz üzerinde başkasına ait bir kullanım hakkı kurulması işlemidir. Enerji nakil hatları, geçit hakkı (yol hakkı), kaynak hakkı gibi durumlar için teknik haritaların hazırlanması ve tescile esas dosyaların oluşturulması hizmetini kapsar.",
    documents: ["Tapu Senetleri (İlgili Parseller)", "Belediye Encümen Kararı (Gerekirse)", "Kimlik Belgeleri"],
    steps: ["Talep ve Etüt Çalışması", "Zemin Ölçümleri", "İrtifak Projesinin Hazırlanması", "Kontrol ve Onay Süreci"],
    seoKeywords: "Şanlıurfa irtifak hakkı, geçit hakkı haritası, enerji nakil hattı kamulaştırma"
  },
  "birlestirme-tevhid": {
    title: "Birleştirme (Tevhid)",
    description: "Birden fazla parselin teknik ve hukuki olarak birleştirilmesi.",
    longDescription:
      "Tevhid (birleştirme), birbirine bitişik birden fazla parselin, imar mevzuatına uygun olarak tek bir parsel haline getirilmesi işlemidir. Daha verimli bir yapılaşma alanı elde etmek veya imar şartlarını sağlamak amacıyla yapılır.",
    documents: ["Tapu Senetleri", "İmar Durum Belgesi", "Belediye Encümen Kararı", "Kimlik Belgeleri"],
    steps: ["İmar Durumu Analizi", "Tevhid Folyesinin Hazırlanması", "Belediye Onayı", "Kadastro Kontrolü", "Tapu Tescili"],
    seoKeywords: "Şanlıurfa parsel birleştirme, tevhid işlemi, ifraz tevhid haritası"
  },
  "yer-gosterme": {
    title: "Yer Gösterme",
    description: "Parselin konumunun kadastro paftasına göre zeminde gösterilmesi.",
    longDescription:
      "Satın almayı düşündüğünüz veya yerini tam olarak bilmediğiniz bir parselin, lisanslı harita mühendisleri tarafından kadastro verilerine dayalı olarak zeminde size gösterilmesi işlemidir. Bu işlem sonucunda size 'Yer Gösterme Belgesi' verilir.",
    documents: ["Tapu Senedi", "Kimlik Belgesi"],
    steps: ["Başvuru", "Kadastro Verilerinin Temini", "Araziye İntikal", "Sınırların Gösterilmesi", "Belge Düzenlenmesi"],
    seoKeywords: "Şanlıurfa yer gösterme, parsel sorgulama, arazi tespiti"
  },
  "halihazir-harita-uretimi": {
    title: "Halihazır Harita Üretimi",
    description: "Arazi ve yapıların güncel durumunun haritalanması.",
    longDescription:
      "Halihazır harita; yeryüzündeki doğal ve yapay tesislerin (bina, yol, elektrik direği, ağaç vb.) konumlarının ve yüksekliklerinin ölçülerek belirli bir ölçekte çizilmesidir. İmar planı çalışmaları, mimari projeler ve altyapı projeleri için temel altlıktır.",
    documents: ["Tapu Kaydı", "Koordinatlı Çap (Gerekirse)"],
    steps: ["Arazi Keşfi", "GNSS ve Total Station Ölçümleri", "Ofis Çizim İşlemleri", "Kurum Onayı"],
    seoKeywords: "Şanlıurfa halihazır harita, topografik harita, şeritvari harita"
  },
  "imar-uygulamalari": {
    title: "İmar Uygulamaları (18. Madde)",
    description: "Ham arazilerin imar planına uygun arsalara dönüştürülmesi.",
    longDescription:
      "3194 Sayılı İmar Kanunu'nun 18. maddesi kapsamında yapılan bu uygulama ile ham araziler (kadastro parselleri), imar planına uygun, altyapısı (yol, park, okul vb.) ayrılmış düzenli imar parsellerine dönüştürülür. Belediyeler ve özel mülkiyet sahipleri için teknik danışmanlık ve uygulama hizmeti sunuyoruz.",
    documents: ["Tapu Kayıtları", "Onaylı İmar Planı", "Encümen Kararı"],
    steps: ["Düzenleme Sınırının Tespiti", "Mülkiyet Analizi", "DOP Hesabı ve Dağıtım", "Parselasyon Planı", "Tescil"],
    seoKeywords: "18. madde uygulaması şanlıurfa, parselasyon, şuyulandırma"
  },
  plankote: {
    title: "Plankote Haritası",
    description: "Mimari projeler için arazinin eğim ve kot detaylarını içeren harita.",
    longDescription:
      "Plankote; arazinin topografik yapısını, eğimini ve mevcut kotlarını gösteren detaylı haritadır. Mimari projelerin zemine oturtulması, hafriyat hesabı ve peyzaj çalışmaları için mimarlar ve mühendisler tarafından talep edilen kritik bir altlıktır.",
    documents: ["Tapu Senedi", "İmar Durumu"],
    steps: ["Saha Kot Alımı", "Detay Ölçümleri", "Ofis Çizimi ve Kotlandırma", "Raporlama"],
    seoKeywords: "Plankote ölçümü, mimari proje altlığı, kotlu kroki"
  },
  "santiye-olcumleri-kubaj": {
    title: "Şantiye Ölçümleri & Kübaj",
    description: "İnşaat ve hafriyat projelerinde hassas ölçüm ve hacim hesabı.",
    longDescription:
      "Şantiyelerde yapı aplikasyonu, kolon akslarının işaretlenmesi, temel kotlarının verilmesi ve hafriyat (kazı/dolgu) miktarlarının (kübaj) hassas bir şekilde hesaplanması hizmetlerini kapsar. Projelerin doğruluğu ve maliyet kontrolü için hayati öneme sahiptir.",
    documents: ["Mimari ve Statik Projeler", "Saha Teslim Tutanağı"],
    steps: ["Proje Sayısallaştırma", "Saha Aplikasyonu", "Periyodik Ölçümler", "Hacim (Kübaj) Raporu"],
    seoKeywords: "Hafriyat hesabı, kübaj hesaplama, şantiye şefliği ölçümleri"
  },
  "drone-ile-haritalama": {
    title: "Drone (İHA) ile Haritalama",
    description: "Fotogrametrik yöntemlerle havadan yüksek çözünürlüklü haritalama.",
    longDescription:
      "İnsansız Hava Araçları (İHA/Drone) kullanılarak geniş alanların hızlı, ekonomik ve yüksek doğrulukla haritalanması işlemidir. Ortofoto haritalar, 3B arazi modelleri, nokta bulutu verileri ve tarımsal analizler için kullanılır.",
    documents: ["Çalışma Alanı Sınırları"],
    steps: ["Uçuş Planlama", "Yer Kontrol Noktası Tesisi", "Otonom Uçuş ve Görüntü Alımı", "Görüntü İşleme ve Modelleme"],
    seoKeywords: "Şanlıurfa drone haritalama, ortofoto, fotogrametri, 3d arazi modelleme"
  }
};

const en: Record<string, ServiceDetail> = {
  "aplikasyon-sinir-tespiti": {
    title: "Stakeout (Boundary Determination)",
    description: "Accurate determination and marking of parcel boundaries on site.",
    longDescription:
      "Stakeout is the process of marking cadastral parcel boundaries on the ground based on official data. It is commonly required before construction, for boundary disputes, or before building fences/walls. As a licensed survey office (LİHKAB), we determine corner points with centimeter-level accuracy using GNSS and Total Station equipment.",
    documents: ["Title deed record", "Owner ID or power of attorney", "Address numbering document (if required)"],
    steps: ["Application & document check", "Scheduling", "Field survey & boundary determination", "Preparation of stakeout sketch", "Delivery & approval"],
    seoKeywords: "Şanlıurfa stakeout, boundary determination, parcel corner points, licensed survey office"
  },
  "cins-degisikligi": {
    title: "Land Use Change Registration",
    description: "Updating your property classification in the title deed records.",
    longDescription:
      "Land use change registration updates the recorded nature of a property in the land registry. For example, after construction, a parcel registered as 'land' may be updated as a building or apartment. This is typically required after obtaining an occupancy permit.",
    documents: ["Occupancy permit", "Title deed", "Site plan", "Owner ID"],
    steps: ["Application & initial review", "Cadastral control", "Field verification survey", "Preparation of declaration file", "Registration at land registry"],
    seoKeywords: "land use change, title deed update, occupancy permit registration, Şanlıurfa"
  },
  "irtifak-hakki-tesisi": {
    title: "Easement Right Establishment",
    description: "Establishing usage rights on a property (right of way, utilities, etc.).",
    longDescription:
      "An easement right is a legal usage right established over another property. This service covers technical mapping and preparation of registration-ready documentation for cases such as utility corridors, right of way, or water source rights.",
    documents: ["Relevant title deeds", "Municipal council decision (if required)", "ID documents"],
    steps: ["Request & feasibility study", "Field measurements", "Preparation of easement project", "Control & approval"],
    seoKeywords: "easement right, right of way map, utility corridor, Şanlıurfa"
  },
  "birlestirme-tevhid": {
    title: "Parcel Consolidation (Tevhid)",
    description: "Technical and legal consolidation of multiple parcels into one.",
    longDescription:
      "Parcel consolidation (tevhid) merges adjacent parcels into a single parcel in compliance with zoning regulations. It is often used to achieve better buildable area efficiency or satisfy zoning requirements.",
    documents: ["Title deeds", "Zoning status document", "Municipal council decision", "ID documents"],
    steps: ["Zoning analysis", "Preparation of consolidation folio", "Municipal approval", "Cadastral control", "Registration"],
    seoKeywords: "parcel consolidation, tevhid process, zoning compliance, Şanlıurfa"
  },
  "yer-gosterme": {
    title: "On-Site Parcel Location",
    description: "Showing the parcel location on the ground based on cadastral maps.",
    longDescription:
      "This service helps you locate a parcel you intend to buy or whose exact position is unclear. Licensed surveyors locate and show boundaries on site based on official cadastral data and provide a location report.",
    documents: ["Title deed", "ID document"],
    steps: ["Application", "Obtaining cadastral data", "Field visit", "Showing boundaries", "Issuing report"],
    seoKeywords: "parcel location, cadastral location, land determination, Şanlıurfa"
  },
  "halihazir-harita-uretimi": {
    title: "Base Map / As-Built Map Production",
    description: "Mapping current terrain and structures into up-to-date maps.",
    longDescription:
      "A base map captures the locations and elevations of natural and man-made features such as buildings, roads, poles and trees. It is a critical base layer for zoning studies, architectural design and infrastructure projects.",
    documents: ["Title deed record", "Coordinate sketch (if required)"],
    steps: ["Site reconnaissance", "GNSS & Total Station surveys", "Office drafting", "Institutional approval"],
    seoKeywords: "base map, topographic map, as-built map, Şanlıurfa"
  },
  "imar-uygulamalari": {
    title: "Zoning Applications (Article 18)",
    description: "Transforming raw cadastral parcels into planned zoning parcels.",
    longDescription:
      "Under Article 18 of the Zoning Law, cadastral parcels are reorganized into planned zoning parcels with allocated infrastructure areas (roads, parks, schools, etc.). We provide technical consultancy and implementation services for municipalities and private owners.",
    documents: ["Title deed records", "Approved zoning plan", "Council decision"],
    steps: ["Determining regulation boundary", "Ownership analysis", "DOP calculation & distribution", "Subdivision/parcelation plan", "Registration"],
    seoKeywords: "article 18 zoning, parcelation, land readjustment, Şanlıurfa"
  },
  plankote: {
    title: "Topographic Survey (Plankote)",
    description: "Detailed elevation and slope survey for architectural projects.",
    longDescription:
      "A plankote map shows the detailed topography of a site including elevations and slopes. It is essential for site planning, excavation calculations and landscape design, frequently requested by architects and engineers.",
    documents: ["Title deed", "Zoning status"],
    steps: ["Field leveling", "Detail measurements", "Office drafting & contouring", "Reporting"],
    seoKeywords: "topographic survey, contour map, elevations, plankote"
  },
  "santiye-olcumleri-kubaj": {
    title: "Construction Surveys & Volume Calculations",
    description: "Accurate construction stakeout and excavation/fill volume calculations.",
    longDescription:
      "We provide construction stakeout, axis marking, foundation elevation setting and precise excavation/fill volume (cubage) calculations. These measurements are critical for project accuracy and cost control.",
    documents: ["Architectural and structural plans", "Site delivery protocol"],
    steps: ["Digitizing project plans", "Field stakeout", "Periodic control surveys", "Volume report"],
    seoKeywords: "cubage calculation, construction survey, excavation fill volumes, Şanlıurfa"
  },
  "drone-ile-haritalama": {
    title: "Drone (UAV) Mapping",
    description: "High-resolution aerial mapping with photogrammetric methods.",
    longDescription:
      "Using UAVs (drones), large areas can be mapped quickly and economically with high accuracy. Outputs include orthophotos, 3D terrain models, point clouds and analytical layers for agriculture and engineering.",
    documents: ["Work area boundary"],
    steps: ["Flight planning", "Ground control point setup", "Autonomous flight & image capture", "Processing & modeling"],
    seoKeywords: "UAV mapping, drone mapping, orthophoto, photogrammetry, 3D terrain model, Şanlıurfa"
  }
};

export const SERVICE_DETAILS: Record<SiteLocale, Record<string, ServiceDetail>> = { tr, en };

export function getServiceDetail(locale: SiteLocale, slug: string) {
  return SERVICE_DETAILS[locale][slug] ?? SERVICE_DETAILS.tr[slug];
}

