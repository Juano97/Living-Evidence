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
import { StaticImage } from "gatsby-plugin-image";

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
                      fontFamily: "calibri",
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
                    Methodological Advise
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
                      fontFamily: "calibri",
                      paddingX: "40px",
                    }}
                    gutterBottom
                  >
                    We provide methodological advise and support to governmental
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
                      fontFamily: "calibri",
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
            Our Partners
          </Typography>
        </Container>
      </Box>
    </Layout>
  );
};

export default Community;
