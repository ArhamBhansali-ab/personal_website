import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Tag from "@/components/Tag";
import Button from "@/components/Button";
import { research } from "@/content/research";

export async function generateStaticParams() {
  return research.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const item = research.find((r) => r.slug === params.slug);
  if (!item) return { title: "Not Found" };
  return { title: item.title };
}

export default function ResearchDetail({ params }: { params: { slug: string } }) {
  const item = research.find((r) => r.slug === params.slug);
  if (!item) notFound();

  return (
    <Container>
      <div className="py-20 max-w-2xl">
        <div className="mb-10">
          <p className="font-mono text-xs text-brand-text-muted mb-3">{item.year}</p>
          <h1 className="font-serif text-3xl font-medium text-brand-text mb-4">
            {item.title}
          </h1>
          <div className="flex flex-wrap gap-1.5 mb-6">
            {item.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          {item.links && (
            <div className="flex flex-wrap gap-4 text-sm">
              {item.links.github && (
                <a
                  href={item.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-squiggle text-brand-text-secondary hover:text-brand-accent transition-colors"
                >
                  GitHub →
                </a>
              )}
              {item.links.paper && (
                <a
                  href={item.links.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-squiggle text-brand-text-secondary hover:text-brand-accent transition-colors"
                >
                  Paper →
                </a>
              )}
            </div>
          )}
        </div>

        <div className="border-t border-brand-border pt-10">
          <section>
            <h2 className="text-sm uppercase tracking-widest text-brand-text-muted mb-3">
              Overview
            </h2>
            <p className="text-base text-brand-text-secondary leading-relaxed">
              {item.description}
            </p>
          </section>
        </div>

        <div className="mt-14">
          <Button href="/research" variant="secondary">← Back to research</Button>
        </div>
      </div>
    </Container>
  );
}
