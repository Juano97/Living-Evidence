import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Box,
  Container,
  Grid,
  Typography,
  Tooltip,
  Fade,
  Button,
} from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import { Link, navigate } from "gatsby";

import i_color from "../assets/images/simple-logo-c.png";
import i_orange from "../assets/images/simple-logo-orange.png";
import i_lblue from "../assets/images/simple-logo-lblue.png";
import i_dblue from "../assets/images/simple-logo-dblue.png";
import i_lgreen from "../assets/images/simple-logo-lgreen.png";
import i_black from "../assets/images/simple-logo-black.png";

const pngs = [i_color, i_orange, i_lblue, i_dblue, i_lgreen, i_black];
const title = [
  "About Us",
  "Research and Innovation",
  "Community and Services",
  "Training and Tools",
  "LE Synthesis Repository",
  "Contact Us",
];
const navPages = [
  "about",
  "research",
  "community",
  "leihdtools",
  "lesrepo",
  "contact",
];

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        display: { sm: "flex", xs: "none" },
        background: "#fff",
        bottom: 0,
        zIndex: "1000",
        opacity: "85%",
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
            2023 - Living Evidence IHD
          </Typography>
        </Button>
        {/* <Typography
          sx={{
            fontSize: { xl: 12, lg: 12, md: 12, sm: 12, xs: 12 },
            marginBottom: "10px",
          }}
        >
          le-ihd.program@livingevidenceihd.com
        </Typography> */}

        <BottomNavigation sx={{ width: 500, marginBottom: "10px" }}>
          {title.map((name, j) => (
            <Tooltip
              title={name}
              arrow
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
              sx={{ zIndex: "1001" }}
            >
              <BottomNavigationAction
                value="nearby"
                icon={<img height={24} src={pngs[j]}></img>}
                onClick={() => {
                  navigate("/" + navPages[j]);
                }}
              />
            </Tooltip>
          ))}
        </BottomNavigation>
      </Container>
    </Box>
  );
}
