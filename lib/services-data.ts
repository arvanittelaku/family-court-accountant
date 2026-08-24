export type ServiceFaq = { question: string; answer: string };

export type Service = {
  id: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  shortDescription: string;
  paragraphs: string[];
  methodology: { step: string; detail: string }[];
  faqs: ServiceFaq[];
  relatedProceedings: { href: string; label: string }[];
  relatedCaseTypes: { href: string; label: string }[];
};

export const SERVICES: Service[] = [
  {
    id: "business-valuation",
    title: "Business Valuation",
    metaTitle: "Business Valuation in Divorce | Family Court Accountant",
    metaDescription:
      "Matrimonial business valuation for financial remedy: maintainable earnings, personal goodwill, liquidity analysis, and expert witness standards compliant expert reports.",
    h1: "Business Valuation — Family Court Accountant",
    shortDescription:
      "Independent matrimonial business valuation using maintainable earnings, DCF, or NAV methods with personal goodwill and liquidity analysis.",
    paragraphs: [
      "When a spouse owns or controls a trading company, partnership, or professional practice, the business interest is often the largest asset in financial remedy proceedings. A family court accountant applies commercial valuation techniques in a matrimonial context, focusing on what is genuinely available for distribution rather than a theoretical open-market price alone.",
      "Personal goodwill versus business goodwill is typically the most contested issue in owner-managed business divorces. Family court accountants assess maintainable income, liquidity for lump-sum or maintenance orders, and produce expert witness standards compliant reports suitable for joint expert or party-appointed appointment.",
    ],
    methodology: [
      { step: "Document review", detail: "Audited accounts, management accounts, and shareholding structure" },
      { step: "Valuation method", detail: "Maintainable earnings, DCF, or net asset value as appropriate" },
      { step: "Matrimonial adjustments", detail: "Personal goodwill exclusion and liquidity assessment" },
      { step: "Expert report", detail: "expert witness standards compliant report with statement of truth" },
    ],
    faqs: [
      {
        question: "How is a business valued in divorce proceedings?",
        answer:
          "Business valuation in divorce follows core commercial methodology, typically maintainable earnings or discounted cash flow, but with matrimonial-specific adjustments: personal goodwill is typically excluded; liquidity is assessed separately; and the court focuses on fair value in the context of the marriage rather than theoretical market value alone.",
      },
      {
        question: "What is personal goodwill and why does it matter in divorce?",
        answer:
          "Personal goodwill is the value attributable to the individual owner, their reputation, client relationships, and skills, that would be lost on a sale to a third party. Business goodwill is transferable and has realisable value. In financial remedy, courts typically exclude personal goodwill from the matrimonial pot as it is not a realisable asset available for distribution.",
      },
      {
        question: "What is expert witness standards and how does it apply?",
        answer:
          "Part 25 of the Family Procedure Rules 2010 governs expert appointment in family proceedings. FPR 25.3 states that the duty of experts is to help the court on matters within their expertise, and this duty overrides any obligation to the instructing party. Expert reports must comply with expert witness standards Practice Direction and include a statement of truth.",
      },
      {
        question: "How long does a business valuation expert report take?",
        answer:
          "A standard matrimonial business valuation typically takes 3 to 5 months from appointment to final report, including document collection, analysis, draft report, and written questions. Urgent cases may be completed in 4 to 8 weeks depending on complexity and court timetable.",
      },
    ],
    relatedProceedings: [
      { href: "/proceedings/financial-remedy-divorce", label: "Equitable Distribution (Divorce)" },
      { href: "/proceedings/nuptial-agreements", label: "Marital Agreements" },
    ],
    relatedCaseTypes: [
      { href: "/case-types/business-valuation-divorce", label: "Business Valuation in Divorce" },
      { href: "/case-types/high-net-worth-divorce", label: "High Net Worth Divorce" },
    ],
  },
  {
    id: "hidden-asset-investigation",
    title: "Hidden Asset Investigation",
    metaTitle: "Hidden Asset Investigation Divorce | Family Court Accountant",
    metaDescription:
      "Forensic hidden asset investigation in divorce: Financial affidavit cross-referencing, bank analysis, lifestyle gaps, overseas tracing, and trust structures.",
    h1: "Hidden Asset Investigation - Family Court Accountant",
    shortDescription:
      "Forensic tracing of undisclosed assets through Financial affidavit cross-referencing, bank statement analysis, and lifestyle comparison.",
    paragraphs: [
      "Undisclosed assets undermine fair financial remedy outcomes. Family court accountants investigate whether Financial affidavit disclosure is complete and consistent with bank statements, company records, and other available evidence.",
      "Investigative work typically combines Financial affidavit review with bank and credit card analysis, lifestyle comparison where declared income does not support evidenced expenditure, and tracing of transfers to connected parties, trusts, and overseas jurisdictions.",
    ],
    methodology: [
      { step: "Financial affidavit review", detail: "Cross-reference declared assets against supporting documents" },
      { step: "Bank analysis", detail: "Identify unexplained outflows and undisclosed accounts" },
      { step: "Lifestyle comparison", detail: "Compare declared income against evidenced expenditure" },
      { step: "Asset tracing", detail: "Overseas transfers, trust structures, and connected-party transactions" },
    ],
    faqs: [
      {
        question: "How does a family court accountant investigate hidden assets?",
        answer:
          "Hidden asset investigation involves cross-referencing declared Financial affidavit assets against bank statements, comparing lifestyle expenditure against declared income, analysing company financial records against publicly available information, and tracing asset transfers including investments moved overseas, property placed in trusts, and transfers to friends or family members.",
      },
      {
        question: "What is Financial affidavit and why does a forensic accountant review it?",
        answer:
          "Financial affidavit is the mandatory financial disclosure document in financial remedy proceedings, covering all assets, income, pensions, liabilities, and outgoings of both parties. A forensic accountant reviews Financial affidavit and supporting documents to identify whether disclosure is complete and whether figures are accurate and consistent with other available information.",
      },
      {
        question: "What is lifestyle analysis in divorce proceedings?",
        answer:
          "A lifestyle analysis compares the actual expenditure of the parties during the marriage, established from bank statements and credit card records, to the income declared by the financially stronger party. Where declared income is significantly lower than actual expenditure, this evidences undisclosed income or capital being used to fund the lifestyle.",
      },
    ],
    relatedProceedings: [
      { href: "/proceedings/financial-remedy-divorce", label: "Equitable Distribution (Divorce)" },
    ],
    relatedCaseTypes: [
      { href: "/case-types/hidden-assets-investigation", label: "Hidden Assets Investigation" },
      { href: "/case-types/overseas-assets-trusts", label: "Overseas Assets & Trusts" },
    ],
  },
  {
    id: "form-e-review",
    title: "Financial Affidavit Review",
    metaTitle: "Financial Affidavit Review | Family Court Accountant",
    metaDescription:
      "Expert Financial affidavit financial disclosure review for financial remedy: completeness checks, exhibit analysis, inconsistency identification, and questionnaire support.",
    h1: "Financial Affidavit Review — Family Court Accountant",
    shortDescription:
      "Expert review of Financial affidavit financial statements for completeness, accuracy, and questionnaire support.",
    paragraphs: [
      "Financial affidavit is the foundation of financial remedy disclosure. A family court accountant reviews the financial statement and exhibits to identify gaps, inconsistencies, and areas requiring further investigation before FDR or trial.",
      "Review work supports solicitors drafting disclosure questionnaires and scoping whether a full forensic investigation or business valuation is needed under expert witness standards.",
    ],
    methodology: [
      { step: "Financial affidavit analysis", detail: "Review all sections of the financial statement" },
      { step: "Exhibit review", detail: "Business accounts, bank statements, and property valuations" },
      { step: "Inconsistency identification", detail: "Flag discrepancies between sections and exhibits" },
      { step: "Questionnaire support", detail: "Draft questions for the disclosure questionnaire process" },
    ],
    faqs: [
      {
        question: "What is Financial affidavit and why does a forensic accountant review it?",
        answer:
          "Financial affidavit is the mandatory financial disclosure document in financial remedy proceedings, covering all assets, income, pensions, liabilities, and outgoings of both parties. A forensic accountant reviews Financial affidavit and supporting documents to identify whether disclosure is complete and whether figures are accurate and consistent with other available information.",
      },
      {
        question: "How does a family court accountant investigate hidden assets?",
        answer:
          "Hidden asset investigation involves cross-referencing declared Financial affidavit assets against bank statements, comparing lifestyle expenditure against declared income, analysing company financial records, and tracing asset transfers including overseas investments and trust structures.",
      },
      {
        question: "Do I need a solicitor to instruct a family court accountant?",
        answer:
          "Yes. A family court accountant works alongside your family law solicitor, who instructs the expert and manages the legal proceedings. If you do not yet have a solicitor, we can help you understand what you need and guide you through the process.",
      },
    ],
    relatedProceedings: [
      { href: "/proceedings/financial-remedy-divorce", label: "Equitable Distribution (Divorce)" },
    ],
    relatedCaseTypes: [
      { href: "/case-types/hidden-assets-investigation", label: "Hidden Assets Investigation" },
      { href: "/case-types/lifestyle-analysis-income", label: "Lifestyle Analysis & Income" },
    ],
  },
  {
    id: "income-lifestyle-analysis",
    title: "Income & Lifestyle Analysis",
    metaTitle: "Lifestyle Analysis Divorce | Family Court Accountant Income Expert",
    metaDescription:
      "Income and lifestyle analysis in divorce: expenditure versus declared income, undisclosed resources, notional income, and earning capacity assessment.",
    h1: "Income & Lifestyle Analysis - Family Court Accountant",
    shortDescription:
      "Expenditure versus declared income analysis to identify undisclosed resources and establish true standard of living.",
    paragraphs: [
      "Where a self-employed or business-owning spouse controls their declared income, lifestyle analysis compares evidenced expenditure against what they say they earn. A sustained gap suggests undisclosed resources or extractable business income.",
      "Family court accountants build expenditure schedules from bank and card records, assess earning capacity and notional income, and present findings suitable for maintenance, Schedule 1, or capitalisation arguments.",
    ],
    methodology: [
      { step: "Expenditure schedule", detail: "Build schedule from bank and credit card statements" },
      { step: "Income comparison", detail: "Compare total expenditure against declared income" },
      { step: "Gap analysis", detail: "Quantify the shortfall suggesting undisclosed resources" },
      { step: "Notional income", detail: "Assess earning capacity and extractable business income" },
    ],
    faqs: [
      {
        question: "What is lifestyle analysis in divorce proceedings?",
        answer:
          "A lifestyle analysis compares the actual expenditure of the parties during the marriage, established from bank statements and credit card records, to the income declared by the financially stronger party. Where declared income is significantly lower than actual expenditure, this evidences undisclosed income or capital being used to fund the lifestyle.",
      },
      {
        question: "How does a family court accountant investigate hidden assets?",
        answer:
          "Lifestyle gaps often trigger wider investigation: cross-referencing Financial affidavit against bank statements, analysing company drawings, and tracing unexplained inflows or asset transfers that fund expenditure above declared income.",
      },
      {
        question: "What is the difference between a court-appointed joint expert and a party-appointed expert in family proceedings?",
        answer:
          "A court-appointed joint expert (joint expert) is appointed by the court and jointly instructed by both parties, producing one report for the court. A party-appointed expert is instructed by one side only, typically reserved for very high-value or highly contested cases.",
      },
    ],
    relatedProceedings: [
      { href: "/proceedings/financial-remedy-divorce", label: "Equitable Distribution (Divorce)" },
      { href: "/proceedings/schedule-1-children-act", label: "Child Support & Provision" },
    ],
    relatedCaseTypes: [
      { href: "/case-types/lifestyle-analysis-income", label: "Lifestyle Analysis & Income" },
      { href: "/case-types/self-employed-income-assessment", label: "Self-Employed Income Assessment" },
    ],
  },
  {
    id: "add-backs-reconstruction",
    title: "Add-Backs & Financial Reconstruction",
    metaTitle: "Add-Backs Divorce | Family Court Accountant Financial Reconstruction",
    metaDescription:
      "Add-backs and financial reconstruction in divorce: personal expenditure through the business, debt analysis, and adjusted matrimonial pot calculations.",
    h1: "Add-Backs & Financial Reconstruction - Family Court Accountant",
    shortDescription:
      "Identification of personal expenditure run through the business and financial reconstruction of the matrimonial pot.",
    paragraphs: [
      "Business-owning spouses sometimes fund personal lifestyle through company accounts. Add-backs identify expenditure that should be treated as personal benefit and added back to available capital for distribution.",
      "Financial reconstruction presents an adjusted picture of resources after add-backs, related-party transactions, and assessment of whether business debts are commercially genuine.",
    ],
    methodology: [
      { step: "Business account review", detail: "Analyse company expenditure for personal benefit items" },
      { step: "Add-back calculation", detail: "Quantify expenditure to be added back to available capital" },
      { step: "Debt analysis", detail: "Assess commercial reality of business loans and liabilities" },
      { step: "Reconstruction report", detail: "Present adjusted financial position for the court" },
    ],
    faqs: [
      {
        question: 'What are "add-backs" in family proceedings?',
        answer:
          "An add-back is expenditure incurred by a business-owning spouse that is treated as personal benefit and therefore added back to the matrimonial pot for distribution. Common examples include personal cars run through the business, holidays expensed to the company, domestic expenses paid by the business, and related-party transactions that benefit the owner.",
      },
      {
        question: "How is a business valued in divorce proceedings?",
        answer:
          "Add-backs analysis often runs alongside business valuation. The court needs both the headline value of the business interest and an adjusted view of capital that has been diverted through the company for personal use.",
      },
      {
        question: "What is expert witness standards and how does it apply?",
        answer:
          "Part 25 of the Family Procedure Rules 2010 governs expert appointment in family proceedings. Add-backs and reconstruction reports must comply with expert witness standards Practice Direction and include a statement of truth.",
      },
    ],
    relatedProceedings: [
      { href: "/proceedings/financial-remedy-divorce", label: "Equitable Distribution (Divorce)" },
    ],
    relatedCaseTypes: [
      { href: "/case-types/add-backs-financial-reconstruction", label: "Add-Backs & Financial Reconstruction" },
    ],
  },
  {
    id: "overseas-asset-trusts",
    title: "Overseas Asset & Trust Analysis",
    metaTitle: "Overseas Assets Divorce | Family Court Accountant Trust Analysis",
    metaDescription:
      "Overseas asset and trust analysis in family proceedings: foreign accounts, offshore structures, beneficial interest, and international property valuation.",
    h1: "Overseas Asset & Trust Analysis - Family Court Accountant",
    shortDescription:
      "Investigation of foreign bank accounts, offshore trusts, and international property holdings in family proceedings.",
    paragraphs: [
      "International structures can obscure beneficial ownership in financial remedy. Family court accountants analyse Financial affidavit trust declarations, trace cross-border transfers, and assess trust deeds for who ultimately benefits.",
      "Work often runs alongside hidden asset investigation and may involve coordinating with foreign property or investment valuations to establish what is available for distribution.",
    ],
    methodology: [
      { step: "Disclosure review", detail: "Financial affidavit trust and overseas asset declarations" },
      { step: "Transfer tracing", detail: "International bank transfer analysis" },
      { step: "Trust deed analysis", detail: "Beneficial interest assessment in trust structures" },
      { step: "Valuation", detail: "Foreign property and investment valuation" },
    ],
    faqs: [
      {
        question: "How does a family court accountant investigate hidden assets?",
        answer:
          "Overseas investigation cross-references Financial affidavit declarations against bank transfer trails, identifies assets moved to foreign jurisdictions or trust structures, and assesses whether beneficial interest has been properly disclosed.",
      },
      {
        question: "What is Financial affidavit and why does a forensic accountant review it?",
        answer:
          "Financial affidavit requires disclosure of trust interests and overseas assets. A forensic accountant checks whether declarations match supporting documents and whether structures have been used to place assets beyond the matrimonial pot.",
      },
      {
        question: "How long does a family court accountant report take?",
        answer:
          "Overseas and trust cases often take longer due to document collection across jurisdictions. A standard case typically takes 3 to 5 months; complex international matters may extend beyond that depending on cooperation and court timetable.",
      },
    ],
    relatedProceedings: [
      { href: "/proceedings/financial-remedy-divorce", label: "Equitable Distribution (Divorce)" },
    ],
    relatedCaseTypes: [
      { href: "/case-types/overseas-assets-trusts", label: "Overseas Assets & Trusts" },
      { href: "/case-types/high-net-worth-divorce", label: "High Net Worth Divorce" },
    ],
  },
  {
    id: "schedule-1-evidence",
    title: "Schedule 1 Financial Evidence",
    metaTitle: "Schedule 1 Children Act Accountant | Family Court Financial Evidence",
    metaDescription:
      "Schedule 1 Children Act financial evidence: income assessment, capital provision, business valuation, and lifestyle analysis for unmarried parents.",
    h1: "Schedule 1 Financial Evidence - Family Court Accountant",
    shortDescription:
      "Income assessment and capital provision analysis for Schedule 1 child support statutes proceedings involving unmarried parents.",
    paragraphs: [
      "Schedule 1 claims require clear evidence of the paying parent's true resources for child support, housing, and other provision. Family court accountants assess income, business interests, and standard of living.",
      "Reports support solicitors acting for either parent in establishing what financial provision the court should order under the child support statutes Schedule 1.",
    ],
    methodology: [
      { step: "Income assessment", detail: "True available income for child support purposes" },
      { step: "Business valuation", detail: "Capital provision calculation where business owned" },
      { step: "Lifestyle analysis", detail: "Standard of living to which the child should be accustomed" },
      { step: "Expert report", detail: "Financial evidence for Schedule 1 application" },
    ],
    faqs: [
      {
        question: "What is lifestyle analysis in divorce proceedings?",
        answer:
          "In Schedule 1 cases, lifestyle analysis establishes the standard of living to which the child should be accustomed, by comparing evidenced expenditure and resources against declared income of the paying parent.",
      },
      {
        question: "What is the difference between a court-appointed joint expert and a party-appointed expert in family proceedings?",
        answer:
          "Schedule 1 financial evidence may be provided by joint expert or party-appointed experts depending on court directions and case complexity. joint expert appointments produce one report for the court; party-appointed experts are instructed by one side.",
      },
      {
        question: "What is expert witness standards and how does it apply?",
        answer:
          "Expert accountants in Schedule 1 proceedings follow expert witness standards duties: to help the court on matters within their expertise, with reports compliant with the Practice Direction and including a statement of truth.",
      },
    ],
    relatedProceedings: [
      { href: "/proceedings/schedule-1-children-act", label: "Child Support & Provision" },
    ],
    relatedCaseTypes: [
      { href: "/case-types/self-employed-income-assessment", label: "Self-Employed Income Assessment" },
    ],
  },
  {
    id: "nuptial-agreement-analysis",
    title: "Nuptial Agreement Financial Analysis",
    metaTitle: "Nuptial Agreement Accountant | Pre & Post-Nuptial Financial Analysis",
    metaDescription:
      "Independent financial analysis for pre-nuptial and post-nuptial agreements: asset valuation, income assessment, and contested agreement review.",
    h1: "Nuptial Agreement Financial Analysis - Family Court Accountant",
    shortDescription:
      "Independent asset valuation and financial schedule preparation for pre-nuptial and post-nuptial agreements.",
    paragraphs: [
      "Nuptial agreements require a clear financial baseline. Family court accountants provide independent valuation of business interests and other assets, income assessment, and schedules supporting fair agreement terms.",
      "Where an agreement is later contested in proceedings, forensic review of disclosure and valuations supports arguments about whether the agreement should be upheld.",
    ],
    methodology: [
      { step: "Asset valuation", detail: "Independent valuation of business interests and assets" },
      { step: "Income analysis", detail: "Earning capacity assessment for both parties" },
      { step: "Financial schedule", detail: "Prepare the financial basis for the agreement" },
      { step: "Challenge review", detail: "Review disclosure where agreement is contested in proceedings" },
    ],
    faqs: [
      {
        question: "How is a business valued in divorce proceedings?",
        answer:
          "Nuptial agreement schedules often require matrimonial business valuation using maintainable earnings or DCF, with personal goodwill typically excluded and liquidity assessed for any lump-sum provisions in the agreement.",
      },
      {
        question: "What is personal goodwill and why does it matter in divorce?",
        answer:
          "When valuing a business for a nuptial schedule, distinguishing personal goodwill from transferable business goodwill ensures the financial baseline reflects realisable value rather than owner-dependent reputation.",
      },
      {
        question: "What is expert witness standards and how does it apply?",
        answer:
          "If nuptial agreement terms are challenged in financial remedy, expert accountants may be appointed under expert witness standards to provide independent valuation and financial analysis to the court.",
      },
    ],
    relatedProceedings: [
      { href: "/proceedings/nuptial-agreements", label: "Marital Agreements" },
    ],
    relatedCaseTypes: [
      { href: "/case-types/business-valuation-divorce", label: "Business Valuation in Divorce" },
      { href: "/case-types/high-net-worth-divorce", label: "High Net Worth Divorce" },
    ],
  },
];

export const SERVICE_IDS = SERVICES.map((s) => s.id);

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.id === slug);
}

export function servicePath(id: string): string {
  return `/services/${id}`;
}
