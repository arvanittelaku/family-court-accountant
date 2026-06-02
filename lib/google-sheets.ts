import { google, sheets_v4 } from "googleapis";

type CellValue = string | number | boolean | null;

export type SheetTarget = {
  spreadsheetId?: string;
  sheetName?: string;
};

export type AppendResult = {
  success: boolean;
  updatedRange: string | null | undefined;
};

export type ReadResult = {
  success: boolean;
  rows: CellValue[][];
};

function getSheetsConfigured(): boolean {
  return Boolean(
    process.env.GOOGLE_SHEET_ID &&
      process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
      process.env.GOOGLE_PRIVATE_KEY,
  );
}

export function isGoogleSheetsConfigured(): boolean {
  return getSheetsConfigured();
}

function getAuthClient() {
  return new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

function getSheetsClient(): sheets_v4.Sheets {
  return google.sheets({ version: "v4", auth: getAuthClient() });
}

function resolveTarget(target?: SheetTarget) {
  const spreadsheetId = target?.spreadsheetId || process.env.GOOGLE_SHEET_ID;
  const sheetName =
    target?.sheetName || process.env.GOOGLE_SHEET_TAB_NAME || "Sheet1";
  if (!spreadsheetId) {
    throw new Error("Missing spreadsheet ID: set GOOGLE_SHEET_ID");
  }
  return { spreadsheetId, sheetName };
}

export async function appendRow(
  values: CellValue[],
  target?: SheetTarget,
): Promise<AppendResult> {
  if (!getSheetsConfigured()) {
    throw new Error("Google Sheets env vars are not configured");
  }

  const sheets = getSheetsClient();
  const { spreadsheetId, sheetName } = resolveTarget(target);

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetName}!A:A`,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values: [values] },
  });

  return {
    success: true,
    updatedRange: response.data.updates?.updatedRange,
  };
}

export async function readRows(
  range?: string,
  target?: SheetTarget,
): Promise<ReadResult> {
  if (!getSheetsConfigured()) {
    throw new Error("Google Sheets env vars are not configured");
  }

  const sheets = getSheetsClient();
  const { spreadsheetId, sheetName } = resolveTarget(target);

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: range || sheetName,
  });

  return {
    success: true,
    rows: (response.data.values as CellValue[][]) || [],
  };
}

export async function getSpreadsheetInfo(spreadsheetId?: string) {
  const sheets = getSheetsClient();
  const id = spreadsheetId || process.env.GOOGLE_SHEET_ID;
  if (!id) throw new Error("Missing spreadsheet ID");

  const response = await sheets.spreadsheets.get({ spreadsheetId: id });
  return {
    title: response.data.properties?.title,
    sheets: response.data.sheets?.map((s) => ({
      name: s.properties?.title,
      sheetId: s.properties?.sheetId,
    })),
  };
}

export async function appendRowWithRetry(
  values: CellValue[],
  maxRetries = 2,
  target?: SheetTarget,
): Promise<AppendResult> {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await appendRow(values, target);
    } catch (error: unknown) {
      const err = error as { code?: number };
      const isRetryable =
        err?.code === 429 || err?.code === 503 || err?.code === 500;
      if (isRetryable && attempt < maxRetries) {
        await new Promise((r) => setTimeout(r, Math.pow(2, attempt) * 1000));
        continue;
      }
      throw error;
    }
  }
  throw new Error("Max retries exceeded");
}
