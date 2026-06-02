"use client";

import Link from "next/link";
import { useCookieConsent } from "@/components/cookies/CookieConsentContext";

/**
 * Fixed bottom bar; only renders client-side when no stored consent (no SSR mismatch).
 */
export function CookieConsentBanner() {
  const { showBanner, acceptAll, rejectNonEssential, openPreferences } =
    useCookieConsent();

  if (!showBanner) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      aria-live="polite"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[100] transition-opacity duration-300 ease-out motion-reduce:transition-none"
    >
      <div className="pointer-events-auto mx-auto max-w-6xl px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-6 lg:px-8">
        <div className="border border-highlight/30 bg-primary text-white shadow-[0_-12px_48px_rgba(30,58,95,0.45)] ring-1 ring-white/10 sm:rounded-t-xl">
          <div className="flex flex-col gap-5 p-5 sm:p-6 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
            <div className="min-w-0 flex-1 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-highlight">
                Privacy &amp; cookies
              </p>
              <h2 className="text-lg font-bold leading-snug tracking-tight sm:text-xl">
                Your privacy matters
              </h2>
              <p className="max-w-2xl text-sm leading-relaxed text-white/88">
                We use cookies and similar technologies to operate this website,
                understand how it is used when you allow analytics, and support
                secure lead enquiries. Choose Accept all, Reject non-essential,
                or customise categories. See our{" "}
                <Link
                  href="/cookies"
                  className="font-semibold text-highlight underline-offset-2 hover:underline"
                >
                  Cookie Policy
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="font-semibold text-highlight underline-offset-2 hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-end lg:min-w-[280px] lg:flex-col xl:flex-row">
              <button
                type="button"
                onClick={acceptAll}
                className="min-h-[44px] rounded bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
              >
                Accept all
              </button>
              <button
                type="button"
                onClick={rejectNonEssential}
                className="min-h-[44px] rounded border border-white/30 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
              >
                Reject non-essential
              </button>
              <button
                type="button"
                onClick={openPreferences}
                className="min-h-[44px] rounded px-4 py-2.5 text-sm font-semibold text-highlight underline-offset-2 transition hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight motion-reduce:transition-none"
              >
                Customise preferences
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
