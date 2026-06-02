"use client";

import Link from "next/link";
import { CookieSettingsFooterLink } from "@/components/cookies/CookieSettingsFooterLink";

export function FooterLegal() {
  return (
    <p className="mx-auto mt-3 flex max-w-7xl flex-wrap justify-center gap-x-4 gap-y-2 text-xs">
      <Link href="/privacy" className="text-body hover:text-accent">
        Privacy
      </Link>
      <Link href="/cookies" className="text-body hover:text-accent">
        Cookies
      </Link>
      <Link href="/terms" className="text-body hover:text-accent">
        Terms
      </Link>
      <CookieSettingsFooterLink />
    </p>
  );
}
