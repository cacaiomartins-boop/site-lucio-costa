/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#344736",
        moss: "#526147",
        sage: "#A9B58A",
        linen: "#EBE6DD",
        sand: "#D0C6B8",
        paper: "#F6F3EE",
        terracotta: "#C66728",
        "terracotta-light": "#E0925A",
        rust: "#783F18",
        ink: "#1F2A20",
      },
      fontFamily: {
        fraunces: ["Fraunces", "serif"],
        inter: ["Inter", "sans-serif"],
      },
      maxWidth: {
        editorial: "1240px",
      },
    },
  },
  plugins: [],
};
