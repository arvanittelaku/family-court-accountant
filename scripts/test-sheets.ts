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
    const result = await appendRow([
      new Date().toISOString(),
      "Test Entry",
      "test@example.com",
      "+441234567890",
      "Test Firm",
      "Family Law Solicitor / Barrister",
      "Financial Remedy (Divorce)",
      "Business Valuation",
      "SJE",
      "Under £500k",
      "Yes",
      "Standard",
      "Test row from scripts/test-sheets.ts",
      BRAND_NAME,
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
