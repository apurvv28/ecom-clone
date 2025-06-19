import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#111010',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#fafafa',
      paper: '#fff',
    },
    text: {
      primary: '#111010',
      secondary: '#555',
    },
  },
  typography: {
    fontFamily: 'Proxima Nova, Arial, sans-serif',
    h1: {
      fontFamily: 'Proxima Nova, Arial, sans-serif',
      fontWeight: 700,
      fontSize: '3rem',
      color: '#111010',
    },
    h2: {
      fontFamily: 'Proxima Nova, Arial, sans-serif',
      fontWeight: 700,
      fontSize: '2.25rem',
      color: '#111010',
    },
    h3: {
      fontFamily: 'Proxima Nova, Arial, sans-serif',
      fontWeight: 700,
      fontSize: '1.75rem',
      color: '#111010',
    },
    h5: {
      fontFamily: 'Proxima Nova, Arial, sans-serif',
      fontWeight: 700,
      fontSize: '1.25rem',
      color: '#fff',
    },
    body1: {
      fontFamily: 'Proxima Nova, Arial, sans-serif',
      fontSize: '1rem',
      color: '#111010',
    },
    body2: {
      fontFamily: 'Proxima Nova, Arial, sans-serif',
      fontSize: '0.95rem',
      color: '#fff',
    },
    button: {
      fontFamily: 'Proxima Nova, Arial, sans-serif',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Proxima Nova, Arial, sans-serif',
          fontWeight: 600,
          textTransform: 'uppercase',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Proxima Nova, Arial, sans-serif',
        },
      },
    },
  },
});

export default theme;