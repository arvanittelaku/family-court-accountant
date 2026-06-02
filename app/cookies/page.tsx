import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { buildPageMetadata } from "@/lib/seo-metadata";
import { SITE_EMAIL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Cookie Policy | FamilyCourtAccountant",
  description:
    "How FamilyCourtAccountant uses cookies, how to manage consent, and which third-party tools may load when you opt in.",
  path: "/cookies",
});

export default function CookiePolicyPage() {
  return (
    <PageShell
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Cookie Policy", href: "/cookies" },
      ]}
      title="Cookie Policy"
      subtitle="UK GDPR, PECR, and transparent control over optional cookies."
    >
      <div className="prose-content text-sm">
        <p className="text-body/70">Last updated: June 2025</p>

        <h2>1. Who we are</h2>
        <p>
          {SITE_NAME} operates familycourtaccountant.com. This Cookie Policy
          explains how we use cookies and similar technologies and how that
          relates to our{" "}
          <Link href="/privacy" className="font-medium text-accent hover:underline">
            Privacy Policy
          </Link>
          .
        </p>

        <h2>2. What are cookies?</h2>
        <p>
          Cookies are small text files stored on your device. Similar
          technologies include local storage (for example to remember your
          consent choices), pixels, and scripts that set identifiers in your
          browser.
        </p>

        <h2>3. How we obtain consent</h2>
        <p>
          On your first visit, we show a consent banner. Non-essential cookies
          and third-party scripts load only after you choose Accept all, Reject
          non-essential, or save custom preferences in the Cookie preferences
          dialog. Reopen the dialog anytime via Cookie settings in the footer.
        </p>
        <p>
          Consent is stored in your browser (localStorage under the key{" "}
          <code className="text-xs">familycourtaccountant.cookieConsent</code>)
          with a version flag and expiry (typically 12 months) so we can
          re-prompt when appropriate.
        </p>

        <h2>4. Categories (matching our consent system)</h2>
        <p>
          Our banner and preferences modal use four categories. Necessary cookies
          are always active. Optional categories load third-party tools only when
          enabled.
        </p>
        <ul>
          <li>
            <strong>Necessary</strong>: security, consent storage, and core
            navigation. Always active. You cannot disable this category.
          </li>
          <li>
            <strong>Analytics</strong>: audience and experience measurement
            (for example Google Analytics 4 and Hotjar). Only if you allow
            analytics.
          </li>
          <li>
            <strong>Marketing</strong>: advertising and social campaign
            measurement (for example Meta Pixel, LinkedIn Insight Tag, and
            Google Tag Manager). Only if you allow marketing.
          </li>
          <li>
            <strong>Preferences</strong>: remembers optional UI or feature
            choices when we offer them. Only if you allow preferences.
          </li>
        </ul>

        <h2>5. Example third-party tools (when enabled)</h2>
        <div className="overflow-x-auto rounded-[var(--radius-card)] border border-border">
          <table className="min-w-full text-left text-xs sm:text-sm">
            <thead className="bg-section-alt text-heading">
              <tr>
                <th className="px-3 py-2 font-semibold">Technology</th>
                <th className="px-3 py-2 font-semibold">Purpose</th>
                <th className="px-3 py-2 font-semibold">Category</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-white">
              <tr>
                <td className="px-3 py-2">Google Analytics 4</td>
                <td className="px-3 py-2">Audience measurement</td>
                <td className="px-3 py-2">Analytics</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Google Tag Manager</td>
                <td className="px-3 py-2">Tag orchestration</td>
                <td className="px-3 py-2">Analytics / Marketing</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Meta Pixel</td>
                <td className="px-3 py-2">Ad effectiveness</td>
                <td className="px-3 py-2">Marketing</td>
              </tr>
              <tr>
                <td className="px-3 py-2">LinkedIn Insight Tag</td>
                <td className="px-3 py-2">Campaign measurement</td>
                <td className="px-3 py-2">Marketing</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Hotjar</td>
                <td className="px-3 py-2">Experience analytics</td>
                <td className="px-3 py-2">Analytics</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>6. Google Consent Mode</h2>
        <p>
          When Google Analytics or Tag Manager is enabled, we use Google Consent
          Mode v2. Optional storage types remain denied until you grant the
          relevant category. If you withdraw consent, we send an immediate
          consent update so measurement respects your choice without requiring a
          page reload.
        </p>

        <h2>7. How to change your choices</h2>
        <p>
          Use Cookie settings in the site footer to open the preferences modal.
          You may also clear site data in your browser, which removes stored
          consent and will show the banner again on your next visit.
        </p>

        <h2>8. Your rights (UK GDPR and PECR)</h2>
        <p>
          Under UK GDPR you may withdraw consent at any time via Cookie
          settings. For other privacy rights, see our{" "}
          <Link href="/privacy" className="font-medium text-accent hover:underline">
            Privacy Policy
          </Link>
          .
        </p>

        <h2>9. California notice (CCPA-style)</h2>
        <p>
          We do not sell personal information. Optional cookies used for
          advertising measurement are deployed only with your consent. You may
          opt out of non-essential cookies using Reject non-essential or granular
          toggles in the preferences modal.
        </p>

        <h2>10. Contact</h2>
        <p>
          Questions: {SITE_EMAIL} or our{" "}
          <Link href="/contact" className="font-medium text-accent hover:underline">
            contact form
          </Link>
          .
        </p>
      </div>
    </PageShell>
  );
}
