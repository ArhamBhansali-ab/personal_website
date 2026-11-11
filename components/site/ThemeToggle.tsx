"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export const THEME_KEY = "theme";

// runs in <head> before paint so a returning dark-mode visitor never sees a light flash
export const themeScript = `try{if(localStorage.getItem("${THEME_KEY}")==="dark")document.documentElement.dataset.theme="dark"}catch(e){}`;

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    if (next === "dark") root.dataset.theme = "dark";
    else delete root.dataset.theme;
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {}
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", next === "dark" ? "#0b0b0b" : "#f6f6f4");
    setTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={theme === "dark"}
      className={`text-sm text-muted transition-colors hover:text-fg ${className}`}
    >
      {/* empty until mounted so server and client markup match */}
      <span suppressHydrationWarning>{theme === null ? " " : theme === "dark" ? "light" : "dark"}</span>
    </button>
  );
}
