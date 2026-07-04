"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/team", label: "Team" },
  { href: "/membership", label: "Membership" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 md:px-6">
        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-ieee-blue font-display text-sm font-bold text-white">
            CS
          </span>
          <span className="leading-tight">
            <span className="block font-display text-sm font-semibold tracking-tight text-white">
              IEEE ComSoc
            </span>
            <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
              Rwanda Chapter
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active = pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded-lg px-3.5 py-2 text-sm transition-colors ${
                    active
                      ? "text-accent-bright"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li>
            <a
              href="https://www.comsoc.org/membership"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-ink transition hover:bg-accent-bright"
            >
              Join ComSoc
            </a>
          </li>
        </ul>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-200 hover:bg-white/5 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="border-t border-white/10 bg-ink px-4 pb-5 pt-2 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block rounded-lg px-3 py-3 text-sm text-slate-200 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://www.comsoc.org/membership"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block rounded-lg bg-accent px-4 py-3 text-center text-sm font-semibold text-ink"
            >
              Join ComSoc
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
