"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";

export default function IntroBanner() {
  const [dismissed, setDismissed] = useState(false);
  const [phase, setPhase] = useState("flash");
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const t1 = window.setTimeout(() => setPhase("slam"), 250);
    const t2 = window.setTimeout(() => setPhase("settled"), 900);

    const handleScroll = () => {
      const currentY = window.scrollY;
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          // only reveal the intro banner again when the user is back at the top
          if (currentY > lastY.current && currentY > 100) {
            setDismissed(true);
          } else if (currentY <= 0) {
            setDismissed(false);
          }
          lastY.current = currentY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const en = "WELCOME";

  const hero = site.heroImage || "/images/hero-head.jpg";
  const [imageLoaded, setImageLoaded] = useState(true);
  const [imageReachable, setImageReachable] = useState<boolean | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch(hero, { method: "HEAD" });
        if (!mounted) return;
        setImageReachable(res.ok);
      } catch {
        if (!mounted) return;
        setImageReachable(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [hero]);

  return (
    <div
      className={`intro-banner ${dismissed ? "intro-banner--gone" : ""}`}
      aria-hidden={dismissed}
    >
      <div className="speed-lines" />
      <div className={`flash ${phase !== "flash" ? "flash--out" : ""}`} />

      <div className={`silhouette ${phase !== "flash" ? "silhouette--in" : ""}`} aria-hidden>
        {/* Render only the high-res image. If it fails to load, render nothing. */}
        {imageReachable !== false && imageLoaded && (
          <img
            src={hero}
            alt="hero head"
            onError={() => setImageLoaded(false)}
            style={{ border: "1px solid rgba(255,255,255,0.03)" }}
          />
        )}
      </div>

      <div className="intro-banner__inner">
        <p className={`intro-banner__en ${phase === "settled" ? "intro-banner__en--in" : ""}`}>
          {en}
        </p>
        <div className="intro-banner__hint">scroll down ↓</div>
      </div>

      <style jsx>{`
        .intro-banner {
          position: sticky;
          top: 0;
          z-index: 50;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at top, #141414 0%, #060606 55%, #020202 100%);
          overflow: hidden;
          transition: transform 0.6s cubic-bezier(0.76, 0, 0.24, 1), opacity 0.5s ease;
          isolation: isolate;
        }

        .intro-banner--gone {
          transform: translateY(-100%);
          opacity: 0;
          pointer-events: none;
        }

        .flash {
          position: absolute;
          inset: 0;
          background: #fff;
          opacity: 1;
          z-index: 3;
          transition: opacity 0.35s ease-out;
        }

        .flash--out {
          opacity: 0;
        }

        .speed-lines {
          position: absolute;
          inset: -20%;
          z-index: 1;
          background: repeating-conic-gradient(
            from 0deg,
            rgba(255, 255, 255, 0.06) 0deg 1.1deg,
            transparent 1.1deg 6.2deg
          );
          animation: spin 14s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .intro-banner__en {
          margin: 0;
          font-size: clamp(3.5rem, 12vw, 9rem);
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #ffffff;
          opacity: 0;
          transform: translateY(-12px) scale(1.02);
          transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.2,0.9,0.3,1.2);
          text-shadow: 0 12px 48px rgba(0,0,0,0.6), 0 0 36px rgba(216,90,48,0.08);
        }
        .intro-banner__en--in {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
          font-weight: 700;
          letter-spacing: 0.04em;
          color: #fff;
          margin: 0;
          opacity: 0;
          transform: translateY(-120px) scale(1.12);
          text-shadow: 0 0 24px rgba(255, 255, 255, 0.35);
        }

        .intro-banner__jp--slam {
          opacity: 1;
          animation: slam 0.5s cubic-bezier(0.2, 0.9, 0.3, 1.2) forwards;
        }

        @keyframes slam {
          0% {
            transform: translateY(-120px) scale(1.12);
          }
          60% {
            transform: translateY(6px) scale(1.02);
          }
          100% {
            transform: translateY(0) scale(1);
          }
        }

        .intro-banner__en {
          margin-top: 1rem;
          font-size: clamp(0.72rem, 1.6vw, 0.96rem);
          font-weight: 600;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #d85a30;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        .intro-banner__en--in {
          opacity: 1;
          transform: translateY(0);
        }

        .intro-banner__hint {
          position: absolute;
          bottom: -3rem;
          left: 50%;
          transform: translateX(-50%);
          color: #666;
          font-size: 0.72rem;
          letter-spacing: 0.16em;
          z-index: 2;
          animation: bob 1.6s ease-in-out infinite;
        }

        @keyframes bob {
          0%,
          100% {
            transform: translate(-50%, 0);
          }
          50% {
            transform: translate(-50%, 8px);
          }
        }

        @media (max-width: 768px) {
          .silhouette {
            right: -3%;
            height: min(48vh, 320px);
          }
          .silhouette img {
            object-position: center right;
          }

          .intro-banner__inner {
            padding: 0 1rem;
          }
        }
      `}</style>
    </div>
  );
}
