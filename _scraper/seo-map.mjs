import { readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
const ROOT = path.resolve('../tcb-metalworks-site');
async function walk(d){let out=[];for(const e of await readdir(d,{withFileTypes:true})){const f=path.join(d,e.name);if(e.isDirectory()){if(/wp-content|wp-includes/.test(e.name))continue;out=out.concat(await walk(f));}else if(e.name.endsWith('.html'))out.push(f);}return out;}
const dec = s => s.replace(/&amp;/g,'&').replace(/&mdash;/g,'—').replace(/&#\d+;/g,'').replace(/\|/g,'\\|').trim();
const files=await walk(ROOT);
let md = `# SEO Map — TCB Metal Works\n\nCurrent on-page SEO for every page in the mirror. Use it as a worksheet for your rewrite.\nGoogle typically shows ~50–60 chars of the title and ~150–160 chars of the meta description.\n\n| Page (file) | Title (len) | Meta description (len) | H1 |\n|---|---|---|---|\n`;
for(const f of files.sort()){
  const h=await readFile(f,'utf8');
  const rel=path.relative(ROOT,f).replace(/\\/g,'/');
  const title=(h.match(/<title>([^<]*)<\/title>/i)||[])[1]||'';
  const desc=(h.match(/<meta name="description" content="([^"]*)"/i)||[])[1]||'';
  const h1raw=(h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)||[])[1]||'';
  const h1=h1raw.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
  md += `| \`${rel}\` | ${dec(title)} _(${title.length})_ | ${dec(desc)} _(${desc.length})_ | ${dec(h1)} |\n`;
}
md += `\n**Flags to watch:** titles over ~60 chars get truncated in search results; the leading "#1" in several titles is unusual and may read as spammy. Meta descriptions over ~160 chars get cut off.\n`;
await writeFile(path.join(ROOT,'SEO-MAP.md'), md);
console.log('Wrote SEO-MAP.md ('+files.length+' pages)');
