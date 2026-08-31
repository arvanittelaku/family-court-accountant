import {
  appendRowWithRetry,
  isGoogleSheetsConfigured,
  type SheetTarget,
} from "@/lib/google-sheets";
import {
  BRAND_NAME,
  sanitize,
  sheetCell,
  type ContactLead,
} from "@/lib/contact-lead";

function sharedTab(): SheetTarget {
  return {
    sheetName: process.env.GOOGLE_SHEET_TAB_NAME || "Sheet1",
  };
}

/**
 * Expected header row (one shared tab):
 * Timestamp | Brand | Form Type | Full Name | Email | Phone | Organisation | Message
 */
function buildSheetRow(
  lead: ContactLead & { organization?: string },
  formType: "Contact" | "Instruct",
): string[] {
  return [
    new Date().toISOString(),
    BRAND_NAME,
    formType,
    sanitize(lead.fullName),
    lead.email,
    sheetCell(lead.phone),
    sanitize(lead.organization ?? ""),
    sanitize(lead.message),
  ];
}

export async function appendContactToSheet(lead: ContactLead): Promise<void> {
  if (!isGoogleSheetsConfigured()) return;
  await appendRowWithRetry(buildSheetRow(lead, "Contact"), 2, sharedTab());
}

export async function appendInstructToSheet(
  lead: ContactLead & { organization?: string },
): Promise<void> {
  if (!isGoogleSheetsConfigured()) return;
  await appendRowWithRetry(buildSheetRow(lead, "Instruct"), 2, sharedTab());
}

/** Soft-fail wrapper. Returns whether a row was written. */
export async function writeSubmissionToSheetSafely(
  writer: () => Promise<void>,
  context: string,
): Promise<boolean> {
  if (!isGoogleSheetsConfigured()) {
    console.warn(`[sheets] not configured — skip (${context})`);
    return false;
  }

  try {
    await writer();
    return true;
  } catch (error: unknown) {
    const err = error as {
      message?: string;
      code?: number;
      response?: { status?: number };
    };
    console.error("Google Sheets error:", {
      context,
      message: err?.message,
      code: err?.code,
      status: err?.response?.status,
      spreadsheetId: process.env.GOOGLE_SHEET_ID
        ? `${process.env.GOOGLE_SHEET_ID.slice(0, 8)}...`
        : "missing",
      tab: process.env.GOOGLE_SHEET_TAB_NAME || "Sheet1",
      timestamp: new Date().toISOString(),
    });
    return false;
  }
}
