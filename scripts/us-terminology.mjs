import fs from "fs";
import path from "path";

const replacements = [
  [/Financial Remedy \(Divorce\)/g, "Equitable Distribution (Divorce)"],
  [/Schedule 1 \(Children Act\)/g, "Child Support & Provision"],
  [/TOLATA \(Cohabitation\)/g, "Cohabitation Property"],
  [/Nuptial Agreements/g, "Marital Agreements"],
  [/Solicitors & Barristers/g, "Family Law Attorneys"],
  [/Solicitors and Barristers/g, "Family Law Attorneys"],
  [/family law solicitors/g, "family law attorneys"],
  [/Family law solicitors/g, "Family law attorneys"],
  [/solicitors and barristers/g, "family law attorneys"],
  [/Solicitors and barristers/g, "Family law attorneys"],
  [/Form E/g, "financial affidavit"],
  [/FPR Part 25/g, "expert witness standards"],
  [/Single Joint Expert/g, "court-appointed joint expert"],
  [/\bSJE\b/g, "joint expert"],
  [/England and Wales/g, "state family courts"],
  [/England or Wales/g, "your jurisdiction"],
  [/ in the UK/g, ""],
  [/ UK/g, ""],
  [/United Kingdom/g, ""],
  [/Matrimonial Causes Act 1973/g, "equitable distribution statutes"],
  [/Children Act 1989/g, "child support statutes"],
  [/ACA, FCA, and ICAEW/g, "CPA, CFF, and ABV"],
  [/ACA, ICAEW/g, "CPA, CFF"],
  [/Ikarian Reefer/g, "Daubert"],
  [/Financial Dispute Resolution/g, "settlement conference"],
  [/Section 25/g, "equitable distribution factors"],
  [/indicative costs/g, "scope and timeline"],
  [/indicative fee ranges/g, "scope"],
];

function walk(dir) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (!["node_modules", ".git", ".next"].includes(ent.name)) walk(p);
    } else if (/\.(tsx?)$/.test(ent.name)) {
      let c = fs.readFileSync(p, "utf8");
      const orig = c;
      for (const [re, rep] of replacements) c = c.replace(re, rep);
      if (c !== orig) fs.writeFileSync(p, c);
    }
  }
}

walk(".");
