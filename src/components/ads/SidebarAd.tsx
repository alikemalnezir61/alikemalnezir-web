import { AdSlot } from "./AdSlot";

export function SidebarAd({ slot }: { slot?: string }) {
  return (
    <AdSlot
      slot={slot}
      className="w-full"
      style={{ minHeight: 250 }}
      placeholderLabel="Sidebar Reklam Alanı"
    />
  );
}
