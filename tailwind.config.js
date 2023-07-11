/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "primary": "#03A09A",
        "primary-dark": "#026965",
        "secondary": "#AD3405",
        "terciary": "#CE8569",
        "grey": "#4F5665",
        "brown": "#443F35",
      },
      backgroundImage: {
        background: 'url("../images/background.jpg")',
      },
      fontFamily: {
        bebasNeue: "bebasNeue",
        foregen: "foregen"
      },
    },
  },
  plugins: [],
}

