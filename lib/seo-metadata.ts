import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  robots?: Metadata["robots"];
};

function absoluteUrl(path: string): string {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}

/** hreflang + canonical per SEO Architecture §9 */
export function buildAlternates(path: string): NonNullable<Metadata["alternates"]> {
  const pageUrl = absoluteUrl(path);
  return {
    canonical: pageUrl,
    languages: {
      "en-GB": pageUrl,
      "x-default": pageUrl,
    },
  };
}

export function buildPageMetadata({
  title,
  description,
  path,
  robots,
}: PageSeoInput): Metadata {
  const pageUrl = absoluteUrl(path);

  return {
    title: { absolute: title },
    description,
    alternates: buildAlternates(path),
    robots: robots ?? { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/** Appendix D: required title + description for static routes (seo:verify:ssr). */
export const PAGE_SEO_MANIFEST: Record<
  string,
  { title: string; description: string }
> = {
  "/": {
    title:
      "Family Court Accountant UK | Forensic Accountants for Divorce & Financial Remedy",
    description:
      "Find a qualified family court accountant in the UK. Forensic accountants for divorce financial remedy, hidden assets, business valuation, Schedule 1, and TOLATA proceedings. Solicitors and individuals welcome.",
  },
  "/what-is-a-family-court-accountant": {
    title:
      "What Is a Family Court Accountant? | UK Role, FPR Part 25 & When You Need One",
    description:
      "A family court accountant is a forensic accountant who provides expert evidence in divorce and family financial proceedings. Form E analysis, business valuation, hidden assets, and FPR Part 25 explained.",
  },
  "/services": {
    title: "Family Court Accountant Services UK | Full Service List",
    description:
      "UK family court accountant services: business valuation, hidden asset investigation, Form E analysis, income assessment, lifestyle analysis, add-backs, and FPR Part 25 compliant expert reports.",
  },
  "/how-it-works": {
    title: "How a Family Court Accountant Works | Step-by-Step UK Guide",
    description:
      "Step-by-step guide to what a family court accountant does in UK proceedings — from Form E disclosure to SJE appointment, expert report, and oral evidence.",
  },
  "/who-we-help": {
    title: "Who We Help | Family Court Accountants for Solicitors & Individuals UK",
    description:
      "Family court accountants for UK family law solicitors needing expert witnesses — and for individuals going through divorce who need financial investigation or business valuation help.",
  },
  "/who-we-help/solicitors-barristers": {
    title:
      "Family Court Accountants for Solicitors & Barristers UK | FPR Part 25 Expert Witnesses",
    description:
      "Forensic accountants and family court expert witnesses for UK family law solicitors. FPR Part 25 compliant reports, SJE appointments, business valuation, and hidden asset investigation.",
  },
  "/who-we-help/individuals-going-through-divorce": {
    title:
      "Going Through Divorce? Family Court Accountant Help UK | Hidden Assets & Business Valuation",
    description:
      "If your spouse owns a business, you suspect hidden assets, or their declared income doesn't match their lifestyle, a family court accountant can help. Get independent expert financial analysis.",
  },
  "/proceedings": {
    title: "Family Court Proceedings | Financial Remedy, Schedule 1, TOLATA & Nuptial",
    description:
      "Family court accountant support for financial remedy divorce, Schedule 1 Children Act, TOLATA cohabitation, and nuptial agreement proceedings across the UK.",
  },
  "/case-types": {
    title: "Case Types Requiring a Family Court Accountant | UK Guide",
    description:
      "Which family proceedings need a family court accountant? Business valuation, hidden assets, lifestyle analysis, add-backs, overseas assets, and more explained.",
  },
  "/qualifications": {
    title:
      "Family Court Accountant Qualifications UK | ACA, ICAEW & FPR Part 25 Standards",
    description:
      "What credentials should a UK family court accountant hold? ACA, FCA, ICAEW forensic accreditation, Resolution membership, and FPR Part 25 compliance explained.",
  },
  "/how-to-instruct": {
    title:
      "How to Instruct a Family Court Accountant UK | Solicitors & Individuals Guide",
    description:
      "How solicitors and individuals instruct a family court accountant in the UK — SJE vs party-appointed, FPR Part 25, letter of instruction, and documents needed.",
  },
  "/faq": {
    title: "Family Court Accountant FAQ UK | Common Questions Answered",
    description:
      "Answers to common questions about family court accountants — Form E, hidden assets, business valuation, SJE, FPR Part 25, add-backs, and fees.",
  },
  "/guides": {
    title:
      "Guides: Family Court Accountants UK | Divorce Finance, Hidden Assets & Business Valuation",
    description:
      "In-depth guides on family court accountants for UK solicitors and individuals — Form E analysis, hidden assets, business valuation in divorce, and more.",
  },
  "/glossary": {
    title: "Family Court Accountant Glossary | Key UK Family Finance Terms",
    description:
      "Definitions of key family court accountant and family finance terms for UK proceedings — from Form E to add-backs, lifestyle analysis, FPR Part 25, and SJE.",
  },
  "/contact": {
    title: "Instruct a Family Court Accountant | FamilyCourtAccountant.com UK",
    description:
      "Submit your case details to be matched with a qualified UK family court accountant. Solicitors and individuals welcome. Response within 1 business day.",
  },
};
