import type { Metadata } from "next";
import { PageHero, Section, SectionHeading } from "@/components/Section";

export const metadata: Metadata = {
  title: "About",
  description:
    "About the IEEE Communications Society Rwanda Chapter — our mission, vision, and place within IEEE.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About the Chapter"
        subtitle="Who we are and why the IEEE ComSoc Rwanda Chapter exists."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Our Mission" title="What Drives Us" />
            <p className="text-gray-700">
              The IEEE Communications Society Rwanda Chapter promotes the
              advancement of communications and networking science,
              engineering, and technology in Rwanda. We serve members through
              technical activities, professional development, and community
              outreach — and we connect Rwandan engineers, researchers, and
              students to ComSoc&apos;s global network of communications
              professionals.
            </p>
            <p className="mt-4 text-gray-700">
              We operate as part of the joint{" "}
              <strong>IEEE Rwanda MTTS/ComSoc/AP-S Chapter</strong> — spanning
              the Microwave Theory &amp; Technology, Communications, and
              Antennas &amp; Propagation societies — the first chapter under
              the newly established IEEE Rwanda Subsection, based at Carnegie
              Mellon University Africa in Kigali.
            </p>
            <p className="mt-4 text-gray-700">
              As Rwanda pursues its vision of becoming a regional ICT hub, the
              chapter works to ensure local talent has access to world-class
              technical knowledge, mentorship, and opportunities in
              telecommunications and networking.
            </p>
          </div>
          <div>
            <SectionHeading eyebrow="Our Structure" title="Part of IEEE" />
            <p className="text-gray-700">
              The chapter operates under the IEEE Rwanda Subsection — the
              first IEEE geographic unit in Rwanda, launched in Kigali in July
              2026 within{" "}
              <a
                href="https://www.ieeer8.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ieee-blue hover:underline"
              >
                IEEE Region 8
              </a>{" "}
              — and is affiliated with the{" "}
              <a
                href="https://www.comsoc.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ieee-blue hover:underline"
              >
                IEEE Communications Society
              </a>
              , a global community of professionals dedicated to advancing
              communications technology since 1952.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-ieee-blue">✓</span>
                Technical seminars, workshops, and distinguished lecturer talks
              </li>
              <li className="flex gap-3">
                <span className="text-ieee-blue">✓</span>
                Support for student branches and young professionals
              </li>
              <li className="flex gap-3">
                <span className="text-ieee-blue">✓</span>
                Collaboration with industry, academia, and government
              </li>
              <li className="flex gap-3">
                <span className="text-ieee-blue">✓</span>
                Access to IEEE ComSoc publications, conferences, and training
              </li>
              <li className="flex gap-3">
                <span className="text-ieee-blue">✓</span>
                International partnerships through ComSoc&apos;s Twin Chapter
                Program (twinned with the IEEE ComSoc Kerala Chapter)
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading
          eyebrow="Focus Areas"
          title="Technical Scope"
          subtitle="Our activities span the breadth of modern communications technology."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "5G / 6G & Mobile Networks",
            "Internet of Things (IoT)",
            "Optical & Fiber Networks",
            "Satellite Communications",
            "Network Security",
            "Wireless & Spectrum",
            "Cloud & Edge Networking",
            "Rural Connectivity",
          ].map((topic) => (
            <div
              key={topic}
              className="rounded-lg border border-gray-200 bg-white p-4 text-center text-sm font-medium text-ieee-dark"
            >
              {topic}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
