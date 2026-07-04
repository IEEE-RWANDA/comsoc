import Link from "next/link";
import { Section, SectionHeading } from "@/components/Section";
import { events } from "@/data/site";

const focusAreas = [
  {
    title: "Technical Talks & Workshops",
    description:
      "Seminars and hands-on sessions on 5G/6G, IoT, optical networks, satellite communications, and network security.",
  },
  {
    title: "Student & Young Professional Development",
    description:
      "Mentorship, career guidance, and student branch activities that connect the next generation of Rwandan engineers to the global ComSoc community.",
  },
  {
    title: "Industry & Academia Collaboration",
    description:
      "Bridging universities, operators, regulators, and startups to grow Rwanda's communications ecosystem.",
  },
];

export default function Home() {
  const upcoming = events.filter((e) => !e.past).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-ieee-dark via-ieee-blue to-ieee-blue text-white">
        <div className="mx-auto max-w-6xl px-4 py-24">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-ieee-gold">
            IEEE Communications Society
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Advancing Communications Technology in Rwanda
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/85">
            The IEEE ComSoc Rwanda Chapter brings together engineers,
            researchers, students, and industry professionals to advance
            communications and networking technology for Rwanda&apos;s digital
            future.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://www.comsoc.org/membership"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-ieee-gold px-6 py-3 font-semibold text-ieee-dark transition-opacity hover:opacity-90"
            >
              Become a Member
            </a>
            <Link
              href="/events"
              className="rounded border border-white/40 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Upcoming Events
            </Link>
          </div>
        </div>
      </div>

      {/* What we do */}
      <Section>
        <SectionHeading
          eyebrow="What We Do"
          title="Connecting Rwanda to the Global Communications Community"
          subtitle="As part of the joint IEEE Rwanda MTTS/ComSoc/AP-S Chapter under the IEEE Rwanda Subsection, we run activities across three pillars."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {focusAreas.map((area) => (
            <div
              key={area.title}
              className="rounded-lg border border-gray-200 bg-surface p-6"
            >
              <h3 className="mb-2 font-semibold text-ieee-dark">
                {area.title}
              </h3>
              <p className="text-sm text-gray-600">{area.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Upcoming events */}
      <Section className="bg-surface">
        <div className="flex items-end justify-between">
          <SectionHeading eyebrow="Events" title="Upcoming Events" />
          <Link
            href="/events"
            className="mb-10 hidden text-sm font-semibold text-ieee-blue hover:underline sm:block"
          >
            View all events →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {upcoming.map((event) => (
            <div
              key={event.title}
              className="flex flex-col rounded-lg border border-gray-200 bg-white p-6"
            >
              <time className="text-sm font-semibold text-ieee-blue">
                {new Date(event.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <h3 className="mt-2 font-semibold text-ieee-dark">
                {event.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-gray-600">
                {event.description}
              </p>
              <p className="mt-4 text-sm text-gray-500">📍 {event.location}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Membership CTA */}
      <Section>
        <div className="rounded-2xl bg-gradient-to-r from-ieee-dark to-ieee-blue px-8 py-12 text-white sm:px-12">
          <h2 className="text-3xl font-bold">Join the Chapter</h2>
          <p className="mt-4 max-w-2xl text-white/85">
            IEEE ComSoc membership connects you to the world&apos;s largest
            community of communications professionals — journals, conferences,
            training, and a local network here in Rwanda.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/membership"
              className="rounded bg-ieee-gold px-6 py-3 font-semibold text-ieee-dark transition-opacity hover:opacity-90"
            >
              Membership Benefits
            </Link>
            <Link
              href="/contact"
              className="rounded border border-white/40 px-6 py-3 font-semibold transition-colors hover:bg-white/10"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
