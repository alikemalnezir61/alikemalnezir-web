import type { EventStatus } from "@/lib/events";

const statusConfig: Record<EventStatus, { label: string; className: string }> = {
  upcoming: { label: "Yaklaşan", className: "bg-emerald-50 text-emerald-700" },
  completed: { label: "Tamamlandı", className: "bg-slate-100 text-slate-600" },
  cancelled: { label: "İptal Edildi", className: "bg-red-50 text-red-600" },
};

export function EventStatusBadge({ status }: { status: EventStatus }) {
  const config = statusConfig[status];
  return (
    <span
      className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${config.className}`}
    >
      {config.label}
    </span>
  );
}
