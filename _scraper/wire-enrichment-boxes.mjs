import { readFile, writeFile } from 'node:fs/promises';

const SLUG = 'zoo-enrichment-boxes.html';   // final filename (user slug /zoo-enrichment-boxes/)
let notes = [];

// 1) Pillar/hub: promote the placeholder "Enrichment boxes" link. The marker was authored
//    as data-future-href="enrichment-boxes.html"; the real file is zoo-enrichment-boxes.html.
{
  const f = 'tcb-website/what-is-zoo-caging.html';
  let h = await readFile(f, 'utf8');
  const OLD = '<a href="zoo-enclosures.html" data-future-href="enrichment-boxes.html">Enrichment boxes</a>';
  const NEW = `<a href="${SLUG}">Enrichment boxes</a>`;
  if (h.includes(OLD)) { h = h.replace(OLD, NEW); await writeFile(f, h); notes.push('pillar link promoted'); }
  else notes.push('⚠ pillar placeholder not found');
}

// 2) Hub card: swap the enrichment-boxes placeholder card in articles.html for a real one,
//    and append the post to the Blog schema.
{
  const f = 'tcb-website/articles.html';
  let h = await readFile(f, 'utf8');

  // 2a) real card — insert before the first remaining placeholder card
  const anchor = '          <article class="card card--placeholder"';
  const card = `          <article class="card" data-reveal>
            <div class="card__media"><span class="card__tag">Zoo Enclosure Equipment</span><img src="assets/img/zoo-enrichment-boxes.webp" alt="Galvanized welded mesh in a reinforced structural steel frame, fabricated by TCB Metal Works" loading="lazy" decoding="async" width="1000" height="600" /></div>
            <div class="card__body">
              <span class="eyebrow eyebrow--sm">13 min read</span>
              <h3>Zoo Enrichment Boxes</h3>
              <p>How enrichment boxes improve animal welfare — foraging, cognitive &amp; sensory types, plus custom fabrication.</p>
              <a class="card__link" href="${SLUG}">Read article <svg><use href="#i-arrow"/></svg></a>
            </div>
          </article>
`;
  const i = h.indexOf(anchor);
  if (h.includes(`href="${SLUG}"`)) notes.push('hub card already present');
  else if (i !== -1) { h = h.slice(0, i) + card + h.slice(i); notes.push('hub card'); }
  else notes.push('⚠ hub anchor not found');

  // 2b) Blog schema: append after the zoo-holding-areas post
  const schemaAnchor = `        "url": "https://tcbmetalworks.com/zoo-holding-areas/",
        "image": "https://tcbmetalworks.com/assets/img/zoo-holding-areas-og.jpg",
        "datePublished": "2026-07-10",
        "author": { "@type": "Organization", "name": "TCB Metal Works" }
      }
    ]`;
  const schemaNew = `        "url": "https://tcbmetalworks.com/zoo-holding-areas/",
        "image": "https://tcbmetalworks.com/assets/img/zoo-holding-areas-og.jpg",
        "datePublished": "2026-07-10",
        "author": { "@type": "Organization", "name": "TCB Metal Works" }
      },
      {
        "@type": "BlogPosting",
        "headline": "Zoo Enrichment Boxes: How They Improve Animal Welfare and Modern Zoo Management",
        "url": "https://tcbmetalworks.com/zoo-enrichment-boxes/",
        "image": "https://tcbmetalworks.com/assets/img/zoo-enrichment-boxes-og.jpg",
        "datePublished": "2026-07-10",
        "author": { "@type": "Organization", "name": "TCB Metal Works" }
      }
    ]`;
  if (h.includes(`"url": "https://tcbmetalworks.com/zoo-enrichment-boxes/"`)) notes.push('blog schema already present');
  else if (h.includes(schemaAnchor)) { h = h.replace(schemaAnchor, schemaNew); notes.push('blog schema'); }
  else notes.push('⚠ schema anchor not found');

  await writeFile(f, h);
}

// 3) Sitemap entry
{
  const f = 'tcb-website/sitemap.xml';
  let h = await readFile(f, 'utf8');
  const entry = `  <url>
    <loc>https://tcbmetalworks.com/zoo-enrichment-boxes/</loc>
    <lastmod>2026-07-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;
  if (h.includes('zoo-enrichment-boxes')) notes.push('sitemap already present');
  else {
    // insert right after the holding-areas url block
    const marker = `  <url>
    <loc>https://tcbmetalworks.com/zoo-holding-areas/</loc>
    <lastmod>2026-07-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;
    if (h.includes(marker)) { h = h.replace(marker, marker + entry); notes.push('sitemap'); }
    else notes.push('⚠ sitemap marker not found');
    await writeFile(f, h);
  }
}

console.log('  ' + notes.join(' | '));
