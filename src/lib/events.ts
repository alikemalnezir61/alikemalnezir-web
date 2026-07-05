import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type EventStatus = "upcoming" | "completed" | "cancelled";

export type EventFrontmatter = {
  title: string;
  description: string;
  date: string;
  time?: string;
  location: string;
  isOnline: boolean;
  speakers?: string[];
  category: string;
  coverImage?: string;
  registrationUrl?: string;
  status: EventStatus;
  draft?: boolean;
};

export type EventItem = EventFrontmatter & {
  slug: string;
  content: string;
};

const EVENTS_DIR = path.join(process.cwd(), "content", "events");

function getEventsDir(locale: string) {
  return path.join(EVENTS_DIR, locale);
}

export function getAllEvents(locale: string): EventItem[] {
  const dir = getEventsDir(locale);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  const events = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(dir, file), "utf-8");
    const { data, content } = matter(raw);

    return {
      ...(data as EventFrontmatter),
      slug,
      content,
    };
  });

  return events
    .filter((event) => !event.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getEventBySlug(locale: string, slug: string): EventItem | null {
  return getAllEvents(locale).find((event) => event.slug === slug) ?? null;
}

export function getUpcomingEvents(locale: string): EventItem[] {
  return getAllEvents(locale)
    .filter((event) => event.status === "upcoming")
    .sort((a, b) => (a.date > b.date ? 1 : -1));
}

export function getPastEvents(locale: string): EventItem[] {
  return getAllEvents(locale).filter((event) => event.status === "completed");
}

export function getSimilarEvents(
  locale: string,
  current: EventItem,
  count = 3
): EventItem[] {
  return getAllEvents(locale)
    .filter((event) => event.slug !== current.slug)
    .filter((event) => event.category === current.category)
    .slice(0, count);
}
