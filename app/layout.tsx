import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CookieConsentRoot } from "@/components/cookies/CookieConsentRoot";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Family Court Accountant UK`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "UK-only referral service for family court accountants in England and Wales. Forensic accountants for divorce, financial remedy, hidden assets, and business valuation.",
  alternates: {
    canonical: SITE_URL,
    languages: { "en-GB": SITE_URL, "x-default": SITE_URL },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: SITE_NAME,
    url: SITE_URL,
  },
  robots: { index: true, follow: true },
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }
    : {}),
  ...(process.env.BING_SITE_VERIFICATION
    ? { other: { "msvalidate.01": process.env.BING_SITE_VERIFICATION } }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="flex min-h-full min-w-0 flex-col overflow-x-clip antialiased">
        <CookieConsentRoot>
          <SiteHeader />
          <main className="flex flex-1 flex-col">{children}</main>
          <SiteFooter />
        </CookieConsentRoot>
      </body>
    </html>
  );
}
