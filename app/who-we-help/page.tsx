import type { Metadata } from "next";
import { ContentCard } from "@/components/ContentCard";
import { PageShell } from "@/components/PageShell";
import { buildPageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Who We Help | Family Court Accountants for Solicitors & Individuals UK",
  description:
    "Family court accountants for UK family law solicitors needing expert witnesses — and for individuals going through divorce who need financial investigation or business valuation help.",
  path: "/who-we-help",
});

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Who We Help", href: "/who-we-help" },
];

export default function WhoWeHelpPage() {
  return (
    <PageShell
      breadcrumbs={breadcrumbs}
      title="Who We Help"
      subtitle="FamilyCourtAccountant.com serves family law solicitors and barristers in England and Wales who need forensic accountant expert witnesses, and individuals going through UK divorce or separation who need independent financial analysis."
    >
      <div className="grid gap-5 md:grid-cols-2">
        <ContentCard
          href="/who-we-help/solicitors-barristers"
          title="Solicitors & Barristers"
          description="You need a forensic accountant who produces FPR Part 25 compliant expert reports, acts as SJE where directed, and gives credible evidence in the Family Court or High Court."
        />
        <ContentCard
          href="/who-we-help/individuals-going-through-divorce"
          title="Individuals Going Through Divorce"
          description="Your spouse owns a business. Their declared income doesn't match their lifestyle. You suspect assets have been hidden or transferred. You need independent expert help."
        />
      </div>
    </PageShell>
  );
}
