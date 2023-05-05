/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      normal: ["Ubuntu-Regular", "sans-serif"],
      md: ["Ubuntu-Medium", "sans-serif"],
      bold: ["Ubuntu-Bold", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#032959",
        accent: "#BCE3FB",
        blue: "#483EFF",
        gray: "#97989D",
        base: "#ECF3FD",
      },
      backgroundImage: {
        desktop: "url('./assets/images/bg-sidebar-desktop.svg')",
        mobile: "url('./assets/images/bg-sidebar-mobile.svg')",
      },
    },
  },
  plugins: [],
};
