import * as React from "react";

import { AppBar, Box, CssBaseline, Divider, TextField } from "@mui/material";

import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, navigate } from "gatsby";
import "@fontsource/saira";
import logo from "../assets/images/logo-h.png";

const drawerWidth = 240;
const navItems = [
  "Home",
  "About Us",
  "Research and \n Innovation",
  "Community and \n Services",
  "Training and \n Tools",
  "LE Synthesis \n Repository",
  "Contact Us",
];
const navPages = [
  "",
  "about",
  "research",
  "community",
  "leihdtools",
  "lesrepo",
  "contact",
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", background: "#fff", height: "100%" }}
    >
      <Button
        sx={{ minHeight: "64px", background: "#fff", width: "100%" }}
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={logo} style={{ maxWidth: "100%", height: "40px" }}></img>
      </Button>
      <Divider />
      <List>
        {navItems.map((item, i) => (
          <>
            <ListItem key={item} disablePadding>
              <ListItemButton
                sx={{ textAlign: "center" }}
                onClick={() => {
                  navigate("/" + navPages[i]);
                }}
              >
                <ListItemText
                  primary={item}
                  sx={{
                    "& span, & svg": {
                      fontSize: 26,
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
            <Divider sx={{ marginX: "50px" }} />
          </>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", height: "64px", maxHeight: "64px" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundImage: "linear-gradient(to right, #fff , #339999)",
        }}
      >
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              display: "block",
              minHeight: "64px",
            }}
          >
            <Button
              onClick={() => {
                navigate("/");
              }}
              sx={{ minHeight: "64px" }}
            >
              <img
                src={logo}
                style={{ maxWidth: "100%", height: "40px" }}
              ></img>
            </Button>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { md: "block", lg: "none" },
              color: "#333333",
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: { xs: "none", ls: "none", md: "none", lg: "block" },
            }}
          >
            {navItems.map((item, i) => (
              <Button
                key={item}
                sx={{
                  color: "#333333",
                  marginRight: "25px",
                  fontFamily: [
                    "Calibri",
                    "Candara",
                    "Segoe",
                    "Segoe UI",
                    "Optima",
                    "Arial",
                    "sans-serif",
                  ].join(","),
                  fontSize: 15,
                }}
                onClick={() => {
                  navigate("/" + navPages[i]);
                }}
              >
                <span style={{ whiteSpace: "pre-line" }}>{item}</span>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { md: "block", lg: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
