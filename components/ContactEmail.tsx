import { SITE_EMAIL } from "@/lib/site";

type ContactEmailProps = {
  className?: string;
};

export function ContactEmail({ className = "" }: ContactEmailProps) {
  return (
    <a
      href={`mailto:${SITE_EMAIL}`}
      className={`font-medium text-accent hover:underline ${className}`.trim()}
    >
      {SITE_EMAIL}
    </a>
  );
}
