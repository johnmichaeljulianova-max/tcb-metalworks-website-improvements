import { readFile } from 'node:fs/promises';
import path from 'node:path';
const ROOT = path.resolve('tcb-website');
const pages = ['index.html','about-tcb-metal-works/index.html','articles/index.html','choosing-the-right-materials-for-zoo-enclosures/index.html','common-mistakes-in-zoo-enclosure-design/index.html','contact/index.html','projects/custom-tow-truck-wheel-lift/index.html','projects/denver-zoo-australia-exhibit/index.html','how-to-choose-a-zoo-enclosure-manufacturer/index.html','how-to-design-a-safe-zoo-enclosure/index.html','keeper-doors-for-zoo-enclosures/index.html','privacy-policy/index.html','projects/index.html','resources/index.html','metal-fabrication-services/index.html','shift-gates-for-zoo-enclosures/index.html','structural-steel-beams-guide/index.html','projects/structural-steel-fabrication-project/index.html','structural-steel-framing-zoo-enclosures/index.html','projects/university-of-miami-holding-pens/index.html','what-is-zoo-caging/index.html','zoo-enclosure-manufacturing-process/index.html','zoo-enclosures/index.html','zoo-enrichment-boxes/index.html','zoo-holding-areas/index.html','zoo-mesh-systems/index.html','zoo-squeeze-cage/index.html'];
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
