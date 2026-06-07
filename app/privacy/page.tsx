import type { Metadata } from "next";
import { Section } from "@/components/site/section";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How ELE Practice Analytics handles information submitted through this website, and our approach to protected health information (PHI).",
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

          <h2>Protected health information (PHI)</h2>
          <p>
            Please do not submit patient health information (PHI) through this
            website. The contact form is not a secure channel for PHI. Before any
            engagement that involves access to PHI, we execute a Business
            Associate Agreement (BAA) and handle data only through agreed,
            secured methods consistent with HIPAA.
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
