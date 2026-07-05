import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CtaSection() {
  const t = useTranslations("home.cta");

  return (
    <section className="bg-navy-950 py-16 sm:py-20">
      <Container className="text-center">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          {t("title")}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">{t("subtitle")}</p>
        <div className="mt-8">
          <Button href="/iletisim" variant="accent">
            {t("button")}
          </Button>
        </div>
      </Container>
    </section>
  );
}
