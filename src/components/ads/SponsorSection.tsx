import { sponsors } from "@/content/sponsors";
import { SponsorCard, SponsorPlaceholder } from "./SponsorCard";

export function SponsorSection({
  title,
  placeholderLabel,
}: {
  title?: string;
  placeholderLabel: string;
}) {
  return (
    <div>
      {title && (
        <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          {title}
        </h3>
      )}
      <div className={title ? "mt-4 grid gap-4 sm:grid-cols-2" : "grid gap-4 sm:grid-cols-2"}>
        {sponsors.length > 0 ? (
          sponsors.map((sponsor) => (
            <SponsorCard key={sponsor.name} {...sponsor} />
          ))
        ) : (
          <SponsorPlaceholder label={placeholderLabel} />
        )}
      </div>
    </div>
  );
}
