'use client';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../themes/theme' 
import { CssBaseline } from '@mui/material';

export default function ClientThemeProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    {children}
    </ThemeProvider>
    );
}