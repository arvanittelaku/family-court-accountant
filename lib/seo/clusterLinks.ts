import { getCaseType } from "@/lib/case-types-data";
import { getService } from "@/lib/services-data";
import type { caseTypeSlugs, guideSlugs, proceedingSlugs, serviceSlugs } from "@/lib/site";

export type ClusterLink = { href: string; label: string };

type ProceedingSlug = (typeof proceedingSlugs)[number];
type CaseTypeSlug = (typeof caseTypeSlugs)[number];
type GuideSlug = (typeof guideSlugs)[number];
type ServiceSlug = (typeof serviceSlugs)[number];

const contact: ClusterLink = { href: "/contact", label: "Contact us" };
const howItWorks: ClusterLink = {
  href: "/how-it-works",
  label: "How a family court accountant works",
};
const howToInstruct: ClusterLink = {
  href: "/how-to-instruct",
  label: "How to instruct an expert",
};
const qualifications: ClusterLink = {
  href: "/qualifications",
  label: "Expert qualifications",
};
const guidesHub: ClusterLink = { href: "/guides", label: "Solicitor guides" };
const faq: ClusterLink = { href: "/faq", label: "Family court accountant FAQ" };
const solicitors: ClusterLink = {
  href: "/who-we-help/solicitors-barristers",
  label: "For solicitors and barristers",
};
const individuals: ClusterLink = {
  href: "/who-we-help/individuals-going-through-divorce",
  label: "For individuals going through divorce",
};

/** Rule 1: /how-it-works must link to required cluster pages */
export const howItWorksClusterLinks: ClusterLink[] = [
  {
    href: "/proceedings/financial-remedy-divorce",
    label: "Financial Remedy (Divorce)",
  },
  {
    href: "/proceedings/schedule-1-children-act",
    label: "Schedule 1 (Children Act)",
  },
  {
    href: "/proceedings/tolata-cohabitation",
    label: "TOLATA (Cohabitation)",
  },
  {
    href: "/proceedings/nuptial-agreements",
    label: "Nuptial Agreements",
  },
  solicitors,
  individuals,
  howToInstruct,
  qualifications,
  guidesHub,
  faq,
  contact,
];

const proceedingCaseTypes: Record<ProceedingSlug, ClusterLink[]> = {
  "financial-remedy-divorce": [
    {
      href: "/case-types/business-valuation-divorce",
      label: "Business valuation in divorce",
    },
    {
      href: "/case-types/hidden-assets-investigation",
      label: "Hidden assets investigation",
    },
    {
      href: "/case-types/lifestyle-analysis-income",
      label: "Lifestyle analysis and income",
    },
    {
      href: "/case-types/high-net-worth-divorce",
      label: "High net worth divorce",
    },
  ],
  "schedule-1-children-act": [
    {
      href: "/case-types/self-employed-income-assessment",
      label: "Self-employed income assessment",
    },
    {
      href: "/case-types/lifestyle-analysis-income",
      label: "Lifestyle analysis and income",
    },
    {
      href: "/case-types/business-valuation-divorce",
      label: "Business valuation in divorce",
    },
  ],
  "tolata-cohabitation": [
    {
      href: "/case-types/cohabitation-property-disputes",
      label: "Cohabitation property disputes",
    },
    {
      href: "/case-types/add-backs-financial-reconstruction",
      label: "Add-backs and financial reconstruction",
    },
    {
      href: "/case-types/business-valuation-divorce",
      label: "Business valuation in divorce",
    },
  ],
  "nuptial-agreements": [
    {
      href: "/case-types/business-valuation-divorce",
      label: "Business valuation in divorce",
    },
    {
      href: "/case-types/high-net-worth-divorce",
      label: "High net worth divorce",
    },
    {
      href: "/case-types/overseas-assets-trusts",
      label: "Overseas assets and trusts",
    },
  ],
};

export function getProceedingClusterLinks(slug: ProceedingSlug): ClusterLink[] {
  return dedupeLinks([
    ...proceedingCaseTypes[slug],
    howItWorks,
    howToInstruct,
    qualifications,
    contact,
  ]);
}

const caseTypeGlossaryLinks: Record<CaseTypeSlug, ClusterLink[]> = {
  "business-valuation-divorce": [
    { href: "/glossary#personal-goodwill", label: "Personal goodwill" },
    { href: "/glossary#maintainable-income", label: "Maintainable income" },
  ],
  "hidden-assets-investigation": [
    { href: "/glossary#hidden-assets", label: "Hidden assets" },
    { href: "/glossary#form-e", label: "Form E" },
  ],
  "lifestyle-analysis-income": [
    { href: "/glossary#lifestyle-analysis", label: "Lifestyle analysis" },
    { href: "/glossary#notional-income", label: "Notional income" },
  ],
  "add-backs-financial-reconstruction": [
    { href: "/glossary#add-backs", label: "Add-backs" },
    { href: "/glossary#maintainable-income", label: "Maintainable income" },
  ],
  "self-employed-income-assessment": [
    { href: "/glossary#maintainable-income", label: "Maintainable income" },
    { href: "/glossary#lifestyle-analysis", label: "Lifestyle analysis" },
  ],
  "overseas-assets-trusts": [
    { href: "/glossary#hidden-assets", label: "Hidden assets" },
    { href: "/glossary#declaration-of-trust", label: "Declaration of trust" },
  ],
  "cryptocurrency-digital-assets": [
    { href: "/glossary#hidden-assets", label: "Hidden assets" },
    { href: "/glossary#form-e", label: "Form E" },
  ],
  "pension-sharing-business-interests": [
    { href: "/glossary#pension-sharing-order", label: "Pension sharing order" },
    { href: "/glossary#maintainable-income", label: "Maintainable income" },
  ],
  "cohabitation-property-disputes": [
    { href: "/glossary#beneficial-interest", label: "Beneficial interest" },
    { href: "/glossary#cohabitation", label: "Cohabitation" },
  ],
  "high-net-worth-divorce": [
    { href: "/glossary#hidden-assets", label: "Hidden assets" },
    { href: "/glossary#tolata-1996", label: "TOLATA" },
  ],
};

