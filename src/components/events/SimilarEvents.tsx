import type { EventItem } from "@/lib/events";
import { EventCard } from "./EventCard";

export function SimilarEvents({
  events,
  locale,
}: {
  events: EventItem[];
  locale: string;
}) {
  if (events.length === 0) return null;

  return (
    <div className="mt-16 border-t border-navy-900/10 pt-10">
      <h3 className="text-lg font-semibold text-navy-950">Benzer Etkinlikler</h3>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <EventCard key={event.slug} event={event} locale={locale} />
        ))}
      </div>
    </div>
  );
}
