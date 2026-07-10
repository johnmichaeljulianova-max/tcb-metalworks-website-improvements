import { readFile, writeFile } from 'node:fs/promises';

const SLUG = 'zoo-mesh-systems.html';   // matches the user slug /zoo-mesh-systems/ and the placeholder marker
let notes = [];

// 1) Pillar: promote the last data-future-href placeholder ("zoo mesh system")
{
  const f = 'tcb-website/what-is-zoo-caging.html';
  let h = await readFile(f, 'utf8');
  const OLD = '<a href="zoo-enclosures.html" data-future-href="zoo-mesh-systems.html">zoo mesh system</a>';
  const NEW = `<a href="${SLUG}">zoo mesh system</a>`;
  if (h.includes(OLD)) { h = h.replace(OLD, NEW); await writeFile(f, h); notes.push('pillar link promoted'); }
  else notes.push('⚠ pillar placeholder not found');
}

// 2) Articles hub: swap the "Zoo Mesh Systems" placeholder card for a real one + append Blog schema
{
  const f = 'tcb-website/articles.html';
  let h = await readFile(f, 'utf8');

  // 2a) replace the exact placeholder card (topic matches, so replace in place — no duplicate)
  const phCard = `          <article class="card card--placeholder" data-reveal aria-label="Upcoming article placeholder">
            <div class="card__media"><svg class="ph-icon" aria-hidden="true"><use href="#i-image"/></svg></div>
            <div class="card__body">
              <span class="ph-cat" aria-hidden="true"></span>
              <h3>Zoo Mesh Systems</h3>
              <p>Choosing wire diameter, opening size, framing, and corrosion protection.</p>
              <span class="card__link" aria-disabled="true">Coming soon <svg><use href="#i-arrow"/></svg></span>
            </div>
          </article>`;
  const realCard = `          <article class="card" data-reveal>
            <div class="card__media"><span class="card__tag">Zoo Enclosure Equipment</span><img src="assets/img/zoo-mesh-systems.webp" alt="Galvanized welded wire mesh panels in reinforced steel frames forming a zoo enclosure wall, fabricated by TCB Metal Works" loading="lazy" decoding="async" width="1000" height="595" /></div>
            <div class="card__body">
              <span class="eyebrow eyebrow--sm">14 min read</span>
              <h3>Zoo Mesh Systems</h3>
              <p>Choosing the right mesh for safe, durable enclosures — welded wire, materials, and engineering.</p>
              <a class="card__link" href="${SLUG}">Read article <svg><use href="#i-arrow"/></svg></a>
            </div>
          </article>`;
  if (h.includes(`href="${SLUG}"`)) notes.push('hub card already present');
  else if (h.includes(phCard)) { h = h.replace(phCard, realCard); notes.push('hub card (replaced placeholder)'); }
  else notes.push('⚠ hub placeholder card not found');

  // 2b) Blog schema: append after the zoo-enrichment-boxes post
  const schemaAnchor = `        "url": "https://tcbmetalworks.com/zoo-enrichment-boxes/",
        "image": "https://tcbmetalworks.com/assets/img/zoo-enrichment-boxes-og.jpg",
        "datePublished": "2026-07-10",
        "author": { "@type": "Organization", "name": "TCB Metal Works" }
      }
    ]`;
  const schemaNew = `        "url": "https://tcbmetalworks.com/zoo-enrichment-boxes/",
        "image": "https://tcbmetalworks.com/assets/img/zoo-enrichment-boxes-og.jpg",
        "datePublished": "2026-07-10",
        "author": { "@type": "Organization", "name": "TCB Metal Works" }
      },
      {
        "@type": "BlogPosting",
        "headline": "Zoo Mesh Systems: Choosing the Right Mesh for Safe and Durable Animal Enclosures",
        "url": "https://tcbmetalworks.com/zoo-mesh-systems/",
        "image": "https://tcbmetalworks.com/assets/img/zoo-mesh-systems-og.jpg",
        "datePublished": "2026-07-10",
        "author": { "@type": "Organization", "name": "TCB Metal Works" }
      }
    ]`;
  if (h.includes(`"url": "https://tcbmetalworks.com/zoo-mesh-systems/"`)) notes.push('blog schema already present');
  else if (h.includes(schemaAnchor)) { h = h.replace(schemaAnchor, schemaNew); notes.push('blog schema'); }
  else notes.push('⚠ schema anchor not found');

  await writeFile(f, h);
}

// 3) Sitemap entry (after enrichment-boxes)
{
  const f = 'tcb-website/sitemap.xml';
  let h = await readFile(f, 'utf8');
  if (h.includes('zoo-mesh-systems')) notes.push('sitemap already present');
  else {
    const marker = `  <url>
    <loc>https://tcbmetalworks.com/zoo-enrichment-boxes/</loc>
    <lastmod>2026-07-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;
    const entry = `  <url>
    <loc>https://tcbmetalworks.com/zoo-mesh-systems/</loc>
    <lastmod>2026-07-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;
    if (h.includes(marker)) { h = h.replace(marker, marker + entry); notes.push('sitemap'); await writeFile(f, h); }
    else notes.push('⚠ sitemap marker not found');
  }
}

console.log('  ' + notes.join(' | '));
