import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { RelatedLinks } from "@/components/RelatedLinks";
import { getCaseType } from "@/lib/case-types-data";
import { faqPageJsonLd } from "@/lib/json-ld";
import { getCaseTypeClusterLinks } from "@/lib/seo/clusterLinks";
import { buildPageMetadata } from "@/lib/seo-metadata";
import { caseTypeSlugs } from "@/lib/site";

export function generateStaticParams() {
  return caseTypeSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseType = getCaseType(slug);
  if (!caseType) return {};
  return buildPageMetadata({
    title: caseType.metaTitle,
    description: caseType.metaDescription,
    path: `/case-types/${slug}`,
  });
}

export default async function CaseTypePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseType = getCaseType(slug);
  if (!caseType) notFound();

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Case Types", href: "/case-types" },
    { name: caseType.hubLabel, href: `/case-types/${slug}` },
  ];

  return (
    <PageShell breadcrumbs={breadcrumbs} title={caseType.h1}>
      <JsonLd data={faqPageJsonLd(caseType.faqs)} />

      <div className="prose-content">
        {caseType.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        <h2>Related proceedings</h2>
        <ul>
          {caseType.relatedProceedings.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>

        <h2>Related services</h2>
        <ul>
          {caseType.relatedServices.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>

        <h2>Frequently asked questions</h2>
        <dl className="space-y-8">
          {caseType.faqs.map((item) => (
            <div key={item.question}>
              <dt className="font-semibold text-heading">{item.question}</dt>
              <dd className="mt-2 text-body">{item.answer}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-8">
          See{" "}
          <Link href="/how-it-works">how a family court accountant works</Link> or{" "}
          <Link href="/contact">contact us</Link> to discuss instructing an expert.
        </p>

        <RelatedLinks
          links={getCaseTypeClusterLinks(slug as (typeof caseTypeSlugs)[number])}
        />
      </div>
    </PageShell>
  );
}
