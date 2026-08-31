import { NextResponse } from "next/server";
import { parseContactLead } from "@/lib/contact-lead";
import {
  appendContactToSheet,
  writeSubmissionToSheetSafely,
} from "@/lib/sheetSubmissions";

/**
 * POST /api/contact
 * Soft-fail Sheets + soft-fail email (log only; no Resend on this site).
 */
export async function POST(request: Request) {
  try {
    let body: Record<string, unknown>;
    try {
      body = (await request.json()) as Record<string, unknown>;
    } catch {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }

    const lead = parseContactLead({ ...body, formType: "contact" });

    if (!lead.fullName || !lead.email) {
      return NextResponse.json(
        { error: "fullName and email are required" },
        { status: 400 },
      );
    }

    // Soft-fail Sheets — never 500/502 because Sheets failed
    await writeSubmissionToSheetSafely(
      () => appendContactToSheet(lead),
      "contact",
    );

    // Soft-fail email: no Resend configured; log for ops
    console.log("Contact submission received:", {
      fullName: lead.fullName,
      email: lead.email,
      formType: "Contact",
    });

    return NextResponse.json({ ok: true, success: true });
  } catch (error) {
    console.error("contact error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
