"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";

const ACCENTS = ["amber", "blue"] as const;
type Accent = (typeof ACCENTS)[number];
const STORAGE_KEY = "accent-preview";

/**
 * Thin notice at the top of every page while the redesign is in progress.
 * Also carries the accent preview switch, so both colours can be compared on
 * the real pages. Remove both by setting `rebuilding: false` in content/site.ts.
 */
export default function RebuildNotice() {
  const [accent, setAccent] = useState<Accent>(site.accent);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "amber" || stored === "blue") setAccent(stored);
    } catch {
      // storage unavailable: stay on the default
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.accent = accent;
  }, [accent]);

  const choose = (next: Accent) => {
    setAccent(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  };

  return (
    <aside aria-label="Site status" className="border-b border-line bg-surface">
      <div className="shell flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-2 text-xs text-muted">
        <p>
          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" aria-hidden="true" />
          this site is being rebuilt. some pages are still being finished.
        </p>
        <div className="flex items-center gap-2" role="group" aria-label="Accent colour preview">
          <span>accent</span>
          {ACCENTS.map((option) => (
            <button
              key={option}
              type="button"
              aria-pressed={accent === option}
              onClick={() => choose(option)}
              className={`px-1 py-1 underline-offset-4 transition-colors hover:text-fg ${
                accent === option ? "text-accent underline" : ""
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
