type FaqItem = { question: string; answer: string };

type FaqListProps = {
  items: FaqItem[];
  heading?: string;
  headingLevel?: "h2" | "h3";
};

export function FaqList({
  items,
  heading = "Frequently asked questions",
  headingLevel = "h2",
}: FaqListProps) {
  const Heading = headingLevel;

  return (
    <section className="mt-10">
      <Heading className="text-lg font-semibold text-heading">{heading}</Heading>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-[var(--radius-card)] border border-border bg-white open:bg-section-alt"
          >
            <summary className="cursor-pointer list-none px-5 py-4 font-semibold text-heading marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-start justify-between gap-4 text-sm sm:text-base">
                {item.question}
                <span
                  className="mt-0.5 shrink-0 text-accent transition group-open:rotate-45"
                  aria-hidden
                >
                  +
                </span>
              </span>
            </summary>
            <div className="border-t border-border px-5 pb-4 pt-3 text-sm leading-relaxed text-body">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
