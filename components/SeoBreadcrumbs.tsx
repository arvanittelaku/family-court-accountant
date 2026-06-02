import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/json-ld";

export type BreadcrumbItem = { name: string; href: string };

export function SeoBreadcrumbs({
  items,
  tone = "inverse",
}: {
  items: readonly BreadcrumbItem[];
  tone?: "default" | "inverse";
}) {
  const ld = breadcrumbJsonLd(
    items.map((i) => ({ name: i.name, path: i.href })),
  );

  const navClass =
    tone === "inverse" ? "text-sm text-white/60" : "text-sm text-body/70";
  const sepClass = tone === "inverse" ? "text-white/40" : "text-body/40";
  const currentClass =
    tone === "inverse" ? "font-medium text-white" : "font-medium text-heading";
  const linkClass =
    tone === "inverse"
      ? "text-white/80 hover:text-white hover:underline underline-offset-2"
      : "text-body hover:text-heading hover:underline underline-offset-2";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
      <nav aria-label="Breadcrumb" className={navClass}>
        <ol className="flex flex-wrap items-center gap-1.5">
          {items.map((item, index) => {
            const last = index === items.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1.5">
                {index > 0 && (
                  <span className={sepClass} aria-hidden>
                    /
                  </span>
                )}
                {last ? (
                  <span className={currentClass} aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.href} className={linkClass}>
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
