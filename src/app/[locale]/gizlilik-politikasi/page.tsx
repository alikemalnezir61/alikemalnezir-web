import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/content/site";

const copy = {
  tr: {
    eyebrow: "KVKK / Gizlilik Politikası",
    title: "Kişisel Verilerin Korunması ve Gizlilik Politikası",
    sections: [
      {
        title: "1. Veri Sorumlusu",
        body: `Bu internet sitesi (${siteConfig.url}), veri sorumlusu sıfatıyla ${siteConfig.name} tarafından işletilmektedir. Sitede yer alan iletişim formu aracılığıyla paylaştığınız kişisel veriler, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında işlenmektedir.`,
      },
      {
        title: "2. İşlenen Kişisel Veriler",
        body: "İletişim formu üzerinden ad-soyad, e-posta adresi, kurum bilgisi ve mesaj içeriğiniz tarafımıza iletilir. Site kullanımına ilişkin teknik veriler (IP adresi, tarayıcı bilgisi, ziyaret istatistikleri) Google Analytics gibi analiz araçları üzerinden anonim/toplulaştırılmış şekilde işlenebilir.",
      },
      {
        title: "3. İşleme Amaçları",
        body: "Kişisel verileriniz; tarafınızla iletişime geçilmesi, danışmanlık/hizmet taleplerinin değerlendirilmesi ve site kullanım deneyiminin analiz edilerek iyileştirilmesi amaçlarıyla işlenmektedir.",
      },
      {
        title: "4. Hukuki Sebep",
        body: "Kişisel verileriniz, KVKK madde 5/2 kapsamında açık rızanız (iletişim formunu doldurmanız) ve meşru menfaat hukuki sebeplerine dayanılarak işlenmektedir.",
      },
      {
        title: "5. Üçüncü Taraflarla Paylaşım",
        body: "İletişim formu verileriniz, e-posta iletimini sağlamak amacıyla Resend gibi e-posta altyapı sağlayıcılarına; site barındırma hizmeti kapsamında Vercel gibi hizmet sağlayıcılara aktarılabilir. Verileriniz pazarlama amacıyla üçüncü taraflarla paylaşılmaz veya satılmaz.",
      },
      {
        title: "6. Çerezler (Cookies)",
        body: "Site, temel işlevsellik ve ziyaretçi istatistikleri için çerezler kullanabilir. Tarayıcı ayarlarınızdan çerez tercihlerinizi yönetebilirsiniz.",
      },
      {
        title: "7. Veri Saklama Süresi",
        body: "İletişim formu aracılığıyla iletilen veriler, talebinizin değerlendirilmesi için gerekli süre boyunca ve yasal saklama yükümlülükleri çerçevesinde saklanır; bu süre sonunda silinir veya anonimleştirilir.",
      },
      {
        title: "8. KVKK Kapsamındaki Haklarınız",
        body: `KVKK madde 11 uyarınca; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını öğrenme, yurt içi/yurt dışında aktarıldığı üçüncü kişileri öğrenme, eksik/yanlış işlenmişse düzeltilmesini isteme, silinmesini/yok edilmesini isteme ve itiraz etme haklarına sahipsiniz. Bu haklarınızı kullanmak için ${siteConfig.email} adresinden bizimle iletişime geçebilirsiniz.`,
      },
    ],
  },
  en: {
    eyebrow: "KVKK / Privacy Policy",
    title: "Personal Data Protection and Privacy Policy",
    sections: [
      {
        title: "1. Data Controller",
        body: `This website (${siteConfig.url}) is operated by ${siteConfig.name} as the data controller. Personal data you share via the contact form is processed in accordance with the Turkish Personal Data Protection Law No. 6698 ("KVKK").`,
      },
      {
        title: "2. Data We Process",
        body: "Through the contact form, we receive your name, email address, company information and message content. Technical usage data (IP address, browser information, visit statistics) may be processed in an anonymized/aggregated form via analytics tools such as Google Analytics.",
      },
      {
        title: "3. Purposes of Processing",
        body: "Your personal data is processed to contact you, evaluate consulting/service requests, and analyze and improve the site experience.",
      },
      {
        title: "4. Legal Basis",
        body: "Your personal data is processed based on your explicit consent (submitting the contact form) and legitimate interest grounds under Article 5/2 of the KVKK.",
      },
      {
        title: "5. Sharing With Third Parties",
        body: "Contact form data may be transferred to email infrastructure providers such as Resend to deliver emails, and to hosting providers such as Vercel. Your data is not shared with or sold to third parties for marketing purposes.",
      },
      {
        title: "6. Cookies",
        body: "The site may use cookies for core functionality and visitor statistics. You can manage your cookie preferences through your browser settings.",
      },
      {
        title: "7. Data Retention",
        body: "Data submitted via the contact form is retained for as long as necessary to evaluate your request and in line with legal retention obligations, after which it is deleted or anonymized.",
      },
      {
        title: "8. Your Rights Under KVKK",
        body: `Under Article 11 of the KVKK, you have the right to learn whether your personal data is processed, request information about it, learn its purpose, learn third parties to whom it is transferred domestically/abroad, request correction if processed incorrectly, request deletion/destruction, and object to processing. You can contact us at ${siteConfig.email} to exercise these rights.`,
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
  return { title: c.eyebrow };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const c = copy[locale as keyof typeof copy] ?? copy.tr;

  return (
    <Container className="py-16 sm:py-20">
      <SectionHeading eyebrow={c.eyebrow} title={c.title} />

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
