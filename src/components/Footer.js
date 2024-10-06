import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "@fontsource/nanum-gothic"
import {
  Box,
  Container,
  Grid,
  Typography,
  Tooltip,
  Fade,
  Button,
  Divider,
} from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import { Link, navigate } from "gatsby";

import i_color from "../assets/images/simple-logo-c.png";
import i_orange from "../assets/images/simple-logo-orange.png";
import i_lblue from "../assets/images/simple-logo-lblue.png";
import i_dblue from "../assets/images/simple-logo-dblue.png";
import i_lgreen from "../assets/images/simple-logo-lgreen.png";
import i_black from "../assets/images/simple-logo-black.png";

const pngs = [i_orange, i_lblue, i_dblue, i_lgreen, i_black];
const title = [
  "Home",
  "Research and Innovation",
  "Community and Services",
  "Training and Tools",
  "LE Synthesis Repository",
];
const navPages = [
  "",
  "research",
  "community",
  "leihdtools",
  "lesrepo",
];

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        display: { sm: "flex", xs: "none" },
        background: "#fff",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >

        <Box sx={{ width: 500, marginBottom: "10px" }}>
          {title.map((name, j) => (
            <Tooltip
              title={name}
              arrow
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
            >
              <Button
                onClick={() => {
                  navigate("/" + navPages[j]);
                }}
              >
                {<img height={40} src={pngs[j]}></img>}
              </Button>
            </Tooltip>
          ))}
        </Box>
        <Button
          onClick={() => {
            navigate("/");
          }}
          sx={{ textTransform: "none" }}
        >
          <Typography
            sx={{
              fontSize: { xl: 16, lg: 16, md: 16, sm: 16, xs: 16 },
              color: "black",
              marginBottom: "15px",
            }}
          >
            2023 - Living Evidence To Inform Health Decisions Program
          </Typography>
        </Button>
      </Container>
    </Box>
  );
}
