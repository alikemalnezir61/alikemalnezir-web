import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { experience } from "@/content/experience";
import { Briefcase } from "lucide-react";

export function ExperienceSummary() {
  const t = useTranslations("home.experienceSummary");

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading title={t("title")} subtitle={t("subtitle")} />
          <Button href="/deneyimlerim" variant="ghost">
            {t("cta")}
          </Button>
        </div>

        <div className="mt-10 space-y-6">
          {experience.slice(0, 3).map((item) => (
            <div
              key={item.role + item.company}
              className="flex gap-5 rounded-2xl border border-navy-900/10 bg-white p-6"
            >
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy-950/5 text-navy-900">
                <Briefcase size={20} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-accent-500">
                  {item.period}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-navy-950">
                  {item.role}
                </h3>
                <p className="text-sm font-medium text-slate-500">
                  {item.company} · {item.sector}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
