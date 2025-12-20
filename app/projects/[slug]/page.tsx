import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Tag from "@/components/Tag";
import Button from "@/components/Button";
import { projects } from "@/content/projects";
import { ExternalLink, Github, FileText } from "lucide-react";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };
  return { title: project.title };
}

export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <Container>
      <div className="py-20 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          {project.links && (
            <div className="flex gap-4 mb-8">
              {project.links.github && (
                <a
                  href={project.links.github}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" /> View Code
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5" /> Live Demo
                </a>
              )}
              {project.links.paper && (
                <a
                  href={project.links.paper}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="w-5 h-5" /> Read Paper
                </a>
              )}
            </div>
          )}
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-700 dark:text-gray-300">
              {project.description}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Problem</h2>
            <p className="text-gray-700 dark:text-gray-300">
              This project addresses key challenges in the field, focusing on
              practical solutions and real-world impact.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Approach</h2>
            <p className="text-gray-700 dark:text-gray-300">
              The solution leverages modern technologies and best practices to
              deliver scalable and efficient results.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Results</h2>
            <p className="text-gray-700 dark:text-gray-300">
              The project achieved significant improvements and positive outcomes
              in its target domain.
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Button href="/projects">← Back to Projects</Button>
        </div>
      </div>
    </Container>
  );
}

