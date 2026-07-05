export type ConsentCategory = "analytics" | "advertising" | "marketing";

export type ConsentState = {
  necessary: true;
  analytics: boolean;
  advertising: boolean;
  marketing: boolean;
};

export const STORAGE_KEY = "akn_cookie_consent_v1";
export const CONSENT_EVENT = "akn-consent-change";

export const defaultConsent: ConsentState = {
  necessary: true,
  analytics: false,
  advertising: false,
  marketing: false,
};

export const allAcceptedConsent: ConsentState = {
  necessary: true,
  analytics: true,
  advertising: true,
  marketing: true,
};

export function loadConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return { ...defaultConsent, ...parsed, necessary: true };
  } catch {
    return null;
  }
}

export function saveConsent(state: ConsentState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: state }));
}
