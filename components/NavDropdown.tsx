"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { navItemClasses } from "@/components/nav-classes";
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
};

export function NavDropdown({ label, items }: NavDropdownProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const active = groupIsActive(pathname, items);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={menuId}
        className={navItemClasses(active)}
        onClick={() => setOpen((value) => !value)}
      >
        {label}
        <svg
          aria-hidden
          className={`h-3.5 w-3.5 shrink-0 transition ${open ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {open ? (
        <ul
          id={menuId}
          role="menu"
          className="absolute left-0 top-full z-50 mt-0 min-w-[15rem] rounded-md border border-border bg-white py-1 shadow-lg"
        >
          {items.map((item) => (
            <li key={item.href} role="none">
              <Link
                href={item.href}
                role="menuitem"
                className={`block px-4 py-2.5 text-sm transition hover:bg-section-alt ${
                  pathMatches(pathname, item.href)
                    ? "font-semibold text-heading"
                    : "text-body hover:text-heading"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
