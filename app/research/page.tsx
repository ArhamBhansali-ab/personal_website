import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import { research } from "@/content/research";

export const metadata = {
  title: "Research",
};

export default function ResearchPage() {
  return (
    <Container>
      <div className="py-20">
        <h1 className="text-2xl font-semibold text-neutral-900 mb-2">Research</h1>
        <p className="text-neutral-500 mb-10 max-w-xl">
          Work at the intersection of computation, physical systems, and data.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {research.map((item) => (
            <ProjectCard
              key={item.slug}
              item={item}
              href={`/research/${item.slug}`}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
