import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EventCard } from "@/components/events/EventCard";
import { EventFilterBar } from "@/components/events/EventFilterBar";
import { getAllEvents } from "@/lib/events";

const copy = {
  tr: {
    eyebrow: "Etkinlikler",
    title: "Etkinlikler",
    seoTitle: "Etkinlikler – Konferans, Webinar ve Eğitimler",
    seoDescription:
      "Proje yönetimi ve dijital dönüşüm alanında katıldığım, düzenlediğim konferans, webinar, çalıştay ve eğitim etkinlikleri.",
    subtitle:
      "Katıldığım, düzenlediğim veya duyurmak istediğim etkinlikler.",
    empty: "Bu filtreye uygun etkinlik bulunmuyor.",
  },
  en: {
    eyebrow: "Events",
    title: "Events",
    seoTitle: "Events – Conferences, Webinars & Trainings",
    seoDescription:
      "Conferences, webinars, workshops and training events I attend or organize in project management and digital transformation.",
    subtitle:
      "Events I'm attending, organizing, or want to announce.",
    empty: "No events match this filter.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const c = copy[locale as keyof typeof copy] ?? copy.tr;
  return { title: c.seoTitle, description: c.seoDescription };
}

export default async function EventsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ filter?: string }>;
}) {
  const { locale } = await params;
  const { filter = "all" } = await searchParams;
  const c = copy[locale as keyof typeof copy] ?? copy.tr;
  const tFilters = await getTranslations("events.filters");

  const allEvents = getAllEvents(locale);

  const filteredEvents = allEvents.filter((event) => {
    switch (filter) {
      case "upcoming":
        return event.status === "upcoming";
      case "past":
        return event.status === "completed";
      case "online":
        return event.isOnline;
      case "physical":
        return !event.isOnline;
      default:
        return true;
    }
  });

  return (
    <Container className="py-16 sm:py-20">
      <SectionHeading eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle} />

      <div className="mt-8">
        <EventFilterBar
          active={filter}
          labels={{
            all: tFilters("all"),
            upcoming: tFilters("upcoming"),
            past: tFilters("past"),
            online: tFilters("online"),
            physical: tFilters("physical"),
          }}
        />
      </div>

      {filteredEvents.length === 0 ? (
        <p className="mt-10 text-slate-500">{c.empty}</p>
      ) : (
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <EventCard key={event.slug} event={event} locale={locale} />
          ))}
        </div>
      )}
    </Container>
  );
}