export function getCaseTypeClusterLinks(slug: CaseTypeSlug): ClusterLink[] {
  const caseType = getCaseType(slug);
  return dedupeLinks([
    ...(caseType?.relatedProceedings ?? []),
    ...(caseType?.relatedServices ?? []),
    ...caseTypeGlossaryLinks[slug],
    howItWorks,
    howToInstruct,
    contact,
  ]);
}

/** Rule 3: individual service pages */
export function getServiceClusterLinks(slug: ServiceSlug): ClusterLink[] {
  const service = getService(slug);
  if (!service) {
    return dedupeLinks([{ href: "/services", label: "All services" }, howItWorks, contact]);
  }
  return dedupeLinks([
    { href: "/services", label: "All services" },
    ...service.relatedProceedings,
    ...service.relatedCaseTypes,
    howItWorks,
    howToInstruct,
    faq,
    contact,
  ]);
}

export const solicitorsClusterLinks: ClusterLink[] = [
  {
    href: "/guides/fpr-part-25-expert-appointment",
    label: "FPR Part 25 expert appointment guide",
  },
  { href: "/proceedings/financial-remedy-divorce", label: "Financial remedy (divorce)" },
  { href: "/services", label: "All services" },
  qualifications,
  howToInstruct,
  contact,
];

export const individualsClusterLinks: ClusterLink[] = [
  { href: "/proceedings/financial-remedy-divorce", label: "Financial remedy (divorce)" },
  {
    href: "/case-types/hidden-assets-investigation",
    label: "Hidden assets investigation",
  },
  {
    href: "/case-types/business-valuation-divorce",
    label: "Business valuation in divorce",
  },
  {
    href: "/guides/hidden-assets-divorce-guide",
    label: "Hidden assets in divorce guide",
  },
  {
    href: "/guides/form-e-financial-disclosure-guide",
    label: "Form E financial disclosure guide",
  },
  howItWorks,
  howToInstruct,
  contact,
];

const guideExtras: Record<GuideSlug, ClusterLink[]> = {
  "business-valuation-divorce-guide": [
    {
      href: "/proceedings/financial-remedy-divorce",
      label: "Financial Remedy (Divorce)",
    },
    {
      href: "/case-types/business-valuation-divorce",
      label: "Business valuation in divorce",
    },
    {
      href: "/services/business-valuation",
      label: "Business valuation service",
    },
    individuals,
  ],
  "hidden-assets-divorce-guide": [
    {
      href: "/proceedings/financial-remedy-divorce",
      label: "Financial Remedy (Divorce)",
    },
    {
      href: "/case-types/hidden-assets-investigation",
      label: "Hidden assets investigation",
    },
    {
      href: "/services/hidden-asset-investigation",
      label: "Hidden asset investigation service",
    },
    individuals,
  ],
  "form-e-financial-disclosure-guide": [
    {
      href: "/proceedings/financial-remedy-divorce",
      label: "Financial Remedy (Divorce)",
    },
    {
      href: "/case-types/hidden-assets-investigation",
      label: "Hidden assets investigation",
    },
    {
      href: "/services/form-e-review",
      label: "Form E review service",
    },
    individuals,
  ],
  "schedule-1-children-act-financial-guide": [
    {
      href: "/proceedings/schedule-1-children-act",
      label: "Schedule 1 (Children Act)",
    },
    {
      href: "/case-types/self-employed-income-assessment",
      label: "Self-employed income assessment",
    },
    {
      href: "/services/schedule-1-evidence",
      label: "Schedule 1 financial evidence",
    },
    solicitors,
  ],
  "tolata-cohabitation-financial-guide": [
    {
      href: "/proceedings/tolata-cohabitation",
      label: "TOLATA (Cohabitation)",
    },
    {
      href: "/case-types/cohabitation-property-disputes",
      label: "Cohabitation property disputes",
    },
    solicitors,
  ],
  "fpr-part-25-expert-appointment": [
    {
      href: "/proceedings/financial-remedy-divorce",
      label: "Financial Remedy (Divorce)",
    },
    {
      href: "/case-types/business-valuation-divorce",
      label: "Business valuation in divorce",
    },
    solicitors,
  ],
};

/** Rule 5: guide pages */
export function getGuideClusterLinks(slug: GuideSlug): ClusterLink[] {
  return dedupeLinks([
    guidesHub,
    howItWorks,
    ...guideExtras[slug],
    howToInstruct,
    contact,
  ]);
}

function dedupeLinks(links: ClusterLink[]): ClusterLink[] {
  const seen = new Set<string>();
  return links.filter((link) => {
    if (seen.has(link.href)) return false;
    seen.add(link.href);
    return true;
  });
}
