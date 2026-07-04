# IEEE ComSoc Rwanda Chapter Website

Official website of the IEEE Communications Society Rwanda Chapter, part of
the joint **IEEE Rwanda MTTS/ComSoc/AP-S Chapter** under the IEEE Rwanda
Subsection (IEEE Region 8), based at Carnegie Mellon University Africa,
Kigali.

Built with [Next.js](https://nextjs.org) (App Router) and
[Tailwind CSS](https://tailwindcss.com), using IEEE brand colors
(IEEE Blue `#00629B`) and the Open Sans typeface per IEEE brand guidelines.

## Pages

- `/` — Home: hero, focus areas, upcoming events, membership CTA
- `/about` — Mission, chapter structure, technical scope
- `/events` — Upcoming and past events
- `/team` — Executive committee
- `/membership` — Benefits and how to join IEEE + ComSoc
- `/contact` — Contact details and partnership info

## Updating content

Most content lives in one file: [`src/data/site.ts`](src/data/site.ts).
Edit it to add events, update the executive committee, or change contact
details — no component changes needed. Officer photos go in `public/team/`.

Items marked `TODO` in that file (official chapter email, social handles,
officer names) still need to be confirmed by the chapter.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Deployment

The site is designed to deploy on [Vercel](https://vercel.com): import the
GitHub repository, accept the default Next.js settings, and every push to
`main` deploys automatically.
