import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve('tcb-website');
const AUTHOR = '    "author": { "@type": "Organization", "name": "TCB Metal Works", "url": "https://tcbmetalworks.com/" },';
const log = [];

// verified-live Wikipedia entities
const W = {
  zoo:        ['Zoo', 'https://en.wikipedia.org/wiki/Zoo'],
  welfare:    ['Animal welfare', 'https://en.wikipedia.org/wiki/Animal_welfare'],
  keeper:     ['Zookeeper', 'https://en.wikipedia.org/wiki/Zookeeper'],
  enrichment: ['Behavioral enrichment', 'https://en.wikipedia.org/wiki/Behavioral_enrichment'],
  mesh:       ['Welded wire mesh', 'https://en.wikipedia.org/wiki/Welded_wire_mesh'],
  steel:      ['Structural steel', 'https://en.wikipedia.org/wiki/Structural_steel'],
};
const A = (url, text) => `<a href="${url}" target="_blank" rel="noopener">${text}</a>`;

// per-article config: schema `about` entities + one in-body contextual link (find→replace, BODY only)
const cfg = {
  'what-is-zoo-caging.html':               { about: [W.zoo, W.welfare],       find: 'animal welfare',            link: A(W.welfare[1], 'animal welfare') },
  'zoo-squeeze-cage.html':                 { about: [W.welfare, W.zoo],       find: 'animal welfare',            link: A(W.welfare[1], 'animal welfare') },
  'keeper-doors-for-zoo-enclosures.html':  { about: [W.keeper, W.zoo],        find: 'animal welfare',            link: A(W.welfare[1], 'animal welfare') },
  'shift-gates-for-zoo-enclosures.html':   { about: [W.zoo, W.welfare],       find: 'animal welfare',            link: A(W.welfare[1], 'animal welfare') },
  'zoo-holding-areas.html':                { about: [W.zoo, W.welfare],       find: 'animal welfare',            link: A(W.welfare[1], 'animal welfare') },
  'zoo-enrichment-boxes.html':             { about: [W.enrichment, W.welfare], find: 'through environmental enrichment', link: 'through ' + A(W.enrichment[1], 'environmental enrichment') },
  'zoo-mesh-systems.html':                 { about: [W.mesh, W.steel],        find: 'facilities is welded wire mesh', link: 'facilities is ' + A(W.mesh[1], 'welded wire mesh') },
};

for (const [file, c] of Object.entries(cfg)) {
  const p = path.join(ROOT, file);
  let h = await readFile(p, 'utf8');
  const before = h;
  const notes = [];

  // 1) schema `about` entities (into BlogPosting, before author)
  if (!h.includes('"about"')) {
    const aboutJson = `    "about": [\n` +
      c.about.map(([n, u]) => `      { "@type": "Thing", "name": ${JSON.stringify(n)}, "sameAs": ${JSON.stringify(u)} }`).join(',\n') +
      `\n    ],\n`;
    if (h.includes(AUTHOR)) { h = h.replace(AUTHOR, aboutJson + AUTHOR); notes.push('about'); }
    else notes.push('⚠no-author-anchor');
  } else notes.push('about-exists');

  // 2) og:image:width/height after the og:image line (article og images are all 1200x630)
  if (!h.includes('og:image:width')) {
    h = h.replace(/(<meta property="og:image" content="[^"]*" \/>)/,
      `$1\n  <meta property="og:image:width" content="1200" />\n  <meta property="og:image:height" content="630" />`);
    notes.push('og-dims');
  }

  // 3) one contextual outbound link — BODY only (never touch head meta/schema)
  const hi = h.indexOf('</head>');
  let head = h.slice(0, hi), body = h.slice(hi);
  if (!body.includes('en.wikipedia.org')) {
    const i = body.indexOf(c.find);
    if (i !== -1) { body = body.slice(0, i) + c.link + body.slice(i + c.find.length); notes.push('body-link'); }
    else notes.push('⚠link-phrase-not-found');
  } else notes.push('link-exists');
  h = head + body;

  if (h !== before) await writeFile(p, h);
  log.push(`${file}: ${notes.join(', ')}`);
}

// 4) pillar <title> trim (64c -> 53c)
{
  const p = path.join(ROOT, 'what-is-zoo-caging.html');
  let h = await readFile(p, 'utf8');
  const OLD = '<title>What Is Zoo Caging? Design Principles, Safety Features &amp; Systems</title>';
  const NEW = '<title>What Is Zoo Caging? Design, Safety &amp; Enclosure Systems</title>';
  if (h.includes(OLD)) { h = h.replace(OLD, NEW); await writeFile(p, h); log.push('pillar-title: trimmed'); }
  else log.push('pillar-title: ⚠anchor not found');
}

// 5) cta-bg width/height across ALL pages (clears CLS flag; decorative but good hygiene)
{
  const OLD = '<img src="assets/img/cta-bg.webp" alt="" aria-hidden="true" loading="lazy" />';
  const NEW = '<img src="assets/img/cta-bg.webp" alt="" aria-hidden="true" loading="lazy" width="1312" height="1070" />';
  let n = 0;
  for (const f of await readdir(ROOT)) {
    if (!f.endsWith('.html')) continue;
    const p = path.join(ROOT, f);
    let h = await readFile(p, 'utf8');
    if (h.includes(OLD)) { await writeFile(p, h.replace(OLD, NEW)); n++; }
  }
  log.push(`cta-bg dims: ${n} pages`);
}

console.log(log.join('\n'));
