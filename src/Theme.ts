import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    button: {
      fontSize: 13,
      fontWeight: 700,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});
