import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        airbnb: {
          pink: "#FF385C",
          dark: "#E00B41",
          light: "#F7F7F7",
          border: "#DDDDDD",
          primary: "#222222",
          secondary: "#717171"
        }
      },
      fontFamily: {
        sans: ['Circular', '-apple-system', 'BlinkMacSystemFont', 'Roboto', 'Helvetica Neue', 'sans-serif'],
      },
      maxWidth: {
        'airbnb': '1120px',
      }
    },
  },
  plugins: [],
};
export default config;
