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
  const baseClasses =
    "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantClasses =
    variant === "primary"
      ? "bg-black text-white hover:bg-gray-800 focus:ring-black"
      : "bg-gray-100 text-black hover:bg-gray-200 focus:ring-gray-500";

  if (external) {
    return (
      <a
        href={href}
        className={`${baseClasses} ${variantClasses}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses}`}>
      {children}
    </Link>
  );
}

