module.exports = {
  mode: "jit",
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      xs: "400px",
      sm: "600px",
      svg2: "720px",
      md: "800px",
      lg: "1000px",
      svg: "1300px",
      xl: "1440px",
      xxl: "1700px"
    },
    colors: {
      "primary-light": "#FF687F",
      "primary-dark": "#FF0026",
      "grey-header": "#CAC1C1",
      "grey-secondary": "#9B9B9B",
      footer: "#313131",
    },
    fontFamily: {
      primary: ["DM Sans", "sans-serif"],
      secondary: ["Luckiest Guy", "cursive"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
