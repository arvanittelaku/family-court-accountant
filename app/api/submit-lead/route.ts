import { NextResponse } from "next/server";
import {
  BRAND_NAME,
  contactLeadToSheetRow,
  parseContactLead,
} from "@/lib/contact-lead";
import {
  appendRowWithRetry,
  isGoogleSheetsConfigured,
} from "@/lib/google-sheets";

function getLeadWebhookUrl(): string | undefined {
  return (
    process.env.LEAD_NOTIFICATION_URL ||
    process.env.Lead_notification_url ||
    process.env.NEXT_PUBLIC_LEAD_NOTIFICATION_URL ||
    undefined
  );
}

async function forwardToWebhook(
  webhookUrl: string,
  lead: ReturnType<typeof parseContactLead>,
): Promise<Response> {
  return fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      "Full Name": lead.fullName,
      Email: lead.email,
      "Phone Number": lead.phone,
      Message: lead.message,
      "Brand name": BRAND_NAME,
    }),
    signal: AbortSignal.timeout(12_000),
  });
}

/**
 * POST /api/submit-lead
 * Appends lead to Google Sheets (when configured) and/or n8n webhook.
 * On Netlify, netlify.toml redirects here to netlify/functions/submit-lead for webhook-only.
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
    try {
      const upstream = await forwardToWebhook(webhookUrl, lead);
      if (!upstream.ok) {
        return NextResponse.json(
          { error: "WEBHOOK_REJECTED", status: upstream.status },
          { status: 502 },
        );
      }
    } catch {
      return NextResponse.json(
        { error: "WEBHOOK_UNREACHABLE" },
        { status: 502 },
      );
    }
  }

  return NextResponse.json({ ok: true });
}
