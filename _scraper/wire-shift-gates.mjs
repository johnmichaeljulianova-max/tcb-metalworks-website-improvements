import { readFile, writeFile } from 'node:fs/promises';

const SLUG = 'shift-gates-for-zoo-enclosures.html';

// Real card markup (reading-time eyebrow only on the hub for parity with other hub cards)
const cardMedia = `<div class="card__media"><span class="card__tag">Zoo Enclosure Equipment</span><img src="assets/img/shift-gates.webp" alt="Galvanized steel framed mesh gate panels on a base track, fabricated by TCB Metal Works — the movable barriers used as shift gates between enclosure spaces" loading="lazy" decoding="async" width="900" height="472" /></div>`;
const card = (metaLine) => `          <article class="card" data-reveal>
            ${cardMedia}
            <div class="card__body">
${metaLine}              <h3>Shift Gates for Zoo Enclosures</h3>
              <p>Safely transferring animals between spaces — sliding &amp; swing designs, locking, and protected contact.</p>
              <a class="card__link" href="${SLUG}">Read article <svg><use href="#i-arrow"/></svg></a>
            </div>
          </article>`;

// Placeholder <article> containing "Shift Gates" — matched generically (p text varies)
const placeholderRe = /          <article class="card card--placeholder"[\s\S]*?<h3>Shift Gates<\/h3>[\s\S]*?<\/article>/;

const files = {
  'tcb-website/articles.html':                            card('              <span class="eyebrow eyebrow--sm">14 min read</span>\n'),
  'tcb-website/what-is-zoo-caging.html':                  card(''),
  'tcb-website/zoo-squeeze-cage.html':                    card(''),
  'tcb-website/keeper-doors-for-zoo-enclosures.html':     card(''),
};

for (const [f, rep] of Object.entries(files)) {
  let h = await readFile(f, 'utf8');
  const notes = [];

  // 1) promote in-text placeholder link(s): href="…" data-future-href="shift-gates.html"  →  real slug
  const linkRe = /href="[^"]*"\s+data-future-href="shift-gates\.html"/g;
  const linkCount = (h.match(linkRe) || []).length;
  if (linkCount) { h = h.replace(linkRe, `href="${SLUG}"`); notes.push(`${linkCount} in-text link`); }

  // 2) swap the placeholder card
  if (placeholderRe.test(h)) { h = h.replace(placeholderRe, rep); notes.push('card'); }

  await writeFile(f, h);
  console.log(`  ${f.split('/').pop()}: ${notes.join(', ') || 'no change'}`);
}

// sanity: nothing pointing at the non-existent shift-gates.html remains
for (const f of Object.keys(files)) {
  const h = await readFile(f, 'utf8');
  const bad = (h.match(/(?<![-\w])href="shift-gates\.html"/g) || []).length;
  const future = (h.match(/data-future-href="shift-gates\.html"/g) || []).length;
  if (bad || future) console.log(`  ⚠ ${f.split('/').pop()}: bad-href=${bad} future-marker=${future}`);
}
