import Link from "next/link";
import Container from "@/components/Container";
import SocialLinks from "@/components/SocialLinks";
import { site } from "@/content/site";
import { projects, Project } from "@/content/projects";

export const metadata = {
  title: "Home",
};

function WorkRow({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex gap-6 py-5 border-b border-neutral-100 last:border-0 hover:opacity-70 transition-opacity"
    >
      <span className="font-mono text-xs text-neutral-400 w-10 shrink-0 pt-1">
        {project.year}
      </span>
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
          <span className="font-medium text-neutral-900 group-hover:underline underline-offset-2">
            {project.title}
          </span>
          <span className="text-sm text-neutral-400">
            {project.tags.slice(0, 2).join(" · ")}
          </span>
        </div>
        <p className="mt-1 text-sm text-neutral-500 leading-relaxed">
          {project.description}
        </p>
      </div>
    </Link>
  );
}

export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <div>
      <section className="pt-20 pb-16">
        <Container>
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">
            Arham Bhansali
          </h1>
          <p className="mt-2 text-neutral-500">
            ECE + Physics · Duke University
          </p>
          <p className="mt-6 max-w-xl text-base text-neutral-600 leading-relaxed">
            {site.bioShort}
          </p>
          <div className="mt-8">
            <SocialLinks />
          </div>
        </Container>
      </section>

      <section className="py-12 border-t border-neutral-200">
        <Container>
          <p className="text-xs uppercase tracking-widest text-neutral-400 mb-8">
            Selected work
          </p>
          <div>
            {featured.map((project) => (
              <WorkRow key={project.slug} project={project} />
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/projects"
              className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors"
            >
              All projects →
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
