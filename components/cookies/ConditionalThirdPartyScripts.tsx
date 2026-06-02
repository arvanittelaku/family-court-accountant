"use client";

import { useEffect } from "react";
import { useCookieConsent } from "@/components/cookies/CookieConsentContext";
import { syncThirdPartyTags } from "@/lib/cookies/tag-loader";

/** Gates measurement and advertising scripts until valid consent exists. */
export function ConditionalThirdPartyScripts() {
  const { hydrated, preferences } = useCookieConsent();

  useEffect(() => {
    if (!hydrated || !preferences) return;
    syncThirdPartyTags(preferences);
  }, [hydrated, preferences]);

  return null;
}
