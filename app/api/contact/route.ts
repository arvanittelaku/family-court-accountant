import { NextResponse } from "next/server";
import { parseContactLead } from "@/lib/contact-lead";
import {
  appendContactToSheet,
  writeSubmissionToSheetSafely,
} from "@/lib/sheetSubmissions";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** POST /api/contact — Sheets backup endpoint (forms use /api/submit-lead). */
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

    const written = await writeSubmissionToSheetSafely(
      () => appendContactToSheet(lead),
      "contact",
    );

    return NextResponse.json({ ok: true, writtenToSheet: written });
  } catch (error) {
    console.error("contact error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
