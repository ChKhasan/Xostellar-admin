module.exports = {
  theme: {
    container: {
      screens: {
        sm: "576px",
        md: "728px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1440px",
      },
    },
    screens: {
      "2xl": "1440px",
      xl: { max: "1200px" },
      lg: { max: "992px" },
      md: { max: "728px" },
      sm: { max: "576px" },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      blue: "#236AF9",
      black: "#0D152C",
      "blue-bold": "#092D53",
      "blue-grey": "#5F758C",
      bg: {
        grey: "#E1E1E1",
      },
      green: "#0b8927",
      "green-light": "#00E733",
      orange: "#D4840C",
      red: {
        dark: "#8b0828",
        dark2: "#D9244F",
      },
    },
    fontFamily: {
      body: ["Geologica"],
      verdana: {
        400: "verdana-400",
        700: "verdana-700",
        "italic-700": "verdana-italic-700",
      },
    },
  },
};
