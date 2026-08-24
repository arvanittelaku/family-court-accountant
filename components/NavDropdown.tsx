"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navLinkClasses, navTriggerClasses } from "@/components/nav-classes";
import type { NavLink } from "@/lib/nav-data";

function pathMatches(pathname: string | null, href: string): boolean {
  if (!pathname) return false;
  if (href === "/") return pathname === "/";
  const base = href.split("#")[0];
  if (base === "/") return pathname === "/";
  return pathname === base || pathname.startsWith(`${base}/`);
}

function groupIsActive(pathname: string | null, items: NavLink[]): boolean {
  return items.some((item) => pathMatches(pathname, item.href));
}

type NavDropdownProps = {
  label: string;
  items: NavLink[];
  panelId: string;
  triggerId: string;
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
};

export function NavDropdown({
  label,
  items,
  panelId,
  triggerId,
  open,
  onToggle,
  onClose,
}: NavDropdownProps) {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);
  const active = groupIsActive(pathname, items);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [onClose]);

  return (
    <div ref={ref} className="relative">
      <button
        id={triggerId}
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={panelId}
        className={navTriggerClasses(active, open)}
        onClick={onToggle}
      >
        {label}
        <span className="text-muted text-xs" aria-hidden>
          {open ? "−" : "+"}
        </span>
      </button>
    </div>
  );
}

export function NavDropdownPanel({
  id,
  labelledBy,
  items,
  open,
  onNavigate,
}: {
  id: string;
  labelledBy: string;
  items: NavLink[];
  open: boolean;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  if (!open) return null;

  return (
    <div
      id={id}
      role="region"
      aria-labelledby={labelledBy}
      className="border-t border-border bg-section-alt/80"
    >
      <ul className="mx-auto grid max-w-[var(--max-width-content)] gap-x-8 gap-y-1 px-4 py-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`block py-2 text-sm transition hover:text-accent ${
                pathMatches(pathname, item.href)
                  ? "font-semibold text-heading"
                  : "text-body"
              }`}
              onClick={onNavigate}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { navLinkClasses, pathMatches };
