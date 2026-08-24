import type { ReactNode } from "react";
import { PageBottomCta } from "@/components/PageBottomCta";
import { PageHero } from "@/components/PageHero";
import { SeoBreadcrumbs, type BreadcrumbItem } from "@/components/SeoBreadcrumbs";

export function PageShell({
  breadcrumbs,
  title,
  subtitle,
  children,
}: {
  breadcrumbs: BreadcrumbItem[];
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHero
        aside={
          subtitle ? (
            <p className="max-w-xl text-base leading-relaxed text-body sm:text-lg">
              {subtitle}
            </p>
          ) : undefined
        }
      >
        <SeoBreadcrumbs items={breadcrumbs} tone="inverse" />
        <h1 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {title}
        </h1>
      </PageHero>
      <div className="mx-auto w-full max-w-[var(--max-width-content)] min-w-0 px-4 py-12 sm:px-6 lg:py-16">
        <div className="max-w-3xl">{children}</div>
      </div>
      <PageBottomCta />
    </>
  );
}
