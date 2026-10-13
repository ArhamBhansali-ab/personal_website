"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, site, socialLinks } from "@/content/site";

export default function Nav() {
  const pathname = usePathname() ?? "";
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // close on navigation
  useEffect(() => setOpen(false), [pathname]);

  // while the overlay is open: lock scroll, close on Escape, keep focus inside
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    overlayRef.current?.querySelector<HTMLElement>("a")?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;
      const focusable = [
        toggleRef.current,
        ...Array.from(overlayRef.current?.querySelectorAll<HTMLElement>("a") ?? []),
      ].filter(Boolean) as HTMLElement[];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink">
      <nav aria-label="Main" className="shell flex h-14 items-center justify-between">
        <Link href="/" className="relative z-50 text-sm tracking-tight text-fg transition-colors hover:text-accent">
          arham bhansali
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`text-sm transition-colors hover:text-fg ${active ? "text-accent" : "text-muted"}`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          ref={toggleRef}
          type="button"
          className="relative z-50 -mr-2 px-2 py-2 text-sm text-fg md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "close" : "menu"}
        </button>
      </nav>

      <div
        id="mobile-menu"
        ref={overlayRef}
        hidden={!open}
        data-lenis-prevent
        className="fixed inset-0 z-40 overflow-y-auto bg-ink md:hidden"
      >
        <div className="flex min-h-full flex-col justify-between px-[var(--gutter)] pb-10 pt-24">
          <ul>
            {[{ href: "/", label: "Home" }, ...navItems].map((item, index) => {
              const active = item.href === "/" ? pathname === "/" : isActive(item.href);
              return (
                <li key={item.href} className="border-b border-line">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className="flex items-baseline gap-4 py-4"
                    onClick={() => setOpen(false)}
                  >
                    <span className="label w-6">{String(index).padStart(2, "0")}</span>
                    <span className={`font-serif text-5xl leading-none ${active ? "italic text-accent" : "text-fg"}`}>
                      {item.label.toLowerCase()}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  {...(social.href.startsWith("mailto") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                  className="py-2"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <span className="sr-only">{site.name}</span>
    </header>
  );
}
