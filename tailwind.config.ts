import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        valencia: {
          orange: "#E85D04",
          blue: "#0A369D",
          dark: "#0F172A",
        },
      },
    },
  },
  plugins: [],
};
export default config;
