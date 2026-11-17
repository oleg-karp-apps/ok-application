import { mkdir, rm, copyFile } from 'node:fs/promises';
const output = new URL('../dist/', import.meta.url);
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const name of ['index.html', 'app.js', 'sw.js', 'manifest.webmanifest', 'icon.svg']) {
  await copyFile(new URL(`../${name}`, import.meta.url), new URL(name, output));
}
console.log('Static app built in dist/');
