/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // backgroundImage: {
      //   "hero-banner": "url('src/assets/hero-image-wr.jpg')",
      // },
      colors: {
        "dark-grey-1": "#1B1D1F",
        "dark-grey-2": "#282B30",
        blue: "#4E80EE",
        "light-grey-1": "#6C727F",
        "light-grey-2": "#D2D5DA",
      },
    },
  },
  plugins: [],
};
