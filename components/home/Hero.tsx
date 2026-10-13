import Link from "next/link";
import Orb, { type OrbNode } from "@/components/home/Orb";

const accentLink =
  "italic text-accent underline decoration-transparent decoration-1 underline-offset-[0.12em] transition-colors duration-300 hover:decoration-accent focus-visible:decoration-accent";

/**
 * The opening screen: the headline as a caption, and the orb filling the rest
 * of the viewport. The orb's points are the way into the site.
 */
export default function Hero({
  nodes,
  statement,
  school,
}: {
  nodes: OrbNode[];
  statement: string;
  school: string;
}) {
  return (
    <section className="shell flex flex-col lg:min-h-[calc(100svh-3.5rem)]">
      <h1 className="pt-10 font-serif text-[clamp(2.1rem,3.5vw,3.75rem)] leading-[1.02] tracking-[-0.025em] text-fg sm:pt-12 lg:text-center">
        hey! I&apos;m Arham. <br className="lg:hidden" />I like{" "}
        <Link href="/projects" className={accentLink}>
          making
        </Link>{" "}
        and{" "}
        <Link href="/photography" className={accentLink}>
          trying
        </Link>{" "}
        out stuff.
      </h1>

      <div className="relative -mx-[var(--gutter)] h-[24rem] sm:mx-0 sm:h-[30rem] lg:h-auto lg:min-h-[24rem] lg:flex-1">
        <Orb nodes={nodes} />
      </div>

      {/* phones: the orb only has room for numbers, so the names sit in a key underneath */}
      <nav aria-label="Key to the points on the orb" className="pb-8 sm:hidden">
        <ol className="grid grid-cols-2 gap-x-5 border-t border-line">
          {nodes.map((node) => (
            <li key={node.href} className="border-b border-line">
              <Link href={node.href} className="flex items-baseline gap-2.5 py-3">
                <span
                  className={`font-mono text-[0.6875rem] tracking-[0.12em] ${
                    node.kind === "project" ? "text-accent" : "text-muted"
                  }`}
                >
                  {node.index}
                </span>
                <span className="font-serif text-lg leading-tight text-fg">{node.title}</span>
              </Link>
            </li>
          ))}
        </ol>
      </nav>

      <div className="flex flex-col gap-6 pb-8 md:flex-row md:items-end md:justify-between">
        <p className="max-w-md text-[0.9375rem] leading-relaxed text-muted">
          {statement}
          <span className="mt-1 block text-sm">{school}</span>
        </p>
        <p className="label hidden md:block">drag to turn · pick a point</p>
        <p className="flex gap-8 text-sm">
          <Link href="#work" className="link py-2">
            see the projects
          </Link>
          <Link href="/about" className="link py-2">
            about me
          </Link>
        </p>
      </div>
    </section>
  );
}
