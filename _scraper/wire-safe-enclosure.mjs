import { readFile, writeFile } from 'node:fs/promises';

const SLUG = 'how-to-design-a-safe-zoo-enclosure.html';
let notes = [];

// Articles hub: replace the FIRST generic "coming soon" card with a real card (leaves 2 coming-soon)
{
  const f = 'tcb-website/articles.html';
  let h = await readFile(f, 'utf8');

  const realCard = `          <article class="card" data-reveal>
            <div class="card__media"><span class="card__tag">Zoo Enclosure Design</span><img src="assets/img/safe-zoo-enclosure-design.webp" alt="A complete zoo enclosure system — roof structure, welded mesh walls and keeper door, fabricated by TCB Metal Works" loading="lazy" decoding="async" width="1000" height="586" /></div>
            <div class="card__body">
              <span class="eyebrow eyebrow--sm">5 min read</span>
              <h3>How to Design a Safe Zoo Enclosure</h3>
              <p>The 10 essential features every safe, modern zoo habitat needs — from steel framing to enrichment.</p>
              <a class="card__link" href="${SLUG}">Read article <svg><use href="#i-arrow"/></svg></a>
            </div>
          </article>`;

  if (h.includes(`href="${SLUG}"`)) notes.push('hub card already');
  else {
    // robustly locate the first generic coming-soon card by its h3 and replace the whole <article>
    const marker = '<h3>More Guides on the Way</h3>';
    const mi = h.indexOf(marker);
    if (mi !== -1) {
      const start = h.lastIndexOf('<article class="card card--placeholder"', mi);
      const end = h.indexOf('</article>', mi) + '</article>'.length;
      h = h.slice(0, start) + realCard.trimStart() + h.slice(end);
      notes.push('hub card (replaced 1 coming-soon)');
    } else notes.push('⚠ coming-soon card not found');
  }

  // Blog schema append (after structural-steel post)
  const schemaAnchor = `        "url": "https://tcbmetalworks.com/structural-steel-framing-zoo-enclosures/",
        "image": "https://tcbmetalworks.com/assets/img/structural-steel-framing-og.jpg",
        "datePublished": "2026-07-10",
        "author": { "@type": "Organization", "name": "TCB Metal Works" }
      }
    ]`;
  const schemaNew = `        "url": "https://tcbmetalworks.com/structural-steel-framing-zoo-enclosures/",
        "image": "https://tcbmetalworks.com/assets/img/structural-steel-framing-og.jpg",
        "datePublished": "2026-07-10",
        "author": { "@type": "Organization", "name": "TCB Metal Works" }
      },
      {
        "@type": "BlogPosting",
        "headline": "How to Design a Safe Zoo Enclosure: 10 Essential Features Every Modern Habitat Needs",
        "url": "https://tcbmetalworks.com/how-to-design-a-safe-zoo-enclosure/",
        "image": "https://tcbmetalworks.com/assets/img/safe-zoo-enclosure-design-og.jpg",
        "datePublished": "2026-07-10",
        "author": { "@type": "Organization", "name": "TCB Metal Works" }
      }
    ]`;
  if (h.includes('/how-to-design-a-safe-zoo-enclosure/')) notes.push('blog schema already');
  else if (h.includes(schemaAnchor)) { h = h.replace(schemaAnchor, schemaNew); notes.push('blog schema'); }
  else notes.push('⚠ schema anchor not found');

  await writeFile(f, h);
}

// Sitemap entry (after structural-steel)
{
  const f = 'tcb-website/sitemap.xml';
  let h = await readFile(f, 'utf8');
  if (h.includes('how-to-design-a-safe-zoo-enclosure')) notes.push('sitemap already');
  else {
    const marker = `  <url>
    <loc>https://tcbmetalworks.com/structural-steel-framing-zoo-enclosures/</loc>
    <lastmod>2026-07-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;
    const entry = `  <url>
    <loc>https://tcbmetalworks.com/how-to-design-a-safe-zoo-enclosure/</loc>
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
