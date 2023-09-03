import * as React from "react";
import Layout from "../components/Layout";
import { Box, Typography, Container, Divider, Chip } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";

const About = () => {
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
                src="../assets/images/simple-logo-c.png"
                alt="bkg"
                height={100}
                placeholder="tracedSVG"
                layout="constrained"
              ></StaticImage>
            </Box>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xl: 50, lg: 50, md: 50, sm: 40, xs: 40 },
                display: "flex",
                justifyContent: { xs: "center", sm: "initial" },
                alignItems: "center",
                width: "100%",
              }}
            >
              About us
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
              fontSize: { xl: 22, lg: 22, md: 22, sm: 20, xs: 20 },
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
            We are a group of expert methodologists and health researchers, with
            extensive experience in the development of evidence synthesis and
            related products such as clinical practice guidelines, and health
            technology assessment, among others aimed at supporting the
            knowledge transfer in health. <div style={{ marginTop: "30px" }} />{" "}
            Working together with a group of expert advisors and strategic
            partners, we support our research, validate our processes, and
            promote the use and application of our developments for health
            decisions to be based on the most current and reliable evidence.
          </Typography>
          <Divider
            variant="middle"
            sx={{
              marginY: "40px",
              marginX: "100px",
              background: "black",
              height: "2px",
            }}
          />
        </Container>
        <Box sx={{ background: "#fff" }}>
          <Container sx={{ display: "flex" }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xl: 32, lg: 32, md: 32, sm: 30, xs: 26 },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              Our Partners
            </Typography>
          </Container>
          <Container>Aqui van las fotos de los partners</Container>
        </Box>
      </Box>
    </Layout>
  );
};

export default About;
