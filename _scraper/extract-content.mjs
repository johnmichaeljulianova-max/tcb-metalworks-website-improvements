import { readFile } from 'node:fs/promises';
import path from 'node:path';
const ROOT = path.resolve('../tcb-metalworks-site');
const pages = process.argv.slice(2);
for (const rel of pages) {
  const h = await readFile(path.join(ROOT, rel), 'utf8');
  // isolate body
  let body = (h.match(/<body[\s\S]*<\/body>/i) || [''])[0];
  // drop scripts, styles, svg, noscript
  body = body.replace(/<script[\s\S]*?<\/script>/gi, ' ')
             .replace(/<style[\s\S]*?<\/style>/gi, ' ')
             .replace(/<svg[\s\S]*?<\/svg>/gi, ' ')
             .replace(/<noscript[\s\S]*?<\/noscript>/gi, ' ');
  // capture headings/paragraphs/list items/links/buttons with tags for structure
  const chunks = [];
  const re = /<(h1|h2|h3|h4|h5|h6|p|li|a|button|span)[^>]*>([\s\S]*?)<\/\1>/gi;
  let m;
  while ((m = re.exec(body))) {
    let t = m[2].replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g,' ').replace(/&amp;/g,'&').replace(/&#8217;/g,"'").replace(/&#8211;/g,'–').replace(/&#8220;|&#8221;/g,'"').replace(/\s+/g,' ').trim();
    if (t && t.length > 1) chunks.push(m[1].toUpperCase().padEnd(4) + '| ' + t);
  }
  // dedupe consecutive
  const out = [];
  for (const c of chunks) if (c !== out[out.length-1]) out.push(c);
  console.log('\n\n########## ' + rel + ' ##########');
  console.log(out.join('\n'));
}
