import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/projects";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <Container>
      <div className="py-20">
        <p className="font-script text-2xl text-brand-accent mb-2">
          the projects i&apos;ve worked on
        </p>
        <h1 className="font-serif text-2xl font-medium text-brand-text mb-10">
          Projects
        </h1>

        <div>
          {projects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              item={project}
              href={`/projects/${project.slug}`}
              index={i}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
