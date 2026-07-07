import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
}

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-5 py-2.5 rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-md text-sm font-medium transition-colors";
  const styles =
    variant === "primary"
      ? `${base} bg-brand-accent text-brand-bg hover:bg-brand-accent-hover`
      : `${base} border border-brand-border text-brand-text-secondary hover:border-brand-accent hover:text-brand-accent`;

  if (external) {
    return (
      <a href={href} className={styles} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  );
}
