import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/content/experience";
import { Briefcase, MapPin } from "lucide-react";

const copy = {
  tr: {
    eyebrow: "Deneyimlerim",
    title: "Kariyer Yolculuğum",
    subtitle:
      "Sağlık bilişimi ve kritik altyapı projelerinde 10+ yıllık deneyimim boyunca üstlendiğim roller.",
  },
  en: {
    eyebrow: "Experience",
    title: "My Career Journey",
    subtitle:
      "Roles I have taken on throughout my 10+ years of experience in healthcare informatics and critical infrastructure projects.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const c = copy[locale as keyof typeof copy] ?? copy.tr;
  return { title: c.eyebrow, description: c.subtitle };
}

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const c = copy[locale as keyof typeof copy] ?? copy.tr;

  return (
    <Container className="py-16 sm:py-20">
      <SectionHeading eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle} />

      <div className="mt-12 space-y-8 border-l-2 border-navy-900/10 pl-8">
        {experience.map((item) => (
          <div key={item.role + item.company} className="relative">
            <span className="absolute -left-[2.55rem] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-navy-900 text-white">
              <Briefcase size={13} />
            </span>
            <p className="text-xs font-semibold uppercase tracking-wide text-accent-500">
              {item.period}
            </p>
            <h3 className="mt-1 text-xl font-semibold text-navy-950">
              {item.role}
            </h3>
            <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500">
              <span className="font-medium text-slate-700">{item.company}</span>
              <span>·</span>
              <span>{item.sector}</span>
              <span className="flex items-center gap-1">
                <MapPin size={13} /> {item.location}
              </span>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {item.summary}
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-600">
              {item.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  );
}
