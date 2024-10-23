/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkmode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1B5C98",
        secondary: "#EE7595",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm:"7rem",

        },
      }

    },
  },
  plugins: [],
}

