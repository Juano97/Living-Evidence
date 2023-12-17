import * as React from "react";
import Layout from "../components/Layout";
import { Box, Typography, Container, Divider, Grid } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import { SEO } from "../components/SEO";
export const Head = () => <SEO />;

const Contact = () => {
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
                src="../assets/images/simple-logo-black.png"
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
              Contact
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
              fontFamily: [
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
            Living Evidence-IHD Program administrator
            <br />
            le-ihd.program@livingevidenceihd.com
          </Typography>
        </Container>
      </Box>
    </Layout>
  );
};

export default Contact;
