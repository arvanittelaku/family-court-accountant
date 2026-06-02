"use client";

import { useCookieConsent } from "@/components/cookies/CookieConsentContext";

export function CookieSettingsFooterLink() {
  const { openPreferences } = useCookieConsent();
  return (
    <button
      type="button"
      onClick={openPreferences}
      className="text-body hover:text-accent hover:underline"
    >
      Cookie settings
    </button>
  );
}
