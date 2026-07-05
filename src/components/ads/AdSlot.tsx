"use client";

import { useEffect } from "react";
import { useConsent } from "@/components/consent/ConsentProvider";

const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export function AdSlot({
  slot,
  format = "auto",
  style,
  className,
  placeholderLabel,
}: {
  slot?: string;
  format?: string;
  style?: React.CSSProperties;
  className?: string;
  placeholderLabel: string;
}) {
  const { consent } = useConsent();
  const canServeAds = consent.advertising && !!ADSENSE_CLIENT && !!slot;

  useEffect(() => {
    if (!canServeAds) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // Reklam engelleyici veya script yüklenmesi başarısız oldu, sessizce yoksay
    }
  }, [canServeAds]);

  if (!canServeAds) {
    return (
      <div
        className={`flex items-center justify-center rounded-xl border border-dashed border-navy-900/20 bg-slate-50 text-xs font-medium text-slate-400 ${className ?? ""}`}
        style={style}
      >
        {placeholderLabel}
      </div>
    );
  }

  return (
    <ins
      className={`adsbygoogle block ${className ?? ""}`}
      style={style}
      data-ad-client={ADSENSE_CLIENT}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive="true"
    />
  );
}
