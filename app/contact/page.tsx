import type { Metadata } from "next";
import Link from "next/link";
import { ContactEmail } from "@/components/ContactEmail";
import { ContactForm } from "@/components/ContactForm";
import { PageShell } from "@/components/PageShell";
import { buildPageMetadata } from "@/lib/seo-metadata";
import { SITE_REFERRAL_NOTICE, SITE_UK_SCOPE } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Instruct a Family Court Accountant | FamilyCourtAccountant.com UK",
  description:
    "Submit your case details to be matched with a qualified UK family court accountant. Solicitors and individuals welcome. Response within 1 business day.",
  path: "/contact",
});

const trustPoints = [
  "FPR Part 25 compliant expert reports",
  "ACA, FCA, and ICAEW forensic specialists",
  "SJE and party-appointed appointment support",
  "Response within 1 business day",
];

export default function ContactPage() {
  return (
    <PageShell
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Contact", href: "/contact" },
      ]}
      title="Instruct a Family Court Accountant"
      subtitle="Tell us about your matter in England or Wales. We help solicitors instruct experts and guide individuals who need forensic accounting support alongside their UK family lawyer."
    >
      <div className="mb-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-[var(--radius-card)] border border-border bg-section-alt p-5 sm:p-6">
          <h2 className="text-lg font-bold text-heading">
            Family law solicitors and barristers
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-body">
            Submit proceedings type, expert appointment preference (SJE or
            party-appointed), asset complexity, and your timetable. We match
            you with a qualified family court accountant and support joint
            letter of instruction scoping.
          </p>
          <Link
            href="/how-to-instruct"
            className="mt-4 inline-block text-sm font-semibold text-accent hover:underline"
          >
            How to instruct an expert
          </Link>
        </div>
        <div className="rounded-[var(--radius-card)] border border-border bg-section-alt p-5 sm:p-6">
          <h2 className="text-lg font-bold text-heading">
            Individuals going through divorce
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-body">
            If your spouse owns a business, you suspect hidden assets, or Form E
            figures do not add up, share what you know and we will explain how a
            family court accountant works with your solicitor. We do not provide
            legal advice.
          </p>
          <Link
            href="/who-we-help/individuals-going-through-divorce"
            className="mt-4 inline-block text-sm font-semibold text-accent hover:underline"
          >
            Help for individuals
          </Link>
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-3 lg:gap-10">
        <div className="lg:col-span-2">
          <ContactForm />
        </div>
        <aside className="mt-10 rounded-[var(--radius-card)] border border-border bg-section-alt p-6 lg:mt-0">
          <h2 className="text-lg font-bold text-heading">Contact</h2>
          <p className="mt-2 text-sm text-body">
            Prefer email? Write to <ContactEmail /> and we will respond within
            one business day.
          </p>
          <h2 className="mt-8 text-lg font-bold text-heading">
            Why instruct through us
          </h2>
          <ul className="mt-4 space-y-3">
            {trustPoints.map((point) => (
              <li key={point} className="flex gap-2 text-sm text-body">
                <span className="text-accent" aria-hidden>
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-xs leading-relaxed text-body/70">
            {SITE_REFERRAL_NOTICE} {SITE_UK_SCOPE}
          </p>
        </aside>
      </div>
    </PageShell>
  );
}
