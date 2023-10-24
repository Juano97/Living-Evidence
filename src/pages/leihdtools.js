import * as React from "react";
import Layout from "../components/Layout";
import {
  Box,
  Typography,
  Container,
  Divider,
  Chip,
  Grid,
  Card,
  Link,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";

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

const LE_IHD_Tools = () => {
  const supportingTools = [
    "LE-IHD framework based tool",
    "LE-synthesis protocol template",
    "LE-synthesis baseline report template",
    "LE- synthesis update report template",
    "LE-synthesis PRISMA template",
  ];

  const trainingTools = [
    "Living evidence and supporting tools",
    "Evidence synthesis to inform health decisions",
    "The GRADE approach in developing recommendations",
    "Living health technology assessment",
    "Implementing recommendations in clinical settings",
  ];

  const supportingLinks = [
    "https://living-evidence.epistemonikos.org/home",
    "",
    "https://osf.io/jtw35/files/osfstorage/64b49934e17d4f03687aa4f6",
    "",
    "",
  ];

  const trainingLinks = ["", "", "", "", ""];

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
                src="../assets/images/simple-logo-dblue.png"
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
              Training and Tools
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
              background: "#fff",
            }}
            gutterBottom
          >
            Our team has produced a comprehensive set of tools for supporting
            the planning and development of living evidence synthesis.
          </Typography>
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
              background: "#fff",
            }}
            gutterBottom
          >
            The most recent breakthrough has been a Framework-based Living
            evidence to inform health decisions interactive tool (LE-IHD
            framework) which provides users with a list of guidance questions as
            well as the necessary links to complete the living evidence
            synthesis tasks.
          </Typography>
        </Container>
        <Container sx={{ marginTop: "50px" }}>
          <Grid
            container
            spacing={0.5}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Grid md={6}>
              <Card variant="outlined" sx={{ border: "none" }}>
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xl: 28, lg: 28, md: 28, sm: 24, xs: 24 },
                    }}
                    gutterBottom
                  >
                    Training
                  </Typography>
                  <Divider
                    sx={{
                      marginX: "50px",
                      marginTop: "20px",
                      marginBottom: "25px",
                      height: "2px",
                      background: "#339999",
                    }}
                  />
                  <List
                    disablePadding={true}
                    dense={true}
                    sx={{ textAlign: "center" }}
                  >
                    {trainingTools.map((repo, i) => (
                      <ListItem sx={{ textAlign: "left", paddingLeft: "50px" }}>
                        <ListItemText>
                          <Link
                            alignItems={"center"}
                            sx={{
                              fontSize: {
                                xl: 20,
                                lg: 20,
                                md: 20,
                                sm: 18,
                                xs: 18,
                              },
                            }}
                            href=""
                            target="_blank"
                            underline="none"
                            color="black"
                          >
                            {repo}
                          </Link>
                        </ListItemText>
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
            <Grid md={6}>
              <Card variant="outlined" sx={{ border: "none" }}>
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: { xl: 28, lg: 28, md: 28, sm: 24, xs: 24 },
                    }}
                    gutterBottom
                  >
                    Supporting Tools
                  </Typography>
                  <Divider
                    sx={{
                      marginX: "50px",
                      marginTop: "20px",
                      marginBottom: "25px",
                      height: "2px",
                      background: "#339999",
                    }}
                  />
                  <List
                    disablePadding={true}
                    dense={true}
                    sx={{ textAlign: "center" }}
                  >
                    {supportingTools.map((repo, i) => (
                      <ListItem sx={{ textAlign: "left", paddingLeft: "50px" }}>
                        <ListItemText>
                          <Link
                            alignItems={"center"}
                            sx={{
                              fontSize: {
                                xl: 20,
                                lg: 20,
                                md: 20,
                                sm: 18,
                                xs: 18,
                              },
                            }}
                            href={supportingLinks[i]}
                            target="_blank"
                            underline="none"
                            color="black"
                          >
                            {repo}
                          </Link>
                        </ListItemText>
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>

        <Box sx={{ background: "#fff" }}>
          <Container sx={{ height: "150px" }}></Container>
        </Box>
      </Box>
    </Layout>
  );
};

export default LE_IHD_Tools;

// protocol
// baseline synthesis
// update reports
// evidence survea
