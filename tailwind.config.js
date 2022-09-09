module.exports = {
  mode: "jit",
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      xs: "400px",
      sm1: "550px",
      sm: "650px",
      md2: "850px",
      md: "950px",
      n: "1150px",
      xl: "1350px",
    },
    colors: {
      primary: "#1C1C1C",
      secondary: "#EEBF63",
      white10: "#f1f1f1",
      dark10: "#2F2F2F",
    },
    extend: {
      fontFamily: {
        madi: ["Ms Madi", "cursive"],
        alfa: ["Alfa Slab One", "cursive"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
