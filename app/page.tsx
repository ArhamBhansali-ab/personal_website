import Link from "next/link";
import Container from "@/components/Container";
import Connections from "@/components/Connections";
import Blob from "@/components/Blob";
import { site } from "@/content/site";
import { projects, Project } from "@/content/projects";
import { research, Research } from "@/content/research";

export const metadata = {
  title: "Home",
};

function WorkRow({ project, index }: { project: Project; index: number }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group flex gap-6 py-5 border-b border-brand-border last:border-0 ${
        index % 2 === 0 ? "tilt-hover" : "tilt-hover-alt"
      }`}
    >
      <span className="font-mono text-xs text-brand-text-muted w-10 shrink-0 pt-1">
        {project.year}
      </span>
      <div className="flex-1 min-w-0">
        <span className="font-serif text-lg text-brand-text group-hover:text-brand-accent">
          {project.title}
        </span>
      </div>
    </Link>
  );
}

function ResearchRow({ item, index }: { item: Research; index: number }) {
  return (
    <Link
      href={`/research/${item.slug}`}
      className={`group flex gap-6 py-5 border-b border-brand-border last:border-0 ${
        index % 2 === 0 ? "tilt-hover" : "tilt-hover-alt"
      }`}
    >
      <span className="font-mono text-xs text-brand-text-muted w-10 shrink-0 pt-1">
        {item.year}
      </span>
      <div className="flex-1 min-w-0">
        <span className="font-serif text-lg text-brand-text group-hover:text-brand-accent">
          {item.title}
        </span>
      </div>
    </Link>
  );
}

export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);
  const featuredResearch = research.filter((r) => r.featured).slice(0, 2);

  return (
    <div>
      <section className="relative pt-20 pb-16 overflow-hidden">
        <Blob className="absolute -top-16 -right-24 w-80 h-80 text-brand-accent-tint opacity-60 blur-2xl pointer-events-none" />
        <Container>
          <div className="relative">
            <h1 className="font-serif text-5xl text-brand-accent mb-1">
              hi, i&apos;m
            </h1>
            <p className="font-serif text-6xl text-brand-text">
              Arham Bhansali
            </p>
            <p className="mt-2 text-brand-text-secondary">
              ECE + Physics · Duke University
            </p>
            {site.bioLong.map((paragraph, i) => (
              <p
                key={i}
                className={`max-w-xl text-base text-brand-text-secondary leading-relaxed ${
                  i === 0 ? "mt-6" : "mt-4"
                }`}
              >
                {paragraph}
              </p>
            ))}
            <div className="mt-8">
              <Connections />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 border-t border-brand-border">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            <div>
              <p className="font-script text-2xl text-brand-accent mb-6">
                things i&apos;ve built...
              </p>
              <div>
                {featured.map((project, i) => (
                  <WorkRow key={project.slug} project={project} index={i} />
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/projects"
                  className="text-sm text-brand-text-muted hover:text-brand-accent transition-colors link-squiggle"
                >
                  All projects →
                </Link>
              </div>
            </div>

            <div>
              <p className="font-script text-2xl text-brand-accent mb-6">
                ...and my research
              </p>
              <div>
                {featuredResearch.map((item, i) => (
                  <ResearchRow key={item.slug} item={item} index={i} />
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/research"
                  className="text-sm text-brand-text-muted hover:text-brand-accent transition-colors link-squiggle"
                >
                  All research →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
