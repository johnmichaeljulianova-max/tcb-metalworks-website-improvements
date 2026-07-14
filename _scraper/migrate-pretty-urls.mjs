import { readFile, writeFile, mkdir, rm, readdir } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve('../tcb-website');

// 1) Collect every page + its authoritative pretty path (from its canonical)
const files = (await readdir(ROOT)).filter(f => f.endsWith('.html'));
const map = {};        // filename.html -> site-root pretty path ('' for home, else 'slug/' or 'projects/slug/')
for (const f of files) {
  const s = await readFile(path.join(ROOT, f), 'utf8');
  const m = s.match(/<link rel="canonical" href="https:\/\/tcbmetalworks\.com(\/[^"]*)"/);
  if (!m) { console.error('NO CANONICAL:', f); process.exit(1); }
  const p = m[1] === '/' ? '' : m[1].replace(/^\//, '');   // '' | 'slug/' | 'projects/slug/'
  map[f] = p;
}

const depthOf = p => p === '' ? 0 : p.replace(/\/$/, '').split('/').length;
const rel = (D, T) => T === '' ? (D === 0 ? './' : '../'.repeat(D)) : ('../'.repeat(D) + T);

function rewrite(html, D) {
  return html.replace(/(?<![-\w])((?:href|src)\s*=\s*")([^"]+)(")/gi, (full, pre, val, post) => {
    if (/^(https?:|tel:|mailto:|data:|#)/i.test(val)) return full;   // external / same-page anchor
    const h = val.indexOf('#');
    const p = h >= 0 ? val.slice(0, h) : val;
    const anchor = h >= 0 ? val.slice(h) : '';
    if (p === '') return full;
    let T;
    if (Object.prototype.hasOwnProperty.call(map, p)) T = map[p];    // link to a page
    else if (/^assets\//.test(p)) T = p;                            // asset (site-root path)
    else return full;                                               // unknown -> leave
    return pre + rel(D, T) + anchor + post;
  });
}

// 2) Write each page to its new location with rewritten links; remember old flat files to delete
const toDelete = [];
for (const f of files) {
  const pretty = map[f];
  const D = depthOf(pretty);
  const newRel = pretty === '' ? 'index.html' : pretty + 'index.html';
  const html = rewrite(await readFile(path.join(ROOT, f), 'utf8'), D);
  const dest = path.join(ROOT, newRel);
  await mkdir(path.dirname(dest), { recursive: true });
  await writeFile(dest, html);
  if (newRel !== f) toDelete.push(f);
  console.log(`${f.padEnd(46)} depth ${D}  ->  ${newRel}`);
}

// 3) Delete the old flat files (all except index.html, which stays at root)
for (const f of toDelete) await rm(path.join(ROOT, f));

// 4) Emit the new pages[] list for the validators
const pagesList = files.map(f => map[f] === '' ? 'index.html' : map[f] + 'index.html');
console.log('\nNEW_PAGES_ARRAY=' + JSON.stringify(pagesList));
console.log(`\nMoved ${toDelete.length} pages into folders; home stays at root.`);
