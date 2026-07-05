import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/content/site";

const copy = {
  tr: {
    eyebrow: "Gizlilik Politikası",
    title: "Gizlilik Politikası",
    intro:
      "Bu sayfa, sitemizi ziyaret ettiğinizde kişisel verilerinizin nasıl korunduğuna dair genel bir özet sunar. Kişisel verilerinizin işlenmesine ilişkin ayrıntılı ve resmi bilgilendirme için KVKK Aydınlatma Metni'ni, çerez kullanımımız için ise Çerez Politikası'nı inceleyebilirsiniz.",
    sections: [
      {
        title: "Hangi Verileri Topluyoruz?",
        body: "İletişim formu, bülten aboneliği veya etkinlik kaydı doldurduğunuzda ad-soyad, e-posta, telefon ve mesaj içeriğiniz gibi bilgileri topluyoruz. Ayrıca onay vermeniz halinde site kullanımınıza dair anonim istatistikler (ziyaret sayısı, en çok okunan sayfalar, cihaz/tarayıcı bilgisi) analitik araçlar üzerinden toplanabilir.",
      },
      {
        title: "Verilerinizi Kimlerle Paylaşıyoruz?",
        body: "Verileriniz yalnızca hizmetin sağlanması için gerekli üçüncü taraflarla (e-posta altyapı sağlayıcısı Resend, barındırma sağlayıcısı Vercel, onay vermeniz halinde Google Analytics/Clarity/AdSense) paylaşılır. Pazarlama amacıyla satılmaz veya kiralanmaz.",
      },
      {
        title: "Güvenlik",
        body: "Site HTTPS üzerinden yayın yapar, formlarımız spam ve kötüye kullanıma karşı ek koruma (reCAPTCHA, rate limiting) içerir. Yönetim paneline erişim şifre ve yetkilendirme ile korunmaktadır.",
      },
      {
        title: "Haklarınız",
        body: "KVKK kapsamındaki haklarınızın tam listesi için KVKK Aydınlatma Metni sayfasını inceleyebilir, taleplerinizi aşağıdaki e-posta adresinden iletebilirsiniz.",
      },
    ],
    linksTitle: "İlgili Sayfalar",
    links: [
      { href: "/kvkk-aydinlatma-metni", label: "KVKK Aydınlatma Metni" },
      { href: "/cerez-politikasi", label: "Çerez Politikası" },
      { href: "/kullanim-sartlari", label: "Kullanım Şartları" },
    ],
  },
  en: {
    eyebrow: "Privacy Policy",
    title: "Privacy Policy",
    intro:
      "This page provides a general summary of how your personal data is protected when you visit our site. For detailed and formal information about the processing of your personal data, see the KVKK Privacy Notice; for our cookie usage, see the Cookie Policy.",
    sections: [
      {
        title: "What Data We Collect",
        body: "When you fill out the contact form, subscribe to the newsletter, or register for an event, we collect information such as your name, email, phone, and message content. If you consent, anonymous usage statistics (visit counts, most-read pages, device/browser information) may also be collected via analytics tools.",
      },
      {
        title: "Who We Share Your Data With",
        body: "Your data is only shared with third parties necessary to provide the service (email infrastructure provider Resend, hosting provider Vercel, and, with your consent, Google Analytics/Clarity/AdSense). It is not sold or rented for marketing purposes.",
      },
      {
        title: "Security",
        body: "The site is served over HTTPS, and our forms include additional protection against spam and abuse (reCAPTCHA, rate limiting). Access to the admin panel is protected with a password and authorization.",
      },
      {
        title: "Your Rights",
        body: "For the full list of your rights under the KVKK, please see the KVKK Privacy Notice page. You can send your requests to the email address below.",
      },
    ],
    linksTitle: "Related Pages",
    links: [
      { href: "/kvkk-aydinlatma-metni", label: "KVKK Privacy Notice" },
      { href: "/cerez-politikasi", label: "Cookie Policy" },
      { href: "/kullanim-sartlari", label: "Terms of Use" },
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

export default async function PrivacyPage({
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
        <p>
          {siteConfig.email}
        </p>
      </div>

      <div className="mt-10 max-w-3xl rounded-2xl border border-navy-900/10 bg-slate-50 p-6">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-navy-950">
          {c.linksTitle}
        </h3>
        <ul className="mt-3 space-y-2">
          {c.links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-accent-500 hover:text-navy-900"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
