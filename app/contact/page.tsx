import type { Metadata } from "next";
import Link from "next/link";
import { ContactEmail } from "@/components/ContactEmail";
import { ContactForm } from "@/components/ContactForm";
import { PageShell } from "@/components/PageShell";
import { buildPageMetadata } from "@/lib/seo-metadata";
import { SITE_REFERRAL_NOTICE } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact a Family Court Accountant",
  description:
    "Submit a brief enquiry to be matched with a qualified family court forensic accountant. Family law attorneys and individuals welcome.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageShell
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Contact", href: "/contact" },
      ]}
      title="Contact us"
      subtitle="Tell us briefly about your matter. We help family law attorneys instruct experts and guide individuals who need forensic accounting support alongside their attorney."
    >
      <div className="lg:grid lg:grid-cols-5 lg:gap-12">
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
        <aside className="mt-10 border-l-2 border-accent pl-6 lg:col-span-2 lg:mt-0">
          <h2 className="!mt-0 font-serif text-lg font-medium text-heading">
            Direct email
          </h2>
          <p className="text-sm text-body">
            Prefer email? Write to <ContactEmail /> and we will respond within
            one business day.
          </p>
          <p className="mt-8 text-xs leading-relaxed text-muted">
            {SITE_REFERRAL_NOTICE}
          </p>
          <Link
            href="/how-to-instruct"
            className="mt-6 inline-block text-sm font-semibold text-accent hover:underline"
          >
            How to instruct an expert →
          </Link>
        </aside>
      </div>
    </PageShell>
  );
}
