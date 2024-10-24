/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      ...colors,
      primary: colors.sky, // Ganti dari 'lightBlue' ke 'sky'
      secondary: colors.pink,
      neutral: colors.gray, // Ganti dari 'coolGray' ke 'gray'
      stone: colors.stone, // Ganti dari 'warmGray' ke 'stone'
      slate: colors.slate, // Ganti dari 'blueGray' ke 'slate'
    },
  },
  plugins: [],
};
