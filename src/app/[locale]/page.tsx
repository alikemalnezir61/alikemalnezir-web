import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { ExpertiseGrid } from "@/components/home/ExpertiseGrid";
import { FeaturedBlog } from "@/components/home/FeaturedBlog";
import { ExperienceSummary } from "@/components/home/ExperienceSummary";
import { CertificationsSummary } from "@/components/home/CertificationsSummary";
import { SponsorsHome } from "@/components/home/SponsorsHome";
import { CtaSection } from "@/components/home/CtaSection";
import { siteConfig } from "@/content/site";
import { safeJsonLd } from "@/lib/safe-json-ld";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.title,
    url: siteConfig.url,
    email: siteConfig.email,
    sameAs: [siteConfig.linkedin],
    address: {
      "@type": "PostalAddress",
      addressLocality: "İstanbul",
      addressCountry: "TR",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />
      <Hero />
      <Intro />
      <ExpertiseGrid />
      <FeaturedBlog locale={locale} />
      <ExperienceSummary />
      <CertificationsSummary />
      <SponsorsHome />
      <CtaSection />
    </>
  );
}
