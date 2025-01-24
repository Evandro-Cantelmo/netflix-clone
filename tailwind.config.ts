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
        "home-hero-gradient-4k":
          "linear-gradient(360deg, rgba(0, 0, 0, 0.8500) 8.000%, rgba(0, 0, 0, 0.8465) 15.67%, rgba(0, 0, 0, 0.8361) 23.33%, rgba(0, 0, 0, 0.8187) 31.00%, rgba(0, 0, 0, 0.7944) 38.67%, rgba(0, 0, 0, 0.7632) 46.33%, rgba(0, 0, 0, 0.7250) 54.00%, rgba(0, 0, 0, 0.6868) 61.67%, rgba(0, 0, 0, 0.6556) 69.33%, rgba(0, 0, 0, 0.6312) 77.00%, rgba(0, 0, 0, 0.6139) 84.67%, rgba(0, 0, 0, 0.6035) 92.33%, rgba(0, 0, 0, 0.6000) 100.0%)",
        "home-hero-gradient-desktop":
          "linear-gradient(7deg, rgba(0, 0, 0, 0.85) 10%, rgba(0, 0, 0, 0.8465) 17.25%, rgba(0, 0, 0, 0.8361) 24.50%, rgba(0, 0, 0, 0.8187) 31.75%, rgba(0, 0, 0, 0.7944) 39.00%, rgba(0, 0, 0, 0.7632) 46.25%, rgba(0, 0, 0, 0.7250) 53.50%, rgba(0, 0, 0, 0.6868) 60.75%, rgba(0, 0, 0, 0.6556) 68.00%, rgba(0, 0, 0, 0.6312) 75.25%, rgba(0, 0, 0, 0.6139) 82.50%, rgba(0, 0, 0, 0.6035) 89.75%, rgba(0, 0, 0, 0.6) 97%)",
        "home-hero-gradient-laptop":
          "linear-gradient(12deg, rgba(0, 0, 0, 0.8500) 36.00%, rgba(0, 0, 0, 0.8465) 40.58%, rgba(0, 0, 0, 0.8361) 45.17%, rgba(0, 0, 0, 0.8187) 49.75%, rgba(0, 0, 0, 0.7944) 54.33%, rgba(0, 0, 0, 0.7632) 58.92%, rgba(0, 0, 0, 0.7250) 63.50%, rgba(0, 0, 0, 0.6868) 68.08%, rgba(0, 0, 0, 0.6556) 72.67%, rgba(0, 0, 0, 0.6313) 77.25%, rgba(0, 0, 0, 0.6139) 81.83%, rgba(0, 0, 0, 0.6035) 86.42%, rgba(0, 0, 0, 0.6000) 91.00%)",
        "home-hero-gradient-tablet":
          "linear-gradient(360deg, rgba(0, 0, 0, 0.8500) 3.000%, rgba(0, 0, 0, 0.8465) 11.08%, rgba(0, 0, 0, 0.8361) 19.17%, rgba(0, 0, 0, 0.8187) 27.25%, rgba(0, 0, 0, 0.7944) 35.33%, rgba(0, 0, 0, 0.7632) 43.42%, rgba(0, 0, 0, 0.7250) 51.50%, rgba(0, 0, 0, 0.6868) 59.58%, rgba(0, 0, 0, 0.6556) 67.67%, rgba(0, 0, 0, 0.6313) 75.75%, rgba(0, 0, 0, 0.6139) 83.83%, rgba(0, 0, 0, 0.6035) 91.92%, rgba(0, 0, 0, 0.6000) 100.0%)",
        "home-hero-gradient-mobile":
          "linear-gradient(360deg, rgba(0, 0, 0, 0.9000) 0.000%, rgba(0, 0, 0, 0.8965) 8.500%, rgba(0, 0, 0, 0.8861) 17.00%, rgba(0, 0, 0, 0.8688) 25.50%, rgba(0, 0, 0, 0.8444) 34.00%, rgba(0, 0, 0, 0.8132) 42.50%, rgba(0, 0, 0, 0.7750) 51.00%, rgba(0, 0, 0, 0.7368) 59.50%, rgba(0, 0, 0, 0.7056) 68.00%, rgba(0, 0, 0, 0.6813) 76.50%, rgba(0, 0, 0, 0.6639) 85.00%, rgba(0, 0, 0, 0.6535) 93.50%, rgba(0, 0, 0, 0.6500) 102.0%)",
        "background-hero-gradient":
          "radial-gradient(11% 56% at 17% 50%, #461518 0%, transparent 100%),radial-gradient(11% 56% at 83% 50%, #461518 0%, transparent 100%)",
        "bottom-curve-background":
          "linear-gradient(to right, rgba(33, 13, 22, 1) 16%, rgba(184, 40, 105, 1), rgba(229, 9, 20, 1), rgba(184, 40, 105, 1), rgba(33, 13, 22, 1) 84%);",
        "gradient-ad": "linear-gradient(91deg, #482566 0%, #161d52 99.51%);",
      },
    },
  },
  plugins: [],
} satisfies Config;
