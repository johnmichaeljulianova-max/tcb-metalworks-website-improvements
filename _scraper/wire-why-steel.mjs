import { readFile, writeFile } from 'node:fs/promises';

const SLUG = 'why-steel-is-best-for-zoo-enclosures.html';
const notes = [];

// resources.html #blog — add as the FIRST card (newest first), before the existing lead card
{
  const f = 'tcb-website/resources.html';
  let h = await readFile(f, 'utf8');
  // current lead card in #blog is the "how-to" listicle
  const anchor = `          <article class="card" data-reveal>
            <div class="card__media"><img src="assets/img/safe-zoo-enclosure-design.webp"`;
  const newCard = `          <article class="card" data-reveal>
            <div class="card__media"><img src="assets/img/steel-zoo-enclosures.webp" alt="Precision-fabricated stainless steel animal enclosure bars and gates by TCB Metal Works" loading="lazy" decoding="async" width="1000" height="562" /></div>
            <div class="card__body"><span class="eyebrow eyebrow--sm">Materials · 3 min read</span><h3 style="margin-top:.3rem">Why Steel Is the Best Material for Zoo Enclosures</h3><a class="card__link" href="${SLUG}">Read article <svg><use href="#i-arrow"/></svg></a></div>
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
  if (h.includes(SLUG.replace('.html',''))) notes.push('sitemap already');
  else {
    const marker = `  <url>
    <loc>https://tcbmetalworks.com/how-to-design-a-safe-zoo-enclosure/</loc>
    <lastmod>2026-07-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;
    const entry = `  <url>
    <loc>https://tcbmetalworks.com/why-steel-is-best-for-zoo-enclosures/</loc>
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
