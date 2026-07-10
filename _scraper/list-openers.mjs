import { readFile } from 'node:fs/promises';
const f = process.argv[2];
let h = await readFile(`tcb-website/${f}.html`,'utf8');
let i=h.indexOf('<article class="prose"'); let j=h.indexOf('</article>',i);
const body=h.slice(i,j);
// split into blocks
const blocks=[...body.matchAll(/<(p|ul|h[23]|figure|div)[\s\S]*?<\/\1>/g)].map(m=>m[0]);
const txt=s=>s.replace(/<[^>]+>/g,' ').replace(/&[a-z]+;/g,' ').replace(/\s+/g,' ').trim();
const sc=t=>(t.match(/[.!?](\s|$)/g)||[]).length||1;
for(let k=0;k<blocks.length-1;k++){
  if(!blocks[k].startsWith('<p>')) continue;
  const t=txt(blocks[k]);
  if(sc(t)===1 && !t.endsWith(':') && t.length<150 && blocks[k+1].startsWith('<p>')){
    console.log(`[${k}] «${t}»`);
  }
}
