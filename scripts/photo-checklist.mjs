#!/usr/bin/env node
// Lists every image the site asks for that doesn't exist yet, grouped by project.
// Usage: npm run photos:check

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const read = (file) => fs.readFileSync(path.join(ROOT, file), "utf8");

let manifest = {};
try {
  manifest = JSON.parse(read("content/image-manifest.json"));
} catch {
  // nothing processed yet
}

const wanted = new Map(); // src -> label

function collect(text) {
  // YAML frontmatter entries and content/photos.ts objects: src ... label
  for (const match of text.matchAll(/src:\s*"?([^"\s,}]+\.jpg)"?[\s\S]{0,400}?label:\s*"([^"]+)"/g)) {
    if (!wanted.has(match[1])) wanted.set(match[1], match[2]);
  }
  // MDX components: <Figure src="..." ... label="..." />
  for (const match of text.matchAll(/<(?:Figure|FullBleed)\b[^>]*?src="([^"]+)"[^>]*?label="([^"]+)"/g)) {
    if (!wanted.has(match[1])) wanted.set(match[1], match[2]);
  }
  for (const match of text.matchAll(/<BeforeAfter\b[^>]*?before="([^"]+)"[^>]*?after="([^"]+)"[^>]*?label="([^"]+)"/g)) {
    if (!wanted.has(match[1])) wanted.set(match[1], `${match[3]} (before)`);
    if (!wanted.has(match[2])) wanted.set(match[2], `${match[3]} (after)`);
  }
}

const projectsDir = path.join(ROOT, "content", "projects");
for (const file of fs.readdirSync(projectsDir)) {
  if (file.endsWith(".mdx")) collect(read(path.join("content", "projects", file)));
}
collect(read("content/photos.ts"));

const groups = new Map();
for (const [src, label] of wanted) {
  if (manifest[src]) continue;
  const parts = src.split("/").filter(Boolean); // work/<slug>/<name>.jpg or photography/<name>.jpg
  const group = parts[0] === "work" ? parts[1] : parts[0];
  if (!groups.has(group)) groups.set(group, []);
  groups.get(group).push({ file: `photos-raw/${group}/${parts[parts.length - 1]}`, label });
}

let total = 0;
for (const [group, items] of groups) {
  console.log(`\n${group} (${items.length})`);
  for (const item of items) {
    console.log(`  [ ] ${item.file}\n        ${item.label}`);
    total++;
  }
}
console.log(`\n${total} photos missing, ${Object.keys(manifest).length} already processed.`);
