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
        primary: "#141318",
        secondary: "#a487cf",
        offSecondary: "#c8b8df",
        offPrimary: "#201f25",
        surface: "#19181e",
        elevated: "#26242c",
        line: "#37343f",
        lightText: "#d8d4dd",
        muted: "#a9a3b0",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        card: "0 18px 50px rgba(0, 0, 0, 0.24)",
        accent: "0 18px 45px rgba(164, 135, 207, 0.14)",
      },
    },
  },
  plugins: [],
} satisfies Config;
