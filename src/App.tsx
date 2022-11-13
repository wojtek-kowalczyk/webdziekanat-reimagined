import React from "react";
import "./App.css";
import Button from "@mui/material/Button";
import { Link, Route, Routes } from "react-router-dom";
import SignIn from "./components/signin";
import Home from "./components/home";
import PageNotFound from "./components/page-not-found";
import {
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

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export interface GlobalProps {
  loggedIn: boolean;
  username: string;
}

function App() {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const [globalProps, setGlobalProps] = React.useState({
    loggedIn: false,
    username: "",
  });

  const [open, setOpen] = React.useState(false);
  const [signedIn, setSignedIn] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: boolean) => {
    setOpen(false);
  };

  const logIn = (
    accepted: boolean,
    _username: string | undefined,
    password: string | undefined
  ) => {
    console.log(accepted, _username);
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

        <p>logged user: {!globalProps.loggedIn? "No user" : globalProps.username}</p>

        <Button variant="contained" onClick={() => setOpen(true)}>
          Sign In
        </Button>
        <SignInDialog open={open} onClose={handleClose} submitForm={logIn} />

        <div className="side-nav" style={{ backgroundColor: "#ff00f0" }}>
          <p>naviation menu</p>
          <ul className="side-nav-list">
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="whatever">whatever</Link>
            </li>
          </ul>
        </div>

        <div className="content">
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
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
