import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
import { Calendar, MapPin, Video, Users, ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Link } from "@/i18n/navigation";
import { getAllEvents, getEventBySlug, getSimilarEvents } from "@/lib/events";
import { getEventCategoryLabel } from "@/lib/event-categories";
import { EventStatusBadge } from "@/components/events/EventStatusBadge";
import { EventRegisterButton } from "@/components/events/EventRegisterButton";
import { AddToCalendarButton } from "@/components/events/AddToCalendarButton";
import { SimilarEvents } from "@/components/events/SimilarEvents";
import { ShareButtons } from "@/components/share/ShareButtons";
import { SponsorSection } from "@/components/ads/SponsorSection";
import { NewsletterCard } from "@/components/newsletter/NewsletterCard";
import { TrackView } from "@/components/analytics/TrackView";
import { siteConfig } from "@/content/site";
import { breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  const locales = ["tr", "en"];
  return locales.flatMap((locale) =>
    getAllEvents(locale).map((event) => ({ locale, slug: event.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const event = getEventBySlug(locale, slug);
  if (!event) return {};

  return {
    title: event.title,
    description: event.description,
    alternates: { canonical: `/etkinlikler/${event.slug}` },
    openGraph: {
      title: event.title,
      description: event.description,
      type: "article",
    },
  };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const event = getEventBySlug(locale, slug);

  if (!event) {
    notFound();
  }

  const tSponsors = await getTranslations("sponsors");
  const tEvents = await getTranslations("events");
  const tCommon = await getTranslations("common");
  const eventUrl = `${siteConfig.url}/etkinlikler/${event.slug}`;
  const similarEvents = getSimilarEvents(locale, event);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.description,
    startDate: event.time ? `${event.date}T${event.time}` : event.date,
    eventAttendanceMode: event.isOnline
      ? "https://schema.org/OnlineEventAttendanceMode"
      : "https://schema.org/OfflineEventAttendanceMode",
    eventStatus:
      event.status === "cancelled"
        ? "https://schema.org/EventCancelled"
        : "https://schema.org/EventScheduled",
    location: event.isOnline
      ? { "@type": "VirtualLocation", url: eventUrl }
      : { "@type": "Place", name: event.location },
    organizer: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    url: eventUrl,
  };

  const breadcrumbs = breadcrumbSchema([
    { name: "Ana Sayfa", url: siteConfig.url },
    { name: "Etkinlikler", url: `${siteConfig.url}/etkinlikler` },
    { name: event.title, url: eventUrl },
  ]);

  return (
    <Container className="py-16 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <TrackView eventName="event_view" params={{ slug: event.slug }} />

      <Link
        href="/etkinlikler"
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-navy-900"
      >
        <ArrowLeft size={16} /> {tEvents("backToEvents")}
      </Link>

      <div className="mt-8 grid gap-12 lg:grid-cols-3">
        <article className="lg:col-span-2">
          <div className="flex items-center justify-between gap-2">
            <span className="text-sm font-semibold uppercase tracking-wide text-accent-500">
              {getEventCategoryLabel(event.category, locale)}
            </span>
            <EventStatusBadge status={event.status} />
          </div>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
            {event.title}
          </h1>

          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
            <span className="flex items-center gap-2">
              <Calendar size={16} className="text-accent-500" />
              {new Date(event.date).toLocaleDateString(
                locale === "en" ? "en-US" : "tr-TR",
                { year: "numeric", month: "long", day: "numeric" }
              )}
              {event.time && ` · ${event.time}`}
            </span>
            <span className="flex items-center gap-2">
              {event.isOnline ? (
                <Video size={16} className="text-accent-500" />
              ) : (
                <MapPin size={16} className="text-accent-500" />
              )}
              {event.location}
            </span>
            {event.speakers && event.speakers.length > 0 && (
              <span className="flex items-center gap-2">
                <Users size={16} className="text-accent-500" />
                {event.speakers.join(", ")}
              </span>
            )}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {event.registrationUrl && event.status === "upcoming" && (
              <EventRegisterButton
                url={event.registrationUrl}
                eventTitle={event.title}
              />
            )}
            {event.status === "upcoming" && (
              <AddToCalendarButton event={event} />
            )}
          </div>

          <div className="prose-content mt-10">
            <MDXRemote source={event.content} />
          </div>

          <div className="mt-8 border-t border-navy-900/10 pt-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
              {tCommon("share")}
            </p>
            <ShareButtons url={eventUrl} title={event.title} trackEventName="blog_share" />
          </div>

          <SimilarEvents events={similarEvents} locale={locale} />
        </article>

        <aside className="space-y-8 lg:col-span-1">
          <SponsorSection
            title={tSponsors("eventTitle")}
            placeholderLabel={tSponsors("eventPlaceholder")}
          />
          <NewsletterCard />
        </aside>
      </div>
    </Container>
  );
}
