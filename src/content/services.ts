export type Service = {
  title: string;
  description: string;
  bullets: string[];
  icon: string;
};

export const services: Service[] = [
  {
    title: "Proje Kurtarma ve Kriz Yönetimi",
    description:
      "Sarpmış, gecikmiş veya bütçesini aşan projelerin yeniden yapılandırılması.",
    bullets: [
      "Kök neden analizi ve durum tespiti",
      "Aksiyon planı ve yeniden önceliklendirme",
      "Paydaş beklentilerinin yeniden hizalanması",
    ],
    icon: "LifeBuoy",
  },
  {
    title: "PMO Kurulumu ve Olgunlaştırma",
    description:
      "Kurumsal proje yönetim ofisinin sıfırdan kurulması veya mevcut yapının olgunlaştırılması.",
    bullets: [
      "Süreç, şablon ve governance yapılarının tasarımı",
      "Portföy ve program yönetimi mekanizmaları",
      "Raporlama ve karar destek yapılarının kurulması",
    ],
    icon: "Building",
  },
  {
    title: "Dijital Dönüşüm Danışmanlığı",
    description:
      "Sağlık bilişimi ve kritik altyapı kurumlarında dijitalleşme yol haritası hazırlanması.",
    bullets: [
      "Mevcut durum analizi ve olgunluk değerlendirmesi",
      "Sistem entegrasyonu ve veri yönetimi danışmanlığı",
      "Değişim yönetimi ve kullanıcı benimseme planı",
    ],
    icon: "Rocket",
  },
  {
    title: "Risk ve Operasyonel Süreç Denetimi",
    description:
      "Proje ve operasyon risklerinin tespiti ile süreç iyileştirme önerileri.",
    bullets: [
      "RAID log oluşturma ve düzenli takip",
      "Operasyonel süreç haritalama ve darboğaz analizi",
      "İyileştirme önerileri ve uygulama takibi",
    ],
    icon: "ShieldCheck",
  },
  {
    title: "ITSM ve Servis Yönetimi Danışmanlığı",
    description: "ITIL tabanlı servis yönetimi süreçlerinin kurulması ve iyileştirilmesi.",
    bullets: [
      "Servis kataloğu ve SLA yapılarının oluşturulması",
      "Olay, sorun ve değişim yönetimi süreçleri",
      "Servis masası operasyon modelinin tasarımı",
    ],
    icon: "Wrench",
  },
  {
    title: "Ekip Liderliği ve Mentorluk",
    description: "Proje ekiplerine yönelik liderlik gelişimi ve bireysel mentorluk desteği.",
    bullets: [
      "Proje yöneticisi adaylarına mentorluk",
      "Ekip performansı ve motivasyon yönetimi",
      "Zor paydaşlarla iletişim ve müzakere teknikleri",
    ],
    icon: "Users",
  },
];
