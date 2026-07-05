import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CookiePreferencesButton } from "@/components/consent/CookiePreferencesButton";

const copy = {
  tr: {
    eyebrow: "Çerez Politikası",
    title: "Çerez (Cookie) Politikası",
    intro:
      "Bu sayfa, sitemizde kullandığımız çerez kategorilerini ve bunları nasıl yönetebileceğinizi açıklar.",
    manageLabel: "Çerez Tercihlerimi Yönet",
    categories: [
      {
        title: "Zorunlu Çerezler",
        description:
          "Sitenin temel işlevlerinin (sayfa gezinme, dil tercihi, çerez onay durumunuzun hatırlanması) çalışması için gereklidir. Bu çerezler devre dışı bırakılamaz.",
      },
      {
        title: "Analitik Çerezler",
        description:
          "Google Analytics (GA4) ve Microsoft Clarity aracılığıyla ziyaretçi sayısı, en çok okunan sayfalar, trafik kaynakları ve kullanıcı davranışlarını anonim/toplulaştırılmış şekilde analiz etmemizi sağlar. Yalnızca onay verirseniz aktif olur.",
      },
      {
        title: "Reklam Çerezleri",
        description:
          "Google AdSense gibi reklam sağlayıcılarının size uygun reklam göstermesini ve reklam performansını ölçmesini sağlar. Yalnızca onay verirseniz aktif olur.",
      },
      {
        title: "Pazarlama Çerezleri",
        description:
          "Bülten aboneliği ve pazarlama iletişimlerinin kişiselleştirilmesinde kullanılabilir. Yalnızca onay verirseniz aktif olur.",
      },
    ],
    outroTitle: "Tercihlerinizi Değiştirme",
    outro:
      "Çerez tercihlerinizi dilediğiniz zaman aşağıdaki butondan veya sayfanın altında yer alan çerez bandındaki \"Tercihleri Yönet\" seçeneğinden güncelleyebilirsiniz. Ayrıca tarayıcınızın ayarlarından çerezleri tamamen engelleyebilir veya silebilirsiniz; ancak bu durumda sitenin bazı işlevleri düzgün çalışmayabilir.",
  },
  en: {
    eyebrow: "Cookie Policy",
    title: "Cookie Policy",
    intro:
      "This page explains the cookie categories we use on our site and how you can manage them.",
    manageLabel: "Manage My Cookie Preferences",
    categories: [
      {
        title: "Necessary Cookies",
        description:
          "Required for the site's core functions (page navigation, language preference, remembering your consent status). These cookies cannot be disabled.",
      },
      {
        title: "Analytics Cookies",
        description:
          "Allow us to analyze visitor numbers, most-read pages, traffic sources and user behavior anonymously/in aggregate via Google Analytics (GA4) and Microsoft Clarity. Only activated with your consent.",
      },
      {
        title: "Advertising Cookies",
        description:
          "Allow advertising providers such as Google AdSense to show you relevant ads and measure ad performance. Only activated with your consent.",
      },
      {
        title: "Marketing Cookies",
        description:
          "May be used to personalize newsletter subscriptions and marketing communications. Only activated with your consent.",
      },
    ],
    outroTitle: "Changing Your Preferences",
    outro:
      "You can update your cookie preferences at any time using the button below or the \"Manage Preferences\" option in the cookie banner at the bottom of the page. You can also block or delete cookies entirely through your browser settings, though some site functions may not work properly as a result.",
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

export default async function CookiePolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const c = copy[locale as keyof typeof copy] ?? copy.tr;

  return (
    <Container className="py-16 sm:py-20">
      <SectionHeading eyebrow={c.eyebrow} title={c.title} subtitle={c.intro} />

      <div className="mt-10 max-w-3xl space-y-6">
        {c.categories.map((category) => (
          <div
            key={category.title}
            className="rounded-2xl border border-navy-900/10 bg-white p-6"
          >
            <h3 className="text-base font-semibold text-navy-950">
              {category.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {category.description}
            </p>
          </div>
        ))}

        <div className="prose-content">
          <h2>{c.outroTitle}</h2>
          <p>{c.outro}</p>
        </div>

        <CookiePreferencesButton label={c.manageLabel} />
      </div>
    </Container>
  );
}
