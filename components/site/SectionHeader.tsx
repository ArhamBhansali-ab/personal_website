import Link from "next/link";
import { ReactNode } from "react";

/** Numbered section heading with a hairline above and an optional "all …" link. */
export default function SectionHeader({
  index,
  title,
  href,
  linkLabel,
  id,
}: {
  index: string;
  title: ReactNode;
  href?: string;
  linkLabel?: string;
  id?: string;
}) {
  return (
    <div className="hairline flex items-baseline justify-between gap-6 pt-5">
      <div className="flex items-baseline gap-4 md:gap-8">
        <span className="label">{index}</span>
        <h2 id={id} className="font-serif text-display-md text-fg">
          {title}
        </h2>
      </div>
      {href && linkLabel && (
        <Link href={href} className="link shrink-0 py-2 text-sm">
          {linkLabel}
        </Link>
      )}
    </div>
  );
}
