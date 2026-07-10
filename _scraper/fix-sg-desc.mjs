import { readFile, writeFile } from 'node:fs/promises';
const OLD = "Learn what shift gates are, how they improve keeper safety and animal welfare, and why custom-fabricated shift gates are essential for modern zoo enclosure systems.";
const NEW = "Learn what shift gates are, how they improve keeper safety and animal welfare, and why custom-fabricated gates are essential for modern zoo enclosures.";
console.log(`old ${OLD.length}c -> new ${NEW.length}c`);
for (const f of ['tcb-website/shift-gates-for-zoo-enclosures.html', '_scraper/build-shift-gates.mjs']) {
  const h = await readFile(f, 'utf8');
  await writeFile(f, h.split(OLD).join(NEW));
  console.log(`  ${f}: ${h.split(OLD).length - 1} replaced`);
}
