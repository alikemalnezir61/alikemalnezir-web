"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex items-center gap-1 rounded-full border border-navy-900/10 p-1 text-xs font-semibold">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => router.replace(pathname, { locale: loc })}
          className={`rounded-full px-2.5 py-1 uppercase transition-colors ${
            locale === loc
              ? "bg-navy-900 text-white"
              : "text-slate-500 hover:text-navy-900"
          }`}
          aria-current={locale === loc}
        >
          {loc}
        </button>
      ))}
    </div>
  );
}
