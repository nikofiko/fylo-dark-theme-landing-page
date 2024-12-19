/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        open: ["Open Sans"],
        ral: ["Raleway"]
      },
      colors: {
        'intro-blue': 'hsl(217, 28%, 15%)',
        'main-blue': 'hsl(218, 28%, 13%)',
        'cyan': 'hsl(176, 68%, 64%)',
        'foot': 'hsl(216, 53%, 9%)'
      },
      boxShadow: {
        custom: '0px 10px 20px rgba(0, 0, 0, 0.19), 0px 6px 6px rgba(0, 0, 0, 0.23)',
      },
    },
  },
  plugins: [],
}

