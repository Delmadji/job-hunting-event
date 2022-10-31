/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  extend: {},
  theme: {
    colors: {
      bgcolor: "#0095CB",
      hoverbg: "#05afed", //"#037199",
      yellow: "#ffde59",
      white: "#ffffff",
      pink: "rgb(236, 72, 153)",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
