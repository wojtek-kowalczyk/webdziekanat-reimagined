import React from "react";
import "./App.css";
import Button from "@mui/material/Button";
import { Link, Route, Routes } from "react-router-dom";
import SignIn from "./components/signin";
import Home from "./components/home";
import PageNotFound from "./components/page-not-found";
import {
  Box,
  createTheme,
  CssBaseline,
  IconButton,
  PaletteMode,
  ThemeOptions,
  ThemeProvider,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { getDesignTokens } from "./theme";
import SimpleDialogDemo from "./components/signin-dialog";
import SignInDialog from "./components/signin-dialog";
import SearchAppBar from "./components/app-bar";
import SideNav from "./components/nav-bar";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export interface GlobalProps {
  loggedIn: boolean;
  username: string;
}

function App() {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const [signInDialogOpen, setSignInDialogOpen] = React.useState(false);
  const [globalProps, setGlobalProps] = React.useState({
    loggedIn: false,
    username: "",
  });

  const handleClickOpen = () => {
    setSignInDialogOpen(true);
  };

  const handleClose = (value: boolean) => {
    setSignInDialogOpen(false);
  };

  const logIn = (
    accepted: boolean,
    _username: string | undefined,
    password: string | undefined
  ) => {
    setGlobalProps({
      loggedIn: accepted,
      username: _username ? _username : "",
    });
  };

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {/* <Button variant="contained" onClick={() => setSignInDialogOpen(true)}>
          Sign In
        </Button>
        <SignInDialog
          open={signInDialogOpen}
          onClose={handleClose}
          submitForm={logIn}
        /> */}

        <SearchAppBar />

        <div className="viewport">

          <SideNav />

          <Box >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>

            <p>default content</p>
            <IconButton onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </IconButton>
          </Box>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
