import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { ListItemIcon, ListItemText } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "16ch",
      "&:focus": {
        width: "24ch",
      },
    },
  },
}));

export interface DarkModeSwitchProps {
  colorMode: any;
  theme: any;
}

const DarkModeSwitch = (props: DarkModeSwitchProps) => {
  return (
    <IconButton onClick={props.colorMode.toggleColorMode} color="inherit">
      {props.theme.palette.mode === "dark" ? (
        <DarkModeIcon />
      ) : (
        <LightModeIcon />
      )}
    </IconButton>
  );
};

export interface ProfileSnippetProps {
  loggedIn: boolean;
  username: string;
  openSignInDialog: () => void;
  logOutFunction: () => void;
}

const ProfileSnippet = (props: ProfileSnippetProps) => {
  const { username, loggedIn } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        ml: "15px",
        alignItems: "center",
      }}
    >
      {loggedIn ? (
        <>
          <Typography sx={{ mr: 1 }}>{username}</Typography>

          <div>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              onClick={handleClick}
            >
              <PersonIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItem onClick={handleClose} component={Link} to="/personal">
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Personal Info" />
              </MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/settings">
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  props.logOutFunction();
                }}
                component={Link}
                to="/"
              >
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="LogOut" />
              </MenuItem>
            </Menu>
          </div>
        </>
      ) : (
        <Button variant="contained" onClick={() => props.openSignInDialog()}>
          Sign In
        </Button>
      )}
    </Box>
  );
};

export default function CustomAppBar(
  props: DarkModeSwitchProps & {
    loggedIn: boolean;
    openSignInDialog: () => void;
    username: string;
    logOutFunction: () => void;
  }
) {
  return (
    <Box sx={{ flexGrow: 1, zIndex: 10, position: "relative" }}>
      <AppBar enableColorOnDark>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            disableRipple
            sx={{ mr: 2 }}
            component={Link}
            to="/"
          >
            <img
              src="logo.png"
              alt="logo politechnika lodzka"
              style={{ height: 40 }}
            />
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontFamily: "Titillium Web, sans-serif",
            }}
          >
            WebDziekanat Reimagined
          </Typography>

          <DarkModeSwitch colorMode={props.colorMode} theme={props.theme} />

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          {props.loggedIn &&
            <Box sx ={{ml: "15px"}}>
              <Badge badgeContent={3} color="secondary">
                <NotificationsIcon/>
              </Badge>
            </Box>}

          <ProfileSnippet
            username={props.username}
            loggedIn={props.loggedIn}
            openSignInDialog={props.openSignInDialog}
            logOutFunction={props.logOutFunction}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
