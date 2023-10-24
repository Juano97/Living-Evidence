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

const Research = () => {
  const summaries = [
    "Living Evidence to Inform Health Decisions",
    "Methodological Approaches for Developing and Reporting Living Evidence Synthesis",
    "Strengthening Decision-Making Capacity in the Spanish Health System Through Living Evidencence",
    "Living Evidence Synthesis Updates Reporting Model: The LESS Project",
    "Integration of high quality real world evidence in the Living Evidence Synthesis model",
  ];

  const details = [
    <>
      An European research project focused on knowledge transfer and capacity
      building, involves the
      <Box fontWeight="bold" display="inline">
        {" "}
        design and evaluation{" "}
      </Box>
      of a model strategy to integrate the processes of "living evidence" into
      the products that organizations and groups in charge of informing
      decisions carry out regularly. Its results include a series of support
      tools for groups and organizations. We highlight the “LE-IHD” framework,
      an interactive tool that guides groups in the definition, planning, and
      maintenance of a living synthesis. If you want to know more about this
      project, you can contact its main researcher{" "}
      <Link
        fontWeight="bold"
        href="https://mxrojas@livingevidenceihd.org"
        target="_blank"
        underline="none"
        color="#fc7a00"
      >
        María Ximena Rojas
      </Link>
      .<br />
      <Box fontWeight="bold" display="inline">
        <Link
          href="https://open-research-europe.ec.europa.eu/articles/1-114"
          target="_blank"
          color="#fc7a00"
          underline="none"
        >
          Protocol
        </Link>
        <br />
        Starting date: September 2020
        <br />
        Current status: finished (December 2022)
      </Box>
    </>,
    <>
      This is a methodological study that aims to identify, evaluate and
      summarize the methods and procedures used by the authors to keep the
      evidence "alive". To meet this objective, we will search the different
      health databases for all the articles that report a synthesis of living
      evidence to answer a health question. Articles that meet the previously
      established “Living Evidence” characteristics will be included and
      evaluated to obtain information related to the methods used by the authors
      to constantly identify new evidence, the procedures used to incorporate
      new findings into the evidence synthesis, and the process followed to
      inform users about the updates, among other information of methodological
      interest. This information will be analyzed and presented descriptively.
      If you want to know more about this project, you can contact its main
      researcher{" "}
      <Link
        fontWeight="bold"
        href="https://ariadna.auladell@livingevidenceihd.com"
        target="_blank"
        color="#fc7a00"
        underline="none"
      >
        Ariadna Auladell R
      </Link>
      .<br />
      <Box fontWeight="bold" display="inline">
        <Link
          href="https://open-research-europe.ec.europa.eu/articles/1-113"
          target="_blank"
          color="#fc7a00"
          underline="none"
        >
          Protocol
        </Link>
        <br />
        Starting date: September 2021
        <br />
        Current status: Data collection
        <br />
        Funding: Instituto de Salud Carlos III (ISC-III), Madrid, Spain. Grant
        PI21/01564; 2021 call
      </Box>
    </>,
    <>
      This project seeks to evaluate a capacity building strategy aimed at
      strengthening the abilities of the groups or institutions in the health
      sector in charge of synthesizing evidence to inform clinical decisions or
      health policies, for planning, developing, and maintaining the constant
      updating of the evidence synthesis through the living evidence model. This
      model is particularly applied in the solution of clinically relevant
      problems, in which the evidence changes rapidly, the effects of health
      interventions are controversial, or there are uncertainties due to their
      recent appearance as health technology. The capacity building strategy
      involves a series of accompanying actions by expert methodologists,
      support in the LE-IHD framework and its user manual, in addition to
      training activities in the use of tools based on artificial intelligence,
      which support the processes of identification, selection and monitoring of
      emerging evidence. If you want to know more about this project, you can
      contact its main researcher{" "}
      <Link
        fontWeight="bold"
        href="https://mxrojas@livingevidenceihd.org"
        target="_blank"
        color="#fc7a00"
        underline="none"
      >
        María Ximena Rojas
      </Link>
      .<br />
      <Box fontWeight="bold" display="inline">
        <br />
        Starting date: February 2022
        <br />
        Current status: Data collection
        <br />
        Funding: Instituto de Salud Carlos III (ISC-III), Madrid, Spain. Grant
        PI21/01564; 2021 call
      </Box>
    </>,
    <>
      This is an iterative multidesign study that will allow for the systematic
      and rigorous development of a "living evidence update reporting model".
      This model will serve as the basis for the construction of "Living
      Evidence Structured Summaries" (LESS) that present in a clear and
      structured way the necessary information for the decision maker, on the
      results of the evidence monitoring process, when it requires the
      incorporation of new evidence that changes the effects on key outcomes of
      the questions that are included in a "living mode". If you want to know
      more about this project, you can contact its main researcher{" "}
      <Link
        fontWeight="bold"
        href="https://ariadna.auladell@livingevidenceihd.com"
        target="_blank"
        color="#fc7a00"
        underline="none"
      >
        Ariadna Auladell R
      </Link>
      .<br />
      <Box fontWeight="bold" display="inline">
        <Link
          href="https://open-research-europe.ec.europa.eu/articles/1-113"
          target="_blank"
          color="#fc7a00"
          underline="none"
        >
          Protocol
        </Link>
        <br />
        Starting date: January 2023
        <br />
        Current status: Planning phase
      </Box>
    </>,
    <>Description Pending</>,
  ];

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
            {summaries.map((item, i) => (
              <Accordion
                disableGutters
                // elevation={0}
                sx={{
                  borderRadius: "25px",
                  border: "0.01px solid #fff",
                  backgroundClip: "border-box",
                  background: "#ddd",
                  marginY: "20px",
                  "&:before": {
                    display: "none",
                  },
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
                    {item}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      fontFamily: "calibri",
                      fontSize: { xl: 18, lg: 18, md: 18, sm: 16, xs: 16 },
                    }}
                  >
                    {details[i]}
                  </Typography>
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

export default Research;
