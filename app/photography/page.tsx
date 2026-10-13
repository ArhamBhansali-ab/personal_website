import Shot from "@/components/Shot";
import PageHeader from "@/components/site/PageHeader";
import { photos } from "@/content/photos";
import { site } from "@/content/site";
import { resolveShot } from "@/lib/images";

export const metadata = {
  title: "Playground",
  description: "Hobbies I keep trying out: photography, DJing, guitar, and a bunch of sports.",
};

export default function Playground() {
  const shots = photos.map(resolveShot);
  const hasPhotos = shots.some((shot) => shot.img);

  return (
    <>
      <PageHeader
        label="Playground"
        title={
          <>
            things i&apos;m <em className="text-accent">trying out.</em>
          </>
        }
      />

      <div className="shell">
        <p className="max-w-4xl font-serif text-display-sm leading-[1.22] text-fg">{site.playground}</p>

        <div className="hairline mt-20 flex items-baseline justify-between gap-6 pt-5">
          <div className="flex items-baseline gap-4 md:gap-8">
            <span className="label">01</span>
            <h2 className="font-serif text-display-md text-fg">photography</h2>
          </div>
          <p className="label">a few frames i&apos;ve kept</p>
        </div>
        {!hasPhotos && <p className="mt-6 text-muted">Photos are on their way — check back soon.</p>}
      </div>

      <ul className="shell mt-10 columns-1 gap-3 sm:columns-2 lg:columns-3">
        {shots.map((shot) => (
          <li key={shot.src} className="group mb-3 break-inside-avoid">
            <figure>
              <Shot
                img={shot.img}
                alt={shot.alt}
                label={shot.label}
                aspect={shot.aspect}
                sizes="(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 92vw"
                className="w-full"
              />
              {shot.caption && <figcaption className="mt-2 text-sm text-muted">{shot.caption}</figcaption>}
            </figure>
          </li>
        ))}
      </ul>
    </>
  );
}
