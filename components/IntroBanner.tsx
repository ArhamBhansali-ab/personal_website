"use client";

import { useEffect, useState } from "react";

export default function IntroBanner() {
  const [dismissed, setDismissed] = useState(false);
  const [phase, setPhase] = useState("flash");

  useEffect(() => {
    const t1 = window.setTimeout(() => setPhase("slam"), 250);
    const t2 = window.setTimeout(() => setPhase("settled"), 900);

    const onScroll = () => {
      if (window.scrollY > 60) setDismissed(true);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const jp = "アルハム・バンサリ";
  const en = "WELCOME TO THE WEBSITE OF ARHAM BHANSALI";

  return (
    <div
      className={`intro-banner ${dismissed ? "intro-banner--gone" : ""}`}
      aria-hidden={dismissed}
    >
      <div className="speed-lines" />
      <div className={`flash ${phase !== "flash" ? "flash--out" : ""}`} />

      <svg
        className={`silhouette ${phase !== "flash" ? "silhouette--in" : ""}`}
        viewBox="0 0 320 420"
        aria-hidden="true"
      >
        <g fill="#0d0d0f" stroke="#d85a30" strokeWidth="1.5">
          <path d="M185 116c-12-10-29-16-46-16-20 0-39 8-52 23-14 15-21 35-21 56 0 23 10 44 26 58 13 11 31 17 48 17 14 0 28-3 40-10 19-10 34-27 41-47 7-20 7-42-2-61-6-13-16-24-34-20z" />
          <path d="M188 116c-15-4-29 0-39 9-10 8-16 20-16 33 0 10 4 20 10 28 6 8 15 12 25 12 13 0 27-6 36-16 8-9 13-21 13-33 0-10-3-20-8-28-4-7-10-11-20-5z" opacity="0.9" />
          <path d="M152 178c-6 10-8 23-7 34 2 17 11 32 25 43 6 4 13 8 20 9 16 2 32-5 42-18 5-7 8-14 9-22 1-12-3-24-11-33-7-8-17-12-28-13-12 0-24 4-35 10-3 2-5 3-8 4-3 0-6-2-7-4z" opacity="0.7" />
          <path d="M161 118c2-18 11-32 24-42 5-4 10-7 16-10 7-3 15-4 22-3 8 2 16 7 21 14 5 6 8 13 8 21 0 10-4 19-12 25-8 7-19 10-29 10-11 0-22-2-31-8-5-3-8-8-10-13-1-3-2-5-3-7z" />
          <path d="M146 167c-7 4-12 11-15 18-3 8-4 17-3 26 2 11 7 21 16 28 10 8 24 11 37 9 11-2 21-8 27-16 5-8 7-17 4-25-3-8-10-14-18-18-8-4-16-5-24-5-8 0-16 2-24 6z" opacity="0.78" />
        </g>
      </svg>

      <div className="intro-banner__inner">
        <p className={`intro-banner__jp ${phase !== "flash" ? "intro-banner__jp--slam" : ""}`}>
          {jp}
        </p>
        <p className={`intro-banner__en ${phase === "settled" ? "intro-banner__en--in" : ""}`}>
          {en}
        </p>
        <div className="intro-banner__hint">scroll to enter ↓</div>
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

        .silhouette {
          position: absolute;
          right: 3%;
          top: 50%;
          transform: translateY(-50%) translateX(140px);
          height: min(66vh, 420px);
          width: auto;
          z-index: 1;
          opacity: 0;
          filter: drop-shadow(0 0 32px rgba(216, 90, 48, 0.3));
          transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .silhouette--in {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }

        .intro-banner__inner {
          position: relative;
          z-index: 2;
          text-align: center;
          width: min(92vw, 720px);
          padding: 0 1.5rem;
        }

        .intro-banner__jp {
          font-size: clamp(2.4rem, 7vw, 5.1rem);
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

          .intro-banner__inner {
            padding: 0 1rem;
          }
        }
      `}</style>
    </div>
  );
}
