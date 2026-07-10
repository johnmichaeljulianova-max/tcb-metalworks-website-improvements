import { readFile, writeFile } from 'node:fs/promises';

const ALT = "Stainless steel animal holding pens with hinged gates, latches and a sealed hygienic floor, fabricated by TCB Metal Works for the University of Miami research facility";
const CAPTION = "A squeeze cage is never a standalone device — it is integrated with holding areas, transfer corridors and keeper access points. These stainless steel research holding pens, fabricated by TCB Metal Works, show the hinged gates, latches and cleanable surfaces such systems rely on.";

// article page: lead figure (multi-line img + figcaption)
const OLD_FIG_IMG = `            <img src="assets/img/squeeze-cage.webp"
                 alt="Zoo enclosure design render showing steel-framed holding structures, service corridors and keeper access areas where squeeze cages are integrated"
                 width="1200" height="580" fetchpriority="high" decoding="async" />`;
const NEW_FIG_IMG = `            <img src="assets/img/squeeze-cage.webp"
                 alt="${ALT}"
                 width="1024" height="538" fetchpriority="high" decoding="async" />`;

const OLD_CAPTION_START = `            <figcaption>A squeeze cage is never a standalone device`;

// card variants (two alt strings exist)
const CARD_OLD_A = `<img class="obj-left" src="assets/img/squeeze-cage.webp" alt="Zoo enclosure design render showing steel-framed holding structures and service corridors where squeeze cages are integrated" loading="lazy" decoding="async" width="1200" height="580" />`;
const CARD_OLD_B = `<img class="obj-left" src="assets/img/squeeze-cage.webp" alt="Zoo enclosure design render showing steel-framed holding structures and service corridors" loading="lazy" decoding="async" width="1200" height="580" />`;
const CARD_NEW   = `<img src="assets/img/squeeze-cage.webp" alt="${ALT}" loading="lazy" decoding="async" width="1024" height="538" />`;

const files = ['zoo-squeeze-cage.html','articles.html','what-is-zoo-caging.html','keeper-doors-for-zoo-enclosures.html'];
for (const f of files) {
  const p = 'tcb-website/' + f;
  let h = await readFile(p, 'utf8');
  const before = h;
  let notes = [];

  if (h.includes(OLD_FIG_IMG)) { h = h.split(OLD_FIG_IMG).join(NEW_FIG_IMG); notes.push('figure img'); }

  // replace whole figcaption line
  const idx = h.indexOf(OLD_CAPTION_START);
  if (idx !== -1) {
    const end = h.indexOf('</figcaption>', idx) + '</figcaption>'.length;
    h = h.slice(0, idx) + `            <figcaption>${CAPTION}</figcaption>` + h.slice(end);
    notes.push('figcaption');
  }

  for (const [old, label] of [[CARD_OLD_A,'card(A)'],[CARD_OLD_B,'card(B)']]) {
    if (h.includes(old)) { h = h.split(old).join(CARD_NEW); notes.push(label); }
  }

  if (h !== before) { await writeFile(p, h); console.log(`  ${f}: updated [${notes.join(', ')}]`); }
  else console.log(`  ${f}: NO MATCH — check manually`);
}

// sanity: no stale dims / render-alt / obj-left on this image
for (const f of files) {
  const h = await readFile('tcb-website/' + f, 'utf8');
  const stale = [];
  if (/squeeze-cage\.webp[^>]*width="1200"/.test(h)) stale.push('old width');
  if (/obj-left[^>]*squeeze-cage\.webp/.test(h)) stale.push('obj-left');
  if (/render showing steel-framed/.test(h) && h.includes('squeeze-cage.webp')) stale.push('render alt');
  if (stale.length) console.log(`  ⚠ ${f}: ${stale.join(', ')}`);
}
