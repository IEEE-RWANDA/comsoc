import type { Metadata } from "next";
import { PageHero, Section, SectionHeading } from "@/components/Section";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the IEEE ComSoc Rwanda Chapter.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Questions about membership, events, or partnerships? We'd love to hear from you."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Reach Out" title="Contact Details" />
            <ul className="space-y-4 text-gray-700">
              <li>
                <span className="block text-sm font-semibold uppercase tracking-wider text-ieee-blue">
                  Email
                </span>
                <a
                  href={`mailto:${site.email}`}
                  className="text-lg hover:text-ieee-blue hover:underline"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <span className="block text-sm font-semibold uppercase tracking-wider text-ieee-blue">
                  Location
                </span>
                <span className="text-lg">{site.city}</span>
              </li>
            </ul>
            <p className="mt-8 text-sm text-gray-500">
              For IEEE membership account issues, contact IEEE directly via{" "}
              <a
                href="https://www.ieee.org/about/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ieee-blue hover:underline"
              >
                ieee.org
              </a>
              .
            </p>
          </div>

          <div>
            <SectionHeading
              eyebrow="Partnerships"
              title="Work With the Chapter"
            />
            <p className="text-gray-700">
              We partner with universities, telecom operators, regulators, and
              tech companies on events, training, and outreach. If your
              organization would like to host a talk, sponsor a workshop, or
              collaborate on a program, email us — we typically respond within
              a few days.
            </p>
            <div className="mt-6 rounded-lg bg-surface p-6">
              <h3 className="font-semibold text-ieee-dark">
                Speaking opportunities
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Are you a researcher or practitioner in communications who
                wants to present to the community? We welcome proposals for
                technical talks and tutorials.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
