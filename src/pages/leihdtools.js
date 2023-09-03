import * as React from "react";
import Layout from "../components/Layout";
import {
  Box,
  Typography,
  Container,
  Divider,
  Chip,
  Button,
} from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";

const LE_IHD_Tools = () => {
  return (
    <Layout>
      <Box
        sx={{
          marginTop: "20px",
          height: "100%",
        }}
      >
        <Box sx={{ background: "#fff" }}>
          <Container
            sx={{ height: { xs: "25px", sm: "25px", md: "50px" } }}
          ></Container>
          <Container sx={{ display: "flex" }}>
            <Box
              sx={{ display: { xs: "none", sm: "block" }, marginRight: "10px" }}
            >
              <StaticImage
                src="../assets/images/simple-logo-dblue.png"
                alt="bkg"
                height={100}
                placeholder="tracedSVG"
                layout="constrained"
              ></StaticImage>
            </Box>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xl: 50, lg: 50, md: 50, sm: 40, xs: 30 },
                display: "flex",
                justifyContent: { xs: "center", sm: "initial" },
                alignItems: "center",
                width: "100%",
              }}
            >
              LE-IHD Tools
            </Typography>
          </Container>
          <Container sx={{ height: "50px" }}></Container>
        </Box>
        <Container
          sx={{
            padding: "0px 0px !important",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: { xl: 18, lg: 18, md: 18, sm: 16, xs: 16 },
              fontFamily: "calibri",
              marginTop: "-30px",
              paddingTop: {
                xl: "40px",
                lg: "40px",
                md: "40px",
                sm: "20px",
                xs: "20px",
              },
              paddingX: {
                xl: "40px",
                lg: "40px",
                md: "40px",
                sm: "20px",
                xs: "20px",
              },
              border: "2px",
              borderRadius: "50px",
              backgroundClip: "border-box",
              background: "#fff",
            }}
            gutterBottom
          >
            Our team has produced a comprehensive set of tools for supporting
            the planning and development of living evidence synthesis
            <Divider
              sx={{ marginX: "100px", marginY: "20px", background: "black" }}
            />
            The most recent breakthrough has been a Framework-based Living
            evidence to inform health decisions interactive tool (LE-IHD
            framework) which provides users with a list of guidance questions as
            well as the necessary links to complete the living evidence
            synthesis tasks.
          </Typography>
        </Container>
        <Container
          sx={{
            padding: "0px 0px !important",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            marginTop: "60px",
          }}
        >
          <Button
            sx={{
              background: "#548235",
              color: "#fff",
              "&:hover": {
                background: "#c6faa5",
                color: "#548235",
              },
            }}
            href="https://living-evidence.epistemonikos.org/home"
            target="_blank"
          >
            LE-IHD Framework
          </Button>
        </Container>
        <Container
          sx={{
            padding: "0px 0px !important",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            marginTop: "40px",
          }}
        >
          <Button
            sx={{
              background: "#2e75b6",
              color: "#fff",
              "&:hover": {
                background: "#a5d1fa",
                color: "#2e75b6",
              },
            }}
            href="https://living-evidence.epistemonikos.org/home"
            target="_blank"
          >
            Templates
          </Button>
        </Container>
        <Box sx={{ background: "#fff" }}></Box>
      </Box>
    </Layout>
  );
};

export default LE_IHD_Tools;

// protocol
// baseline synthesis
// update reports
// evidence survea
