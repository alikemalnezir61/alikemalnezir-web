"use client";

import { ExternalLink } from "lucide-react";
import { track } from "@/lib/track";

export function EventRegisterButton({
  url,
  eventTitle,
}: {
  url: string;
  eventTitle: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("event_register_click", { event: eventTitle })}
      className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-white hover:bg-accent-400"
    >
      Kayıt Ol <ExternalLink size={16} />
    </a>
  );
}
