// TCB Metal Works site scraper -> faithful, editable local mirror
import { writeFile, mkdir, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const ORIGIN = 'https://tcbmetalworks.com';
const OUT = path.resolve('../tcb-metalworks-site');
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36';

// Pages to mirror (path -> local file). Directory-style => folder/index.html
const PAGES = [
  '/',
  '/about-tcb-metal-works/',
  '/metal-fabrication-services/',
  '/metal-fabrication-services/basement-beams-columns/',
  '/metal-fabrication-services/custom-animal-caging/',
  '/metal-fabrication-services/custom-handrails-fences/',
  '/metal-fabrication-services/custom-pergolas/',
  '/metal-fabrication-services/custom-steel-bars-furniture/',
  '/metal-fabrication-services/custom-truck-beds/',
  '/metal-fabrication-services/dumpster-repair-services/',
  '/metal-fabrication-services/heavy-duty-press-brake/',
  '/metal-fabrication-services/large-machining-and-turning/',
  '/metal-fabrication-services/stainless-steel-fabrication/',
  '/blog/',
  '/contact/',
  '/denver-zoo-australia-exhibit/',
  '/how-to-calculate-bending-moment/',
  '/optimize-large-weldments-industrial-fabrication-solutions/',
  '/repo-style-tow-truck-wheel-lift/',
  '/understanding-different-grades-of-steel-and-their-applications/',
  '/university-of-miami-swine-pens/',
];

const assetQueue = new Set();   // absolute URLs (same origin) to download
const downloaded = new Set();
const failed = [];

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function fetchBuf(url, tries = 3) {
  for (let i = 0; i < tries; i++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': UA, 'Accept': '*/*' } });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const buf = Buffer.from(await res.arrayBuffer());
      return { buf, type: res.headers.get('content-type') || '' };
    } catch (e) {
      if (i === tries - 1) throw e;
      await sleep(500 * (i + 1));
    }
  }
}

// Map an absolute same-origin URL to a local relative path (mirrors URL structure)
function urlToLocal(u) {
  const url = new URL(u);
  let p = decodeURIComponent(url.pathname);
  if (p.endsWith('/')) p += 'index.html';
  if (p === '' ) p = '/index.html';
  // strip leading slash
  return p.replace(/^\//, '');
}

function isSameOrigin(u) {
  try { return new URL(u, ORIGIN).origin === ORIGIN; } catch { return false; }
}

// Collect asset URLs from HTML
function collectFromHtml(html) {
  const urls = new Set();
  const push = (raw) => {
    if (!raw) return;
    raw = raw.trim().replace(/&amp;/g, '&');
    if (raw.startsWith('data:') || raw.startsWith('#') || raw.startsWith('mailto:') || raw.startsWith('tel:') || raw.startsWith('javascript:')) return;
    let abs;
    try { abs = new URL(raw, ORIGIN).href; } catch { return; }
    if (!isSameOrigin(abs)) return;
    const pathname = new URL(abs).pathname;
    // asset extensions only (skip page html links here)
    if (/\.(css|js|mjs|png|jpe?g|gif|svg|webp|avif|ico|woff2?|ttf|eot|otf|mp4|webm|pdf|json)(\?|$)/i.test(pathname)) {
      urls.add(abs.split('#')[0]);
    }
  };
  // src / href
  for (const m of html.matchAll(/(?:src|href)\s*=\s*"([^"]+)"/gi)) push(m[1]);
  for (const m of html.matchAll(/(?:src|href)\s*=\s*'([^']+)'/gi)) push(m[1]);
  // srcset
  for (const m of html.matchAll(/srcset\s*=\s*"([^"]+)"/gi)) {
    for (const part of m[1].split(',')) push(part.trim().split(/\s+/)[0]);
  }
  // inline url(...)
  for (const m of html.matchAll(/url\(\s*['"]?([^'")]+)['"]?\s*\)/gi)) push(m[1]);
  // data-* image attributes (lazy load)
  for (const m of html.matchAll(/data-(?:src|bg|background|lazy[^=]*)\s*=\s*"([^"]+)"/gi)) push(m[1]);
  return urls;
}

function collectFromCss(css) {
  const urls = new Set();
  for (const m of css.matchAll(/url\(\s*['"]?([^'")]+)['"]?\s*\)/gi)) {
    let raw = m[1].trim();
    if (raw.startsWith('data:')) continue;
    let abs;
    try { abs = new URL(raw, ORIGIN).href; } catch { continue; }
    if (isSameOrigin(abs)) urls.add(abs.split('#')[0]);
  }
  for (const m of css.matchAll(/@import\s+['"]([^'"]+)['"]/gi)) {
    let abs; try { abs = new URL(m[1], ORIGIN).href; } catch { continue; }
    if (isSameOrigin(abs)) urls.add(abs.split('#')[0]);
  }
  return urls;
}

// Rewrite absolute origin URLs in HTML to root-relative "/..."; keep external as-is
function rewriteHtml(html) {
  // og:image and canonical keep absolute? For local we make same-origin root-relative.
  html = html.replace(/https?:\/\/tcbmetalworks\.com/gi, '');
  html = html.replace(/\/\/tcbmetalworks\.com/gi, '');
  return html;
}

function rewriteCss(css, cssUrl) {
  // rewrite same-origin url() to root-relative
  return css.replace(/url\(\s*(['"]?)([^'")]+)\1\s*\)/gi, (full, q, raw) => {
    if (raw.startsWith('data:')) return full;
    let abs; try { abs = new URL(raw, cssUrl).href; } catch { return full; }
    if (!isSameOrigin(abs)) return full;
    const local = '/' + urlToLocal(abs);
    return `url(${q}${local}${q})`;
  }).replace(/@import\s+(['"])([^'"]+)\1/gi, (full, q, raw) => {
    let abs; try { abs = new URL(raw, cssUrl).href; } catch { return full; }
    if (!isSameOrigin(abs)) return full;
    return `@import ${q}/${urlToLocal(abs)}${q}`;
  });
}

async function saveFile(localRel, buf) {
  const full = path.join(OUT, localRel);
  await mkdir(path.dirname(full), { recursive: true });
  await writeFile(full, buf);
}

async function run() {
  await mkdir(OUT, { recursive: true });

  // 1) Download & save pages, collect assets
  for (const p of PAGES) {
    const url = ORIGIN + p;
    process.stdout.write('PAGE ' + p + ' ... ');
    try {
      const { buf } = await fetchBuf(url);
      let html = buf.toString('utf8');
      for (const a of collectFromHtml(html)) assetQueue.add(a);
      html = rewriteHtml(html);
      const local = urlToLocal(url);
      await saveFile(local, Buffer.from(html, 'utf8'));
      console.log('ok -> ' + local + ' (' + assetQueue.size + ' assets queued)');
    } catch (e) {
      console.log('FAIL ' + e.message);
      failed.push(url + ' :: ' + e.message);
    }
    await sleep(150);
  }

  // 2) Download assets (CSS parsed recursively for more assets)
  const queue = [...assetQueue];
  for (let i = 0; i < queue.length; i++) {
    const url = queue[i];
    if (downloaded.has(url)) continue;
    downloaded.add(url);
    const local = urlToLocal(url);
    const isCss = /\.css(\?|$)/i.test(url);
    // resume: skip non-CSS assets already saved (CSS still needs re-parse for sub-assets)
    if (!isCss && existsSync(path.join(OUT, local))) { continue; }
    process.stdout.write(`ASSET [${i + 1}/${queue.length}] ${local} ... `);
    try {
      const { buf } = await fetchBuf(url);
      if (isCss) {
        let css = buf.toString('utf8');
        for (const a of collectFromCss(css)) {
          if (!downloaded.has(a) && !queue.includes(a)) queue.push(a);
        }
        css = rewriteCss(css, url);
        await saveFile(local, Buffer.from(css, 'utf8'));
      } else {
        await saveFile(local, buf);
      }
      console.log('ok');
    } catch (e) {
      console.log('FAIL ' + e.message);
      failed.push(url + ' :: ' + e.message);
    }
    await sleep(40);
  }

  console.log('\n=== DONE ===');
  console.log('Pages: ' + PAGES.length + ' | Assets downloaded: ' + downloaded.size);
  if (failed.length) {
    console.log('\nFAILURES (' + failed.length + '):');
    failed.forEach(f => console.log('  ' + f));
  }
  await writeFile(path.join(OUT, '_scrape-report.txt'),
    `Pages: ${PAGES.length}\nAssets: ${downloaded.size}\nFailures: ${failed.length}\n\n` + failed.join('\n'));
}

run();
