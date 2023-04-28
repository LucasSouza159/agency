/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#171717",
      },
      colors: {
        verde: "#60E1CB",
        port: "#7BC0E3",
      },
      backgroundImage: {
        "people-port": "./src/img/people-port.png",
      },
    },
  },
  plugins: [],
};
