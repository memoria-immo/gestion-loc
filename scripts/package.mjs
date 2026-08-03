#!/usr/bin/env node
// Packaging des skills en zips autoportants — zéro dépendance.
//
// Chaque skill est recopié dans un staging avec les ressources communes du
// repo (data/, templates/, LICENSE) : les chemins « data/… » et « templates/… »
// cités par les SKILL.md se résolvent alors dans le dossier du skill, qui
// devient utilisable seul (upload zip claude.ai / Cowork, vendoring memoria).
// Chaque zip contient le dossier du skill à sa racine (annonce-location/SKILL.md).
// Sortie : dist/<skill>.zip — attachés aux releases GitHub par release.yml.
import { execFileSync } from 'node:child_process';
import { copyFileSync, cpSync, existsSync, mkdirSync, mkdtempSync, readdirSync, rmSync, statSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname, resolve } from 'node:path';

const ROOT = resolve(dirname(new URL(import.meta.url).pathname), '..');
const DIST = join(ROOT, 'dist');

// Ressources communes embarquées dans chaque skill — les mêmes que celles que
// memoria vendorise (dossier ou fichier, ignorées si absentes).
const SHARED = ['data', 'templates', 'LICENSE'];

function fail(message) {
  console.error(`✗ ${message}`);
  process.exit(1);
}

try {
  execFileSync('zip', ['-v'], { stdio: 'ignore' });
} catch {
  fail('binaire « zip » introuvable — requis pour produire les archives (apt install zip / brew install zip)');
}

const skillsDir = join(ROOT, 'skills');
const names = readdirSync(skillsDir)
  .sort()
  .filter((n) => statSync(join(skillsDir, n)).isDirectory());
if (names.length === 0) fail('aucun skill dans skills/');

// dist/ purgé : un skill renommé ou retiré ne doit pas laisser un zip orphelin.
rmSync(DIST, { recursive: true, force: true });
mkdirSync(DIST, { recursive: true });

const staging = mkdtempSync(join(tmpdir(), 'location-package-'));
try {
  for (const name of names) {
    if (!existsSync(join(skillsDir, name, 'SKILL.md'))) fail(`skills/${name} : SKILL.md manquant`);
    const dest = join(staging, name);
    cpSync(join(skillsDir, name), dest, { recursive: true });
    for (const extra of SHARED) {
      const src = join(ROOT, extra);
      if (!existsSync(src)) continue;
      if (statSync(src).isDirectory()) cpSync(src, join(dest, extra), { recursive: true });
      else copyFileSync(src, join(dest, extra));
    }
    // Le dossier du skill à la racine du zip : `zip` conserve les chemins
    // relatifs qu'on lui passe, d'où le cwd sur le staging.
    execFileSync('zip', ['-X', '-q', '-r', join(DIST, `${name}.zip`), name, '-x', '*.DS_Store'], { cwd: staging });
    console.log(`✓ dist/${name}.zip`);
  }
} finally {
  rmSync(staging, { recursive: true, force: true });
}
console.log(`✓ ${names.length} zips autoportants dans dist/`);
