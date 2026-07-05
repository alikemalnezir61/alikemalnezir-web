import { experience } from "@/content/experience";

export function CareerJourney() {
  const items = [...experience].reverse();

  return (
    <div className="relative overflow-x-auto pb-4">
      <div className="flex min-w-max gap-0 px-2">
        {items.map((item, index) => (
          <div key={item.company + item.period} className="flex items-start">
            <div className="flex w-64 flex-col items-center text-center">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-accent-500 ring-4 ring-accent-500/15" />
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-accent-500">
                {item.period}
              </p>
              <p className="mt-2 text-sm font-bold text-navy-950">
                {item.role}
              </p>
              <p className="mt-1 text-xs font-medium text-slate-500">
                {item.company}
              </p>
            </div>
            {index < items.length - 1 && (
              <div className="mt-2 h-0.5 w-16 shrink-0 bg-navy-900/10" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
