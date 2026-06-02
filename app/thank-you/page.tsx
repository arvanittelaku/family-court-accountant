import type { Metadata } from "next";
import Link from "next/link";
import { ContactEmail } from "@/components/ContactEmail";
import { PageHero } from "@/components/PageHero";
import { buildPageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Thank You | FamilyCourtAccountant",
  description:
    "Your family court accountant enquiry has been received. We will respond within one business day.",
  path: "/thank-you",
  robots: { index: false, follow: false },
});

const nextSteps = [
  {
    href: "/how-to-instruct",
    label: "How to instruct a family court accountant",
    description: "SJE appointments, FPR Part 25, and documents needed",
  },
  {
    href: "/how-it-works",
    label: "How it works",
    description: "From Form E disclosure to expert report and hearing",
  },
  {
    href: "/qualifications",
    label: "Expert qualifications",
    description: "ACA, ICAEW, FPR Part 25 standards, and what to look for",
  },
] as const;

export default function ThankYouPage() {
  return (
    <>
      <PageHero>
        <p className="text-sm text-white/60">Enquiry received</p>
        <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
          Thank you
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/80">
          Your enquiry has been received. A member of our team will review your
          matter and respond within one business day with next steps for matching
          you with a qualified family court accountant. If you need to follow up
          sooner, email <ContactEmail className="text-white underline" />.
        </p>
      </PageHero>
      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6">
        <h2 className="text-lg font-semibold text-heading">What happens next</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-body">
          <li>We review your proceedings type, complexity, and urgency</li>
          <li>We check conflicts and expert availability</li>
          <li>We contact you to confirm scope and introduce a suitable specialist</li>
        </ol>

        <ul className="mt-10 space-y-4">
          {nextSteps.map((step) => (
            <li
              key={step.href}
              className="rounded-[var(--radius-card)] border border-border bg-section-alt p-4"
            >
              <Link
                href={step.href}
                className="font-semibold text-accent hover:underline"
              >
                {step.label}
              </Link>
              <p className="mt-1 text-sm text-body">{step.description}</p>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex min-h-[44px] items-center rounded border border-border bg-white px-6 py-3 text-sm font-semibold text-heading transition hover:bg-section-alt"
          >
            Return to homepage
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] items-center rounded bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent/90"
          >
            Submit another enquiry
          </Link>
        </div>
      </div>
    </>
  );
}
