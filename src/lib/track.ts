export type TrackEventName =
  | "blog_view"
  | "blog_share"
  | "event_view"
  | "event_register_click"
  | "contact_form_submit"
  | "ad_click"
  | "external_link_click"
  | "newsletter_signup";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

export function track(name: TrackEventName, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }

  if (typeof window.clarity === "function") {
    window.clarity("event", name);
  }
}
