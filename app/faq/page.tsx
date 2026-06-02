import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import { FaqList } from "@/components/FaqList";
import { FAQ_ITEMS } from "@/lib/faq-data";
import { buildFaqSchema } from "@/lib/seo/schema";
import { buildPageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Family Court Accountant FAQ UK | Common Questions Answered",
  description:
    "Answers to common questions about family court accountants — Form E, hidden assets, business valuation, SJE, FPR Part 25, add-backs, and fees.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <PageShell
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "FAQ", href: "/faq" },
      ]}
      title="Family Court Accountant FAQ"
      subtitle="Common questions from UK family law solicitors and individuals about forensic accounting in financial remedy, hidden assets, and business valuation."
    >
      <JsonLd data={buildFaqSchema(FAQ_ITEMS)} />
      <FaqList items={FAQ_ITEMS} headingLevel="h2" />
      <p className="mt-10 text-sm text-body">
        See{" "}
        <Link href="/how-it-works" className="font-medium text-accent hover:underline">
          how a family court accountant works
        </Link>
        , our{" "}
        <Link href="/services" className="font-medium text-accent hover:underline">
          services
        </Link>
        , or{" "}
        <Link href="/contact" className="font-medium text-accent hover:underline">
          contact us
        </Link>
        .
      </p>
    </PageShell>
  );
}
