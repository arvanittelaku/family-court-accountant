import type { Metadata } from "next";
import Link from "next/link";
import { DataTable } from "@/components/DataTable";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { RelatedLinks } from "@/components/RelatedLinks";
import { howItWorksClusterLinks } from "@/lib/seo/clusterLinks";
import { buildPageMetadata } from "@/lib/seo-metadata";
import { buildArticleSchema } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "How a Family Court Accountant Works | Step-by-Step UK Guide",
  description:
    "Step-by-step guide to what a family court accountant does in UK proceedings: from Form E disclosure to SJE appointment, expert report, and oral evidence.",
  path: "/how-it-works",
});

const phaseOverviewRows = [
  ["1. Expert appointment", "Solicitors and court", "2 to 4 weeks"],
  ["2. Document review", "Expert with parties", "2 to 4 weeks"],
  ["3. Financial analysis", "Expert", "4 to 8 weeks"],
  ["4. Expert report", "Expert", "2 to 4 weeks"],
  ["5. Written questions and court", "All parties and expert", "2 to 8 weeks"],
];

const fprAppointmentRows = [
  ["Identify need for expert", "Solicitor", "Early in proceedings"],
  ["Agree SJE or party-appointed", "Both solicitors", "MIAM or Directions stage"],
  ["Apply for court permission", "Applicant solicitor", "First Directions Appointment"],
  ["Court grants permission", "Court", "At or after FDA"],
  ["Joint letter of instruction", "Both solicitors (SJE)", "Within 14 days of permission"],
  ["Conflict check and engagement", "Expert", "Within 7 days of letter"],
  ["Expert confirms instructions", "Expert", "Before work begins"],
];

const sjeComparisonRows = [
  [
    "Number of experts",
    "One accountant for both parties",
    "Separate expert per party",
  ],
  [
    "Instruction",
    "Joint letter signed by both solicitors",
    "Separate letters to each expert",
  ],
  [
    "Cost",
    "Typically shared equally",
    "Each party pays their own expert",
  ],
  [
    "Report",
    "Single report for the court",
    "Competing reports possible",
  ],
  [
    "Court preference",
    "Default in most financial remedy cases",
    "High-value or highly polarised cases only",
  ],
  [
    "Expert duty",
    "Duty to the court (FPR 25.3)",
    "Same duty to the court (FPR 25.3)",
  ],
];

const timelineRows = [
  ["Appointment and instruction", "2 to 4 weeks"],
  ["Document collection", "2 to 4 weeks"],
  ["Financial analysis", "4 to 8 weeks"],
  ["Draft report", "2 to 4 weeks"],
  ["Written questions and response", "2 to 4 weeks"],
  ["Total (standard case)", "3 to 5 months"],
  ["Urgent or expedited", "4 to 8 weeks"],
];

