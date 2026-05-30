import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { type Insight } from "@/lib/content/insights";
import { FadeIn } from "./fade-in";

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function ArticleCard({ i, index = 0 }: { i: Insight; index?: number }) {
  return (
    <FadeIn delay={index * 0.05}>
      <article className="group flex h-full flex-col rounded-xl border border-border bg-surface p-7 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card">
        <div className="flex items-center gap-3 text-xs text-ink-muted">
          <time dateTime={i.date}>{formatDate(i.date)}</time>
          <span aria-hidden="true">·</span>
          <span>{i.readingTime}</span>
        </div>
        <h3 className="mt-3 font-display text-xl text-ink">
          <Link href={`/insights/${i.slug}`} className="hover:text-accent">
            {i.title}
            <span className="sr-only"> — read article</span>
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
          {i.description}
        </p>
        <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
          <ul className="flex flex-wrap gap-2">
            {i.tags.map((t) => (
              <li
                key={t}
                className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-ink-muted"
              >
                {t}
              </li>
            ))}
          </ul>
          <Link
            href={`/insights/${i.slug}`}
            aria-label={`Read ${i.title}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
          >
            Read
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </article>
    </FadeIn>
  );
}
