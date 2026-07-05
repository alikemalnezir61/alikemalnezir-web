"use client";

import { useState, FormEvent } from "react";
import { useTranslations } from "next-intl";
import { Mail, CheckCircle2, XCircle } from "lucide-react";
import { track } from "@/lib/track";

type Status = "idle" | "submitting" | "success" | "error" | "consent-required";

export function NewsletterForm() {
  const t = useTranslations("newsletter");
  const [status, setStatus] = useState<Status>("idle");
  const [consentChecked, setConsentChecked] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!consentChecked) {
      setStatus("consent-required");
      return;
    }

    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("request-failed");

      track("newsletter_signup", { interest: payload.interest });
      setStatus("success");
      form.reset();
      setConsentChecked(false);
    } catch {
      setStatus("error");
    }
  }

  const inputClasses =
    "w-full rounded-xl border border-navy-900/15 px-4 py-2.5 text-sm text-navy-950 placeholder:text-slate-400 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input name="name" required placeholder={t("name")} className={inputClasses} />
      <input
        type="email"
        name="email"
        required
        placeholder={t("email")}
        className={inputClasses}
      />
      <select name="interest" required defaultValue="" className={inputClasses}>
        <option value="" disabled>
          {t("interest")}
        </option>
        <option value="blog">{t("interestOptions.blog")}</option>
        <option value="events">{t("interestOptions.events")}</option>
        <option value="project-management">
          {t("interestOptions.projectManagement")}
        </option>
        <option value="digital-transformation">
          {t("interestOptions.digitalTransformation")}
        </option>
      </select>

      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden"
      />

      <label className="flex items-start gap-2.5 text-xs leading-5 text-slate-500">
        <input
          type="checkbox"
          checked={consentChecked}
          onChange={(e) => {
            setConsentChecked(e.target.checked);
            if (e.target.checked) setStatus("idle");
          }}
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-navy-900/30 text-accent-500 focus:ring-accent-500"
        />
        {t("kvkkConsent")}
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-700 disabled:opacity-60"
      >
        <Mail size={16} />
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
  );
}
