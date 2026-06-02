type DataTableProps = {
  headers: string[];
  rows: string[][];
  caption?: string;
};

export function DataTable({ headers, rows, caption }: DataTableProps) {
  return (
    <div className="my-6 overflow-x-auto rounded-[var(--radius-card)] border border-border">
      <table className="w-full min-w-[280px] border-collapse text-left text-sm">
        {caption ? (
          <caption className="border-b border-border bg-section-alt px-4 py-2 text-left text-xs font-medium text-body">
            {caption}
          </caption>
        ) : null}
        <thead>
          <tr className="bg-section-alt">
            {headers.map((h) => (
              <th
                key={h}
                scope="col"
                className="border-b border-border px-4 py-3 font-semibold text-heading"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="border-b border-border last:border-0">
              {row.map((cell, ci) => (
                <td key={ci} className="px-4 py-3 text-body align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
