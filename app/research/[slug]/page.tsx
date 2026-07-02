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
          <p className="font-mono text-xs text-neutral-400 mb-3">{item.year}</p>
          <h1 className="text-2xl font-semibold text-neutral-900 mb-4">
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
                  className="text-neutral-500 hover:text-neutral-900 hover:underline underline-offset-2 transition-colors"
                >
                  GitHub →
                </a>
              )}
              {item.links.paper && (
                <a
                  href={item.links.paper}
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
            <p>{item.description}</p>
          </section>

          <section>
            <h2 className="text-sm uppercase tracking-widest text-neutral-400 mb-3">Motivation</h2>
            <p>
              This research is grounded in a practical question: how do physical
              constraints shape what models can reliably predict or control in
              deployed settings?
            </p>
          </section>

          <section>
            <h2 className="text-sm uppercase tracking-widest text-neutral-400 mb-3">Approach</h2>
            <p>
              The work combines domain-informed feature design with modern
              machine learning to deliver results that hold under real-world
              distribution shift and resource constraints.
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
