import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import katex from "katex";
import "katex/dist/katex.min.css";
import { research } from "@/content/research";

export const dynamicParams = false;

export function generateStaticParams() {
  return research.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = research.find((r) => r.slug === params.slug);
  if (!item) return { title: "Not Found" };
  return { title: item.title, description: item.description[0].slice(0, 155) };
}

export default function ResearchDetail({ params }: { params: { slug: string } }) {
  const item = research.find((r) => r.slug === params.slug);
  if (!item) notFound();

  const links = [
    item.links?.paper && { label: "Paper", href: item.links.paper },
    item.links?.github && { label: "GitHub", href: item.links.github },
    item.links?.demo && { label: "Demo", href: item.links.demo },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <article className="shell pb-8 pt-20 md:pt-28">
      <p className="label mb-6 flex flex-wrap items-center gap-3">
        <Link href="/research" className="transition-colors hover:text-accent">
          Research
        </Link>
        <span aria-hidden="true">/</span>
        <span>{item.year}</span>
      </p>
      <h1 className="max-w-5xl font-serif text-display-md text-fg">{item.title}</h1>
      <p className="mt-5 text-muted">
        <span className={`chip mr-3 ${item.status === "published" ? "border-accent text-accent" : ""}`}>{item.status}</span>
        {item.venue}
      </p>
      <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Tags">
        {item.tags.map((tag) => (
          <li key={tag} className="chip">
            {tag}
          </li>
        ))}
      </ul>

      <div className="hairline mt-12 grid gap-8 pt-6 md:grid-cols-[minmax(0,1fr)_minmax(0,3fr)]">
        <h2 className="label">Overview</h2>
        <div>
          <div className="prose-site">
            {item.description.map((paragraph, i) =>
              paragraph.startsWith("$$") ? (
                <div
                  key={i}
                  className="max-w-prose overflow-x-auto py-1"
                  dangerouslySetInnerHTML={{
                    __html: katex.renderToString(paragraph.slice(2, -2), { displayMode: true, throwOnError: false }),
                  }}
                />
              ) : (
                <p key={i}>{paragraph}</p>
              ),
            )}
          </div>
          {links.length > 0 && (
            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="link inline-block py-1">
                    {link.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          )}
          <Link href="/research" className="link mt-14 inline-block py-2 text-sm">
            ← all research
          </Link>
        </div>
      </div>
    </article>
  );
}
