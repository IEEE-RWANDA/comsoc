"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded bg-ieee-blue font-bold text-white">
            CS
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold text-ieee-dark">
              IEEE ComSoc
            </span>
            <span className="block text-xs text-gray-600">Rwanda Chapter</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded px-3 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "bg-ieee-blue text-white"
                      : "text-gray-700 hover:bg-surface hover:text-ieee-blue"
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
              className="ml-2 rounded bg-ieee-gold px-4 py-2 text-sm font-semibold text-ieee-dark transition-opacity hover:opacity-90"
            >
              Join IEEE ComSoc
            </a>
          </li>
        </ul>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded text-ieee-dark md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="border-t border-gray-200 bg-white px-4 pb-4 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block rounded px-3 py-3 text-sm font-medium text-gray-700 hover:bg-surface"
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
              className="mt-2 block rounded bg-ieee-gold px-4 py-3 text-center text-sm font-semibold text-ieee-dark"
            >
              Join IEEE ComSoc
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
