import type { Metadata } from "next";
import { Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import { Section } from "@/components/site/section";
import { ContactForm } from "@/components/site/contact-form";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation about your people analytics work. Every inquiry is read by a partner and answered within one business day.",
};

export default function ContactPage() {
  return (
    <Section className="border-b border-border bg-surface">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <div>
          <span className="eyebrow">Contact</span>
          <h1 className="mt-3">Let’s talk.</h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-muted">
            Tell us a little about what you’re working on. Every inquiry is read
            by a partner and answered within one business day.
          </p>

          <dl className="mt-10 space-y-5 text-sm">
            <ContactRow icon={Mail} label="Email">
              <a className="hover:text-accent" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </ContactRow>
            <ContactRow icon={Phone} label="Phone">
              <a className="hover:text-accent" href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
                {siteConfig.phone}
              </a>
            </ContactRow>
            <ContactRow icon={MapPin} label="Office">
              {siteConfig.address.city}, {siteConfig.address.state}
            </ContactRow>
          </dl>
        </div>

        <div className="rounded-2xl border border-border bg-background p-6 shadow-soft sm:p-8">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  children,
}: {
  icon: LucideIcon;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="mt-0.5 inline-flex size-9 items-center justify-center rounded-md bg-accent/10 text-accent">
        <Icon className="size-4" aria-hidden />
      </span>
      <div>
        <dt className="text-xs uppercase tracking-wider text-ink-muted">{label}</dt>
        <dd className="mt-0.5 text-base text-ink">{children}</dd>
      </div>
    </div>
  );
}
