"use client";

import { useState } from "react";
import Image from "next/image";
import type { ResolvedImage } from "@/lib/images";

/**
 * Two images stacked; a native range input (keyboard and touch friendly)
 * moves the divider between them.
 */
export default function BeforeAfterSlider({
  before,
  after,
  beforeLabel,
  afterLabel,
  alt,
  aspect,
}: {
  before: ResolvedImage;
  after: ResolvedImage;
  beforeLabel: string;
  afterLabel: string;
  alt: string;
  aspect: string;
}) {
  const [position, setPosition] = useState(50);
  const sizes = "(min-width: 1024px) 832px, 92vw";

  return (
    <div className="shot w-full select-none" style={{ aspectRatio: aspect }}>
      <Image
        src={after.src}
        alt={`${alt} (${afterLabel})`}
        fill
        sizes={sizes}
        placeholder="blur"
        blurDataURL={after.blurDataURL}
        className="object-cover"
      />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <Image
          src={before.src}
          alt={`${alt} (${beforeLabel})`}
          fill
          sizes={sizes}
          placeholder="blur"
          blurDataURL={before.blurDataURL}
          className="object-cover"
        />
      </div>

      <span className="chip absolute left-3 top-3 border-transparent bg-ink text-fg">{beforeLabel}</span>
      <span className="chip absolute right-3 top-3 border-transparent bg-ink text-fg">{afterLabel}</span>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 w-px bg-accent"
        style={{ left: `${position}%` }}
      >
        <span className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent bg-ink" />
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        aria-label={`Compare ${beforeLabel} and ${afterLabel}`}
        className="peer absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
      <span className="pointer-events-none absolute inset-0 hidden outline outline-2 -outline-offset-2 outline-accent peer-focus-visible:block" />
    </div>
  );
}
