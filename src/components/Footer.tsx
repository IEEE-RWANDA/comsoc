import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto bg-ieee-dark text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded bg-white/10 font-bold">
              CS
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold">IEEE ComSoc</span>
              <span className="block text-xs text-white/70">
                Rwanda Chapter
              </span>
            </span>
          </div>
          <p className="text-sm text-white/70">
            Advancing communications and networking technology in Rwanda
            through events, education, and professional community. Part of the
            joint IEEE Rwanda MTTS/ComSoc/AP-S Chapter.
          </p>
          <a
            href="https://www.linkedin.com/showcase/ch08150"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45z" />
            </svg>
            Follow us on LinkedIn
          </a>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/90">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link href="/about" className="hover:text-white">About the Chapter</Link></li>
            <li><Link href="/events" className="hover:text-white">Events</Link></li>
            <li><Link href="/team" className="hover:text-white">Executive Team</Link></li>
            <li><Link href="/membership" className="hover:text-white">Membership</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/90">
            IEEE Resources
          </h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li>
              <a href="https://www.ieee.org" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                IEEE.org
              </a>
            </li>
            <li>
              <a href="https://www.comsoc.org" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                IEEE Communications Society
              </a>
            </li>
            <li>
              <a href="https://ieeexplore.ieee.org" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                IEEE Xplore
              </a>
            </li>
            <li>
              <a href="https://www.ieee.org/membership/join" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Join IEEE
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/90">
            Get in Touch
          </h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Carnegie Mellon University Africa</li>
            <li>Kigali, Rwanda</li>
            <li>
              <a href="mailto:comsoc.rwanda@ieee.org" className="hover:text-white">
                comsoc.rwanda@ieee.org
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <ul className="mb-3 flex flex-wrap justify-center gap-x-6 gap-y-1 text-xs text-white/60 sm:justify-start">
            <li>
              <a href="https://www.ieee.org/security-privacy.html" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                IEEE Privacy Policy
              </a>
            </li>
            <li>
              <a href="https://www.ieee.org/accessibility-statement.html" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Accessibility
              </a>
            </li>
            <li>
              <a href="https://www.ieee.org/about/corporate/governance/p9-26.html" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Nondiscrimination Policy
              </a>
            </li>
            <li>
              <a href="https://www.ieee.org/about/ethics/index.html" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                IEEE Ethics Reporting
              </a>
            </li>
          </ul>
          <div className="flex flex-col items-center justify-between gap-2 text-xs text-white/60 sm:flex-row">
            <p>
              © {new Date().getFullYear()} IEEE Rwanda MTTS/ComSoc/AP-S
              Chapter. All rights reserved.
            </p>
            <p>
              Part of the{" "}
              <a
                href="https://www.ieee.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                IEEE
              </a>{" "}
              Rwanda Subsection · Region 8
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
