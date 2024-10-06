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
  CardMedia,
  CardActionArea,
} from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import "@fontsource/nanum-gothic"
import { SEO } from "../components/SEO";

import webinar1 from "../assets/images/webinars/Webinar_invitation1.png";
import webinar2 from "../assets/images/webinars/Webinar_invitation2.png";
import webinar3 from "../assets/images/webinars/Webinar_invitation3.png";
import webinar4 from "../assets/images/webinars/Webinar_invitation4.png";

import maria_ximena from "../assets/images/team/Maria_Ximena.png";

export const Head = () => <SEO />;

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

  const webinarLinks = [
    "https://drive.google.com/drive/u/3/folders/1mxcRCdTPE92G3p37SAMstQKW4TVF8Ftu",
    "https://drive.google.com/drive/u/3/folders/1Rx_FXv9oAojYe147oV4LnR2X3VQtZs32",
    "https://drive.google.com/drive/u/3/folders/1IXVA3Px49_f6gYuEZ_8mqhDVUogxCM8C",
    "https://drive.google.com/drive/u/3/folders/1v25_kVgm0hrLqfjUZc7vMRx-5vsi8U2w",
  ];

  const MyCardL = (img, index) => {
    return (
      <Card sx={{ display: "flex" }} elevation={0}>
        <CardActionArea target="_blank" href={webinarLinks[index]}>
          <CardMedia component="img" sx={{ height: "380px" }} image={img} />
          {/* <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: { xl: 13, lg: 13, md: 13, sm: 13, xs: 13 },
                fontWeight: "bold",
              }}
            >
              {name} , <br /> {grade}
            </Typography>
          </CardContent> */}
        </CardActionArea>
      </Card>
    );
  };

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
              fontFamily: [
                "Nanum Gothic",
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
            Our team has produced a comprehensive set of tools for supporting
            the planning and development of living evidence synthesis.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xl: 20, lg: 20, md: 20, sm: 16, xs: 16 },
              fontFamily: [
                "Nanum Gothic",
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
          <Divider
            variant="middle"
            sx={{
              marginY: "40px",
              marginX: "100px",
              background: "#339999",
              height: "2px",
            }}
          />
        </Container>
        <Box sx={{ background: "#fff" }}>
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
              Webinars: Best Practices in Evidence Synthesis
            </Typography>
          </Container>
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "50px",
            }}
          >
            <Grid
              container
              sx={{
                paddingX: { sm: "120px", md: "50px" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                href: "",
              }}
            >
              <Grid
                md={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "400px",
                }}
              >
                {MyCardL(webinar1, 0)}
              </Grid>
              <Grid
                md={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "400px",
                  marginTop: { xs: "10px", sm: "10px", md: "0px" },
                }}
              >
                {MyCardL(webinar2, 1)}
              </Grid>

              <Grid
                md={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "400px",
                  marginTop: { xs: "10px", sm: "10px", md: "100px" },
                }}
              >
                {MyCardL(webinar3, 2)}
              </Grid>
              <Grid
                md={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "400px",
                  marginTop: { xs: "10px", sm: "10px", md: "100px" },
                }}
              >
                {MyCardL(webinar4, 3)}
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box sx={{ background: "#fff" }}>
          <Container sx={{ height: "50px" }}></Container>
        </Box>
      </Box>
    </Layout>
  );
};

export default LE_IHD_Tools;
