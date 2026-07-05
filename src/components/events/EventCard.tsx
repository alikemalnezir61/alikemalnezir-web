import { Link } from "@/i18n/navigation";
import { Calendar, MapPin, Video } from "lucide-react";
import type { EventItem } from "@/lib/events";
import { getEventCategoryLabel } from "@/lib/event-categories";
import { EventStatusBadge } from "./EventStatusBadge";

export function EventCard({
  event,
  locale,
}: {
  event: EventItem;
  locale: string;
}) {
  return (
    <Link
      href={`/etkinlikler/${event.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-navy-900/10 bg-white transition-shadow hover:shadow-lg hover:shadow-navy-900/5"
    >
      <div className="flex h-36 items-center justify-center bg-gradient-to-br from-navy-900 to-navy-600">
        <Calendar className="h-10 w-10 text-white/70" strokeWidth={1.5} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-accent-500">
            {getEventCategoryLabel(event.category, locale)}
          </span>
          <EventStatusBadge status={event.status} />
        </div>
        <h3 className="mt-2 text-lg font-semibold text-navy-950 group-hover:text-accent-500">
          {event.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-slate-600 line-clamp-3">
          {event.description}
        </p>
        <div className="mt-4 flex flex-col gap-1.5 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <Calendar size={13} />
            {new Date(event.date).toLocaleDateString(
              locale === "en" ? "en-US" : "tr-TR",
              { year: "numeric", month: "long", day: "numeric" }
            )}
            {event.time && ` · ${event.time}`}
          </span>
          <span className="flex items-center gap-1.5">
            {event.isOnline ? <Video size={13} /> : <MapPin size={13} />}
            {event.location}
          </span>
        </div>
      </div>
    </Link>
  );
}
