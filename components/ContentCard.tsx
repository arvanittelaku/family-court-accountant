import Link from "next/link";
import type { ReactNode } from "react";

export function ContentCard({
  href,
  title,
  description,
  children,
}: {
  href: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex min-h-[44px] flex-col rounded-[var(--radius-card)] border border-border bg-white p-5 shadow-[var(--shadow-card)] transition hover:border-primary/30 hover:shadow-md"
    >
      <h3 className="text-lg font-semibold text-heading">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-body">
        {description}
      </p>
      {children ? <div className="mt-3">{children}</div> : null}
      <span className="mt-4 text-sm font-semibold text-accent">
        Read more
      </span>
    </Link>
  );
}
