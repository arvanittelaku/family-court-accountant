/**
 * Validates static route SEO manifest vs URL inventory.
 * Run: npm run seo:verify:ssr
 */
import { PAGE_SEO_MANIFEST } from "../lib/seo-metadata";
import { buildPublicUrlInventory } from "../lib/seo/publicUrlInventory";

function main(): void {
  const inventory = buildPublicUrlInventory();
  const manifestPaths = Object.keys(PAGE_SEO_MANIFEST).sort();
  const inventoryStatic = inventory.allPaths.filter(
    (p) => !p.includes("[") && !p.startsWith("/guides/") && !p.startsWith("/case-types/") && !p.startsWith("/proceedings/"),
  );

  let failed = false;

  for (const path of inventoryStatic) {
    if (path === "/cookies") continue;
    const entry = PAGE_SEO_MANIFEST[path];
    if (!entry) {
      console.error(`Missing PAGE_SEO_MANIFEST entry for ${path}`);
      failed = true;
      continue;
    }
    if (!entry.title.trim() || entry.title.length < 20) {
      console.error(`Title too short for ${path}`);
      failed = true;
    }
    if (!entry.description.trim() || entry.description.length < 50) {
      console.error(`Description too short for ${path}`);
      failed = true;
    }
  }

  const extraManifest = manifestPaths.filter(
    (p) => !inventory.allPaths.includes(p),
  );
  if (extraManifest.length > 0) {
    console.warn("Manifest paths not in sitemap inventory:", extraManifest.join(", "));
  }

  if (failed) {
    process.exit(1);
  }

  console.log(
    `OK: PAGE_SEO_MANIFEST covers ${manifestPaths.length} static routes; inventory has ${inventory.allPaths.length} URLs.`,
  );
}

main();
