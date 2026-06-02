import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { RelatedLinks } from "@/components/RelatedLinks";
import { individualsClusterLinks } from "@/lib/seo/clusterLinks";
import { buildPageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = buildPageMetadata({
  title:
    "Going Through Divorce? Family Court Accountant Help UK | Hidden Assets & Business Valuation",
  description:
    "If your spouse owns a business, you suspect hidden assets, or their declared income doesn't match their lifestyle, a family court accountant can help. Get independent expert financial analysis.",
  path: "/who-we-help/individuals-going-through-divorce",
});

export default function IndividualsGoingThroughDivorcePage() {
  return (
    <PageShell
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Who We Help", href: "/who-we-help" },
        {
          name: "Individuals Going Through Divorce",
          href: "/who-we-help/individuals-going-through-divorce",
        },
      ]}
      title="Going Through Divorce? How a Family Court Accountant Can Help You"
      subtitle="If your spouse controls the finances, owns a business, or their disclosure does not match the life you lived together, independent expert analysis can help you understand your true position."
    >
      <div className="prose-content">
        <h2>You Don&apos;t Have to Take Your Spouse&apos;s Word for It</h2>
        <p>
          Divorce is stressful enough without wondering whether the financial figures you
          have been given are accurate. In financial remedy proceedings, both parties must
          complete a Form E, a detailed financial statement disclosing all assets, income,
          liabilities, and outgoings.
        </p>
        <p>
          The problem is that a spouse who controls a business or manages the family
          finances has significant opportunity to understate what they have. Many do. A
          family court accountant looks behind the figures to find the real financial
          picture, so you and your solicitor can challenge incomplete or misleading
          disclosure with evidence.
        </p>

        <h2>Signs You May Need a Family Court Accountant</h2>
        <ul>
          <li>
            Your spouse owns a business and you don&apos;t trust the valuation they have
            put on it
          </li>
          <li>
            Their declared salary or drawings seem much lower than your actual lifestyle
            during the marriage
          </li>
          <li>Significant assets seem to have disappeared or been transferred</li>
          <li>
            You know of bank accounts, investments, or property that haven&apos;t been
            declared
          </li>
          <li>
            The business accounts look very different from when you last saw them
          </li>
          <li>Your spouse has recently transferred property to relatives</li>
        </ul>

        <h2>What a Family Court Accountant Can Do For You</h2>
        <ul>
          <li>
            Review your spouse&apos;s Form E and business accounts to identify
            inconsistencies and missing information
          </li>
          <li>
            Value the family business independently, not using your spouse&apos;s
            accountant&apos;s figures
          </li>
          <li>
            Investigate lifestyle versus declared income, quantifying the true standard of
            living during the marriage
          </li>
          <li>Trace assets that may have been hidden or transferred</li>
          <li>
            Identify add-backs: expenditure that should be treated as available capital
          </li>
          <li>Prepare an expert report for your solicitor and the court</li>
        </ul>

        <h2>Do I Need a Solicitor First?</h2>
        <p>
          Yes. A family court accountant works alongside your family law solicitor. Your
          solicitor instructs the expert and manages the legal proceedings, including court
          applications for expert permission where needed. If you don&apos;t yet have a
          solicitor, we can help you understand what you need and guide you through the
          process. See{" "}
          <Link href="/how-to-instruct">how to instruct a family court accountant</Link>{" "}
          for the individual pathway.
        </p>

        <h2>How Much Will It Cost?</h2>
        <p>
          Costs depend on the complexity of your case and the work required. Business
          valuation reports typically range from £2,000 to £15,000 or more for complex
          cases. Hourly rates for forensic review work are commonly £150 to £500 per hour.
          In many cases, costs are shared between parties when the court directs a Single
          Joint Expert (SJE) appointment. Your solicitor can advise whether an SJE or
          party-appointed expert is appropriate in your case.{" "}
          <Link href="/contact">Contact us</Link> to discuss your matter.
        </p>

        <div className="mt-10 rounded-[var(--radius-card)] border border-border bg-section-alt p-6">
          <h2 className="!mt-0 text-xl font-bold text-heading">
            Talk to a Family Court Accountant
          </h2>
          <p className="!mb-0">
            Tell us about your situation and we will explain how independent financial
            analysis could help. No obligation. Response within 1 business day.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent/90"
          >
            Talk to a Family Court Accountant
          </Link>
        </div>

        <RelatedLinks links={individualsClusterLinks} />
      </div>
    </PageShell>
  );
}
