import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Container } from "./container";
import { Logo } from "./logo";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-surface" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-ink-muted leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          <FooterCol
            title="Practice"
            links={[
              { label: "Services", href: "/services" },
              { label: "Work", href: "/work" },
              { label: "Insights", href: "/insights" },
            ]}
          />
          <FooterCol
            title="Firm"
            links={[
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
            ]}
          />
          <FooterCol
            title="Contact"
            links={[
              { label: siteConfig.email, href: `mailto:${siteConfig.email}` },
              { label: "LinkedIn", href: siteConfig.social.linkedin, external: true },
            ]}
          />
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>
            {siteConfig.address.city}, {siteConfig.address.state} · {siteConfig.address.country}
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-ink">{title}</h3>
      <ul className="mt-4 space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-sm text-ink-muted hover:text-ink"
              {...(l.external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
