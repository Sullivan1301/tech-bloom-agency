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
        brand: {
          blue: {
            dark: "#0D2A40",
            DEFAULT: "#384B70",
            petrol: "#507687",
          },
          beige: "#FCFAEE",
          red: {
            cherry: "#B8001F",
            rose: "#C94A6B",
          },
          gray: {
            neutral: "#6B7280",
          }
        }
      },
      fontFamily: {
        sans: ["var(--font-bitter)"],
        heading: ["var(--font-montserrat)"],
      },
      borderRadius: {
        '4xl': '32px',
      }
    },
  },
  plugins: [],
};

export default config;
