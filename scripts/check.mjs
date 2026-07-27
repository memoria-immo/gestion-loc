#!/usr/bin/env node
// Contrôles de cohérence du repo — zéro dépendance.
// - chaque skills/*/SKILL.md a un frontmatter avec name (= nom du dossier) et description
// - chaque fiche data/*.md porte une ligne « Dernière vérification »
// - les liens Markdown relatifs pointent vers des fichiers existants
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';

const ROOT = resolve(dirname(new URL(import.meta.url).pathname), '..');
const errors = [];

function parseFrontmatter(content) {
  if (!content.startsWith('---\n')) return null;
  const end = content.indexOf('\n---', 4);
  if (end === -1) return null;
  const fields = {};
  for (const line of content.slice(4, end).split('\n')) {
    const m = line.match(/^([a-z_-]+):\s*(.*)$/);
    if (m) fields[m[1]] = m[2].trim();
  }
  return fields;
}

// 1. Skills
const skillsDir = join(ROOT, 'skills');
for (const name of readdirSync(skillsDir).sort()) {
  const dir = join(skillsDir, name);
  if (!statSync(dir).isDirectory()) continue;
  const skillPath = join(dir, 'SKILL.md');
  if (!existsSync(skillPath)) {
    errors.push(`skills/${name} : SKILL.md manquant`);
    continue;
  }
  const fm = parseFrontmatter(readFileSync(skillPath, 'utf8'));
  if (!fm) errors.push(`skills/${name}/SKILL.md : frontmatter absent ou non refermé`);
  else {
    if (fm.name !== name) errors.push(`skills/${name}/SKILL.md : name « ${fm.name ?? ''} » ≠ dossier « ${name} »`);
    if (!fm.description) errors.push(`skills/${name}/SKILL.md : description absente ou vide`);
  }
}

// 2. Fiches data/
for (const f of readdirSync(join(ROOT, 'data')).sort()) {
  if (!f.endsWith('.md')) continue;
  const content = readFileSync(join(ROOT, 'data', f), 'utf8');
  if (!content.includes('Dernière vérification')) {
    errors.push(`data/${f} : ligne « Dernière vérification » manquante`);
  }
}

// 3. Liens Markdown relatifs
function mdFiles(dir) {
  const out = [];
  for (const entry of readdirSync(dir).sort()) {
    if (entry.startsWith('.') || entry === 'node_modules') continue;
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) out.push(...mdFiles(p));
    else if (entry.endsWith('.md')) out.push(p);
  }
  return out;
}
for (const file of mdFiles(ROOT)) {
  const content = readFileSync(file, 'utf8');
  for (const m of content.matchAll(/\]\(([^)\s]+)\)/g)) {
    const target = m[1];
    if (/^(https?:|mailto:|#)/.test(target)) continue;
    const clean = target.split('#')[0];
    if (!clean) continue;
    if (!existsSync(resolve(dirname(file), clean))) {
      errors.push(`${file.slice(ROOT.length + 1)} : lien cassé → ${target}`);
    }
  }
}

if (errors.length) {
  console.error(`✗ ${errors.length} problème(s) :`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log('✓ skills, fiches data/ et liens relatifs cohérents');
