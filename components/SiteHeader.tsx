"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useId, useState, type ReactNode } from "react";
import {
  NavDropdown,
  NavDropdownPanel,
  navLinkClasses,
} from "@/components/NavDropdown";
import {
  mobileNavGroups,
  proceedingsLinks,
  servicesNavLinks,
  whoWeHelpLinks,
} from "@/lib/nav-data";
import { SITE_NAME } from "@/lib/site";

type OpenPanel = "services" | "clients" | "proceedings" | null;

function isActive(pathname: string | null, href: string): boolean {
  if (!pathname) return false;
  const base = href.split("#")[0];
  if (pathname === base) return true;
  if (base !== "/" && pathname.startsWith(base)) return true;
  return false;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openPanel, setOpenPanel] = useState<OpenPanel>(null);
  const servicesPanelId = useId();
  const clientsPanelId = useId();
  const proceedingsPanelId = useId();
  const servicesTriggerId = useId();
  const clientsTriggerId = useId();
  const proceedingsTriggerId = useId();

  const closePanels = useCallback(() => setOpenPanel(null), []);

  const togglePanel = (panel: OpenPanel) => {
    setOpenPanel((current) => (current === panel ? null : panel));
  };

  return (
    <header className="relative z-40 border-b border-border bg-surface">
      {/* Registry masthead — not sticky, not centered-only, not left-rail */}
      <div className="border-b border-border bg-background">
        <div className="mx-auto max-w-[var(--max-width-content)] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <Link
              href="/"
              className="group min-w-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              <span className="flex items-baseline gap-3">
                <span
                  className="font-serif text-4xl font-light leading-none text-accent sm:text-5xl"
                  aria-hidden
                >
                  {"{"}
                </span>
                <span className="min-w-0">
                  <span className="block font-serif text-2xl font-semibold leading-tight text-heading sm:text-[1.75rem]">
                    {SITE_NAME}
                  </span>
                  <span className="mt-1 block text-sm text-muted">
                    Forensic accounting for family court proceedings
                  </span>
                </span>
                <span
                  className="font-serif text-4xl font-light leading-none text-accent sm:text-5xl"
                  aria-hidden
                >
                  {"}"}
                </span>
              </span>
            </Link>

            <p className="max-w-xs text-right text-xs leading-relaxed text-muted sm:text-sm">
              Expert witness referral service for attorneys and individuals in
              divorce and family financial matters.
            </p>
          </div>
        </div>
      </div>

      {/* Sentence-case nav row — not boxed table, not dark rail, not uppercase pills */}
      <div className="mx-auto max-w-[var(--max-width-content)] px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 py-3">
          <nav
            aria-label="Primary"
            className="hidden flex-wrap items-center gap-x-5 gap-y-1 lg:flex"
          >
            <Link href="/" className={navLinkClasses(isActive(pathname, "/"))}>
              Home
            </Link>
            <NavDropdown
              label="Services"
              items={servicesNavLinks}
              panelId={servicesPanelId}
              triggerId={servicesTriggerId}
              open={openPanel === "services"}
              onToggle={() => togglePanel("services")}
              onClose={closePanels}
            />
            <Link
              href="/how-it-works"
              className={navLinkClasses(isActive(pathname, "/how-it-works"))}
            >
              Process
            </Link>
            <NavDropdown
              label="Clients"
              items={whoWeHelpLinks}
              panelId={clientsPanelId}
              triggerId={clientsTriggerId}
              open={openPanel === "clients"}
              onToggle={() => togglePanel("clients")}
              onClose={closePanels}
            />
            <NavDropdown
              label="Proceedings"
              items={proceedingsLinks}
              panelId={proceedingsPanelId}
              triggerId={proceedingsTriggerId}
              open={openPanel === "proceedings"}
              onToggle={() => togglePanel("proceedings")}
              onClose={closePanels}
            />
          </nav>

          <Link
            href="/contact"
            className="hidden text-sm font-medium text-accent hover:text-primary lg:inline-flex lg:min-h-[44px] lg:items-center"
          >
            Contact →
          </Link>

          <button
            type="button"
            className="ml-auto inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-body lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-index"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span aria-hidden className="text-accent">
              {mobileOpen ? "×" : "☰"}
            </span>
            Index
          </button>
        </div>
      </div>

      {/* Inline expand panels — full width, push layout (not floating popovers) */}
      <NavDropdownPanel
        id={servicesPanelId}
        labelledBy={servicesTriggerId}
        items={servicesNavLinks}
        open={openPanel === "services"}
      />
      <NavDropdownPanel
        id={clientsPanelId}
        labelledBy={clientsTriggerId}
        items={whoWeHelpLinks}
        open={openPanel === "clients"}
      />
      <NavDropdownPanel
        id={proceedingsPanelId}
        labelledBy={proceedingsTriggerId}
        items={proceedingsLinks}
        open={openPanel === "proceedings"}
      />

      {/* Mobile index — two-column sheet below header, not slide overlay */}
      {mobileOpen ? (
        <nav
          id="mobile-index"
          aria-label="Mobile"
          className="border-t border-border bg-section-alt lg:hidden"
        >
          <div className="mx-auto grid max-w-[var(--max-width-content)] gap-6 px-4 py-6 sm:grid-cols-2 sm:px-6">
            <MobileSection title="Site">
              <MobileLink href="/" onNavigate={() => setMobileOpen(false)}>
                Home
              </MobileLink>
              <MobileLink
                href="/how-it-works"
                onNavigate={() => setMobileOpen(false)}
              >
                Process
              </MobileLink>
              <MobileLink href="/contact" onNavigate={() => setMobileOpen(false)}>
                Contact
              </MobileLink>
            </MobileSection>
            <MobileSection title="Services" links={servicesNavLinks} onNavigate={() => setMobileOpen(false)} />
            <MobileSection title="Clients" links={whoWeHelpLinks} onNavigate={() => setMobileOpen(false)} />
            <MobileSection title="Proceedings" links={proceedingsLinks} onNavigate={() => setMobileOpen(false)} />
            {mobileNavGroups.map((group) => (
              <MobileSection
                key={group.heading}
                title={group.heading}
                links={group.links}
                onNavigate={() => setMobileOpen(false)}
              />
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}

function MobileSection({
  title,
  links,
  children,
  onNavigate,
}: {
  title: string;
  links?: { href: string; label: string }[];
  children?: ReactNode;
  onNavigate?: () => void;
}) {
  return (
    <div>
      <p className="mb-2 font-serif text-base font-medium text-heading">{title}</p>
      <ul className="space-y-1">
        {links?.map((link) => (
          <li key={link.href}>
            <MobileLink href={link.href} onNavigate={onNavigate}>
              {link.label}
            </MobileLink>
          </li>
        ))}
        {children}
      </ul>
    </div>
  );
}

function MobileLink({
  href,
  children,
  onNavigate,
}: {
  href: string;
  children: ReactNode;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="flex min-h-[40px] items-center text-sm text-body hover:text-accent"
    >
      {children}
    </Link>
  );
}
