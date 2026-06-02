export const SITE_URL = "https://www.familycourtaccountant.com";
export const SITE_NAME = "FamilyCourtAccountant";
export const SITE_EMAIL = "info@familycourtaccountant.com";
export const LINKEDIN_URL =
  "https://www.linkedin.com/company/familycourtaccountant";

export const PUBLIC_SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? SITE_URL;

export const proceedingSlugs = [
  "financial-remedy-divorce",
  "schedule-1-children-act",
  "tolata-cohabitation",
  "nuptial-agreements",
] as const;

export const caseTypeSlugs = [
  "business-valuation-divorce",
  "hidden-assets-investigation",
  "lifestyle-analysis-income",
  "add-backs-financial-reconstruction",
  "self-employed-income-assessment",
  "overseas-assets-trusts",
  "cryptocurrency-digital-assets",
  "pension-sharing-business-interests",
  "cohabitation-property-disputes",
  "high-net-worth-divorce",
] as const;

export const guideSlugs = [
  "business-valuation-divorce-guide",
  "hidden-assets-divorce-guide",
  "form-e-financial-disclosure-guide",
  "schedule-1-children-act-financial-guide",
  "tolata-cohabitation-financial-guide",
  "fpr-part-25-expert-appointment",
] as const;

export const serviceSlugs = [
  "business-valuation",
  "hidden-asset-investigation",
  "form-e-review",
  "income-lifestyle-analysis",
  "add-backs-reconstruction",
  "overseas-asset-trusts",
  "schedule-1-evidence",
  "nuptial-agreement-analysis",
] as const;
