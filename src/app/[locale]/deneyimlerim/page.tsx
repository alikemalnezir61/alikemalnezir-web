import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatCard } from "@/components/experience/StatCard";
import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { CareerJourney } from "@/components/experience/CareerJourney";
import { experience } from "@/content/experience";
import { skills } from "@/content/skills";

const copy = {
  tr: {
    eyebrow: "Kariyer",
    heroTitle: "Profesyonel Deneyim",
    seoTitle: "Deneyimlerim – 10+ Yıllık Proje Yönetimi Kariyeri",
    seoDescription:
      "IT, sağlık bilişimi, kritik altyapı ve dijital dönüşüm alanlarında 10+ yıllık proje yönetimi deneyimim, üstlendiğim roller ve tamamladığım büyük ölçekli projeler.",
    heroSubtitle:
      "10+ yıllık bilgi teknolojileri, proje yönetimi ve dijital dönüşüm yolculuğum.",
    stats: [
      { icon: "Clock", value: "10+ Yıl", label: "Toplam Deneyim" },
      { icon: "Building2", value: "15+", label: "Tamamlanan Büyük Ölçekli Proje" },
      { icon: "Sparkles", value: "20+", label: "Uzmanlık Alanı" },
      { icon: "Award", value: "PMP®", label: "Sertifikalı Proje Yöneticisi" },
      { icon: "Layers", value: "4", label: "Çalışılan Sektör" },
    ],
    experienceTitle: "İş Deneyimi",
    experienceSubtitle: "Kariyerim boyunca üstlendiğim roller ve sorumluluklar.",
    journeyTitle: "Kariyer Yolculuğum",
    journeySubtitle: "Yıllar içinde üstlendiğim rollerin görsel özeti.",
    skillsTitle: "Uzmanlık Alanlarım",
    skillsSubtitle: "Proje ve teknoloji yönetiminde derinleştiğim başlıca konular.",
  },
  en: {
    eyebrow: "Career",
    heroTitle: "Professional Experience",
    seoTitle: "Experience – 10+ Years in Project Management",
    seoDescription:
      "My 10+ year project management career across IT, healthcare informatics, critical infrastructure and digital transformation — roles held and large-scale projects delivered.",
    heroSubtitle:
      "My 10+ year journey in information technology, project management and digital transformation.",
    stats: [
      { icon: "Clock", value: "10+ Years", label: "Total Experience" },
      { icon: "Building2", value: "15+", label: "Large-Scale Projects Delivered" },
      { icon: "Sparkles", value: "20+", label: "Areas of Expertise" },
      { icon: "Award", value: "PMP®", label: "Certified Project Manager" },
      { icon: "Layers", value: "4", label: "Industries Served" },
    ],
    experienceTitle: "Work Experience",
    experienceSubtitle: "Roles and responsibilities I have taken on throughout my career.",
    journeyTitle: "Career Journey",
    journeySubtitle: "A visual summary of the roles I've held over the years.",
    skillsTitle: "Areas of Expertise",
    skillsSubtitle: "The core topics I've deepened in project and technology management.",
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

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const c = copy[locale as keyof typeof copy] ?? copy.tr;

  return (
    <>
      <section className="relative overflow-hidden bg-navy-950">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 15%, var(--color-accent-500) 0, transparent 40%), radial-gradient(circle at 85% 55%, var(--color-navy-500) 0, transparent 45%)",
          }}
        />
        <Container className="relative py-20 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-300">
            {c.eyebrow}
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {c.heroTitle}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
            {c.heroSubtitle}
          </p>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {c.stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </Container>
      </section>

      <Container className="py-16 sm:py-20">
        <SectionHeading
          eyebrow={c.eyebrow}
          title={c.experienceTitle}
          subtitle={c.experienceSubtitle}
        />

        <div className="mt-12 space-y-10 border-l-2 border-navy-900/10 pl-8">
          {experience.map((item) => (
            <ExperienceCard key={item.company + item.period} entry={item} />
          ))}
        </div>
      </Container>

      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <SectionHeading title={c.journeyTitle} subtitle={c.journeySubtitle} />
          <div className="mt-10">
            <CareerJourney />
          </div>
        </Container>
      </section>

      <Container className="py-16 sm:py-20">
        <SectionHeading title={c.skillsTitle} subtitle={c.skillsSubtitle} />
        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-navy-900/10 bg-white px-4 py-2 text-sm font-medium text-navy-900 transition-colors hover:border-accent-500/40 hover:text-accent-500"
            >
              {skill}
            </span>
          ))}
        </div>
      </Container>
    </>
  );
}
