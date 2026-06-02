/**
 * Verifies public/sitemap.xml and public/robots.txt match buildPublicUrlInventory().
 * Run: npm run seo:verify
 */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import {
  buildPublicUrlInventory,
  CANONICAL_HOST,
  ROBOTS_DISALLOW_PATHS,
} from "../lib/seo/publicUrlInventory";

function parseSitemapLocs(xml: string): string[] {
  const locs: string[] = [];
  const re = /<loc>([^<]+)<\/loc>/g;
  let match: RegExpExecArray | null;
  while ((match = re.exec(xml)) !== null) {
    locs.push(match[1].trim());
  }
  return locs.sort();
}

function parseRobotsDisallow(robots: string): string[] {
  return robots
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("Disallow:"))
    .map((line) => line.replace(/^Disallow:\s*/, "").trim())
    .sort();
}

async function main() {
  const publicDir = join(process.cwd(), "public");
  const sitemapPath = join(publicDir, "sitemap.xml");
  const robotsPath = join(publicDir, "robots.txt");

  let sitemapXml: string;
  let robotsTxt: string;

  try {
    sitemapXml = await readFile(sitemapPath, "utf8");
  } catch {
    console.error(
      "Missing public/sitemap.xml. Run npm run seo:generate first.",
    );
    process.exit(1);
  }

  try {
    robotsTxt = await readFile(robotsPath, "utf8");
  } catch {
    console.error(
      "Missing public/robots.txt. Run npm run seo:generate first.",
    );
    process.exit(1);
  }

  const inventory = buildPublicUrlInventory();
  const expectedUrls = [...inventory.allUrls].sort();
  const actualUrls = parseSitemapLocs(sitemapXml);

  const missingUrls = expectedUrls.filter((url) => !actualUrls.includes(url));
  const extraUrls = actualUrls.filter((url) => !expectedUrls.includes(url));

  let failed = false;

  if (missingUrls.length === 0 && extraUrls.length === 0) {
    console.log(
      `OK: sitemap.xml matches inventory (${actualUrls.length} URLs).`,
    );
  } else {
    failed = true;
    if (missingUrls.length > 0) {
      console.error("URLs in inventory but missing from sitemap.xml:");
      missingUrls.forEach((u) => console.error(`  - ${u}`));
    }
    if (extraUrls.length > 0) {
      console.error("URLs in sitemap.xml but not in inventory:");
      extraUrls.forEach((u) => console.error(`  - ${u}`));
    }
  }

  const expectedSitemapLine = `Sitemap: ${CANONICAL_HOST}/sitemap.xml`;
  if (!robotsTxt.includes(expectedSitemapLine)) {
    failed = true;
    console.error(
      `robots.txt missing or wrong Sitemap line (expected: ${expectedSitemapLine})`,
    );
  }

  const expectedDisallow = [...ROBOTS_DISALLOW_PATHS].map(String).sort();
  const actualDisallow = parseRobotsDisallow(robotsTxt);
  const expectedDisallowSet = new Set(expectedDisallow);
  const actualDisallowSet = new Set(actualDisallow);
  const missingDisallow = expectedDisallow.filter(
    (p) => !actualDisallowSet.has(p),
  );
  const extraDisallow = actualDisallow.filter((p) => !expectedDisallowSet.has(p));

  if (missingDisallow.length === 0 && extraDisallow.length === 0) {
    console.log(
      `OK: robots.txt disallow rules match (${actualDisallow.length} paths).`,
    );
  } else {
    failed = true;
    if (missingDisallow.length > 0) {
      console.error("Disallow paths expected but missing from robots.txt:");
      missingDisallow.forEach((p) => console.error(`  - ${p}`));
    }
    if (extraDisallow.length > 0) {
      console.error("Unexpected Disallow paths in robots.txt:");
      extraDisallow.forEach((p) => console.error(`  - ${p}`));
    }
  }

  if (failed) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
