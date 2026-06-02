import type { ReactNode } from "react";

export function PageHero({ children }: { children: ReactNode }) {
  return (
    <header className="bg-primary text-white">
      <div className="mx-auto max-w-5xl min-w-0 px-4 py-14 md:px-6 md:py-20">
        {children}
      </div>
    </header>
  );
}
