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
  const ongoingSum = [
    "Effectiveness and safety of deep brain stimulation in severe and resistant Obsessive Compulsive Disorder",
    "Genicular artery embolization in patients with knee pain secondary to osteoarthritis refractory to usual care",
    "Effectiveness and safety of non-hospital cardiac rehabilitation (primary care, community, home) in patients with ischemic heart disease or heart failure",
    "Cytoreductive surgery (CRS) giving together with hyperthermic intraperitoneal chemotherapy (HIPEC) in pediatric patients (<14 or 18 years) with peritoneal carcinomatosis",
    "Phophylaxis with vitamin D compared to placebo or no prophilaxis In patients at risk of SARS-Cov-2 infection or with mild, moderate or severe COVID-19.",
    "Hyperbaric oxygen therapy In patients with persistent COVID 19",
    "Biologic therapy (monoclonal antibodies) be given in combination with other interventions (LABA/LAMA; ICS, pulmonary rehabilitation) in adults with COPD",
    "Glucagon-like peptide analogues and agonists in type II diabetes",
    "Bevacizumab, Olaparib, Rucaparib and Niraparib for ovarian cancer ",
    "Combined therapy vs monotherapy in treatment of hypertension in adults",
  ];

  const ongoingDet = [
    "Protocol",
    "Baseline Report",
    "Updated Reports",
    "Evidence Surveillance",
    "See in L.OVE",
  ];

  const ongoingLOVE = [
    "https://app.iloveevidence.com/loves/6442a0185d935300087c89ff?question_domain=5b1dcd8ae611de7ae84e8f14&population=6442b6d7206f2b00076f6a76&intervention=64418d822dfa8e00086a4c99&classification=all",
    "https://app.iloveevidence.com/loves/58c04f21d56e642e050aee10?question_domain=5b1dcd8ae611de7ae84e8f14&population=5d1498e1daeedf730326b7be&intervention=64257d4edc36eb00073b7f30&classification=systematic-review",
    [
      {
        title: "Ischemic heart diseases",
        link: "https://app.iloveevidence.com/loves/6440522e13ada700083195b2?question_domain=5b1dcd8ae611de7ae84e8f14&population=5d2756d7daeedf1d3af3332a&intervention=64254f9b4fc01800099c3242&classification=systematic-review",
      },
      {
        title: "Heart failure",
        link: "https://app.iloveevidence.com/loves/595c3d3565dee07a6fff282b?question_domain=5b1dcd8ae611de7ae84e8f14&population=5d2742ccdaeedf1d3af33329&intervention=64254f9b4fc01800099c3242&classification=systematic-review",
      },
    ],
    "https://app.iloveevidence.com/loves/5e1a3db369c00e2adfdfead7?question_domain=5b1dcd8ae611de7ae84e8f14&population=5d65406b69c00e507e1c88da&intervention=642597e1168b060008b1742c&classification=all",
    [
      {
        title: "Covid",
        link: "https://app.iloveevidence.com/loves/5e6fdb9669c00e4ac072701d?question_domain=5b1dcd8ae611de7ae84e8f14&population=5f180a1c3552583e3bc9e8be&intervention=5d65854869c00e131b5a4c60&intervention_variable=603b9fe03d05151f35cf13dc&classification=all",
      },
      {
        title: "At risk of SARS-CoV-2 infection",
        link: "https://app.iloveevidence.com/loves/5e6fdb9669c00e4ac072701d?question_domain=5b1dcd8ae611de7ae84e8f14&population=5f1809fa69c00e5e2d82b225&intervention=5d65854869c00e131b5a4c60&intervention_variable=603b9fe03d05151f35cf13dc&classification=all",
      },
    ],
    "https://app.iloveevidence.com/loves/5e6fdb9669c00e4ac072701d?question_domain=5b1dcd8ae611de7ae84e8f14&population=60bf8350ea8890b2d8b37150&intervention=5e8fbba83d05155dd92c3199&intervention_variable=603b9fe03d05151f35cf13dc&classification=all",
    "https://app.iloveevidence.com/loves/5c87af8ac80dd42a1ac0c712?question_domain=5b1dcd8ae611de7ae84e8f14&population=5d0b5bdedbe4d25bcfbee803&intervention=642185205ef94100080f67b1&classification=systematic-review",
    "",
    "",
    "",
  ];

  const getOngoingDict = () => {
    var temp = [];
    for (let index = 0; index < ongoingSum.length; index++) {
      temp.push({
        0: "",
        1: "",
        2: "",
        3: "",
        4: ongoingLOVE[index],
      });
    }
    return temp;
  };

  const ongoingDict = getOngoingDict();

  const resolvedSum = [
    "Chimeric antigen receptor T cell therapy for hematological malignancies",
    "Fecal microbiota transplant for ulcerative colitis ",
    "Mechanical assist devices in cardiovascular diseases",
    "Glucagon-like peptide analogues and agonists in type II diabetes mellitus",
    "Three-dimensional mammography for breast cancer",
    "Bevacizumab, olaparib, rucaparib and niraparib for ovarian cancer",
  ];

  const resolvedDet = [
    "Protocol",
    "Baseline Report",
    "Updated Report",
    "See in L.OVE",
  ];

  const resolvedLOVE = [
    "https://app.iloveevidence.com/loves/60a515783d05155d670f4f6d?question_domain=5b1dcd8ae611de7ae84e8f14&population=5d4a749c69c00e69c91e5ff5&intervention=60a4e5ac69c00e3874b51aa6&classification=all",
    "https://app.iloveevidence.com/loves/5b5f2f63c80dd41ff5583f36?question_domain=5b1dcd8ae611de7ae84e8f14&population=5d52970369c00e3de533d807&intervention=5d9f92b83c12ef4de3dce659&classification=systematic-review",
    "https://app.iloveevidence.com/loves/60be456f35525860bb2a3a02?question_domain=5b1dcd8ae611de7ae84e8f14&population=5d27427edaeedf1d3af33328&intervention=60ad7996355258737783d474&classification=all",
    "https://app.iloveevidence.com/loves/5b7e78ddc80dd4376f2b3dd5?question_domain=5b1dcd8ae611de7ae84e8f14&population=5d52919a69c00e3de733d81f&intervention=5d67d29d69c00e131b5a4cad&classification=systematic-review",
    "https://app.iloveevidence.com/loves/598e0a2b65dee02d5eede318?question_domain=5b1dccf3e611de7ae84e8f12&population=5d07efb1dbe4d25bcebee227&intervention=5e66a2403d051578b5c8b494&classification=systematic-review",
    "",
  ];

  const getResolvedDict = () => {
    var temp = [];
    for (let index = 0; index < resolvedSum.length; index++) {
      temp.push({
        0: "",
        1: "",
        2: "",
        3: resolvedLOVE[index],
      });
    }
    return temp;
  };

  const resolvedDict = getResolvedDict();

  const colours = ["#FFA400", "#E07907", "#999933", "#99CC33", "#99CCFF"];
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
                src="../assets/images/simple-logo-lgreen.png"
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
              LE-Synthesis Repository
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
            LE-IHD program has supported the development of several living
            evidence synthesis from various organizations. With this free access
            repository, we support the evidence ecosystem by avoiding
            duplication of efforts between groups and we support the reuse of
            evidence in the processes of generation and adaptation of
            recommendations. <br />
            <br />
            The shared documents are registered in the Open Science Framework,
            and its citation must include the corresponding doi.
          </Typography>
          <Divider
            variant="middle"
            sx={{
              marginY: "40px",
              marginX: "100px",
              background: "#99CC33",
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
                Ongoing
              </Typography>
            </Container>
            <Accordion
              sx={{
                display: "none",
              }}
            >
              <AccordionSummary></AccordionSummary>
              <AccordionDetails></AccordionDetails>
            </Accordion>
            {ongoingSum.map((title, i) => (
              <Accordion
                disableGutters
                // elevation={0}
                sx={{
                  borderRadius: "25px",
                  border: "0.01px solid #fff",
                  backgroundClip: "border-box",
                  background: "#fff",
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
                      position: "relative",
                    }}
                    gutterBottom
                  >
                    {title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {ongoingDet.map((detail, j) =>
                    typeof ongoingDict[i][j] == "string" ? (
                      <Typography
                        variant="body1"
                        sx={{
                          fontFamily: "calibri",
                          fontSize: { xl: 18, lg: 18, md: 18, sm: 16, xs: 16 },
                        }}
                        gutterBottom
                      >
                        <Link
                          fontWeight="bold"
                          href={ongoingDict[i][j]}
                          target="_blank"
                          underline="none"
                          color="black"
                        >
                          {detail}
                        </Link>
                      </Typography>
                    ) : (
                      // <>
                      //   {ongoingDict[i][j].map((letter, z) => (
                      //     <>{letter.title}</>
                      //   ))}
                      // </>
                      // //<>{console.log(ongoingDict[i][j])}</>
                      <Accordion
                        disableGutters
                        elevation={0}
                        sx={{
                          border: "0.01px solid #fff",
                          backgroundClip: "border-box",
                          background: "#fff",
                          top: "-12px",
                          "&:before": {
                            display: "none",
                          },
                        }}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMore />}
                          aria-controls="panel2a-content"
                          id="panel2a-header-summary"
                          sx={{
                            padding: "0px",
                          }}
                        >
                          <Typography
                            variant="body1"
                            sx={{
                              fontFamily: "calibri",
                              fontWeight: "bold",
                              fontSize: {
                                xl: 18,
                                lg: 18,
                                md: 18,
                                sm: 16,
                                xs: 16,
                              },
                            }}
                          >
                            {detail}
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails id="panel2a-header-details">
                          {ongoingDict[i][j].map((multidet, z) => (
                            <Typography
                              variant="body1"
                              sx={{
                                fontFamily: "calibri",
                                fontSize: {
                                  xl: 18,
                                  lg: 18,
                                  md: 18,
                                  sm: 16,
                                  xs: 16,
                                },
                              }}
                              gutterBottom
                            >
                              <Link
                                fontWeight="bold"
                                href={multidet.link}
                                target="_blank"
                                underline="none"
                                color="black"
                              >
                                {multidet.title}
                              </Link>
                            </Typography>
                          ))}
                        </AccordionDetails>
                      </Accordion>
                    )
                  )}
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
          <Divider
            variant="middle"
            sx={{
              marginY: "40px",
              marginX: "100px",
              background: "#99CC33",
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
                Resolved
              </Typography>
            </Container>
            <Accordion
              sx={{
                display: "none",
              }}
            >
              <AccordionSummary></AccordionSummary>
              <AccordionDetails></AccordionDetails>
            </Accordion>
            {resolvedSum.map((title, i) => (
              <Accordion
                disableGutters
                // elevation={0}
                sx={{
                  borderRadius: "25px",
                  border: "0.01px solid #fff",
                  backgroundClip: "border-box",
                  background: "#fff",
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
                    {title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {resolvedDet.map((detail, j) => (
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: "calibri",
                        fontSize: { xl: 18, lg: 18, md: 18, sm: 16, xs: 16 },
                      }}
                      gutterBottom
                    >
                      <Link
                        fontWeight="bold"
                        href={resolvedDict[i][j]}
                        target="_blank"
                        underline="none"
                        color="black"
                      >
                        {detail}
                      </Link>
                    </Typography>
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

// add aetsa (esta en downloads)

// updated report
// LOVE

// Ongoing
// Resolved

// supporting tools

// https://living-evidence.epistemonikos.org/home
// LE-IHD framework based tool

// LE-synthesis protocol template
// LE-synthesis baseline report template
// LE- synthesis update report template
// LE-synthesis PRISMA template

// training

// Living evidence and supporting tools
// Evidence synthesis to inform health decisions
// The GRADE approach in developing recomendations
// Living heath technology assesment
// Implementing recomendations in clinical settings
