import * as React from "react";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import { autoPlay } from "react-swipeable-views-utils";
import { Container } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "@fontsource/nanum-gothic"
import photo_0 from "../assets/images/news/ebhc01.png";
import photo_1 from "../assets/images/news/ebhc1.png";
import photo_2 from "../assets/images/news/ebhc2.png";
import photo_3 from "../assets/images/news/ebhc3.png";
import photo_4 from "../assets/images/news/ebhc4.png";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const colors = ["#fc7a00", "#339999", "#99cc33", "#0b0b0b"];

const images = [
  {
    imgPath: photo_0,
    text: (
      <Typography
        sx={{
          borderTopRightRadius: "25px",
          fontSize: { xl: 18, lg: 18, md: 18, sm: 14, xs: 14 },
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
          color: "black",
          flexGrow: 1,
        }}
      >
        Webinar series on 'Best Practices in Evidence Synthesis'. Did you miss
        any of them? click{" "}
        <Link
          fontWeight="bold"
          href="/leihdtools"
          underline="none"
          color="#339999"
        >
          here
        </Link>{" "}
        to the video recordings{" "}
        <Box fontWeight="bold" display="inline">
          #EBHC2023
        </Box>{" "}
        updates.
      </Typography>
    ),
  },
  {
    imgPath: photo_1,
    text: (
      <Typography
        sx={{
          borderTopRightRadius: "25px",
          fontSize: { xl: 18, lg: 18, md: 18, sm: 14, xs: 14 },
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
          color: "black",
          flexGrow: 1,
        }}
      >
        Our group, Living Evidence for Health Decisions, is excited to actively
        participate in the EBHC (Evidence-Based Health Care) Conference 2023 in
        Taormina. We&#39;ll share insights, innovations, and best practices in
        evidence-based healthcare, fostering interactions with experts,
        professionals, and enthusiasts in health decision-making. Stay tuned for{" "}
        <Box fontWeight="bold" display="inline">
          #EBHC2023
        </Box>{" "}
        updates.
      </Typography>
    ),
  },
  {
    imgPath: photo_2,
    text: (
      <Typography
        sx={{
          borderTopRightRadius: "25px",
          fontSize: { xl: 18, lg: 18, md: 18, sm: 14, xs: 14 },
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
          color: "black",
          flexGrow: 1,
        }}
      >
        At the VII ISPOR Colombia Congress, our delegate Dr. María Ximena
        Rojas-Reyes led an enriching &#39;Living Evidence to Inform Health
        Decisions&#39; workshop, offering valuable insights on living evidence
        synthesis. Attendees acquired valuable insights and knowledge, fostering
        the continuous advancement of healthcare decision-making.{" "}
        <Box fontWeight="bold" display="inline">
          #ISPORColombia #LivingEvidence
        </Box>
      </Typography>
    ),
  },
  {
    imgPath: photo_3,
    text: (
      <Typography
        sx={{
          borderTopRightRadius: "25px",
          fontSize: { xl: 18, lg: 18, md: 18, sm: 14, xs: 14 },
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
          color: "black",
          flexGrow: 1,
        }}
      >
        The LE-IHD group presented at the prestigious Cochrane Conference in
        London this year. We highlighted our program, &#39;Living Evidence to
        Inform Health Decisions,&#39; focusing on its knowledge transfer
        capacity building core, the LE-IHD framework, and our latest research.
        The presentation received keen interest from a distinguished audience of
        healthcare professionals and researchers. This conference reaffirmed our
        dedication to evidence-based healthcare.{" "}
        <Box fontWeight="bold" display="inline">
          #CochraneLondon2023
        </Box>
      </Typography>
    ),
  },
  {
    imgPath: photo_4,
    text: (
      <Typography
        sx={{
          borderTopRightRadius: "25px",
          fontSize: { xl: 18, lg: 18, md: 18, sm: 14, xs: 14 },
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
          color: "black",
          flexGrow: 1,
        }}
      >
        Save the date for our upcoming webinar{" "}
        <Box fontWeight="bold" display="inline">
          "Certainty of evidence for network meta-analysis"
        </Box>{" "}
        with the distinguished Dra. Romina Brignardello-Petersen. The webinar is
        scheduled for November 16th, from 15:00 to 17:00 CET and will be
        conducted in Spanish. Secure your spot by registering{" "}
        <Link
          fontWeight="bold"
          href="https://forms.gle/3F2M7tjW5Pt6nYeP8"
          target="_blank"
          underline="none"
          color="#339999"
        >
          here
        </Link>{" "}
        and join us for an enlightening masterclass.
      </Typography>
    ),
  },
];

function Carrusel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;
  const [_autoplay, setAutoplay] = useState(true);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const handleMouseEnter = (e) => {
    setAutoplay(false);
  };

  const handleMouseLeave = (e) => {
    setAutoplay(true);
  };

  return (
    <div
      onMouseEnter={(e) => handleMouseEnter(e)}
      onMouseLeave={(e) => handleMouseLeave(e)}
    >
      <Container
        sx={{
          maxWidth: "100%",
          flexGrow: 1,
          paddingX: "70px !important",
          marginTop: "20px",
        }}
      >
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 50,
            pl: 2,
            bgcolor: "background.default",
          }}
        />
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          interval={10000}
          id="slider"
          autoplay={_autoplay}
        >
          {images.map((step, index) => (
            <Container
              key={step.label}
              sx={{
                display: "flex",
                backgroundClip: "border-box",
              }}
            >
              {Math.abs(activeStep - index) <= 2 ? (
                <Box sx={{ display: "flex" }}>
                  <Box
                    component="img"
                    sx={{
                      height: 230,
                      display: "block",
                      marginRight: "50px",
                      flexGrow: 1,
                      borderTopLeftRadius: "25px",
                    }}
                    src={step.imgPath}
                  />
                  {step.text}
                </Box>
              ) : null}
            </Container>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          sx={{
            ".MuiMobileStepper-dotActive": {
              backgroundColor: colors[activeStep % 4],
            },
          }}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
              sx={{ color: "black" }}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeftIcon />
              ) : (
                <KeyboardArrowRightIcon />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
              sx={{ color: "black" }}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRightIcon />
              ) : (
                <KeyboardArrowLeftIcon />
              )}
              Back
            </Button>
          }
        />
      </Container>
    </div>
  );
}

export default Carrusel;
