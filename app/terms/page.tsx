import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { SITE_EMAIL, SITE_NAME, SITE_UK_SCOPE } from "@/lib/site";
import { buildPageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms of Use | FamilyCourtAccountant",
  description:
    "Terms of use for FamilyCourtAccountant.com referral service in state family courts.",
  path: "/terms",
  robots: { index: false, follow: true },
});

export default function TermsPage() {
  return (
    <PageShell
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Terms", href: "/terms" },
      ]}
      title="Terms of Use"
    >
      <div className="prose-content text-sm">
        <p>Last updated: June 2025</p>

        <h2>About this service</h2>
        <p>
          {SITE_NAME}.com is a referral service connecting family law
          solicitors, barristers, and individuals in state family courts with
          independent family court accountants and forensic accounting expert
          witnesses. We are not a law firm, we are not regulated as solicitors,
          and we do not provide legal advice. {SITE_UK_SCOPE}
        </p>

        <h2>No client relationship with us</h2>
        <p>
          Submitting an enquiry does not create a solicitor-client relationship
          with {SITE_NAME}. Any engagement with a forensic accountant is
          directly between you (or your solicitor on your behalf) and the expert,
          subject to separate terms, conflicts checks, and court directions
          where applicable.
        </p>

        <h2>Expert evidence and proceedings</h2>
        <p>
          Family court accountants provide independent expert evidence in
          financial remedy, Schedule 1, TOLATA, and related proceedings. They
          do not act as your lawyer. You must obtain independent legal advice
          from a qualified family lawyer for your matter.
        </p>

        <h2>Information accuracy</h2>
        <p>
          Website content is for general information on family finance and
          forensic accounting topics. It is not advice on any specific case,
          court outcome, or settlement. Timelines and scope vary by case.
        </p>

        <h2>Referrals</h2>
        <p>
          We may receive a referral arrangement with experts where permitted.
          Expert engagement terms are agreed separately between you and the
          expert.
        </p>

        <h2>Acceptable use</h2>
        <p>
          You must not misuse this website, submit false information, or attempt
          to interfere with its operation. We may refuse or discontinue service
          where misuse is identified.
        </p>

        <h2>Liability</h2>
        <p>
          To the fullest extent permitted by law, we exclude liability for loss
          arising from reliance on website content or from acts or omissions of
          referred experts. Nothing in these terms excludes liability for fraud,
          death, or personal injury caused by negligence where such exclusion is
          not permitted.
        </p>

        <h2>Governing law</h2>
        <p>
          These terms are governed by the laws of state family courts. The courts
          of state family courts have exclusive jurisdiction, subject to mandatory
          consumer protections where applicable.
        </p>

        <h2>Contact</h2>
        <p>Questions: {SITE_EMAIL}</p>
      </div>
    </PageShell>
  );
}
