export type GlossaryTerm = {
  term: string;
  fragmentId: string;
  definition: string;
  internalLink?: { href: string; label: string };
};

export type GlossaryFaqItem = { question: string; answer: string };

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: "Add-Backs",
    fragmentId: "add-backs",
    definition:
      "Add-backs are personal or non-matrimonial expenditures run through a business that are treated as available capital for distribution in financial remedy proceedings. A family court accountant identifies items such as personal vehicles, holidays, entertainment, and related-party transactions expensed to the company, then quantifies the total to be added back to the matrimonial pot. Courts rely on this analysis when one spouse has used corporate funds to support a lifestyle that is not reflected in declared personal income or capital.",
    internalLink: {
      href: "/case-types/add-backs-financial-reconstruction",
      label: "Add-backs and financial reconstruction",
    },
  },
  {
    term: "Beneficial Interest",
    fragmentId: "beneficial-interest",
    definition:
      "A beneficial interest is the equitable ownership a person holds in property even when legal title stands in another name, commonly disputed between cohabiting couples under TOLATA. Family court accountants reconstruct deposits, mortgage payments, renovation costs, and other contributions from bank records to support claims about the share each party should receive. Beneficial interest analysis does not redistribute assets as in divorce financial remedy; it determines ownership based on trust law, contribution, and common intention.",
    internalLink: {
      href: "/proceedings/tolata-cohabitation",
      label: "TOLATA cohabitation proceedings",
    },
  },
  {
    term: "Business Goodwill (Personal vs Business)",
    fragmentId: "business-goodwill-personal-vs-business",
    definition:
      "Business goodwill is the transferable value of a company that would pass to a purchaser, distinct from personal goodwill attributable only to the individual owner. In matrimonial valuation, courts typically treat transferable business goodwill as part of the matrimonial pot while excluding personal goodwill that would be lost on a sale to a third party. Family court accountants separate these elements using maintainable earnings, market evidence, and industry practice so the court can distinguish realisable value from owner-dependent reputation.",
    internalLink: {
      href: "/case-types/business-valuation-divorce",
      label: "Business valuation in divorce",
    },
  },
  {
    term: "Capital Gains Tax (on divorce transfers)",
    fragmentId: "capital-gains-tax-on-divorce-transfers",
    definition:
      "Capital gains tax may arise when assets are transferred between spouses or former spouses as part of a financial settlement, subject to reliefs and timing rules in tax legislation. Family court accountants flag CGT consequences when valuing businesses, property, and investments so solicitors can structure orders with tax advice where appropriate. The court's focus is fair division of net value; expert schedules often show gross values alongside estimated tax liabilities to avoid unrealistic settlement figures.",
    internalLink: {
      href: "/proceedings/financial-remedy-divorce",
      label: "Financial remedy (divorce)",
    },
  },
  {
    term: "child support statutes Schedule 1",
    fragmentId: "children-act-1989-schedule-1",
    definition:
      "Schedule 1 of the child support statutes allows applications for financial provision for children, including lump sums, property orders, and periodical payments, typically where parents were not married. Family court accountants assess the respondent parent's true income, business value, and capital available to fund orders that reflect the child's needs and standard of living. Schedule 1 does not divide a matrimonial pot between adults; it targets provision for the child, often requiring lifestyle analysis and business valuation evidence.",
    internalLink: {
      href: "/proceedings/schedule-1-children-act",
      label: "Schedule 1 Children Act proceedings",
    },
  },
  {
    term: "Clean Break Order",
    fragmentId: "clean-break-order",
    definition:
      "A clean break order ends financial claims between former spouses so that neither can apply for further capital or income provision, subject to limited exceptions such as variation of certain pension provisions. Accountants support clean break negotiations by valuing all resources, including businesses and pensions, and testing whether proposed lump sums are funded from realisable assets. Incomplete disclosure or undervalued interests can undermine a clean break if one party later discovers assets that were not accounted for.",
    internalLink: {
      href: "/proceedings/financial-remedy-divorce",
      label: "Financial remedy (divorce)",
    },
  },
  {
    term: "Cohabitation",
    fragmentId: "cohabitation",
    definition:
      "Cohabitation is living together as a couple without marriage or civil partnership, which does not create the same automatic financial claims as divorce under the equitable distribution statutes. Separating cohabitants often rely on TOLATA for property disputes and Schedule 1 for child provision, each with different rules and expert frameworks. Family court accountants are instructed to reconstruct contributions, value businesses linked to the household, and analyse income where cohabitation disputes involve children or jointly held assets.",
    internalLink: {
      href: "/proceedings/tolata-cohabitation",
      label: "TOLATA and cohabitation",
    },
  },
  {
    term: "CPR Part 35 (TOLATA context)",
    fragmentId: "cpr-part-35-tolata-context",
    definition:
      "CPR Part 35 governs expert evidence in civil proceedings in state family courts, including TOLATA claims in the County Court or High Court, rather than expert witness standards which applies in family proceedings. Experts owe an overriding duty to the court to help on matters within their expertise, and reports must meet CPR practice direction requirements. Family court accountants working on TOLATA must be familiar with civil procedure, joint instruction under CPR, and how expert evidence interacts with trust and land law issues.",
    internalLink: {
      href: "/proceedings/tolata-cohabitation",
      label: "TOLATA cohabitation proceedings",
    },
  },
  {
    term: "Declaration of Trust",
    fragmentId: "declaration-of-trust",
    definition:
      "A declaration of trust is a document that records how beneficial ownership of property is held between parties, often relevant when legal title is in one name only. In cohabitation disputes, accountants compare declared interests with actual financial contributions to test whether the trust reflects what the parties intended and paid for. Incomplete or informal declarations may still be supplemented by conduct and contribution evidence traced through bank and mortgage records.",
    internalLink: {
      href: "/case-types/cohabitation-property-disputes",
      label: "Cohabitation property disputes",
    },
  },
  {
    term: "Divorce Petition",
    fragmentId: "divorce-petition",
    definition:
      "The divorce petition is the application that starts dissolution of a marriage or civil partnership and leads, where contested, to financial remedy proceedings for division of assets and income. Financial disclosure and expert evidence come later through financial affidavit and court directions, not in the petition itself. Family court accountants are usually instructed after conditional order stages when parties exchange financial affidavit and identify needs for valuation or investigation.",
    internalLink: {
      href: "/proceedings/financial-remedy-divorce",
      label: "Financial remedy (divorce)",
    },
  },
  {
    term: "settlement conference (FDR) Hearing",
    fragmentId: "financial-dispute-resolution-fdr-hearing",
    definition:
      "An FDR hearing is a without-prejudice court appointment where a judge gives an indication of likely outcome to encourage settlement before final hearing. Family court accountants may attend or have their reports relied on to explain business value, lifestyle gaps, or add-backs at the FDR. Clear, defensible expert analysis at this stage often narrows the issues and reduces the cost of a contested final hearing.",
    internalLink: {
      href: "/how-it-works",
      label: "How a family court accountant works",
    },
  },
  {
    term: "Financial Remedy Order",
    fragmentId: "financial-remedy-order",
    definition:
      "A financial remedy order is the court's binding decision on division of matrimonial assets, pensions, maintenance, and costs following divorce or dissolution. It reflects equitable distribution factors equitable distribution statutes factors and the evidence before the court, including expert valuations and lifestyle analysis. Accountants ensure the figures underpinning negotiations and orders reflect maintainable business value, liquidity, and any adjustments for add-backs or undisclosed resources.",
    internalLink: {
      href: "/proceedings/financial-remedy-divorce",
      label: "Financial remedy (divorce)",
    },
  },
  {
    term: "financial affidavit",
    fragmentId: "form-e",
    definition:
      "financial affidavit is the standard financial statement each party must complete in financial remedy proceedings, disclosing assets, income, pensions, liabilities, and expenditure with supporting exhibits. Family court accountants review financial affidavit against bank statements, business accounts, and tax returns to test completeness and consistency. Gaps between declared figures and evidenced lifestyle often drive questionnaire requests and further expert investigation.",
    internalLink: {
      href: "/guides/form-e-financial-disclosure-guide",
      label: "financial affidavit financial disclosure guide",
    },
  },
  {
    term: "expert witness standards",
    fragmentId: "fpr-part-25",
    definition:
      "expert witness standards is the part of the Family Procedure Rules 2010 that governs expert evidence in family proceedings, including the expert's duty to the court under FPR 25.3. Reports must comply with the Part 25 practice direction, include a statement of truth, and address the questions in the letter of instruction. Solicitors appointing family court accountants rely on Part 25 for permission, court-appointed joint expert procedure, written questions, and hearing attendance.",
    internalLink: {
      href: "/guides/fpr-part-25-expert-appointment",
      label: "expert witness standards expert appointment guide",
    },
  },
  {
    term: "Freezing Order (Family Proceedings)",
    fragmentId: "freezing-order-family-proceedings",
    definition:
      "A freezing order restrains a party from dealing with assets up to a specified value to prevent dissipation before financial remedy is determined. Family court accountants may trace recent transfers, identify accounts subject to restraint, and value assets within the order's scope. Evidence of unexplained disposals or offshore movements often supports applications for freezing relief alongside wider hidden asset investigation.",
    internalLink: {
      href: "/case-types/hidden-assets-investigation",
      label: "Hidden assets investigation",
    },
  },
  {
    term: "Hidden Assets",
    fragmentId: "hidden-assets",
    definition:
      "Hidden assets are property, income, or interests that a party has not fully disclosed in financial affidavit or proceedings, whether by omission, undervaluation, or deliberate concealment. Forensic accountants cross-reference disclosure with bank analysis, lifestyle expenditure, company records, and public registers to identify undisclosed accounts, trusts, or transfers. Courts may draw adverse inferences and adjust orders where non-disclosure is established.",
    internalLink: {
      href: "/guides/hidden-assets-divorce-guide",
      label: "Hidden assets in divorce guide",
    },
  },
  {
    term: "The Daubert Duties",
    fragmentId: "the-ikarian-reefer-duties",
    definition:
      "The Daubert duties require expert witnesses to provide independent opinion within their expertise, based on sufficient data, and with transparency about assumptions and instructions. family and civil courts apply these principles to forensic accountants under expert witness standards and CPR Part 35. Experts must state when a question falls outside their competence and avoid acting as advocate for the instructing party.",
    internalLink: {
      href: "/qualifications",
      label: "Family court accountant qualifications",
    },
  },
  {
    term: "Joint Letter of Instruction",
    fragmentId: "joint-letter-of-instruction",
    definition:
      "A joint letter of instruction is the document both parties sign when appointing a court-appointed joint expert, setting out agreed questions, documents, timetable, and fee arrangements. It defines the scope of the accountant's report and reduces disputes about what the expert was asked to do. Poorly drafted letters are a common source of permission disputes and wasted costs; solicitors often agree a draft before filing court directions.",
    internalLink: {
      href: "/how-to-instruct",
      label: "How to instruct a family court accountant",
    },
  },
  {
    term: "Lifestyle Analysis",
    fragmentId: "lifestyle-analysis",
    definition:
      "Lifestyle analysis compares evidenced expenditure during the marriage to declared income to identify gaps suggesting undisclosed resources or inadequate financial affidavit disclosure. Experts build schedules from bank and card statements, cash withdrawals, and known major purchases. Courts use lifestyle evidence to challenge self-employed or director spouses whose declared earnings do not support the standard of living the family enjoyed.",
    internalLink: {
      href: "/case-types/lifestyle-analysis-income",
      label: "Lifestyle analysis and income",
    },
  },
  {
    term: "Liquidity Analysis (Business)",
    fragmentId: "liquidity-analysis-business",
    definition:
      "Liquidity analysis assesses whether a business can fund a lump sum or ongoing payments from cash flow, borrowing capacity, and distributable reserves without destroying operations. Matrimonial valuation therefore considers not only enterprise value but whether value is accessible to the parties in settlement. Family court accountants report on working capital, debt covenants, and realistic extraction paths separate from headline valuation multiples.",
    internalLink: {
      href: "/case-types/business-valuation-divorce",
      label: "Business valuation in divorce",
    },
  },
  {
    term: "Maintainable Income",
    fragmentId: "maintainable-income",
    definition:
      "Maintainable income is the sustainable earnings level a business is expected to generate for valuation and income assessment, usually after normalising one-off items and related-party adjustments. It forms the base for capitalisation of earnings and maintenance arguments involving owner-managers. Experts analyse three to five years of accounts, director remuneration, and dividend policy to reach a defensible maintainable figure.",
    internalLink: {
      href: "/case-types/business-valuation-divorce",
      label: "Business valuation in divorce",
    },
  },
  {
    term: "equitable distribution statutes equitable distribution factors",
    fragmentId: "matrimonial-causes-act-1973-section-25",
    definition:
      "equitable distribution factors of the equitable distribution statutes sets out the factors the court must consider when making financial remedy orders, including resources, needs, standard of living, duration, contributions, and conduct. Accounting evidence informs factors such as earning capacity, value of business interests, and true financial resources. The statutory framework is the anchor for how valuations, lifestyle analysis, and add-backs are weighed in final orders.",
    internalLink: {
      href: "/glossary#section-25-factors",
      label: "equitable distribution factors factors",
    },
  },
  {
    term: "Nuptial Agreement (Pre/Post)",
    fragmentId: "nuptial-agreement-pre-post",
    definition:
      "A nuptial agreement is a contract made before or after marriage setting out how assets and income would be divided on separation, given weight by courts when entered fairly with disclosure and advice. Family court accountants prepare or review financial schedules attached to agreements and may give evidence if an agreement is later challenged in financial remedy. Accurate business and asset valuation at signing protects both parties from future disputes about whether disclosure was adequate.",
    internalLink: {
      href: "/proceedings/nuptial-agreements",
      label: "Nuptial agreements",
    },
  },
  {
    term: "Notional Income",
    fragmentId: "notional-income",
    definition:
      "Notional income is income attributed to a party that they could earn by using their earning capacity or by extracting further funds from a business, even if not currently declared. Courts may impute notional income for maintenance where a spouse deliberately suppresses earnings or retains profits artificially. Expert evidence quantifies what is reasonably available from employment, dividends, or business distributions.",
    internalLink: {
      href: "/case-types/self-employed-income-assessment",
      label: "Self-employed income assessment",
    },
  },
  {
    term: "Party-Appointed Expert (PAE)",
    fragmentId: "party-appointed-expert-pae",
    definition:
      "A party-appointed expert is instructed by one side only, producing a report for that party subject to expert witness standards or CPR Part 35 duties to the court. PAE appointments are less common than court-appointed joint experts in family finance but may be permitted in high-value or highly divergent cases. Each party's expert may give separate opinions, with the court weighing evidence at final hearing or encouraging narrow issues for joint discussion.",
    internalLink: {
      href: "/how-to-instruct",
      label: "How to instruct a family court accountant",
    },
  },
  {
    term: "Pension Sharing Order",
    fragmentId: "pension-sharing-order",
    definition:
      "A pension sharing order transfers a percentage of one party's pension rights to the other as part of a financial remedy settlement, implemented through the pension scheme administrator. Family court accountants coordinate with pension actuaries on cash equivalent values while valuing business assets that may fund offsetting lump sums. Fair outcomes often require balancing illiquid business interests against pension wealth.",
    internalLink: {
      href: "/case-types/pension-sharing-business-interests",
      label: "Pension sharing and business interests",
    },
  },
  {
    term: "Personal Goodwill",
    fragmentId: "personal-goodwill",
    definition:
      "Personal goodwill is value tied to an individual owner's skills, reputation, and relationships that would not transfer to a buyer of the business. In divorce valuation, courts commonly exclude personal goodwill from the matrimonial pot because it is not a realisable matrimonial asset. Distinguishing personal from transferable business goodwill is often the most contested issue in owner-managed company cases.",
    internalLink: {
      href: "/case-types/business-valuation-divorce",
      label: "Business valuation in divorce",
    },
  },
  {
    term: "Radmacher v Granatino [2010]",
    fragmentId: "radmacher-v-granatino-2010",
    definition:
      "Radmacher v Granatino [2010]SC 42 held that courts should give effect to a nuptial agreement that was freely entered into with full understanding of its implications unless it would be unfair to hold the parties to it. Full financial disclosure and credible valuations at the time of signing are central to fairness arguments. Family court accountants support solicitors by documenting assets and income when agreements are made or when their validity is challenged later.",
    internalLink: {
      href: "/proceedings/nuptial-agreements",
      label: "Nuptial agreements",
    },
  },
  {
    term: "equitable distribution factors Factors",
    fragmentId: "section-25-factors",
    definition:
      "equitable distribution factors factors are the statutory criteria under the equitable distribution statutes that guide fair financial remedy outcomes, including income, capital, needs, children, standard of living, and conduct where relevant. Expert reports translate financial data into evidence that assists the court on resources and needs. Accountants do not decide outcomes but provide clear figures and assumptions for judges and negotiators.",
    internalLink: {
      href: "/proceedings/financial-remedy-divorce",
      label: "Financial remedy (divorce)",
    },
  },
  {
    term: "court-appointed joint expert (joint expert)",
    fragmentId: "single-joint-expert-sje",
    definition:
      "A court-appointed joint expert is one forensic accountant instructed jointly by both parties, usually with court approval, to produce a single report for the family court. The joint expert owes duties to the court and must remain independent, with costs typically shared equally. joint expert appointment is the default approach in most financial remedy cases below the highest value, reducing duelling experts and overall expense.",
    internalLink: {
      href: "/how-to-instruct",
      label: "How to instruct a family court accountant",
    },
  },
  {
    term: "TOLATA 1996",
    fragmentId: "tolata-1996",
    definition:
      "The Trusts of Land and Appointment of Trustees Act 1996 (TOLATA) governs disputes about ownership and sale of land held on trust, commonly between former cohabitants. Courts determine beneficial shares rather than applying matrimonial sharing principles. Family court accountants provide contribution schedules and valuations that underpin trust claims and orders for sale or transfer.",
    internalLink: {
      href: "/proceedings/tolata-cohabitation",
      label: "TOLATA cohabitation proceedings",
    },
  },
  {
    term: "Transferable Goodwill",
    fragmentId: "transferable-goodwill",
    definition:
      "Transferable goodwill is the element of business value that would pass to a purchaser with the enterprise, including brand, systems, and non-owner-dependent customer relationships. It is typically included in matrimonial business valuations unlike personal goodwill. Experts support transferable goodwill with market multiples, maintainable earnings, and evidence of what a buyer would pay in an arm's length transaction.",
    internalLink: {
      href: "/case-types/business-valuation-divorce",
      label: "Business valuation in divorce",
    },
  },
  {
    term: "Trustees of Land",
    fragmentId: "trustees-of-land",
    definition:
      "Trustees of land hold legal title to property on trust for beneficiaries, with powers and duties set out in trust law and TOLATA. In cohabitation breakdown, disputes arise over who benefits and whether the property should be sold. Accountants trace who funded purchase and ongoing costs to inform beneficial interest claims against the trustees' legal ownership.",
    internalLink: {
      href: "/proceedings/tolata-cohabitation",
      label: "TOLATA cohabitation proceedings",
    },
  },
  {
    term: "Written Questions (expert witness standards)",
    fragmentId: "written-questions-fpr-part-25",
    definition:
      "Written questions are formal questions put to an expert after the report is served, allowing parties to clarify methodology, assumptions, or arithmetic under expert witness standards procedure. Answers become part of the evidence bundle before FDR or final hearing. Effective questions focus on discrete technical points rather than re-arguing the case through the expert.",
    internalLink: {
      href: "/guides/fpr-part-25-expert-appointment",
      label: "expert witness standards expert appointment guide",
    },
  },
];

/** FAQPage `mainEntity` items for JSON-LD (question / answer pairs). */
export function buildGlossaryFaqPageItems(): GlossaryFaqItem[] {
  return GLOSSARY_TERMS.map((t) => ({
    question: `What is ${t.term}?`,
    answer: t.definition,
  }));
}

export function getGlossaryTerm(fragmentId: string): GlossaryTerm | undefined {
  return GLOSSARY_TERMS.find((t) => t.fragmentId === fragmentId);
}
