import { readFile } from 'node:fs/promises';
const posts = process.argv.slice(2);
function prose(h){const i=h.indexOf('<article class="prose"');const j=h.indexOf('</article>',i);return h.slice(i,j);}
for (const f of posts) {
  const html = await readFile(`tcb-website/${f}.html`,'utf8');
  const body = prose(html);
  const paras = [...body.matchAll(/<p>([\s\S]*?)<\/p>/g)].map(m=>m[1].replace(/<[^>]+>/g,' ').replace(/&[a-z]+;/g,' ').replace(/\s+/g,' ').trim());
  const sentCount = t => (t.match(/[.!?](\s|$)/g)||[]).length || 1;
  const oneSent = paras.filter(p=>sentCount(p)===1).length;
  // sentence-length stdev across whole prose
  const sents = paras.join(' ').split(/(?<=[.!?])\s+/).filter(s=>s.split(/\s+/).length>3).map(s=>s.split(/\s+/).length);
  const mean = sents.reduce((a,b)=>a+b,0)/sents.length;
  const sd = Math.sqrt(sents.reduce((a,b)=>a+(b-mean)**2,0)/sents.length);
  const words = paras.join(' ').split(/\s+/).filter(Boolean).length;
  const links = (body.match(/<a /g)||[]).length;
  console.log(`${f.slice(0,42).padEnd(44)} paras:${String(paras.length).padStart(3)} 1-sent-paras:${String(oneSent).padStart(3)} sentSD:${sd.toFixed(1).padStart(4)} words(prose):${String(words).padStart(4)} links:${String(links).padStart(3)}`);
}
