import type { Metadata } from "next";
import Link from "next/link";
import { InstructForm } from "@/components/InstructForm";
import { PageShell } from "@/components/PageShell";
import { buildPageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = buildPageMetadata({
  title:
    "How to Instruct a Family Court Accountant | Solicitors and Individuals Guide",
  description:
    "How solicitors and individuals instruct a family court accountant: joint expert vs party-appointed, expert witness standards, letter of instruction, and documents needed.",
  path: "/how-to-instruct",
});

const solicitorSteps = [
  {
    title: "Identify proceedings type",
    detail:
      "Confirm whether the case is financial remedy, Schedule 1 Children Act, TOLATA (CPR Part 35), or nuptial agreement analysis. Scope and procedural rules differ. See our proceedings pages for context.",
  },
  {
    title: "Decide joint expert or party-appointed",
    detail:
      "In most financial remedy cases, propose a court-appointed joint expert. Party-appointed experts may be justified in high-value or highly contested matters. Agree with the other side where possible before applying to court.",
  },
  {
    title: "Apply for court permission where required",
    detail:
      "File an expert witness standards application setting out why expert evidence is necessary, why the named expert is suitable, proposed questions, and cost estimate. Obtain permission before work starts unless directions already allow it.",
  },
  {
    title: "Prepare the letter of instruction",
    detail:
      "For joint expert appointments, both solicitors sign a joint letter defining proceedings, parties, questions, assumptions, documents provided, fee cap, and timetable. Vague questions produce vague reports.",
  },
  {
    title: "Provide financial documents",
    detail:
      "Supply financial affidavit and exhibits, company accounts, tax returns, bank statements, shareholding documents, and trust deeds. Flag any gaps so the expert can state limitations in the report.",
  },
  {
    title: "Expert delivers report within timetable",
    detail:
      "The expert confirms conflicts, accepts instructions, and delivers the expert witness standards compliant report by the court-directed date. Draft discussion may occur where agreed in the letter.",
  },
  {
    title: "Written questions and hearing attendance",
    detail:
      "Parties may put written questions under expert witness standards. The expert answers within the permitted period and attends FDR or final hearing for oral evidence if directed.",
  },
];

const individualSteps = [
  {
    title: "Talk to your family law solicitor",
    detail:
      "A family court accountant works alongside your solicitor, not instead of them. Your solicitor instructs the expert, manages court applications, and uses the report in negotiation or hearings.",
  },
  {
    title: "Explain what concerns you",
    detail:
      "Tell your solicitor if your spouse owns a business, declared income seems too low for your lifestyle, assets may be hidden, or financial affidavit figures do not match what you know about family finances.",
  },
  {
    title: "Gather documents you already have",
    detail:
      "Bank statements, old tax returns, records of major purchases, property details, and names of accountants or advisers your spouse used help your solicitor and the expert focus the investigation.",
  },
  {
    title: "Your solicitor requests expert evidence",
    detail:
      "If accountant evidence is needed, your solicitor will usually propose a court-appointed joint expert shared with your spouse, subject to court approval. You do not choose or pay the expert alone in most cases.",
  },
  {
    title: "Both sides provide disclosure",
    detail:
      "financial affidavit, business accounts, and bank statements are exchanged. The expert reviews what both parties supply. Incomplete disclosure from either side limits what can be concluded.",
  },
  {
    title: "Wait for the expert report",
    detail:
      "Analysis typically takes several weeks. The report sets out value, lifestyle gaps, add-backs, or other findings in plain language. Your solicitor explains what it means for your case.",
  },
  {
    title: "Use the report in negotiation or court",
    detail:
      "Figures from the report support settlement discussions, questionnaire requests, and court hearings. Written questions may follow if either side needs clarification before FDR or trial.",
  },
];

export default function HowToInstructPage() {
  return (
    <PageShell
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "How to Instruct", href: "/how-to-instruct" },
      ]}
      title="How to Instruct a Family Court Accountant"
      subtitle="Step-by-step guidance for family law attorneys and for individuals going through divorce or separation."
    >
      <div className="prose-content">
        <p>
          Instructing a family court accountant follows expert witness standards in family
          proceedings (or CPR Part 35 in TOLATA). This page sets out seven
          steps for solicitors and a parallel seven-step path for individuals.
          See <Link href="/how-it-works">how it works</Link> for the full
          process, <Link href="/qualifications">qualifications</Link> for
          credential checks, and <Link href="/contact">contact us</Link> for
          scope and timeline.
        </p>

        <h2 id="solicitors">Section 1: for family law attorneys</h2>
        <ol className="list-none space-y-6 pl-0">
          {solicitorSteps.map((step, index) => (
            <li key={step.title}>
              <h3 className="!mt-0 text-lg font-bold text-heading">
                Step {index + 1}: {step.title}
              </h3>
              <p className="!mb-0">{step.detail}</p>
            </li>
          ))}
        </ol>

        <h2 id="individuals">Section 2: for individuals going through divorce</h2>
        <p>
          If you are going through divorce and want to understand how a family
          court accountant can help, here is what happens from your perspective.
          You need a solicitor to run proceedings; the accountant provides
          independent financial evidence your solicitor uses on your behalf.
        </p>
        <ol className="list-none space-y-6 pl-0">
          {individualSteps.map((step, index) => (
            <li key={step.title}>
              <h3 className="!mt-0 text-lg font-bold text-heading">
                Step {index + 1}: {step.title}
              </h3>
              <p className="!mb-0">{step.detail}</p>
            </li>
          ))}
        </ol>

        <h2>Red flags when instructing</h2>
        <ul>
          <li>
            Instructing before court permission where expert witness standards requires it
          </li>
          <li>Joint letter with unfocused or argumentative questions</li>
          <li>Withholding documents from the expert while expecting firm conclusions</li>
          <li>
            Selecting an expert with no family court or matrimonial valuation
            experience
          </li>
          <li>Scope creep without amended instructions or fee agreement</li>
          <li>
            Informal pressure on the expert during without-prejudice negotiations
          </li>
        </ul>
        <p>
          Ready to instruct? Use the form below, or{" "}
          <Link href="/contact">contact us</Link> for a general enquiry. Read our{" "}
          <Link href="/guides/fpr-part-25-expert-appointment">
            expert witness standards guide
          </Link>{" "}
          for appointment detail.
        </p>

        <h2 id="instruct-form">Submit an instruction</h2>
        <p>
          Solicitors can send a short instruction brief here. We respond with
          scope, conflicts check timing, and next steps.
        </p>
      </div>

      <div className="mt-10 max-w-lg">
        <InstructForm />
      </div>
    </PageShell>
  );
}
