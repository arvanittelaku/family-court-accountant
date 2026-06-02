import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DataTable } from "@/components/DataTable";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { RelatedLinks } from "@/components/RelatedLinks";
import { faqPageJsonLd } from "@/lib/json-ld";
import {
  getProceeding,
  SCHEDULE1_COMPARISON,
} from "@/lib/proceedings-data";
import { getProceedingClusterLinks } from "@/lib/seo/clusterLinks";
import { buildPageMetadata } from "@/lib/seo-metadata";
import { proceedingSlugs } from "@/lib/site";

export function generateStaticParams() {
  return proceedingSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const proceeding = getProceeding(slug);
  if (!proceeding) return {};
  return buildPageMetadata({
    title: proceeding.metaTitle,
    description: proceeding.metaDescription,
    path: `/proceedings/${slug}`,
  });
}

function renderSectionContent(content: string | string[]) {
  if (content === "comparison-table") {
    return (
      <DataTable
        headers={SCHEDULE1_COMPARISON.headers}
        rows={SCHEDULE1_COMPARISON.rows}
        caption="Schedule 1 vs financial remedy (divorce): key differences"
      />
    );
  }

  if (Array.isArray(content)) {
    return (
      <ul>
        {content.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  return <p>{content}</p>;
}

export default async function ProceedingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const proceeding = getProceeding(slug);
  if (!proceeding) notFound();

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Proceedings", href: "/proceedings" },
    { name: proceeding.hubLabel, href: `/proceedings/${slug}` },
  ];

  return (
    <PageShell breadcrumbs={breadcrumbs} title={proceeding.h1}>
      {proceeding.faqs && proceeding.faqs.length > 0 ? (
        <JsonLd data={faqPageJsonLd(proceeding.faqs)} />
      ) : null}

      <div className="prose-content">
        {proceeding.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {renderSectionContent(section.content)}
          </section>
        ))}

        {proceeding.faqs && proceeding.faqs.length > 0 ? (
          <>
            <h2>Frequently asked questions</h2>
            <dl className="space-y-8">
              {proceeding.faqs.map((item) => (
                <div key={item.question}>
                  <dt className="font-semibold text-heading">{item.question}</dt>
                  <dd className="mt-2 text-body">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </>
        ) : null}

        <p className="mt-8">
          Learn more about the process in{" "}
          <Link href="/how-it-works">how a family court accountant works</Link>, or{" "}
          <Link href="/contact">contact us</Link> to discuss your case.
        </p>

        <RelatedLinks
          links={getProceedingClusterLinks(
            slug as (typeof proceedingSlugs)[number],
          )}
        />
      </div>
    </PageShell>
  );
}
