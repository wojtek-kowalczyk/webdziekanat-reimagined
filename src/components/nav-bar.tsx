import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import HomeIcon from "@mui/icons-material/Home";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { Link } from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { Box } from "@mui/system";

export default function SideNav() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: "20%", maxWidth: 300, minWidth: 225, display: "flex", flexDirection: "column", backgroundColor: "background.paper"}}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton component={Link} to="/" sx={{flex: 0}}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>

      <ListItemButton component={Link} to="/schedule" sx={{flex: 0}}>
        <ListItemIcon>
          <CalendarMonthIcon />
        </ListItemIcon>
        <ListItemText primary="Course Shedule" />
      </ListItemButton>

      <ListItemButton component={Link} to="/reportcard" sx={{flex: 0}}>
        <ListItemIcon>
          <LibraryBooksIcon />
        </ListItemIcon>
        <ListItemText primary="Report Card" />
      </ListItemButton>

      <ListItemButton component={Link} to="/personal" sx={{flex: 0}}>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Personal Info" />
      </ListItemButton>

      <ListItemButton component={Link} to="/administration" sx={{flex: 0}}>
        <ListItemIcon>
          <HomeWorkIcon />
        </ListItemIcon>
        <ListItemText primary="Administration" />
      </ListItemButton>

      {/* Expander */}
      <Box sx={{flex: "1" }} />

      <ListItemButton component={Link} to="/settings" sx={{flex: 0}}>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItemButton>

      <ListItemButton
        component={Link}
        to="/"
        onClick={() => alert("todo : logout")}
        sx={{flex: 0}}
      >
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="LogOut" />
      </ListItemButton>

      {/* --------------------- NESTED LIST --------------------- */}
      {/* 
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Nested" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="nested 1" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="nested 2" />
          </ListItemButton>
        </List>
      </Collapse>
       */}
    </List>
  );
}
