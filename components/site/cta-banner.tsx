import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "./container";

export function CtaBanner({
  title = "Curious how many new families moved into your area last month?",
  body = "A short, no-pressure conversation is the fastest way to find out. Tell us your ZIP codes and we'll pull a free sample list so you can see for yourself.",
  cta = "Get a free sample list",
  href = "/contact",
}: {
  title?: string;
  body?: string;
  cta?: string;
  href?: string;
}) {
  return (
    <section className="border-y border-border bg-primary text-primary-foreground">
      <Container className="py-16 sm:py-20">
        <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl text-primary-foreground">
              {title}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-primary-foreground/80">
              {body}
            </p>
          </div>
          <div className="md:justify-self-end">
            <Button asChild variant="accent" size="lg">
              <Link href={href}>
                {cta}
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
