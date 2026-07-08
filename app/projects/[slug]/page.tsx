import Image from "next/image";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Tag from "@/components/Tag";
import Button from "@/components/Button";
import { projects } from "@/content/projects";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Not Found" };
  return { title: project.title };
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <Container>
      <div className="py-20 max-w-2xl">
        <div className="mb-10">
          <p className="font-mono text-xs text-brand-text-muted mb-3">{project.year}</p>
          <h1 className="font-serif text-3xl font-medium text-brand-text mb-4">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          {project.links && (
            <div className="flex flex-wrap gap-4 text-sm">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-squiggle text-brand-text-secondary hover:text-brand-accent transition-colors"
                >
                  GitHub →
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-squiggle text-brand-text-secondary hover:text-brand-accent transition-colors"
                >
                  Live demo →
                </a>
              )}
              {project.links.paper && (
                <a
                  href={project.links.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-squiggle text-brand-text-secondary hover:text-brand-accent transition-colors"
                >
                  Paper →
                </a>
              )}
              {project.links.post && (
                <a
                  href={project.links.post}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-squiggle text-brand-text-secondary hover:text-brand-accent transition-colors"
                >
                  Post →
                </a>
              )}
            </div>
          )}
        </div>

        {project.coverImage && (
          <div className="mb-10 overflow-hidden rounded-lg border border-brand-border">
            <Image
              src={project.coverImage}
              alt={project.title}
              width={1200}
              height={675}
              className="w-full h-auto"
            />
          </div>
        )}

        <div className="border-t border-brand-border pt-10">
          <section>
            <h2 className="text-sm uppercase tracking-widest text-brand-text-muted mb-3">
              Overview
            </h2>
            <div className="space-y-4 text-base text-brand-text-secondary leading-relaxed">
              {project.description.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-14">
          <Button href="/projects" variant="secondary">← Back to projects</Button>
        </div>
      </div>
    </Container>
  );
}
