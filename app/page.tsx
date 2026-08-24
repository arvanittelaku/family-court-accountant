import type { Metadata } from "next";
import Link from "next/link";
import { ContactEmail } from "@/components/ContactEmail";
import { ContentCard } from "@/components/ContentCard";
import { JsonLd } from "@/components/JsonLd";
import { PageBottomCta } from "@/components/PageBottomCta";
import { PageHero } from "@/components/PageHero";
import { PROCEEDINGS } from "@/lib/proceedings-data";
import { buildHomeGraph } from "@/lib/seo/schema";
import { buildPageMetadata } from "@/lib/seo-metadata";
import { SERVICES } from "@/lib/services-data";

export const metadata: Metadata = buildPageMetadata({
  title:
    "Family Court Accountant | Forensic Accountants for Divorce & Family Finance",
  description:
    "Find a qualified family court forensic accountant. Business valuation, hidden asset investigation, financial affidavit review, and expert witness support for divorce and family financial proceedings.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildHomeGraph()} />
      <PageHero
        aside={
          <>
            <p className="max-w-xl text-base leading-relaxed text-body sm:text-lg">
              Whether you are a family law attorney needing a forensic accountant
              expert witness, or an individual going through divorce who suspects
              hidden assets or needs a business valued, we connect you with
              qualified family court accountants.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/who-we-help/solicitors-barristers"
                className="inline-flex min-h-[44px] w-full items-center justify-center border border-primary bg-primary px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-primary/90 sm:w-auto"
              >
                I&apos;m a family law attorney
              </Link>
              <Link
                href="/who-we-help/individuals-going-through-divorce"
                className="inline-flex min-h-[44px] w-full items-center justify-center border border-border bg-surface px-6 py-3 text-xs font-bold uppercase tracking-wider text-heading transition hover:border-primary sm:w-auto"
              >
                I&apos;m going through divorce
              </Link>
            </div>
            <p className="mt-6 text-sm text-muted">
              Questions? Email{" "}
              <ContactEmail className="text-accent hover:underline" />
            </p>
          </>
        }
      >
        <h1 className="font-serif text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
          Family court accountant services
        </h1>
        <p className="mt-4 text-sm uppercase tracking-[0.16em] text-accent">
          Forensic accounting · Expert witnesses
        </p>
      </PageHero>

      <section className="border-b border-border bg-surface py-14 md:py-20">
        <div className="mx-auto max-w-[var(--max-width-content)] px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-medium text-heading md:text-3xl">
            What our family court accountants cover
          </h2>
          <div className="mt-10 grid gap-1 sm:grid-cols-2 lg:grid-cols-2">
            {SERVICES.map((service) => (
              <ContentCard
                key={service.id}
                href={`/services/${service.id}`}
                title={service.title}
                description={service.shortDescription}
              />
            ))}
          </div>
          <p className="mt-8">
            <Link
              href="/services"
              className="text-sm font-semibold uppercase tracking-wider text-accent hover:text-primary"
            >
              View all services →
            </Link>
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-section-alt py-14 md:py-20">
        <div className="mx-auto max-w-[var(--max-width-content)] px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-medium text-heading md:text-3xl">
            Who needs a family court accountant?
          </h2>
          <div className="mt-10 grid gap-1 md:grid-cols-2">
            <ContentCard
              href="/who-we-help/solicitors-barristers"
              title="Family law attorneys"
              description="You need a forensic accountant who produces court-compliant expert reports, serves as a court-appointed joint expert where directed, and gives credible testimony in family court."
            />
            <ContentCard
              href="/who-we-help/individuals-going-through-divorce"
              title="Individuals going through divorce"
              description="Your spouse owns a business. Their declared income doesn't match their lifestyle. You suspect assets have been hidden or transferred. You need independent expert help."
            />
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface py-14 md:py-20">
        <div className="mx-auto max-w-[var(--max-width-content)] px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-medium text-heading md:text-3xl">
            Proceedings we support
          </h2>
          <div className="mt-10 grid gap-1 sm:grid-cols-2">
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
            Not sure what a family court accountant does? Read{" "}
            <Link
              href="/what-is-a-family-court-accountant"
              className="font-semibold text-accent hover:underline"
            >
              what is a family court accountant
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-section-alt py-14 md:py-16">
        <div className="mx-auto max-w-[var(--max-width-content)] px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-medium text-heading">
            Explore further
          </h2>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <li>
              <Link href="/how-it-works" className="text-accent hover:underline">
                How the process works
              </Link>
            </li>
            <li>
              <Link href="/guides" className="text-accent hover:underline">
                Attorney guides
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-accent hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <PageBottomCta />
    </>
  );
}
