import {
  LayoutDashboard,
  HeartPulse,
  Building2,
  Sparkles,
  ClipboardList,
  Settings,
  ShieldAlert,
  BrainCircuit,
  LifeBuoy,
  Building,
  Rocket,
  ShieldCheck,
  Wrench,
  Users,
  Code2,
  Network,
  Clock,
  Award,
  Layers,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  LayoutDashboard,
  HeartPulse,
  Building2,
  Sparkles,
  ClipboardList,
  Settings,
  ShieldAlert,
  BrainCircuit,
  LifeBuoy,
  Building,
  Rocket,
  ShieldCheck,
  Wrench,
  Users,
  Code2,
  Network,
  Clock,
  Award,
  Layers,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Component = iconMap[name] ?? Sparkles;
  return <Component className={className} strokeWidth={1.75} />;
}
