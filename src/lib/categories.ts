export type Category = {
  slug: string;
  label: { tr: string; en: string };
};

export const categories: Category[] = [
  { slug: "proje-yonetimi", label: { tr: "Proje Yönetimi", en: "Project Management" } },
  { slug: "it-operasyonlari", label: { tr: "IT Operasyonları", en: "IT Operations" } },
  { slug: "dijital-donusum", label: { tr: "Dijital Dönüşüm", en: "Digital Transformation" } },
  { slug: "saglik-bilisimi", label: { tr: "Sağlık Bilişimi", en: "Healthcare Informatics" } },
  { slug: "pmo", label: { tr: "PMO", en: "PMO" } },
  { slug: "itsm", label: { tr: "ITSM", en: "ITSM" } },
  { slug: "liderlik", label: { tr: "Liderlik", en: "Leadership" } },
  {
    slug: "yapay-zeka-ve-proje-yonetimi",
    label: { tr: "Yapay Zeka ve Proje Yönetimi", en: "AI & Project Management" },
  },
];

export function getCategoryLabel(slug: string, locale: string): string {
  const category = categories.find((c) => c.slug === slug);
  if (!category) return slug;
  return locale === "en" ? category.label.en : category.label.tr;
}
