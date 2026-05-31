import { FadeIn } from "./fade-in";

// Placeholder client logos rendered as wordmarks so the site is reviewable
// before brand-approved logos are available. Replace with /public/clients/*.svg
// and an <Image> for each entry.
const clients = [
  "Global Tech Co.",
  "Retail Group",
  "Health System",
  "Financial Services",
  "Manufacturing Co.",
  "University HR",
];

export function LogoCloud({ heading = "Trusted by people teams that can't afford to guess" }: { heading?: string }) {
  return (
    <FadeIn>
      <div>
        <p className="text-center text-sm font-medium uppercase tracking-wider text-ink-muted">
          {heading}
        </p>
        <ul
          role="list"
          className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6"
          aria-label="Selected clients"
        >
          {clients.map((c) => (
            <li
              key={c}
              className="flex h-12 items-center justify-center rounded-md border border-dashed border-border bg-surface/60 px-3 text-center text-xs font-medium tracking-wide text-ink-muted"
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
    </FadeIn>
  );
}
