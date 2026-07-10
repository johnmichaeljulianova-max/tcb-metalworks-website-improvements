import { readFile, writeFile } from 'node:fs/promises';

const SLUG = 'zoo-enclosure-manufacturing-process.html';
const notes = [];

// resources.html #blog — new FIRST card (newest first)
{
  const f = 'tcb-website/resources.html';
  let h = await readFile(f, 'utf8');
  const anchor = `          <article class="card" data-reveal>
            <div class="card__media"><img src="assets/img/structural-steel-framing.webp"`;
  const newCard = `          <article class="card" data-reveal>
            <div class="card__media"><img src="assets/img/zoo-mesh-systems.webp" alt="Finished welded wire mesh in reinforced steel frames, fabricated by TCB Metal Works" loading="lazy" decoding="async" width="1000" height="595" /></div>
            <div class="card__body"><span class="eyebrow eyebrow--sm">Process · 4 min read</span><h3 style="margin-top:.3rem">The Zoo Enclosure Manufacturing Process: Design to Installation</h3><a class="card__link" href="${SLUG}">Read article <svg><use href="#i-arrow"/></svg></a></div>
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
  if (h.includes('zoo-enclosure-manufacturing-process')) notes.push('sitemap already');
  else {
    const marker = `  <url>
    <loc>https://tcbmetalworks.com/how-to-choose-a-zoo-enclosure-manufacturer/</loc>
    <lastmod>2026-07-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
    const entry = `  <url>
    <loc>https://tcbmetalworks.com/zoo-enclosure-manufacturing-process/</loc>
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
