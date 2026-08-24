export type CaseTypeFaq = { question: string; answer: string };

export type CaseType = {
  slug: string;
  hubLabel: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  paragraphs: string[];
  faqs: CaseTypeFaq[];
  relatedProceedings: { href: string; label: string }[];
  relatedServices: { href: string; label: string }[];
};

export const CASE_TYPES: CaseType[] = [
  {
    slug: "business-valuation-divorce",
    hubLabel: "Business Valuation in Divorce",
    title: "Business Valuation in Divorce",
    metaTitle: "Business Valuation in Divorce | Family Court Accountant Expert",
    metaDescription:
      "Matrimonial business valuation for financial remedy: personal goodwill, liquidity analysis, maintainable income, and expert witness standards expert reports for family proceedings.",
    h1: "Business Valuation in Divorce - Family Court Accountant",
    paragraphs: [
      "When a spouse owns or controls a trading company, partnership, or professional practice, the business interest is often the largest asset in financial remedy proceedings. Matrimonial business valuation uses the same core techniques as commercial valuation, typically maintainable earnings, discounted cash flow, or net asset value, but applies family-law adjustments that reflect what is genuinely available for distribution rather than a theoretical sale price on the open market.",
      "The most contested issue in owner-managed business divorces is usually the split between personal goodwill and business goodwill. Personal goodwill attaches to the individual owner, their reputation, and client relationships, and would not transfer to a third-party buyer. Business goodwill is transferable and has realisable value. Family court accountants typically exclude personal goodwill from the matrimonial pot because it is not a realisable asset, while valuing the transferable element that could be realised or reflected in a settlement structure.",
      "Liquidity analysis sits alongside the headline valuation: the court needs to know whether the business can fund a lump sum, whether income can be extracted for maintenance, and what maintainable income the business genuinely supports. In most cases the court appoints a court-appointed joint expert (joint expert) under expert witness standards to produce one independent valuation report for both parties. We provide expert witness standards compliant matrimonial business valuation reports for solicitors and individuals instructing through their legal advisers.",
    ],
    faqs: [
      {
        question: "How is a business valued differently in divorce compared to a commercial sale?",
        answer:
          "In divorce proceedings, business valuation follows the same core methodology as commercial valuation, typically maintainable earnings or DCF, but with matrimonial-specific adjustments: personal goodwill (attributable to the owner's individual skills and relationships) is typically excluded as it would not transfer on a sale; liquidity is assessed separately (can the business fund a lump sum payment?); and the court focuses on fair value rather than theoretical market value in the context of the marriage.",
      },
      {
        question: "What is personal vs business goodwill in a divorce valuation?",
        answer:
          "Personal goodwill is the value attributable to the individual owner, their reputation, client relationships, and skills, that would be lost on a sale to a third party. Business goodwill is transferable and has realisable value. In financial remedy, courts typically exclude personal goodwill from the matrimonial pot as it is not a realisable asset available for distribution. The distinction between personal and business goodwill is often the most contested valuation issue in owner-managed business divorces.",
      },
    ],
    relatedProceedings: [
      { href: "/proceedings/financial-remedy-divorce", label: "Equitable Distribution (Divorce)" },
      { href: "/proceedings/nuptial-agreements", label: "Marital Agreements" },
      { href: "/proceedings/schedule-1-children-act", label: "Child Support & Provision" },
    ],
    relatedServices: [
      { href: "/services/business-valuation", label: "Business Valuation (expert witness standards)" },
      { href: "/services/nuptial-agreement-analysis", label: "Nuptial Agreement Financial Analysis" },
    ],
  },
  {
    slug: "hidden-assets-investigation",
    hubLabel: "Hidden Assets Investigation",
    title: "Hidden Assets Investigation",
    metaTitle: "Hidden Assets Investigation Divorce | Family Court Accountant",
    metaDescription:
      "Forensic hidden asset investigation in divorce: financial affidavit cross-referencing, bank analysis, lifestyle gaps, overseas tracing, and trust structures.",
    h1: "Hidden Assets Investigation - Family Court Accountant",
    paragraphs: [
      "Undisclosed assets undermine fair financial remedy outcomes. Spouses may understate business value, omit accounts, transfer property to connected parties, or route funds through trusts and overseas structures. Family court accountants investigate whether financial affidavit disclosure is complete and consistent with bank statements, company records, and other available evidence.",
      "Investigative methodology typically combines financial affidavit review with bank and credit card analysis to identify unexplained outflows and undisclosed accounts, lifestyle comparison where declared income does not support evidenced expenditure, and tracing of transfers to family members, connected companies, trusts, and foreign jurisdictions. Overseas asset tracing and trust deed analysis often run in parallel where international elements are suspected.",
      "The objective is a clear, evidence-based picture of resources available for distribution, suitable for questionnaire support, FDR negotiation, or expert report under expert witness standards. We work with solicitors leading financial remedy proceedings and with individuals who suspect assets are being concealed, always through appropriate legal instruction where court proceedings are active.",
    ],
    faqs: [
      {
        question: "How does a family court accountant find hidden assets?",
        answer:
          "Hidden asset investigation involves cross-referencing multiple data sources: declared financial affidavit assets against bank statements (identifying unexplained outflows); lifestyle expenditure against declared income (identifying a gap suggesting undisclosed resources); company financial records against publicly available information; and asset registers against market values. Forensic accountants can trace assets including investments moved overseas, property placed in trusts, land purchased abroad, and property transferred to friends or family members.",
      },
      {
        question: "What are the most common ways people hide assets in divorce?",
        answer:
          "Common methods include: understating business value through inflated costs or artificially depressed salary drawings; transferring assets to family members or connected parties before proceedings; using trust structures to obscure ownership; delaying business contracts or income until after the financial settlement; and maintaining undisclosed bank accounts or investments.",
      },
    ],
    relatedProceedings: [
      { href: "/proceedings/financial-remedy-divorce", label: "Equitable Distribution (Divorce)" },
    ],
    relatedServices: [
      { href: "/services/hidden-asset-investigation", label: "Hidden Asset Investigation" },
      { href: "/services/form-e-review", label: "Financial Affidavit Review" },
    ],
  },
  {
    slug: "lifestyle-analysis-income",
    hubLabel: "Lifestyle Analysis & Income",
    title: "Lifestyle Analysis and Income Assessment",
    metaTitle: "Lifestyle Analysis Divorce | Family Court Accountant",
    metaDescription:
      "Lifestyle analysis and income assessment in family proceedings: expenditure vs declared income, bank statements, Schedule 1, and notional income.",
    h1: "Lifestyle Analysis & Income Assessment - Family Court Accountant",
    paragraphs: [
      "Lifestyle analysis compares actual expenditure during the marriage, built from bank statements, credit card records, and other financial evidence, to the income declared by the financially stronger party. Where declared income is materially lower than the lifestyle enjoyed, that gap supports an argument that undisclosed income or capital has funded living costs.",
      "The work often includes a structured schedule of expenditure, detailed bank statement analysis, and where relevant investigation of self-employed or director-controlled income structures. It is used in financial remedy to challenge inadequate disclosure and in Schedule 1 proceedings to establish the standard of living and true resources available for child provision.",
      "Experts may also assess notional income: income that could reasonably be earned or extracted from a business but has not been declared. Courts can draw adverse inferences from inadequate disclosure and may impute income where lifestyle evidence and expert analysis establish that higher resources were available. We provide lifestyle and income analysis reports aligned to expert witness standards where expert evidence is required.",
    ],
    faqs: [
      {
        question: "What is a lifestyle analysis in family proceedings?",
        answer:
          "A lifestyle analysis compares the actual expenditure of the parties during the marriage, established from bank statements, credit card records, and other financial evidence, to the income declared by the financially stronger party. Where declared income is significantly lower than actual expenditure, this evidences undisclosed income or capital being used to fund the lifestyle.",
      },
      {
        question: "How does the court treat lifestyle evidence?",
        answer:
          "Lifestyle evidence is used to challenge inadequate financial disclosure, arguing that if income was as declared, the lifestyle enjoyed during the marriage would not have been possible. Courts can draw adverse inferences from inadequate disclosure and may impute income or capital to the financially stronger party.",
      },
    ],
    relatedProceedings: [
      { href: "/proceedings/financial-remedy-divorce", label: "Equitable Distribution (Divorce)" },
      { href: "/proceedings/schedule-1-children-act", label: "Child Support & Provision" },
    ],
    relatedServices: [
      { href: "/services/income-lifestyle-analysis", label: "Income & Lifestyle Analysis" },
      { href: "/services/form-e-review", label: "Financial Affidavit Review" },
    ],
  },
  {
    slug: "add-backs-financial-reconstruction",
    hubLabel: "Add-Backs & Reconstruction",
    title: "Add-Backs and Financial Reconstruction",
    metaTitle: "Add-Backs in Divorce | Family Court Accountant",
    metaDescription:
      "Add-backs and financial reconstruction in divorce: personal spend through the business, notional income, and treatment of loans and debt in the matrimonial pot.",
    h1: "Add-Backs & Financial Reconstruction - Family Court Accountant",
    paragraphs: [
      "Add-backs are adjustments that treat certain business expenditure as personal benefit to the owner, effectively increasing the capital or income available for matrimonial division. Typical examples include personal vehicles, holidays and entertainment run through the company, domestic costs paid from business accounts, and related-party transactions that benefit the controlling spouse.",
      "Financial reconstruction brings the disclosed balance sheet and profit and loss position to a fair matrimonial view by quantifying those add-backs and addressing personal expenditure routed through corporate structures. The analysis supports arguments about the true size of the matrimonial pot and whether reported business profits understate resources available to the family.",
      "Business loans and debt are frequently disputed: one party may argue debt reduces business value while the other argues the owner received the benefit of activities funded by borrowing and should bear liability personally. Family court accountants assess purpose, structure, and commercial reality of debt alongside notional income that could have been drawn but was retained or diverted. The same reconstruction techniques can support TOLATA contribution analysis where business funds were used for property.",
    ],
    faqs: [
      {
        question: 'What is an "add-back" in divorce proceedings?',
        answer:
          "An add-back is expenditure incurred by a business-owning spouse that is treated as personal benefit, and therefore added back to the matrimonial pot for distribution. Common examples: personal cars run through the business; holidays and entertainment expensed to the company; domestic expenses paid by the business; and related-party transactions that benefit the owner. The total of these add-backs effectively increases the capital available for division.",
      },
      {
        question: "Can business loans be treated as personal liabilities in divorce?",
        answer:
          "Business loans are a common dispute: one party arguing they reduce business value; the other arguing the owner took the benefit of the business activities funded by the loan and should bear the liability personally. Family court accountants assess the purpose, structure, and commercial reality of business debt in the matrimonial context.",
      },
    ],
    relatedProceedings: [
      { href: "/proceedings/financial-remedy-divorce", label: "Equitable Distribution (Divorce)" },
      { href: "/proceedings/tolata-cohabitation", label: "Cohabitation Property" },
    ],
    relatedServices: [
      { href: "/services/add-backs-reconstruction", label: "Add-Backs & Financial Reconstruction" },
      { href: "/services/income-lifestyle-analysis", label: "Income & Lifestyle Analysis" },
    ],
  },
  {
    slug: "self-employed-income-assessment",
    hubLabel: "Self-Employed Income",
    title: "Self-Employed Income Assessment",
    metaTitle: "Self-Employed Spouse Income Divorce | Family Court Accountant",
    metaDescription:
      "Self-employed and director income assessment for family proceedings: drawings, dividends, retained profits, benefits in kind, and notional income for maintenance.",
    h1: "Self-Employed Income Assessment - Family Court Accountant",
    paragraphs: [
      "A self-employed spouse or company director can control how remuneration is taken: salary, dividends, pension contributions, benefits in kind, and timing of distributions. Declared taxable income alone may not reflect the economic benefit available for maintenance or child support.",
      "Family court accountants assess total extractable value: salary plus dividends plus employer pension contributions plus benefits in kind plus retained profits that could reasonably have been distributed. That analysis supports periodical payments, Schedule 1 claims, and challenges to financial affidavit income disclosure where drawings have been artificially suppressed.",
      "Where income is understated or capacity underused, experts may opine on notional income: what could be earned by applying earning capacity, or what additional sums could be extracted from the business. Courts may attribute notional income for maintenance purposes where the expert establishes that higher income was available but not declared.",
    ],
    faqs: [
      {
        question: "How is a self-employed spouse's income assessed for maintenance?",
        answer:
          "A self-employed or director spouse controls how their income is structured: salary, dividends, pension contributions, benefits in kind. Family court accountants assess the total economic benefit available: salary + dividends + employer pension contributions + business benefits + retained profits that could reasonably have been extracted = the true income available for maintenance purposes.",
      },
      {
        question: 'What is "notional income" in family proceedings?',
        answer:
          "Notional income is income that could be earned if a party applied their earning capacity, or additional income that could reasonably be extracted from a business but has not been declared. Courts can attribute notional income to an underperforming spouse where the expert establishes that higher income was available.",
      },
    ],
    relatedProceedings: [
      { href: "/proceedings/financial-remedy-divorce", label: "Equitable Distribution (Divorce)" },
      { href: "/proceedings/schedule-1-children-act", label: "Child Support & Provision" },
    ],
    relatedServices: [
      { href: "/services/income-lifestyle-analysis", label: "Income & Lifestyle Analysis" },
      { href: "/services/schedule-1-evidence", label: "Schedule 1 Financial Evidence" },
    ],
  },
  {
    slug: "overseas-assets-trusts",
    hubLabel: "Overseas Assets & Trusts",
    title: "Overseas Assets and Trust Analysis",
    metaTitle: "Overseas Assets Divorce | Family Court Accountant",
    metaDescription:
      "Overseas assets and trust analysis in family proceedings: foreign accounts, offshore trusts, beneficial interest, and international tracing.",
    h1: "Overseas Assets & Trust Analysis - Family Court Accountant",
    paragraphs: [
      "High-value and international families often hold property abroad, foreign bank accounts, offshore companies, and trust structures. Full disclosure on financial affidavit is mandatory, but beneficial ownership and control can be opaque without forensic review.",
      "Investigation cross-references bank statements for international transfers, analyses company filings and registry data in foreign jurisdictions where available, and reviews trust deeds and distribution history to establish whether a spouse has a real beneficial interest that should enter the matrimonial pot.",
      "Practical challenges include obtaining documents from overseas advisers, valuation of foreign property, and coordinating with freezing order strategy where dissipation is a risk. Family court accountants provide structured tracing and valuation support so solicitors can pursue questionnaire, injunction, or expert evidence routes with a clear factual foundation.",
    ],
    faqs: [
      {
        question: "How does a family court accountant investigate overseas assets?",
        answer:
          "Forensic accountants can trace assets including investments moved overseas, property placed in trusts, and land purchased abroad, by cross-referencing bank statements for international transfers, analysing company structures in foreign jurisdictions, and reviewing financial affidavit disclosures against publicly available corporate registry information.",
      },
      {
        question: "Are offshore trusts disclosed in financial remedy?",
        answer:
          "Yes, beneficial interests in trusts must be disclosed on financial affidavit. Where a spouse claims to have no interest in a trust structure, the family court accountant analyses the trust deed, trust accounts, and history of distributions to establish whether the spouse has a real beneficial interest that should be included in the matrimonial pot.",
      },
    ],
    relatedProceedings: [
      { href: "/proceedings/financial-remedy-divorce", label: "Equitable Distribution (Divorce)" },
      { href: "/proceedings/nuptial-agreements", label: "Marital Agreements" },
    ],
    relatedServices: [
      { href: "/services/overseas-asset-trusts", label: "Overseas Asset & Trust Analysis" },
      { href: "/services/hidden-asset-investigation", label: "Hidden Asset Investigation" },
    ],
  },
  {
    slug: "cryptocurrency-digital-assets",
    hubLabel: "Cryptocurrency & Digital Assets",
    title: "Cryptocurrency and Digital Asset Valuation",
    metaTitle: "Cryptocurrency Divorce | Family Court Accountant",
    metaDescription:
      "Cryptocurrency and digital asset disclosure in divorce: financial affidavit, valuation dates, NFTs, wallet tracing, and blockchain analysis.",
    h1: "Cryptocurrency & Digital Asset Valuation - Family Court Accountant",
    paragraphs: [
      "Cryptocurrency, digital wallets, exchange accounts, and NFTs are financial assets that must be disclosed on financial affidavit like any other investment. Valuation is not straightforward: prices are volatile, holdings may sit across multiple wallets and exchanges, and the appropriate valuation date for court purposes must be agreed or determined.",
      "Where disclosure is incomplete, specialists use bank statement review to identify fiat transfers to exchanges, lifestyle analysis to flag spending inconsistent with declared resources, and blockchain tracing to link wallet activity to identifiable parties. NFT and other digital collectibles require case-by-case valuation approaches with documented methodology.",
      "Digital assets are increasingly used to conceal wealth because wallets can appear anonymous without expert tracing. Family court accountants with digital asset experience support solicitors and the court with defensible valuation ranges and concealment analysis suitable for financial remedy and freezing order applications.",
    ],
    faqs: [
      {
        question: "How is cryptocurrency disclosed and valued in divorce?",
        answer:
          "Cryptocurrency must be disclosed on financial affidavit as a financial asset. Valuation is complex because of price volatility: the expert must assess the date at which to value the holding and apply the appropriate exchange rate. Where a spouse is suspected of concealing cryptocurrency, blockchain analysis can trace wallet activity to identify holdings.",
      },
      {
        question: "Can cryptocurrency be hidden from divorce proceedings?",
        answer:
          "Cryptocurrency is increasingly identified as a method of concealing assets, because wallets can be anonymous and difficult to trace without specialist analysis. Family court accountants with digital asset expertise can identify cryptocurrency holdings through bank statement analysis (identifying exchange transactions), lifestyle analysis, and blockchain tracing tools.",
      },
    ],
    relatedProceedings: [
      { href: "/proceedings/financial-remedy-divorce", label: "Equitable Distribution (Divorce)" },
    ],
    relatedServices: [
      { href: "/services/hidden-asset-investigation", label: "Hidden Asset Investigation" },
      { href: "/services/form-e-review", label: "Financial Affidavit Review" },
    ],
  },
  {
    slug: "pension-sharing-business-interests",
    hubLabel: "Pension & Business Interests",
    title: "Pension Sharing and Business Interest Valuation",
    metaTitle: "Pension Sharing & Business Valuation Divorce",
    metaDescription:
      "Pension sharing with business interests in divorce: CEV, liquidity, pension offset, and coordination with pension actuaries.",
    h1: "Pension Sharing & Business Interest Valuation - Family Court Accountant",
    paragraphs: [
      "Many financial remedy cases involve both a substantial pension and an owner-managed business. The court must achieve fairness across asset classes that behave differently: pensions are often illiquid until retirement while businesses may offer lump sum potential but uncertain liquidity.",
      "Family court accountants value the business, assess maintainable income and liquidity for lump sum or offset, and explain how a pension sharing order might interact with a business-based settlement. Cash equivalent value (CEV) of pensions is actuarial territory; the accountant provides the business side of the overall picture so advisers can model combined outcomes.",
      "Complex defined benefit schemes frequently require a pension actuary alongside the family court accountant. The accountant coordinates on overall resource availability, whether the business can fund pension equalisation, and whether partial sharing of both assets is required rather than a simple offset.",
    ],
    faqs: [
      {
        question: "How do business interests and pensions interact in divorce?",
        answer:
          "Where one party has a business and the other has a substantial pension (or vice versa), the court must decide how to achieve fairness across both assets. Family court accountants assess whether the business can fund a lump sum to offset the pension share, or whether both assets must be partially divided. The interaction requires expert evidence on business value, liquidity, and pension cash equivalent value.",
      },
      {
        question: "When is a pension actuary needed as well as a family court accountant?",
        answer:
          "For complex defined benefit schemes (final salary pensions), a pension actuary provides specialist evidence on the true value and sharing mechanism. The family court accountant provides the business valuation and overall financial picture, while the actuary addresses the pension-specific calculations.",
      },
    ],
    relatedProceedings: [
      { href: "/proceedings/financial-remedy-divorce", label: "Equitable Distribution (Divorce)" },
    ],
    relatedServices: [
      { href: "/services/business-valuation", label: "Business Valuation (expert witness standards)" },
      { href: "/services/income-lifestyle-analysis", label: "Income & Lifestyle Analysis" },
    ],
  },
  {
    slug: "cohabitation-property-disputes",
    hubLabel: "Cohabitation Property (TOLATA)",
    title: "Cohabitation Property Dispute Accountant",
    metaTitle: "TOLATA Cohabitation Property Accountant | Financial Evidence",
    metaDescription:
      "TOLATA cohabitation property disputes: beneficial interest analysis, contribution reconstruction, CPR Part 35 expert evidence, and Schedule 1 combined claims.",
    h1: "Cohabitation Property Dispute Accountant | TOLATA Financial Evidence",
    paragraphs: [
      "Cohabiting couples who separate without marrying do not have the same automatic asset-sharing regime as divorce. TOLATA 1996 claims turn on beneficial ownership and contributions to property, requiring clear financial reconstruction rather than broad matrimonial discretion.",
      "Accountants trace deposits, mortgage payments, renovation spend, and ongoing property costs through bank statements and records to support claims of common intention or resulting trust. Beneficial interest analysis is evidence-led; length of cohabitation alone does not determine outcome, though longer relationships may yield richer documentary proof of shared financial intention.",
      "Expert evidence in TOLATA is governed by CPR Part 35, not expert witness standards, though the analytical skills overlap. Cases may combine TOLATA property claims with Schedule 1 child provision where children exist. We provide financial expert schedules and reports for solicitor-led TOLATA and related cohabitation disputes.",
    ],
    faqs: [
      {
        question: "What financial evidence is needed in a TOLATA dispute?",
        answer:
          "TOLATA disputes require financial reconstruction of each party's contributions to the property: deposit, mortgage payments, renovation costs, and ongoing property expenses. The accountant traces these through bank statements and financial records, establishing the factual basis for the beneficial interest claimed.",
      },
      {
        question: "Does cohabitation length affect the financial outcome in TOLATA?",
        answer:
          "Unlike divorce, there is no automatic sharing of assets based on length of cohabitation in TOLATA proceedings: ownership is determined by legal principles of trust and contribution. However, a longer cohabitation may produce more evidence of common intention to share ownership. Expert accountants analyse financial contribution across the full period.",
      },
    ],
    relatedProceedings: [
      { href: "/proceedings/tolata-cohabitation", label: "Cohabitation Property" },
      { href: "/proceedings/schedule-1-children-act", label: "Child Support & Provision" },
    ],
    relatedServices: [
      { href: "/services/add-backs-reconstruction", label: "Add-Backs & Financial Reconstruction" },
      { href: "/services/form-e-review", label: "Financial Affidavit Review" },
    ],
  },
  {
    slug: "high-net-worth-divorce",
    hubLabel: "High Net Worth Divorce",
    title: "High Net Worth Divorce Accountant",
    metaTitle: "High Net Worth Divorce Accountant | Complex Assets",
    metaDescription:
      "High net worth divorce accountants: multiple businesses, international assets, trusts, private equity, complex pensions, and party-appointed experts.",
    h1: "High Net Worth Divorce Accountant | Complex Assets & Business Interests",
    paragraphs: [
      "High net worth financial remedy involves multiple asset classes, several business interests, international holdings, trust structures, and sophisticated pension arrangements. Disclosure volume and valuation complexity exceed typical cases, and disputes over personal goodwill, liquidity, and offshore structures are common.",
      "Private equity, venture capital, and illiquid investments lack daily market prices and may restrict access to underlying data. Experts use available fund documentation, comparable transactions, and accepted valuation frameworks to present defensible ranges for negotiation and trial.",
      "court-appointed joint expert appointment remains the default, but the highest-value and most adversarial cases may justify party-appointed forensic accountants where positions diverge materially. Early coordination on joint letters of instruction, document preservation, and parallel pension actuary instruction reduces delay and cost at the FDR and final hearing stages.",
    ],
    faqs: [
      {
        question: "At what level do HNW cases require party-appointed experts rather than joint expert?",
        answer:
          "In most cases, the judge will only allow one expert accountant acting for both sides. However, in the highest value or most complex cases, particularly where parties' financial positions diverge significantly, each party may be permitted their own expert. The threshold is not fixed; it depends on the overall asset value, the complexity of the business interests, and the degree of dispute between the parties.",
      },
      {
        question: "How are private equity or investment holdings valued in HNW divorce?",
        answer:
          "Private equity, venture capital, and illiquid investment holdings present particular valuation challenges: no market price exists and access to underlying information may be restricted. Experts use available financial information, comparable transaction data, and specialist valuation methodologies to establish a defensible range of values for the family court.",
      },
    ],
    relatedProceedings: [
      { href: "/proceedings/financial-remedy-divorce", label: "Equitable Distribution (Divorce)" },
      { href: "/proceedings/nuptial-agreements", label: "Marital Agreements" },
    ],
    relatedServices: [
      { href: "/services/business-valuation", label: "Business Valuation (expert witness standards)" },
      { href: "/services/overseas-asset-trusts", label: "Overseas Asset & Trust Analysis" },
    ],
  },
];

export function getCaseType(slug: string): CaseType | undefined {
  return CASE_TYPES.find((c) => c.slug === slug);
}
