import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Link } from "@/i18n/navigation";
import { services } from "@/content/services";
import { Icon } from "@/lib/icon-map";

const copy = {
  tr: {
    eyebrow: "Hizmetler / Danışmanlık",
    title: "Kurumsal Projelerinizde Değer Yaratmak İçin Buradayım",
    seoTitle: "Proje Yönetimi Danışmanlığı ve Hizmetlerim",
    seoDescription:
      "IT proje yönetimi, PMO kurulumu, sağlık bilişimi ve dijital dönüşüm danışmanlığı hizmetleri. Kurumsal projelerinize değer katacak proje yönetimi desteği.",
    subtitle:
      "Büyük ölçekli kurum projeleri, kritik altyapı projeleri ve sağlık teknolojisi projelerinde danışmanlık desteği sunuyorum.",
    ctaTitle: "Projenizi Konuşalım",
    ctaSubtitle:
      "İhtiyacınıza en uygun kapsam ve süreci birlikte belirleyelim.",
    ctaButton: "İletişime Geçin",
    approachLink: "Proje yönetimi yaklaşımım hakkında daha fazla bilgi alın →",
  },
  en: {
    eyebrow: "Services / Consulting",
    title: "Here to Create Value in Your Enterprise Projects",
    seoTitle: "Project Management Consulting & Services",
    seoDescription:
      "IT project management, PMO setup, healthcare informatics and digital transformation consulting services for your enterprise projects.",
    subtitle:
      "I provide consulting support for large-scale enterprise projects, critical infrastructure projects and healthcare technology projects.",
    ctaTitle: "Let's Talk About Your Project",
    ctaSubtitle: "Let's define the right scope and process together.",
    ctaButton: "Get In Touch",
    approachLink: "Learn more about my project management approach →",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const c = copy[locale as keyof typeof copy] ?? copy.tr;
  return { title: c.seoTitle, description: c.seoDescription };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const c = copy[locale as keyof typeof copy] ?? copy.tr;

  return (
    <Container className="py-16 sm:py-20">
      <SectionHeading eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle} />
      <Link
        href="/proje-yonetimi-yaklasimim"
        className="mt-3 inline-block text-sm font-semibold text-accent-500 hover:text-navy-900"
      >
        {c.approachLink}
      </Link>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-navy-900/10 bg-white p-7"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-950/5 text-navy-900">
              <Icon name={service.icon} className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-navy-950">
              {service.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {service.description}
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-slate-600">
              {service.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="text-accent-500">—</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-2xl bg-navy-950 p-10 text-center text-white">
        <h2 className="text-2xl font-bold">{c.ctaTitle}</h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-300">
          {c.ctaSubtitle}
        </p>
        <div className="mt-6">
          <Button href="/iletisim" variant="accent">
            {c.ctaButton}
          </Button>
        </div>
      </div>
    </Container>
  );
}
