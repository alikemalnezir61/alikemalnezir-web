"use client";

import type { Sponsor } from "@/content/sponsors";
import { track } from "@/lib/track";

export function SponsorCard({ name, description, logoUrl, url }: Sponsor) {
  const content = (
    <div className="flex items-center gap-4 rounded-2xl border border-navy-900/10 bg-white p-5 transition-shadow hover:shadow-md">
      {logoUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logoUrl}
          alt={name}
          className="h-12 w-12 rounded-lg object-contain"
        />
      ) : (
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-navy-950/5 text-sm font-bold text-navy-900">
          {name.slice(0, 2).toUpperCase()}
        </div>
      )}
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-accent-500">
          Sponsor
        </p>
        <p className="text-sm font-semibold text-navy-950">{name}</p>
        {description && (
          <p className="mt-0.5 text-xs text-slate-500">{description}</p>
        )}
      </div>
    </div>
  );

  if (!url) return content;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onClick={() => track("ad_click", { type: "sponsor", sponsor: name })}
    >
      {content}
    </a>
  );
}

export function SponsorPlaceholder({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center rounded-2xl border border-dashed border-navy-900/20 bg-slate-50 p-5 text-center text-xs font-medium text-slate-400">
      {label}
    </div>
  );
}
