module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily : {
        'poppins' : ['Poppins','sans-serif'],
        'montserrat' : ['Montserrat','sans-serif'],
      },
      colors : {
        // Background Colors
        background : {
          primary : 'var(--bg-background-primary)',
          secondary : 'var(--bg-background-secondary)',
          ternary : 'var(--bg-background-ternary)',
        },
        // Text colors : tc
        tc : {
          primary : 'var(--text-tc-primary)'
        }
      }
    },
  },
  variants: {},
  plugins: [],
}
