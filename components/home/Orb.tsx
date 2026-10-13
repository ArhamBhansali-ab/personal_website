"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export type OrbNode = {
  href: string;
  /** "01", "02", … */
  index: string;
  title: string;
  /** small line under the title, e.g. the year */
  meta: string;
  summary: string;
  /** projects are lit in the accent colour; pages (research, playground) are outlined */
  kind: "project" | "page";
};

type Vec = [number, number, number];

const DOTS_DESKTOP = 1100;
const DOTS_MOBILE = 620;
const AUTO_SPEED = 0.1; // radians per second
const LIGHT: Vec = [-0.42, 0.52, 0.74];
const GOLDEN = Math.PI * (3 - Math.sqrt(5));

/** n points spread evenly over a unit sphere */
function fibonacciSphere(count: number): Vec[] {
  return Array.from({ length: count }, (_, i) => {
    const y = 1 - ((i + 0.5) / count) * 2;
    const radius = Math.sqrt(1 - y * y);
    const theta = i * GOLDEN;
    return [Math.cos(theta) * radius, y, Math.sin(theta) * radius];
  });
}

/** node positions: spread around the sphere but kept away from the poles so labels stay readable */
function nodePositions(count: number): Vec[] {
  return Array.from({ length: count }, (_, i) => {
    const y = 0.58 - ((i + 0.5) / count) * 1.16;
    const radius = Math.sqrt(1 - y * y);
    const theta = i * GOLDEN + 0.4;
    return [Math.cos(theta) * radius, y, Math.sin(theta) * radius];
  });
}

/**
 * The centrepiece: a slowly turning sphere of dots drawn on a canvas. Each lit
 * point is a project (or a section of the site) and carries a real link, so it
 * works with a keyboard and a screen reader. Drag to turn it; hovering or
 * focusing a point pauses the rotation and brings it forward.
 */
