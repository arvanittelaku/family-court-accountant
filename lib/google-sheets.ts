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

function trimEnvQuotes(value: string | undefined): string | undefined {
  if (value == null) return undefined;
  let v = value.trim();
  if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
    v = v.slice(1, -1).trim();
  }
  return v || undefined;
}

function normalizeSpreadsheetId(raw: string | undefined): string | undefined {
  const trimmed = trimEnvQuotes(raw);
  if (!trimmed) return undefined;
  const fromUrl = trimmed.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  if (fromUrl?.[1]) return fromUrl[1];
  return trimmed;
}

export const DEFAULT_SHEET_TAB_NAME = "Family Court Accountant";

function normalizePrivateKey(raw: string | undefined): string | undefined {
  const base64 = trimEnvQuotes(process.env.GOOGLE_PRIVATE_KEY_BASE64);
  if (base64) {
    try {
      let key = Buffer.from(base64, "base64").toString("utf8");
      for (let i = 0; i < 3 && key.includes("\\n"); i += 1) {
        key = key.replace(/\\n/g, "\n");
      }
      key = key.trim();
      if (key.includes("BEGIN PRIVATE KEY") && !key.includes("\n")) {
        key = key
          .replace("-----BEGIN PRIVATE KEY-----", "-----BEGIN PRIVATE KEY-----\n")
          .replace("-----END PRIVATE KEY-----", "\n-----END PRIVATE KEY-----");
      }
      return key;
    } catch {
      console.error("[sheets] GOOGLE_PRIVATE_KEY_BASE64 is not valid base64");
    }
  }

  const trimmed = trimEnvQuotes(raw);
  if (!trimmed) return undefined;

  let key = trimmed;
  for (let i = 0; i < 3 && key.includes("\\n"); i += 1) {
    key = key.replace(/\\n/g, "\n");
  }
  key = key.trim();

  if (key.includes("BEGIN PRIVATE KEY") && !key.includes("\n")) {
    key = key
      .replace("-----BEGIN PRIVATE KEY-----", "-----BEGIN PRIVATE KEY-----\n")
      .replace("-----END PRIVATE KEY-----", "\n-----END PRIVATE KEY-----");
  }

  return key;
}

function getSheetsConfigured(): boolean {
  const hasKey = Boolean(
    normalizePrivateKey(process.env.GOOGLE_PRIVATE_KEY) ||
      trimEnvQuotes(process.env.GOOGLE_PRIVATE_KEY_BASE64),
  );
  return Boolean(
    normalizeSpreadsheetId(process.env.GOOGLE_SHEET_ID) &&
      trimEnvQuotes(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL) &&
      hasKey,
  );
}

export function isGoogleSheetsConfigured(): boolean {
  return getSheetsConfigured();
}

function getAuthClient() {
  const privateKey = normalizePrivateKey(process.env.GOOGLE_PRIVATE_KEY);
  if (!privateKey) {
    throw new Error(
      "Missing GOOGLE_PRIVATE_KEY or GOOGLE_PRIVATE_KEY_BASE64",
    );
  }

  return new google.auth.GoogleAuth({
    credentials: {
      client_email: trimEnvQuotes(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL),
      private_key: privateKey,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

function getSheetsClient(): sheets_v4.Sheets {
  return google.sheets({ version: "v4", auth: getAuthClient() });
}

function sheetRange(sheetName: string, range: string): string {
  const escaped =
    sheetName.includes(" ") || sheetName.includes("'")
      ? `'${sheetName.replace(/'/g, "''")}'`
      : sheetName;
  return `${escaped}!${range}`;
}

function resolveTarget(target?: SheetTarget) {
  const spreadsheetId = normalizeSpreadsheetId(
    target?.spreadsheetId || process.env.GOOGLE_SHEET_ID,
  );
  const sheetName =
    trimEnvQuotes(target?.sheetName) ||
    trimEnvQuotes(process.env.GOOGLE_SHEET_TAB_NAME) ||
    DEFAULT_SHEET_TAB_NAME;
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
    range: sheetRange(sheetName, "A:A"),
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
  const fullRange =
    range && !range.includes("!")
      ? sheetRange(sheetName, range)
      : range || sheetRange(sheetName, "A:Z");

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: fullRange,
  });

  return {
    success: true,
    rows: (response.data.values as CellValue[][]) || [],
  };
}

export async function getSpreadsheetInfo(spreadsheetId?: string) {
  const sheets = getSheetsClient();
  const id = normalizeSpreadsheetId(spreadsheetId || process.env.GOOGLE_SHEET_ID);
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
