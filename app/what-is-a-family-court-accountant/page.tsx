import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PROCEEDINGS } from "@/lib/proceedings-data";
import { buildPageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = buildPageMetadata({
  title:
    "What Is a Family Court Accountant? | Role, expert witness standards & When You Need One",
  description:
    "A family court accountant is a forensic accountant who provides expert evidence in divorce and family financial proceedings. financial affidavit analysis, business valuation, hidden assets, and expert witness standards explained.",
  path: "/what-is-a-family-court-accountant",
});

const breadcrumbs = [
  { name: "Home", href: "/" },
  {
    name: "What Is a Family Court Accountant?",
    href: "/what-is-a-family-court-accountant",
  },
];

export default function WhatIsFamilyCourtAccountantPage() {
  return (
    <PageShell
      breadcrumbs={breadcrumbs}
      title="What Is a Family Court Accountant?"
      subtitle="A forensic accountant who specialises in independent financial analysis and expert witness evidence in family proceedings."
    >
      <article className="space-y-10 text-body">
        <section>
          <h2 className="text-2xl font-bold text-heading">Definition</h2>
          <p className="mt-4 leading-relaxed">
            A family court accountant is a forensic accountant who specialises in
            providing independent financial analysis and expert witness evidence in
            family proceedings, principally divorce financial remedy proceedings, but
            also Schedule 1 Children Act claims, TOLATA cohabitation disputes, and
            nuptial agreement analysis. Their expertise bridges accounting and family
            law, translating complex financial information into clear evidence the
            court can rely on.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-heading">
            How a Family Court Accountant Differs from a Regular Accountant
          </h2>
          <p className="mt-4 leading-relaxed">
            A regular accountant prepares and reports on financial information. A
            family court accountant forensically investigates it, questioning whether
            disclosures are complete, tracing assets that may have been concealed,
            valuing businesses and shareholdings in a matrimonial context, and
            presenting findings as an independent expert to whom the court can turn
            for reliable financial evidence.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-heading">
            The Two Roles: joint expert and Party-Appointed
          </h2>
          <p className="mt-4 leading-relaxed">
            In most cases below the highest value, the judge will only allow one expert
            accountant acting for both sides, producing a joint report for the court,
            called a court-appointed joint expert (joint expert).
          </p>
          <h3 className="mt-6 text-lg font-semibold text-heading">
            court-appointed joint expert (joint expert)
          </h3>
          <p className="mt-2 leading-relaxed">
            Appointed by the court and jointly instructed by both parties. Owes duty to
            both parties and to the court. Report shared by all parties. Most common
            appointment in family proceedings.
          </p>
          <h3 className="mt-6 text-lg font-semibold text-heading">
            Party-Appointed Expert
          </h3>
          <p className="mt-2 leading-relaxed">
            Each party instructs their own expert. Less common in family proceedings,
            typically reserved for very high-value or highly contested cases where
            parties&apos; financial positions diverge significantly.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-heading">
            expert witness standards: The Legal Framework
          </h2>
          <p className="mt-4 leading-relaxed">
            Part 25 of the Family Procedure Rules (FPR) 2010 governs expert appointment
            in family proceedings. FPR 25.3 states that the duty of experts is to help
            the court on matters within their expertise. This duty overrides any
            obligation to the instructing party or the party paying their fees.
          </p>
          <p className="mt-4 font-semibold text-heading">
            Key expert witness standards requirements:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
            <li>
              Court permission required before expert is formally instructed in some
              cases
            </li>
            <li>Expert must be identified as joint expert or party-appointed at outset</li>
            <li>Expert report must comply with expert witness standards Practice Direction</li>
            <li>Expert must be prepared to attend hearing and give oral evidence</li>
            <li>Expert must include a statement of truth in their report</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-heading">
            When Do You Need a Family Court Accountant?
          </h2>
          <h3 className="mt-6 text-lg font-semibold text-heading">For Solicitors</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
            <li>
              Business or shareholding needs to be valued for the matrimonial pot (FPR
              Part 25 application needed)
            </li>
            <li>Client suspects spouse is hiding or undervaluing assets</li>
            <li>Spouse&apos;s declared income doesn&apos;t match their lifestyle</li>
            <li>Complex asset structure (trusts, offshore, crypto)</li>
            <li>Add-backs or financial reconstruction needed</li>
            <li>Schedule 1 or TOLATA financial evidence needed</li>
          </ul>
          <h3 className="mt-6 text-lg font-semibold text-heading">For Individuals</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
            <li>
              Your spouse owns a business and you don&apos;t know its true value
            </li>
            <li>
              Your spouse is self-employed and controls their declared income
            </li>
            <li>You suspect assets have been transferred or hidden</li>
            <li>
              Your lifestyle during the marriage was substantially higher than what
              your spouse now declares
            </li>
            <li>You want to understand and challenge the financial affidavit disclosure</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-heading">Next Steps</h2>
          <ul className="mt-4 space-y-2 leading-relaxed">
            <li>
              <Link href="/how-it-works" className="font-semibold text-accent hover:underline">
                How a family court accountant works
              </Link>
            </li>
            <li>
              <Link href="/who-we-help" className="font-semibold text-accent hover:underline">
                Who we help
              </Link>
              {" "}
              (solicitors and individuals)
            </li>
            <li>
              <Link href="/qualifications" className="font-semibold text-accent hover:underline">
                Expert qualifications
              </Link>
            </li>
            <li>
              <Link href="/how-to-instruct" className="font-semibold text-accent hover:underline">
                How to instruct an expert
              </Link>
            </li>
            <li>
              <Link href="/contact" className="font-semibold text-accent hover:underline">
                Contact us
              </Link>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-heading">
            Proceedings Where Family Court Accountants Are Instructed
          </h2>
          <p className="mt-4 leading-relaxed">
            Family court accountants are instructed across four main types of family
            and property proceedings. Explore each area below or visit our{" "}
            <Link href="/proceedings" className="font-semibold text-accent">
              proceedings hub
            </Link>{" "}
            for an overview.
          </p>
          <ul className="mt-6 space-y-3">
            {PROCEEDINGS.map((proceeding) => (
              <li key={proceeding.slug}>
                <Link
                  href={`/proceedings/${proceeding.slug}`}
                  className="font-semibold text-accent hover:underline"
                >
                  {proceeding.hubLabel}
                </Link>
                <span className="text-body">: {proceeding.metaDescription}</span>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </PageShell>
  );
}