export default function Orb({ nodes }: { nodes: OrbNode[] }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const labelRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [active, setActive] = useState<number | null>(null);
  const activeRef = useRef<number | null>(null);
  const focusTarget = useRef<number | null>(null);

  const setActiveNode = (index: number | null, bringForward = false) => {
    activeRef.current = index;
    focusTarget.current = bringForward ? index : null;
    setActive(index);
  };

  useEffect(() => {
    const stage = stageRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!stage || !canvas || !context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const nodeVectors = nodePositions(nodes.length);
    let dots: Vec[] = [];

    let width = 0;
    let height = 0;
    let radius = 0;
    let yaw = 0.7;
    let pitch = -0.3;
    let velocity = 0;
    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    let visible = true;
    let frame = 0;
    let previous = 0;
    let foreground = "#ededed";
    let accent = "#e9a23b";
    let colourAge = 1;

    const readColours = () => {
      const style = getComputedStyle(document.documentElement);
      foreground = style.getPropertyValue("--fg").trim() || foreground;
      accent = style.getPropertyValue("--accent").trim() || accent;
    };

    const resize = () => {
      const rect = stage.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const small = width < 640;
      radius = small ? Math.min(height * 0.45, width * 0.4) : Math.min(height * 0.44, width * 0.27);
      const wanted = small ? DOTS_MOBILE : DOTS_DESKTOP;
      if (dots.length !== wanted) dots = fibonacciSphere(wanted);
    };

    const rotate = ([x, y, z]: Vec): Vec => {
      const cosYaw = Math.cos(yaw);
      const sinYaw = Math.sin(yaw);
      const x1 = x * cosYaw + z * sinYaw;
      const z1 = -x * sinYaw + z * cosYaw;
      const cosPitch = Math.cos(pitch);
      const sinPitch = Math.sin(pitch);
      return [x1, y * cosPitch - z1 * sinPitch, y * sinPitch + z1 * cosPitch];
    };

    const draw = () => {
      const centreX = width / 2;
      const centreY = height / 2;
      context.clearRect(0, 0, width, height);

      // the sphere: square dots, lit from the upper left, dim on the far side
      context.fillStyle = foreground;
      for (const dot of dots) {
        const [x, y, z] = rotate(dot);
        const front = z > 0;
        const light = Math.max(0, x * LIGHT[0] + y * LIGHT[1] + z * LIGHT[2]);
        const size = front ? 1.4 + z * 1.3 : 1.2;
        context.globalAlpha = front ? 0.34 + light * 0.66 : 0.1 + (1 + z) * 0.12;
        context.fillRect(Math.round(centreX + x * radius - size / 2), Math.round(centreY - y * radius - size / 2), size, size);
      }

      // the nodes, and the labels that ride on them
      nodeVectors.forEach((vector, index) => {
        const [x, y, z] = rotate(vector);
        const screenX = centreX + x * radius;
        const screenY = centreY - y * radius;
        const facing = Math.min(1, Math.max(0, (z - 0.02) / 0.32));
        const isActive = activeRef.current === index;
        const isProject = nodes[index].kind === "project";
        const size = 3 + Math.max(0, z) * 2.5 + (isActive ? 1.5 : 0);

        context.globalAlpha = 0.18 + facing * 0.82;
        context.fillStyle = isProject ? accent : foreground;
        context.strokeStyle = isProject ? accent : foreground;
        context.lineWidth = 1;
        context.beginPath();
        context.arc(screenX, screenY, size, 0, Math.PI * 2);
        if (isProject) context.fill();
        else context.stroke();
        if (facing > 0) {
          context.globalAlpha = facing * (isActive ? 0.9 : 0.35);
          context.beginPath();
          context.arc(screenX, screenY, size + (isActive ? 7 : 4.5), 0, Math.PI * 2);
          context.stroke();
        }

        const label = labelRefs.current[index];
        if (label) {
          label.style.transform = `translate3d(${screenX.toFixed(1)}px, ${screenY.toFixed(1)}px, 0)`;
          label.style.opacity = facing.toFixed(2);
          label.style.pointerEvents = facing > 0.5 ? "auto" : "none";
          label.style.zIndex = isActive ? "3" : facing > 0.5 ? "2" : "1";
        }
      });
      context.globalAlpha = 1;
    };

    const tick = (time: number) => {
      frame = 0;
      const delta = Math.min(0.05, (time - previous) / 1000 || 0);
      previous = time;

      if ((colourAge += delta) > 0.5) {
        colourAge = 0;
        readColours();
      }

      const target = focusTarget.current;
      if (target !== null) {
        // turn the focused node to face the viewer
        const [x, , z] = nodeVectors[target];
        let difference = -Math.atan2(x, z) - yaw;
        difference = Math.atan2(Math.sin(difference), Math.cos(difference));
        yaw += difference * Math.min(1, delta * 5);
        velocity = 0;
      } else if (!dragging) {
        const holding = activeRef.current !== null;
        const cruise = holding || reducedMotion.matches ? 0 : AUTO_SPEED;
        velocity += (cruise - velocity) * Math.min(1, delta * 2.2);
        yaw += velocity * delta;
        pitch += (-0.3 - pitch) * Math.min(1, delta * 0.6);
      }

      draw();
      schedule();
    };

    const schedule = () => {
      if (!frame && visible && !document.hidden) frame = window.requestAnimationFrame(tick);
    };

    const onPointerDown = (event: PointerEvent) => {
      if ((event.target as HTMLElement).closest("a")) return;
      dragging = true;
      lastX = event.clientX;
      lastY = event.clientY;
      stage.setPointerCapture(event.pointerId);
      stage.style.cursor = "grabbing";
    };
    const onPointerMove = (event: PointerEvent) => {
      if (!dragging) return;
      const deltaX = event.clientX - lastX;
      const deltaY = event.clientY - lastY;
      lastX = event.clientX;
      lastY = event.clientY;
      yaw += deltaX * 0.006;
      pitch = Math.max(-1, Math.min(1, pitch + deltaY * 0.004));
      velocity = deltaX * 0.36;
    };
    const onPointerUp = (event: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      velocity = Math.max(-3, Math.min(3, velocity));
      if (stage.hasPointerCapture(event.pointerId)) stage.releasePointerCapture(event.pointerId);
      stage.style.cursor = "";
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
      draw();
    });
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      previous = performance.now();
      schedule();
    });
    const onVisibility = () => {
      previous = performance.now();
      schedule();
    };

    readColours();
    resize();
    draw();
    resizeObserver.observe(stage);
    intersectionObserver.observe(stage);
    document.addEventListener("visibilitychange", onVisibility);
    stage.addEventListener("pointerdown", onPointerDown);
    stage.addEventListener("pointermove", onPointerMove);
    stage.addEventListener("pointerup", onPointerUp);
    stage.addEventListener("pointercancel", onPointerUp);
    previous = performance.now();
    schedule();

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      stage.removeEventListener("pointerdown", onPointerDown);
      stage.removeEventListener("pointermove", onPointerMove);
      stage.removeEventListener("pointerup", onPointerUp);
      stage.removeEventListener("pointercancel", onPointerUp);
    };
  }, [nodes]);

  return (
    <div ref={stageRef} className="absolute inset-0 cursor-grab touch-pan-y select-none">
      <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 h-full w-full" />
      <nav aria-label="Projects and sections on the orb">
        <ul>
          {nodes.map((node, index) => {
            const isActive = active === index;
            return (
              <li
                key={node.href}
                ref={(element) => {
                  labelRefs.current[index] = element;
                }}
                className="absolute left-0 top-0 opacity-0 will-change-transform"
              >
                <Link
                  href={node.href}
                  onMouseEnter={() => setActiveNode(index)}
                  onMouseLeave={() => setActiveNode(null)}
                  onFocus={() => setActiveNode(index, true)}
                  onBlur={() => setActiveNode(null)}
                  className="absolute left-4 top-0 block w-max max-w-[15rem] -translate-y-3 cursor-pointer py-1 pr-2"
                >
                  <span className="flex items-baseline gap-2 whitespace-nowrap bg-ink/75 px-1.5 py-0.5">
                    <span className={`font-mono text-[0.6875rem] tracking-[0.12em] ${isActive ? "text-accent" : "text-muted"}`}>
                      {node.index}
                    </span>
                    <span
                      className={`font-serif text-xl leading-none transition-colors duration-300 max-sm:sr-only md:text-2xl ${
                        isActive ? "text-accent" : "text-fg"
                      }`}
                    >
                      {node.title}
                    </span>
                  </span>
                  {isActive && (
                    <span className="mt-1 hidden bg-ink/90 px-1.5 py-1 text-xs leading-relaxed text-muted sm:block">
                      <span className="label mr-2">{node.meta}</span>
                      {node.summary}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
