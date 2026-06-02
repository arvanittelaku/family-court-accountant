import type { Metadata } from "next";
import { ContentCard } from "@/components/ContentCard";
import { PageShell } from "@/components/PageShell";
import { PROCEEDINGS } from "@/lib/proceedings-data";
import { buildPageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = buildPageMetadata({
  title:
    "Family Court Proceedings | Financial Remedy, Schedule 1, TOLATA & Nuptial",
  description:
    "Family court accountant support for financial remedy divorce, Schedule 1 Children Act, TOLATA cohabitation, and nuptial agreement proceedings across the UK.",
  path: "/proceedings",
});

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Proceedings", href: "/proceedings" },
];

export default function ProceedingsHubPage() {
  return (
    <PageShell
      breadcrumbs={breadcrumbs}
      title="Family Court Proceedings"
      subtitle="Four distinct proceedings where a qualified family court accountant provides forensic accounting and expert witness evidence across the UK."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {PROCEEDINGS.map((proceeding) => (
          <ContentCard
            key={proceeding.slug}
            href={`/proceedings/${proceeding.slug}`}
            title={proceeding.hubLabel}
            description={proceeding.metaDescription}
          />
        ))}
      </div>
    </PageShell>
  );
}
