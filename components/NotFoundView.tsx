import Link from "next/link";
import { PageBottomCta } from "@/components/PageBottomCta";
import { PageHero } from "@/components/PageHero";

export function NotFoundView() {
  return (
    <>
      <PageHero>
        <p className="text-6xl font-bold text-accent">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Page Not Found
        </h1>
        <p className="mt-4 max-w-xl text-lg text-white/80">
          The page you are looking for does not exist or has been moved.
        </p>
      </PageHero>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h2 className="text-lg font-semibold text-heading">Quick links</h2>
        <ul className="mt-4 space-y-2">
          <li>
            <Link href="/proceedings" className="text-accent hover:underline">
              Proceedings
            </Link>
          </li>
          <li>
            <Link href="/who-we-help" className="text-accent hover:underline">
              Who We Help
            </Link>
          </li>
          <li>
            <Link href="/how-it-works" className="text-accent hover:underline">
              How It Works
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-accent hover:underline">
              Contact
            </Link>
          </li>
        </ul>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-[44px] items-center rounded bg-accent px-6 py-3 text-sm font-semibold text-white"
        >
          Return to Homepage
        </Link>
      </div>
      <PageBottomCta />
    </>
  );
}
