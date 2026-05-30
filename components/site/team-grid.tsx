import { team } from "@/lib/content/team";
import { FadeIn } from "./fade-in";

export function TeamGrid() {
  return (
    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {team.map((m, idx) => (
        <FadeIn key={m.name} delay={idx * 0.05}>
          <li className="flex flex-col">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={m.imageUrl}
              alt={`Portrait of ${m.name}`}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-xl bg-muted object-cover"
            />
            <div className="mt-4">
              <h3 className="font-display text-lg text-ink">{m.name}</h3>
              <p className="text-sm text-accent">{m.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{m.bio}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {m.credentials.map((c) => (
                  <li
                    key={c}
                    className="rounded-full border border-border bg-muted px-2.5 py-0.5 text-xs text-ink-muted"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </FadeIn>
      ))}
    </ul>
  );
}
