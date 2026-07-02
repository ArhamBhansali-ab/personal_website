"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/blog", label: "Blog" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-200 bg-[#fafaf9]/90 backdrop-blur-sm">
      <div className="max-w-container mx-auto px-6 flex items-center justify-between h-14">
        <Link
          href="/"
          className="text-sm font-medium text-neutral-900 hover:opacity-60 transition-opacity"
        >
          Arham Bhansali
        </Link>

        <div className="hidden md:flex items-center gap-7 text-sm text-neutral-500">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-neutral-900 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden p-1 text-neutral-500 hover:text-neutral-900 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-neutral-200 bg-[#fafaf9] px-6 py-4 flex flex-col gap-4 text-sm text-neutral-600">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-neutral-900 transition-colors"
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
