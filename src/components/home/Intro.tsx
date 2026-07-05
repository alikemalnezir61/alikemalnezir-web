import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";

export function Intro() {
  const t = useTranslations("home.intro");

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-navy-950 sm:text-3xl">
            {t("title")}
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">{t("body")}</p>
        </div>
      </Container>
    </section>
  );
}
