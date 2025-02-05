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
        primary: '#18181c',
        secondary: '#9a77c7',
        offSecondary: '#b3a3c7',
        offPrimary: '#2a2a2e',
        lightText: "#dfdee0",
      },
      fontFamily:{
        poppins: ["Poppins", 'sans-serif'],
      }
    },
  },
  plugins: [],
} satisfies Config;
