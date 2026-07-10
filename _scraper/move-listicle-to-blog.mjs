import { readFile, writeFile } from 'node:fs/promises';
const notes = [];

// A) resources.html #blog — add the listicle as the FIRST card in the Blog section
{
  const f = 'tcb-website/resources.html';
  let h = await readFile(f, 'utf8');
  const anchor = `          <article class="card" data-reveal>
            <div class="card__media"><img src="assets/img/blog-weldments.jpg"`;
  const newCard = `          <article class="card" data-reveal>
            <div class="card__media"><img src="assets/img/safe-zoo-enclosure-design.webp" alt="A complete zoo enclosure system — roof structure, welded mesh walls and keeper door, fabricated by TCB Metal Works" loading="lazy" decoding="async" width="1000" height="586" /></div>
            <div class="card__body"><span class="eyebrow eyebrow--sm">Zoo Design · 5 min read</span><h3 style="margin-top:.3rem">How to Design a Safe Zoo Enclosure: 10 Essential Features</h3><a class="card__link" href="how-to-design-a-safe-zoo-enclosure.html">Read article <svg><use href="#i-arrow"/></svg></a></div>
          </article>
`;
  if (h.includes('href="how-to-design-a-safe-zoo-enclosure.html"')) notes.push('blog card already');
  else if (h.includes(anchor)) { h = h.replace(anchor, newCard + anchor); await writeFile(f, h); notes.push('blog card added (resources #blog)'); }
  else notes.push('⚠ resources blog anchor not found');
}

// B) articles.html — remove the listicle grid card (replace with a generic coming-soon) + drop from Blog schema
{
  const f = 'tcb-website/articles.html';
  let h = await readFile(f, 'utf8');

  const listicleCard = `          <article class="card" data-reveal>
            <div class="card__media"><span class="card__tag">Zoo Enclosure Design</span><img src="assets/img/safe-zoo-enclosure-design.webp" alt="A complete zoo enclosure system — roof structure, welded mesh walls and keeper door, fabricated by TCB Metal Works" loading="lazy" decoding="async" width="1000" height="586" /></div>
            <div class="card__body">
              <span class="eyebrow eyebrow--sm">5 min read</span>
              <h3>How to Design a Safe Zoo Enclosure</h3>
              <p>The 10 essential features every safe, modern zoo habitat needs — from steel framing to enrichment.</p>
              <a class="card__link" href="how-to-design-a-safe-zoo-enclosure.html">Read article <svg><use href="#i-arrow"/></svg></a>
            </div>
          </article>`;
  const comingSoon = `          <article class="card card--placeholder" data-reveal aria-label="Upcoming article placeholder">
            <div class="card__media"><svg class="ph-icon" aria-hidden="true"><use href="#i-image"/></svg></div>
            <div class="card__body">
              <span class="ph-cat" aria-hidden="true"></span>
              <h3>More Guides on the Way</h3>
              <p>We’re expanding this library with more expert guides on zoo enclosures and custom fabrication.</p>
              <span class="card__link" aria-disabled="true">Coming soon <svg><use href="#i-arrow"/></svg></span>
            </div>
          </article>`;
  if (h.includes(listicleCard)) { h = h.replace(listicleCard, comingSoon); notes.push('articles grid: card → coming-soon'); }
  else notes.push('⚠ articles listicle card not found');

  // remove the listicle entry from the Blog JSON-LD (make structural-steel the last post again)
  const schemaOld = `      },
      {
        "@type": "BlogPosting",
        "headline": "How to Design a Safe Zoo Enclosure: 10 Essential Features Every Modern Habitat Needs",
        "url": "https://tcbmetalworks.com/how-to-design-a-safe-zoo-enclosure/",
        "image": "https://tcbmetalworks.com/assets/img/safe-zoo-enclosure-design-og.jpg",
        "datePublished": "2026-07-10",
        "author": { "@type": "Organization", "name": "TCB Metal Works" }
      }
    ]`;
  const schemaNew = `      }
    ]`;
  if (h.includes(schemaOld)) { h = h.replace(schemaOld, schemaNew); notes.push('blog schema: listicle removed'); }
  else notes.push('⚠ articles schema block not found');

  await writeFile(f, h);
}

console.log('  ' + notes.join(' | '));
