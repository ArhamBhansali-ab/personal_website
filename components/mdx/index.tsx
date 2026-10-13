import { Children, ReactNode, isValidElement } from "react";
import Shot from "@/components/Shot";
import BeforeAfterSlider from "@/components/mdx/BeforeAfterSlider";
import { getImage } from "@/lib/images";
import { slugifyHeading } from "@/lib/projects";

// Everything a project page can use inside its .mdx file.
// Props are plain strings so the files stay easy to write by hand.

type ImageProps = {
  src: string;
  alt: string;
  /** what photo belongs here; shown until the file exists */
  label?: string;
  caption?: string;
  /** CSS aspect-ratio, e.g. "16/9" */
  aspect?: string;
};

function Caption({ children }: { children?: ReactNode }) {
  if (!children) return null;
  return <figcaption className="mt-3 max-w-prose text-sm leading-relaxed text-muted">{children}</figcaption>;
}

/** A captioned image at reading width. */
export function Figure({ src, alt, label, caption, aspect }: ImageProps) {
  return (
    <figure className="my-10 max-w-[52rem]">
      <Shot
        img={getImage(src)}
        alt={alt}
        label={label}
        aspect={aspect}
        sizes="(min-width: 1024px) 832px, 92vw"
        className="w-full"
      />
      <Caption>{caption}</Caption>
    </figure>
  );
}

/** An image that runs to the edge of the screen. */
export function FullBleed({ src, alt, label, caption, aspect = "21/9" }: ImageProps) {
  return (
    <figure className="my-14 mx-[calc(-1*var(--gutter))] lg:ml-0">
      <Shot
        img={getImage(src)}
        alt={alt}
        label={label}
        aspect={aspect}
        sizes="(min-width: 1024px) 80vw, 100vw"
        className="w-full max-md:!aspect-[4/3]"
      />
      <div className="px-[var(--gutter)] lg:pl-0">
        <Caption>{caption}</Caption>
      </div>
    </figure>
  );
}

/** Two <Figure>s side by side (stacked on phones). */
export function TwoUp({ children, caption }: { children: ReactNode; caption?: string }) {
  const figures = Children.toArray(children).filter(isValidElement);
  return (
    <figure className="my-10">
      <div className="grid gap-3 sm:grid-cols-2 [&_figure]:my-0 [&_figure]:max-w-none">{figures}</div>
      <Caption>{caption}</Caption>
    </figure>
  );
}

/** A row of phone screenshots, kept at phone size instead of stretched to the column. */
export function Phones({ children, caption }: { children: ReactNode; caption?: string }) {
  const figures = Children.toArray(children).filter(isValidElement);
  return (
    <figure className="my-10">
      <div className="flex flex-wrap gap-3 sm:gap-5 [&_figure]:my-0 [&_figure]:w-[calc(50%-0.375rem)] sm:[&_figure]:w-56">
        {figures}
      </div>
      <Caption>{caption}</Caption>
    </figure>
  );
}

/** Before/after comparison with a draggable divider. */
export function BeforeAfter({
  before,
  after,
  beforeLabel = "before",
  afterLabel = "after",
  alt,
  label,
  caption,
  aspect = "16/9",
}: {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
  alt: string;
  label?: string;
  caption?: string;
  aspect?: string;
}) {
  const beforeImage = getImage(before);
  const afterImage = getImage(after);
  return (
    <figure className="my-10 max-w-[52rem]">
      {beforeImage && afterImage ? (
        <BeforeAfterSlider
          before={beforeImage}
          after={afterImage}
          beforeLabel={beforeLabel}
          afterLabel={afterLabel}
          alt={alt}
          aspect={aspect}
        />
      ) : (
        <Shot
          img={null}
          alt={alt}
          label={`${label ?? alt} [before/after slider: needs ${before} and ${after}]`}
          aspect={aspect}
          sizes="1px"
          className="w-full"
        />
      )}
      <Caption>{caption}</Caption>
    </figure>
  );
}

function youtubeId(url: string): string | null {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
  return match ? match[1] : null;
}

/** A YouTube link or a video file. Leave `src` empty to show a placeholder. */
export function Video({
  src,
  title,
  label,
  caption,
  aspect = "16/9",
}: {
  src?: string;
  title: string;
  label?: string;
  caption?: string;
  aspect?: string;
}) {
  const id = src ? youtubeId(src) : null;
  return (
    <figure className="my-10 max-w-[52rem]">
      {!src ? (
        <Shot img={null} alt={title} label={`${label ?? title} [video]`} aspect={aspect} sizes="1px" className="w-full" />
      ) : id ? (
        <div className="shot w-full" style={{ aspectRatio: aspect }}>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}`}
            title={title}
            loading="lazy"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
      ) : (
        <video
          src={src}
          controls
          playsInline
          preload="none"
          aria-label={title}
          className="w-full bg-surface"
          style={{ aspectRatio: aspect }}
        />
      )}
      <Caption>{caption}</Caption>
    </figure>
  );
}

/** The list under "Key decisions". */
export function Decisions({ children }: { children: ReactNode }) {
  return <ol className="!mt-8 !max-w-none !list-none border-t border-line !pl-0">{children}</ol>;
}

export function Decision({
  title,
  rejected,
  children,
}: {
  title: string;
  /** the alternative that lost */
  rejected?: string;
  children: ReactNode;
}) {
  return (
    <li className="!mt-0 grid gap-x-8 gap-y-2 border-b border-line py-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
      <h3 className="!mt-0 font-serif !text-2xl !font-normal leading-tight text-fg">{title}</h3>
      <div className="text-base leading-relaxed [&>p]:max-w-none">
        {children}
        {rejected && (
          <p className="mt-3 text-sm text-muted">
            <span className="label mr-2">instead of</span>
            {rejected}
          </p>
        )}
      </div>
    </li>
  );
}

/** Wraps "What I learned": first-person, set in a wider serif. */
export function Reflection({ children }: { children: ReactNode }) {
  return <div className="reflection !mt-8 border-l border-accent pl-5 md:pl-8">{children}</div>;
}

export function PullQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="!my-12 !max-w-4xl !border-0 !pl-0 font-serif text-display-md italic text-fg">
      {children}
    </blockquote>
  );
}

/** A visible reminder of something still to write. Search the content folder for "TODO" to find them all. */
export function Todo({ children }: { children: ReactNode }) {
  return (
    <aside className="max-w-prose border border-dashed border-line-strong px-4 py-3 text-sm leading-relaxed text-muted [&>p]:inline">
      <span className="label mr-2 text-accent">TODO:</span>
      {children}
    </aside>
  );
}

function textOf(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (isValidElement<{ children?: ReactNode }>(node)) return textOf(node.props.children);
  return "";
}

/** Section heading. The id matches the table of contents. */
function SectionHeading({ children }: { children?: ReactNode }) {
  return (
    <h2 id={slugifyHeading(textOf(children))} className="section-title">
      {children}
    </h2>
  );
}

export const mdxComponents = {
  h2: SectionHeading,
  Figure,
  FullBleed,
  TwoUp,
  Phones,
  BeforeAfter,
  Video,
  Decisions,
  Decision,
  Reflection,
  PullQuote,
  Todo,
};
