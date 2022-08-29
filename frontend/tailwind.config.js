/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    // "node_modules/flowbite/*/.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        road: "url('./assets/SVG/Paths.svg')",
        circle: "url('./assets/SVG/Paths_Circle.svg')",
        backLg: "url('./assets/SVG/Backgr.svg')",
        bg: "url('./assets/img/bg.webp')",
        // backMd: "url('./assets/SVG/Backgr.svg')",
        backSm_1: "url('./assets/SVG/Backgr-1.svg')",
        backSm_2: "url('./assets/SVG/Backgr-2.svg')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
