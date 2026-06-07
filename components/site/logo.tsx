import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-baseline gap-1 font-display text-xl font-semibold tracking-tight text-ink",
        className
      )}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6 -translate-y-px text-accent">
        <path
          fill="currentColor"
          d="M3 12.5C3 7.806 6.806 4 11.5 4S20 7.806 20 12.5c0 2.196-.832 4.198-2.197 5.708l-1.5-1.5A6.48 6.48 0 0 0 18 12.5C18 8.91 15.09 6 11.5 6S5 8.91 5 12.5 7.91 19 11.5 19c.41 0 .812-.038 1.2-.111l1.43 1.43A8.46 8.46 0 0 1 11.5 21C6.806 21 3 17.194 3 12.5Z"
        />
        <path
          fill="currentColor"
          d="m14.293 13.293 6 6 1.414-1.414-6-6z"
        />
      </svg>
      <span>{siteConfig.shortName}</span>
      <span className="hidden whitespace-nowrap text-sm font-normal text-ink-muted xl:inline">
        / Chiropractic Practice Revenue Cycle Management
      </span>
    </span>
  );
}
