/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryA: "#FF4433",
        secondary: "#faf8f7",
        sky: "#A1D9FF",
        bg: "#f2edf3",
        primary: "#f51b07",
      },
    },
  },
  plugins: [],
};
