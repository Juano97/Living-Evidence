import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Box, Container, Grid } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./layout.css";

const theme = createTheme({
  typography: {
    fontFamily: ["Saira", "calibri", "sans-serif"].join(","),
  },
});

theme.typography.body1 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.4rem",
  },
};

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Box
        sx={{
          height: "calc(100% - 128px)",
        }}
      >
        {children}
      </Box>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
