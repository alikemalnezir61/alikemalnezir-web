import { CalendarPlus } from "lucide-react";
import type { EventItem } from "@/lib/events";

function toGoogleDateString(date: string, time: string) {
  const dt = new Date(`${date}T${time}:00`);
  return dt.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}

export function AddToCalendarButton({ event }: { event: EventItem }) {
  const time = event.time ?? "09:00";
  const start = toGoogleDateString(event.date, time);
  const endDate = new Date(`${event.date}T${time}:00`);
  endDate.setHours(endDate.getHours() + 2);
  const end = endDate.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

  const url = new URL("https://calendar.google.com/calendar/render");
  url.searchParams.set("action", "TEMPLATE");
  url.searchParams.set("text", event.title);
  url.searchParams.set("dates", `${start}/${end}`);
  url.searchParams.set("details", event.description);
  url.searchParams.set("location", event.location);

  return (
    <a
      href={url.toString()}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-navy-900/15 px-5 py-2.5 text-sm font-semibold text-navy-900 hover:border-navy-900/40"
    >
      <CalendarPlus size={16} /> Takvime Ekle
    </a>
  );
}
