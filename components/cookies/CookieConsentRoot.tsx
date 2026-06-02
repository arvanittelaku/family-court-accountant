"use client";

import { CookieConsentBanner } from "@/components/cookies/CookieConsentBanner";
import { CookieConsentProvider } from "@/components/cookies/CookieConsentContext";
import { CookiePreferencesModal } from "@/components/cookies/CookiePreferencesModal";
import { ConditionalThirdPartyScripts } from "@/components/cookies/ConditionalThirdPartyScripts";

export function CookieConsentRoot({ children }: { children: React.ReactNode }) {
  return (
    <CookieConsentProvider>
      {children}
      <CookieConsentBanner />
      <CookiePreferencesModal />
      <ConditionalThirdPartyScripts />
    </CookieConsentProvider>
  );
}
