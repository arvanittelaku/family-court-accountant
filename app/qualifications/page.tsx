import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { buildPageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = buildPageMetadata({
  title:
    "Family Court Accountant Qualifications UK | ACA, ICAEW and FPR Part 25 Standards",
  description:
    "What credentials should a UK family court accountant hold? ACA, FCA, ICAEW forensic accreditation, Resolution membership, and FPR Part 25 compliance explained.",
  path: "/qualifications",
});

export default function QualificationsPage() {
  return (
    <PageShell
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Qualifications", href: "/qualifications" },
      ]}
      title="Family Court Accountant Qualifications & Credentials"
      subtitle="Core credentials, family court experience, FPR Part 25 compliance, and red flags when selecting a forensic accountant for UK family proceedings."
    >
      <div className="prose-content">
        <h2>Core credentials</h2>

        <h3>ACA / FCA (ICAEW)</h3>
        <p>
          Chartered accountancy is the essential baseline for a family court
          forensic accountant. ACA (Associate) and FCA (Fellow) qualifications
          through ICAEW demonstrate rigorous technical training, professional
          ethics, and ongoing CPD. For matrimonial business valuation and Form E
          analysis, the expert should hold or have held an active practising
          certificate where audit or reporting opinions are involved.
        </p>

        <h3>ICAEW Forensic & Expert Witness Accreditation</h3>
        <p>
          Family court forensic accounting expert witnesses are typically
          qualified accountants accredited by recognised bodies including ICAEW
          or ACCA. ICAEW maintains a Register of Accredited Accountant Expert
          Witnesses in partnership with the Academy of Experts, with vetting
          that confirms court-reporting experience and adherence to expert
          witness duties. Accreditation signals the expert can present findings
          clearly and concisely under cross-examination.
        </p>

        <h3>ACCA / FCCA</h3>
        <p>
          ACCA and FCCA (Fellow) qualifications are widely recognised in UK
          forensic and family work. Solicitors should confirm the expert has
          family court report samples and matrimonial valuation experience, not
          only general audit or tax practice.
        </p>

        <h3>Resolution membership</h3>
        <p>
          Resolution (formerly the Solicitors Family Law Association) promotes a
          non-adversarial approach in family proceedings. Accountants working in
          this space should be familiar with Resolution principles and the
          culture of disclosure and early settlement that family lawyers expect.
        </p>

        <h3>CFE (Certified Fraud Examiner)</h3>
        <p>
          CFE certification is relevant for{" "}
          <Link href="/services/hidden-asset-investigation">
            hidden asset investigation
          </Link>{" "}
          cases involving tracing, lifestyle analysis, and asset concealment. It
          complements chartered accountancy rather than replacing it.
        </p>

        <h2>Family court specific experience</h2>
        <p>
          Credentials alone do not make a family court accountant. Solicitors
          and individuals should verify:
        </p>
        <ul>
          <li>Active practice in financial remedy and related family proceedings</li>
          <li>History of FPR Part 25 expert reports accepted by the Family Court</li>
          <li>Prior Single Joint Expert appointments and joint instruction experience</li>
          <li>
            Knowledge of matrimonial valuation principles, including personal
            versus business goodwill and liquidity analysis
          </li>
          <li>
            Familiarity with Form E, financial disclosure questionnaires, and
            Section 25 Matrimonial Causes Act 1973 factors
          </li>
          <li>
            Experience in Schedule 1, TOLATA (CPR Part 35), or nuptial agreement
            work where those proceedings apply
          </li>
          <li>Professional indemnity insurance appropriate to expert witness work</li>
        </ul>
        <p>
          See <Link href="/how-to-instruct">how to instruct</Link> for
          practical appointment steps.
        </p>

        <h2>FPR Part 25 compliance</h2>
        <p>
          Part 25 of the Family Procedure Rules 2010 governs expert evidence in
          family proceedings. FPR 25.3 states that the expert&apos;s duty is to
          help the court on matters within their expertise, overriding any
          obligation to the instructing party. Reports must comply with
          Practice Direction 25B, include a statement of truth, and address
          only matters within the expert&apos;s competence.
        </p>
        <p>
          Key requirements include: court permission before instruction where
          directed; clear identification as SJE or party-appointed at the
          outset; transparent assumptions and limitations; readiness to answer
          written questions; and attendance at hearing if ordered. Experts must
          follow the Ikarian Reefer duties: independent, objective, and willing
          to change opinion if new data requires it. See our{" "}
          <Link href="/guides/fpr-part-25-expert-appointment">
            FPR Part 25 guide
          </Link>{" "}
          and <Link href="/glossary#the-ikarian-reefer-duties">glossary</Link>{" "}
          for further detail.
        </p>

        <h2>Red flags when selecting an expert</h2>
        <ul>
          <li>
            No family court experience: a civil fraud or commercial forensic
            accountant is not automatically appropriate for matrimonial
            proceedings
          </li>
          <li>
            Cannot explain the difference between personal and business goodwill
            in a divorce valuation
          </li>
          <li>
            No knowledge of add-backs, lifestyle analysis, or Form E disclosure
            framework
          </li>
          <li>No prior FPR Part 25 report experience or court acceptance</li>
          <li>
            Full-time expert witness with no active accounting practice and
            outdated technical knowledge
          </li>
          <li>
            Unwilling to acknowledge duty to the court or pressure to advocate
            for one party&apos;s position
          </li>
          <li>Vague fee estimates with no scoped joint letter of instruction</li>
        </ul>
        <p>
          Selecting the right expert early supports permission applications,
          realistic client cost estimates, and reports that withstand scrutiny at
          FDR and final hearing.{" "}
          <Link href="/contact">Contact us</Link> to discuss credentials and
          case fit.
        </p>
      </div>
    </PageShell>
  );
}
