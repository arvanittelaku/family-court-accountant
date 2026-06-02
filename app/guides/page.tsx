import type { Metadata } from "next";
import { ContentCard } from "@/components/ContentCard";
import { PageShell } from "@/components/PageShell";
import { GUIDES } from "@/lib/guides-data";
import { buildPageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = buildPageMetadata({
  title:
    "Guides: Family Court Accountants UK | Divorce Finance, Hidden Assets & Business Valuation",
  description:
    "In-depth guides on family court accountants for UK solicitors and individuals — Form E analysis, hidden assets, business valuation in divorce, and more.",
  path: "/guides",
});

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Guides", href: "/guides" },
];

export default function GuidesHubPage() {
  return (
    <PageShell
      breadcrumbs={breadcrumbs}
      title="Guides: Family Court Accountants for UK Solicitors & Individuals"
      subtitle="In-depth guides on divorce finance, hidden assets, Form E disclosure, Schedule 1, TOLATA, and FPR Part 25 expert appointment."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {GUIDES.map((guide) => (
          <ContentCard
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            title={guide.title}
            description={guide.metaDescription}
          />
        ))}
      </div>
    </PageShell>
  );
}
