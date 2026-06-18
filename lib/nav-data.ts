import { CASE_TYPES } from "@/lib/case-types-data";
import { SERVICES } from "@/lib/services-data";

export type NavLink = { href: string; label: string };

export const whoWeHelpLinks: NavLink[] = [
  { href: "/who-we-help/solicitors-barristers", label: "Solicitors & Barristers" },
  {
    href: "/who-we-help/individuals-going-through-divorce",
    label: "Individuals Going Through Divorce",
  },
];

export const proceedingsLinks: NavLink[] = [
  { href: "/proceedings", label: "All Proceedings" },
  { href: "/proceedings/financial-remedy-divorce", label: "Financial Remedy (Divorce)" },
  { href: "/proceedings/schedule-1-children-act", label: "Schedule 1 (Children Act)" },
  { href: "/proceedings/tolata-cohabitation", label: "TOLATA (Cohabitation)" },
  { href: "/proceedings/nuptial-agreements", label: "Nuptial Agreements" },
];

export const servicesNavLinks: NavLink[] = [
  { href: "/services", label: "All Services" },
  ...SERVICES.map((s) => ({
    href: `/services/${s.id}`,
    label: s.title,
  })),
];

export const caseTypesNavLinks: NavLink[] = [
  { href: "/case-types", label: "All Case Types" },
  ...CASE_TYPES.map((c) => ({
    href: `/case-types/${c.slug}`,
    label: c.hubLabel,
  })),
];

export const resourcesNavLinks: NavLink[] = [
  { href: "/guides", label: "Guides" },
  { href: "/how-to-instruct", label: "How to Instruct" },
  { href: "/qualifications", label: "Qualifications" },
];

/** Secondary sections shown after primary nav items in the mobile menu. */
export const mobileNavGroups = [
  { heading: "Case Types", links: caseTypesNavLinks },
  { heading: "Resources", links: resourcesNavLinks },
];
