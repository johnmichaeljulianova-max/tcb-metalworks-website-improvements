import { readFile, writeFile, unlink } from 'node:fs/promises';
const OLD = 'why-steel-is-best-for-zoo-enclosures.html';
const NEW = 'choosing-the-right-materials-for-zoo-enclosures.html';
const notes = [];

// 1) resources.html #blog card
{
  const f = 'tcb-website/resources.html';
  let h = await readFile(f, 'utf8');
  const old = `<div class="card__body"><span class="eyebrow eyebrow--sm">Materials · 3 min read</span><h3 style="margin-top:.3rem">Why Steel Is the Best Material for Zoo Enclosures</h3><a class="card__link" href="${OLD}">Read article <svg><use href="#i-arrow"/></svg></a></div>`;
  const neu = `<div class="card__body"><span class="eyebrow eyebrow--sm">Materials · 4 min read</span><h3 style="margin-top:.3rem">Choosing the Right Materials for Zoo Enclosures</h3><a class="card__link" href="${NEW}">Read article <svg><use href="#i-arrow"/></svg></a></div>`;
  if (h.includes(old)) { h = h.replace(old, neu); await writeFile(f, h); notes.push('resources #blog card'); }
  else notes.push('⚠ resources card not found');
}

// 2) related cards on the two posts that linked to why-steel
const relOld = `              <h3>Why Steel Is the Best Material</h3>
              <p>Strength, safety, and long-term value — why steel is the industry standard for zoo enclosures.</p>
              <a class="card__link" href="${OLD}">Read article <svg><use href="#i-arrow"/></svg></a>`;
const relNew = `              <h3>Choosing the Right Materials</h3>
              <p>Carbon steel, stainless, aluminium, HDPE and finishes — matching material to each part of an enclosure.</p>
              <a class="card__link" href="${NEW}">Read article <svg><use href="#i-arrow"/></svg></a>`;
for (const f of ['tcb-website/common-mistakes-in-zoo-enclosure-design.html', 'tcb-website/how-to-choose-a-zoo-enclosure-manufacturer.html']) {
  let h = await readFile(f, 'utf8');
  if (h.includes(relOld)) { h = h.replace(relOld, relNew); await writeFile(f, h); notes.push('related card: ' + f.split('/').pop()); }
  else notes.push('⚠ related card not found in ' + f.split('/').pop());
}

// 3) sitemap
{
  const f = 'tcb-website/sitemap.xml';
  let h = await readFile(f, 'utf8');
  const o = '<loc>https://tcbmetalworks.com/why-steel-is-best-for-zoo-enclosures/</loc>';
  const n = '<loc>https://tcbmetalworks.com/choosing-the-right-materials-for-zoo-enclosures/</loc>';
  if (h.includes(o)) { h = h.replace(o, n); await writeFile(f, h); notes.push('sitemap'); }
  else notes.push('⚠ sitemap loc not found');
}

// 4) delete the old page (image assets stay — reused by the new post)
try { await unlink('tcb-website/' + OLD); notes.push('deleted ' + OLD); }
catch (e) { notes.push('⚠ could not delete: ' + e.message); }

console.log('  ' + notes.join('\n  '));
