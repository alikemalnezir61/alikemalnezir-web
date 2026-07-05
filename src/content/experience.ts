export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  location: string;
  sectors: string[];
  summary: string;
  responsibilities: string[];
  methodologies: string[];
  technologies: string[];
  achievements: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "BDH Bilişim Destek Hizmetleri",
    role: "Proje Yöneticisi",
    period: "Ekim 2023 - Halen",
    location: "İstanbul",
    sectors: ["Kritik Altyapılar", "Sağlık Bilişimi", "Spor Teknolojileri", "Dijital Dönüşüm"],
    summary:
      "Şehir hastaneleri ve ulusal ölçekte kritik teknoloji projelerinde proje yöneticisi olarak görev yapıyor; sağlık bilişimi, kritik altyapılar ve spor teknolojileri alanlarında uçtan uca proje, operasyon ve paydaş yönetimini yürütüyorum.",
    responsibilities: [
      "Şehir hastanelerinde büyük ölçekli ICT projelerinin uçtan uca yönetimi",
      "Ulusal ölçekli spor federasyonu teknoloji projelerinin proje yönetimi ve koordinasyonu",
      "Stadyum BT altyapılarının kurulumu, modernizasyonu ve operasyonel yönetimi",
      "E-Bilet sistemleri ve stadyum teknoloji operasyonlarının koordinasyonu",
      "Maç günü teknoloji operasyonlarının planlanması ve paydaş koordinasyonu",
      "Spor organizasyonları ve etkinlik teknolojilerinin planlanması ve yönetimi",
      "Sistem, Network, Network Güvenlik, Siber Güvenlik ve Monitoring ekiplerinin koordinasyonu",
      "Veri merkezi, sanallaştırma, yedekleme ve felaket kurtarma projelerinin yönetimi",
      "ICT operasyonlarının SLA/KPI hedeflerine uygun yönetimi",
      "Teknik ekipler, müşteri ekipleri ve iş ortakları arasında koordinasyonun sağlanması",
      "Incident, Problem, Change ve Risk yönetim süreçlerinin yürütülmesi",
      "Agile, Hybrid ve Waterfall metodolojileri ile proje planlama ve teslim süreçlerinin yönetimi",
      "Teknik ve idari şartname hazırlanması",
      "Satın alma süreçlerinin teknik koordinasyonu",
      "Proje bütçesi ve maliyet analizlerinin hazırlanması",
      "Üst yönetime proje raporlamalarının hazırlanması",
      "Dijital dönüşüm projelerinde süreç iyileştirme çalışmaları",
      "Vendor yönetimi ve çok paydaşlı proje koordinasyonu",
      "Kritik migration, bakım ve canlı geçiş operasyonlarının yönetimi",
      "PMO standartlarına uygun proje yönetişimi ve dokümantasyon süreçlerinin yürütülmesi",
    ],
    methodologies: ["Agile", "Scrum", "Hybrid", "Waterfall", "PMI PMBOK", "ITIL"],
    technologies: [
      "Veri Merkezi",
      "Sanallaştırma",
      "Network & Network Güvenliği",
      "Monitoring Sistemleri",
      "Felaket Kurtarma (DR)",
      "E-Bilet Sistemleri",
    ],
    achievements: [
      "Şehir hastaneleri ve ulusal ölçekli spor organizasyonlarında kesintisiz ICT operasyonu sağlandı",
      "SLA/KPI hedeflerine uyumlu servis sürekliliği sağlandı",
      "Çok paydaşlı projelerde zamanında ve bütçe dahilinde teslimat gerçekleştirildi",
      "PMO standartlarına uygun governance ve dokümantasyon süreçleri kurumsallaştırıldı",
    ],
  },
  {
    company: "Rönesans Holding",
    role: "Bilgi İşlem Müdürü",
    period: "Mayıs 2023 - Ekim 2023",
    location: "İstanbul",
    sectors: ["Sağlık Bilişimi", "Kritik Altyapılar"],
    summary:
      "Büyük ölçekli bir şehir hastanesinin bilgi işlem operasyonlarının yönetiminden sorumlu olarak altyapı, ekip koordinasyonu ve kurumsal BT süreçlerini yönettim.",
    responsibilities: [
      "350 kişilik BT ve destek organizasyonunun koordinasyonu",
      "Alt yüklenici yönetimi",
      "HBYS operasyonlarının yönetimi",
      "Veri merkezi operasyonları",
      "Sunucu ve depolama altyapılarının yönetimi",
      "Satın alma süreçleri",
      "Teknik şartname hazırlanması",
      "HIMSS akreditasyon süreçlerine aktif katkı",
      "Operasyonel süreç iyileştirme",
    ],
    methodologies: ["Waterfall", "ITIL"],
    technologies: ["HBYS", "Veri Merkezi", "Sunucu & Depolama Altyapıları"],
    achievements: [
      "350 kişilik BT organizasyonu başarıyla yönetildi",
      "HIMSS akreditasyon sürecine aktif katkı sağlandı",
      "Operasyonel süreçlerde ölçülebilir iyileştirme sağlandı",
    ],
  },
  {
    company: "Liv Hospital",
    role: "Bilgi Sistemleri Yöneticisi",
    period: "Ekim 2022 - Mayıs 2023",
    location: "İstanbul",
    sectors: ["Sağlık Bilişimi"],
    summary:
      "Hastane bilgi sistemleri ve BT altyapılarının operasyonel yönetimini yürüttüm.",
    responsibilities: [
      "HBYS yönetimi",
      "Kullanıcı eğitimleri",
      "Ağ altyapısı yönetimi",
      "Firewall yönetimi",
      "Sunucu altyapısı",
      "Santral sistemleri",
      "Yedekleme süreçleri",
      "Teknik satın alma",
      "Proje yönetimi",
      "JCI akreditasyon çalışmalarına aktif katkı",
    ],
    methodologies: ["Waterfall"],
    technologies: ["HBYS (Pusula)", "Firewall", "Sunucu Altyapısı", "Santral Sistemleri", "Yedekleme"],
    achievements: [
      "JCI akreditasyon çalışmalarına aktif katkı sağlandı",
      "Ağ ve güvenlik altyapısı modernize edildi",
    ],
  },
  {
    company: "Kızılay Sağlık A.Ş.",
    role: "Bilgi Sistemleri Sorumlusu",
    period: "Ağustos 2021 - Eylül 2022",
    location: "İstanbul",
    sectors: ["Sağlık Bilişimi"],
    summary:
      "Çok lokasyonlu sağlık kuruluşlarında bilgi sistemleri koordinasyonu ve dijital dönüşüm projelerini yönettim.",
    responsibilities: [
      "5 farklı sağlık merkezinin BT koordinasyonu",
      "SAP MM, FI, CRM ve PM entegrasyon süreçleri",
      "HBYS geçiş projeleri",
      "Sunucu yönetimi",
      "Active Directory yönetimi",
      "Ağ altyapılarının yönetimi",
    ],
    methodologies: ["Waterfall"],
    technologies: ["SAP MM/FI/CRM/PM", "Active Directory", "Sunucu & Ağ Altyapısı"],
    achievements: [
      "5 farklı sağlık merkezinde BT koordinasyonu tek çatı altında toplandı",
      "HBYS geçiş projesi başarıyla tamamlandı",
    ],
  },
  {
    company: "Türk Kızılayı / Kızılay Sağlık A.Ş.",
    role: "Bilgi Sistemleri Uzmanı → Kıdemli Bilgi İşlem Sorumlusu",
    period: "Ekim 2014 - Ağustos 2021",
    location: "İstanbul",
    sectors: ["Sağlık Bilişimi"],
    summary:
      "Yedi yıllık kariyer yolculuğum boyunca teknik uzmanlıktan ekip liderliğine uzanan süreçte kurumsal BT operasyonları ve sağlık bilişim projelerinde aktif görev aldım.",
    responsibilities: [
      "Bilgi sistemleri altyapılarının kurulumu ve işletimi",
      "Sunucu ve ağ yönetimi",
      "Active Directory",
      "Sanallaştırma altyapıları",
      "Kurumsal yedekleme çözümleri",
      "Kullanıcı destek süreçleri",
      "Operasyonel süreç iyileştirme",
      "Kalite yönetimi süreçlerine katkı",
      "Kurumsal projelerde teknik liderlik",
    ],
    methodologies: ["Waterfall"],
    technologies: ["Sunucu & Ağ Yönetimi", "Active Directory", "Sanallaştırma", "Yedekleme"],
    achievements: [
      "Teknik uzmanlıktan ekip liderliğine terfi edildi",
      "7 yıllık süreçte kurumsal BT altyapısının olgunlaştırılmasına katkı sağlandı",
    ],
  },
];
