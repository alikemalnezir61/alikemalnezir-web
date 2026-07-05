import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/content/site";
import { Mail, MapPin } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/LinkedinIcon";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return { title: t("title"), description: t("subtitle") };
}

export default async function ContactPage() {
  const t = await getTranslations("contact");

  return (
    <Container className="py-16 sm:py-20">
      <SectionHeading eyebrow={t("title")} title={t("subtitle")} />

      <div className="mt-12 grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ContactForm />
        </div>

        <aside className="space-y-4 h-fit rounded-2xl border border-navy-900/10 bg-slate-50 p-6">
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-3 text-sm font-medium text-slate-700 hover:text-navy-900"
          >
            <Mail size={18} className="text-accent-500" /> {siteConfig.email}
          </a>
          <div className="flex items-center gap-3 text-sm font-medium text-slate-700">
            <MapPin size={18} className="text-accent-500" />
            {t("locationValue")}
          </div>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm font-medium text-slate-700 hover:text-navy-900"
          >
            <LinkedinIcon size={18} className="text-accent-500" /> LinkedIn
          </a>
        </aside>
      </div>
    </Container>
  );
}
