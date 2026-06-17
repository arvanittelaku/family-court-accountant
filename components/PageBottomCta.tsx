import Link from "next/link";
import { ContactEmail } from "@/components/ContactEmail";

export function PageBottomCta() {
  return (
    <section className="bg-accent py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          Need a Family Court Accountant?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
          Submit your case details for England or Wales family proceedings and we
          will match you with a qualified family court accountant. Solicitors and
          individuals welcome. Response within 1 business day.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-white/75">
          UK-only: English and Welsh family courts. Not Scotland, Northern Ireland,
          or jurisdictions outside the United Kingdom.
        </p>
        <p className="mt-4 text-sm text-white/90">
          Or email us at{" "}
          <ContactEmail className="text-white underline decoration-white/50 hover:decoration-white" />
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex min-h-[44px] w-full max-w-xs items-center justify-center rounded bg-white px-8 py-3 text-sm font-semibold text-accent shadow-[var(--shadow-card)] transition hover:bg-white/95 sm:w-auto sm:max-w-none"
        >
          Get Expert Help
        </Link>
      </div>
    </section>
  );
}
