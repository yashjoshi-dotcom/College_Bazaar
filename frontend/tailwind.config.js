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
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
