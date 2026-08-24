import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DataTable } from "@/components/DataTable";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { RelatedLinks } from "@/components/RelatedLinks";
import { getService, SERVICE_IDS } from "@/lib/services-data";
import { getServiceClusterLinks } from "@/lib/seo/clusterLinks";
import { buildPageMetadata } from "@/lib/seo-metadata";
import { buildFaqSchema } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/site";
import type { serviceSlugs } from "@/lib/site";

export function generateStaticParams() {
  return SERVICE_IDS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildPageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${slug}`,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: service.title, href: `/services/${slug}` },
  ];

  const relatedLinks = [
    ...service.relatedProceedings,
    ...service.relatedCaseTypes,
  ];

  return (
    <PageShell breadcrumbs={breadcrumbs} title={service.h1} subtitle={service.shortDescription}>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${SITE_URL}/services/${service.id}`,
          name: service.title,
          description: service.shortDescription,
          provider: { "@id": `${SITE_URL}/#organization` },
          areaServed: { "@type": "Country", name: "" },
        }}
      />
      <JsonLd data={buildFaqSchema(service.faqs)} />

      <div className="prose-content">
        {service.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        <h2>Methodology</h2>
        <DataTable
          headers={["Step", "Detail"]}
          rows={service.methodology.map((m) => [m.step, m.detail])}
        />

        <div className="not-prose rounded-[var(--radius-card)] border border-border bg-section-alt p-4 sm:p-5">
          <h2 className="text-sm font-semibold text-heading">Related pages</h2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {relatedLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-accent hover:underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <FaqList items={service.faqs} heading="Frequently asked questions" />

        <p className="mt-8 text-sm text-body">
          See all{" "}
          <Link href="/services" className="font-medium text-accent hover:underline">
            family court accountant services
          </Link>
          ,{" "}
          <Link href="/how-it-works" className="font-medium text-accent hover:underline">
            how it works
          </Link>
          , or{" "}
          <Link href="/contact" className="font-medium text-accent hover:underline">
            contact us
          </Link>
          .
        </p>

        <RelatedLinks links={getServiceClusterLinks(slug as (typeof serviceSlugs)[number])} />
      </div>
    </PageShell>
  );
}
