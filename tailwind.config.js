/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    maxWidth: {
      container: "1180px",
      contentContainer: "1140px",
      containerSmall: "1024px",
      containerxs: "768px",
    },
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      colors: {
        bodyColor: "#2B2A29",
        textGreen: "#7EC8AE",
        textLight: "#C9920E",
        textDark:  "#4B92DB",
        hoverColor: "rgba(230, 51, 41)",
      },
      fontFamily: {
        bodyFont: ["Calibre", "Inter","Inter var","San Francisco", "SF Pro Text", "-apple-system", "system-ui", "sans-serif"],
        titleFont: ["Calibre", "Inter", "Inter var","San Francisco", "SF Pro Text", "-apple-system", "system-ui", "sans-serif"],
        extraFont: ["SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "monospace"],
      },
      boxShadow: {
        navbarShadow: " 0 10px 30px -10px rgb(236, 28, 36)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};