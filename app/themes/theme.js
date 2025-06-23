import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: "Proxima Nova, Arial, sans-serif",
    h1: {
      fontSize: 40, // px
      fontWeight: 300,
      letterSpacing: "2px",
    },
    h2: {
      fontSize: 32,
      fontWeight: 300,
      letterSpacing: "2px",
    },
    h3: {
      fontSize: 26,
      fontWeight: 500,
    },
    h4: {
      fontSize: 22,
      fontWeight: 500,
    },
    h5: {
      fontSize: 20,
      fontWeight: 500,
    },
    h6: {
      fontSize: 16,
      fontWeight: 500,
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
    },
    body2: {
      fontSize: 15,
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 400,
    },
    button: {
      fontSize: 14,
      fontWeight: 600,
      textTransform: "none",
    },
    caption: {
      fontSize: 12,
      fontWeight: 400,
    },
    overline: {
      fontSize: 12,
      fontWeight: 400,
    },
  },
  components: {
    MuiBox: {
      styleOverrides: {
        root: {
          boxSizing: "border-box",
          paddingLeft: "16px",
          paddingRight: "16px",
          "@media (min-width:600px)": {
            paddingLeft: "24px",
            paddingRight: "24px",
          },
          "@media (min-width:900px)": {
            paddingLeft: "32px",
            paddingRight: "32px",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Proxima Nova, Arial, sans-serif",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;