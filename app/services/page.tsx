import type { Metadata } from "next";
import Link from "next/link";
import { ContentCard } from "@/components/ContentCard";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { buildPageMetadata } from "@/lib/seo-metadata";
import { buildServicesGraph } from "@/lib/seo/schema";
import { SERVICES } from "@/lib/services-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Family Court Accountant Services UK | Full Service List",
  description:
    "UK family court accountant services: business valuation, hidden asset investigation, Form E analysis, income assessment, lifestyle analysis, add-backs, and FPR Part 25 compliant expert reports.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <PageShell
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
      ]}
      title="Family Court Accountant Services UK"
      subtitle="Independent forensic accounting and FPR Part 25 expert evidence for financial remedy, Schedule 1, TOLATA, and nuptial agreement proceedings."
    >
      <JsonLd data={buildServicesGraph()} />
      <p className="text-body leading-relaxed">
        Family court accountants provide specialist financial analysis and expert
        witness evidence across UK family proceedings. Select a service below for
        methodology, related proceedings, and service-specific FAQs. See{" "}
        <Link href="/how-it-works" className="font-semibold text-accent">
          how it works
        </Link>{" "}
        for the end-to-end process, or{" "}
        <Link href="/contact" className="font-semibold text-accent">
          contact us
        </Link>{" "}
        to instruct an expert.
      </p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {SERVICES.map((service) => (
          <ContentCard
            key={service.id}
            href={`/services/${service.id}`}
            title={service.title}
            description={service.shortDescription}
          />
        ))}
      </div>
    </PageShell>
  );
}
