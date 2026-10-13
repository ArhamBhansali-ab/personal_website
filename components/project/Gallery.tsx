"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Shot from "@/components/Shot";
import type { Shot as ShotData } from "@/lib/images";

const SWIPE_PX = 48;

/** Dense image grid. Any tile opens the lightbox: arrow keys, Escape, swipe, captions. */
export default function Gallery({ shots }: { shots: ShotData[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const triggers = useRef<(HTMLButtonElement | null)[]>([]);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStart = useRef<number | null>(null);
  const lastOpen = useRef(0);

  const count = shots.length;
  const step = useCallback(
    (delta: number) => setOpen((value) => (value === null ? value : (value + delta + count) % count)),
    [count],
  );
  const close = useCallback(() => setOpen(null), []);

  const isOpen = open !== null;
  if (open !== null) lastOpen.current = open;

  useEffect(() => {
    if (!isOpen) return;
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      else if (event.key === "ArrowRight") step(1);
      else if (event.key === "ArrowLeft") step(-1);
      else if (event.key === "Tab") {
        const buttons = Array.from(dialogRef.current?.querySelectorAll<HTMLElement>("button") ?? []);
        const first = buttons[0];
        const last = buttons[buttons.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      root.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      // return focus to whichever tile the lightbox was closed on
      // eslint-disable-next-line react-hooks/exhaustive-deps
      triggers.current[lastOpen.current]?.focus();
    };
  }, [isOpen, close, step]);

  const current = open === null ? null : shots[open];

  return (
    <>
      <ul className="columns-2 gap-2 md:columns-3 md:gap-3 xl:columns-4">
        {shots.map((shot, index) => (
          <li key={`${shot.src}-${index}`} className="mb-2 break-inside-avoid md:mb-3">
            <button
              type="button"
              ref={(element) => {
                triggers.current[index] = element;
              }}
              onClick={() => setOpen(index)}
              className="group block w-full cursor-zoom-in text-left"
              aria-label={`Open image ${index + 1} of ${count}: ${shot.alt}`}
            >
              <Shot
                img={shot.img}
                alt={shot.alt}
                label={shot.label}
                aspect={shot.aspect}
                sizes="(min-width: 1280px) 22vw, (min-width: 768px) 30vw, 46vw"
                treated
                zoom
                className="w-full"
              />
            </button>
          </li>
        ))}
      </ul>

      {current && open !== null && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={`Image ${open + 1} of ${count}`}
          data-lenis-prevent
          className="fixed inset-0 z-[90] flex flex-col bg-ink"
          onTouchStart={(event) => {
            touchStart.current = event.touches[0].clientX;
          }}
          onTouchEnd={(event) => {
            if (touchStart.current === null) return;
            const delta = event.changedTouches[0].clientX - touchStart.current;
            touchStart.current = null;
            if (Math.abs(delta) > SWIPE_PX) step(delta < 0 ? 1 : -1);
          }}
        >
          <div className="flex items-center justify-between px-[var(--gutter)] py-4">
            <p className="label" aria-live="polite">
              {String(open + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
            </p>
            <button ref={closeRef} type="button" onClick={close} className="px-2 py-2 text-sm text-fg hover:text-accent">
              close
            </button>
          </div>

          <div className="relative min-h-0 flex-1" onClick={close}>
            {current.img ? (
              <Image
                key={current.src}
                src={current.img.src}
                alt={current.alt}
                fill
                sizes="100vw"
                placeholder="blur"
                blurDataURL={current.img.blurDataURL}
                className="object-contain px-[var(--gutter)]"
              />
            ) : (
              <div className="flex h-full items-center justify-center px-[var(--gutter)]">
                <Shot
                  img={null}
                  alt={current.alt}
                  label={current.label}
                  aspect={current.aspect}
                  sizes="1px"
                  className="max-h-full w-full max-w-3xl"
                />
              </div>
            )}
          </div>

          <div className="flex items-start justify-between gap-6 px-[var(--gutter)] py-4">
            <p className="max-w-2xl text-sm leading-relaxed text-muted">{current.caption ?? current.alt}</p>
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous image"
                className="h-11 w-11 border border-line-strong text-fg hover:border-accent hover:text-accent"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next image"
                className="h-11 w-11 border border-line-strong text-fg hover:border-accent hover:text-accent"
              >
                →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
