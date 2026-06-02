import Link from "next/link";
import type { ClusterLink } from "@/lib/seo/clusterLinks";

type RelatedLinksProps = {
  title?: string;
  links: ClusterLink[];
};

export function RelatedLinks({
  title = "Related pages",
  links,
}: RelatedLinksProps) {
  if (links.length === 0) return null;

  return (
    <section
      aria-labelledby="related-pages-heading"
      className="mt-12 rounded-[var(--radius-card)] border border-border bg-section-alt p-5 sm:p-6"
    >
      <h2
        id="related-pages-heading"
        className="text-lg font-bold text-heading"
      >
        {title}
      </h2>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm font-medium text-accent hover:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
