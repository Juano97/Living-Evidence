import * as React from "react";
import Layout from "../components/Layout";
import {
  Box,
  Typography,
  Container,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
  styled,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { createTheme } from "@mui/material/styles";
import { StaticImage } from "gatsby-plugin-image";

const theme = createTheme({
  typography: {
    fontSize: { xl: 18, lg: 18, md: 18, sm: 16, xs: 16 },
  },
});

const Lesrepo = () => {
  const summaries = [
    "Effectiveness and safety of deep brain stimulation in severe and resistant Obsessive Compulsive Disorder",
    "Genicular artery embolization in patients with knee pain secondary to osteoarthritis refractory to usual care",
    "Effectiveness and safety of non-hospital cardiac rehabilitation (primary care, community, home) in patients with ischemic heart disease or heart failure",
    "Cytoreductive surgery (CRS) giving together with hyperthermic intraperitoneal chemotherapy (HIPEC) in pediatric patients (<14 or 18 years) with peritoneal carcinomatosis",
    "Phophylaxis with vitamin D compared to placebo or no prophilaxis In patients at risk of SARS-Cov-2 infection or with mild, moderate or severe COVID-19.",
    "Hyperbaric oxygen therapy In patients with persistent COVID 19",
    "Biologic therapy (monoclonal antibodies) be given in combination with other interventions (LABA/LAMA; ICS, pulmonary rehabilitation) in adults with COPD",
    "Glucagon-like peptide analogues and agonists in type II diabetes",
    "Bevacizumab, Olaparib, Rucaparib and Niraparib for ovarian cancer ",
    "Combined therapy vs monotherapy in treatment of hypertension in adults with diabetes",
  ];

  const details = [
    "Protocol",
    "Baseline Report",
    "Updated Reports",
    "Evidence Surveillance",
    "See in L.OVE",
  ];

  // protocol
  // baseline synthesis
  // update reports
  // evidence survea
  //L.OVE

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
                src="../assets/images/simple-logo-orange.png"
                alt="bkg"
                height={100}
                placeholder="tracedSVG"
                layout="constrained"
              ></StaticImage>
            </Box>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xl: 50, lg: 50, md: 50, sm: 40, xs: 25 },
                display: "flex",
                justifyContent: { xs: "center", sm: "initial" },
                alignItems: "center",
                width: "100%",
              }}
            >
              Research and Innovation
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
              border: "2px",
              borderRadius: "50px",
              backgroundClip: "border-box",
              background: "white",
            }}
            gutterBottom
          >
            Our research aims at improving the production, use and application
            of the living evidence synthesis in different knowledge transfer
            scenarios, as well as identifying and evaluating efficient
            strategies for building capacity among key organizations in the
            health sector for implementation of the living evidence model based
            on innovated technologies.
          </Typography>
          <Divider
            variant="middle"
            sx={{
              marginY: "40px",
              marginX: "100px",
              background: "#fc7a00",
              height: "2px",
            }}
          />
          <Box
            sx={{
              position: "relative",
              fontSize: { xl: 18, lg: 18, md: 18, sm: 16, xs: 16 },
              paddingX: {
                xl: "40px",
                lg: "40px",
                md: "40px",
                sm: "20px",
                xs: "20px",
              },
              paddingBottom: {
                xl: "40px",
                lg: "40px",
                md: "40px",
                sm: "20px",
                xs: "20px",
              },
              border: "2px",
              borderRadius: "50px",
              backgroundClip: "border-box",
              marginBottom: "-30px",
              background: "white",
              zIndex: 1000,
            }}
          >
            <Accordion
              sx={{
                display: "none",
              }}
            >
              <AccordionSummary></AccordionSummary>
              <AccordionDetails></AccordionDetails>
            </Accordion>
            {summaries.map((title) => (
              <Accordion
                disableGutters
                // elevation={0}
                sx={{
                  // borderRadius: "25px",
                  // border: "0.01px solid #fff",
                  // backgroundClip: "border-box",
                  background: "#fff",
                  marginY: "20px",
                  // "&:before": {
                  //   display: "none",
                  // },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "calibri",
                      fontSize: { xl: 24, lg: 24, md: 24, sm: 18, xs: 18 },
                    }}
                    gutterBottom
                  >
                    {title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {details.map((detail) => (
                    <Typography>{detail}</Typography>
                  ))}
                </AccordionDetails>
              </Accordion>
            ))}
            <Accordion
              sx={{
                display: "none",
              }}
            >
              <AccordionSummary></AccordionSummary>
              <AccordionDetails></AccordionDetails>
            </Accordion>
          </Box>
        </Container>
        <Box sx={{ background: "#fff" }}>
          <Container sx={{ height: "50px" }}></Container>
        </Box>
      </Box>
    </Layout>
  );
};

export default Lesrepo;
