import * as React from "react";
import Layout from "../components/Layout";
import {
  Box,
  Typography,
  Container,
  Divider,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import "@fontsource/nanum-gothic"
import { StaticImage } from "gatsby-plugin-image";
import { SEO } from "../components/SEO";
export const Head = () => <SEO />;

const Community = () => {
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
                src="../assets/images/simple-logo-lblue.png"
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
              Community and Services
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
              fontSize: { xl: 20, lg: 20, md: 20, sm: 18, xs: 18 },
              fontFamily: [
                "Nanum Gothic",
                "Calibri",
                "Candara",
                "Segoe",
                "Segoe UI",
                "Optima",
                "Arial",
                "sans-serif",
              ].join(","),
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
            Through research and innovation that integrates the most current
            developments and guarantees high quality standards, we strengthen
            the decision-making capacity through Living Evidence.
          </Typography>
        </Container>
        <Container sx={{ marginTop: "50px" }}>
          <Grid container spacing={0.5}>
            <Grid md={4}>
              <Card variant="outlined" sx={{ border: "none" }}>
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xl: 28, lg: 28, md: 28, sm: 24, xs: 24 },
                    }}
                    gutterBottom
                  >
                    Support the Community
                  </Typography>
                  <Divider
                    sx={{
                      marginX: "50px",
                      marginTop: "20px",
                      marginBottom: "25px",
                      height: "2px",
                      background: "#99ccff",
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xl: 20, lg: 20, md: 20, sm: 18, xs: 18 },
                      fontFamily: [
                        "Nanum Gothic",
                        "Calibri",
                        "Candara",
                        "Segoe",
                        "Segoe UI",
                        "Optima",
                        "Arial",
                        "sans-serif",
                      ].join(","),
                      paddingX: "40px",
                    }}
                    gutterBottom
                  >
                    We support the community of health actors and
                    decision-makers to incorporate efficient, innovative and
                    current processes to inform decisions based on the most
                    reliable and current evidence.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid md={4}>
              <Card variant="outlined" sx={{ border: "none" }}>
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xl: 28, lg: 28, md: 28, sm: 24, xs: 24 },
                    }}
                    gutterBottom
                  >
                    Methodological Advice
                  </Typography>
                  <Divider
                    sx={{
                      marginX: "50px",
                      marginTop: "20px",
                      marginBottom: "25px",
                      height: "2px",
                      background: "#99ccff",
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xl: 20, lg: 20, md: 20, sm: 18, xs: 18 },
                      fontFamily: [
                        "Nanum Gothic",
                        "Calibri",
                        "Candara",
                        "Segoe",
                        "Segoe UI",
                        "Optima",
                        "Arial",
                        "sans-serif",
                      ].join(","),
                      paddingX: "40px",
                    }}
                    gutterBottom
                  >
                    We provide methodological advice and support to governmental
                    and institutional projects of adoption and adaptation and
                    development of evidence-based recommendations, ensuring
                    their constant updating as "Living recommendations".
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid md={4}>
              <Card variant="outlined" sx={{ border: "none" }}>
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xl: 28, lg: 28, md: 28, sm: 24, xs: 24 },
                    }}
                    gutterBottom
                  >
                    Living Evidence Synthesis
                  </Typography>
                  <Divider
                    sx={{
                      marginX: "50px",
                      marginTop: "20px",
                      marginBottom: "25px",
                      height: "2px",
                      background: "#99ccff",
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xl: 20, lg: 20, md: 20, sm: 18, xs: 18 },
                      fontFamily: [
                        "Nanum Gothic",
                        "Calibri",
                        "Candara",
                        "Segoe",
                        "Segoe UI",
                        "Optima",
                        "Arial",
                        "sans-serif",
                      ].join(","),
                      paddingX: "40px",
                    }}
                    gutterBottom
                  >
                    We develop and maintain living evidence synthesis as part of
                    clinical practice guidelines "Living guidelines", technology
                    evaluations "Living HTA", and other knowledge transfer
                    products (e.g. therapeutic positioning studies in emerging
                    technologies among other products).
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Divider
            sx={{
              marginY: "40px",
              marginX: "100px",
              height: "2px",
              background: "#99ccff",
            }}
          />
        </Container>
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
            Organizations we support
          </Typography>
        </Container>

        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "50px",
          }}
        >
          <Grid
            container
            sx={{
              paddingX: { sm: "120px", md: "50px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid md={2}></Grid>
            <Grid
              md={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "160px",
              }}
            >
              <StaticImage
                src={"../assets/images/logo_santpau.png"}
                height={160}
              ></StaticImage>
            </Grid>
            <Grid md={2}></Grid>
            <Grid
              md={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "160px",
                marginTop: { xs: "10px", sm: "10px", md: "0px" },
              }}
            >
              <StaticImage
                style={{ display: "flex", justifyContent: "center" }}
                src={"../assets/images/logo_aragones.png"}
                height={160}
              ></StaticImage>
            </Grid>
            <Grid md={2}></Grid>
            <Grid
              item
              md={3}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                height: "160px",
                marginTop: { xs: "10px", sm: "10px", md: "0px" },
              }}
            >
              <StaticImage
                src={"../assets/images/logo_madrid.png"}
                height={160}
              ></StaticImage>
            </Grid>
            <Grid md={1}></Grid>

            <Grid
              item
              md={3}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                height: "160px",
                marginTop: { xs: "10px", sm: "10px", md: "0px" },
              }}
            >
              <StaticImage
                src={"../assets/images/logo_navarro.png"}
                height={160}
              ></StaticImage>
            </Grid>
            <Grid md={1}></Grid>
            <Grid
              md={3}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                height: "160px",
                marginTop: { xs: "10px", sm: "10px", md: "0px" },
              }}
            >
              <StaticImage
                src={"../assets/images/logo_osteba.png"}
                height={160}
              ></StaticImage>
            </Grid>
            <Grid md={2}></Grid>
            <Grid
              md={3}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                height: "160px",
                marginTop: { xs: "10px", sm: "10px", md: "0px" },
              }}
            >
              <StaticImage
                src={"../assets/images/logo_sescs.png"}
                height={160}
              ></StaticImage>
            </Grid>
            <Grid md={2}></Grid>
            <Grid
              md={3}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                height: "160px",
                marginTop: { xs: "10px", sm: "10px", md: "0px" },
              }}
            >
              <StaticImage
                src={"../assets/images/logo_aval.png"}
                height={160}
              ></StaticImage>
            </Grid>
            <Grid md={2}></Grid>
          </Grid>
        </Container>
        <Box sx={{ background: "#fff" }}>
          <Container sx={{ height: "50px" }}></Container>
        </Box>
      </Box>
    </Layout>
  );
};

export default Community;
