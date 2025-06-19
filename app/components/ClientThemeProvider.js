'use client';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../themes/theme' 

export default function ClientThemeProvider({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}