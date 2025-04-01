import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Menu,
  MenuItem,
  Badge, 
  InputBase,
  Avatar, 
} from "@mui/material";
import { Dashboard, People, Business, Warehouse, Book, Mail, CheckBox, Settings, ExitToApp } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DashboardComponent from "./DashboardComponent";
import Users from "./Users";
import Companies from "./Companies";
import Warehouses from "./Warehouses";
import Bookings from "./Bookings";
import Inbox from "./Inbox";
import ToDo from "./ToDo";
import SettingsComponent from "./SettingsComponent";

const Search = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#f8f9fa",
  borderRadius: 50,
  padding: "5px 15px",
  width: "300px",
}));

const DashboardUI = () => {
  const navigate = useNavigate();
  const [activeComponent, setActiveComponent] = useState("Dashboard");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    navigate("/");
  };

  const menuItems = [
    { text: "Dashboard", icon: <Dashboard />, component: <DashboardComponent /> },
    { text: "Users", icon: <People />, component: <Users /> },
    { text: "Companies", icon: <Business />, component: <Companies /> },
    { text: "Warehouses", icon: <Warehouse />, component: <Warehouses /> },
    { text: "Bookings", icon: <Book />, component: <Bookings /> },
    { text: "Inbox", icon: <Mail />, component: <Inbox /> },
    { text: "To-Do", icon: <CheckBox />, component: <ToDo /> },
    { text: "Settings", icon: <Settings />, component: <SettingsComponent /> },
    { text: "Logout", icon: <ExitToApp />, component: null, action: handleLogout },
  ];

  const renderComponent = () => {
    const selectedItem = menuItems.find(item => item.text === activeComponent);
    return selectedItem && selectedItem.component ? selectedItem.component : <Typography variant="h6">Select a menu item</Typography>;
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Drawer variant="permanent" className="w-64">
        <List>
          {menuItems.map((item, index) => (
            <ListItem 
              button 
              key={index} 
              onClick={() => item.action ? item.action() : setActiveComponent(item.text)} 
              style={{ backgroundColor: activeComponent === item.text ? "#d8281d" : "inherit", color: activeComponent === item.text ? "white" : "black" }}
            >
              <ListItemIcon style={{ color: activeComponent === item.text ? "white" : "black" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <div className="flex-1 p-6 m-6">
        {/* Navbar */}
        <AppBar color="default" className="shadow-none bg-white">
          <Toolbar className="flex justify-between">
            {/* Left: Menu Icon */}
            <IconButton edge="start" color="inherit">
              <MenuIcon />
            </IconButton>

            {/* Center: Search Bar */}
            <Search>
              <SearchIcon color="disabled" />
              <InputBase placeholder="Search" className="ml-2 w-full" />
            </Search>

            {/* Right: Notifications & Profile */}
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <IconButton color="inherit">
                <Badge color="error" variant="dot">
                  <NotificationsIcon />
                </Badge>
              </IconButton>

              {/* Profile */}
              <div className="flex items-center space-x-1 cursor-pointer" onClick={handleMenuClick}>
                <Avatar src="https://via.placeholder.com/40" />
                <div className="text-right">
                  <Typography variant="body1" className="font-medium">Kevinsten</Typography>
                  <Typography variant="caption" color="textSecondary">Admin</Typography>
                </div>
                <ArrowDropDownIcon />
              </div>

              {/* Dropdown Menu */}
              <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>

        {/* Main Content */}
        <div className="mt-6">{renderComponent()}</div>
      </div>
    </div>
  );
};

export default DashboardUI;