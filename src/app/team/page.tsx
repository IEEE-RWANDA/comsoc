import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, Section, SectionHeading } from "@/components/Section";
import { team } from "@/data/site";

export const metadata: Metadata = {
  title: "Executive Team",
  description:
    "Meet the executive committee of the IEEE ComSoc Rwanda Chapter.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        title="Executive Team"
        subtitle="The volunteers who lead the chapter's activities."
      />

      <Section>
        <SectionHeading
          eyebrow="Leadership"
          title="Executive Committee"
          subtitle="Chapter officers are IEEE ComSoc members elected to serve the Rwandan communications community."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.role}
              className="rounded-lg border border-gray-200 bg-white p-6 text-center"
            >
              {member.photo ? (
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={112}
                  height={112}
                  className="mx-auto mb-4 h-28 w-28 rounded-full object-cover"
                />
              ) : (
                <div className="mx-auto mb-4 flex h-28 w-28 items-center justify-center rounded-full bg-surface text-3xl font-bold text-ieee-blue">
                  {member.name
                    .split(" ")
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join("")}
                </div>
              )}
              <h3 className="font-semibold text-ieee-dark">{member.name}</h3>
              <p className="text-sm font-medium text-ieee-blue">
                {member.role}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {member.affiliation}
              </p>
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm text-ieee-blue hover:underline"
                >
                  LinkedIn
                </a>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="rounded-lg border border-gray-200 bg-white p-8 text-center">
          <h2 className="text-2xl font-bold text-ieee-dark">
            Want to Volunteer?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            The chapter is run by volunteers. If you&apos;d like to help
            organize events, mentor students, or contribute your expertise,
            we&apos;d love to hear from you.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block rounded bg-ieee-blue px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
          >
            Contact Us
          </a>
        </div>
      </Section>
    </>
  );
}
