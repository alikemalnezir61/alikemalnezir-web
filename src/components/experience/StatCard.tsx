import { Icon } from "@/lib/icon-map";

export function StatCard({
  icon,
  value,
  label,
}: {
  icon: string;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur">
      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-accent-300">
        <Icon name={icon} className="h-5 w-5" />
      </div>
      <p className="mt-3 text-2xl font-bold text-white">{value}</p>
      <p className="mt-1 text-xs font-medium text-slate-300">{label}</p>
    </div>
  );
}
