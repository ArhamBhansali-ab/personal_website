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
          <p className="font-mono text-xs text-neutral-400 mb-3">{project.year}</p>
          <h1 className="text-2xl font-semibold text-neutral-900 mb-4">
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
                  className="text-neutral-500 hover:text-neutral-900 hover:underline underline-offset-2 transition-colors"
                >
                  GitHub →
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-neutral-900 hover:underline underline-offset-2 transition-colors"
                >
                  Live demo →
                </a>
              )}
              {project.links.paper && (
                <a
                  href={project.links.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-500 hover:text-neutral-900 hover:underline underline-offset-2 transition-colors"
                >
                  Paper →
                </a>
              )}
            </div>
          )}
        </div>

        <div className="space-y-8 text-base text-neutral-600 leading-relaxed border-t border-neutral-200 pt-10">
          <section>
            <h2 className="text-sm uppercase tracking-widest text-neutral-400 mb-3">Overview</h2>
            <p>{project.description}</p>
          </section>

          <section>
            <h2 className="text-sm uppercase tracking-widest text-neutral-400 mb-3">Problem</h2>
            <p>
              This project addresses a core challenge in the field, focusing on
              practical constraints and real-world deployment requirements.
            </p>
          </section>

          <section>
            <h2 className="text-sm uppercase tracking-widest text-neutral-400 mb-3">Approach</h2>
            <p>
              The solution combines hardware and software co-design with
              principled data engineering to meet the demands of the target
              environment.
            </p>
          </section>

          <section>
            <h2 className="text-sm uppercase tracking-widest text-neutral-400 mb-3">Outcome</h2>
            <p>
              The project produced measurable improvements and is designed for
              reproducibility and further extension.
            </p>
          </section>
        </div>

        <div className="mt-14">
          <Button href="/projects" variant="secondary">← Back to projects</Button>
        </div>
      </div>
    </Container>
  );
}
