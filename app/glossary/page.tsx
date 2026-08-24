import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageShell } from "@/components/PageShell";
import {
  GLOSSARY_TERMS,
  buildGlossaryFaqPageItems,
  type GlossaryTerm,
} from "@/lib/glossary-data";
import { buildFaqSchema } from "@/lib/seo/schema";
import { buildPageMetadata } from "@/lib/seo-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Family Court Accountant Glossary | Key Family Finance Terms",
  description:
    "Definitions of key family court accountant and family finance terms for proceedings — from financial affidavit to add-backs, lifestyle analysis, expert witness standards, and joint expert.",
  path: "/glossary",
});

function glossaryLetters(terms: GlossaryTerm[]): string[] {
  return [
    ...new Set(terms.map((t) => t.term.charAt(0).toUpperCase())),
  ].sort();
}

function groupTermsByLetter(terms: GlossaryTerm[]): Map<string, GlossaryTerm[]> {
  const groups = new Map<string, GlossaryTerm[]>();
  for (const term of terms) {
    const letter = term.term.charAt(0).toUpperCase();
    const list = groups.get(letter) ?? [];
    list.push(term);
    groups.set(letter, list);
  }
  return groups;
}

function firstSentence(definition: string): string {
  const end = definition.indexOf(". ");
  if (end === -1) return definition;
  return definition.slice(0, end + 1);
}

function remainderAfterFirstSentence(definition: string): string | null {
  const end = definition.indexOf(". ");
  if (end === -1) return null;
  const rest = definition.slice(end + 2).trim();
  return rest.length > 0 ? rest : null;
}

export default function GlossaryPage() {
  const letters = glossaryLetters(GLOSSARY_TERMS);
  const grouped = groupTermsByLetter(GLOSSARY_TERMS);

  return (
    <PageShell
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Glossary", href: "/glossary" },
      ]}
      title="Family Court Accountant Glossary"
      subtitle="Key family finance terms from A to Z, with links to proceedings, case types, and guides."
    >
      <JsonLd data={buildFaqSchema(buildGlossaryFaqPageItems())} />

      <nav aria-label="Glossary A to Z" className="mb-10">
        <ul className="flex flex-wrap gap-2">
          {letters.map((letter) => (
            <li key={letter}>
              <a
                href={`#letter-${letter}`}
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded border border-border bg-section-alt px-3 text-sm font-semibold text-heading transition hover:border-accent hover:text-accent"
              >
                {letter}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="space-y-12">
        {letters.map((letter) => (
          <section key={letter} id={`letter-${letter}`} className="scroll-mt-24">
            <h2 className="border-b border-border pb-2 text-2xl font-bold text-heading">
              {letter}
            </h2>
            <dl className="mt-6 space-y-8">
              {(grouped.get(letter) ?? []).map((term) => {
                const lead = firstSentence(term.definition);
                const detail = remainderAfterFirstSentence(term.definition);

                return (
                  <div
                    key={term.fragmentId}
                    id={term.fragmentId}
                    className="scroll-mt-24 border-b border-border pb-8 last:border-0"
                  >
                    <dt className="text-lg font-semibold text-heading">
                      {term.term}
                    </dt>
                    <dd className="mt-2 leading-relaxed text-body">
                      <p className="font-medium text-heading">{lead}</p>
                      {detail ? (
                        <p className="mt-2 text-sm leading-relaxed">{detail}</p>
                      ) : null}
                      {term.internalLink ? (
                        <p className="mt-3 text-sm">
                          <Link
                            href={term.internalLink.href}
                            className="font-medium text-accent hover:underline"
                          >
                            {term.internalLink.label}
                          </Link>
                        </p>
                      ) : null}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </section>
        ))}
      </div>

      <p className="mt-10 text-sm text-body">
        For process context, see{" "}
        <Link href="/how-it-works" className="font-medium text-accent hover:underline">
          how a family court accountant works
        </Link>{" "}
        and our{" "}
        <Link href="/services" className="font-medium text-accent hover:underline">
          services
        </Link>
        .
      </p>
    </PageShell>
  );
}
