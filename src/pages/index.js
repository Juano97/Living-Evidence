import * as React from "react";
import Layout from "../components/Layout";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import Carrusel from "../components/Carrusel";
import "@fontsource/nanum-gothic"
import { SEO } from "../components/SEO";
import About from "./about";
import WWD from "./wwd";
import OurMethods from "./ourMethods";
import Funding from "./funding";
import Contact from "./contact";
export const Head = () => <SEO />;

export default function Home() {
  return (
    <Layout>
      <Box
        sx={{
          height: "100%",
          marginTop: "20px",
        }}
      >
        <Container>
          <Grid md={7}>
            <Box sx={{ background: "#fff" }}>
              <Container
                sx={{ height: { xs: "30px", sm: "50px", md: "100px" } }}
              ></Container>
              <Container
                sx={{ width: { xl: "70%", lg: "60%", md: "60%", sm: "60%" } }}
              >
                <StaticImage
                  src={"../assets/images/logo-v-long.png"}
                ></StaticImage>
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
                  fontSize: { xl: 20, lg: 20, md: 20, sm: 16, xs: 16 },
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
                  height: "100%",
                }}
                gutterBottom
              >
                Is a knowledge transfer program that seeks to support the
                building of capacities among the groups, organizations, and
                institutions that carry out evidence synthesis to inform
                clinical or health policy decisions, for the incorporation of
                the “living evidence model” in their usual process, in order to
                efficiently integrate the most current evidence in guidelines,
                health technology assessment and evidence summaries that they
                regularly generate. <br /> <br /> Our mission is to ensure
                health decisions are informed by the most reliable and actual
                evidence bringing the most current methodological developments
                and the most innovative technologies to the health sector
                organizations.
              </Typography>
              <Carrusel />
            </Container>
          </Grid>
          <Grid md={2}></Grid>
          <WWD />
          <OurMethods />
          <About />
          <Funding />
          <Contact />
        </Container>

        <Container sx={{ height: "100px" }}></Container>
      </Box>

    </Layout>
  );
}
