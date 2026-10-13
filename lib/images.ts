import manifest from "@/content/image-manifest.json";

type ManifestEntry = {
  width: number;
  height: number;
  blurDataURL: string;
  dither?: string;
};

export type ResolvedImage = {
  src: string;
  width: number;
  height: number;
  blurDataURL: string;
  dither?: string;
};

/** What a page asks for: a path under /public plus the words that describe it. */
export type ShotSpec = {
  src: string;
  alt: string;
  /** shown on the placeholder until the real photo exists, e.g. "motorbike: battery pack wiring close-up" */
  label?: string;
  caption?: string;
  /** CSS aspect-ratio, e.g. "4/3". Defaults to the photo's own ratio, or 4/3 for placeholders. */
  aspect?: string;
  /** "contain" shows the whole image inside its frame (for phone screenshots) instead of cropping to fill */
  fit?: "cover" | "contain";
};

export type Shot = ShotSpec & { img: ResolvedImage | null };

const entries = manifest as Record<string, ManifestEntry>;

/** Returns the processed image for a path, or null if `npm run photos` hasn't produced it yet. */
export function getImage(src: string | undefined): ResolvedImage | null {
  if (!src) return null;
  const entry = entries[src];
  if (!entry) return null;
  return {
    src,
    width: entry.width,
    height: entry.height,
    blurDataURL: entry.blurDataURL,
    dither: entry.dither,
  };
}

export function resolveShot(spec: ShotSpec): Shot {
  return { ...spec, img: getImage(spec.src) };
}
