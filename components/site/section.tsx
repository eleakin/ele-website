import { cn } from "@/lib/utils";
import { Container } from "./container";

export function Section({
  id,
  className,
  bleed = false,
  children,
}: {
  id?: string;
  className?: string;
  bleed?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("py-20 sm:py-24 lg:py-28", className)}>
      {bleed ? children : <Container>{children}</Container>}
    </section>
  );
}
