import { readFile, writeFile } from 'node:fs/promises';

const SLUG = 'structural-steel-framing-zoo-enclosures.html';
let notes = [];

// 1) Pillar backlink: promote the plain "Structural steel framing" list item
{
  const f = 'tcb-website/what-is-zoo-caging.html';
  let h = await readFile(f, 'utf8');
  const OLD = '<li>Structural steel framing</li>';
  const NEW = `<li><a href="${SLUG}">Structural steel framing</a></li>`;
  if (h.includes(`href="${SLUG}"`)) notes.push('pillar link already');
  else if (h.includes(OLD)) { h = h.replace(OLD, NEW); await writeFile(f, h); notes.push('pillar backlink'); }
  else notes.push('⚠ pillar li not found');
}

// 2) Articles hub: replace the Structural Steel Framing placeholder with a real card,
//    then add generic "coming soon" cards (no specific topics), + Blog schema + sitemap.
{
  const f = 'tcb-website/articles.html';
  let h = await readFile(f, 'utf8');

  const phCard = `          <article class="card card--placeholder" data-reveal aria-label="Upcoming article placeholder">
            <div class="card__media"><svg class="ph-icon" aria-hidden="true"><use href="#i-image"/></svg></div>
            <div class="card__body">
              <span class="ph-cat" aria-hidden="true"></span>
              <h3>Structural Steel Framing</h3>
              <p>The framework behind every enclosure — engineering, tolerances, and finishes.</p>
              <span class="card__link" aria-disabled="true">Coming soon <svg><use href="#i-arrow"/></svg></span>
            </div>
          </article>`;

  const realCard = `          <article class="card" data-reveal>
            <div class="card__media"><span class="card__tag">Zoo Enclosure Equipment</span><img src="assets/img/structural-steel-framing.webp" alt="Galvanized structural steel base channel, frame verticals and base-plate connections of a zoo enclosure, fabricated by TCB Metal Works" loading="lazy" decoding="async" width="1000" height="525" /></div>
            <div class="card__body">
              <span class="eyebrow eyebrow--sm">13 min read</span>
              <h3>Structural Steel Framing</h3>
              <p>The load-bearing framework behind every enclosure — design, engineering, connections, and finishes.</p>
              <a class="card__link" href="${SLUG}">Read article <svg><use href="#i-arrow"/></svg></a>
            </div>
          </article>`;

  // 3 generic "coming soon" cards — deliberately unspecified topics
  const comingSoon = ['More Guides on the Way', 'New Articles Coming Soon', 'Fresh Insights in Progress']
    .map((title, i) => {
      const blurb = [
        'We’re expanding this library with more expert guides on zoo enclosures and custom fabrication.',
        'Additional in-depth articles are being written and will appear here soon.',
        'Check back shortly for more from the TCB Metal Works team.',
      ][i];
      return `          <article class="card card--placeholder" data-reveal aria-label="Upcoming article placeholder">
            <div class="card__media"><svg class="ph-icon" aria-hidden="true"><use href="#i-image"/></svg></div>
            <div class="card__body">
              <span class="ph-cat" aria-hidden="true"></span>
              <h3>${title}</h3>
              <p>${blurb}</p>
              <span class="card__link" aria-disabled="true">Coming soon <svg><use href="#i-arrow"/></svg></span>
            </div>
          </article>`;
    }).join('\n');

  if (h.includes(`href="${SLUG}"`)) notes.push('hub card already');
  else if (h.includes(phCard)) { h = h.replace(phCard, realCard + '\n' + comingSoon); notes.push('hub card + 3 coming-soon'); }
  else notes.push('⚠ hub placeholder not found');

  // Blog schema append (after zoo-mesh-systems post)
  const schemaAnchor = `        "url": "https://tcbmetalworks.com/zoo-mesh-systems/",
        "image": "https://tcbmetalworks.com/assets/img/zoo-mesh-systems-og.jpg",
        "datePublished": "2026-07-10",
        "author": { "@type": "Organization", "name": "TCB Metal Works" }
      }
    ]`;
  const schemaNew = `        "url": "https://tcbmetalworks.com/zoo-mesh-systems/",
        "image": "https://tcbmetalworks.com/assets/img/zoo-mesh-systems-og.jpg",
        "datePublished": "2026-07-10",
        "author": { "@type": "Organization", "name": "TCB Metal Works" }
      },
      {
        "@type": "BlogPosting",
        "headline": "Structural Steel Framing for Zoo Enclosures: Design, Fabrication & Engineering Guide",
        "url": "https://tcbmetalworks.com/structural-steel-framing-zoo-enclosures/",
        "image": "https://tcbmetalworks.com/assets/img/structural-steel-framing-og.jpg",
        "datePublished": "2026-07-10",
        "author": { "@type": "Organization", "name": "TCB Metal Works" }
      }
    ]`;
  if (h.includes('/structural-steel-framing-zoo-enclosures/')) notes.push('blog schema already');
  else if (h.includes(schemaAnchor)) { h = h.replace(schemaAnchor, schemaNew); notes.push('blog schema'); }
  else notes.push('⚠ schema anchor not found');

  await writeFile(f, h);
}

// 3) Sitemap entry (after zoo-mesh-systems)
{
  const f = 'tcb-website/sitemap.xml';
  let h = await readFile(f, 'utf8');
  if (h.includes('structural-steel-framing-zoo-enclosures')) notes.push('sitemap already');
  else {
    const marker = `  <url>
    <loc>https://tcbmetalworks.com/zoo-mesh-systems/</loc>
    <lastmod>2026-07-10</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;
    const entry = `  <url>
    <loc>https://tcbmetalworks.com/structural-steel-framing-zoo-enclosures/</loc>
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