export default function HowItWorksPage() {
  const articleLd = buildArticleSchema({
    headline: "How a Family Court Accountant Works: Step-by-Step UK Guide",
    description:
      "Step-by-step guide to what a family court accountant does in UK proceedings: from Form E disclosure to SJE appointment, expert report, and oral evidence.",
    url: `${SITE_URL}/how-it-works`,
    aboutId: "business-valuation",
  });

  return (
    <PageShell
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "How It Works", href: "/how-it-works" },
      ]}
      title="How a Family Court Accountant Works: Step-by-Step UK Guide"
      subtitle="Definition-first guide for solicitors and individuals: appointment, analysis, reporting, and court attendance in UK family financial proceedings."
    >
      <JsonLd data={articleLd} />
      <div className="prose-content">
        <h2>What is a family court accountant?</h2>
        <p>
          A family court accountant is a forensic accountant who provides
          independent financial analysis and expert witness evidence in family
          proceedings. They bridge accounting and family law: reviewing{" "}
          <Link href="/guides/form-e-financial-disclosure-guide">Form E</Link>{" "}
          disclosure, valuing businesses, investigating hidden assets, and
          preparing FPR Part 25 compliant reports the court can rely on. Unlike
          a regular accountant who prepares accounts, a family court accountant
          forensically tests whether disclosures are complete, traces
          concealed resources, and explains findings in plain language for
          judges and lay clients.
        </p>

        <h2>Overview: what to expect</h2>
        <p>
          A family court accountant engagement typically moves through five
          phases: initial instruction, document review, financial analysis,
          report preparation, and court attendance. The timeline depends on
          proceedings type, complexity of the finances, and the court&apos;s
          timetable. In{" "}
          <Link href="/proceedings/financial-remedy-divorce">
            financial remedy
          </Link>
          ,{" "}
          <Link href="/proceedings/schedule-1-children-act">Schedule 1</Link>,{" "}
          <Link href="/proceedings/tolata-cohabitation">TOLATA</Link>, or{" "}
          <Link href="/proceedings/nuptial-agreements">nuptial agreement</Link>{" "}
          work, the same core phases apply, though TOLATA uses CPR Part 35
          rather than FPR Part 25 for expert evidence.
        </p>
        <DataTable
          caption="Five-phase process overview"
          headers={["Phase", "Who does it", "Typical timeline"]}
          rows={phaseOverviewRows}
        />

        <h2>Two tracks: solicitors and individuals</h2>
        <p>
          <strong>For solicitors and barristers:</strong> you identify the need
          for expert evidence, agree scope and appointment type, obtain court
          permission where required, and jointly instruct under FPR Part 25.
          You provide Form E bundles, company accounts, and bank statements,
          then manage written questions and hearing attendance. See{" "}
          <Link href="/how-to-instruct">how to instruct</Link> and{" "}
          <Link href="/qualifications">qualifications</Link> for practical
          steps and credential checks.
        </p>
        <p>
          <strong>For individuals going through divorce:</strong> you do not
          instruct the expert directly. Your family law solicitor appoints the
          accountant, usually as a Single Joint Expert (SJE) shared with your
          spouse. You experience the process as document requests, a waiting
          period while analysis runs, and eventually a report that supports
          negotiation or court. If you suspect hidden assets or need a business
          valued, raise this early with your solicitor. Our{" "}
          <Link href="/who-we-help/individuals-going-through-divorce">
            guide for individuals
          </Link>{" "}
          explains signs you may need accountant evidence.{" "}
          <Link href="/contact">Contact us</Link> to discuss indicative costs.
        </p>

        <h2>Phase 1: getting the expert appointed (FPR Part 25)</h2>
        <p>
          In financial remedy and most family finance cases, court permission is
          required before a forensic accountant is formally instructed. Solicitors
          first agree whether a Single Joint Expert or party-appointed experts
          are appropriate. In most cases below the highest value, the court
          directs a Single Joint Expert: one accountant, one report, costs
          usually shared equally. See our{" "}
          <Link href="/guides/fpr-part-25-expert-appointment">
            FPR Part 25 guide
          </Link>{" "}
          for full detail on permission, joint letters, and written questions.
        </p>
        <DataTable
          caption="FPR Part 25 expert appointment process"
          headers={["Step", "Who", "Timeline"]}
          rows={fprAppointmentRows}
        />

        <h3>Single Joint Expert vs party-appointed expert</h3>
        <p>
          The court favours a Single Joint Expert to control cost and avoid
          duelling opinions. Party-appointed experts may be permitted where
          asset values are very high, structures are complex, or positions are
          irreconcilable. Both appointment types require experts who owe their
          primary duty to the court under FPR 25.3, not to the instructing
          party.
        </p>
        <DataTable
          caption="SJE vs party-appointed comparison"
          headers={["Feature", "Single Joint Expert (SJE)", "Party-appointed"]}
          rows={sjeComparisonRows}
        />

        <h2>Phase 2: document review</h2>
        <p>
          The expert&apos;s analysis depends on complete disclosure. Standard
          bundles include Form E and all exhibits, three years of audited or
          filed business accounts, management accounts for the last twelve
          months, personal and company tax returns, twelve or more months of
          bank statements (personal and business), shareholding documents, and
          trust deeds where relevant. Incomplete disclosure limits what the
          expert can conclude and should be flagged in the report.
        </p>
        <p>
          Form E review often starts before full expert appointment: a focused
          review can identify gaps for the questionnaire stage. See{" "}
          <Link href="/services/form-e-review">Form E review</Link> and{" "}
          <Link href="/case-types/hidden-assets-investigation">
            hidden assets investigation
          </Link>{" "}
          for related services.
        </p>

        <h2>Phase 3: financial analysis</h2>
        <p>
          Analysis type depends on the case.{" "}
          <Link href="/case-types/business-valuation-divorce">
            Business valuation
          </Link>{" "}
          applies maintainable earnings, DCF, or net asset value methods with
          matrimonial adjustments: personal goodwill exclusion, normalisation of
          director pay, and separate liquidity analysis.{" "}
          <Link href="/case-types/hidden-assets-investigation">
            Hidden asset work
          </Link>{" "}
          cross-references declared figures against bank statements, lifestyle
          spend, and transfer trails.{" "}
          <Link href="/case-types/lifestyle-analysis-income">
            Lifestyle analysis
          </Link>{" "}
          compares evidenced expenditure to declared income to quantify gaps
          suggesting undisclosed resources.{" "}
          <Link href="/case-types/add-backs-financial-reconstruction">
            Add-backs
          </Link>{" "}
          identify personal expenditure run through the business that should
          increase available capital for division.
        </p>
        <p>
          Overseas assets, trusts, cryptocurrency, and self-employed income
          structures require the same forensic discipline with additional
          tracing steps. High net worth cases may involve multiple entities and
          party-appointed experts at each side.
        </p>

        <h2>Phase 4: expert report</h2>
        <p>
          FPR Part 25 compliant reports include a statement of truth,
          qualifications and experience, summary of instructions and documents
          reviewed, assumptions, analysis, opinion, limitations where disclosure
          was incomplete, and a declaration of independence. Reports must be
          understandable to non-accountants: judges and lay clients need clear
          summaries with technical schedules in appendices. Defective formalities
          or arithmetic errors delay hearings and weaken credibility under
          cross-examination.
        </p>
        <p>
          Typical business valuation reports range from £2,000 for straightforward
          owner-managed companies to £15,000 or more for multiple entities.
          Standard turnaround is three to
          six weeks once documents are complete, though urgent timetables can
          compress this at additional cost.
        </p>

        <h2>Phase 5: written questions and court attendance</h2>
        <p>
          After the report is served, parties may put written questions under
          FPR Part 25 to clarify methodology, data, or calculations. Answers
          form part of the evidence bundle. Experts may attend Financial
          Dispute Resolution hearings indirectly through their figures, and
          final hearings for oral evidence or hot-tubbing where ordered.
          Preparation includes familiarity with both parties&apos; positions
          and adherence to Ikarian Reefer duties: independent, transparent, and
          within expertise.
        </p>
        <p>
          Solicitors remain responsible for case strategy and settlement
          structure. The accountant supplies technical value, liquidity, and
          adjustment figures that anchor negotiation under Section 25 Matrimonial
          Causes Act 1973 factors in financial remedy, or child-focused analysis
          in Schedule 1.
        </p>

        <h2>Timeline: what to expect</h2>
        <DataTable
          caption="Typical engagement timeline"
          headers={["Phase", "Typical timeline"]}
          rows={timelineRows}
        />
        <p>
          Urgent instructions before FDR or with short court deadlines may
          require expedited fees and parallel document production by both
          parties. Early identification of valuation or investigation need
          avoids agreed orders based on incomplete figures.
        </p>

        <h2>When to instruct and next steps</h2>
        <p>
          Instruct when business interests need independent valuation, Form E
          raises red flags, lifestyle does not match declared income, or
          add-backs and reconstruction are in dispute. Solicitors should review{" "}
          <Link href="/how-to-instruct">how to instruct</Link>, verify{" "}
          <Link href="/qualifications">qualifications</Link>, and submit an
          enquiry via <Link href="/contact">contact</Link>. Individuals should
          discuss concerns with their solicitor first; we can help you
          understand what expert evidence involves and match the right
          specialist to your case.
        </p>

        <RelatedLinks links={howItWorksClusterLinks} />
      </div>
    </PageShell>
  );
}
