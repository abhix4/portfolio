import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "my-gray":"#666666",
        "bg-color-black":"#000",
        "bg-color-gray":"#111",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily:{
        "Poppins":["Poppins"]
      },
      screens: {

        'lg': '1024px', // Desktop styles default
        'md': { 'max': '1023px' }, // Medium screens and below
        'sm': { 'max': '767px' },  // Small screens and below
      },
    },
  },
  plugins: [],
} satisfies Config;
