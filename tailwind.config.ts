import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "navbar-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0.8000) 0.000%, rgba(0, 0, 0, 0.7889) 8.333%, rgba(0, 0, 0, 0.7556) 16.67%, rgba(0, 0, 0, 0.7000) 25.00%, rgba(0, 0, 0, 0.6222) 33.33%, rgba(0, 0, 0, 0.5222) 41.67%, rgba(0, 0, 0, 0.4000) 50.00%, rgba(0, 0, 0, 0.2778) 58.33%, rgba(0, 0, 0, 0.1778) 66.67%, rgba(0, 0, 0, 0.1000) 75.00%, rgba(0, 0, 0, 0.04444) 83.33%, rgba(0, 0, 0, 0.01111) 91.67%, rgba(0, 0, 0, 0.000) 100.0%)",
        "home-hero-gradient":
          "linear-gradient(7deg, rgba(0, 0, 0, 0.85) 10%, rgba(0, 0, 0, 0.8465) 17.25%, rgba(0, 0, 0, 0.8361) 24.50%, rgba(0, 0, 0, 0.8187) 31.75%, rgba(0, 0, 0, 0.7944) 39.00%, rgba(0, 0, 0, 0.7632) 46.25%, rgba(0, 0, 0, 0.7250) 53.50%, rgba(0, 0, 0, 0.6868) 60.75%, rgba(0, 0, 0, 0.6556) 68.00%, rgba(0, 0, 0, 0.6312) 75.25%, rgba(0, 0, 0, 0.6139) 82.50%, rgba(0, 0, 0, 0.6035) 89.75%, rgba(0, 0, 0, 0.6) 97%)",
        "home-hero-gradient-laptop":
          "linear-gradient(12deg, rgba(0, 0, 0, 0.8500) 36.00%, rgba(0, 0, 0, 0.8465) 40.58%, rgba(0, 0, 0, 0.8361) 45.17%, rgba(0, 0, 0, 0.8187) 49.75%, rgba(0, 0, 0, 0.7944) 54.33%, rgba(0, 0, 0, 0.7632) 58.92%, rgba(0, 0, 0, 0.7250) 63.50%, rgba(0, 0, 0, 0.6868) 68.08%, rgba(0, 0, 0, 0.6556) 72.67%, rgba(0, 0, 0, 0.6313) 77.25%, rgba(0, 0, 0, 0.6139) 81.83%, rgba(0, 0, 0, 0.6035) 86.42%, rgba(0, 0, 0, 0.6000) 91.00%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
