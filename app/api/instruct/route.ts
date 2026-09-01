import { NextResponse } from "next/server";
import { parseContactLead } from "@/lib/contact-lead";
import {
  appendInstructToSheet,
  writeSubmissionToSheetSafely,
} from "@/lib/sheetSubmissions";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** POST /api/instruct — Sheets backup endpoint (forms use /api/submit-lead). */
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

    const written = await writeSubmissionToSheetSafely(
      () => appendInstructToSheet(lead),
      "instruct",
    );

    return NextResponse.json({ ok: true, writtenToSheet: written });
  } catch (error) {
    console.error("instruct error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
