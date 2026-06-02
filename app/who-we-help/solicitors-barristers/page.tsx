import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { RelatedLinks } from "@/components/RelatedLinks";
import { buildOrganizationSchema } from "@/lib/seo/schema";
import { solicitorsClusterLinks } from "@/lib/seo/clusterLinks";
import { buildPageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = buildPageMetadata({
  title:
    "Family Court Accountants for Solicitors & Barristers UK | FPR Part 25 Expert Witnesses",
  description:
    "Forensic accountants and family court expert witnesses for UK family law solicitors. FPR Part 25 compliant reports, SJE appointments, business valuation, and hidden asset investigation.",
  path: "/who-we-help/solicitors-barristers",
});

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Who We Help", href: "/who-we-help" },
  { name: "Solicitors & Barristers", href: "/who-we-help/solicitors-barristers" },
];

export default function SolicitorsBarristersPage() {
  return (
    <PageShell
      breadcrumbs={breadcrumbs}
      title="Family Court Accountants for UK Family Law Solicitors & Barristers"
      subtitle="FPR Part 25 compliant expert reports, SJE appointments, and credible forensic accounting evidence for financial remedy, Schedule 1, TOLATA, and nuptial agreement proceedings."
    >
      <JsonLd
        data={{
          "@context": "https://schema.org",
          ...buildOrganizationSchema(),
        }}
      />

      <div className="prose-content">
        <h2>What Solicitors Need from a Family Court Accountant</h2>
        <p>
          Family law solicitors and barristers need FPR Part 25 compliant expert reports
          that are technically sound, clearly written for a family law judge, and defensible
          under cross-examination. You need experts who understand family court procedure,
          Form E disclosure, and the Section 25 Matrimonial Causes Act 1973 factors.
        </p>

        <h2>How We Support Solicitors</h2>
        <ul>
          <li>Business valuation (SJE or party-appointed)</li>
          <li>Hidden asset investigation (preliminary review or full report)</li>
          <li>Form E review and questionnaire support</li>
          <li>Income analysis and lifestyle investigation</li>
          <li>Add-backs analysis</li>
          <li>Overseas asset and trust analysis</li>
          <li>Cryptocurrency and digital asset valuation</li>
          <li>FPR Part 25 compliant expert reports</li>
          <li>SJE appointment and joint instruction</li>
          <li>
            Oral evidence at Financial Dispute Resolution hearing and final hearing
          </li>
        </ul>

        <h2>FPR Part 25 Application Process</h2>
        <p>Brief guide for solicitors instructing a family court accountant:</p>
        <ol>
          <li>Identify need for expert evidence</li>
          <li>
            Agree expert scope and identity with the other side (or apply to court)
          </li>
          <li>File application for permission (where required)</li>
          <li>Joint letter of instruction (SJE) or separate (party-appointed)</li>
          <li>Expert delivers report within directed timetable</li>
          <li>Written questions process</li>
          <li>Updated report if needed</li>
          <li>Expert attends hearing if required</li>
        </ol>

        <h2>SJE in the Family Court</h2>
        <p>
          The court regulates what expert evidence is introduced. In most cases below the
          highest value, the judge will only allow one expert accountant acting for both
          sides, producing a joint report for the court. This is the Single Joint Expert
          (SJE) appointment.
        </p>
        <p>
          The SJE owes a duty to the court, not to either party. The joint letter of
          instruction sets out agreed questions, documents, timetable, and fee
          arrangements. After the report is served, both parties may put written questions
          under FPR Part 25, and the expert may be required to attend the FDR or final
          hearing to give oral evidence.
        </p>
        <p>
          For a detailed walkthrough of permission, joint letters, and written questions,
          see our{" "}
          <Link href="/guides/fpr-part-25-expert-appointment">
            FPR Part 25 expert appointment guide
          </Link>
          .
        </p>

        <div className="mt-10 rounded-[var(--radius-card)] border border-border bg-section-alt p-6">
          <h2 className="!mt-0 text-xl font-bold text-heading">
            Instruct a Family Court Accountant
          </h2>
          <p className="!mb-0">
            Submit your case details and we will match you with a qualified UK family court
            accountant. Response within 1 business day.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent/90"
          >
            Instruct a Family Court Accountant
          </Link>
        </div>

        <RelatedLinks links={solicitorsClusterLinks} />
      </div>
    </PageShell>
  );
}
