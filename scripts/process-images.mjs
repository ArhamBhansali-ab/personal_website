#!/usr/bin/env node
// Turns raw photos into what the site serves.
//
//   photos-raw/<project-slug>/<name>.jpg   ->  public/work/<project-slug>/<name>.jpg
//   photos-raw/photography/<name>.jpg      ->  public/photography/<name>.jpg
//
// For every photo it writes a resized JPEG, a 1-bit dithered PNG (the hover-off
// texture), and an entry in content/image-manifest.json with the dimensions and
// a tiny blur placeholder. Pages only render a real image when it has a
// manifest entry; anything else shows a labelled placeholder.
//
// Usage: npm run photos            (process everything that changed)
//        npm run photos -- --force (reprocess everything)

import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const RAW_DIR = path.join(ROOT, "photos-raw");
const MANIFEST = path.join(ROOT, "content", "image-manifest.json");
const MAX_WIDTH = 2400;
const DITHER_WIDTH = 720;
const EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".tif", ".tiff", ".heic"]);
const force = process.argv.includes("--force");

// 8x8 Bayer matrix, normalised to 0..1
const BAYER = [
  [0, 32, 8, 40, 2, 34, 10, 42],
  [48, 16, 56, 24, 50, 18, 58, 26],
  [12, 44, 4, 36, 14, 46, 6, 38],
  [60, 28, 52, 20, 62, 30, 54, 22],
  [3, 35, 11, 43, 1, 33, 9, 41],
  [51, 19, 59, 27, 49, 17, 57, 25],
  [15, 47, 7, 39, 13, 45, 5, 37],
  [63, 31, 55, 23, 61, 29, 53, 21],
].map((row) => row.map((v) => (v + 0.5) / 64));

const DARK = [11, 11, 11];
const LIGHT = [214, 214, 214];

async function walk(dir) {
  const out = [];
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (EXTENSIONS.has(path.extname(entry.name).toLowerCase())) out.push(full);
  }
  return out;
}

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function dither(input, outFile) {
  const { data, info } = await sharp(input)
    .rotate()
    .resize({ width: DITHER_WIDTH, withoutEnlargement: true })
    .flatten({ background: "#ffffff" })
    .grayscale()
    .normalise()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const out = Buffer.alloc(info.width * info.height * 3);
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const value = data[(y * info.width + x) * info.channels] / 255;
      const colour = value > BAYER[y % 8][x % 8] ? LIGHT : DARK;
      out.set(colour, (y * info.width + x) * 3);
    }
  }
  await sharp(out, { raw: { width: info.width, height: info.height, channels: 3 } })
    .png({ palette: true, colours: 2, compressionLevel: 9 })
    .toFile(outFile);
}

async function processOne(file, manifest) {
  const rel = path.relative(RAW_DIR, file).split(path.sep);
  if (rel.length < 2) {
    console.warn(`skip ${rel.join("/")}: put it in photos-raw/<project-slug>/`);
    return false;
  }
  const group = rel[0];
  const name = slugify(rel.slice(1).join("-").replace(/\.[^.]+$/, ""));
  const publicDir = group === "photography" ? "photography" : path.join("work", group);
  const urlBase = `/${publicDir.split(path.sep).join("/")}/${name}`;
  const outDir = path.join(ROOT, "public", publicDir);
  const outFile = path.join(outDir, `${name}.jpg`);
  const ditherFile = path.join(outDir, `${name}.dither.png`);
  const key = `${urlBase}.jpg`;

  const stat = await fs.stat(file);
  const previous = manifest[key];
  if (!force && previous && previous.sourceMtime === Math.round(stat.mtimeMs)) return false;

  await fs.mkdir(outDir, { recursive: true });
  const input = await fs.readFile(file);

  const main = await sharp(input)
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .flatten({ background: "#ffffff" })
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(outFile);

  await dither(input, ditherFile);

  const blur = await sharp(input)
    .rotate()
    .resize({ width: 16 })
    .flatten({ background: "#ffffff" })
    .jpeg({ quality: 40 })
    .toBuffer();

  manifest[key] = {
    width: main.width,
    height: main.height,
    blurDataURL: `data:image/jpeg;base64,${blur.toString("base64")}`,
    dither: `${urlBase}.dither.png`,
    sourceMtime: Math.round(stat.mtimeMs),
  };
  console.log(`ok   ${key}  ${main.width}x${main.height}`);
  return true;
}

async function main() {
  let manifest = {};
  try {
    manifest = JSON.parse(await fs.readFile(MANIFEST, "utf8"));
  } catch {
    // first run
  }

  const files = await walk(RAW_DIR);
  if (files.length === 0) {
    console.log("No photos found. Drop them in photos-raw/<project-slug>/ and run again.");
    return;
  }

  let changed = 0;
  for (const file of files) {
    try {
      if (await processOne(file, manifest)) changed++;
    } catch (error) {
      console.error(`fail ${path.relative(ROOT, file)}: ${error.message}`);
      process.exitCode = 1;
    }
  }

  // Drop entries whose output file was deleted by hand.
  for (const key of Object.keys(manifest)) {
    try {
      await fs.access(path.join(ROOT, "public", key));
    } catch {
      delete manifest[key];
    }
  }

  const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
  await fs.writeFile(MANIFEST, `${JSON.stringify(sorted, null, 2)}\n`);
  console.log(`${changed} processed, ${files.length - changed} unchanged, ${Object.keys(sorted).length} in manifest`);
}

main();
