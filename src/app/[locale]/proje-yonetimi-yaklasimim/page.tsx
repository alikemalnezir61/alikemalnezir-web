import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { processSteps, principles } from "@/content/approach";

const copy = {
  tr: {
    eyebrow: "Proje Yönetimi Yaklaşımım",
    title: "Metodolojiyi Projenin Doğasına Uydururum",
    seoTitle: "Proje Yönetimi Metodolojim: Agile, Hibrit ve PMP®",
    seoDescription:
      "PMP® bilgi alanlarını Agile ve Hibrit yaklaşımlarla birleştiren proje yönetimi metodolojim ve proje yaşam döngüsü sürecim hakkında detaylı bilgi.",
    subtitle:
      "PMP® bilgi alanlarını, Agile ve Hibrit yaklaşımlarla birleştirerek her projenin kendi bağlamına uygun bir yönetim modeli kuruyorum.",
    principlesTitle: "Temel İlkelerim",
    processTitle: "Proje Yaşam Döngüsü Yaklaşımım",
    ctaTitle: "Bu Yaklaşımı Projenizde Uygulayalım",
    ctaSubtitle: "Danışmanlık hizmetlerimi ve destek verdiğim proje türlerini inceleyin.",
    ctaButton: "Hizmetlerimi İnceleyin",
  },
  en: {
    eyebrow: "My PM Approach",
    title: "I Adapt Methodology to the Nature of the Project",
    seoTitle: "My PM Methodology: Agile, Hybrid & PMP®",
    seoDescription:
      "Discover my project management methodology combining PMP® knowledge areas with Agile and Hybrid approaches, and my end-to-end project lifecycle process.",
    subtitle:
      "I combine PMP® knowledge areas with Agile and Hybrid approaches to build a management model tailored to each project's context.",
    principlesTitle: "Core Principles",
    processTitle: "My Project Lifecycle Approach",
    ctaTitle: "Let's Apply This Approach to Your Project",
    ctaSubtitle: "Explore my consulting services and the types of projects I support.",
    ctaButton: "View My Services",
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

export default async function ApproachPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const c = copy[locale as keyof typeof copy] ?? copy.tr;

  return (
    <Container className="py-16 sm:py-20">
      <SectionHeading eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle} />

      <div className="mt-14">
        <h3 className="text-lg font-semibold text-navy-950">
          {c.principlesTitle}
        </h3>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {principles.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-navy-900/10 bg-white p-6"
            >
              <h4 className="font-semibold text-navy-950">{p.title}</h4>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-lg font-semibold text-navy-950">
          {c.processTitle}
        </h3>
        <div className="mt-6 grid gap-6 lg:grid-cols-5">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="rounded-2xl bg-navy-950 p-6 text-white"
            >
              <span className="text-3xl font-bold text-accent-400">
                {step.step}
              </span>
              <h4 className="mt-3 font-semibold">{step.title}</h4>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 rounded-2xl bg-navy-950 p-10 text-center text-white">
        <h2 className="text-2xl font-bold">{c.ctaTitle}</h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-300">{c.ctaSubtitle}</p>
        <div className="mt-6">
          <Button href="/hizmetler" variant="accent">
            {c.ctaButton}
          </Button>
        </div>
      </div>
    </Container>
  );
}
