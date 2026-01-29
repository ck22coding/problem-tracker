import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#212121",
        card: "#2f2f2f",
        border: "#3d3d3d",
        accent: "#10a37f",
        "accent-hover": "#0d8a6a",
      },
    },
  },
  plugins: [],
};

export default config;
