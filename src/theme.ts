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
          main: '#c52b1a', //'#8B0304',
          contrastText: '#ffffff',
        },
        secondary: {
          main: '#72D48E',
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
          main: '#c52b1a',
          contrastText: '#ffffff',
        },
        secondary: {
          main: '#72D48E',
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