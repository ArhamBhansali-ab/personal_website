import { ReactNode } from "react";

/** Title block for the index pages (work, research, photography, writing, about). */
export default function PageHeader({
  label,
  title,
  children,
}: {
  label: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="shell pb-12 pt-20 md:pb-16 md:pt-28">
      <p className="label mb-6">{label}</p>
      <h1 className="font-serif text-display-lg text-fg">{title}</h1>
      {children && <div className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{children}</div>}
    </header>
  );
}
