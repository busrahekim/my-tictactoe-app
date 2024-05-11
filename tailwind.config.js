/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#67707b", 
        secondary: "#F5F5F5", 
        textColor: "#2e3742",
        textColorMuted: "#57606b",
      },
    },
  },
  plugins: [],
}

