import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { RelatedLinks } from "@/components/RelatedLinks";
import { getGuide } from "@/lib/guides-data";
import { getGuideClusterLinks } from "@/lib/seo/clusterLinks";
import { buildPageMetadata } from "@/lib/seo-metadata";
import { buildArticleSchema } from "@/lib/seo/schema";
import { SITE_URL, guideSlugs } from "@/lib/site";

export function generateStaticParams() {
  return guideSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return buildPageMetadata({
    title: guide.metaTitle,
    description: guide.metaDescription,
    path: `/guides/${slug}`,
  });
}

function serviceIdFromAnchor(aboutServiceId?: string): string | undefined {
  if (!aboutServiceId) return undefined;
  return aboutServiceId.replace(/^#/, "");
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const articleLd = buildArticleSchema({
    headline: guide.h1,
    description: guide.metaDescription,
    url: `${SITE_URL}/guides/${slug}`,
    aboutId: serviceIdFromAnchor(guide.aboutServiceId),
  });

  return (
    <PageShell
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Guides", href: "/guides" },
        { name: guide.hubLabel, href: `/guides/${slug}` },
      ]}
      title={guide.h1}
    >
      <JsonLd data={articleLd} />
      <div className="prose-content">
        {guide.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>
        ))}
        <RelatedLinks
          links={getGuideClusterLinks(slug as (typeof guideSlugs)[number])}
        />
      </div>
    </PageShell>
  );
}
