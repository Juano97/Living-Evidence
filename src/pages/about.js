import * as React from "react";
import {
  Box,
  Typography,
  Container,
  Divider,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import "@fontsource/nanum-gothic"
import maria_ximena from "../assets/images/team/Maria_Ximena.png";
import ariadna from "../assets/images/team/Ariadna.png";
import gabriel_rada from "../assets/images/team/Gabriel_Rada.png";
import gerard from "../assets/images/team/Gerard_Urrutia.png";

import { SEO } from "../components/SEO";
export const Head = () => <SEO />;

const About = () => {
  const MyCardL = (img, name, grade) => {
    return (
      <Card sx={{ display: "flex" }} elevation={0}>
        <CardMedia component="img" sx={{ width: "100px" }} image={img} />
        <CardContent
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
        </CardContent>
      </Card>
    );
  };

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
            About us
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
          We are a group of expert methodologists and health researchers, with
          extensive experience in the development of evidence synthesis and
          related products such as clinical practice guidelines, and health
          technology assessment, among others aimed at supporting the
          knowledge transfer in health. <div style={{ marginTop: "30px" }} />{" "}
          Working together with a group of expert advisors and strategic
          partners, we support our research, validate our processes, and
          promote the use and application of our developments for health
          decisions to be based on the most current and reliable evidence.
        </Typography>
        <Divider
          variant="middle"
          sx={{
            marginY: "40px",
            marginX: "100px",
            background: "black",
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
            Our Team
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
              paddingLeft: { sm: "240px", md: "150px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid
              md={5}
              sx={{
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
                height: "160px",
              }}
            >
              {MyCardL(
                maria_ximena,
                "María Ximena Rojas MSc. Ph.D",
                "LE-IHD Program Group Leader"
              )}
            </Grid>
            <Grid md={2}></Grid>
            <Grid
              md={5}
              sx={{
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
                height: "160px",
                marginTop: { xs: "10px", sm: "10px", md: "0px" },
              }}
            >
              {MyCardL(
                ariadna,
                "Ariadna Auladell-Rispau MSc. Ph.D (c) ",
                "LE-IHD Research Coordinator"
              )}
            </Grid>
            <Grid
              md={5}
              sx={{
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
                height: "160px",
              }}
            >
              {MyCardL(
                gerard,
                "Gerard Urrutia. MD. Ph.D",
                "Director Iberoamerican Cochrane Center"
              )}
            </Grid>
            <Grid md={2}></Grid>
            <Grid
              md={5}
              sx={{
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
                height: "160px",
                marginTop: { xs: "10px", sm: "10px", md: "0px" },
              }}
            >
              {MyCardL(
                gabriel_rada,
                "Gabriel Rada MD.",
                "Director Fundación Epistemonikos"
              )}
            </Grid>
          </Grid>
        </Container>
        <Container sx={{ height: "60px" }}>
          <Divider
            variant="middle"
            sx={{
              marginY: "40px",
              marginX: "100px",
              background: "black",
              height: "2px",
            }}
          />
        </Container>
      </Box>
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
            Our Partners
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
            }}
          >
            <Grid md={2}></Grid>
            <Grid
              md={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "160px",
              }}
            >
              <StaticImage
                src={"../assets/images/logo_epistemonikos1.png"}
                height={160}
              ></StaticImage>
            </Grid>
            <Grid md={2}></Grid>
            <Grid
              md={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "160px",
                marginTop: { xs: "10px", sm: "10px", md: "0px" },
              }}
            >
              <StaticImage
                style={{ display: "flex", justifyContent: "center" }}
                src={"../assets/images/logo_cochrane.png"}
                height={160}
              ></StaticImage>
            </Grid>
            <Grid md={2}></Grid>

            <Grid
              item
              md={3}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                height: "160px",
                marginTop: { xs: "10px", sm: "10px", md: "0px" },
              }}
            >
              <StaticImage
                src={"../assets/images/logo_evidence.png"}
                height={160}
              ></StaticImage>
            </Grid>
            <Grid md={1}></Grid>

            <Grid
              item
              md={3}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                height: "160px",
                marginTop: { xs: "10px", sm: "10px", md: "0px" },
              }}
            >
              <StaticImage
                src={"../assets/images/logo_recerca.png"}
                height={160}
              ></StaticImage>
            </Grid>
            <Grid md={1}></Grid>

            <Grid
              md={3}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                height: "160px",
                marginTop: { xs: "10px", sm: "10px", md: "0px" },
              }}
            >
              <StaticImage
                src={"../assets/images/logo_mcgrade.png"}
                height={160}
              ></StaticImage>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
