import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SponsorSection } from "@/components/ads/SponsorSection";

export function SponsorsHome() {
  const t = useTranslations("sponsors");

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container>
        <SectionHeading title={t("homeTitle")} subtitle={t("homeSubtitle")} />
        <div className="mt-10">
          <SponsorSection placeholderLabel={t("homePlaceholder")} />
        </div>
      </Container>
    </section>
  );
}
