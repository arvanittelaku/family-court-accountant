import Link from "next/link";
import { ContactEmail } from "@/components/ContactEmail";

export function PageBottomCta() {
  return (
    <section className="border-t-2 border-primary bg-primary py-14 md:py-16">
      <div className="mx-auto max-w-[var(--max-width-content)] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 className="font-serif text-2xl font-medium text-white md:text-3xl">
              Need a family court accountant?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              Submit a brief enquiry and we will match you with a qualified forensic
              accountant. Family law attorneys and individuals welcome.
            </p>
            <p className="mt-3 text-sm text-white/70">
              Or email{" "}
              <ContactEmail className="text-accent underline decoration-accent/50 hover:decoration-accent" />
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] shrink-0 items-center justify-center border border-accent bg-accent px-8 py-3 text-xs font-bold uppercase tracking-wider text-primary transition hover:bg-accent/90 sm:w-auto"
          >
            Submit enquiry
          </Link>
        </div>
      </div>
    </section>
  );
}
