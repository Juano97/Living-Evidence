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

const OurMethods = () => {
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
            Our methods
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
          Following a "learning by doing" methodology we support groups, organizations and institutions that develop evidence synthesis to inform clinical or health policies
          decisions, in the production of a living evidence synthesis from its planning phase until the final report going thought the evidence surveillance and monitoring
          processes.<br /> <br />

          We use strategies and tools such as the LE-IHD framework and its handbook, to guide groups in applying the appropriate criteria in all steps of the process (i.e.
          Identification of relevant questions to include in a “living mode”, planning (protocol) the living evidence synthesis, definition and conduct of the baseline synthesis of
          current evidence, monitoring of emerging evidence and incorporation into the conclusions that inform health decisions) as well as in the key decisions to determine
          whether or not a question should remain in “live mode” <br /> <br />

          We provide training in technological enablers that support the surveillance of emerging evidence, by online modules and regular virtual workshops. <br /> <br />

          We provide user-friendly formats to support each step of the evidence synthesis process, which have been developed following an iterative processes that involved
          expert consultation, user testing, and implementation as part of their validation process. <br /> <br />

          Finally, we provide editorial support and peer review for all the evidence synthesis reports generated as part of the process (i.e. Baseline and updates).
        </Typography>
        <Box sx={{
          marginTop: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        >
          <StaticImage
            src="../assets/images/Mesa_de_trabajo_8_1.png"
            alt="bkg"
            placeholder="tracedSVG"
            layout="constrained"
          ></StaticImage>
        </Box>
      </Container>
    </Box>
  );
};

export default OurMethods;
