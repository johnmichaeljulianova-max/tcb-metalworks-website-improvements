import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
const ROOT = path.resolve('tcb-website');
const pages = ['index.html','zoo-enclosures.html','services.html','resources.html','about.html','contact.html'];
const OLD = '<li><a href="resources.html#blog">Blog</a></li>';
const NEW = '<li><a href="articles.html">Articles</a></li>\n              <li><a href="resources.html#blog">Blog</a></li>';
for (const p of pages) {
  const f = path.join(ROOT, p);
  let h = await readFile(f, 'utf8');
  if (h.includes('<li><a href="articles.html">Articles</a></li>')) { console.log(`${p}: already has Articles`); continue; }
  if (!h.includes(OLD)) { console.log(`${p}: PATTERN NOT FOUND`); continue; }
  h = h.replace(OLD, NEW);
  await writeFile(f, h);
  console.log(`${p}: added Articles to Resources dropdown`);
}
