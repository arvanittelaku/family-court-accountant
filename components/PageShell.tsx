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
      <PageHero>
        <SeoBreadcrumbs items={breadcrumbs} tone="inverse" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
            {subtitle}
          </p>
        ) : null}
      </PageHero>
      <div className="mx-auto max-w-3xl min-w-0 px-4 py-12 sm:px-6 lg:max-w-4xl lg:py-16">
        {children}
      </div>
      <PageBottomCta />
    </>
  );
}
