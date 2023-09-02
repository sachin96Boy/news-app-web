/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "nunito-sans": ['"Nunito Sans"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
        "ibm-plex-serif": ['"IBM Plex Serif"', "sans-serif"],
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("flowbite/plugin")],
};
