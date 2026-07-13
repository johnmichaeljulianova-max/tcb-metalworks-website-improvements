import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
const ROOT = path.resolve('tcb-website');
const pages = ['index.html','zoo-enclosures.html','what-is-zoo-caging.html','zoo-squeeze-cage.html','keeper-doors-for-zoo-enclosures.html','shift-gates-for-zoo-enclosures.html','zoo-holding-areas.html','zoo-enrichment-boxes.html','zoo-mesh-systems.html','structural-steel-framing-zoo-enclosures.html','how-to-design-a-safe-zoo-enclosure.html','choosing-the-right-materials-for-zoo-enclosures.html','common-mistakes-in-zoo-enclosure-design.html','how-to-choose-a-zoo-enclosure-manufacturer.html','zoo-enclosure-manufacturing-process.html','custom-tow-truck-wheel-lift.html','structural-steel-fabrication-project.html','denver-zoo-australia-exhibit.html','university-of-miami-holding-pens.html','projects.html','articles.html','services.html','resources.html','about.html','contact.html'];

const strip = h => h.replace(/<script[\s\S]*?<\/script>/gi,' ').replace(/<style[\s\S]*?<\/style>/gi,' ').replace(/<[^>]+>/g,' ');
const dec = s => s.replace(/&amp;/g,'&').replace(/&mdash;/g,'—').replace(/&#\d+;/g,'');

console.log('PAGE'.padEnd(26),'TTL','DESC','WORDS','H1','HSKIP','IMGS','NOALT','INT','EXT','SCHEMA');
console.log('-'.repeat(110));
let issues = [];
for (const p of pages) {
  const h = await readFile(path.join(ROOT,p),'utf8');
  const title = dec((h.match(/<title>([^<]*)<\/title>/)||[])[1]||'');
  const desc  = dec((h.match(/<meta name="description" content="([^"]*)"/)||[])[1]||'');
  const words = strip(h).split(/\s+/).filter(Boolean).length;
  const h1 = (h.match(/<h1[\s>]/g)||[]).length;

  // heading skip detection (h1->h3 without h2 etc.)
  const seq = [...h.matchAll(/<h([1-6])[\s>]/g)].map(m=>+m[1]);
  let skip = 0;
  for (let i=1;i<seq.length;i++) if (seq[i] - seq[i-1] > 1) skip++;

  const imgs = [...h.matchAll(/<img\b[^>]*>/gi)].map(m=>m[0]);
  const noAlt = imgs.filter(t=>!/\balt\s*=/.test(t)).length;
  const noDim = imgs.filter(t=>!(/\bwidth=/.test(t) && /\bheight=/.test(t))).length;

  const links = [...h.matchAll(/(?<![-\w])href\s*=\s*"([^"]+)"/gi)].map(m=>m[1]);
  const internal = links.filter(l=>/\.html/.test(l) || l.startsWith('#')).length;
  const external = links.filter(l=>/^https?:\/\//.test(l) && !/tcbmetalworks\.com/.test(l)).length;

  const schema = [...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .map(m=>{try{const j=JSON.parse(m[1]);return Array.isArray(j['@type'])?j['@type'].join('+'):j['@type']}catch{return 'INVALID'}});

  const canon = (h.match(/rel="canonical" href="([^"]*)"/)||[])[1]||'MISSING';

  if (title.length<45||title.length>62) issues.push(`${p}: title ${title.length}c (ideal 50-60)`);
  if (desc.length<140||desc.length>160) issues.push(`${p}: desc ${desc.length}c (ideal 145-160)`);
  if (h1!==1) issues.push(`${p}: ${h1} H1s`);
  if (skip) issues.push(`${p}: ${skip} heading-level skip(s)`);
  if (noAlt) issues.push(`${p}: ${noAlt} img missing alt`);
  if (noDim) issues.push(`${p}: ${noDim} img missing width/height (CLS risk)`);
  if (canon==='MISSING') issues.push(`${p}: no canonical`);

  console.log(p.padEnd(26), String(title.length).padEnd(3), String(desc.length).padEnd(4),
    String(words).padEnd(5), String(h1).padEnd(2), String(skip).padEnd(5),
    String(imgs.length).padEnd(4), String(noAlt).padEnd(5), String(internal).padEnd(3),
    String(external).padEnd(3), schema.join(','));
}

// image weight
console.log('\n=== HEAVIEST IMAGES (LCP / bandwidth risk) ===');
const imgDir = path.join(ROOT,'assets/img');
const files = await readdir(imgDir);
const sized = [];
for (const f of files) { const s = await stat(path.join(imgDir,f)); sized.push([f, s.size]); }
sized.sort((a,b)=>b[1]-a[1]).slice(0,8).forEach(([f,s])=>{
  const kb=(s/1024).toFixed(0);
  console.log(`  ${kb.padStart(5)} KB  ${f}${s>300*1024?'   <-- over 300KB':''}`);
});
const total = sized.reduce((a,[,s])=>a+s,0);
const modern = sized.filter(([f])=>/\.(webp|avif)$/i.test(f)).length;
console.log(`  TOTAL ${(total/1024/1024).toFixed(1)} MB across ${sized.length} images | modern formats (webp/avif): ${modern}/${sized.length}`);

console.log('\n=== ISSUES ===');
issues.length ? issues.forEach(i=>console.log('  • '+i)) : console.log('  none');
