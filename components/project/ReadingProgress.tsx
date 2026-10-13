"use client";

import { m, useScroll } from "framer-motion";

/** Thin accent bar across the top of the screen that fills as the page is read. */
export default function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <m.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-accent"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
