"use client";

import { useState } from "react";
import { Mail, Link2, Check } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/LinkedinIcon";
import { XIcon } from "@/components/ui/XIcon";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { track, TrackEventName } from "@/lib/track";

export function ShareButtons({
  url,
  title,
  trackEventName = "blog_share",
}: {
  url: string;
  title: string;
  trackEventName?: TrackEventName;
}) {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      key: "linkedin",
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: <LinkedinIcon size={16} />,
    },
    {
      key: "x",
      label: "X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: <XIcon size={16} />,
    },
    {
      key: "whatsapp",
      label: "WhatsApp",
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      icon: <WhatsAppIcon size={16} />,
    },
    {
      key: "email",
      label: "E-posta",
      href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
      icon: <Mail size={16} />,
    },
  ];

  async function handleCopy() {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    track(trackEventName, { channel: "copy_link", url });
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      {links.map((link) => (
        <a
          key={link.key}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track(trackEventName, { channel: link.key, url })}
          className="flex items-center gap-2 rounded-full border border-navy-900/10 px-3 py-2 text-xs font-medium text-slate-600 transition-colors hover:border-navy-900/30 hover:text-navy-900"
        >
          {link.icon}
          {link.label}
        </a>
      ))}
      <button
        onClick={handleCopy}
        className="flex items-center gap-2 rounded-full border border-navy-900/10 px-3 py-2 text-xs font-medium text-slate-600 transition-colors hover:border-navy-900/30 hover:text-navy-900"
      >
        {copied ? <Check size={16} /> : <Link2 size={16} />}
        {copied ? "Kopyalandı" : "Linki Kopyala"}
      </button>
    </div>
  );
}
