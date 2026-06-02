export function navItemClasses(active: boolean): string {
  return `inline-flex min-h-[44px] shrink-0 items-center gap-1 whitespace-nowrap rounded px-1.5 py-2 text-xs font-semibold leading-none transition lg:px-2 xl:px-2.5 xl:text-sm ${
    active
      ? "bg-section-alt text-heading"
      : "text-body hover:bg-section-alt hover:text-heading"
  }`;
}
