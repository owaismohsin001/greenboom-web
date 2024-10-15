// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       keyframes: {
//         marquee: {
//           "0%": { transform: "translateX(70%)" },
//           "100%": { transform: "translateX(-100%)" },
//         },
//       },
//       animation: {
//         marquee: "marquee 20s linear infinite",
//       },

//       colors: {
//         primaryA: "#FF4433",

//         secondary: "#faf8f7",
//         sky: "#A1D9FF",

//         bg: "#f2edf3",
//         primary: "#f51b07",
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(70%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        hoverEffect: {
          "0%": { backgroundColor: "#A1D9FF" }, // sky blue
          "50%": { backgroundColor: "#FF4433" }, // red
          "100%": { backgroundColor: "#FFFFFF" }, // white
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        hoverEffect: "hoverEffect 0.2s forwards",
      },
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
