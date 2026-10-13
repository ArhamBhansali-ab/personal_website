import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import "katex/dist/katex.min.css";
import Shot from "@/components/Shot";
import Gallery from "@/components/project/Gallery";
import Toc from "@/components/project/Toc";
import ReadingProgress from "@/components/project/ReadingProgress";
import { mdxComponents } from "@/components/mdx";
import { getProject, getProjectPages, type ProjectLinks } from "@/lib/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return getProjectPages().map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProject(params.slug);
  if (!project) return { title: "Not Found" };
  return {
    title: project.title,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary, type: "article" },
  };
}

const LINK_LABELS: { key: keyof ProjectLinks; label: string }[] = [
  { key: "repo", label: "Repo" },
  { key: "paper", label: "Paper" },
  { key: "demo", label: "Demo" },
  { key: "video", label: "Video" },
  { key: "post", label: "Post" },
];

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const projects = getProjectPages();
  const position = projects.findIndex((project) => project.slug === params.slug);
  if (position === -1) notFound();
  const project = projects[position];
  const previous = projects[(position - 1 + projects.length) % projects.length];
  const next = projects[(position + 1) % projects.length];

  const { content } = await compileMDX({
    source: project.body,
    components: mdxComponents,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkMath],
        rehypePlugins: [rehypeKatex, rehypeHighlight],
      },
    },
  });

  const links = LINK_LABELS.flatMap(({ key, label }) => {
    const href = project.links?.[key];
    return href ? [{ label, href }] : [];
  });

  const sections = [
    ...project.sections,
    ...(project.gallery.length > 0 ? [{ id: "gallery", title: "Gallery" }] : []),
    ...(links.length > 0 ? [{ id: "links", title: "Links" }] : []),
  ];

  const facts = [
    { term: "Year", value: project.year },
    { term: "Role", value: project.role },
    { term: "Duration", value: project.duration },
    { term: "Team", value: project.team },
    { term: "Context", value: project.context },
  ].filter((fact): fact is { term: string; value: string } => Boolean(fact.value));

  return (
    <article>
      <ReadingProgress />

      {/* hero */}
      <header>
        <Shot
          img={project.cover.img}
          alt={project.cover.alt}
          label={project.cover.label}
          contain={project.cover.fit === "contain"}
          aspect="21/9"
          sizes="100vw"
          priority
          className="w-full max-md:!aspect-[4/3]"
        />
        <div className="shell pt-10 md:pt-14">
          <p className="label mb-5 flex flex-wrap items-center gap-3">
            <Link href="/projects" className="transition-colors hover:text-accent">
              Projects
            </Link>
            <span aria-hidden="true">/</span>
            <span>{project.year}</span>
            {project.status && <span className="chip border-accent text-accent">{project.status}</span>}
          </p>
          <h1 className="max-w-5xl font-serif text-display-lg text-fg">{project.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">{project.summary}</p>

          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line pt-6 md:grid-cols-5">
            {facts.map((fact) => (
              <div key={fact.term}>
                <dt className="label">{fact.term}</dt>
                <dd className="mt-1.5 text-[0.9375rem] text-fg">{fact.value}</dd>
              </div>
            ))}
          </dl>
          <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Stack">
            {project.stack.map((item) => (
              <li key={item} className="chip">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* body */}
      <div className="project-body shell mt-16 grid gap-x-12 md:mt-24 lg:grid-cols-[13rem_minmax(0,1fr)]">
        <Toc sections={sections} />

        <div className="min-w-0">
          <div className="prose-site">{content}</div>

          {project.gallery.length > 0 && (
            <section aria-labelledby="gallery">
              <h2 id="gallery" className="section-title">
                Gallery
              </h2>
              <div className="mt-8">
                <Gallery shots={project.gallery} />
              </div>
            </section>
          )}

          {links.length > 0 && (
            <section aria-labelledby="links">
              <h2 id="links" className="section-title">
                Links
              </h2>
              <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="link inline-block py-1">
                      {link.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>

      {/* next / previous */}
      <nav aria-label="More projects" className="shell mt-28 md:mt-40">
        <div className="grid border-t border-line md:grid-cols-2">
          {[
            { label: "Previous", project: previous },
            { label: "Next", project: next },
          ].map((entry, index) => (
            <Link
              key={entry.label}
              href={`/projects/${entry.project.slug}`}
              className={`group block border-b border-line py-8 md:py-12 ${
                index === 1 ? "md:border-l md:pl-10 md:text-right" : "md:pr-10"
              }`}
            >
              <span className="label">{entry.label}</span>
              <span className="mt-3 block font-serif text-display-md text-fg transition-colors duration-300 group-hover:text-accent">
                {entry.project.title}
              </span>
            </Link>
          ))}
        </div>
      </nav>
    </article>
  );
}
