import Link from "next/link";
import Hero from "@/components/home/Hero";
import type { OrbNode } from "@/components/home/Orb";
import WorkCard from "@/components/home/WorkCard";
import PhotoStrip from "@/components/home/PhotoStrip";
import SectionHeader from "@/components/site/SectionHeader";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { site } from "@/content/site";
import { research } from "@/content/research";
import { photos } from "@/content/photos";
import { getFeaturedProjects, getProjects, type Project } from "@/lib/projects";
import { resolveShot } from "@/lib/images";

export const metadata = {
  title: { absolute: `${site.name} · projects, research and a playground` },
};

/** The orb's points: every featured project, then the other sections of the site. */
function orbNodes(projects: Project[]): OrbNode[] {
  const pages = [
    { href: "/research", title: "Research", meta: "papers", summary: "Papers and reports, published and unpublished." },
    { href: "/photography", title: "Playground", meta: "hobbies", summary: "Photography, DJing, guitar, and a bunch of sports." },
  ];
  return [
    ...projects.map((project) => ({
      href: `/projects/${project.slug}`,
      title: project.title,
      meta: project.status ? `${project.year} · ${project.status}` : project.year,
      summary: project.summary,
      kind: "project" as const,
    })),
    ...pages.map((page) => ({ ...page, kind: "page" as const })),
  ].map((node, index) => ({ ...node, index: String(index + 1).padStart(2, "0") }));
}

/** full-width, then a pair, then full-width again, so the list never reads as a uniform grid */
function workRows(projects: Project[]) {
  const rows: { project: Project; index: number }[][] = [];
  let i = 0;
  while (i < projects.length) {
    const wide = rows.length % 2 === 0 || i === projects.length - 1;
    const take = wide ? 1 : 2;
    rows.push(projects.slice(i, i + take).map((project, offset) => ({ project, index: i + offset })));
    i += take;
  }
  return rows;
}

export default function Home() {
  const featured = getFeaturedProjects();
  const ongoing = getProjects().filter((project) => !project.hasPage);

  return (
    <>
      <Hero nodes={orbNodes(featured)} statement={site.tagline} school={site.school} />

      {/* 01 selected projects */}
      <section className="shell mt-24 scroll-mt-20 md:mt-32" id="work" aria-labelledby="work-heading">
        <SectionHeader
          index="01"
          id="work-heading"
          title={
            <>
              selected <em>projects</em>
            </>
          }
          href="/projects"
          linkLabel="all projects"
        />
        <div className="mt-10 space-y-16 md:mt-14 md:space-y-24">
          {workRows(featured).map((row, rowIndex) => (
            <RevealGroup
              key={rowIndex}
              className={row.length === 2 ? "grid gap-16 md:grid-cols-2 md:gap-8" : ""}
            >
              {row.map(({ project, index }) => (
                <RevealItem key={project.slug}>
                  <WorkCard project={project} index={index} wide={row.length === 1} />
                </RevealItem>
              ))}
            </RevealGroup>
          ))}
        </div>

        {ongoing.length > 0 && (
          <Reveal className="mt-16 grid gap-4 border-t border-line pt-5 md:mt-24 md:grid-cols-[minmax(0,1fr)_minmax(0,3fr)]">
            <h3 className="label">Ongoing</h3>
            <ul>
              {ongoing.map((project) => (
                <li key={project.slug}>
                  <p className="font-serif text-display-sm text-fg">
                    {project.title}
                    {project.status && (
                      <span className="chip ml-3 translate-y-[-0.35em] border-accent text-accent">{project.status}</span>
                    )}
                  </p>
                  <p className="mt-1 max-w-xl text-[0.9375rem] leading-relaxed text-muted">{project.summary}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </section>

      {/* 02 research */}
      <section className="shell mt-28 md:mt-40" aria-labelledby="research-heading">
        <SectionHeader index="02" id="research-heading" title="research" href="/research" linkLabel="all research" />
        <RevealGroup as="ol" className="mt-8">
          {research.map((item, index) => (
            <RevealItem
              as="li"
              key={item.slug}
              className="grid grid-cols-[2.5rem_1fr] gap-x-2 gap-y-2 border-b border-line py-6 md:grid-cols-[4rem_6rem_minmax(0,1fr)_auto] md:items-baseline md:gap-x-6"
            >
              <span className="label">{String(index + 1).padStart(2, "0")}</span>
              <span className="label col-start-2 md:col-start-auto">{item.year}</span>
              <div className="col-start-2 md:col-start-auto">
                <h3 className="font-serif text-2xl leading-tight text-fg md:text-[1.75rem]">
                  <Link href={`/research/${item.slug}`} className="transition-colors hover:text-accent">
                    {item.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm text-muted">
                  <span className={`chip mr-3 ${item.status === "published" ? "border-accent text-accent" : ""}`}>{item.status}</span>
                  {item.venue}
                </p>
              </div>
              {item.links?.paper && (
                <a
                  href={item.links.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link col-start-2 justify-self-start py-1 text-sm md:col-start-auto"
                  aria-label={`Paper: ${item.title} (opens in a new tab)`}
                >
                  paper ↗
                </a>
              )}
            </RevealItem>
          ))}
        </RevealGroup>

      </section>

      {/* 03 playground */}
      <section className="mt-28 md:mt-40" aria-labelledby="playground-heading">
        <div className="shell">
          <SectionHeader
            index="03"
            id="playground-heading"
            title="playground"
            href="/photography"
            linkLabel="open the playground"
          />
          <Reveal>
            <p className="mt-8 max-w-4xl font-serif text-display-sm leading-[1.22] text-fg">{site.playground}</p>
          </Reveal>
        </div>
        <Reveal className="mt-10">
          <PhotoStrip photos={photos.slice(0, 10).map(resolveShot)} />
        </Reveal>
      </section>
    </>
  );
}
