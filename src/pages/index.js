import * as React from "react";
import Layout from "../components/Layout";
import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import { StaticImage, GatsbyImage } from "gatsby-plugin-image";
import Carrusel from "../components/Carrusel";

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
          {/* <Grid
            sx={{ background: "gray", height: "100%" }}
            sm={12}
            xs={12}
            md={3}
          >
            <Box sx={{ height: "100%" }}>
              <StaticImage
                src={"../assets/images/doctor_image1.png"}
                alt="doctor"
                style={{ height: "100%" }}
                imgStyle={{}}
                layout="constrained"
                as="section"
              ></StaticImage>
              <Paper
                sx={{
                  height: "100%",
                  backgroundImage: `url(${foto})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  display: "flex",
                }}
              >
                <StaticImage
                  src={"../assets/images/logo-v-long.png"}
                  width={400}
                ></StaticImage>
              </Paper>
            </Box>
          </Grid> */}
          <Grid md={7}>
            <Box sx={{ background: "#fff" }}>
              <Container
                sx={{ height: { xs: "30px", sm: "50px", md: "100px" } }}
              ></Container>
              {/* <Container
                sx={{
                  display: "flex",
                  height: {
                    xl: "91.22px",
                    lg: "91.22px",
                    md: "89.55px",
                    sm: "46.67px",
                    xs: "46.67px",
                  },
                  marginY: "50px",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xl: 50, lg: 50, md: 50, sm: 40, xs: 40 },
                    display: "flex",
                    justifyContent: { xs: "center", sm: "initial" },
                    alignItems: "center",
                    width: "100%",
                    // paddingLeft: {
                    //   xl: "101.22px",
                    //   lg: "101.22px",
                    //   md: "101.22px",
                    //   sm: "101.22px",
                    // },
                  }}
                >
                  Living Evidence to Inform Health Decisions (LE-IHD) Program
                </Typography>
              </Container> */}
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
        </Container>
      </Box>

      <Box sx={{ background: "#fff" }}>
        <Container sx={{ height: "100px" }}></Container>
      </Box>
    </Layout>
  );
}
