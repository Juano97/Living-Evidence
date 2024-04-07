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

const Funding = () => {
  return (
    <Box
      sx={{
        marginTop: "40px",
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
            Funding & support
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
          This program is being coordinated from the Department of Epidemiology and Public Health of the Institut de Recerca de
          l'Hospital de la Santa Creu i Sant Pau – Institut d'Investigació Biomèdica Sant Pau (IIB Sant Pau), cradle of the Ibero-American
          Cochrane Center in Barcelona, Spain. It is supported by an international group of expert methodologist advisers on topics
          related to the living evidence synthesis, development of clinical practice guidelines, and health technology evaluations. <br /> <br />

          The program is led by María Ximena Rojas RN, MSc, Ph.D, as principal investigator who started it as a beneficiary of the
          H2020 Marie Curie Actions for Individual Researchers grant (MSCA-IF-EF- ST #894990). Currently, it has different funding
          sources, including a grant from the Programa Estatal de Generación de Conocimiento y Fortalecimiento del Sistema Español,
          Subprograma estatal de generación de conocimiento, Instituto Carlos III de Madrid.
        </Typography>
      </Container>
    </Box>
  );
};

export default Funding;
