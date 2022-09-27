/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      cursor: {
        fancy: 'url("../public/assets/h3cursor.png"), auto',
        // fancyPointer: 'url("../public/assets/h3cursorPointer.png"), auto',
      },
      backgroundImage: {
        'gradient-to-b':
          'linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%);',
      },
    },
    fontFamily: {
      kufiM: ["Reem Kufi Fun", "sans-serif"],
      nablaPixel: ["Nabla", "cursive"],
      strongItalik: ["Ms Madi", "cursive"],
      lobster: ["Lobster", "cursive"],
      netflix: ["Bebas Neue", "cursive"],
    },
  },
  plugins: [
    require("tailwindcss-textshadow"),
    require("tailwind-scrollbar-hide"),
    require("tailwind-scrollbar"),
  ],
  variants: {
    scrollbar: ["rounded"],
  },
};
