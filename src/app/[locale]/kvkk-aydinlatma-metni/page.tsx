import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/content/site";

const copy = {
  tr: {
    eyebrow: "KVKK Aydınlatma Metni",
    title: "Kişisel Verilerin Korunması Kanunu Aydınlatma Metni",
    intro:
      "6698 sayılı Kişisel Verilerin Korunması Kanunu (\"KVKK\") uyarınca, veri sorumlusu sıfatıyla kişisel verilerinizin işlenmesine ilişkin olarak sizi bilgilendirmek isteriz.",
    sections: [
      {
        title: "1. Veri Sorumlusu",
        body: `Bu internet sitesi (${siteConfig.url}), veri sorumlusu sıfatıyla ${siteConfig.name} tarafından işletilmektedir.`,
      },
      {
        title: "2. İşlenen Kişisel Veri Kategorileri",
        body: "İletişim formu ve bülten aboneliği aracılığıyla; kimlik bilgileri (ad-soyad), iletişim bilgileri (e-posta, telefon), mesleki bilgiler (kurum) ve işlem güvenliği bilgileri (talep içeriği, IP adresi) işlenmektedir. Ayrıca site kullanımına ilişkin teknik veriler (tarayıcı bilgisi, cihaz türü, ziyaret istatistikleri) analitik araçlar üzerinden anonim/toplulaştırılmış şekilde işlenebilir.",
      },
      {
        title: "3. Kişisel Verilerin İşlenme Amaçları",
        body: "Kişisel verileriniz; tarafınızla iletişime geçilmesi, danışmanlık/hizmet taleplerinin ve etkinlik kayıtlarının değerlendirilmesi, bülten aboneliği talebinizin yerine getirilmesi, site kullanım deneyiminin analiz edilerek iyileştirilmesi ve yasal yükümlülüklerin yerine getirilmesi amaçlarıyla işlenmektedir.",
      },
      {
        title: "4. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi",
        body: "Kişisel verileriniz, sitedeki iletişim formu, bülten abonelik formu ve etkinlik kayıt formları aracılığıyla elektronik ortamda toplanmaktadır. Verileriniz, KVKK madde 5/2 kapsamında açık rızanız (formu doldurmanız/onay kutusunu işaretlemeniz) ve meşru menfaat hukuki sebeplerine dayanılarak işlenmektedir.",
      },
      {
        title: "5. Kişisel Verilerin Aktarılabileceği Taraflar",
        body: "Kişisel verileriniz; e-posta iletimini sağlamak amacıyla Resend gibi e-posta altyapı sağlayıcılarına, site barındırma hizmeti kapsamında Vercel gibi hizmet sağlayıcılara, onay vermeniz halinde Google Analytics, Microsoft Clarity ve Google AdSense gibi analitik/reklam hizmeti sağlayıcılarına aktarılabilir. Verileriniz pazarlama amacıyla üçüncü taraflarla paylaşılmaz veya satılmaz.",
      },
      {
        title: "6. Veri Saklama Süresi",
        body: "Kişisel verileriniz, talebinizin değerlendirilmesi için gerekli süre boyunca ve ilgili mevzuatta öngörülen yasal saklama süreleri çerçevesinde saklanır; bu süre sonunda silinir, yok edilir veya anonimleştirilir.",
      },
      {
        title: "7. KVKK Madde 11 Kapsamındaki Haklarınız",
        body: `KVKK madde 11 uyarınca; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını öğrenme, yurt içi/yurt dışında aktarıldığı üçüncü kişileri öğrenme, eksik/yanlış işlenmişse düzeltilmesini isteme, KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde silinmesini/yok edilmesini isteme, aktarıldığı üçüncü kişilere bu işlemlerin bildirilmesini isteme, münhasıran otomatik sistemler ile analiz edilmesi sonucu aleyhinize bir sonucun ortaya çıkmasına itiraz etme ve zarara uğramanız hâlinde zararın giderilmesini talep etme haklarına sahipsiniz. Bu haklarınızı kullanmak için ${siteConfig.email} adresinden bizimle iletişime geçebilirsiniz.`,
      },
    ],
  },
  en: {
    eyebrow: "KVKK Privacy Notice",
    title: "Personal Data Protection Law (KVKK) Privacy Notice",
    intro:
      "In accordance with Turkish Personal Data Protection Law No. 6698 (\"KVKK\"), we would like to inform you about the processing of your personal data as the data controller.",
    sections: [
      {
        title: "1. Data Controller",
        body: `This website (${siteConfig.url}) is operated by ${siteConfig.name} as the data controller.`,
      },
      {
        title: "2. Categories of Personal Data Processed",
        body: "Through the contact form and newsletter subscription, we process identity information (name), contact information (email, phone), professional information (company), and transaction security information (request content, IP address). Technical usage data (browser information, device type, visit statistics) may also be processed in an anonymized/aggregated form via analytics tools.",
      },
      {
        title: "3. Purposes of Processing",
        body: "Your personal data is processed to contact you, evaluate consulting/service requests and event registrations, fulfill your newsletter subscription request, analyze and improve the site experience, and fulfill legal obligations.",
      },
      {
        title: "4. Collection Method and Legal Basis",
        body: "Your personal data is collected electronically through the contact form, newsletter subscription form, and event registration forms on the site. Your data is processed based on your explicit consent (submitting the form/checking the consent box) and legitimate interest grounds under Article 5/2 of the KVKK.",
      },
      {
        title: "5. Parties to Whom Data May Be Transferred",
        body: "Your personal data may be transferred to email infrastructure providers such as Resend, hosting providers such as Vercel, and, where you consent, analytics/advertising providers such as Google Analytics, Microsoft Clarity and Google AdSense. Your data is not shared with or sold to third parties for marketing purposes.",
      },
      {
        title: "6. Data Retention",
        body: "Your personal data is retained for as long as necessary to evaluate your request and in line with legal retention periods, after which it is deleted, destroyed, or anonymized.",
      },
      {
        title: "7. Your Rights Under Article 11 of the KVKK",
        body: `Under Article 11 of the KVKK, you have the right to learn whether your personal data is processed, request information about it, learn its purpose, learn third parties to whom it is transferred domestically/abroad, request correction if processed incorrectly, request deletion/destruction under the conditions set out in Article 7, request that these actions be notified to third parties to whom the data was transferred, object to an outcome that is unfavorable to you resulting from analysis exclusively through automated systems, and request compensation for damages. You can contact us at ${siteConfig.email} to exercise these rights.`,
      },
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const c = copy[locale as keyof typeof copy] ?? copy.tr;
  return { title: c.eyebrow, description: c.intro };
}

export default async function KvkkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const c = copy[locale as keyof typeof copy] ?? copy.tr;

  return (
    <Container className="py-16 sm:py-20">
      <SectionHeading eyebrow={c.eyebrow} title={c.title} subtitle={c.intro} />

      <div className="prose-content mt-10 max-w-3xl">
        {c.sections.map((section) => (
          <div key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
