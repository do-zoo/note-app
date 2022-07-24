/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-color": "#041C32",
        "primary-color": "#4A5BF3",
        "secondary-color": "#ECB365",
        "tertiary-color": "#064663",
        "quaternary-color": "#DFF6FF",
      },
    },
  },
  plugins: [],
};
