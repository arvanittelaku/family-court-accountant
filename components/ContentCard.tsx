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
      className="group flex min-h-[44px] flex-col border-l-2 border-accent bg-surface py-4 pl-5 pr-4 transition hover:border-primary hover:bg-section-alt/50"
    >
      <h3 className="font-serif text-lg font-medium text-heading">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-body">
        {description}
      </p>
      {children ? <div className="mt-3">{children}</div> : null}
      <span className="mt-3 text-xs font-semibold uppercase tracking-wider text-accent group-hover:text-primary">
        Read more →
      </span>
    </Link>
  );
}
