import type { Metadata } from "next";
import { ContentCard } from "@/components/ContentCard";
import { PageShell } from "@/components/PageShell";
import { CASE_TYPES } from "@/lib/case-types-data";
import { buildPageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Case Types Requiring a Family Court Accountant | Guide",
  description:
    "Which family proceedings need a family court accountant? Business valuation, hidden assets, lifestyle analysis, add-backs, overseas assets, and more explained.",
  path: "/case-types",
});

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Case Types", href: "/case-types" },
];

export default function CaseTypesHubPage() {
  return (
    <PageShell
      breadcrumbs={breadcrumbs}
      title="Case Types Requiring a Family Court Accountant"
      subtitle="Ten common financial scenarios in family proceedings where forensic accountants provide expert analysis, reports, and court evidence."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {CASE_TYPES.map((caseType) => (
          <ContentCard
            key={caseType.slug}
            href={`/case-types/${caseType.slug}`}
            title={caseType.hubLabel}
            description={caseType.metaDescription}
          />
        ))}
      </div>
    </PageShell>
  );
}
