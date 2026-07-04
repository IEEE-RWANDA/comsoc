import Link from "next/link";
import { Section, SectionHeading, Eyebrow } from "@/components/Section";
import NetworkCanvas from "@/components/NetworkCanvas";
import StatCounter from "@/components/StatCounter";
import Reveal from "@/components/Reveal";
import { events } from "@/data/site";

const partners = [
  "IEEE",
  "IEEE ComSoc",
  "IEEE Region 8",
  "IEEE Rwanda Subsection",
  "CMU-Africa",
  "IEEE ComSoc Kerala · Twin Chapter",
  "IEEE MTT-S",
  "IEEE AP-S",
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function Home() {
  const recent = [...events]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden bg-ink text-white">
        <div className="dot-grid absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
        <div className="animate-glow absolute -top-32 left-1/4 h-[28rem] w-[28rem] rounded-full bg-accent/25 blur-3xl" />
        <div className="animate-glow absolute -bottom-40 right-[5%] h-96 w-96 rounded-full bg-ieee-blue/30 blur-3xl [animation-delay:4s]" />
        <NetworkCanvas className="opacity-50" />

        <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-40 md:px-6 md:pb-32 md:pt-52">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-accent-bright">
            {"// IEEE Communications Society — Rwanda"}
          </p>
          <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            Connecting Rwanda to the{" "}
            <span className="bg-gradient-to-r from-accent-bright to-cyan-300 bg-clip-text text-transparent">
              networks
            </span>{" "}
            of the future.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-400">
            We bring together the engineers, researchers, and students building
            Rwanda&apos;s digital future — through technical talks, hands-on
            workshops, and a global community of communications professionals.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://www.comsoc.org/membership"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-accent-bright px-6 py-3.5 font-semibold text-ink transition hover:bg-teal-300"
            >
              Become a member
            </a>
            <Link
              href="/events"
              className="group rounded-lg border border-white/15 px-6 py-3.5 font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
            >
              Explore events{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* Stat strip bridging into the light section */}
          <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-4">
            {[
              { value: 3, suffix: "", label: "IEEE societies, one chapter" },
              { value: 2026, suffix: "", label: "Chapter established" },
              { value: 400, suffix: "K+", label: "IEEE members worldwide" },
              { value: 160, suffix: "+", label: "Countries in the network" },
            ].map((s) => (
              <div key={s.label} className="bg-ink/90 p-6">
                <p className="font-display text-3xl font-bold text-accent-bright md:text-4xl">
                  <StatCounter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1.5 text-xs uppercase tracking-widest text-slate-500">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Partner marquee ──────────────────────────────────────────── */}
      <div className="border-b border-slate-200 bg-white py-8">
        <div className="marquee-mask overflow-hidden">
          <div className="animate-marquee flex w-max items-center">
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                aria-hidden={copy === 1}
                className="flex items-center"
              >
                {partners.map((p) => (
                  <li
                    key={p}
                    className="mx-8 whitespace-nowrap font-mono text-sm uppercase tracking-[0.2em] text-slate-400"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>

      {/* ── What we do — bento grid ──────────────────────────────────── */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="[ 01 — What we do ]"
            title="Built for Rwanda's communications community"
            subtitle="Part of the joint IEEE Rwanda MTTS/ComSoc/AP-S Chapter under the IEEE Rwanda Subsection, based at Carnegie Mellon University Africa."
          />
        </Reveal>
        <div className="grid gap-4 md:grid-cols-3 md:auto-rows-[200px]">
          <Reveal className="md:col-span-2 md:row-span-2">
            <div className="group relative h-full min-h-[280px] overflow-hidden rounded-2xl border border-slate-200 bg-ink p-8 transition duration-300 hover:border-accent/50">
              <div className="dot-grid absolute inset-0 opacity-40" />
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/20 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex h-full flex-col justify-end">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent-bright">
                  Technical program
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
                  Talks &amp; workshops on 5G/6G, IoT, spectrum, and network
                  security
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-slate-400">
                  Distinguished lecturers, hands-on sessions, and joint
                  technical events with chapters around the world — including
                  our Twin Chapter, IEEE ComSoc Kerala.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex h-full min-h-[180px] flex-col justify-end rounded-2xl border border-slate-200 bg-surface p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-slate-900/5">
              <p className="font-display text-3xl font-bold text-ink">
                Students first
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Mentorship, career guidance, and student-branch support at
                Rwandan universities.
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex h-full min-h-[180px] flex-col justify-end rounded-2xl border border-slate-200 bg-surface p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-slate-900/5">
              <p className="font-display text-3xl font-bold text-ink">
                Industry × academia
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Bridging operators, regulators, startups, and universities to
                grow the ecosystem.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ── Events ───────────────────────────────────────────────────── */}
      <Section className="border-t border-slate-200 bg-surface">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Reveal>
            <SectionHeading
              eyebrow="[ 02 — Events ]"
              title="Recent & upcoming"
            />
          </Reveal>
          <Link
            href="/events"
            className="group mb-14 text-sm font-semibold text-ink hover:text-accent"
          >
            All events{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          {recent.map((event, i) => (
            <Link
              key={event.title}
              href="/events"
              className={`group flex flex-col gap-4 p-6 transition-colors hover:bg-slate-50 sm:flex-row sm:items-center md:p-8 ${
                i > 0 ? "border-t border-slate-200" : ""
              }`}
            >
              <div className="flex w-24 shrink-0 flex-col">
                <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
                  {formatDate(event.date)}
                </span>
                {!event.past && (
                  <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-accent">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                    </span>
                    Upcoming
                  </span>
                )}
              </div>
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                  {event.title}
                </h3>
                <p className="mt-1 text-sm text-slate-500">{event.location}</p>
              </div>
              <span className="hidden text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-accent sm:block">
                →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* ── CTA band ─────────────────────────────────────────────────── */}
      <Section className="bg-ink">
        <Reveal>
          <div className="rounded-3xl bg-gradient-to-r from-accent to-ieee-blue p-px">
            <div className="relative overflow-hidden rounded-[calc(1.5rem-1px)] bg-ink px-8 py-14 md:px-14 md:py-16">
              <div className="animate-glow absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
              <div className="relative">
                <Eyebrow>[ 03 — Join us ]</Eyebrow>
                <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
                  Be part of the network.
                </h2>
                <p className="mt-4 max-w-xl text-slate-400">
                  Join the world&apos;s largest community of communications
                  professionals — and help build its home in Rwanda.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/membership"
                    className="rounded-lg bg-accent-bright px-6 py-3.5 font-semibold text-ink transition hover:bg-teal-300"
                  >
                    Membership benefits
                  </Link>
                  <Link
                    href="/contact"
                    className="rounded-lg border border-white/15 px-6 py-3.5 font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
                  >
                    Get in touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
