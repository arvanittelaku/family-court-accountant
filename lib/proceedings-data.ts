export type ProceedingFaq = { question: string; answer: string };

export type Proceeding = {
  slug: string;
  hubLabel: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  sections: { heading: string; content: string | string[] }[];
  faqs?: ProceedingFaq[];
};

export const PROCEEDINGS: Proceeding[] = [
  {
    slug: "financial-remedy-divorce",
    hubLabel: "Financial Remedy (Divorce)",
    title: "Financial Remedy Divorce Accountant UK",
    metaTitle: "Financial Remedy Divorce Accountant UK | Form E, Business Valuation & SJE",
    metaDescription:
      "Family court accountants for divorce financial remedy proceedings. Form E analysis, business valuation, hidden assets, income assessment, and FPR Part 25 compliant expert reports.",
    h1: "Financial Remedy Divorce: Family Court Accountant UK",
    sections: [
      {
        heading: "What Is a Financial Remedy Order?",
        content:
          "A financial remedy order is the court's resolution of the financial aspects of a divorce or dissolution, covering the division of assets, property, savings, pensions, business interests, and maintenance. It is governed by the Matrimonial Causes Act 1973 (s25 factors) and the Family Procedure Rules.",
      },
      {
        heading: "The Financial Disclosure Process: Form E",
        content: [
          "This disclosure process is normally carried out by each party completing their own financial statement, Form E, which is a detailed thirty-plus page document covering all assets, income, liabilities, and financial obligations.",
          "Family court accountants assist with reviewing your spouse's Form E for completeness and accuracy, identifying questions to raise in the questionnaire process, reviewing business accounts and company financial statements appended to Form E, and identifying unexplained discrepancies between declared figures and known lifestyle.",
        ],
      },
      {
        heading: "When Is an Expert Accountant Needed in Financial Remedy?",
        content: [
          "Business or shareholding needs independent valuation",
          "Lifestyle analysis needed to challenge declared income",
          "Hidden asset investigation required",
          "Add-backs calculation needed",
          "Complex pension sharing with business interests",
          "Overseas assets, trusts, or structures to analyse",
          "Self-employed spouse with controlled income",
        ],
      },
      {
        heading: "The Section 25 Factors and Accounting Evidence",
        content:
          "Under MCA 1973 s25, the court considers financial resources (including earning capacity), financial needs, standard of living during the marriage, contributions, and conduct. Family court accountants provide the financial evidence underpinning several of these factors.",
      },
    ],
    faqs: [
      {
        question: "Does the family court always appoint a Single Joint Expert accountant?",
        answer:
          "In most cases below the highest value, the judge will only allow one expert accountant acting for both sides, producing a joint report for the court. This is the SJE appointment. In high-value or highly contested cases, particularly where the parties' financial positions diverge significantly, each party may be permitted their own expert.",
      },
      {
        question: "What is Form E and why does a forensic accountant review it?",
        answer:
          "Form E is the mandatory financial disclosure document in financial remedy proceedings, covering all assets, income, pensions, liabilities, and outgoings of both parties. A forensic accountant reviews Form E and the supporting documents, particularly business accounts, to identify whether the disclosure is complete and whether the figures are accurate and consistent with other available information.",
      },
    ],
  },
  {
    slug: "schedule-1-children-act",
    hubLabel: "Schedule 1 (Children Act)",
    title: "Schedule 1 Children Act Accountant UK",
    metaTitle: "Schedule 1 Children Act Accountant UK | Financial Provision for Children",
    metaDescription:
      "Family court accountants for Schedule 1 Children Act 1989 proceedings. Income assessment, capital provision analysis, and financial expert evidence for unmarried parents.",
    h1: "Schedule 1 Children Act 1989: Family Court Accountant UK",
    sections: [
      {
        heading: "What Is a Schedule 1 Claim?",
        content:
          "Schedule 1 of the Children Act 1989 allows unmarried parents (and in some cases parents who were never in a relationship) to apply to the court for financial provision for their children, including lump sum payments, property transfer orders, and periodical payments. The applicant parent (usually the primary carer) seeks financial support from the respondent parent, typically a higher earner.",
      },
      {
        heading: "When Is a Family Court Accountant Needed in Schedule 1?",
        content: [
          "Schedule 1 Children Act 1989 applications can involve complex financial questions, particularly where the respondent parent is a high earner, business owner, or has complex assets, requiring expert valuations and disclosure processes.",
          "Common accounting issues include business income assessment (what is truly available for child support), business valuation for capital provision calculation, lifestyle analysis to establish the standard of living to which the child should be accustomed, and hidden income investigation where the respondent controls their own earnings.",
        ],
      },
      {
        heading: "Schedule 1 vs Divorce Financial Remedy: Key Differences",
        content: "comparison-table",
      },
    ],
    faqs: [
      {
        question: "Can I make a Schedule 1 claim if we were never married?",
        answer:
          "Yes. Schedule 1 is specifically designed for unmarried parents. Unlike financial remedy (which requires marriage or civil partnership), Schedule 1 applies where there is a child of both parents regardless of whether the parents were ever in a formal relationship.",
      },
      {
        question: "Does Schedule 1 cover property transfer?",
        answer:
          "Yes. Courts can order a lump sum payment, settlement or transfer of property, or periodical payments for the benefit of a child. Property orders under Schedule 1 typically revert to the payer when the child reaches adulthood or finishes education. Family court accountants assess the capital and income available to fund such orders.",
      },
    ],
  },
  {
    slug: "tolata-cohabitation",
    hubLabel: "TOLATA (Cohabitation)",
    title: "TOLATA Cohabitation Accountant UK",
    metaTitle: "TOLATA Cohabitation Accountant UK | Trust of Land Financial Expert Evidence",
    metaDescription:
      "Family court accountants for TOLATA and cohabitation property disputes. Beneficial interest analysis, property valuation, and financial expert evidence for separating cohabiting couples.",
    h1: "TOLATA & Cohabitation: Family Court Accountant UK",
    sections: [
      {
        heading: "What Is TOLATA?",
        content:
          "The Trusts of Land and Appointment of Trustees Act 1996 (TOLATA) governs property disputes between cohabiting couples and others who have a beneficial interest in property. Unlike divorce financial remedy, TOLATA does not allow courts to redistribute assets. It determines who owns what share of the property based on legal principles of trust, contribution, and intention.",
      },
      {
        heading: "TOLATA vs Schedule 1: An Important Distinction",
        content:
          "TOLATA determines beneficial ownership between adults and is governed by the Civil Procedure Rules. Schedule 1 focuses exclusively on provision for a child and operates within the Family Procedure Rules framework. The strategic choice, or combination, of claims can significantly affect the outcome.",
      },
      {
        heading: "When Is a Family Court Accountant Needed in TOLATA?",
        content: [
          "Property has been purchased jointly but financial contributions were unequal: what share does each party own?",
          "One party paid for improvements or renovation: does this affect their beneficial interest?",
          "Trust of land is contested: what was the common intention of the parties?",
          "Business assets are intertwined with property interests",
          "Financial reconstruction of property purchase contributions over many years",
        ],
      },
      {
        heading: "2024-2026 TOLATA Developments",
        content:
          "Significant 2024 case law developments including Savage v Savage and Nilsson v Cynberg, combined with October 2024 TOLATA procedure changes imposing mediation cost sanctions and the Government's February 2025 cohabitation reform consultation, have made understanding of TOLATA proceedings more urgent than ever for cohabiting couples.",
      },
    ],
    faqs: [
      {
        question: "What does a family court accountant do in TOLATA proceedings?",
        answer:
          "In TOLATA disputes, a family court accountant reconstructs the financial contributions made by each party to the property purchase and subsequent costs, establishing the financial basis for each party's claimed beneficial interest. They may also value the property and analyse any business interests connected to the property dispute.",
      },
      {
        question: "Do TOLATA proceedings use the same expert rules as financial remedy?",
        answer:
          "No. TOLATA is governed by the Civil Procedure Rules (CPR) rather than FPR, so CPR Part 35 applies to expert evidence, not FPR Part 25. However, where TOLATA and Schedule 1 claims are combined, family court accountants must be familiar with both frameworks.",
      },
    ],
  },
  {
    slug: "nuptial-agreements",
    hubLabel: "Nuptial Agreements",
    title: "Nuptial Agreement Accountant UK",
    metaTitle: "Nuptial Agreement Accountant UK | Pre & Post-Nuptial Financial Analysis",
    metaDescription:
      "Family court accountants for pre-nuptial and post-nuptial agreement financial analysis. Independent asset valuation, income assessment, and business valuation for nuptial agreements.",
    h1: "Nuptial Agreement Financial Analysis: Family Court Accountant UK",
    sections: [
      {
        heading: "What Is a Nuptial Agreement?",
        content:
          "A pre-nuptial agreement is made before marriage; a post-nuptial agreement after. Both set out how the parties agree to deal with their assets if the marriage ends. Following Radmacher v Granatino [2010], nuptial agreements are given significant weight by UK courts provided they are properly entered into with full financial disclosure, independent legal advice, and no undue pressure.",
      },
      {
        heading: "The Family Court Accountant's Role in Nuptial Agreements",
        content: [
          "Independent valuation of business interests and assets being ring-fenced",
          "Analysis of income streams and earning capacity of both parties",
          "Financial schedule preparation (the financial basis on which the agreement is made)",
          "Review of existing nuptial agreement financial disclosure in financial remedy proceedings",
          "Expert evidence where a nuptial agreement is being challenged",
        ],
      },
      {
        heading: "Radmacher v Granatino and Financial Disclosure",
        content:
          "Full financial disclosure is essential for a nuptial agreement to carry weight in court. Family court accountants provide or review the financial schedules to ensure disclosure is complete and the values are realistic, protecting both parties.",
      },
    ],
    faqs: [
      {
        question: "Is independent financial analysis always needed for a nuptial agreement?",
        answer:
          "In high-value cases and where one party owns a business or has complex assets, independent financial analysis is strongly advisable. Without it, the agreement may be challenged on the basis that one party did not have a realistic understanding of the other's financial position.",
      },
      {
        question: "What happens if a nuptial agreement is challenged in financial remedy proceedings?",
        answer:
          "Courts assess whether the agreement was freely entered into, with full disclosure and independent advice, and whether holding the parties to it would be unfair. Family court accountants may provide expert evidence on whether the financial disclosure at the time was accurate and complete.",
      },
    ],
  },
];

export function getProceeding(slug: string): Proceeding | undefined {
  return PROCEEDINGS.find((p) => p.slug === slug);
}

export const SCHEDULE1_COMPARISON = {
  headers: ["Feature", "Financial Remedy (Divorce)", "Schedule 1"],
  rows: [
    ["Married?", "Yes", "No"],
    ["Framework", "MCA 1973, FPR", "CA 1989 Sch 1, FPR"],
    ["Asset division", "Full matrimonial pot", "Provision for child only"],
    ["Costs position", "Each party usually bears own", "Different costs rules"],
    ["Primary purpose", "Fair division", "Child's needs"],
  ],
};
