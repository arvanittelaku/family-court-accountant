"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NavDropdown } from "@/components/NavDropdown";
import { navItemClasses } from "@/components/nav-classes";
import {
  caseTypesNavLinks,
  mobileNavGroups,
  proceedingsLinks,
  servicesNavLinks,
  whoWeHelpLinks,
} from "@/lib/nav-data";
import { SITE_NAME } from "@/lib/site";

function isActive(pathname: string | null, href: string): boolean {
  if (!pathname) return false;
  const base = href.split("#")[0];
  if (pathname === base) return true;
  if (base !== "/" && pathname.startsWith(base)) return true;
  return false;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white">
      <div className="mx-auto flex h-14 max-w-7xl items-center gap-2 px-4 sm:px-6 lg:gap-3 lg:px-8">
        <Link
          href="/"
          className="min-w-0 shrink truncate text-sm font-bold text-heading sm:text-base lg:max-w-[11rem] xl:max-w-none xl:text-lg"
        >
          {SITE_NAME}
        </Link>

        <nav
          aria-label="Primary"
          className="hidden min-w-0 flex-1 flex-nowrap items-center justify-center gap-0 lg:flex xl:gap-0.5"
        >
          <Link href="/" className={navItemClasses(isActive(pathname, "/"))}>
            Home
          </Link>
          <NavDropdown label="Services" items={servicesNavLinks} />
          <Link
            href="/how-it-works"
            className={navItemClasses(isActive(pathname, "/how-it-works"))}
          >
            How It Works
          </Link>
          <NavDropdown label="Who We Help" items={whoWeHelpLinks} />
          <NavDropdown label="Proceedings" items={proceedingsLinks} />
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 lg:ml-0">
          <Link
            href="/contact"
            className="hidden min-h-[44px] items-center rounded bg-accent px-3 py-2 text-xs font-semibold text-white transition hover:bg-accent/90 lg:inline-flex xl:px-4 xl:text-sm"
          >
            Contact us
          </Link>
          <button
            type="button"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded border border-border lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="flex flex-col gap-1.5 p-1">
              <span
                className={`block h-0.5 w-5 bg-heading transition ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-heading transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-heading transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="max-h-[calc(100dvh-3.5rem)] overflow-y-auto border-t border-border bg-white px-4 pb-6 lg:hidden"
        >
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex min-h-[44px] items-center font-semibold text-heading"
          >
            Home
          </Link>
          <MobileNavGroup
            heading="Services"
            links={servicesNavLinks}
            onNavigate={() => setOpen(false)}
          />
          <Link
            href="/how-it-works"
            onClick={() => setOpen(false)}
            className="flex min-h-[44px] items-center text-sm font-medium text-body hover:text-heading"
          >
            How It Works
          </Link>
          <MobileNavGroup
            heading="Who We Help"
            links={whoWeHelpLinks}
            onNavigate={() => setOpen(false)}
          />
          <MobileNavGroup
            heading="Proceedings"
            links={proceedingsLinks}
            onNavigate={() => setOpen(false)}
          />
          {mobileNavGroups.map((group) => (
            <MobileNavGroup
              key={group.heading}
              heading={group.heading}
              links={group.links}
              onNavigate={() => setOpen(false)}
            />
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 flex min-h-[44px] w-full items-center justify-center rounded bg-accent text-sm font-semibold text-white"
          >
            Contact us
          </Link>
        </nav>
      ) : null}
    </header>
  );
}

function MobileNavGroup({
  heading,
  links,
  onNavigate,
}: {
  heading: string;
  links: { href: string; label: string }[];
  onNavigate: () => void;
}) {
  return (
    <div className="mt-4">
      <p className="text-xs font-bold uppercase tracking-wide text-body/60">
        {heading}
      </p>
      <ul className="mt-1 space-y-0">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={onNavigate}
              className="flex min-h-[44px] items-center text-sm font-medium text-body hover:text-heading"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
