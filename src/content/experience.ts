export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  location: string;
  sector: string;
  summary: string;
  highlights: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Proje Yöneticisi",
    company: "BDH Bilişim Destek Hizmetleri",
    period: "Ekim 2023 - Halen",
    location: "İstanbul",
    sector: "Kritik Altyapı / Sağlık Bilişimi",
    summary:
      "Şehir hastaneleri kapsamındaki büyük ölçekli ICT projelerinin uçtan uca yönetimi.",
    highlights: [
      "Birden fazla şehir hastanesinde ICT alanında proje yöneticiliği",
      "Agile Scrum yöntemleriyle müşteri taleplerinin değerlendirilmesi ve uygulanması",
      "Proje maliyet çalışmaları, piyasa araştırmaları ve teknik/idari şartname süreçleri",
      "ICT bütçeleme süreçlerinin yürütülmesi ve finansal sürdürülebilirlik",
    ],
  },
  {
    role: "Bilgi İşlem Müdürü",
    company: "Rönesans Holding",
    period: "Mayıs 2023 - Ekim 2023",
    location: "İstanbul",
    sector: "Sağlık Bilişimi / Kritik Altyapı",
    summary:
      "Büyük ölçekli bir şehir hastanesinde bilgi işlem biriminin uçtan uca yönetimi.",
    highlights: [
      "350 kişilik BT ve destek ekibinin yönetimi",
      "Alt yüklenici kontrolü ve aylık icmal takip süreçleri",
      "HBYS, donanım ve veri merkezi altyapısının bakım/yönetimi",
      "Satın alma, teknik şartname ve HIMSS akreditasyon çalışmaları",
    ],
  },
  {
    role: "Bilgi Sistemleri Yöneticisi",
    company: "Liv Hospital",
    period: "Ekim 2022 - Mayıs 2023",
    location: "İstanbul",
    sector: "Sağlık Bilişimi",
    summary:
      "Hastane bilgi yönetim sistemi ve BT altyapısının operasyonel yönetimi.",
    highlights: [
      "HBYS kullanımı, eğitim, yönetim ve yedekleme süreçlerinin yürütülmesi",
      "Ağ, güvenlik duvarı, sunucu ve santral altyapısının yönetimi",
      "Satın alma, teknik şartname ve proje yönetimi süreçleri",
      "HIMSS Stage 6 akreditasyon çalışmalarına aktif katkı",
    ],
  },
  {
    role: "Bilgi Sistemleri Sorumlusu",
    company: "Kızılay Sağlık A.Ş",
    period: "Ağustos 2021 - Eylül 2022",
    location: "İstanbul",
    sector: "Sağlık Bilişimi",
    summary:
      "Çoklu merkez yapısında HBYS geçiş süreci ve BT koordinasyonu.",
    highlights: [
      "5 merkezde bulunan BT ekibinin koordinasyonu ve yönetimi",
      "SAP MM, FI, CRM, PM modülleri ile HBYS entegrasyon süreçleri",
      "Ağ altyapısı, sunucu ve dizin hizmetleri yönetimi",
    ],
  },
  {
    role: "Bilgi Sistemleri Uzmanı → Kıdemli Bilgi İşlem Sorumlusu",
    company: "Türk Kızılayı / Kızılay Sağlık A.Ş",
    period: "Ekim 2014 - Ağustos 2021",
    location: "İstanbul",
    sector: "Sağlık Bilişimi",
    summary:
      "Yedi yıllık süreçte bilgi sistemleri uzmanlığından kıdemli sorumluluğa uzanan kariyer basamakları.",
    highlights: [
      "Bilgi sistemleri altyapısının kurulum ve işletim süreçleri",
      "Kalite yönetimi ve idari süreçlerde ek sorumluluklar üstlenme",
      "Kurumsal projelerde teknik ve operasyonel destek",
    ],
  },
];
