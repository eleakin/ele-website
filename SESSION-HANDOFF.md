# Session Handoff — ELE Practice Leads

A context document so this project can be picked up on another machine (or by a
fresh Claude session). Read this, then `git pull` / open a Codespace and you're
caught up. **Contains no secrets** — keys live in env vars (see below).

_Last updated: 2026-07-22._

---

## What this is

A marketing site for **ELE Practice Leads** — a done-for-you **new-homeowner
lead-generation service** for Nevada chiropractors and dentists (monthly lists
of new homeowners by ZIP code, ready to mail; tiers: Starter $147 / Growth $247
/ Full-Service $397 per month). Founder: **Eric L. Eakin, DC**. Tagline:
_Evidence. Leverage. Execution._ Proof point: the founder's own 2006
$67/month list → two patients worth $6,000+ (always framed as founder
experience, never a client result).

> History: the site was originally built as an HR / people-analytics consulting
> site, then rebranded to chiropractic RCM via the `ele-chiro-pivot` skill, then
> repositioned again (2026-07) to lead generation per the "ELE Practice Leads"
> marketing plan (Section 7). Each pivot is a **content rebrand on a preserved
> design system** — navy + teal, Fraunces (display) + Inter (body), shadcn-style
> components, Framer Motion.

## Live locations

| Thing | Where |
| --- | --- |
| Production site | https://www.eleconsulting.xyz (apex redirects to www) |
| GitHub repo | https://github.com/eleakin/ele-website (branch: `main`) |
| Hosting | **Vercel** (auto-deploys on every push to `main`) |
| Domain | Registered/managed at **Hostinger**; DNS points apex `A → 76.76.21.21`, `www CNAME → cname.vercel-dns.com`. Hostinger CDN is **off** (it locked the apex A record). MX/email stay on Hostinger. |
| Database | **Supabase** project `eleconsulting` (ref `lotuhilgnwnqjumnnwok`) |

> ⚠️ The repo is currently **public**. Keep secrets out of it. The Supabase
> *publishable* key is browser-safe and already in `.env.production`; the
> *service-role* key must never be committed.

## Tech stack

Next.js 15 (App Router) · TypeScript · Tailwind 3 · shadcn/ui · lucide-react ·
Framer Motion · React Hook Form + Zod · Supabase (`@supabase/supabase-js` +
`@supabase/ssr`). React pinned to 18.3.1.

## Where content lives (edit these to change copy)

| File | Contents |
| --- | --- |
| `lib/site-config.ts` | Brand name, description, email, address, nav |
| `components/site/hero.tsx` | Homepage hero copy (2006 proof point) + trust line |
| `app/page.tsx` | Homepage section order/headings |
| `lib/content/services.ts` | 3 pricing tiers + 4-step process (Pick ZIPs→We pull the list→Mail offer→Track) |
| `lib/content/case-studies.ts` | **Empty by design** (no fabricated results) |
| `lib/content/insights.ts` | 4 articles on new-patient acquisition / direct-mail ROI |
| `lib/content/team.ts` | Founder bio (Eric L. Eakin, DC) |
| `components/site/results-strip.tsx` | Homepage "opportunity in numbers" — founder 2006 figures + vendor guarantee, clearly labeled |
| `components/site/lead-estimator.tsx` | Interactive lead-volume estimator (replaced the denial calculator) |
| `components/site/logo.tsx` | Header wordmark (descriptor shows at `lg`+) |
| `app/privacy/page.tsx` | Privacy policy incl. list data-source/opt-out disclosure (template — **needs legal review**) |

## Contact form → Supabase

- Form: `components/site/contact-form.tsx` (RHF + Zod). Fields: name, email,
  **phone** (auto-formats to `XXX-XXX-XXXX`), organization, message.
- Shared schema: `lib/validations/contact.ts`.
- Server action: `app/contact/actions.ts` → inserts into Supabase.
- Clients: `lib/supabase/{server,client}.ts` (`@supabase/ssr`).
- Table `public.contact_submissions`: **RLS on**, anonymous **INSERT only**, no
  SELECT policy (submissions are private — read them in the Supabase dashboard or
  via service role). Column `CHECK` constraints mirror the Zod rules. `phone` is
  nullable at the DB level (predates existing rows) but required by the form.
- Insert uses `return=minimal` (no `RETURNING`) so no read policy is needed —
  **do not add `.select()`** to the insert or it will break.

## Environment variables

Set these on the host (Vercel dashboard) and in a local `.env.local` (gitignored).
Values for the two `NEXT_PUBLIC_` vars are also in the committed `.env.production`.

```
NEXT_PUBLIC_SITE_URL=...                    # https://www.eleconsulting.xyz in prod
NEXT_PUBLIC_SUPABASE_URL=...                # https://lotuhilgnwnqjumnnwok.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=...    # sb_publishable_... (browser-safe)
```

`.env.local` is only needed to **run** the site locally; editing + pushing
deploys without it.

## How to work on it from another machine

- **Codespaces (zero setup):** GitHub repo → green **Code** → **Codespaces** →
  *Create codespace on main*. Add `.env.local` (values above) to run it; or just
  edit + commit and Vercel deploys.
- **Local clone:** `git clone … && cd ele-website && npm install && npm run dev`.
  Add `.env.local` to run the contact form locally.
- Scripts: `npm run dev | build | start | lint | typecheck`.
- **Deploy = push to `main`.** Vercel builds automatically (~1–2 min).

## The `ele-chiro-pivot` skill

A skill (`anthropic-skills:ele-chiro-pivot`) encodes the rebrand spec: chiro
copy, the six services, the founder bio, the denial calculator, and hard rules
(preserve the design system; no fabricated proof; HIPAA/PHI honesty; keep "ELE" +
tagline). Its default is "work on a branch, never push" — the user overrode that
to merge/deploy.

## Open follow-ups

1. **Legal review of `/privacy`** — it's a generic template (user's task).
2. **Benchmark sources** — homepage stats were fact-checked; citation now points
   to verifiable sources (MGMA, CMS, AI-scribe studies) with a "verify against
   your own data" caveat. Re-confirm before heavy promotion.
3. **Stray remote branch** `claude/zealous-bardeen-NKT1s` — not ours; inspect/
   delete if unwanted.
4. Possible nicety: an in-app admin view (service-role, server-side) to read
   contact submissions instead of the Supabase dashboard; or email/CRM
   forwarding on submit.

## To resume with a fresh Claude

Paste this file (or point Claude at it) and say what you want to change. The
working directory is the repo root; deploys happen by pushing to `main`.
