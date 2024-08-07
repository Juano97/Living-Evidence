import * as React from "react";
import {
  Box,
  Typography,
  Container,
  List,
  ListItem,
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
          The Living Evidence to Inform Health Decisions (LE-IHD) program was developed as
          part of the European Union’s Horizon 2020 research and innovation program under a
          Marie Skłodowska-Curie IF Action. Grant agreement No. MSCA-IF-EF-ST #894990 (to
          María Ximena Rojas). <br /> <br />
          The program is being coordinated by Maria Ximena Rojas, senior researcher from the
          Department of Epidemiology and Public Health of the Institut de Recerca de l&#39;Hospital
          de la Santa Creu i Sant Pau – Institut d&#39;Investigació Biomèdica Sant Pau (IIB Sant Pau),
          cradle of the Ibero-American Cochrane Center and the Barcelona GRADE center in
          Barcelona, Spain. It is supported by an international group of expert methodologist
          advisers on topics related to the living evidence synthesis, development of clinical
          practice guidelines, and health technology evaluations.
          The LE-IHD program´s projects and developments have received additional financial
          support from:
          <List>
            <ListItem> - Instituto Carlos III (ISC-III) Madrid, Spain, Fondos FEDER. Grant PI21/01564;
              2021 call. To the project “Strengthening decision-making capacity in the
              Spanish Health System through living evidence: An innovative framework” </ListItem>
            <ListItem> - Agència de gestió d&#39;ajuts universitaris i de recerca (AGAUR), Generalitat de
              Catalunya. Ajuts d’Indústria del Coneixement (IdC). Modalitat C. Innovadors.
              Expedient: 2023 INNOV 00016. CIF (G60136934)</ListItem>
          </List>
        </Typography>
      </Container >
    </Box >
  );
};

export default Funding;
