/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./cardapio-completo.html"],
  theme: {
    extend: {
      colors: {
        "cf-black": "#0a0a0a",
        "cf-yellow": "#e0a800",
        "cf-darkgray": "#121212",
        "cf-gray": "#222222",
        brand: {
          bg: "#0a0a0a",
          card: "#121212",
          border: "#222222",
          yellow: "#e0a800",
        },
      },
      boxShadow: {
        premium: "0 10px 40px -10px rgba(0,0,0,0.7)",
        glow: "0 0 20px rgba(255, 199, 0, 0.15)",
      },
      fontFamily: {
        heading: ['"Clash Display"', "sans-serif"],
        body: ['"Satoshi"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
