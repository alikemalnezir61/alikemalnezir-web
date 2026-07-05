import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/ui/Logo";
import { Mail } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/LinkedinIcon";
import { siteConfig } from "@/content/site";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");

  const links = [
    { href: "/hakkimda", label: tNav("about") },
    { href: "/deneyimlerim", label: tNav("experience") },
    { href: "/proje-yonetimi-yaklasimim", label: tNav("approach") },
    { href: "/blog", label: tNav("blog") },
    { href: "/hizmetler", label: tNav("services") },
    { href: "/sertifikalar", label: tNav("certifications") },
  ];

  return (
    <footer className="border-t border-navy-900/10 bg-navy-950 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="sm:col-span-2 lg:col-span-2">
          <Link href="/" className="flex items-center gap-3">
            <Logo className="h-10 w-10" />
            <span className="text-sm font-semibold text-white">
              Ali Kemal Nezir
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
            {t("tagline")}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">
            {t("quickLinks")}
          </h3>
          <ul className="mt-4 space-y-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-400 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">{t("contact")}</h3>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white"
              >
                <Mail size={16} /> {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white"
              >
                <LinkedinIcon size={16} /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 text-xs text-slate-500 sm:flex-row lg:px-8">
          <p>
            © {new Date().getFullYear()} Ali Kemal Nezir. {t("rights")}
          </p>
          <Link href="/gizlilik-politikasi" className="hover:text-white">
            {t("privacy")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
