export const SITE_URL = "https://www.familycourtaccountant.com";
export const SITE_NAME = "FamilyCourtAccountant";
export const SITE_EMAIL = "contact@familycourtaccountant.com";
export const LINKEDIN_URL =
  "https://www.linkedin.com/company/familycourtaccountant";

/** Woven into footer and key pages — implicit regional scope, no repetitive country name. */
export const SITE_REGION_SCOPE =
  "This referral service connects you with forensic accountants experienced in state family courts — divorce financial proceedings, child support disputes, cohabitation property claims, and marital agreement analysis.";

export const SITE_REFERRAL_NOTICE =
  "FamilyCourtAccountant.com is a referral service connecting you with independent family court accountants. We are not a law firm and do not provide legal advice.";

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

/** @deprecated Use SITE_REGION_SCOPE */
export const SITE_UK_SCOPE = SITE_REGION_SCOPE;
