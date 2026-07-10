import { readFile, writeFile } from 'node:fs/promises';
const OLD = "Learn what zoo holding areas are, why they are essential for animal welfare and keeper safety, and how professional design improves modern zoo enclosure operations.";
const NEW = "Learn what zoo holding areas are, why they matter for animal welfare and keeper safety, and how good design improves modern zoo enclosure operations.";
console.log(`old ${OLD.length}c -> new ${NEW.length}c`);
for (const f of ['tcb-website/zoo-holding-areas.html', '_scraper/build-holding-areas.mjs']) {
  const h = await readFile(f, 'utf8');
  await writeFile(f, h.split(OLD).join(NEW));
  console.log(`  ${f}: ${h.split(OLD).length - 1} replaced`);
}
