import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Box, Container, Grid, Divider } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./layout.css";
import { SEO } from "../components/SEO";
import "@fontsource/nanum-gothic"

const theme = createTheme({
  typography: {
    fontFamily: ["Nanum Gothic", "Saira", "calibri", "sans-serif"].join(","),
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
    <SEO>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Box sx={{ minHeight: "calc(100% - 210px)" }}>{children}</Box>
        {/* <Divider
        sx={{
          height: "2px",
          marginBottom: "25px",
          marginX: "100px",
          //backgroundImage: "linear-gradient(to right, #fff , #339999)",
          background: "#339999",
        }}
      /> */}
        <Footer />
      </ThemeProvider>
    </SEO>
  );
};

export default Layout;

export const Head = () => <SEO />;
