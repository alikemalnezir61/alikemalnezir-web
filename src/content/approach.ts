export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Başlatma",
    description:
      "Proje hedeflerinin, kapsamının ve paydaşlarının netleştirilmesi; iş gerekçesinin ve başarı kriterlerinin tanımlanması.",
  },
  {
    step: "02",
    title: "Planlama",
    description:
      "Kapsam, zaman, maliyet, kalite, risk ve kaynak planlarının hazırlanması; RACI ve iletişim planının oluşturulması.",
  },
  {
    step: "03",
    title: "Yürütme",
    description:
      "Ekiplerin koordinasyonu, tedarik süreçlerinin yönetimi ve paydaş beklentilerinin sürekli hizalanması.",
  },
  {
    step: "04",
    title: "İzleme & Kontrol",
    description:
      "Performans göstergelerinin takibi, risklerin yönetilmesi ve sapmalara karşı düzeltici aksiyonların alınması.",
  },
  {
    step: "05",
    title: "Kapanış",
    description:
      "Teslimatların onaylanması, edinilen derslerin belgelenmesi ve kurumsal hafızaya aktarılması.",
  },
];

export const principles: { title: string; description: string }[] = [
  {
    title: "Hibrit Metodoloji",
    description:
      "Projenin doğasına göre Agile, Waterfall veya Hibrit yaklaşımların bilinçli şekilde bir arada kullanılması.",
  },
  {
    title: "Paydaş Odaklılık",
    description:
      "Teknik ekip ile üst yönetim arasında şeffaf, düzenli ve karşılıklı anlaşılır bir iletişim köprüsü kurulması.",
  },
  {
    title: "Risk Bilinci",
    description:
      "Risklerin proje başında tanımlanması, düzenli olarak izlenmesi ve proaktif şekilde yönetilmesi.",
  },
  {
    title: "Veriye Dayalı Karar Alma",
    description:
      "Proje kararlarının varsayımlar yerine ölçülebilir veriler ve net performans göstergeleriyle desteklenmesi.",
  },
  {
    title: "Sürdürülebilir Operasyon",
    description:
      "Proje çıktılarının yalnızca teslim edilmesi değil, operasyona sağlıklı şekilde devredilmesi ve sürdürülebilir kılınması.",
  },
];
