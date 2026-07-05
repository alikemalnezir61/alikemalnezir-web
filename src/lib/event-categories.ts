export type EventCategory = {
  slug: string;
  label: { tr: string; en: string };
};

export const eventCategories: EventCategory[] = [
  { slug: "konferans", label: { tr: "Konferans", en: "Conference" } },
  { slug: "webinar", label: { tr: "Webinar", en: "Webinar" } },
  { slug: "calistay", label: { tr: "Çalıştay", en: "Workshop" } },
  { slug: "panel", label: { tr: "Panel", en: "Panel" } },
  { slug: "egitim", label: { tr: "Eğitim", en: "Training" } },
  { slug: "networking", label: { tr: "Networking", en: "Networking" } },
];

export function getEventCategoryLabel(slug: string, locale: string): string {
  const category = eventCategories.find((c) => c.slug === slug);
  if (!category) return slug;
  return locale === "en" ? category.label.en : category.label.tr;
}
