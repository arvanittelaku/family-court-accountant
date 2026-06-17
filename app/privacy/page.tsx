import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { SITE_EMAIL, SITE_NAME, SITE_UK_SCOPE } from "@/lib/site";
import { buildPageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy | FamilyCourtAccountant",
  description:
    "UK GDPR privacy policy for FamilyCourtAccountant.com referral service.",
  path: "/privacy",
  robots: { index: false, follow: true },
});

export default function PrivacyPage() {
  return (
    <PageShell
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Privacy", href: "/privacy" },
      ]}
      title="Privacy Policy"
    >
      <div className="prose-content text-sm">
        <p>Last updated: June 2025</p>

        <h2>Who we are</h2>
        <p>
          {SITE_NAME} ({SITE_EMAIL}) operates a UK referral service connecting
          family law solicitors, barristers, and individuals in England and Wales
          with independent family court accountants and forensic accounting experts.
          We are the data controller for personal information submitted through
          this website. {SITE_UK_SCOPE}
        </p>

        <h2>What we collect</h2>
        <p>
          Name, email, phone, organisation or law firm, role, proceedings
          type, case details, and other information you submit via our contact
          form. We may collect technical data such as IP address, browser type,
          and cookies where analytics or marketing tools are enabled with your
          consent.
        </p>

        <h2>Lawful basis and purpose</h2>
        <p>
          We process personal data to respond to enquiries, match you with
          suitable family court accountants, manage referrals, and improve our
          service (legitimate interests and steps prior to entering a contract).
          Where we send marketing communications, we rely on consent where
          required by UK GDPR.
        </p>

        <h2>Retention and sharing</h2>
        <p>
          We retain enquiry data for as long as needed to handle your matter and
          meet legal obligations, typically up to six years for business
          records. We share data with instructed experts, Formspree (form
          processing), and other service providers under appropriate contracts
          and safeguards. We do not sell personal information.
        </p>

        <h2>Cookies and similar technologies</h2>
        <p>
          Non-essential cookies and third-party scripts load only after you
          choose Accept all, Reject non-essential, or save custom preferences.
          See our{" "}
          <Link href="/cookies" className="font-medium text-accent hover:underline">
            Cookie Policy
          </Link>{" "}
          for categories and how to change your choices.
        </p>

        <h2>Your rights (UK GDPR)</h2>
        <p>
          You may request access, correction, erasure, restriction, portability,
          or object to processing. You may withdraw consent for optional cookies
          at any time via Cookie settings in the footer. Contact {SITE_EMAIL}.
          You may complain to the Information Commissioner&apos;s Office (ico.org.uk).
        </p>

        <h2>International transfers</h2>
        <p>
          Where processors are outside the UK, we ensure appropriate safeguards
          such as the UK International Data Transfer Agreement or adequacy
          regulations.
        </p>

        <h2>Children</h2>
        <p>
          This website is not directed at children. We do not knowingly collect
          personal data from anyone under 18 without appropriate parental or
          guardian involvement through their solicitor.
        </p>

        <h2>Security</h2>
        <p>
          We use HTTPS and reputable processors. No method of transmission or
          storage is completely secure.
        </p>

        <h2>Changes</h2>
        <p>
          We may update this policy from time to time. The last updated date at
          the top of this page will change when we do.
        </p>

        <h2>Contact</h2>
        <p>
          Privacy questions: {SITE_EMAIL} or our{" "}
          <Link href="/contact" className="font-medium text-accent hover:underline">
            contact form
          </Link>
          .
        </p>
      </div>
    </PageShell>
  );
}
