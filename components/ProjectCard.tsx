import Link from "next/link";
import Tag from "./Tag";

type CardItem = {
  title: string;
  slug: string;
  description: string;
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
}: {
  item: CardItem;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group block p-6 border border-neutral-200 rounded-xl bg-white hover:border-neutral-400 transition-colors"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="font-medium text-neutral-900 group-hover:underline underline-offset-2">
          {item.title}
        </h3>
        <span className="font-mono text-xs text-neutral-400 shrink-0 pt-0.5">
          {item.year}
        </span>
      </div>
      <p className="text-sm text-neutral-500 leading-relaxed line-clamp-3 mb-4">
        {item.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {item.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </Link>
  );
}
