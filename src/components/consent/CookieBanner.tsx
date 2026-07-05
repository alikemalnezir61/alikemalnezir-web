"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useConsent } from "./ConsentProvider";
import { CookiePreferencesModal } from "./CookiePreferencesModal";
import { allAcceptedConsent, defaultConsent } from "@/lib/consent";

export const OPEN_PREFERENCES_EVENT = "akn-open-cookie-prefs";

export function CookieBanner() {
  const t = useTranslations("cookieBanner");
  const { hasChosen, updateConsent } = useConsent();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    function handleOpenRequest() {
      setModalOpen(true);
    }
    window.addEventListener(OPEN_PREFERENCES_EVENT, handleOpenRequest);
    return () =>
      window.removeEventListener(OPEN_PREFERENCES_EVENT, handleOpenRequest);
  }, []);

  return (
    <>
      {!hasChosen && (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t border-navy-900/10 bg-white p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] sm:p-6">
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-6 text-slate-600">
              {t("message")}{" "}
              <Link href="/cerez-politikasi" className="underline hover:text-navy-900">
                {t("linkLabel")}
              </Link>{" "}
              {t("messageSuffix")}
            </p>
            <div className="flex shrink-0 flex-wrap gap-2">
              <button
                onClick={() => updateConsent(defaultConsent)}
                className="rounded-full border border-navy-900/15 px-4 py-2 text-sm font-semibold text-navy-900 hover:border-navy-900/40"
              >
                {t("necessaryOnly")}
              </button>
              <button
                onClick={() => setModalOpen(true)}
                className="rounded-full border border-navy-900/15 px-4 py-2 text-sm font-semibold text-navy-900 hover:border-navy-900/40"
              >
                {t("managePreferences")}
              </button>
              <button
                onClick={() => updateConsent(allAcceptedConsent)}
                className="rounded-full bg-navy-900 px-4 py-2 text-sm font-semibold text-white hover:bg-navy-700"
              >
                {t("acceptAll")}
              </button>
            </div>
          </div>
        </div>
      )}

      <CookiePreferencesModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
