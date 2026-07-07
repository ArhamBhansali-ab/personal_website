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
        <p className="font-script text-2xl text-brand-accent mb-2">
          things i&apos;ve researched
        </p>
        <h1 className="font-serif text-2xl font-medium text-brand-text mb-10">
          Research
        </h1>

        <div>
          {research.map((item, i) => (
            <ProjectCard
              key={item.slug}
              item={item}
              href={`/research/${item.slug}`}
              index={i}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
