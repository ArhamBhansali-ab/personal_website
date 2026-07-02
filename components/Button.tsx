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
    "inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-medium transition-colors";
  const styles =
    variant === "primary"
      ? `${base} bg-neutral-900 text-white hover:bg-neutral-700`
      : `${base} border border-neutral-300 text-neutral-700 hover:border-neutral-500 hover:text-neutral-900`;

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
