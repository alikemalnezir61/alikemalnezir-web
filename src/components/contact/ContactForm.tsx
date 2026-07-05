"use client";

import { useState, FormEvent } from "react";
import Script from "next/script";
import { useTranslations } from "next-intl";
import { Send, CheckCircle2, XCircle } from "lucide-react";
import { track } from "@/lib/track";

type Status = "idle" | "submitting" | "success" | "error" | "consent-required";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, opts: { action: string }) => Promise<string>;
    };
  }
}

export function ContactForm() {
  const t = useTranslations("contact.form");
  const [status, setStatus] = useState<Status>("idle");
  const [consentChecked, setConsentChecked] = useState(false);

  async function getRecaptchaToken(): Promise<string | undefined> {
    if (!RECAPTCHA_SITE_KEY || !window.grecaptcha) return undefined;

    return new Promise((resolve) => {
      window.grecaptcha!.ready(() => {
        window
          .grecaptcha!.execute(RECAPTCHA_SITE_KEY, { action: "contact" })
          .then(resolve)
          .catch(() => resolve(undefined));
      });
    });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!consentChecked) {
      setStatus("consent-required");
      return;
    }

    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (String(formData.get("company_website") ?? "").length > 0) {
      setStatus("success");
      form.reset();
      return;
    }

    const payload = Object.fromEntries(formData.entries());
    const recaptchaToken = await getRecaptchaToken();

    try {
      const res = await fetch("/api/iletisim", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, recaptchaToken }),
      });

      if (!res.ok) throw new Error("request-failed");

      track("contact_form_submit", { requestType: payload.requestType });
      setStatus("success");
      form.reset();
      setConsentChecked(false);
    } catch {
      setStatus("error");
    }
  }

  const inputClasses =
    "w-full rounded-xl border border-navy-900/15 px-4 py-3 text-sm text-navy-950 placeholder:text-slate-400 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20";

  return (
    <>
      {RECAPTCHA_SITE_KEY && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <input name="name" required placeholder={t("name")} className={inputClasses} />
          <input
            type="email"
            name="email"
            required
            placeholder={t("email")}
            className={inputClasses}
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <input name="phone" placeholder={t("phone")} className={inputClasses} />
          <input name="company" placeholder={t("company")} className={inputClasses} />
        </div>

        <select name="requestType" required defaultValue="" className={inputClasses}>
          <option value="" disabled>
            {t("requestType")}
          </option>
          <option value="consulting">{t("requestTypeOptions.consulting")}</option>
          <option value="speaking">{t("requestTypeOptions.speaking")}</option>
          <option value="collaboration">{t("requestTypeOptions.collaboration")}</option>
          <option value="training">{t("requestTypeOptions.training")}</option>
          <option value="other">{t("requestTypeOptions.other")}</option>
        </select>

        <input name="subject" required placeholder={t("subject")} className={inputClasses} />

        <textarea
          name="message"
          required
          rows={6}
          placeholder={t("message")}
          className={inputClasses}
        />

        <input
          type="text"
          name="company_website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden"
        />

        <label className="flex items-start gap-3 text-sm text-slate-600">
          <input
            type="checkbox"
            checked={consentChecked}
            onChange={(e) => {
              setConsentChecked(e.target.checked);
              if (e.target.checked) setStatus("idle");
            }}
            className="mt-1 h-4 w-4 shrink-0 rounded border-navy-900/30 text-accent-500 focus:ring-accent-500"
          />
          {t("kvkkConsent")}
        </label>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-700 disabled:opacity-60"
        >
          <Send size={16} />
          {t("submit")}
        </button>

        {status === "success" && (
          <p className="flex items-center gap-2 text-sm font-medium text-emerald-600">
            <CheckCircle2 size={16} /> {t("success")}
          </p>
        )}
        {status === "error" && (
          <p className="flex items-center gap-2 text-sm font-medium text-red-600">
            <XCircle size={16} /> {t("error")}
          </p>
        )}
        {status === "consent-required" && (
          <p className="flex items-center gap-2 text-sm font-medium text-red-600">
            <XCircle size={16} /> {t("consentRequired")}
          </p>
        )}
      </form>
    </>
  );
}
