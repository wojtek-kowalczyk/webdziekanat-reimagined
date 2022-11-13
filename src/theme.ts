import { PaletteMode } from '@mui/material';

// header red: #8b0304
// background grey: #f0f0f0
// white bg: #ffffff

// dark red: #8B0304
// some beige: #72D48E
// helvetica, arial, sans-serif

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        // palette values for light mode
        primary: {
          // main: '#c52b1a',
          main: '#8B0304',
          contrastText: '#ffffff',
        },
        secondary: {
          main: '#72D48E',
        },
        background: {
          default: '#fafafa',
          paper: '#fff',
        },
        error: {
          main: '#ff1200',
        },
        link: {
          main: "#ff00ff"
        },
      }
      : {
        // palette values for dark mode
        primary: {
          main: '#8B0304',
          contrastText: '#ffffff',
        },
        secondary: {
          main: '#72D48E',
        },
        background: {
          default: '#303030',
          paper: '#424242',
        },
        error: {
          main: '#ff1200',
        },
        link: {
          main: "#ff00ff"
        },
      }),
  },
});