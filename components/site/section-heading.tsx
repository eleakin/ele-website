import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: As = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <As className={cn("mt-3", As === "h2" && "text-3xl sm:text-4xl lg:text-[2.75rem]")}>
        {title}
      </As>
      {description && (
        <p className="mt-5 text-lg text-ink-muted leading-relaxed">{description}</p>
      )}
    </div>
  );
}
