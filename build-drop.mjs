// Fabrique un paquet déposable directement sur Netlify Drop.
//
// Un déploiement par glisser-déposer ne lance aucune installation : la fonction
// serveur doit donc embarquer sa dépendance (@netlify/blobs). On la compile ici
// en un seul fichier autonome.
//
//   npm install && npm run build:drop   ->  dist-drop/ et defi-netlify.zip

import { build } from 'esbuild';
import fs from 'node:fs/promises';
import path from 'node:path';

const OUT = 'dist-drop';

await fs.rm(OUT, { recursive: true, force: true });
await fs.mkdir(path.join(OUT, 'netlify', 'functions'), { recursive: true });

await build({
  entryPoints: ['netlify/functions/state.mjs'],
  outfile: path.join(OUT, 'netlify', 'functions', 'state.mjs'),
  bundle: true,
  platform: 'node',
  target: 'node18',
  format: 'esm',
  external: ['node:*'],
  legalComments: 'none',
});

await fs.copyFile('challenge/index.html', path.join(OUT, 'index.html'));
await fs.writeFile(path.join(OUT, 'netlify.toml'),
`# Déploiement manuel : le dossier déposé EST la racine du site.
[build]
  publish = "."
  functions = "netlify/functions"
`);
await fs.writeFile(path.join(OUT, '_headers'),
`/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
/index.html
  Cache-Control: no-cache
`);

const fn = await fs.readFile(path.join(OUT, 'netlify', 'functions', 'state.mjs'), 'utf8');
const bare = fn.match(/^\s*(?:import|export)[^;]*from\s+["'](?!node:)[^."'][^"']*["']/m);
if (bare) throw new Error('dépendance non intégrée : ' + bare[0].trim());
if (!/export\s*\{[^}]*as default/.test(fn) && !/export default/.test(fn))
  throw new Error('la fonction n’exporte pas de handler par défaut');

console.log('paquet prêt dans ' + OUT + '/');
console.log('  index.html                    ' + (await fs.stat(path.join(OUT,'index.html'))).size + ' o');
console.log('  netlify/functions/state.mjs   ' + fn.length + ' o (dépendance intégrée)');
