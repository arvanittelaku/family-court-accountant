import { SITE_EMAIL, SITE_NAME, SITE_URL, LINKEDIN_URL } from "@/lib/site";
import { SERVICES } from "@/lib/services-data";

export function buildOrganizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    email: SITE_EMAIL,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: SITE_EMAIL,
      areaServed: "GB",
      availableLanguage: "English",
    },
    address: { "@type": "PostalAddress", addressCountry: "GB" },
    areaServed: { "@type": "Country", name: "United Kingdom" },
    sameAs: [LINKEDIN_URL],
  };
}

export function buildWebSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/glossary?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildProfessionalServiceSchema() {
  return {
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#professional-service`,
    name: "Family Court Accountant",
    serviceType: "Family Court Accountant",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "United Kingdom" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Family Court Accountant Services",
      itemListElement: SERVICES.map((s, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: {
          "@type": "Service",
          "@id": `${SITE_URL}/services/${s.id}`,
          name: s.title,
          description: s.shortDescription,
        },
      })),
    },
  };
}

export function buildHomeGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildOrganizationSchema(),
      buildWebSiteSchema(),
      buildProfessionalServiceSchema(),
    ],
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; href: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.href.startsWith("http") ? item.href : `${SITE_URL}${item.href}`,
    })),
  };
}

export function buildFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function buildArticleSchema(opts: {
  headline: string;
  description: string;
  url: string;
  aboutId?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    url: opts.url,
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    ...(opts.aboutId
      ? { about: { "@id": `${SITE_URL}/services/${opts.aboutId}` } }
      : {}),
  };
}

export function buildPersonSchema(expert: {
  name: string;
  title: string;
  bio: string;
  specialisms?: string[];
}) {
  return {
    "@type": "Person",
    name: expert.name,
    jobTitle: expert.title,
    description: expert.bio,
    worksFor: { "@id": `${SITE_URL}/#organization` },
    ...(expert.specialisms?.length
      ? { knowsAbout: expert.specialisms }
      : {}),
  };
}

export function buildServicesGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildOrganizationSchema(),
      ...SERVICES.map((s) => ({
        "@type": "Service",
        "@id": `${SITE_URL}/services/${s.id}`,
        name: s.title,
        description: s.shortDescription,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "United Kingdom" },
      })),
    ],
  };
}
