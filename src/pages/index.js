import * as React from "react";
import Layout from "../components/Layout";
import { Box, Typography, Container } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";

export default function Home() {
  return (
    <Layout>
      <Box
        sx={{
          marginTop: "20px",
          height: "100%",
        }}
      >
        <Box sx={{ background: "#fff" }}>
          {/* background: "#cfeeed" */}
          <Container></Container>
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
              height: "100%",
              border: "2px",
              borderRadius: "50px",
              backgroundClip: "border-box",
              background: "white",
            }}
            gutterBottom
          >
            Is a knowledge transfer program that seeks to support the building
            of capacities among the groups, organizations, and institutions that
            carry out evidence synthesis to inform clinical or health policy
            decisions, for the incorporation of the “living evidence model” in
            their usual process, in order to efficiently integrate the most
            current evidence in guidelines, health technology assessment and
            evidence summaries that they regularly generate. Our mission is to
            ensure health decisions are informed by the most reliable and actual
            evidence bringing the most current methodological developments and
            the most innovative technologies to the health sector organizations.
          </Typography>
        </Container>
      </Box>

      <Box></Box>
    </Layout>
  );
}
