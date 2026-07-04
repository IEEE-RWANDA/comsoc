import type { Metadata } from "next";
import { PageHero, Section, SectionHeading } from "@/components/Section";
import { events, type EventItem } from "@/data/site";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming and past events of the IEEE ComSoc Rwanda Chapter — workshops, technical talks, and networking.",
};

function EventCard({ event }: { event: EventItem }) {
  return (
    <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 sm:flex-row sm:gap-6">
      <div className="mb-4 flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-lg bg-ieee-blue text-white sm:mb-0">
        <span className="text-2xl font-bold">
          {new Date(event.date).getDate()}
        </span>
        <span className="text-xs uppercase">
          {new Date(event.date).toLocaleDateString("en-GB", { month: "short" })}
        </span>
        <span className="text-xs">{new Date(event.date).getFullYear()}</span>
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-ieee-dark">{event.title}</h3>
        <p className="mt-1 text-sm text-gray-500">📍 {event.location}</p>
        <p className="mt-3 text-sm text-gray-600">{event.description}</p>
        {event.registrationUrl && (
          <a
            href={event.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded bg-ieee-blue px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Register
          </a>
        )}
      </div>
    </div>
  );
}

export default function EventsPage() {
  const upcoming = events.filter((e) => !e.past);
  const past = events.filter((e) => e.past);

  return (
    <>
      <PageHero
        title="Events"
        subtitle="Workshops, technical talks, and networking sessions — open to members, students, and the wider tech community."
      />

      <Section>
        <SectionHeading eyebrow="Calendar" title="Upcoming Events" />
        {upcoming.length > 0 ? (
          <div className="space-y-6">
            {upcoming.map((event) => (
              <EventCard key={event.title} event={event} />
            ))}
          </div>
        ) : (
          <p className="text-gray-600">
            No upcoming events scheduled yet — check back soon or follow us on
            social media for announcements.
          </p>
        )}
      </Section>

      {past.length > 0 && (
        <Section className="bg-surface">
          <SectionHeading eyebrow="Archive" title="Past Events" />
          <div className="space-y-6">
            {past.map((event) => (
              <EventCard key={event.title} event={event} />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
