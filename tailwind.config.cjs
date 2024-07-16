/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3", //050816
        tertiary: "#151030",

        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },

      backgroundImage: {
        "green-gradient": "linear-gradient(314deg, #51713a 0%, #000e21 74%)",
      },
      // backgroundImage: {
      //   "green-gradient": "linear-gradient(to right, #a8e063, #56ab2f)", // Custom gradient
      // },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      // backgroundImage: {
      //   "hero-pattern": "url('/src/assets/herobg1.png')",
      // },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
