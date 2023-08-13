/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "Poppins",
    },
    container: {
      padding: {
        default: "30px",
        lg: "0",
      },
    },
    extend: {
      colors: {
        primary: "#222222",
        secondary: "#FSE6E0",
      },
    },
  },
  plugins: [],
};
