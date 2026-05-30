import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Section } from "@/components/site/section";
import { CtaBanner } from "@/components/site/cta-banner";
import { ArticleJsonLd } from "@/components/site/json-ld";
import { insights, getInsight } from "@/lib/content/insights";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const i = getInsight(slug);
  if (!i) return {};
  return {
    title: i.title,
    description: i.description,
    openGraph: {
      title: i.title,
      description: i.description,
      type: "article",
      publishedTime: i.date,
      authors: [i.author],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const i = getInsight(slug);
  if (!i) notFound();

  const url = `${siteConfig.url}/insights/${i.slug}`;

  return (
    <>
      <Section className="border-b border-border bg-surface">
        <article className="mx-auto max-w-2xl">
          <Link
            href="/insights"
            className="inline-flex items-center gap-1 text-sm text-ink-muted hover:text-ink"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            All insights
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-ink-muted">
            <time dateTime={i.date}>{formatDate(i.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{i.readingTime}</span>
            <span aria-hidden="true">·</span>
            <span>By {i.author}</span>
          </div>
          <h1 className="mt-4">{i.title}</h1>
          <p className="mt-6 text-xl leading-relaxed text-ink-muted">
            {i.description}
          </p>
        </article>
      </Section>

      <Section>
        <div className="prose-article mx-auto">
          {i.body.map((block, idx) => {
            if (block.type === "h2")
              return (
                <h2 key={idx} className="font-display text-2xl text-ink">
                  {block.children as string}
                </h2>
              );
            if (block.type === "p")
              return <p key={idx}>{block.children as string}</p>;
            if (block.type === "quote")
              return <blockquote key={idx}>{block.children as string}</blockquote>;
            if (block.type === "ul")
              return (
                <ul key={idx}>
                  {(block.children as string[]).map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              );
            return null;
          })}
        </div>
      </Section>

      <CtaBanner
        title="Want to talk about this in your context?"
        body="If something here mapped onto a problem you're working on, we'd be glad to compare notes."
        cta="Start a conversation"
      />

      <ArticleJsonLd
        title={i.title}
        description={i.description}
        date={i.date}
        author={i.author}
        url={url}
      />
    </>
  );
}
