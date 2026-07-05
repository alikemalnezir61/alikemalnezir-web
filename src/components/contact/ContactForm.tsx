"use client";

import { useState, FormEvent } from "react";
import { useTranslations } from "next-intl";
import { Send, CheckCircle2, XCircle } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const t = useTranslations("contact.form");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/iletisim", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("request-failed");

      setStatus("success");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClasses =
    "w-full rounded-xl border border-navy-900/15 px-4 py-3 text-sm text-navy-950 placeholder:text-slate-400 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="name"
          required
          placeholder={t("name")}
          className={inputClasses}
        />
        <input
          type="email"
          name="email"
          required
          placeholder={t("email")}
          className={inputClasses}
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="company"
          placeholder={t("company")}
          className={inputClasses}
        />
        <input
          name="subject"
          required
          placeholder={t("subject")}
          className={inputClasses}
        />
      </div>
      <textarea
        name="message"
        required
        rows={6}
        placeholder={t("message")}
        className={inputClasses}
      />

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
    </form>
  );
}
