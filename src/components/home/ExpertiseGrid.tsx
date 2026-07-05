import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { expertiseAreas } from "@/content/expertise";
import { Icon } from "@/lib/icon-map";

export function ExpertiseGrid() {
  const t = useTranslations("home.expertise");

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container>
        <SectionHeading
          title={t("title")}
          subtitle={t("subtitle")}
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {expertiseAreas.map((area) => (
            <div
              key={area.title}
              className="rounded-2xl border border-navy-900/10 bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-navy-900/5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-950/5 text-navy-900">
                <Icon name={area.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-navy-950">
                {area.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
