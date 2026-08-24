/** Server-only helpers for parsing and sanitizing contact form leads. */

export type ContactLead = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
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
    message: trimStr(body.message ?? body.description, 8000),
  };
}

/**
 * Row order for Sheet16 (row 1 headers should match):
 * Timestamp | Full Name | Email | Phone | Message | Brand
 */
export function contactLeadToSheetRow(lead: ContactLead): string[] {
  return [
    new Date().toISOString(),
    sanitize(lead.fullName),
    lead.email,
    sheetCell(lead.phone),
    sanitize(lead.message),
    BRAND_NAME,
  ];
}
