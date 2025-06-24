import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: "'Proxima Nova', var(--font-proxima-nova), Arial, sans-serif",
    h1: {
      fontFamily: "'Proxima Nova', var(--font-proxima-nova), Arial, sans-serif",
      fontSize: 40,
      fontWeight: 300,
      letterSpacing: "2px",
    },
    h2: {
      fontFamily: "'Proxima Nova', var(--font-proxima-nova), Arial, sans-serif",
      fontSize: 32,
      fontWeight: 300,
      letterSpacing: "2px",
    },
    h3: {
      fontFamily: "'Proxima Nova', var(--font-proxima-nova), Arial, sans-serif",
      fontSize: 26,
      fontWeight: 500,
    },
    h4: {
      fontFamily: "'Proxima Nova', var(--font-proxima-nova), Arial, sans-serif",
      fontSize: 22,
      fontWeight: 500,
    },
    h5: {
      fontFamily: "'Proxima Nova', var(--font-proxima-nova), Arial, sans-serif",
      fontSize: 20,
      fontWeight: 500,
    },
    h6: {
      fontFamily: "'Proxima Nova', var(--font-proxima-nova), Arial, sans-serif",
      fontSize: 16,
      fontWeight: 500,
    },
    body1: {
      fontFamily: "'Proxima Nova', var(--font-proxima-nova), Arial, sans-serif",
      fontSize: 16,
      fontWeight: 400,
    },
    body2: {
      fontFamily: "'Proxima Nova', var(--font-proxima-nova), Arial, sans-serif",
      fontSize: 15,
      fontWeight: 400,
    },
    subtitle1: {
      fontFamily: "'Proxima Nova', var(--font-proxima-nova), Arial, sans-serif",
      fontSize: 16,
      fontWeight: 400,
    },
    subtitle2: {
      fontFamily: "'Proxima Nova', var(--font-proxima-nova), Arial, sans-serif",
      fontSize: 14,
      fontWeight: 400,
    },
    button: {
      fontFamily: "'Proxima Nova', var(--font-proxima-nova), Arial, sans-serif",
      fontSize: 14,
      fontWeight: 600,
      textTransform: "none",
    },
    caption: {
      fontFamily: "'Proxima Nova', var(--font-proxima-nova), Arial, sans-serif",
      fontSize: 12,
      fontWeight: 400,
    },
    overline: {
      fontFamily: "'Proxima Nova', var(--font-proxima-nova), Arial, sans-serif",
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
          fontFamily: "'Proxima Nova', var(--font-proxima-nova), Arial, sans-serif !important",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;