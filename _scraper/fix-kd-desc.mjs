import { readFile, writeFile } from 'node:fs/promises';

const OLD = "Learn what keeper doors are, why they are essential for modern zoo enclosures, their safety features, fabrication methods, and best practices for animal containment.";
const NEW = "Learn what keeper doors are, why they're essential in modern zoo enclosures, their safety features, fabrication methods, and containment best practices.";

console.log(`old: ${OLD.length}c -> new: ${NEW.length}c`);

for (const f of ['tcb-website/keeper-doors-for-zoo-enclosures.html', '_scraper/build-keeper-doors.mjs']) {
  const h = await readFile(f, 'utf8');
  const count = h.split(OLD).length - 1;
  await writeFile(f, h.split(OLD).join(NEW));
  console.log(`  ${f}: ${count} replacement(s)`);
}
