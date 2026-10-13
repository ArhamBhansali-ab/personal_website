"use client";

import { ReactNode } from "react";
import { m, type Variants } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  shown: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const group: Variants = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.05 } },
};

type Tag = "div" | "section" | "ul" | "ol" | "li" | "article" | "header" | "footer";

type Props = {
  children: ReactNode;
  className?: string;
  as?: Tag;
};

/** Fade-and-rise once, when scrolled into view. */
export function Reveal({ children, className, as = "div" }: Props) {
  const Component = m[as] as typeof m.div;
  return (
    <Component
      className={className}
      variants={item}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
    >
      {children}
    </Component>
  );
}

/** Wrap a set of <RevealItem>s to stagger them 50ms apart. */
export function RevealGroup({ children, className, as = "div" }: Props) {
  const Component = m[as] as typeof m.div;
  return (
    <Component
      className={className}
      variants={group}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
    >
      {children}
    </Component>
  );
}

export function RevealItem({ children, className, as = "div" }: Props) {
  const Component = m[as] as typeof m.div;
  return (
    <Component className={className} variants={item}>
      {children}
    </Component>
  );
}
