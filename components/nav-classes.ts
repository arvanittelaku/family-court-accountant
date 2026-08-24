export function navLinkClasses(active: boolean): string {
  return `inline-flex min-h-[44px] items-center px-1 text-sm font-medium transition ${
    active
      ? "text-heading underline decoration-accent decoration-2 underline-offset-[6px]"
      : "text-body hover:text-heading hover:underline hover:decoration-border hover:underline-offset-[6px]"
  }`;
}

export function navTriggerClasses(active: boolean, open: boolean): string {
  return `inline-flex min-h-[44px] items-center gap-1 px-1 text-sm font-medium transition ${
    active || open
      ? "text-heading underline decoration-accent decoration-2 underline-offset-[6px]"
      : "text-body hover:text-heading hover:underline hover:decoration-border hover:underline-offset-[6px]"
  }`;
}
