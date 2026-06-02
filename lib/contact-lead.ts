/** Server-only helpers for parsing and sanitizing contact form leads. */

export type ContactLead = {
  fullName: string;
  email: string;
  phone: string;
  organisation: string;
  role: string;
  proceedingsType: string;
  serviceNeeded: string;
  expertAppointment: string;
  assetValue: string;
  businessInvolved: string;
  urgency: string;
  description: string;
};

export const BRAND_NAME = "FamilyCourtAccountant";

export function trimStr(v: unknown, max = 500): string {
  const s = typeof v === "string" ? v.trim() : "";
  return s.length > max ? s.slice(0, max) : s;
}

export function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, "").trim();
}

/** Prevent Sheets from treating +phone or = as formulas. */
function sheetCell(value: string): string {
  const s = sanitize(value);
  if (s.startsWith("+") || s.startsWith("=") || s.startsWith("-")) {
    return `'${s}`;
  }
  return s;
}

export function parseContactLead(body: Record<string, unknown>): ContactLead {
  return {
    fullName: trimStr(body.fullName ?? body.full_name, 300),
    email: trimStr(body.email, 320).toLowerCase(),
    phone: trimStr(body.phone, 80),
    organisation: trimStr(body.organisation ?? body.organization, 300),
    role: trimStr(body.role, 200),
    proceedingsType: trimStr(
      body.proceedingsType ?? body.proceedings_type,
      200,
    ),
    serviceNeeded: trimStr(body.serviceNeeded ?? body.service_needed, 200),
    expertAppointment: trimStr(
      body.expertAppointment ?? body.expert_appointment,
      120,
    ),
    assetValue: trimStr(body.assetValue ?? body.asset_value, 80),
    businessInvolved: trimStr(
      body.businessInvolved ?? body.business_involved,
      80,
    ),
    urgency: trimStr(body.urgency, 80),
    description: trimStr(body.description ?? body.case_description, 8000),
  };
}

/**
 * Row order for Sheet16 (row 1 headers should match):
 * Timestamp | Full Name | Email | Phone | Organisation | Role |
 * Proceedings Type | Service Needed | SJE or Party | Asset Value |
 * Business Involved | Urgency | Description | Brand
 */
export function contactLeadToSheetRow(lead: ContactLead): string[] {
  return [
    new Date().toISOString(),
    sanitize(lead.fullName),
    lead.email,
    sheetCell(lead.phone),
    sanitize(lead.organisation),
    sanitize(lead.role),
    sanitize(lead.proceedingsType),
    sanitize(lead.serviceNeeded),
    sanitize(lead.expertAppointment),
    sanitize(lead.assetValue),
    sanitize(lead.businessInvolved),
    sanitize(lead.urgency),
    sanitize(lead.description),
    BRAND_NAME,
  ];
}
