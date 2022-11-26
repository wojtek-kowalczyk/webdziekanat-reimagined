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
import CustomAppBar from "./components/app-bar";
import SideNav from "./components/nav-bar";
import CourseSchedule from "./components/course-schedule";
import PersonalData from "./components/personal-data";
import ReportCard from "./components/report-card";
import SettingsPanel from "./components/settings";
import Administration from "./components/adnimistration";

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

  const handleClose = () => {
    setSignInDialogOpen(false);
  };

  const logIn = (
    accepted: boolean,
    _username: string | undefined,
    password: string | undefined
  ) => {
    handleClose();
    setGlobalProps({
      loggedIn: accepted,
      username: _username ? _username : "",
    });
  };

  const logOut = () => {
    setGlobalProps({
      loggedIn: false,
      username: "",
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
        <SignInDialog
          open={signInDialogOpen}
          onClose={handleClose}
          submitForm={logIn}
        />
        <CustomAppBar
          colorMode={colorMode}
          theme={theme}
          loggedIn={globalProps.loggedIn}
          openSignInDialog={handleClickOpen}
          username={globalProps.username}
          logOutFunction={logOut}
        />
        <div className="viewport">
          <SideNav logOutFunction={logOut} loggedIn={globalProps.loggedIn}/>
          <Box sx={{
            marginLeft: "clamp(225px, 20vw, 300px)"
          }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/schedule" element={<CourseSchedule/>} />
              <Route path="/personal" element={<PersonalData/>} />
              <Route path="/reportcard" element={<ReportCard/>} />
              <Route path="/settings" element={<SettingsPanel/>} />
              <Route path="/administration" element={<Administration/>} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Box>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
