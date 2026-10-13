import Link from "next/link";
import Shot from "@/components/Shot";
import PageHeader from "@/components/site/PageHeader";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { getProjects } from "@/lib/projects";

export const metadata = {
  title: "Projects",
  description: "Projects in sensing hardware, computer vision, machine learning and neural interfaces.",
};

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <>
      <PageHeader
        label="Projects"
        title={
          <>
            things i&apos;ve <em className="text-accent">built.</em>
          </>
        }
      >
        Every project has a long write-up: how it works, the decisions behind it, and what I took away.
      </PageHeader>

      <RevealGroup as="ol" className="shell">
        {projects.map((project, index) => (
          <RevealItem as="li" key={project.slug} className="border-t border-line last:border-b">
            {project.hasPage ? (
              <Link href={`/projects/${project.slug}`} className="group grid grid-cols-[2.5rem_1fr] items-center gap-x-2 gap-y-4 py-6 md:grid-cols-[4rem_5rem_minmax(0,1fr)_14rem] md:gap-x-6 md:py-8">
              <span className="label self-start pt-2">{String(index + 1).padStart(2, "0")}</span>
              <span className="label col-start-2 self-start pt-2 md:col-start-auto">{project.year}</span>
              <div className="col-start-2 md:col-start-auto">
                <h2 className="font-serif text-display-sm text-fg transition-colors duration-300 group-hover:text-accent">
                  {project.title}
                  {project.status && (
                    <span className="chip ml-3 translate-y-[-0.35em] border-accent text-accent">{project.status}</span>
                  )}
                </h2>
                <p className="mt-1 max-w-xl text-[0.9375rem] leading-relaxed text-muted">{project.summary}</p>
                <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Tags">
                  {project.tags.map((tag) => (
                    <li key={tag} className="chip">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <Shot
                img={project.cover.img}
                alt={project.cover.alt}
                label={project.cover.label}
                contain={project.cover.fit === "contain"}
                aspect="16/10"
                sizes="(min-width: 768px) 224px, 80vw"
                treated
                zoom
                className="col-start-2 w-full md:col-start-auto"
              />
              </Link>
            ) : (
              <div className="grid grid-cols-[2.5rem_1fr] items-center gap-x-2 gap-y-4 py-6 md:grid-cols-[4rem_5rem_minmax(0,1fr)_14rem] md:gap-x-6 md:py-8">
              <span className="label self-start pt-2">{String(index + 1).padStart(2, "0")}</span>
              <span className="label col-start-2 self-start pt-2 md:col-start-auto">{project.year}</span>
              <div className="col-start-2 md:col-start-auto">
                <h2 className="font-serif text-display-sm text-fg">
                  {project.title}
                  {project.status && (
                    <span className="chip ml-3 translate-y-[-0.35em] border-accent text-accent">{project.status}</span>
                  )}
                </h2>
                <p className="mt-1 max-w-xl text-[0.9375rem] leading-relaxed text-muted">{project.summary}</p>
                <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Tags">
                  {project.tags.map((tag) => (
                    <li key={tag} className="chip">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              </div>
            )}
          </RevealItem>
        ))}
      </RevealGroup>
    </>
  );
}
