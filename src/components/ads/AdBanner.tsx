import { AdSlot } from "./AdSlot";

export function AdBanner({
  slot,
  label = "Reklam Alanı",
  className = "",
}: {
  slot?: string;
  label?: string;
  className?: string;
}) {
  return (
    <AdSlot
      slot={slot}
      className={`mx-auto w-full max-w-3xl ${className}`}
      style={{ minHeight: 100 }}
      placeholderLabel={label}
    />
  );
}
