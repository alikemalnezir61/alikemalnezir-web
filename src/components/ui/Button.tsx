import { ComponentProps } from "react";
import clsx from "clsx";
import { Link } from "@/i18n/navigation";

type Variant = "primary" | "secondary" | "ghost" | "outlineLight" | "accent";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-navy-900 text-white hover:bg-navy-700 focus-visible:outline-navy-900",
  secondary:
    "bg-white text-navy-900 border border-navy-900/15 hover:border-navy-900/40 focus-visible:outline-navy-900",
  ghost: "text-navy-900 hover:text-accent-500",
  outlineLight:
    "bg-transparent text-white border border-white/30 hover:border-white/60 focus-visible:outline-white",
  accent:
    "bg-accent-500 text-white hover:bg-accent-400 focus-visible:outline-accent-500",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

export function Button({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentProps<typeof Link>, "href">) {
  return (
    <Link
      href={href}
      className={clsx(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Link>
  );
}
