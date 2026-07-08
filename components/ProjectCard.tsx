import Link from "next/link";

type CardItem = {
  title: string;
  slug: string;
  description: string[];
  tags: string[];
  year: string;
  links?: {
    demo?: string;
    github?: string;
    paper?: string;
  };
  coverImage?: string;
};

export default function ProjectCard({
  item,
  href,
  index = 0,
}: {
  item: CardItem;
  href: string;
  index?: number;
}) {
  return (
    <Link
      href={href}
      className={`group flex items-baseline gap-4 py-4 border-b border-brand-border last:border-0 ${
        index % 2 === 0 ? "tilt-hover" : "tilt-hover-alt"
      }`}
    >
      <span className="font-mono text-xs text-brand-text-muted w-10 shrink-0">
        {item.year}
      </span>
      <h3 className="font-serif text-lg text-brand-text group-hover:text-brand-accent">
        {item.title}
      </h3>
    </Link>
  );
}
