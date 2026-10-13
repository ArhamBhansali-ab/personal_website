import Link from "next/link";
import Shot from "@/components/Shot";
import type { Project } from "@/lib/projects";

/** A project in "selected work". `wide` cards span the full row; the rest sit in pairs. */
export default function WorkCard({
  project,
  index,
  wide,
  priority = false,
}: {
  project: Project;
  index: number;
  wide: boolean;
  priority?: boolean;
}) {
  return (
    <article className="h-full">
      <Link href={`/projects/${project.slug}`} className="group block h-full">
        <Shot
          img={project.cover.img}
          alt={project.cover.alt}
          label={project.cover.label}
          contain={project.cover.fit === "contain"}
          aspect={wide ? "21/10" : "4/3"}
          sizes={wide ? "(min-width: 1440px) 1328px, 92vw" : "(min-width: 768px) 46vw, 92vw"}
          priority={priority}
          treated
          zoom
          className={`w-full ${wide ? "max-md:!aspect-[4/3]" : ""}`}
        />
        <div className="mt-4 grid grid-cols-[2.5rem_1fr] gap-y-2 md:grid-cols-[4rem_1fr_auto] md:items-baseline md:gap-x-6">
          <span className="label pt-2">{String(index + 1).padStart(2, "0")}</span>
          <div>
            <h3 className="font-serif text-display-sm text-fg transition-colors duration-300 group-hover:text-accent">
              {project.title}
              {project.status && (
                <span className="chip ml-3 translate-y-[-0.35em] border-accent text-accent">{project.status}</span>
              )}
            </h3>
            <p className="mt-1 max-w-xl text-[0.9375rem] leading-relaxed text-muted">{project.summary}</p>
          </div>
          <div className="col-start-2 flex flex-wrap items-center gap-x-3 gap-y-2 md:col-start-3 md:justify-end">
            <span className="label">{project.year}</span>
            <ul className="flex flex-wrap gap-1.5" aria-label="Tags">
              {project.tags.slice(0, 3).map((tag) => (
                <li key={tag} className="chip">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Link>
    </article>
  );
}
