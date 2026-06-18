import Link from "next/link";
import { ContactEmail } from "@/components/ContactEmail";
import { FooterLegal } from "@/components/FooterLegal";
import { SITE_NAME, SITE_REFERRAL_NOTICE, SITE_UK_SCOPE } from "@/lib/site";

const col1 = [
  { href: "/services/business-valuation", label: "Business Valuation" },
  { href: "/services/hidden-asset-investigation", label: "Hidden Asset Investigation" },
  { href: "/services/form-e-review", label: "Form E Review" },
  { href: "/services/income-lifestyle-analysis", label: "Lifestyle Analysis" },
  { href: "/services/add-backs-reconstruction", label: "Add-Backs" },
  { href: "/services/overseas-asset-trusts", label: "Overseas Assets" },
  { href: "/services/schedule-1-evidence", label: "Schedule 1 Evidence" },
  { href: "/services/nuptial-agreement-analysis", label: "Nuptial Agreement Analysis" },
];

const col2 = [
  { href: "/proceedings/financial-remedy-divorce", label: "Financial Remedy (Divorce)" },
  { href: "/proceedings/schedule-1-children-act", label: "Schedule 1 (Children Act)" },
  { href: "/proceedings/tolata-cohabitation", label: "TOLATA (Cohabitation)" },
  { href: "/proceedings/nuptial-agreements", label: "Nuptial Agreements" },
  { href: "/case-types", label: "All Case Types" },
];

const col3 = [
  { href: "/guides", label: "Solicitor Guides" },
  { href: "/glossary", label: "Glossary" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/how-to-instruct", label: "How to Instruct" },
  {
    href: "/what-is-a-family-court-accountant",
    label: "What Is a Family Court Accountant?",
  },
];

const col4 = [
  { href: "/who-we-help/solicitors-barristers", label: "Solicitors & Barristers" },
  {
    href: "/who-we-help/individuals-going-through-divorce",
    label: "Individuals Going Through Divorce",
  },
  { href: "/qualifications", label: "Qualifications" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-section-alt">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-2 sm:gap-10 sm:px-6 sm:py-12 lg:grid-cols-4 lg:px-8">
        <div>
          <h2 className="text-sm font-bold text-heading">Services</h2>
          <ul className="mt-4 space-y-2">
            {col1.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-body hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold text-heading">Proceedings</h2>
          <ul className="mt-4 space-y-2">
            {col2.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-body hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold text-heading">Resources</h2>
          <ul className="mt-4 space-y-2">
            {col3.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-body hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold text-heading">Who We Help</h2>
          <ul className="mt-4 space-y-2">
            {col4.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-body hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border px-4 py-6 sm:px-6 lg:px-8">
        <p className="mx-auto max-w-7xl text-center text-sm text-body">
          Email: <ContactEmail />
        </p>
        <p className="mx-auto mt-3 max-w-3xl text-center text-xs leading-relaxed text-body">
          {SITE_REFERRAL_NOTICE}
        </p>
        <p className="mx-auto mt-2 max-w-3xl text-center text-xs leading-relaxed text-body/80">
          {SITE_UK_SCOPE}
        </p>
        <p className="mx-auto mt-2 max-w-7xl text-center text-xs text-body/70">
          © 2025 {SITE_NAME}. England and Wales.
        </p>
        <FooterLegal />
      </div>
    </footer>
  );
}
