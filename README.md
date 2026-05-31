# ELE People Analytics — Marketing Site

A production-ready Next.js (App Router) marketing site for a people / HR data
analytics consulting practice. Clean, accessible, fast, easy to rebrand.

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS 3** with a custom design-token theme
- **shadcn/ui**-style primitives (Button, Input, Textarea, Label, Card)
- **lucide-react** icons
- **Framer Motion** for subtle, reduced-motion-aware animation
- **React Hook Form + Zod** for the contact form
- `next/font` (Inter + Fraunces), `next/image`, sitemap, robots, JSON-LD

## Getting started

```bash
npm install
cp .env.example .env.local        # then edit NEXT_PUBLIC_SITE_URL
npm run dev                       # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint       # next lint
npm run typecheck  # tsc --noEmit
```

> The `package.json` pins `react@19-rc` to match Next 15. If your environment
> requires a stable React, swap both `react` and `react-dom` to `^18.3.1` —
> the app does not use React 19-only APIs.

## Where to edit content

All copy and data lives under `lib/` so the design and routing don't need to
change when content does.

| File                                       | What's in it                                                 |
| ------------------------------------------ | ------------------------------------------------------------ |
| `lib/site-config.ts`                       | Firm name, tagline, contact info, nav links, social URLs     |
| `lib/content/services.ts`                  | Service catalog + the four-phase process                     |
| `lib/content/team.ts`                      | Team bios, roles, credentials, portrait paths                |
| `lib/content/case-studies.ts`              | Case studies (problem → approach → outcomes)                 |
| `lib/content/insights.ts`                  | Articles (MDX-ready; see migration notes inside the file)    |
| `components/site/logo-cloud.tsx`           | Client logos (currently text placeholders)                   |
| `components/site/testimonials.tsx`         | Quotes block on the home page                                |
| `public/team/placeholder-*.svg`            | Swap for real portraits, then update `lib/content/team.ts`   |
| `public/favicon.svg`                       | Brand favicon                                                |

## Project layout

```
app/
  layout.tsx           # root layout, fonts, header/footer, JSON-LD
  page.tsx             # Home
  services/page.tsx
  about/page.tsx
  work/
    page.tsx           # Work index
    [slug]/page.tsx    # Case study detail (statically generated)
  insights/
    page.tsx           # Insights index
    [slug]/page.tsx    # Article (statically generated, MDX-ready)
  contact/page.tsx
  sitemap.ts           # /sitemap.xml
  robots.ts            # /robots.txt
  not-found.tsx
  globals.css          # Tailwind layers + design tokens
components/
  ui/                  # shadcn-style primitives
  site/                # Page-level building blocks
lib/
  site-config.ts
  utils.ts             # cn() helper
  content/             # All site copy and data
public/
  favicon.svg
  team/                # Placeholder portraits
```

## Design system

Tokens live in `app/globals.css` (`:root` CSS variables) and are exposed to
Tailwind in `tailwind.config.ts`. Change the variables to rebrand everything:

```css
--primary: 210 60% 14%;   /* deep navy */
--accent:  174 72% 26%;   /* deep teal */
--ink:     210 47% 12%;   /* near-black body */
--radius:  0.6rem;
```

Typography pairs **Fraunces** (display) with **Inter** (body), both via
`next/font` so they're self-hosted and CLS-safe.

## Accessibility

- Semantic landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`)
- "Skip to main content" link, visible on focus
- Focus-visible rings via the token-driven `--ring`
- All interactive elements keyboard reachable; mobile menu sets `aria-expanded`
- Color contrast meets WCAG 2.1 AA against the chosen palette
- Form fields are labelled, errors are announced via `role="alert"`
- Animations respect `prefers-reduced-motion`

## SEO

- Per-route `metadata` and `generateMetadata`
- Open Graph + Twitter card defaults in `app/layout.tsx`
- `sitemap.ts` (includes case studies + articles), `robots.ts`
- JSON-LD `ProfessionalService` org schema on every page, `Article` schema on
  insight pages

## Performance

- Self-hosted fonts via `next/font` (no FOIT/FOUT, no extra request)
- Static generation for case study + insight detail pages
- AVIF/WebP via `next/image` config
- Below-the-fold sections animate only when in view (`whileInView`)
- No client JS in marketing copy paths beyond the components that need it
  (hero, mobile nav, fade-in wrapper, contact form)

## Contact form

`components/site/contact-form.tsx` validates with Zod and currently simulates a
successful submit. To wire it up:

1. Create an API route (`app/api/contact/route.ts`) or a server action.
2. In `onSubmit`, `POST` the validated `_values` to your provider of choice
   (Resend, Postmark, SendGrid, HubSpot, Salesforce, etc.).
3. Keep the success-state UI as-is — it already announces via `aria-live`.

## Migrating insights to MDX

The `Insight` type currently carries a structured `body`. To switch to file-based
MDX:

1. `npm install @next/mdx @mdx-js/loader @mdx-js/react`
2. Enable MDX in `next.config.ts` (`pageExtensions: ["ts","tsx","mdx"]`).
3. Move each article into `app/insights/<slug>/page.mdx` with frontmatter.
4. Delete the `body` field from the `Insight` type and render via the MDX import.

The index page (`app/insights/page.tsx`) keeps working unchanged as long as the
frontmatter shape matches.

## Assumptions made

The brief left bracketed placeholders. The defaults below are easy to swap in
`lib/site-config.ts` and `lib/content/*`:

- **Firm name:** ELE People Analytics
- **Type:** People / HR data analytics consulting
- **Target clients:** HR and total rewards leaders at mid-to-large employers
  (technology, retail, healthcare, financial services)
- **Palette:** Deep navy (`#0B1F33`) + slate + deep teal accent (`#0F766E`)
- **Fonts:** Fraunces (display) + Inter (body)
- **Domain:** `https://www.example.com` (replace via `NEXT_PUBLIC_SITE_URL` and
  `siteConfig.url`)

Client logos in the home-page logo cloud are intentionally rendered as text
placeholders with dashed borders so it's obvious they need to be replaced.
