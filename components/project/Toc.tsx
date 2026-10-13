"use client";

import { useEffect, useState } from "react";

type Section = { id: string; title: string };

/** Sticky table of contents (desktop). Highlights the section currently being read. */
export default function Toc({ sections }: { sections: Section[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.3;
      let current = sections[0]?.id ?? "";
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.getBoundingClientRect().top <= line) current = section.id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [sections]);

  return (
    <nav aria-label="On this page" className="sticky top-24 hidden self-start lg:block">
      <p className="label mb-4">On this page</p>
      <ol className="border-l border-line">
        {sections.map((section, index) => {
          const current = section.id === active;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={current ? "location" : undefined}
                className={`-ml-px flex gap-3 border-l py-1.5 pl-4 text-sm transition-colors ${
                  current ? "border-accent text-fg" : "border-transparent text-muted hover:text-fg"
                }`}
              >
                <span className="font-mono text-[0.6875rem] leading-5">{String(index + 1).padStart(2, "0")}</span>
                {section.title}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
