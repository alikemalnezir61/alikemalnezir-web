import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { getAllPosts } from "@/lib/blog";
import { getAllEvents } from "@/lib/events";
import { routing } from "@/i18n/routing";

const staticRoutes = [
  "",
  "/hakkimda",
  "/deneyimlerim",
  "/proje-yonetimi-yaklasimim",
  "/blog",
  "/etkinlikler",
  "/hizmetler",
  "/sertifikalar",
  "/iletisim",
  "/gizlilik-politikasi",
  "/kvkk-aydinlatma-metni",
  "/cerez-politikasi",
  "/kullanim-sartlari",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;

    for (const route of staticRoutes) {
      entries.push({
        url: `${siteConfig.url}${prefix}${route}`,
        lastModified: new Date(),
      });
    }

    for (const post of getAllPosts(locale)) {
      entries.push({
        url: `${siteConfig.url}${prefix}/blog/${post.category}/${post.slug}`,
        lastModified: new Date(post.date),
      });
    }

    for (const event of getAllEvents(locale)) {
      entries.push({
        url: `${siteConfig.url}${prefix}/etkinlikler/${event.slug}`,
        lastModified: new Date(event.date),
      });
    }
  }

  return entries;
}
