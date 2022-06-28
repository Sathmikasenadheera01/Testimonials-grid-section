module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {

    },
    colors: {
      'purple':'hsl(263, 55%, 52%)',
      'dark-gray':'hsl(217, 19%, 35%)',
      'dark-black':'hsl(219, 29%, 14%)',
      'white':'hsl(0, 0%, 100%)',
      'light-gray':'hsl(0, 0%, 81%)',
      'light-gray-blue':'hsl(210, 46%, 95%)',
    },
    fontFamily: {
      sans: ['Barlow Semi Condensed', 'sans-serif'],
    },
    fontWeight:{
      'ex-light':500,
      'strong':600,
    },
  },
  plugins: [],
}
