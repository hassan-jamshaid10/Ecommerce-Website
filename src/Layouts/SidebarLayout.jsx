import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse, Toolbar, Box, CssBaseline, Typography } from "@mui/material";
import { Dashboard, ShoppingCart, Inventory, LocalOffer, Settings, ExpandLess, ExpandMore } from "@mui/icons-material";
import { NavLink, Outlet } from "react-router-dom";

const drawerWidth = 260;

const SidebarLayout = () => {
  const [openSections, setOpenSections] = useState({
    inventory: false,
    orders: false,
    coupons: false,
    settings: false,
  });

  const handleToggle = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "linear-gradient(to bottom, #1e3c72, #2a5298)", // Gradient Sidebar
            color: "#fff", // White text color
          },
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "center", p: 2 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              background: "linear-gradient(90deg, #ff8c00, #ff2d55)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            ADMIN PANEL
          </Typography>
        </Toolbar>

        <List>
          <ListItem button component={NavLink} to="/" end>
            <ListItemIcon sx={{ color: "#fff" }}><Dashboard /></ListItemIcon>
            <ListItemText primary="Dashboard" sx={{ color: "white" }} />
          </ListItem>

          {/* Inventory Section */}
          <ListItem button onClick={() => handleToggle("inventory")}>
            <ListItemIcon sx={{ color: "#fff" }}><Inventory /></ListItemIcon>
            <ListItemText primary="Inventory" sx={{ color: "white" }} />
            {openSections.inventory ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openSections.inventory} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button sx={{ pl: 4 }} component={NavLink} to="/products">
                <ListItemText primary="Products" sx={{ color: "white" }} />
              </ListItem>
            </List>
          </Collapse>

          {/* Orders Section */}
          <ListItem button onClick={() => handleToggle("orders")}>
            <ListItemIcon sx={{ color: "#fff" }}><ShoppingCart /></ListItemIcon>
            <ListItemText primary="Orders" sx={{ color: "white" }} />
            {openSections.orders ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openSections.orders} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button sx={{ pl: 4 }} component={NavLink} to="/orders">
                <ListItemText primary="View Orders" sx={{ color: "white" }} />
              </ListItem>
            </List>
          </Collapse>

          {/* Coupons Section */}
          <ListItem button onClick={() => handleToggle("coupons")}>
            <ListItemIcon sx={{ color: "#fff" }}><LocalOffer /></ListItemIcon>
            <ListItemText primary="Coupons" sx={{ color: "white" }} />
            {openSections.coupons ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openSections.coupons} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button sx={{ pl: 4 }} component={NavLink} to="/coupons">
                <ListItemText primary="Manage Coupons" sx={{ color: "white" }} />
              </ListItem>
            </List>
          </Collapse>

          {/* Settings Section */}
          <ListItem button onClick={() => handleToggle("settings")}>
            <ListItemIcon sx={{ color: "#fff" }}><Settings /></ListItemIcon>
            <ListItemText primary="Settings" sx={{ color: "white" }} />
            {openSections.settings ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openSections.settings} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button sx={{ pl: 4 }} component={NavLink} to="/settings">
                <ListItemText primary="General Settings" sx={{ color: "white" }} />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default SidebarLayout;
