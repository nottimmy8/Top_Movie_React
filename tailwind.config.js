/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#111213",
        secondary: "#1b1b1b",
        tertiary: "#f62e92",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
