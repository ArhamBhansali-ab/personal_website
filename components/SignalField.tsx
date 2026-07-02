"use client";

import { useEffect, useRef, useState } from "react";

export default function SignalField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointer = useRef({ x: 0.5, y: 0.5 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let width = canvas.clientWidth * dpr;
    let height = canvas.clientHeight * dpr;
    let rafId: number;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resizeCanvas = () => {
      width = canvas.clientWidth * dpr;
      height = canvas.clientHeight * dpr;
      canvas.width = width;
      canvas.height = height;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawWave = (time: number) => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "rgba(15, 23, 42, 0.08)";
      ctx.fillRect(0, 0, w, h);

      const baseX = pointer.current.x;
      const baseY = pointer.current.y;
      const speed = 0.0025;
      const offsetX = (baseX - 0.5) * 120;
      const offsetY = (baseY - 0.5) * 24;

      for (let line = 0; line < 4; line++) {
        const y = h * (0.35 + line * 0.17) + offsetY;
        const amplitude = 16 + Math.sin(time * 0.0008 + line) * 6;
        const frequency = 1.4 + line * 0.24;
        const alpha = 0.22 + line * 0.12;

        ctx.beginPath();
        for (let x = 0; x <= w; x += 6) {
          const progress = (x / w) * Math.PI * 2;
          const wave = Math.sin(progress * frequency + time * speed + line * 0.8);
          const scale = Math.sin(progress * 0.5 + time * 0.001) * 0.6 + 0.8;
          const px = x;
          const py = y + wave * amplitude * scale + offsetX * 0.04;
          if (x === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }

        ctx.strokeStyle = `rgba(34, 211, 238, ${alpha})`;
        ctx.lineWidth = 2;
        ctx.lineJoin = "round";
        ctx.stroke();
      }

      ctx.beginPath();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
      ctx.lineWidth = 1;
      for (let idx = 0; idx < 3; idx++) {
        const y = h * (0.15 + idx * 0.35);
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
      }
      ctx.stroke();
    };

    const render = (time: number) => {
      drawWave(time);
      rafId = window.requestAnimationFrame(render);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    if (reducedMotion) {
      drawWave(0);
    } else {
      rafId = window.requestAnimationFrame(render);
    }

    const handlePointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.current = {
        x: (event.clientX - rect.left) / rect.width,
        y: (event.clientY - rect.top) / rect.height,
      };
    };

    canvas.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("pointermove", handlePointerMove);
      if (typeof rafId === "number") {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 p-6 shadow-xl">
      <div className="pointer-events-none absolute inset-x-0 top-6 flex items-center justify-between text-xs uppercase tracking-[0.28em] text-slate-400">
        <span>signal field</span>
        <span>neuro telemetry</span>
      </div>
      <canvas
        ref={canvasRef}
        className="h-72 w-full rounded-[1.5rem] bg-slate-950"
        aria-hidden="true"
      />
      {mounted && (
        <div className="mt-5 text-sm text-slate-400">
          Signal visualization that responds to pointer motion. Reduced-motion safe.
        </div>
      )}
    </div>
  );
}
