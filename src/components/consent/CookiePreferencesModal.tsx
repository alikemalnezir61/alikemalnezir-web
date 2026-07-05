"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { X } from "lucide-react";
import { useConsent } from "./ConsentProvider";
import { allAcceptedConsent, ConsentState, defaultConsent } from "@/lib/consent";

export function CookiePreferencesModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const t = useTranslations("cookieModal");
  const { consent, updateConsent } = useConsent();
  const [draft, setDraft] = useState<ConsentState>(consent);

  const categories: {
    key: keyof Omit<ConsentState, "necessary">;
    title: string;
    description: string;
  }[] = [
    {
      key: "analytics",
      title: t("analyticsTitle"),
      description: t("analyticsDescription"),
    },
    {
      key: "advertising",
      title: t("advertisingTitle"),
      description: t("advertisingDescription"),
    },
    {
      key: "marketing",
      title: t("marketingTitle"),
      description: t("marketingDescription"),
    },
  ];

  useEffect(() => {
    if (open) setDraft(consent);
  }, [open, consent]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-navy-950/50 p-4 sm:items-center">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
        <div className="flex items-start justify-between">
          <h2 className="text-lg font-bold text-navy-950">{t("title")}</h2>
          <button
            onClick={onClose}
            aria-label={t("close")}
            className="text-slate-400 hover:text-navy-900"
          >
            <X size={20} />
          </button>
        </div>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          {t("description")}
        </p>

        <div className="mt-5 space-y-4">
          <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">
            <div>
              <p className="text-sm font-semibold text-navy-950">
                {t("necessaryTitle")}
              </p>
              <p className="mt-0.5 text-xs text-slate-500">
                {t("necessaryDescription")}
              </p>
            </div>
            <span className="rounded-full bg-navy-900/10 px-3 py-1 text-xs font-semibold text-navy-900">
              {t("alwaysOn")}
            </span>
          </div>

          {categories.map((category) => (
            <div
              key={category.key}
              className="flex items-center justify-between gap-4 rounded-xl border border-navy-900/10 p-4"
            >
              <div>
                <p className="text-sm font-semibold text-navy-950">
                  {category.title}
                </p>
                <p className="mt-0.5 text-xs text-slate-500">
                  {category.description}
                </p>
              </div>
              <button
                role="switch"
                aria-checked={draft[category.key]}
                onClick={() =>
                  setDraft((prev) => ({
                    ...prev,
                    [category.key]: !prev[category.key],
                  }))
                }
                className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
                  draft[category.key] ? "bg-accent-500" : "bg-slate-300"
                }`}
              >
                <span
                  className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
                    draft[category.key] ? "translate-x-5" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={() => {
              updateConsent(allAcceptedConsent);
              onClose();
            }}
            className="rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy-700"
          >
            {t("acceptAll")}
          </button>
          <button
            onClick={() => {
              updateConsent(draft);
              onClose();
            }}
            className="rounded-full border border-navy-900/15 px-5 py-2.5 text-sm font-semibold text-navy-900 hover:border-navy-900/40"
          >
            {t("savePreferences")}
          </button>
          <button
            onClick={() => {
              updateConsent(defaultConsent);
              onClose();
            }}
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-slate-500 hover:text-navy-900"
          >
            {t("necessaryOnly")}
          </button>
        </div>
      </div>
    </div>
  );
}
