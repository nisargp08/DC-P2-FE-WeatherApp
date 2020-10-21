module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        "48px": "48px",
        "64px": "64px",
        "144px": "144px",
      },
      colors: {
        // Background Colors
        background: {
          primary: "var(--bg-background-primary)",
          secondary: "var(--bg-background-secondary)",
          ternary: "var(--bg-background-ternary)",
        },
        // Text colors : tc
        tc: {
          primary: "var(--text-tc-primary)",
          secondary: "var(--text-tc-secondary)",
          ternary: "var(--text-tc-ternary)",
        },
        // Boundary
        boundary : {
          primary : "var(--boundary-primary)",
        },
        //General Color
        'light-blue' : '#3C47E9',
      },
      rotate : {
        'n150' : '-150deg',
      },
      borderRadius : {
        '80px' : '80px',
      },
      width : {
        '460px' : '460px',
      },
      maxWidth : {
        '460px' : '460px',
      }
    },
  },
  variants: {},
  plugins: [],
};
