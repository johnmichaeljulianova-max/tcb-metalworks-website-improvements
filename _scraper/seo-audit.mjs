import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
const ROOT = path.resolve('../tcb-metalworks-site');
async function walk(d){let out=[];for(const e of await readdir(d,{withFileTypes:true})){const f=path.join(d,e.name);if(e.isDirectory()){if(/wp-content|wp-includes/.test(e.name))continue;out=out.concat(await walk(f));}else if(e.name.endsWith('.html'))out.push(f);}return out;}
const files=await walk(ROOT);
const rows=[];
for(const f of files.sort()){
  const h=await readFile(f,'utf8');
  const title=(h.match(/<title>([^<]*)<\/title>/i)||[])[1]||'';
  const desc=(h.match(/<meta name="description" content="([^"]*)"/i)||[])[1]||'';
  const h1raw=(h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)||[])[1]||'';
  const h1=h1raw.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
  rows.push({
    rel: path.relative(ROOT,f).replace(/\\/g,'/'),
    title: title.replace(/&amp;/g,'&').trim(),
    descLen: desc.length,
    desc: desc.replace(/&amp;/g,'&').trim(),
    h1,
  });
}
console.log(JSON.stringify(rows,null,1));
