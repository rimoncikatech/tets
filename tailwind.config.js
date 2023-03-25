const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "767px", //mobile
      x: "1024px", //tablet
      xl: "1280px", //laptop
      "2xl": "1440px", //desktop
      "5xl": "1920px", // ultra wide
      "360": "360px",
      "375": "375px",
      "390": "390px",
      "420": "414px",
      "430": "430px",
    },
    extend: {
      fontFamily: {
        sans: ["Maison Neue", ...fontFamily.sans],
        demi: ["Maison Neue Demi", ...fontFamily.sans],
        man: ["Manrope", ...fontFamily.sans],
        bol: ["Maison Neue Extra", ...fontFamily.sans],
        book: ["Maison Neue Book", ...fontFamily.sans],
      },
      maxWidth: {
        mobile: "360px",
        400:"400px",
        945: "950px",
        "desktop-s": "1280px",
        desktop: "1440px",
        "desktop-hd": "1920px",
        "desktop-infinity": "1921px",
      },
      colors: {
        main: {
          orange: "#f97066",
          blue: "#012859",
          lightBlue: "#d3e9f7",
          deepBlue: "#013e88",
          red: "#e04e4e",
          grey: "#b3bfd7",
          cyan: "#a0efff",
          hoverOrange: "#e8665d",
          hoverWhite: "#f1f5f8",
        },
        border: {
          button: "rgba(255, 255, 255, 0.14)",
          tag: "rgba(1, 62, 136, 0.3)",
          tag1: "rgba(255, 255, 255, 0.3)",
          comment: "#e5e7ec",
        },
      },
      opacity: {
        35: ".35",
      },
      boxShadow: {
        buttonShadow:
          "0 18px 18px 0 rgba(253, 196, 196, 0.3), 0 0 1px 0 #fdc4c4",
        buttonShadow2: "0 2px 8px 0 rgba(0, 0, 0, 0.1)",
        buttonShadow3:
          "0 13px 13px 0 rgba(2, 32, 71, 0.12), 0 0 1px 0 rgba(2, 32, 71, 0.1)",
        buttonShadow4: "0 2px 8px 0 rgba(0, 0, 0, 0.1)",
        headerShadow:
          "0 18px 18px 0 rgba(53, 61, 65, 0.1), 0 0 1px 0 rgba(35, 42, 46, 0.05)",
        commentShadow:
          "0 -20px 20px 0 rgba(160, 239, 255, 0.21), 0 0 1px 0 #a0efff;",
      },
      backgroundImage: {
        blue: "linear-gradient(to bottom, rgba(255, 255, 255, 0), #fff 50%, #fff 50%)",
        lightBlue:
          "linear-gradient(to bottom, #fff, #d3e9f7, rgba(211, 233, 247, 0))",
        greyBlue:
          "linear-gradient(to top, #d3e9f7, rgba(211, 233, 247, 0) 50%)",
      },
    },
  },
  plugins: [],
};
