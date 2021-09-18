module.exports = {
  mode: "jit",
  // These paths are just examples, customize them to match your project structure
  purge: ["./public/index.html", "./src/*.{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // (greyscale)
      "g-1": "#Ffffff",
      "g-2": "#EFF0F3",
      "g-3": "#656568",
      "g-4": "#dbdce4",
      "border": "#e7e8eb",
      "aws": "#DE8918",
      "primary": "#283DF3", // Primary
      "primaryHover": "#172dbd",
      "green": "#368864",
      "dark": "#121219",
      "transparent": "transparent",
    },
    fontFamily: {
      sans: ["Inter", "-apple-system", "sans-serif"],
      mono: ["Source Code Pro", "monospace"],
    },
    extend: {
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.875rem",
        "base": "1rem",
        "lg": "1.125rem",
        "xl": "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
      },
    },
  },
  variants: {
    extend: {},
  },
};
