import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-16 ${className}`}>
      <div className="mx-auto max-w-6xl px-4">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-ieee-blue">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold text-ieee-dark">{title}</h2>
      {subtitle && <p className="mt-3 text-gray-600">{subtitle}</p>}
    </div>
  );
}

export function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="bg-gradient-to-r from-ieee-dark to-ieee-blue py-16 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="text-4xl font-bold">{title}</h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-white/85">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
