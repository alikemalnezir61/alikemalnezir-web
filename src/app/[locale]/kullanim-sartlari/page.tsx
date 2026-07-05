import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/content/site";

const copy = {
  tr: {
    eyebrow: "Kullanım Şartları",
    title: "Kullanım Şartları",
    sections: [
      {
        title: "1. Kabul",
        body: `${siteConfig.url} adresindeki bu web sitesini kullanarak aşağıdaki kullanım şartlarını kabul etmiş sayılırsınız. Bu şartları kabul etmiyorsanız lütfen siteyi kullanmayınız.`,
      },
      {
        title: "2. Sitenin Amacı",
        body: `Bu site, ${siteConfig.name}'in profesyonel deneyimini, blog yazılarını, etkinliklerini ve danışmanlık hizmetlerini tanıtmak amacıyla yayınlanmaktadır. Sitede yer alan içerikler genel bilgilendirme amaçlıdır ve profesyonel danışmanlık yerine geçmez.`,
      },
      {
        title: "3. Fikri Mülkiyet",
        body: "Sitede yer alan tüm metin, görsel, logo ve içerikler aksi belirtilmedikçe site sahibine aittir. Önceden yazılı izin alınmaksızın içeriklerin ticari amaçla çoğaltılması, dağıtılması veya değiştirilmesi yasaktır. Kaynak gösterilerek alıntı yapılması mümkündür.",
      },
      {
        title: "4. Kullanıcı Yükümlülükleri",
        body: "Siteyi kullanırken yürürlükteki mevzuata aykırı, zarar verici, yanıltıcı veya üçüncü kişilerin haklarını ihlal edici içerik veya davranışlarda bulunmamayı kabul edersiniz. İletişim formu ve bülten aboneliği aracılığıyla paylaştığınız bilgilerin doğru ve güncel olduğunu beyan edersiniz.",
      },
      {
        title: "5. Üçüncü Taraf Bağlantılar",
        body: "Site, üçüncü taraf web sitelerine bağlantılar içerebilir (ör. LinkedIn, etkinlik kayıt sayfaları, sponsor siteleri). Bu bağlantılı sitelerin içeriğinden veya gizlilik uygulamalarından sorumlu değiliz.",
      },
      {
        title: "6. Sorumluluğun Sınırlandırılması",
        body: "Sitedeki bilgiler mümkün olan en doğru ve güncel şekilde sunulmaya çalışılsa da, bu bilgilerin eksiksizliği veya güncelliği garanti edilmemektedir. Sitenin kullanımından doğabilecek doğrudan veya dolaylı zararlardan site sahibi sorumlu tutulamaz.",
      },
      {
        title: "7. Reklam ve Sponsor İçerikleri",
        body: "Sitede yer alan reklam alanları ve sponsor içerikleri, ilgili üçüncü taraflarca sağlanmaktadır. Bu içeriklerin doğruluğu veya ilgili ürün/hizmetlerin kalitesi konusunda site sahibi taahhütte bulunmaz.",
      },
      {
        title: "8. Değişiklik Hakkı",
        body: "Site sahibi, bu kullanım şartlarını dilediği zaman güncelleme hakkını saklı tutar. Güncellenen şartlar, sitede yayınlandığı andan itibaren geçerli olur.",
      },
      {
        title: "9. Uygulanacak Hukuk",
        body: "Bu kullanım şartları Türkiye Cumhuriyeti kanunlarına tabidir. Bu şartlardan doğabilecek uyuşmazlıklarda İstanbul (Anadolu) mahkemeleri ve icra daireleri yetkilidir.",
      },
      {
        title: "10. İletişim",
        body: `Kullanım şartlarıyla ilgili sorularınız için ${siteConfig.email} adresinden bizimle iletişime geçebilirsiniz.`,
      },
    ],
  },
  en: {
    eyebrow: "Terms of Use",
    title: "Terms of Use",
    sections: [
      {
        title: "1. Acceptance",
        body: `By using this website at ${siteConfig.url}, you are deemed to have accepted the following terms of use. If you do not accept these terms, please do not use the site.`,
      },
      {
        title: "2. Purpose of the Site",
        body: `This site is published to showcase ${siteConfig.name}'s professional experience, blog posts, events, and consulting services. Content on the site is for general informational purposes and does not replace professional consulting.`,
      },
      {
        title: "3. Intellectual Property",
        body: "All text, images, logos and content on the site belong to the site owner unless otherwise stated. Reproducing, distributing or modifying the content for commercial purposes without prior written permission is prohibited. Quoting with proper attribution is permitted.",
      },
      {
        title: "4. User Obligations",
        body: "By using the site, you agree not to engage in content or conduct that violates applicable law, causes harm, is misleading, or infringes on the rights of third parties. You represent that the information you share via the contact form and newsletter subscription is accurate and up to date.",
      },
      {
        title: "5. Third-Party Links",
        body: "The site may contain links to third-party websites (e.g., LinkedIn, event registration pages, sponsor sites). We are not responsible for the content or privacy practices of these linked sites.",
      },
      {
        title: "6. Limitation of Liability",
        body: "While we strive to present information on the site as accurately and up to date as possible, we do not guarantee its completeness or currency. The site owner cannot be held liable for any direct or indirect damages arising from the use of the site.",
      },
      {
        title: "7. Advertising and Sponsor Content",
        body: "Advertising areas and sponsor content on the site are provided by the relevant third parties. The site owner makes no representations regarding the accuracy of this content or the quality of related products/services.",
      },
      {
        title: "8. Right to Modify",
        body: "The site owner reserves the right to update these terms of use at any time. Updated terms take effect as soon as they are published on the site.",
      },
      {
        title: "9. Governing Law",
        body: "These terms of use are governed by the laws of the Republic of Turkey. Istanbul (Anatolian) courts and enforcement offices have jurisdiction over any disputes arising from these terms.",
      },
      {
        title: "10. Contact",
        body: `For questions about these terms of use, you can contact us at ${siteConfig.email}.`,
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

export default async function TermsPage({
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
