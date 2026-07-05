import { Link } from "@/i18n/navigation";

export function EventFilterBar({
  active,
  labels,
}: {
  active: string;
  labels: Record<"all" | "upcoming" | "past" | "online" | "physical", string>;
}) {
  const filters: { key: keyof typeof labels }[] = [
    { key: "all" },
    { key: "upcoming" },
    { key: "past" },
    { key: "online" },
    { key: "physical" },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => {
        const isActive = active === filter.key;
        const href =
          filter.key === "all" ? "/etkinlikler" : `/etkinlikler?filter=${filter.key}`;

        return (
          <Link
            key={filter.key}
            href={href}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              isActive
                ? "border-navy-900 bg-navy-900 text-white"
                : "border-navy-900/10 text-slate-600 hover:border-navy-900/30 hover:text-navy-900"
            }`}
          >
            {labels[filter.key]}
          </Link>
        );
      })}
    </div>
  );
}
