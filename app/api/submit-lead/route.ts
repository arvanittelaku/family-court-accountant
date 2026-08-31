import { NextResponse } from "next/server";
import { parseContactLead } from "@/lib/contact-lead";
import { notifyLeadWebhook } from "@/lib/leadNotification";
import {
  appendContactToSheet,
  appendInstructToSheet,
  writeSubmissionToSheetSafely,
} from "@/lib/sheetSubmissions";

/**
 * POST /api/submit-lead
 * Webhook primary + soft-fail Sheets on the same request.
 * (Live /api/contact and /api/instruct were 404; force-redirect to the
 * Netlify function also skipped Sheets.)
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

  const result = await notifyLeadWebhook({
    fullName: lead.fullName,
    email: lead.email,
    phone: lead.phone,
    formType: lead.formType,
  });

  let webhookOk = result.ok;
  if (!webhookOk && result.error !== "WEBHOOK_MISSING") {
    return NextResponse.json(
      { error: result.error, status: result.status },
      { status: 502 },
    );
  }

  if (!webhookOk) {
    console.warn(
      "[submit-lead] Lead_notification_url missing — continuing with Sheets fallback",
    );
  }

  const writtenToSheet = await writeSubmissionToSheetSafely(
    () =>
      lead.formType === "instruct"
        ? appendInstructToSheet(lead)
        : appendContactToSheet(lead),
    `submit-lead-${lead.formType}`,
  );

  if (!webhookOk && !writtenToSheet) {
    return NextResponse.json(
      {
        error: "Lead storage is not configured",
        message:
          "Set Lead_notification_url and/or Google Sheets env vars on Netlify.",
      },
      { status: 503 },
    );
  }

  return NextResponse.json({
    ok: true,
    forwarded: webhookOk,
    writtenToSheet,
  });
}
