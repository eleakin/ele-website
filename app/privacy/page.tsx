import type { Metadata } from "next";
import { Section } from "@/components/site/section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How ELE Leads Generation handles information submitted through this website, where our mailing-list data comes from, and how to opt out of mailings.",
};

export default function PrivacyPage() {
  return (
    <Section className="border-b border-border bg-surface">
      <div className="container-narrow px-0">
        <span className="eyebrow">Legal</span>
        <h1 className="mt-3">Privacy Policy</h1>
        <p className="mt-4 text-sm text-ink-muted">
          Last updated: June 2026. This is a starting template — review with
          counsel before relying on it.
        </p>

        <div className="prose-article mt-10">
          <h2>Information we collect</h2>
          <p>
            When you submit the contact form, we collect the name, email,
            organization, and message you provide. We use this information solely
            to respond to your inquiry and, if you become a client, to deliver
            the services you request.
          </p>

          <h2>Mailing-list data sources and opt-out</h2>
          <p>
            The new-homeowner lists we provide to client practices are compiled
            by third-party data vendors from public property records (such as
            county deed recordings). They contain names and mailing addresses
            only, and never contain patient, health, or financial account
            information. If you have received a mailing from one of our client
            practices and would prefer not to receive future mailings, email us
            at <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> and
            we will add you to our suppression list and honor the request in
            all future list deliveries.
          </p>

          <h2>How we use and share information</h2>
          <p>
            We do not sell your information. We share it only with service
            providers that help us operate this site and our business (for
            example, hosting and form/database infrastructure), and only as
            needed to provide our services or as required by law.
          </p>

          <h2>Data retention</h2>
          <p>
            We retain contact submissions for as long as needed to respond to
            and follow up on your inquiry, then delete or archive them in line
            with our internal retention practices.
          </p>

          <h2>Your choices</h2>
          <p>
            You may request that we update or delete the information you have
            submitted by emailing us at{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy? Reach us at{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or in{" "}
            {siteConfig.address.city}, {siteConfig.address.state}.
          </p>
        </div>
      </div>
    </Section>
  );
}
