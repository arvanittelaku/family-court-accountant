import type { Metadata } from "next";
import Link from "next/link";
import { ContactEmail } from "@/components/ContactEmail";
import { ContentCard } from "@/components/ContentCard";
import { DataTable } from "@/components/DataTable";
import { JsonLd } from "@/components/JsonLd";
import { PageBottomCta } from "@/components/PageBottomCta";
import { PageHero } from "@/components/PageHero";
import { PROCEEDINGS } from "@/lib/proceedings-data";
import { buildHomeGraph } from "@/lib/seo/schema";
import { buildPageMetadata } from "@/lib/seo-metadata";
import { SERVICES } from "@/lib/services-data";

export const metadata: Metadata = buildPageMetadata({
  title:
    "Family Court Accountant UK | Forensic Accountants for Divorce & Financial Remedy",
  description:
    "Find a qualified family court accountant in the UK. Forensic accountants for divorce financial remedy, hidden assets, business valuation, Schedule 1, and TOLATA proceedings. Solicitors and individuals welcome.",
  path: "/",
});

const statsTable = {
  headers: ["Fact", "Figure", "Source"],
  rows: [
    [
      "Contested financial remedy cases 2025",
      "Notable spike vs prior years",
      "Family Law Week 2026",
    ],
    [
      "TOLATA litigation costs (typical range)",
      "£10,000–£50,000+",
      "Family law practice",
    ],
    [
      "FPR Part 25: expert duty",
      "Duty to court over instructing party",
      "FPR 25.3",
    ],
    [
      "SJE: when ordered",
      "Most cases below highest value",
      "Family court practice",
    ],
    [
      "Business valuation: typical cost",
      "£2,000–£15,000+",
      "Industry average",
    ],
    [
      "Form E financial disclosure",
      "Mandatory in financial remedy",
      "FPR Part 9",
    ],
    [
      "Report turnaround (standard)",
      "3–6 weeks",
      "Case-dependent",
    ],
  ],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildHomeGraph()} />
      <PageHero>
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Family Court Accountant Services for UK Solicitors & Individuals
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80">
          Whether you&apos;re a family law solicitor needing a forensic accountant
          expert witness for financial remedy proceedings, or an individual going
          through divorce who suspects hidden assets or needs a business valued,
          we connect you with qualified family court accountants across the UK.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <Link
            href="/who-we-help/solicitors-barristers"
            className="inline-flex min-h-[44px] w-full items-center justify-center rounded bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent/90 sm:w-auto"
          >
            I&apos;m a Solicitor or Barrister
          </Link>
          <Link
            href="/who-we-help/individuals-going-through-divorce"
            className="inline-flex min-h-[44px] w-full items-center justify-center rounded border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20 sm:w-auto"
          >
            I&apos;m Going Through Divorce
          </Link>
        </div>
        <p className="mt-6 text-sm text-white/80">
          Questions? Email{" "}
          <ContactEmail className="text-white underline decoration-white/40 hover:decoration-white" />
        </p>
      </PageHero>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-heading md:text-3xl">
            What Our Family Court Accountants Cover
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <ContentCard
                key={service.id}
                href={`/services/${service.id}`}
                title={service.title}
                description={service.shortDescription}
              />
            ))}
          </div>
          <p className="mt-8 text-center">
            <Link href="/services" className="font-semibold text-accent">
              View all services
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-section-alt py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-heading md:text-3xl">
            Family Court Accounting: Key UK Facts
          </h2>
          <DataTable headers={statsTable.headers} rows={statsTable.rows} />
          <p className="mt-4 text-xs text-body/70">
            Sources: Family Procedure Rules 2010 (FPR); Family Law Week Financial
            Remedy 2026 Conference; industry practice data.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-heading md:text-3xl">
            Who Needs a Family Court Accountant?
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
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
          <p className="mt-8 text-center">
            <Link href="/who-we-help" className="font-semibold text-accent">
              Learn more about who we help
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-section-alt py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-heading md:text-3xl">
            Which Proceedings Do You Need Help With?
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROCEEDINGS.map((proceeding) => (
              <ContentCard
                key={proceeding.slug}
                href={`/proceedings/${proceeding.slug}`}
                title={proceeding.hubLabel}
                description={proceeding.metaDescription}
              />
            ))}
          </div>
          <p className="mt-8 text-body">
            Not sure what a family court accountant does? Read our guide on{" "}
            <Link
              href="/what-is-a-family-court-accountant"
              className="font-semibold text-accent"
            >
              what is a family court accountant
            </Link>
            .
          </p>
          <p className="mt-4 text-center">
            <Link href="/proceedings" className="font-semibold text-accent">
              View all proceedings
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-heading md:text-3xl">
            Explore Family Court Accounting
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            <li>
              <Link href="/how-it-works" className="font-semibold text-accent hover:underline">
                How a family court accountant works
              </Link>
            </li>
            <li>
              <Link href="/guides" className="font-semibold text-accent hover:underline">
                Solicitor guides
              </Link>
            </li>
            <li>
              <Link href="/faq" className="font-semibold text-accent hover:underline">
                Family court accountant FAQ
              </Link>
            </li>
            <li>
              <Link href="/contact" className="font-semibold text-accent hover:underline">
                Contact us
              </Link>
            </li>
            <li className="sm:col-span-2">
              <Link
                href="/what-is-a-family-court-accountant"
                className="font-semibold text-accent hover:underline"
              >
                What is a family court accountant?
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <PageBottomCta />
    </>
  );
}
