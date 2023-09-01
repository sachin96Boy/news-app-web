/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "nunito-sans": ['"Nunito Sans"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
        "ibm-plex-serif": ['"IBM Plex Serif"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
