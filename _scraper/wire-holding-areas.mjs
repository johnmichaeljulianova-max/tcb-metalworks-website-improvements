import { readFile, writeFile } from 'node:fs/promises';

const SLUG = 'zoo-holding-areas.html';
let notes = [];

// 1) Pillar backlink: link "holding areas" in the dedicated Holding Areas section
{
  const f = 'tcb-website/what-is-zoo-caging.html';
  let h = await readFile(f, 'utf8');
  const OLD = 'behind nearly every modern enclosure is a network of holding areas that support daily zoo operations.';
  const NEW = `behind nearly every modern enclosure is a network of <a href="${SLUG}">holding areas</a> that support daily zoo operations.`;
  if (h.includes(OLD)) { h = h.replace(OLD, NEW); await writeFile(f, h); notes.push('pillar backlink'); }
  else notes.push('⚠ pillar phrase not found');
}

// 2) Hub card: insert a real holding-areas card just before the first placeholder card
{
  const f = 'tcb-website/articles.html';
  let h = await readFile(f, 'utf8');
  const anchor = '          <article class="card card--placeholder"';
  const card = `          <article class="card" data-reveal>
            <div class="card__media"><span class="card__tag">Zoo Enclosure Equipment</span><img src="assets/img/zoo-holding-areas.webp" alt="Interconnected stainless steel off-exhibit holding pens with a sealed hygienic floor, fabricated by TCB Metal Works" loading="lazy" decoding="async" width="1024" height="537" /></div>
            <div class="card__body">
              <span class="eyebrow eyebrow--sm">14 min read</span>
              <h3>Zoo Holding Areas</h3>
              <p>The off-exhibit hub of a zoo enclosure — design, safety features, welfare, and custom fabrication.</p>
              <a class="card__link" href="${SLUG}">Read article <svg><use href="#i-arrow"/></svg></a>
            </div>
          </article>
`;
  const i = h.indexOf(anchor);
  if (i !== -1 && !h.includes(`href="${SLUG}"`)) { h = h.slice(0, i) + card + h.slice(i); notes.push('hub card'); }
  else notes.push(h.includes(`href="${SLUG}"`) ? 'hub card already present' : '⚠ hub anchor not found');

  // 3) Blog schema: append holding-areas post
  const schemaAnchor = `        "url": "https://tcbmetalworks.com/shift-gates-for-zoo-enclosures/",
        "image": "https://tcbmetalworks.com/assets/img/shift-gates-og.jpg",
        "datePublished": "2026-07-09",
        "author": { "@type": "Organization", "name": "TCB Metal Works" }
      }
    ]`;
  const schemaNew = `        "url": "https://tcbmetalworks.com/shift-gates-for-zoo-enclosures/",
        "image": "https://tcbmetalworks.com/assets/img/shift-gates-og.jpg",
        "datePublished": "2026-07-09",
        "author": { "@type": "Organization", "name": "TCB Metal Works" }
      },
      {
        "@type": "BlogPosting",
        "headline": "Zoo Holding Areas: Design, Safety & Best Practices for Modern Animal Enclosures",
        "url": "https://tcbmetalworks.com/zoo-holding-areas/",
        "image": "https://tcbmetalworks.com/assets/img/zoo-holding-areas-og.jpg",
        "datePublished": "2026-07-10",
        "author": { "@type": "Organization", "name": "TCB Metal Works" }
      }
    ]`;
  if (h.includes(schemaAnchor)) { h = h.replace(schemaAnchor, schemaNew); notes.push('blog schema'); }
  else notes.push('⚠ schema anchor not found');

  await writeFile(f, h);
}

console.log('  ' + notes.join(' | '));
