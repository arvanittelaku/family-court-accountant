import { NextResponse } from "next/server";
import { contactLeadToSheetRow, parseContactLead } from "@/lib/contact-lead";
import {
  appendRowWithRetry,
  isGoogleSheetsConfigured,
} from "@/lib/google-sheets";
import {
  getLeadWebhookUrl,
  notifyLeadWebhook,
} from "@/lib/leadNotification";

/**
 * POST /api/submit-lead
 * Webhook: five-key JSON via notifyLeadWebhook (Lead_notification_setup.md).
 * Optional Google Sheets append when configured (local / non-redirect deploys).
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const lead = parseContactLead(body);

  if (!lead.fullName || !lead.email) {
    return NextResponse.json(
      { error: "fullName and email are required" },
      { status: 400 },
    );
  }

  const webhookUrl = getLeadWebhookUrl();
  const sheetsConfigured = isGoogleSheetsConfigured();

  if (!webhookUrl && !sheetsConfigured) {
    return NextResponse.json(
      {
        error: "LEAD_DESTINATION_MISSING",
        message:
          "Configure Lead_notification_url or Google Sheets (GOOGLE_SHEET_ID, service account).",
      },
      { status: 503 },
    );
  }

  if (sheetsConfigured) {
    try {
      await appendRowWithRetry(contactLeadToSheetRow(lead));
    } catch (error: unknown) {
      const err = error as { message?: string; code?: number };
      console.error("Google Sheets write failed:", {
        message: err?.message,
        code: err?.code,
        timestamp: new Date().toISOString(),
      });
      return NextResponse.json(
        {
          error: "SHEETS_WRITE_FAILED",
          message: "Could not save your submission.",
        },
        { status: 502 },
      );
    }
  }

  if (webhookUrl) {
    const result = await notifyLeadWebhook({
      fullName: lead.fullName,
      email: lead.email,
      phone: lead.phone,
      formType: lead.formType,
    });

    if (!result.ok) {
      return NextResponse.json(
        { error: result.error, status: result.status },
        {
          status:
            result.error === "WEBHOOK_MISSING"
              ? 503
              : result.error === "WEBHOOK_REJECTED"
                ? 502
                : 502,
        },
      );
    }
  }

  return NextResponse.json({ ok: true });
}
