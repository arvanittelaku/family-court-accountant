import type { ReactNode } from "react";

export function PageHero({
  children,
  aside,
}: {
  children: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <header className="border-b border-border">
      <div
        className={`mx-auto grid max-w-[var(--max-width-content)] ${aside ? "lg:grid-cols-5" : ""}`}
      >
        <div
          className={`bg-primary px-4 py-12 text-white sm:px-6 lg:px-8 lg:py-16 ${aside ? "lg:col-span-2 lg:border-r lg:border-white/10" : ""}`}
        >
          {children}
        </div>
        {aside ? (
          <div className="border-t border-border bg-section-alt px-4 py-10 sm:px-6 lg:col-span-3 lg:border-t-0 lg:py-16 lg:px-10">
            {aside}
          </div>
        ) : null}
      </div>
    </header>
  );
}
