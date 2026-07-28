#!/usr/bin/env node
// Contrôles de cohérence du repo — zéro dépendance.
// - chaque skills/*/SKILL.md a un frontmatter avec name (= nom du dossier),
//   description (≤ 600 caractères : elle est chargée en contexte à chaque session)
//   et metadata.last_updated (date de dernière revue humaine du skill, AAAA-MM-JJ)
// - chaque fiche data/*.md porte une ligne « Dernière vérification »
// - les liens Markdown relatifs pointent vers des fichiers existants
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';

const ROOT = resolve(dirname(new URL(import.meta.url).pathname), '..');
const errors = [];

const DESCRIPTION_MAX = 600;

// Parseur minimal du sous-ensemble YAML utilisé par les frontmatters du repo :
// scalaires une-ligne (quotés ou non), block scalars (| |- > >-) repliés en une
// ligne logique, et un niveau de mapping imbriqué (metadata:). Pas un parseur
// YAML général : juste ce que les SKILL.md du repo emploient.
function parseFrontmatter(content) {
  if (!content.startsWith('---\n')) return null;
  const end = content.indexOf('\n---', 4);
  if (end === -1) return null;
  const lines = content.slice(4, end).split('\n');
  const fields = {};
  let i = 0;
  while (i < lines.length) {
    const m = lines[i].match(/^([a-z_-]+):\s*(.*)$/);
    if (!m) { i++; continue; }
    const [, key, rawValue] = m;
    if (/^[|>]-?$/.test(rawValue)) {
      // block scalar : replier les lignes indentées suivantes en un paragraphe
      const block = [];
      i++;
      while (i < lines.length && (/^\s+\S/.test(lines[i]) || lines[i].trim() === '')) {
        block.push(lines[i].trim());
        i++;
      }
      fields[key] = block.join(' ').trim();
    } else if (rawValue === '') {
      // mapping imbriqué : collecter les `clé: valeur` indentés
      const nested = {};
      i++;
      while (i < lines.length) {
        const nm = lines[i].match(/^\s+([a-z_-]+):\s*(.*)$/);
        if (!nm) break;
        nested[nm[1]] = nm[2].trim();
        i++;
      }
      fields[key] = nested;
    } else {
      fields[key] = rawValue.trim().replace(/^"([\s\S]*)"$/, '$1');
      i++;
    }
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
    const desc = typeof fm.description === 'string' ? fm.description : '';
    if (!desc) errors.push(`skills/${name}/SKILL.md : description absente ou vide`);
    else if (desc.length > DESCRIPTION_MAX) {
      errors.push(`skills/${name}/SKILL.md : description trop longue (${desc.length} > ${DESCRIPTION_MAX} caractères — elle est chargée en contexte à chaque session)`);
    }
    const lastUpdated = fm.metadata && fm.metadata.last_updated;
    if (!lastUpdated || !/^\d{4}-\d{2}-\d{2}$/.test(lastUpdated)) {
      errors.push(`skills/${name}/SKILL.md : metadata.last_updated absent ou invalide (attendu : date AAAA-MM-JJ de la dernière revue du skill)`);
    }
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
