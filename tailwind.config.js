
const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production" ? true : false,
    content: ["./dist/index.html"],
  },
  theme: {
    colors: {
      // Build your palette here
      black: colors.black,
      blue: colors.lightBlue,
      current: "currentColor",
      gray: colors.blueGray,
      green: colors.teal,
      indigo: colors.indigo,
      pink: colors.pink,
      purple: colors.purple,
      red: colors.red,
      transparent: "transparent",
      white: colors.white,
      yellow: colors.amber,
    },
    fontFamily: {
        roboto: ['"Roboto"'],
        fira:   ['"Fira Sans"'],
        code:   ['"Fira Code"']
    },
  },
  variants: {},
  plugins: [],
};
