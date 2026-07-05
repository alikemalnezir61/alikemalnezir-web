import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";

export function Hero() {
  const t = useTranslations("home.hero");

  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, var(--color-accent-500) 0, transparent 40%), radial-gradient(circle at 80% 60%, var(--color-navy-500) 0, transparent 45%)",
        }}
      />
      <Container className="relative py-24 sm:py-32">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent-300">
          {t("eyebrow")}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {t("title")}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          {t("subtitle")}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/deneyimlerim" variant="accent">
            {t("primaryCta")}
          </Button>
          <Button href="/iletisim" variant="outlineLight">
            {t("secondaryCta")}
          </Button>
        </div>

        <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-300">
          {t.raw("badges").map((item: string) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-accent-400" />
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
