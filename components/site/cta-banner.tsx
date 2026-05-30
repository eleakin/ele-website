import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "./container";

export function CtaBanner({
  title = "Have a problem worth solving carefully?",
  body = "A 30-minute discovery call is the fastest way to figure out whether we're the right team for the work. No deck, no pressure.",
  cta = "Book a discovery call",
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
