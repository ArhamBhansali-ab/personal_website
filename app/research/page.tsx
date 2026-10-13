import Link from "next/link";
import PageHeader from "@/components/site/PageHeader";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { research } from "@/content/research";

export const metadata = {
  title: "Research",
  description: "Papers and reports, published and unpublished.",
};

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        label="Research"
        title={
          <>
            things i&apos;ve <em className="text-accent">researched.</em>
          </>
        }
      />

      <RevealGroup as="ol" className="shell">
        {research.map((item, index) => (
          <RevealItem
            as="li"
            key={item.slug}
            className="grid grid-cols-[2.5rem_1fr] gap-x-2 gap-y-2 border-t border-line py-7 last:border-b md:grid-cols-[4rem_6rem_minmax(0,1fr)_auto] md:items-baseline md:gap-x-6"
          >
            <span className="label">{String(index + 1).padStart(2, "0")}</span>
            <span className="label col-start-2 md:col-start-auto">{item.year}</span>
            <div className="col-start-2 md:col-start-auto">
              <h2 className="font-serif text-2xl leading-tight text-fg md:text-[1.9rem]">
                <Link href={`/research/${item.slug}`} className="transition-colors hover:text-accent">
                  {item.title}
                </Link>
              </h2>
              <p className="mt-3 text-sm text-muted">
                <span className={`chip mr-3 ${item.status === "published" ? "border-accent text-accent" : ""}`}>{item.status}</span>
                {item.venue}
              </p>
              <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Tags">
                {item.tags.map((tag) => (
                  <li key={tag} className="chip">
                    {tag}
                  </li>
                ))}
              </ul>
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

    </>
  );
}
