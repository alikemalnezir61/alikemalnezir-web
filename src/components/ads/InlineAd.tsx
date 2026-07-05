import { AdSlot } from "./AdSlot";

export function InlineAd({ slot }: { slot?: string }) {
  return (
    <AdSlot
      slot={slot}
      className="my-8 w-full"
      style={{ minHeight: 200 }}
      placeholderLabel="İçerik İçi Reklam Alanı"
    />
  );
}
