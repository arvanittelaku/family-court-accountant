"use client";

import Link from "next/link";
import { CookieSettingsFooterLink } from "@/components/cookies/CookieSettingsFooterLink";

export function FooterLegal() {
  return (
    <nav
      aria-label="Legal"
      className="flex flex-col gap-2 text-xs sm:items-end"
    >
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
    </nav>
  );
}
