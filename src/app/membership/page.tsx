import type { Metadata } from "next";
import { PageHero, Section, SectionHeading } from "@/components/Section";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Why and how to join the IEEE Communications Society and the Rwanda Chapter.",
};

const benefits = [
  {
    title: "Publications & Research",
    description:
      "Access to IEEE Communications Magazine, ComSoc journals, and discounted IEEE Xplore content.",
  },
  {
    title: "Conferences & Training",
    description:
      "Member rates for global ComSoc conferences (ICC, GLOBECOM) plus free and discounted online courses and webinars.",
  },
  {
    title: "Local Community",
    description:
      "Chapter events in Rwanda — technical talks, workshops, and networking with local industry and academia.",
  },
  {
    title: "Career Development",
    description:
      "Mentorship, certification paths (like IEEE WCET), volunteer leadership experience, and a global professional network.",
  },
];

const steps = [
  {
    step: "1",
    title: "Join IEEE",
    description:
      "Create an IEEE account and choose a membership grade (student rates are heavily discounted, with reduced pricing for members in Rwanda).",
  },
  {
    step: "2",
    title: "Add ComSoc Membership",
    description:
      "During signup or from your IEEE account, add the Communications Society to your membership.",
  },
  {
    step: "3",
    title: "Connect with the Chapter",
    description:
      "You're automatically part of the Rwanda Chapter based on your location. Reach out and come to an event!",
  },
];

export default function MembershipPage() {
  return (
    <>
      <PageHero
        title="Membership"
        subtitle="Join the world's largest community of communications professionals — and its home in Rwanda."
      />

      <Section>
        <SectionHeading
          eyebrow="Why Join"
          title="Membership Benefits"
          subtitle="IEEE ComSoc membership is an investment in your technical career."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-lg border border-gray-200 bg-surface p-6"
            >
              <h3 className="mb-2 font-semibold text-ieee-dark">{b.title}</h3>
              <p className="text-sm text-gray-600">{b.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading eyebrow="How to Join" title="Three Simple Steps" />
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.step}
              className="rounded-lg border border-gray-200 bg-white p-6"
            >
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-ieee-blue font-bold text-white">
                {s.step}
              </span>
              <h3 className="mb-2 font-semibold text-ieee-dark">{s.title}</h3>
              <p className="text-sm text-gray-600">{s.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="https://www.ieee.org/membership/join"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded bg-ieee-blue px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
          >
            Join IEEE
          </a>
          <a
            href="https://www.comsoc.org/membership"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-ieee-blue px-6 py-3 font-semibold text-ieee-blue transition-colors hover:bg-ieee-blue hover:text-white"
          >
            IEEE ComSoc Membership
          </a>
        </div>
      </Section>

      <Section>
        <div className="rounded-lg border-l-4 border-ieee-gold bg-surface p-6">
          <h3 className="font-semibold text-ieee-dark">
            Students: ask about student membership
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            IEEE student membership is significantly discounted, and ComSoc
            offers additional student resources, competitions, and travel
            grants. If you&apos;re at a Rwandan university, get in touch — we
            can help you and your student branch get started.
          </p>
        </div>
      </Section>
    </>
  );
}
