import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { RelatedLinks } from "@/components/RelatedLinks";
import { buildOrganizationSchema } from "@/lib/seo/schema";
import { solicitorsClusterLinks } from "@/lib/seo/clusterLinks";
import { buildPageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Family Court Accountants for Family Law Attorneys | Expert Witnesses",
  description:
    "Forensic accountants and family court expert witnesses for family law attorneys. Court-compliant reports, joint expert appointments, business valuation, and hidden asset investigation.",
  path: "/who-we-help/solicitors-barristers",
});

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Who We Help", href: "/who-we-help" },
  { name: "Family Law Attorneys", href: "/who-we-help/solicitors-barristers" },
];

export default function SolicitorsBarristersPage() {
  return (
    <PageShell
      breadcrumbs={breadcrumbs}
      title="Family Court Accountants for Family Law Attorneys"
      subtitle="Court-compliant expert reports, joint expert appointments, and credible forensic accounting evidence for equitable distribution, child support, cohabitation property, and marital agreement proceedings."
    >
      <JsonLd
        data={{
          "@context": "https://schema.org",
          ...buildOrganizationSchema(),
        }}
      />

      <div className="prose-content">
        <h2>What family law attorneys need from a family court accountant</h2>
        <p>
          Family law attorneys need expert reports that are technically sound, clearly
          written for a family court judge, and defensible under cross-examination. You
          need experts who understand family court procedure, financial affidavit
          disclosure, and equitable distribution factors.
        </p>

        <h2>How we support attorneys</h2>
        <ul>
          <li>Business valuation (joint expert or party-appointed)</li>
          <li>Hidden asset investigation (preliminary review or full report)</li>
          <li>Financial affidavit review and discovery support</li>
          <li>Income analysis and lifestyle investigation</li>
          <li>Add-backs analysis</li>
          <li>Overseas asset and trust analysis</li>
          <li>Cryptocurrency and digital asset valuation</li>
          <li>Court-compliant expert reports</li>
          <li>Joint expert appointment and joint instruction</li>
          <li>Testimony at settlement conference and trial</li>
        </ul>

        <h2>Expert appointment process</h2>
        <p>Brief guide for attorneys instructing a family court accountant:</p>
        <ol>
          <li>Identify need for expert evidence</li>
          <li>Agree expert scope and identity with opposing counsel (or apply to court)</li>
          <li>File motion for expert appointment where required</li>
          <li>Joint letter of instruction (joint expert) or separate (party-appointed)</li>
          <li>Expert delivers report within directed timetable</li>
          <li>Deposition or written questions process</li>
          <li>Updated report if needed</li>
          <li>Expert attends hearing if required</li>
        </ol>

        <h2>Joint experts in family court</h2>
        <p>
          Courts regulate what expert evidence is admitted. In many cases, the judge
          appoints one expert accountant for both sides, producing a joint report for the
          court. This is the court-appointed joint expert appointment.
        </p>
        <p>
          The joint expert owes a duty to the court, not to either party. The joint
          letter of instruction sets out agreed questions, documents, and timetable.
          After the report is served, both parties may depose the expert or submit
          written questions, and the expert may be required to testify at trial.
        </p>
        <p>
          For a detailed walkthrough of appointment, joint letters, and testimony, see
          our{" "}
          <Link href="/guides/fpr-part-25-expert-appointment">
            expert witness appointment guide
          </Link>
          .
        </p>

        <div className="mt-10 border-l-2 border-accent bg-section-alt p-6">
          <h2 className="!mt-0 text-xl font-semibold text-heading">
            Instruct a family court accountant
          </h2>
          <p className="!mb-0">
            Submit a brief enquiry and we will match you with a qualified family court
            accountant. Response within one business day.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex min-h-[44px] items-center justify-center border border-primary bg-primary px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-primary/90"
          >
            Submit enquiry
          </Link>
        </div>

        <RelatedLinks links={solicitorsClusterLinks} />
      </div>
    </PageShell>
  );
}
