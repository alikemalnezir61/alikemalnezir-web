export type Certification = {
  name: string;
  issuer: string;
  date: string;
  description?: string;
  credentialId?: string;
  featured: boolean;
};

export const certifications: Certification[] = [
  {
    name: "Project Management Professional (PMP)®",
    issuer: "Project Management Institute (PMI)",
    date: "Mart 2026",
    description:
      "Proje başlatma, planlama, yürütme, izleme-kontrol ve kapanış fazlarında uluslararası standartlarda belgelenmiş yetkinlik. Agile, Hybrid ve Waterfall metodolojilerinde etkin uygulama.",
    credentialId: "4321427",
    featured: true,
  },
  {
    name: "PMP Preparation Course (35 Saat)",
    issuer: "İstanbul Kurumsal Gelişim",
    date: "Ağustos 2025",
    description:
      "Agile ve Scrum metodolojileri, süreç planlama, risk ve kaynak yönetimi, paydaş analizi, RACI matrisi ve zaman/maliyet/kalite dengesi üzerine yoğun eğitim.",
    featured: true,
  },
  {
    name: "Proje Yöneticileri için Mentorlük Rehberi",
    issuer: "PMI Türkiye Akademi",
    date: "Mayıs 2026",
    description: "Proje yöneticileri için mentorluk yaklaşımları üzerine online eğitim.",
    featured: true,
  },
  {
    name: "Proje Yönetiminde Zihin Haritaları",
    issuer: "PMI Türkiye Akademi",
    date: "Nisan 2026",
    description: "Proje yönetiminde zihin haritalama teknikleri üzerine yüz yüze eğitim.",
    featured: true,
  },
  {
    name: "İş Analizi Nedir?",
    issuer: "LinkedIn Learning",
    date: "Ocak 2026",
    description: "İş analizi temel kavramları ve uygulama alanları.",
    featured: true,
  },
  {
    name: "Sıfırdan İleri Seviye Oracle-SQL",
    issuer: "BTK Akademi",
    date: "2022",
    description:
      "Veri modelleme, normalizasyon, sorgulama ve ilişkisel veritabanı nesneleri oluşturma üzerine kapsamlı eğitim.",
    featured: true,
  },
];

export const additionalTrainings: string[] = [
  "ISO 9001:2008 Kalite Yönetim Sistemi",
  "ISO 9001:2008 İç Tetkikçi (İç Denetçi)",
  "Stratejik Yönetim",
  "OHSAS 18001 İş Sağlığı ve Güvenliği",
  "ISO 22000 Gıda Güvenliği Yönetim Sistemi",
  "ISO 14001 Çevre Yönetim Sistemi",
  "Entegre Yönetim Sistemi",
  "Liderlik / İnteraktif Eğitim",
  "Satış, Pazarlama ve İkna Teknikleri",
  "Takım Çalışması ve Yönetim Becerileri",
  "ISO 9001:2015 Revizyon",
  "Medya Eğitmenliği Eğitimi (TÜGVA Medya İletişim Okulu)",
];
