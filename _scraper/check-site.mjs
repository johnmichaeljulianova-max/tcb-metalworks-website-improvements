import { readFile, access } from 'node:fs/promises';
import path from 'node:path';
const ROOT = path.resolve('../tcb-website');
const pages = ['index.html','zoo-enclosures.html','what-is-zoo-caging.html','zoo-squeeze-cage.html','keeper-doors-for-zoo-enclosures.html','shift-gates-for-zoo-enclosures.html','zoo-holding-areas.html','zoo-enrichment-boxes.html','zoo-mesh-systems.html','structural-steel-framing-zoo-enclosures.html','how-to-design-a-safe-zoo-enclosure.html','choosing-the-right-materials-for-zoo-enclosures.html','common-mistakes-in-zoo-enclosure-design.html','how-to-choose-a-zoo-enclosure-manufacturer.html','zoo-enclosure-manufacturing-process.html','custom-tow-truck-wheel-lift.html','structural-steel-fabrication-project.html','denver-zoo-australia-exhibit.html','university-of-miami-holding-pens.html','projects.html','privacy-policy.html','articles.html','services.html','resources.html','about.html','contact.html'];
let problems = 0;
const exists = async p => { try { await access(p); return true; } catch { return false; } };

for (const page of pages) {
  const html = await readFile(path.join(ROOT, page), 'utf8');
  const refs = new Set();
  // real attributes only — don't match data-future-href, data-src, etc.
  for (const m of html.matchAll(/(?<![-\w])(?:href|src)\s*=\s*"([^"]+)"/gi)) refs.add(m[1]);
  for (const r of refs) {
    if (/^(https?:|tel:|mailto:|#|data:)/.test(r)) continue;           // external / anchors
    const clean = r.split('#')[0].split('?')[0];
    if (!clean) continue;
    const target = path.join(ROOT, clean);
    if (!(await exists(target))) { console.log(`  [${page}] MISSING → ${r}`); problems++; }
  }
  // structural checks
  const checks = {
    'has <title>': /<title>[^<]+<\/title>/.test(html),
    'has meta description': /<meta name="description"/.test(html),
    'has canonical': /rel="canonical"/.test(html),
    'single h1': (html.match(/<h1[\s>]/g)||[]).length === 1,
    'has skip link': /class="skip-link"/.test(html),
    'loads css': /assets\/css\/styles\.css/.test(html),
    'loads js': /assets\/js\/main\.js/.test(html),
    'og:image': /property="og:image"/.test(html),
  };
  const failed = Object.entries(checks).filter(([,v])=>!v).map(([k])=>k);
  console.log(`${page}: ${failed.length? 'FAIL → '+failed.join(', ') : 'all structural checks pass'} (h1x${(html.match(/<h1[\s>]/g)||[]).length})`);
  if (failed.length) problems += failed.length;
}
// alt text audit
for (const page of pages) {
  const html = await readFile(path.join(ROOT, page), 'utf8');
  const imgs = [...html.matchAll(/<img\b[^>]*>/gi)].map(m=>m[0]);
  const noAlt = imgs.filter(t => !/\balt\s*=/.test(t));
  if (noAlt.length) { console.log(`  [${page}] ${noAlt.length} img(s) without alt`); problems += noAlt.length; }
}
console.log(problems === 0 ? '\n✅ No problems found.' : `\n❌ ${problems} problem(s).`);
