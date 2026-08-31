import { NextResponse } from "next/server";
import { parseContactLead } from "@/lib/contact-lead";
import { notifyLeadWebhook } from "@/lib/leadNotification";

/**
 * POST /api/submit-lead
 * Webhook primary (hard-fail if webhook fails).
 * Sheets are written by /api/contact and /api/instruct (shared tab + Form Type)
 * so we do not double-append here.
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

  return NextResponse.json({ ok: true });
}
