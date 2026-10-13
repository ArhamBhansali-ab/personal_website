"use client";

import { ReactNode, useEffect, useState } from "react";
import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import { ReactLenis } from "lenis/react";

/**
 * Motion setup for the whole site: Framer Motion (lazy feature bundle, honours
 * the OS reduced-motion setting) and Lenis smooth scroll, which is skipped
 * entirely when reduced motion is requested.
 */
export default function Providers({ children }: { children: ReactNode }) {
  const [smooth, setSmooth] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setSmooth(!query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        {smooth && <ReactLenis root options={{ lerp: 0.11, anchors: true }} />}
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}
