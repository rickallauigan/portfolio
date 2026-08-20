import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { extname, join, relative } from 'node:path';

const root = new URL('../dist/', import.meta.url).pathname;
if (!existsSync(root))
  throw new Error('dist is missing; run npm run build first');

const files = [];
const walk = (directory) => {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) walk(path);
    else files.push(path);
  }
};
walk(root);

const htmlFiles = files.filter((file) => extname(file) === '.html');
const errors = [];
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  for (const match of html.matchAll(/\shref=["']([^"']+)["']/g)) {
    const href = match[1];
    if (!href || /^(https?:|mailto:|#)/.test(href)) continue;
    const pathname = href.split(/[?#]/)[0];
    if (!pathname.startsWith('/')) continue;
    const target = pathname.endsWith('/')
      ? join(root, pathname, 'index.html')
      : join(root, pathname);
    const fallback = `${target}.html`;
    if (!existsSync(target) && !existsSync(fallback))
      errors.push(`${relative(root, file)} -> ${href}`);
  }
}
if (errors.length) {
  console.error(`Broken internal links:\n${errors.join('\n')}`);
  process.exit(1);
}
console.log(
  `Checked ${htmlFiles.length} generated HTML files; internal links resolve.`,
);
