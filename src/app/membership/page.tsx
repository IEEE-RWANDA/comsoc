import type { Metadata } from "next";
import { PageHero, Section, SectionHeading } from "@/components/Section";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Why and how to join the IEEE Communications Society and the Rwanda Chapter.",
};

const benefits = [
  {
    title: "Publications & research",
    description:
      "IEEE Communications Magazine, ComSoc journals, and discounted access to IEEE Xplore.",
  },
  {
    title: "Conferences & training",
    description:
      "Member rates for ICC and GLOBECOM, plus free and discounted online courses and webinars.",
  },
  {
    title: "Local community",
    description:
      "Chapter events in Rwanda — technical talks, workshops, and networking with industry and academia.",
  },
  {
    title: "Career development",
    description:
      "Mentorship, certification paths like IEEE WCET, volunteer leadership, and a global network.",
  },
];

const steps = [
  {
    step: "01",
    title: "Join IEEE",
    description:
      "Create an IEEE account and choose a membership grade — student rates are heavily discounted, with reduced pricing for members in Rwanda.",
  },
  {
    step: "02",
    title: "Add ComSoc",
    description:
      "During signup or from your IEEE account, add the Communications Society to your membership.",
  },
  {
    step: "03",
    title: "Connect locally",
    description:
      "You're automatically part of the Rwanda Chapter based on your location. Reach out and come to an event.",
  },
];

export default function MembershipPage() {
  return (
    <>
      <PageHero
        eyebrow="[ Membership ]"
        title="Join the network"
        subtitle="The world's largest community of communications professionals — and its home in Rwanda."
      />

      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="[ 01 — Why join ]"
            title="Membership benefits"
            subtitle="IEEE ComSoc membership is an investment in your technical career."
          />
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-slate-200 bg-surface p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-slate-900/5">
                <span className="font-mono text-xs text-slate-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-ink">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {b.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-ink text-white">
        <Reveal>
          <SectionHeading
            eyebrow="[ 02 — How to join ]"
            title="Three simple steps"
            dark
          />
        </Reveal>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.step} className="bg-ink p-8">
              <span className="font-mono text-sm text-accent-bright">
                {s.step}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {s.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="https://www.ieee.org/membership/join"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-accent-bright px-6 py-3.5 font-semibold text-ink transition hover:bg-teal-300"
          >
            Join IEEE →
          </a>
          <a
            href="https://www.comsoc.org/membership"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/15 px-6 py-3.5 font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
          >
            IEEE ComSoc membership
          </a>
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="rounded-2xl border-l-4 border-accent bg-surface p-8">
            <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
              Students: ask about student membership
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
              IEEE student membership is significantly discounted, and ComSoc
              offers additional student resources, competitions, and travel
              grants. If you&apos;re at a Rwandan university, get in touch — we
              can help you and your student branch get started.
            </p>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
