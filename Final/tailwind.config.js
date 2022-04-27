module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['"Open Sans"', 'ui-sans-serif', 'system-ui'],
      'serif': ['"Noto Serif"', 'ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },
    extend: {
      colors: {
        'main-blue': '#A2C2EC',
        'accent-blue': '#000066',
      },
    },
  },
  plugins: [],
}
