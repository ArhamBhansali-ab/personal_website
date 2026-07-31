"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/photography", label: "Photography" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-brand-border bg-brand-bg/90 backdrop-blur-sm">
      <div className="max-w-container mx-auto px-6 flex items-center justify-between h-14">
        <Link
          href="/"
          className="font-serif text-sm font-medium text-brand-text hover:text-brand-accent transition-colors"
        >
          Arham Bhansali
        </Link>

        <div className="hidden md:flex items-center gap-7 text-sm text-brand-text-secondary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link-squiggle hover:text-brand-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden p-1 text-brand-text-secondary hover:text-brand-accent transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-brand-border bg-brand-bg px-6 py-4 flex flex-col gap-4 text-sm text-brand-text-secondary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-brand-accent transition-colors"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
