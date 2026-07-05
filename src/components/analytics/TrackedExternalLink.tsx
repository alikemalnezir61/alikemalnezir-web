"use client";

import { AnchorHTMLAttributes, ReactNode } from "react";
import { track } from "@/lib/track";

export function TrackedExternalLink({
  href,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("external_link_click", { url: href })}
      {...props}
    >
      {children}
    </a>
  );
}
