import * as React from "react";
import {
  Box,
  Typography,
  Container,
} from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import "@fontsource/nanum-gothic"

import { SEO } from "../components/SEO";
export const Head = () => <SEO />;

const WWD = () => {
  return (
    <Box
      sx={{
        marginTop: "60px",
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
            What we do?
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
          The program has two main development areas. On one hand, we conduct <Box fontWeight="bold" display="inline">
            research
          </Box> aimed at improving the
          production, use and application of the living evidence synthesis in different knowledge transfer scenarios, as
          well as identifying and evaluating efficient strategies for building capacity among key organizations in the
          health sector. On the other hand, the program provides <Box fontWeight="bold" display="inline">
            services
          </Box> to support both, the building of the capacities
          among groups and organizations for the production and use of living evidence syntheses to inform health
          decisions, as well as the generation, maintenance, and periodical reporting of living evidence synthesis
          necessary to inform living recommendations in clinical practice guidelines, health technology evaluations
          (living HTA), evidence summaries for institutional or public policies among other applications.
        </Typography>
      </Container>
    </Box>
  );
};

export default WWD;
