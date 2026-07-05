import { useTranslations } from "next-intl";
import { NewsletterForm } from "./NewsletterForm";

export function NewsletterCard() {
  const t = useTranslations("newsletter");

  return (
    <div className="rounded-2xl border border-navy-900/10 bg-slate-50 p-6">
      <h3 className="text-base font-semibold text-navy-950">{t("title")}</h3>
      <p className="mt-1 text-sm text-slate-600">{t("subtitle")}</p>
      <div className="mt-4">
        <NewsletterForm />
      </div>
    </div>
  );
}
