import Link from "next/link";
import Shot from "@/components/Shot";
import type { Shot as ShotData } from "@/lib/images";

/** Horizontally scrolling row of photos. Every frame links to the playground (/photography). */
export default function PhotoStrip({ photos }: { photos: ShotData[] }) {
  return (
    <div
      role="region"
      aria-label="Photography, scrolls horizontally"
      tabIndex={0}
      className="no-scrollbar flex snap-x gap-3 overflow-x-auto px-[var(--gutter)] pb-2 md:gap-4"
    >
      {photos.map((photo) => {
        const aspect = photo.aspect ?? (photo.img ? `${photo.img.width}/${photo.img.height}` : "3/2");
        return (
        <Link
          key={photo.src}
          href="/photography"
          className="group block h-[15rem] shrink-0 snap-start md:h-[22rem]"
          style={{ aspectRatio: aspect }}
          aria-label={`${photo.alt}. Open the playground`}
        >
          <Shot
            img={photo.img}
            alt={photo.alt}
            label={photo.label}
            aspect={aspect}
            sizes="(min-width: 768px) 520px, 360px"
            treated
            className="h-full w-full"
          />
        </Link>
        );
      })}
    </div>
  );
}
