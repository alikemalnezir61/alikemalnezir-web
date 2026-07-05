"use client";

import { useState } from "react";
import { Briefcase, MapPin, CheckCircle2, ChevronDown } from "lucide-react";
import type { ExperienceEntry } from "@/content/experience";

const RESPONSIBILITIES_PREVIEW_COUNT = 6;

export function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = entry.responsibilities.length > RESPONSIBILITIES_PREVIEW_COUNT;
  const visibleResponsibilities = expanded
    ? entry.responsibilities
    : entry.responsibilities.slice(0, RESPONSIBILITIES_PREVIEW_COUNT);

  return (
    <div className="relative">
      <span className="absolute -left-[2.55rem] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-navy-900 text-white">
        <Briefcase size={13} />
      </span>

      <div className="rounded-2xl border border-navy-900/10 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-navy-900/5 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-bold text-navy-950">{entry.company}</h3>
            <p className="mt-0.5 text-base font-semibold text-accent-500">
              {entry.role}
            </p>
          </div>
          <div className="text-right text-sm text-slate-500">
            <p className="font-semibold text-navy-900">{entry.period}</p>
            <p className="mt-0.5 flex items-center justify-end gap-1">
              <MapPin size={13} /> {entry.location}
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {entry.sectors.map((sector) => (
            <span
              key={sector}
              className="rounded-full bg-navy-950/5 px-3 py-1 text-xs font-medium text-navy-900"
            >
              {sector}
            </span>
          ))}
        </div>

        <p className="mt-4 text-sm leading-6 text-slate-600">{entry.summary}</p>

        <div className="mt-6">
          <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Başlıca Sorumluluklar
          </h4>
          <ul className="mt-3 grid gap-x-6 gap-y-1.5 text-sm leading-6 text-slate-600 sm:grid-cols-2">
            {visibleResponsibilities.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-accent-500">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          {hasMore && (
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="mt-3 flex items-center gap-1 text-xs font-semibold text-accent-500 hover:text-navy-900"
            >
              <ChevronDown
                size={14}
                className={`transition-transform ${expanded ? "rotate-180" : ""}`}
              />
              {expanded
                ? "Daha Az Göster"
                : `Tümünü Gör (+${entry.responsibilities.length - RESPONSIBILITIES_PREVIEW_COUNT})`}
            </button>
          )}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Kullanılan Metodolojiler
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {entry.methodologies.map((m) => (
                <span
                  key={m}
                  className="rounded-full border border-navy-900/15 px-3 py-1 text-xs font-medium text-navy-900"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Kullanılan Teknolojiler
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {entry.technologies.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-navy-900/15 px-3 py-1 text-xs font-medium text-navy-900"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-xl bg-accent-500/5 p-5">
          <h4 className="text-xs font-semibold uppercase tracking-wide text-accent-500">
            Kazanımlar
          </h4>
          <ul className="mt-3 space-y-2">
            {entry.achievements.map((a) => (
              <li key={a} className="flex gap-2 text-sm leading-6 text-slate-700">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent-500" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
