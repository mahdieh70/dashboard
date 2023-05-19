/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        arrowSquareLeft: "url('/src/assets/icons/arrowsquareleft.svg)",
        arrowSquareRight: "url('/src/assets/icons/arrowsquareright.svg)",
      },
    },
  },
  plugins: [],
};
