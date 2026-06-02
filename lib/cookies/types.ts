/**
 * Cookie / CMP types for GDPR, ePrivacy, and CCPA-style granular choice.
 * `necessary` is always true and cannot be disabled.
 */
export type CookieCategory =
  | "necessary"
  | "analytics"
  | "marketing"
  | "preferences";

export type CookiePreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
};

export type StoredConsentRecord = {
  version: number;
  updatedAt: string;
  expiresAt: string;
  preferences: CookiePreferences;
};

export const CONSENT_STORAGE_KEY = "familycourtaccountant.cookieConsent";
export const CONSENT_STORAGE_VERSION = 1;
export const CONSENT_MAX_AGE_MS = Math.round(365.25 * 24 * 60 * 60 * 1000);

export const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  preferences: false,
};

export const ACCEPT_ALL_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: true,
  marketing: true,
  preferences: true,
};

export const REJECT_NON_ESSENTIAL_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  preferences: false,
};
