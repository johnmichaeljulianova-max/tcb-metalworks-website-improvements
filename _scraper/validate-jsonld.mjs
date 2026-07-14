import { readFile } from 'node:fs/promises';
import path from 'node:path';
const ROOT = path.resolve('tcb-website');
const pages = ['index.html','zoo-enclosures.html','what-is-zoo-caging.html','zoo-squeeze-cage.html','keeper-doors-for-zoo-enclosures.html','shift-gates-for-zoo-enclosures.html','zoo-holding-areas.html','zoo-enrichment-boxes.html','zoo-mesh-systems.html','structural-steel-framing-zoo-enclosures.html','how-to-design-a-safe-zoo-enclosure.html','choosing-the-right-materials-for-zoo-enclosures.html','common-mistakes-in-zoo-enclosure-design.html','how-to-choose-a-zoo-enclosure-manufacturer.html','zoo-enclosure-manufacturing-process.html','custom-tow-truck-wheel-lift.html','structural-steel-fabrication-project.html','denver-zoo-australia-exhibit.html','university-of-miami-holding-pens.html','projects.html','privacy-policy.html','articles.html','services.html','resources.html','about.html','contact.html'];
let bad=0;
for (const p of pages){
  const h = await readFile(path.join(ROOT,p),'utf8');
  const blocks = [...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m=>m[1]);
  let ok=0, types=[];
  for(const b of blocks){
    try{ const j=JSON.parse(b); const t=Array.isArray(j['@type'])?j['@type'].join('+'):j['@type']; types.push(t); ok++; }
    catch(e){ console.log(`  ${p}: JSON-LD PARSE ERROR: ${e.message}`); bad++; }
  }
  // also title length
  const title=(h.match(/<title>([^<]*)<\/title>/)||[])[1]||'';
  const desc=(h.match(/<meta name="description" content="([^"]*)"/)||[])[1]||'';
  console.log(`${p}: ${blocks.length} JSON-LD [${types.join(', ')}] | title ${title.replace(/&amp;/g,'&').length}c | desc ${desc.replace(/&amp;/g,'&').length}c`);
}
console.log(bad? `\n❌ ${bad} invalid JSON-LD`:'\n✅ All JSON-LD valid');
