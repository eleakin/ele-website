import Link from "next/link";
import { Section } from "@/components/site/section";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Section className="text-center">
      <p className="eyebrow justify-center">404</p>
      <h1 className="mt-3">We can’t find that page.</h1>
      <p className="mx-auto mt-5 max-w-md text-lg text-ink-muted">
        The link may be broken or the page may have moved. Try one of these
        instead.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button asChild variant="accent">
          <Link href="/">Back to home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/contact">Contact us</Link>
        </Button>
      </div>
    </Section>
  );
}
