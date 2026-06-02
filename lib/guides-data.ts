import { guideSlugs } from "@/lib/site";

export type Guide = {
  slug: (typeof guideSlugs)[number];
  hubLabel: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  sections: { heading: string; paragraphs: string[] }[];
  aboutServiceId?: string;
};

export const GUIDES: Guide[] = [
  {
    slug: "business-valuation-divorce-guide",
    hubLabel: "Business valuation",
    title: "Business Valuation in Divorce: A Complete Guide",
    metaTitle:
      "Business Valuation in Divorce UK | Guide for Solicitors and Individuals",
    metaDescription:
      "How UK family courts value businesses in divorce: personal vs business goodwill, maintainable earnings, liquidity, SJE appointment, and FPR Part 25 expert evidence.",
    h1: "Business Valuation in Divorce: A Complete Guide for UK Solicitors and Individuals",
    aboutServiceId: "#business-valuation",
    sections: [
      {
        heading: "Why business valuation matters in financial remedy",
        paragraphs: [
          "When one or both spouses own a company, partnership interest, or substantial shareholding, the value of that interest is often the largest item in the matrimonial pot. Financial remedy proceedings require full disclosure on Form E, but the figure a spouse places on their business is frequently disputed. A family court accountant provides independent analysis so the court can rely on maintainable earnings, appropriate valuation methods, and matrimonial adjustments rather than management estimates alone.",
          "For solicitors, early identification of valuation need supports FPR Part 25 applications and agreement of a Single Joint Expert before costs escalate. For individuals, understanding that matrimonial valuation differs from a commercial sale price helps set realistic expectations: the court is concerned with fair value in the context of division, liquidity to fund a settlement, and what is truly available rather than a headline multiple from the company's own adviser.",
        ],
      },
      {
        heading: "Matrimonial valuation vs commercial valuation",
        paragraphs: [
          "Commercial transactions seek market value between willing buyer and seller, often maximising price for the vendor. Matrimonial valuation uses the same core techniques, typically capitalisation of maintainable earnings, discounted cash flow, or net asset value for asset-heavy entities, but applies family law principles on top. Personal goodwill attributable to the owner is usually excluded because it would not transfer on sale and is not a realisable matrimonial asset. Liquidity is analysed separately: a high paper value is of limited use if the business cannot fund a lump sum without damaging operations.",
          "Experts also normalise remuneration and related-party transactions before applying multiples. A director who suppresses salary to depress maintainable profit, or who runs personal costs through the company, may see those figures adjusted in the expert's schedule. The matrimonial context therefore requires forensic review of accounts, not only acceptance of filed statutory accounts without question.",
        ],
      },
      {
        heading: "Personal goodwill and transferable business goodwill",
        paragraphs: [
          "Personal goodwill reflects the individual's reputation, skills, and client relationships that would be lost if the business were sold to a third party. Business goodwill is transferable with the enterprise: brand, systems, staff, and recurring revenue not solely dependent on one person. Courts frequently exclude personal goodwill from the pot in owner-managed professional practices, agencies, and trades where the spouse is the key rainmaker.",
          "The distinction is often the most contested issue in SME divorces. Family court accountants support their opinion with market evidence, employment contracts, client concentration, and what a hypothetical purchaser would pay. Transferable goodwill may be included; personal goodwill may be quantified only to explain why headline company value overstates realisable matrimonial property. See our case type on business valuation in divorce for worked examples and FAQs.",
        ],
      },
      {
        heading: "Maintainable earnings and valuation methods",
        paragraphs: [
          "Maintainable earnings are the sustainable profit stream the valuer expects the business to generate, usually after adjusting for one-off costs, excessive director pay, and non-arm's length transactions. Experts typically review three to five years of accounts, management information, and industry benchmarks. Capitalisation applies a multiple consistent with risk, size, and sector. DCF may be used where growth or contract profiles warrant it. NAV is appropriate for property-holding companies or investment vehicles.",
          "The chosen method must be explained in plain language in the FPR Part 25 report, with sensitivities where assumptions matter. Judges are not required to accept the expert's figure but need a clear bridge from accounts to opinion. Where both parties have party-appointed experts in high-value cases, the court may focus on differences in maintainable earnings and multiple selection rather than basic methodology disputes.",
        ],
      },
      {
        heading: "Liquidity and funding a settlement",
        paragraphs: [
          "Liquidity analysis asks whether the business can pay a lump sum, whether dividends can be declared, and whether borrowing is realistic without breaching covenants. A valuation of £2 million is academic if working capital is stretched and the owner cannot extract cash without harming staff or contracts. Experts comment on distributable reserves, director loan accounts, and pension extraction routes where relevant.",
          "Liquidity interacts with pension sharing and property orders. Solicitors use accountant evidence to structure deals: offsetting pension against business, phased payments, or share transfers. Individuals should understand that the court may order a settlement that relies on future extraction, which the expert must show is commercially feasible.",
        ],
      },
      {
        heading: "Single Joint Expert appointment and court use of valuations",
        paragraphs: [
          "In most financial remedy cases below the highest value, the court directs a Single Joint Expert accountant jointly instructed by both parties. A joint letter of instruction sets questions: value as at a date, personal goodwill treatment, maintainable earnings, and liquidity. Written questions after the report clarify assumptions before FDR or final hearing.",
          "The court uses valuation evidence alongside Section 25 factors: needs, resources, and fairness. Valuation is rarely the only issue, but it anchors negotiation. Incomplete disclosure may trigger lifestyle analysis or hidden asset work in parallel. Instructing a qualified family court accountant early reduces the risk of agreed orders based on undervalued interests or unrealistic payment terms.",
        ],
      },
      {
        heading: "Working with your solicitor and expert costs",
        paragraphs: [
          "Solicitors remain responsible for case strategy, court applications, and settlement structure. The accountant's role is technical: value, liquidity, and adjustments. Fee ranges for matrimonial business valuations typically run from £2,000 for straightforward owner-managed companies to £15,000 or more for multiple entities or urgent timetables, often shared in SJE appointments.",
          "Individuals should discuss funding with their solicitor: Legal Aid, private costs, or contribution from the other party via court order may apply. Transparent scoping in the joint letter avoids scope creep and repeated supplemental reports. Our fees page sets out indicative ranges; early contact helps match the right expert to the size and complexity of the business interests involved.",
        ],
      },
    ],
  },
  {
    slug: "hidden-assets-divorce-guide",
    hubLabel: "Hidden assets",
    title: "Hidden Assets in Divorce: How Accountants Find Them",
    metaTitle:
      "Hidden Assets in Divorce UK | How Family Court Accountants Investigate",
    metaDescription:
      "Common ways spouses conceal assets in UK divorce, forensic investigation methods, Form E cross-checks, lifestyle analysis, and what courts can do about non-disclosure.",
    h1: "Hidden Assets in Divorce: How Family Court Accountants Find Them",
    aboutServiceId: "#hidden-asset-investigation",
    sections: [
      {
        heading: "What counts as hidden assets in family proceedings",
        paragraphs: [
          "Hidden assets include bank accounts, investments, property interests, business values, cryptocurrency, and income streams that are not fully disclosed on Form E or are deliberately undervalued. Non-disclosure may be omission, false statements, or structuring through trusts, family members, or offshore entities. The duty of full and frank disclosure is ongoing; assets disposed of before or during proceedings may still be traced and brought back into consideration.",
          "Individuals often suspect concealment when lifestyle during the marriage does not match declared income, when a business suddenly shows lower profits, or when they learn of accounts or property they were never told about. Solicitors instruct forensic accountants to test disclosure objectively and to prepare evidence that supports questionnaire requests, freezing orders, or adverse inference arguments.",
        ],
      },
      {
        heading: "Common concealment methods",
        paragraphs: [
          "Typical patterns include understating business profits through inflated costs or suppressed drawings; transferring cash or property to parents, siblings, or new partners; using company accounts for personal spending without declaring benefits; delaying bonuses or contracts until after settlement; and failing to disclose offshore accounts, trust interests, or digital assets.",
          "Cryptocurrency and prepaid structures add complexity because holdings may not appear on conventional bank statements without specialist tracing. Overseas property and nominee arrangements require cross-border document requests and analysis of transfer trails. Family court accountants maintain a methodical checklist so investigations stay focused on provable discrepancies rather than speculation.",
        ],
      },
      {
        heading: "Form E cross-referencing and documentary review",
        paragraphs: [
          "Form E is the starting point: every section is compared to exhibits and third-party data. Bank statements reveal unexplained transfers, round-sum payments to connected parties, and accounts not listed in Section 2. Business accounts are tested against tax returns, payroll, and dividends declared on Form E. Property schedules are checked against Land Registry and mortgage statements.",
          "Questionnaires drafted with accountant input target specific gaps: source of funds for large purchases, identity of recipients of transfers, and beneficial interests in entities the spouse claims not to control. The expert does not replace the solicitor's conduct case but supplies schedules that make incomplete disclosure visible to the court.",
        ],
      },
      {
        heading: "Lifestyle analysis and the income gap",
        paragraphs: [
          "Lifestyle analysis builds an expenditure profile from bank and card statements, cash withdrawals, and known major outgoings during the marriage. That total is compared to declared income, pensions, and stated benefits. A persistent shortfall suggests undeclared income, use of capital, or third-party funding.",
          "Courts may draw adverse inferences where disclosure is inadequate and the gap is unexplained. Lifestyle work is often combined with business analysis where the spouse is a director who controls remuneration. Notional income arguments can follow if the expert shows higher extraction was reasonably available.",
        ],
      },
      {
        heading: "Tracing assets and overseas structures",
        paragraphs: [
          "Tracing follows the money: international wires, property purchases abroad, trust distributions, and loans to connected companies. Trust deeds and accounts may be reviewed to see whether the spouse is a beneficiary in practice despite formal disclaimers. Freezing orders may protect assets while investigation continues.",
          "Overseas work has practical limits: local law, enforcement, and cost. Experts prioritise lines of enquiry with documentary proof in the UK bundle and identify what further disclosure orders are needed. Cooperation with forensic IT specialists may be required for email and ledger data in larger cases.",
        ],
      },
      {
        heading: "Court powers and outcomes",
        paragraphs: [
          "Where non-disclosure is proved, the court can adjust orders, cost penalties, and in serious cases commit for contempt. Reopening cases on fresh evidence remains possible in exceptional circumstances. Early forensic input strengthens settlement pressure because weaknesses in disclosure are quantified before FDR.",
          "For individuals, the message is that suspicion alone is not enough: documentary investigation is required. For solicitors, pairing hidden asset work with clear questionnaire strategy and realistic expert scope avoids unfocused fishing exercises that courts criticise. Instruct through our hidden asset investigation service when Form E raises red flags.",
        ],
      },
      {
        heading: "Digital assets, trusts, and pension omissions",
        paragraphs: [
          "Cryptocurrency and digital wallets may not appear on Form E unless the spouse discloses exchange accounts and wallet addresses. Bank credits to crypto platforms and large unexplained withdrawals are starting points for specialist tracing. NFTs and online business interests follow similar review paths.",
          "Trust interests require analysis of deeds, letters of wishes, and distribution history. A spouse who claims no benefit may still receive de facto support from trust assets. Pension omissions on Form E are checked against provider statements and CE values. Each line of enquiry is documented so the court can see a structured investigation rather than assertion.",
          "Where preliminary review finds multiple red flags, solicitors may seek a court direction for specific disclosure of devices, exchange records, or trust accounts before commissioning a full report. Proportionality remains important: the cost of investigation should be weighed against the value of assets likely to be recovered.",
        ],
      },
      {
        heading: "Costs, timing, and proportionality",
        paragraphs: [
          "Hidden asset investigations range from focused Form E reviews to full forensic reports with multiple entities and overseas elements. Solicitors should match scope to asset size and realistic recovery: courts expect proportionate expert spend. A preliminary review often determines whether full investigation is justified before FDR.",
          "Timelines depend on disclosure quality and third-party responses. Individuals should provide their solicitor with any historical documents promptly to avoid delay. Shared SJE costs for investigation are possible where both parties agree the need, though contentious cases may require court-directed scope.",
        ],
      },
    ],
  },
  {
    slug: "form-e-financial-disclosure-guide",
    hubLabel: "Form E disclosure",
    title: "Form E Financial Disclosure: A Guide for Individuals",
    metaTitle:
      "Form E Financial Disclosure UK | Guide for Individuals Going Through Divorce",
    metaDescription:
      "What Form E requires in UK financial remedy, how family court accountants review disclosure, key sections to scrutinise, and how questionnaires challenge incomplete figures.",
    h1: "Form E Financial Disclosure: A Guide for Individuals Going Through Divorce",
    aboutServiceId: "#form-e-review",
    sections: [
      {
        heading: "What Form E is and when you must complete it",
        paragraphs: [
          "Form E is the court's financial statement in divorce and dissolution financial remedy proceedings. Each party must disclose assets, income, pensions, liabilities, and monthly outgoings in a structured document with supporting exhibits. The form is lengthy and technical; mistakes or omissions can delay proceedings and damage credibility before a judge.",
          "If you are an individual going through divorce, you will usually complete Form E with your solicitor after the conditional order stage, alongside your spouse's Form E. The exchange is mutual: you see their disclosure and they see yours. A family court accountant can review your spouse's Form E and documents to check whether figures are complete and consistent, not to replace your solicitor's advice on law or strategy.",
          "The court expects continuing disclosure: material changes after Form E exchange may need to be reported. Your solicitor will explain timing. Understanding Form E early helps you gather exhibits and reduces last-minute stress when deadlines are tight.",
        ],
      },
      {
        heading: "Key sections individuals should understand",
        paragraphs: [
          "Section 2 lists capital assets: property, bank accounts, investments, business interests, and other valuables. Section 3 covers pensions. Section 4 sets out income from all sources. Section 5 records debts and liabilities. Section 6 is the monthly budget of outgoings. Each section must align with exhibits such as bank statements, mortgage balances, business accounts, and tax returns.",
          "Business owners often complete a separate schedule for company interests. Trust interests, overseas property, and life policies have dedicated parts. If your spouse owns a company, the business schedule and attached accounts are where undervaluation or missing liabilities often appear. Your solicitor will ask you what you know about family finances; the accountant tests what the documents actually show.",
        ],
      },
      {
        heading: "How a family court accountant reviews Form E",
        paragraphs: [
          "The accountant reads Form E as a financial model, not a narrative. Figures are tied to bank statements, filed accounts, and Land Registry. Internal inconsistencies matter: declared low income with high expenditure in Section 6, property values that do not match market evidence, or loans that lack supporting documentation.",
          "The output is usually a schedule of discrepancies, suggested questionnaire questions, and areas needing valuation or lifestyle analysis. For individuals, this translates into plain English: what to challenge and why. For solicitors, it accelerates the questionnaire and expert appointment stages.",
        ],
      },
      {
        heading: "Questionnaires and further disclosure",
        paragraphs: [
          "After Form E exchange, parties may send a questionnaire demanding further information and documents. Accountant-prepared questions are precise: identify account X, explain transfer Y, provide management accounts for period Z. Good questions save court time and reduce evasive answers.",
          "If responses remain inadequate, you may need a court direction for specific disclosure or forensic expert evidence. Form E review is often the first step before hidden asset investigation or business valuation is funded.",
        ],
      },
      {
        heading: "Business accounts and self-employed income",
        paragraphs: [
          "Self-employed spouses control how salary, dividends, and benefits are reported. Form E should match tax returns and company filings, but timing differences and add-backs through the business are common disputes. Accountants compare director remuneration with industry norms and with the lifestyle the family led.",
          "If you relied on joint spending during marriage that far exceeded what Form E now shows as income, that gap is a red flag worth professional review. Notional income and add-back arguments may follow in the expert report.",
        ],
      },
      {
        heading: "Practical steps if you distrust the disclosure",
        paragraphs: [
          "Gather what you already have: old bank statements, photos of major purchases, knowledge of properties and accounts, and names of advisers your spouse used. Share this with your solicitor and the accountant. Do not attempt covert access to private data; unlawful evidence creates risk and may be excluded.",
          "You need a solicitor to run proceedings; the accountant works as expert or adviser behind the scenes. Costs for Form E review are typically lower than full forensic investigation and help decide whether deeper work is justified. Contact us if you want help understanding your spouse's Form E before negotiation or court.",
        ],
      },
      {
        heading: "Pensions, debts, and future needs on Form E",
        paragraphs: [
          "Pension CE values on Form E should be supported by recent provider illustrations. Mismatches between Form E and provider documents are common and affect offsetting negotiations. Debts must be evidenced: personal loans, credit cards, and director loans need statements, not estimates alone.",
          "Future needs sections describe housing and income requirements after separation. While primarily legal arguments, accountants check that stated needs align with historical spending and that the other party's resources could meet realistic orders. Inconsistent budgets weaken credibility on both sides.",
        ],
      },
      {
        heading: "After exchange: negotiation and court",
        paragraphs: [
          "Many cases settle after Form E and questionnaire rounds when weaknesses in disclosure are clear. Mediation and private FDR rely on the same figures as court. Individuals should avoid informal agreements before understanding the disclosed position; undervalued business interests or missed pensions are difficult to revisit later.",
          "If proceedings continue, expert reports may follow Form E review. Keeping your own Form E accurate reduces adverse findings against you and speeds the process. Your solicitor coordinates timing so accountant work aligns with court directions and without-prejudice discussions.",
          "First Appointment and Directions hearings may fix timetables for valuation and replies to questionnaire. Missing deadlines can mean proceeding with incomplete information, so individuals should respond promptly when their solicitor requests documents to support challenges to the other party's Form E.",
        ],
      },
    ],
  },
  {
    slug: "schedule-1-children-act-financial-guide",
    hubLabel: "Schedule 1",
    title: "Schedule 1 Children Act: Financial Evidence Guide",
    metaTitle:
      "Schedule 1 Children Act Financial Evidence UK | Family Court Accountant Guide",
    metaDescription:
      "Schedule 1 Children Act 1989 financial provision: income assessment, capital orders, business valuation, lifestyle evidence, and expert reports for unmarried parents.",
    h1: "Schedule 1 Children Act: Financial Evidence Guide",
    aboutServiceId: "#schedule-1-evidence",
    sections: [
      {
        heading: "What Schedule 1 covers",
        paragraphs: [
          "Schedule 1 of the Children Act 1989 allows a parent to apply for financial provision for a child, including lump sums, transfer or settlement of property, and periodical payments. It is the principal route for unmarried parents who are not in a civil partnership and who need capital or income orders for the benefit of a child, not for themselves.",
          "The respondent is usually the higher earner or wealthier parent. Applications can arise where parents never cohabited or where cohabitation ended without matrimonial financial remedy. The child's needs and the standard of living they should enjoy are central, which often requires detailed income and capital analysis.",
          "Orders can fund housing, education, vehicles, and other capital needs where the payer has resources. The court weighs the child's welfare and the payer's ability to pay. Financial evidence must be current: historic wealth alone is insufficient if income has fallen unless capital remains deployable.",
        ],
      },
      {
        heading: "How Schedule 1 differs from divorce financial remedy",
        paragraphs: [
          "Financial remedy on divorce divides the matrimonial pot between spouses under the Matrimonial Causes Act 1973. Schedule 1 focuses on provision for the child: property may revert to the payer when the child grows up, and adult needs of the applicant are secondary. Costs rules and procedure differ from pure matrimonial cases.",
          "Accountants must not apply divorce-centric concepts blindly. Business valuation may support a capital lump sum for housing, but the structure of orders and revertibility of property need legal input. Combined TOLATA and Schedule 1 cases require experts comfortable with both family and civil frameworks.",
        ],
      },
      {
        heading: "Income assessment and business owners",
        paragraphs: [
          "Respondents who are directors or self-employed may declare modest income while controlling company funds. Experts assess total economic benefit: salary, dividends, benefits in kind, pension contributions, and profits that could reasonably be distributed. Notional income may be argued where earnings are artificially low.",
          "For periodical payments, maintainable income drives capacity. For lump sums, retained profits and balance sheet strength matter alongside personal resources. Tax planning structures are unpacked to show what is practically available for child support.",
        ],
      },
      {
        heading: "Capital provision and property orders",
        paragraphs: [
          "Courts may order lump sums for expenses such as housing adaptation, vehicles, or educational costs, or property settlement where the child should live in a home funded by the payer. Valuation of the payer's business may be needed to show capacity to fund a transfer or purchase, even if shares are not divided as in divorce.",
          "Property orders often include reversion to the payer when the child completes education. Accountants support feasibility analysis: can the business fund the deposit or mortgage payments without insolvency? Liquidity schedules mirror matrimonial work but tied to child-focused outcomes.",
          "Trusts or family loans sometimes fund property acquisitions: experts trace source of funds to avoid double-counting resources. Where the payer controls a group structure, consolidated accounts may be necessary to see available cash at the right entity level.",
        ],
      },
      {
        heading: "Lifestyle and standard of living evidence",
        paragraphs: [
          "The child's standard of living may reference the lifestyle during the relationship and the payer's current spending. Lifestyle analysis compares bank expenditure to declared income, relevant where the payer claims inability to pay while maintaining a high personal spend.",
          "Evidence is child-focused: school fees, holidays, housing quality, and activities the child experienced. Experts present neutral figures so the court can align orders with realistic funding without speculative demands.",
        ],
      },
      {
        heading: "Expert evidence and instruction",
        paragraphs: [
          "FPR Part 25 applies in Schedule 1 proceedings in the Family Court. Single Joint Experts are common for income and business issues. Letters of instruction should specify the child's circumstances, the orders sought, and the period for analysis.",
          "Solicitors should bundle Form E equivalent disclosure, tax returns, company accounts, and bank statements. Early accountant involvement clarifies whether Schedule 1 is viable compared with other routes such as CMS assessments alone. See our Schedule 1 proceedings page for FAQs and related services.",
        ],
      },
      {
        heading: "Interaction with Child Maintenance Service",
        paragraphs: [
          "CMS assessments cover basic child maintenance for eligible cases, but Schedule 1 addresses capital and top-up needs CMS does not cover. Accountants clarify total resources so solicitors can argue when Schedule 1 adds value beyond CMS. Business income structures may depress CMS inputs while substantial capital remains in the company.",
          "Expert evidence should be consistent across forums where both apply, avoiding contradictions between CMS figures and Schedule 1 presentations. Coordination between family lawyer and accountant prevents wasted costs on parallel inconsistent narratives.",
        ],
      },
      {
        heading: "Strategic instruction tips for solicitors",
        paragraphs: [
          "Define the child's age, housing need, and education plans in the letter of instruction. Specify whether opinions on business valuation are required for lump sum only or also for income capacity. Agree document production dates with the other side before expert deadlines slip.",
          "Schedule 1 respondents sometimes mirror divorce disclosure tactics: delayed accounts or understated income. Apply the same forensic discipline as financial remedy with child-focused framing. Our Schedule 1 financial evidence service outlines methodology and related case types for cross-linking in your advice to clients.",
          "Where the applicant parent has limited resources, funding expert fees may require advance costs orders or staged instructions. A focused report on income capacity alone may suffice before capital issues are pursued, keeping costs proportionate for moderate-value cases.",
        ],
      },
    ],
  },
  {
    slug: "tolata-cohabitation-financial-guide",
    hubLabel: "TOLATA",
    title: "TOLATA and Cohabitation Financial Disputes",
    metaTitle:
      "TOLATA Cohabitation Financial Guide UK | Solicitor's Guide to Trust of Land Evidence",
    metaDescription:
      "TOLATA 1996 cohabitation disputes: beneficial interest, contribution analysis, CPR Part 35 experts, 2024-2026 reforms, and financial reconstruction for separating couples.",
    h1: "TOLATA and Cohabitation Financial Disputes: A Solicitor's Guide",
    sections: [
      {
        heading: "TOLATA framework and what courts decide",
        paragraphs: [
          "The Trusts of Land and Appointment of Trustees Act 1996 governs how land held on trust is managed and sold, and who receives the proceeds when cohabitants dispute ownership. Unlike financial remedy, the court does not redistribute family wealth by fairness alone; it determines beneficial interests based on express trust, resulting trust, constructive trust, and common intention.",
          "Family court accountants do not decide legal entitlements but provide the financial evidence that underpins them: who paid the deposit, mortgage, renovations, and running costs, and when. Without accurate schedules, trust claims rest on incomplete recollection of payments over many years.",
          "Orders under TOLATA may require sale of the property, transfer of shares, or declaration of beneficial interests. Costs can be substantial; October 2024 procedural reforms increase pressure to mediate before trial. Financial clarity from accountants supports earlier settlement and reduces trial length.",
        ],
      },
      {
        heading: "Financial contribution reconstruction",
        paragraphs: [
          "Reconstruction traces payments from bank statements, building society books, and documentary proof of gifts or loans from family. Cash contributions without records are harder to prove; experts flag what is supported versus what requires witness evidence.",
          "Unequal contributions are common: one party funds deposit while the other pays mortgage and bills. Improvement costs, extensions, and stamp duty are included where evidenced. The output is a chronological ledger the legal team maps to claimed shares.",
          "Inter-account transfers between parties should be tracked to avoid double counting. Where parents gifted deposits, clarify whether gifts were to one party or both, as that affects resulting trust arguments. Excel schedules exported from bank CSVs improve audit trail for trial bundles.",
        ],
      },
      {
        heading: "Beneficial interest and declaration of trust",
        paragraphs: [
          "Written declarations of trust may specify shares, but disputes arise when conduct or later payments contradict the document, or when no declaration exists. Accountants stay neutral on legal labels; they supply figures for each party's capital input and ongoing spend.",
          "Linked business assets sometimes matter if company funds were used for property or if the family home is held within a corporate structure. Cross-entity tracing may be required in complex cohabitation breakdowns.",
        ],
      },
      {
        heading: "CPR Part 35 rather than FPR Part 25",
        paragraphs: [
          "TOLATA claims in civil courts follow CPR Part 35 for expert evidence, not FPR Part 25. Duties to the court remain paramount, but procedure, report format, and joint instruction rules follow civil practice. Experts who only work in family courts must adapt to CPR directions and possibly different timetables.",
          "Where Schedule 1 children claims run alongside TOLATA, accountants may need reports compliant with each framework or a clearly scoped single report accepted by both tracks. Solicitors should state the governing rules in the letter of instruction.",
        ],
      },
      {
        heading: "2024-2026 developments and mediation pressure",
        paragraphs: [
          "Recent case law, including Savage v Savage and Nilsson v Cynberg, and procedural changes from October 2024, emphasise early resolution and cost consequences for unreasonable litigation conduct. Government consultation on cohabitation reform in 2025 keeps TOLATA in focus for practitioners advising separating couples.",
          "Financial experts help at mediation by presenting agreed figures on contributions and property value, narrowing trial issues. Clear accountant summaries support without-prejudice negotiations before Part 7 trials.",
          "Solicitors should brief clients that refusal to mediate without good reason may affect costs after October 2024 reforms. Accountant-led settlement figures reduce emotional disputes about historical payments by replacing memory with bank-evidenced totals.",
        ],
      },
      {
        heading: "When to instruct and how we help",
        paragraphs: [
          "Instruct when beneficial shares are disputed, when one party claims sole ownership despite long cohabitation and payments, or when property improvement costs materially change equity arguments. Combine with valuation of the land if price is contested.",
          "Our cohabitation property dispute case type and TOLATA proceedings page link to related content. Early instruction avoids later expert reports that cannot be reconciled with pleaded cases.",
          "Provide property purchase files, mortgage annual statements, and renovation invoices when available. Even partial records speed reconstruction compared with starting from verbal accounts alone.",
        ],
      },
      {
        heading: "Valuation of the property and sale issues",
        paragraphs: [
          "Where sale or partition is sought under TOLATA, market valuation may be agreed or determined by surveyor evidence. Accountants focus on contribution ledgers rather than replacing surveyors, but may reconcile how mortgage debt and improvement spend affect net proceeds each party should receive.",
          "Costs of sale, early repayment charges, and tax on disposal may be modelled so net figures are clear. Joint ownership disputes sometimes involve rental income after separation; bank records show who received rent and paid expenses, affecting accounting schedules.",
        ],
      },
      {
        heading: "Combined claims and client management",
        paragraphs: [
          "Cohabiting clients may have children (Schedule 1), property (TOLATA), and business interests simultaneously. Experts should scope separate reports or clearly headed sections to avoid admissibility challenges. Solicitors explain to clients that TOLATA does not provide spousal maintenance: expectations must be managed while financial evidence is prepared.",
          "Document retention from cohabitation years is critical. Clients should not discard old statements assuming only recent years matter. Long cohabitations need long bank runs. Early accountant involvement while memories are fresh improves interview quality for gaps banks cannot fill.",
          "Comparison tables between financial remedy, Schedule 1, and TOLATA help clients understand why cohabitation outcomes differ from divorce. Accountants supply figures; solicitors advise on claim selection. Wrong proceedings choice wastes costs and delays housing outcomes for children.",
        ],
      },
    ],
  },
  {
    slug: "fpr-part-25-expert-appointment",
    hubLabel: "FPR Part 25",
    title: "FPR Part 25 and Expert Appointment in Family Proceedings",
    metaTitle:
      "FPR Part 25 Expert Appointment UK | Solicitor's Guide to Family Court Accountants",
    metaDescription:
      "FPR Part 25 forensic accountant appointment: court permission, SJE vs party-appointed, joint letters, written questions, Ikarian Reefer duties, and hearing attendance.",
    h1: "FPR Part 25 and Expert Appointment in Family Proceedings: A Solicitor's Guide",
    sections: [
      {
        heading: "Role of FPR Part 25 in family finance cases",
        paragraphs: [
          "Part 25 of the Family Procedure Rules 2010 regulates expert evidence in family proceedings. FPR 25.3 states that the expert's duty is to help the court on matters within their expertise, overriding any obligation to the instructing party. Reports must comply with Practice Direction 25B, include a statement of truth, and address only what the expert is qualified to opine on.",
          "Family court accountants act under this framework in financial remedy, Schedule 1, and other family cases where business valuation, lifestyle analysis, or hidden asset issues arise. Solicitors must plan permission, appointment type, and timetable with the court's case management directions in mind.",
          "The court may limit expert evidence to control costs. Applications should explain why accountant evidence is necessary and why a particular expert is suitable. Generic applications are more likely to be refused or deferred until disclosure is complete.",
        ],
      },
      {
        heading: "When court permission is required",
        paragraphs: [
          "Permission is needed before instructing an expert in many family cases, particularly where a Single Joint Expert is proposed. Parties should agree the need for an expert, identity, and shared costs where possible before applying. The application sets out why expert evidence is necessary, why the named expert is suitable, and the questions to be answered.",
          "Failure to obtain permission risks reports being excluded and costs wasted. Early dialogue at the first directions appointment reduces disputes. Where urgency exists, such as impending FDR, timetable applications should be realistic about document production and report delivery.",
        ],
      },
      {
        heading: "Single Joint Expert vs party-appointed expert",
        paragraphs: [
          "The default in most financial remedy cases is a Single Joint Expert: one accountant, one report, costs usually shared equally. The court favours this approach to control expense and conflicting opinions. Party-appointed experts may be permitted in high-value or highly polarised cases where separate instructions are justified.",
          "SJE instruction requires a joint letter signed by both parties' solicitors. Party-appointed experts receive separate letters but still owe the court the same duties. Experts must decline instructions that compromise independence or fall outside forensic accounting competence.",
          "Where party-appointed experts disagree materially, the court may direct a discussion or order hot-tubbing at trial. Solicitors should compare expert CVs, prior family court experience, and fee estimates before naming an expert in an application to avoid later challenges to appointment.",
        ],
      },
      {
        heading: "Joint letter of instruction and documents",
        paragraphs: [
          "The joint letter defines proceedings, parties, questions, assumptions, documents provided, fee cap, and timetable. Vague questions produce vague reports and fertile ground for written questions later. Standard bundles include Form E and exhibits, company accounts, tax returns, bank statements, and property valuations.",
          "Conflicts checks and engagement terms should be completed before work starts. Experts confirm whether they can meet the court date and flag if disclosure is insufficient to answer instructions without further material.",
          "Attach court orders granting permission and any directions on timetable. Reference the case number and parties consistently with Form E to avoid administrative confusion when multiple family matters run in parallel.",
        ],
      },
      {
        heading: "Written questions, meetings, and oral evidence",
        paragraphs: [
          "After the report is served, parties may put written questions under FPR Part 25 for clarification of methodology, data, or arithmetic. Answers form part of the evidence. Experts may be required at FDR without prejudice discussions indirectly through their figures, and at final hearing for oral evidence and hot-tubbing where ordered.",
          "Preparation includes a statement of oral evidence, familiarity with both parties' positions, and adherence to Ikarian Reefer duties: independent, transparent, and within expertise. Cross-examination targets assumptions; robust reports anticipate reasonable challenges.",
        ],
      },
      {
        heading: "Choosing and instructing the right accountant",
        paragraphs: [
          "Select experts with demonstrable family court experience, FPR Part 25 report samples, and understanding of matrimonial goodwill and Form E. Civil fraud specialists without family practice may misunderstand disclosure culture and settlement dynamics.",
          "Our how-to-instruct page sets out practical steps, and qualifications page lists credentials to verify. Instruct early with a draft joint letter so permission applications are coherent and costs estimates are accurate for clients.",
        ],
      },
      {
        heading: "Report content and quality standards",
        paragraphs: [
          "FPR Part 25B expects clear separation of facts, assumptions, and opinion. Family court accountants set out documents reviewed, limitations where disclosure was incomplete, and ranges where appropriate. Arithmetic errors undermine credibility; quality control is essential before service.",
          "Reports should be understandable to non-accountants: judges and lay clients need summaries without jargon. Technical appendices can hold detailed schedules. Statement of truth and declaration of compliance with Part 25 must be included; defective formalities delay hearings.",
        ],
      },
      {
        heading: "Costs, sanctions, and expert conduct",
        paragraphs: [
          "Experts who exceed agreed fees or scope risk costs criticism. Staying within the joint letter protects the expert and the instructing parties. Where one party withholds documents, the report should state what could not be tested and avoid over-reaching conclusions.",
          "Ikarian Reefer duties apply throughout: change of opinion after new data must be explained transparently. Experts must not negotiate settlement or advise on law. Solicitors managing parallel negotiations should avoid informal pressure on experts that compromises independence. Our qualifications page describes credentials and red flags when selecting family finance experts.",
          "Part 25 also covers discussions between experts and court-directed meetings. Family accountants should attend only when ordered and with clear agendas. Minute disagreements on methodology without adopting the role of mediator. Written questions remain the primary tool for narrowing technical disputes before trial.",
        ],
      },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}
