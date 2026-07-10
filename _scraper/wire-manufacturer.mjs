import { readFile, writeFile } from 'node:fs/promises';

const SLUG = 'how-to-choose-a-zoo-enclosure-manufacturer.html';
const notes = [];

// resources.html #blog — add as the new FIRST card (newest first)
{
  const f = 'tcb-website/resources.html';
  let h = await readFile(f, 'utf8');
  const anchor = `          <article class="card" data-reveal>
            <div class="card__media"><img src="assets/img/zoo-enclosure-design-mistakes.webp"`;
  const newCard = `          <article class="card" data-reveal>
            <div class="card__media"><img src="assets/img/structural-steel-framing.webp" alt="Precision-fabricated structural steel connections on a TCB Metal Works zoo enclosure" loading="lazy" decoding="async" width="1000" height="525" /></div>
            <div class="card__body"><span class="eyebrow eyebrow--sm">Buyer's Guide · 4 min read</span><h3 style="margin-top:.3rem">How to Choose the Right Zoo Enclosure Manufacturer</h3><a class="card__link" href="${SLUG}">Read article <svg><use href="#i-arrow"/></svg></a></div>
          </article>
`;
  if (h.includes(`href="${SLUG}"`)) notes.push('blog card already');
  else if (h.includes(anchor)) { h = h.replace(anchor, newCard + anchor); await writeFile(f, h); notes.push('blog card added (first)'); }
  else notes.push('⚠ resources blog anchor not found');
}

// sitemap
{
  const f = 'tcb-website/sitemap.xml';
  let h = await readFile(f, 'utf8');
  if (h.includes('how-to-choose-a-zoo-enclosure-manufacturer')) notes.push('sitemap already');
  else {
    const marker = `  <url>
    <loc>https://tcbmetalworks.com/common-mistakes-in-zoo-enclosure-design/</loc>
    <lastmod>2026-07-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
    const entry = `  <url>
    <loc>https://tcbmetalworks.com/how-to-choose-a-zoo-enclosure-manufacturer/</loc>
    <lastmod>2026-07-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
    if (h.includes(marker)) { h = h.replace(marker, marker + entry); notes.push('sitemap'); await writeFile(f, h); }
    else notes.push('⚠ sitemap marker not found');
  }
}

console.log('  ' + notes.join(' | '));
