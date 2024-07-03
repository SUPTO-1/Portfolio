// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif",
        montserrat: "'Montserrat', sans-serif",
        robotoMono: "'Roboto Mono', monospace",
        blackOp: "'Black Ops One', cursive",
        kurale: "'Kurale', serif",
      },
      animation: {
        'background-shine': 'background-shine 1s linear infinite',
      },
      keyframes: {
        'background-shine': {
          'from': {
            'backgroundPosition': '0 0',
          },
          'to': {
            'backgroundPosition': '-200% 0',
          },
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
