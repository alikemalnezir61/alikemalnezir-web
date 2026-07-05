"use client";

import { Settings } from "lucide-react";
import { OPEN_PREFERENCES_EVENT } from "./CookieBanner";

export function CookiePreferencesButton({
  label,
  variant = "button",
}: {
  label: string;
  variant?: "button" | "link";
}) {
  if (variant === "link") {
    return (
      <button
        onClick={() => window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT))}
        className="hover:text-white"
      >
        {label}
      </button>
    );
  }

  return (
    <button
      onClick={() => window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT))}
      className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy-700"
    >
      <Settings size={16} />
      {label}
    </button>
  );
}
