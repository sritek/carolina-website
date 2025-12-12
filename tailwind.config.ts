import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          pink: "#5cffb5",
          teal: "#4be1ff",
          purple: "#7b2eff",
          blue: "#5f7dff",
        },
        base: {
          950: "#050505",
          900: "#0b0c12",
          800: "#171726",
          100: "#f5f5f5",
        },
      },
      fontFamily: {
        display: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 30px rgba(95, 125, 255, 0.35)",
      },
      borderRadius: {
        xl: "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;

