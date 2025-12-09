import fs from 'fs/promises';
import path from 'path';

const ROOT = path.resolve(process.cwd(), 'src');
const EXCLUDE = ['node_modules', 'dist', '__tests__'];
const EXTENSIONS = ['.js', '.jsx', '.ts', '.tsx'];
const IGNOREFILES = [/\.test\./i];

function toPascal(str) {
  return str
    .replace(/(^|[-_\s./\\])+([a-zA-Z0-9])/g, (_, __, ch) => ch.toUpperCase())
    .replace(/[^a-zA-Z0-9]/g, '');
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  const dirs = [];
  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (EXCLUDE.includes(entry.name)) continue;
      dirs.push(full);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name);
      if (!EXTENSIONS.includes(ext)) continue;
      if (IGNOREFILES.some(rx => rx.test(entry.name))) continue;
      if (/^index\./i.test(entry.name)) continue;
      files.push(full);
    }
  }
  return { files, dirs };
}

async function generateBarrel(dir) {
  const { files, dirs } = await walk(dir);
  // generate barrel for this dir if there are files
  if (files.length > 0) {
    const rels = files.map(f => path.relative(dir, f));
    const lines = [];
    for (const rel of rels) {
      const parsed = path.parse(rel);
      const name = parsed.name; // without ext
      const importPath = './' + name;
      const exportName = toPascal(name);
      lines.push(`export * from '${importPath}';`);
      lines.push(`export { default as ${exportName} } from '${importPath}';`);
    }
    const content = lines.join('\n') + '\n';
    const outPath = path.join(dir, 'index.js');
    await fs.writeFile(outPath, content, 'utf8');
    console.log(`Wrote barrel: ${path.relative(process.cwd(), outPath)}`);
  }
  // recurse into subdirs
  for (const d of dirs) {
    await generateBarrel(d);
  }
}

async function main() {
  try {
    const stat = await fs.stat(ROOT);
    if (!stat.isDirectory()) throw new Error('src is not a directory');
  } catch (err) {
    console.error('Could not find `src` directory in project root.');
    process.exit(1);
  }
  await generateBarrel(ROOT);
  console.log('Barrel generation complete.');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
