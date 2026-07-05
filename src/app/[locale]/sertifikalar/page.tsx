import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certifications, additionalTrainings } from "@/content/certifications";
import { Award, BadgeCheck } from "lucide-react";

const copy = {
  tr: {
    eyebrow: "Sertifikalar",
    title: "Uluslararası Standartlarda Belgelenmiş Yetkinlikler",
    subtitle:
      "Proje yönetimi ve ilgili alanlarda aldığım sertifika ve eğitimler.",
    otherTitle: "Diğer Eğitimler ve Sertifikalar",
  },
  en: {
    eyebrow: "Certifications",
    title: "Internationally Recognized Credentials",
    subtitle:
      "Certifications and training programs I have completed in project management and related fields.",
    otherTitle: "Other Trainings and Certifications",
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

export default async function CertificationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const c = copy[locale as keyof typeof copy] ?? copy.tr;

  return (
    <Container className="py-16 sm:py-20">
      <SectionHeading eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle} />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <div
            key={cert.name}
            className="rounded-2xl border border-navy-900/10 bg-white p-6"
          >
            <Award className="h-8 w-8 text-accent-500" strokeWidth={1.75} />
            <h3 className="mt-4 text-base font-semibold text-navy-950">
              {cert.name}
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              {cert.issuer} · {cert.date}
            </p>
            {cert.description && (
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {cert.description}
              </p>
            )}
            {cert.credentialId && (
              <p className="mt-3 text-xs text-slate-400">
                ID: {cert.credentialId}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="text-lg font-semibold text-navy-950">
          {c.otherTitle}
        </h3>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {additionalTrainings.map((training) => (
            <div
              key={training}
              className="flex items-center gap-3 rounded-xl border border-navy-900/10 bg-slate-50 px-4 py-3 text-sm text-slate-700"
            >
              <BadgeCheck size={16} className="shrink-0 text-accent-500" />
              {training}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
