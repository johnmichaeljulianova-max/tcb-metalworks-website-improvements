import { readFile, writeFile } from 'node:fs/promises';

const SLUG = 'common-mistakes-in-zoo-enclosure-design.html';
const notes = [];

// resources.html #blog — add as the new FIRST card (newest first)
{
  const f = 'tcb-website/resources.html';
  let h = await readFile(f, 'utf8');
  const anchor = `          <article class="card" data-reveal>
            <div class="card__media"><img src="assets/img/steel-zoo-enclosures.webp"`;
  const newCard = `          <article class="card" data-reveal>
            <div class="card__media"><img src="assets/img/zoo-enclosure-design-mistakes.webp" alt="Bolted steel bracket joining a timber roof beam to a structural steel post above welded mesh, fabricated by TCB Metal Works" loading="lazy" decoding="async" width="1000" height="600" /></div>
            <div class="card__body"><span class="eyebrow eyebrow--sm">Design · 3 min read</span><h3 style="margin-top:.3rem">10 Common Mistakes in Zoo Enclosure Design</h3><a class="card__link" href="${SLUG}">Read article <svg><use href="#i-arrow"/></svg></a></div>
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
  if (h.includes('common-mistakes-in-zoo-enclosure-design')) notes.push('sitemap already');
  else {
    const marker = `  <url>
    <loc>https://tcbmetalworks.com/why-steel-is-best-for-zoo-enclosures/</loc>
    <lastmod>2026-07-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
    const entry = `  <url>
    <loc>https://tcbmetalworks.com/common-mistakes-in-zoo-enclosure-design/</loc>
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
