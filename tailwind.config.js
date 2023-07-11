/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./asesorias.html", "./equipos.html", "./main.js"],
  theme: {
    extend: {
      colors: {
        "primary": "#03A09A",
        "primary-dark": "#026965",
        "secondary": "#AD3405",
        "secondary-soft": "#CE8569",
        "grey": "#4F5665",
        "brown": "#443F35",
      },
      backgroundImage: {
        'background': 'url("../images/background.jpg")',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        bebasNeue: "bebasNeue",
        foregen: "foregen"
      },
    },
  },
  plugins: [],
}

