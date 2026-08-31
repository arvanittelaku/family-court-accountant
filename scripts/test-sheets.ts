import { appendRow, getSpreadsheetInfo, readRows } from "../lib/google-sheets";
import { BRAND_NAME } from "../lib/contact-lead";

async function test() {
  console.log("--- Testing Google Sheets Connection ---\n");

  try {
    const info = await getSpreadsheetInfo();
    console.log("Spreadsheet found:", info.title);
    console.log("Tabs:", info.sheets?.map((s) => s.name).join(", "));
  } catch (error) {
    console.error("Failed to read spreadsheet info:", error);
    process.exit(1);
  }

  try {
    // Timestamp | Brand | Form Type | Full Name | Email | Phone | Organisation | Message
    const result = await appendRow([
      new Date().toISOString(),
      BRAND_NAME,
      "Contact",
      "Test Entry",
      "test@example.com",
      "'+441234567890",
      "Test Firm",
      "Test row from scripts/test-sheets.ts",
    ]);
    console.log("Row written:", result.updatedRange);
  } catch (error) {
    console.error("Failed to write row:", error);
    process.exit(1);
  }

  try {
    const result = await readRows();
    console.log(`Read ${result.rows.length} rows (including header if present)`);
    console.log("Last row:", result.rows[result.rows.length - 1]);
  } catch (error) {
    console.error("Failed to read rows:", error);
    process.exit(1);
  }

  console.log("\n--- All tests passed ---");
}

test();
