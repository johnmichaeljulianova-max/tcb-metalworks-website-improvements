import { readFile } from 'node:fs/promises';
const h = await readFile('tcb-website/what-is-zoo-caging.html','utf8');
const m = h.match(/<article class="prose"[\s\S]*?<\/article>/);
if(!m){ console.log('prose not found'); process.exit(1); }
const text = m[0]
  .replace(/<!--[\s\S]*?-->/g,' ')
  .replace(/<[^>]+>/g,' ')
  .replace(/&[a-z]+;/gi,' ')
  .replace(/\s+/g,' ')
  .trim();
const words = text.split(' ').filter(Boolean).length;
console.log('words:', words);
for (const wpm of [200,225,238]) console.log(`  @${wpm}wpm -> ${Math.round(words/wpm)} min`);
