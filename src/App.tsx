import React from 'react';
import './App.css';
import Button from '@mui/material/Button'
import { Link, Route, Routes } from "react-router-dom"
import SignIn from './components/signin';
import Home from './components/home';
import PageNotFound from './components/page-not-found';
import { createTheme, IconButton, PaletteMode, ThemeOptions, ThemeProvider } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { amber, deepOrange, grey } from '@mui/material/colors';
import { getDesignTokens } from './theme';

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

function App() {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme(getDesignTokens(mode)),
    [mode],
  );


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <div className='header'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </div>
        <div className='content'>
          <p>default content</p>
          <IconButton onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
