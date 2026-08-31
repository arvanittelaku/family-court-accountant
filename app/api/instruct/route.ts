import { NextResponse } from "next/server";
import { parseContactLead } from "@/lib/contact-lead";
import {
  appendInstructToSheet,
  writeSubmissionToSheetSafely,
} from "@/lib/sheetSubmissions";

/**
 * POST /api/instruct
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

    const lead = parseContactLead({ ...body, formType: "instruct" });

    if (!lead.fullName || !lead.email) {
      return NextResponse.json(
        { error: "fullName and email are required" },
        { status: 400 },
      );
    }

    // Soft-fail Sheets — never 500/502 because Sheets failed
    await writeSubmissionToSheetSafely(
      () => appendInstructToSheet(lead),
      "instruct",
    );

    // Soft-fail email: no Resend configured; log for ops
    console.log("Instruct submission received:", {
      fullName: lead.fullName,
      email: lead.email,
      formType: "Instruct",
    });

    return NextResponse.json({ ok: true, success: true });
  } catch (error) {
    console.error("instruct error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
