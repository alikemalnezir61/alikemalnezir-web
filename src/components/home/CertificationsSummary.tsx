import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { certifications } from "@/content/certifications";
import { Award } from "lucide-react";

export function CertificationsSummary() {
  const t = useTranslations("home.certifications");

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading title={t("title")} subtitle={t("subtitle")} />
          <Button href="/sertifikalar" variant="ghost">
            {t("cta")}
          </Button>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications
            .filter((c) => c.featured)
            .slice(0, 6)
            .map((cert) => (
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
              </div>
            ))}
        </div>
      </Container>
    </section>
  );
}
