import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        script: ["var(--font-script)", "cursive"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        container: "64rem",
      },
      colors: {
        brand: {
          bg: "#F7F4EF",
          "bg-alt": "#F1ECE3",
          card: "#FFFFFF",
          border: "#E4DDD1",
          text: "#2B2620",
          "text-secondary": "#5C5548",
          "text-muted": "#9C9384",
          accent: "#C1552F",
          "accent-hover": "#9E4325",
          "accent-tint": "#F1DCC9",
        },
      },
    },
  },
  plugins: [],
};
export default config;
