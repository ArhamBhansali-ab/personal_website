import Image from "next/image";
import type { ResolvedImage } from "@/lib/images";

type ShotProps = {
  img: ResolvedImage | null;
  alt: string;
  /** placeholder text describing the photo that belongs here */
  label?: string;
  /** CSS aspect-ratio such as "4/3"; omit to use the photo's own ratio */
  aspect?: string;
  sizes: string;
  priority?: boolean;
  /** desaturated + dithered at rest, full colour when the parent .group is hovered or focused */
  treated?: boolean;
  /** scale slightly when the parent .group is hovered */
  zoom?: boolean;
  /** show the whole image inside the frame instead of cropping to fill */
  contain?: boolean;
  className?: string;
};

/**
 * One image slot. Renders the processed photo when it exists in the manifest,
 * otherwise a neutral placeholder of the same shape that says what goes there.
 */
export default function Shot({
  img,
  alt,
  label,
  aspect,
  sizes,
  priority = false,
  treated = false,
  zoom = false,
  contain = false,
  className = "",
}: ShotProps) {
  const ratio = aspect ?? (img ? `${img.width}/${img.height}` : "4/3");

  if (!img) {
    return (
      <span
        role="img"
        aria-label={`Placeholder: ${alt}`}
        className={`shot shot--placeholder ${className}`}
        style={{ aspectRatio: ratio }}
      >
        <span className="shot__label">{label ?? alt}</span>
      </span>
    );
  }

  return (
    <span
      className={`shot ${treated ? "shot--treated" : ""} ${zoom ? "shot--zoom" : ""} ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <Image
        src={img.src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        placeholder="blur"
        blurDataURL={img.blurDataURL}
        className={`shot__img ${contain ? "!object-contain py-4" : ""}`}
      />
      {treated && !contain && img.dither && (
        // decorative texture layer, already tiny, so skip the optimiser
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={img.dither}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="shot__dither absolute inset-0 h-full w-full"
        />
      )}
    </span>
  );
}
