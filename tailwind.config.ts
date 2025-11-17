import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EAEAEA",
        accent: "#FED831",
        secondary: "#317CFF",
        background: "#ECF0F1",
        ink: "#34495E",
        navy: "#1A4288",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Poppins", "sans-serif"],
        body: ["var(--font-body)", "Figtree", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
