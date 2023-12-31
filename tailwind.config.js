/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/*.js"],
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
        'background': 'url("../public/images/background.jpg")',
        'background-grey': 'url("../public/images/background-grey.jpg")',
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

