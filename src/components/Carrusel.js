import * as React from "react";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import { autoPlay } from "react-swipeable-views-utils";
import { Container } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import photo_1 from "../assets/images/news/ebhc1.png";
import photo_2 from "../assets/images/news/ebhc2.png";
import photo_3 from "../assets/images/news/ebhc3.png";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const colors = ["#fc7a00", "#339999", "#99cc33", "#0b0b0b"];

const images = [
  {
    imgPath: photo_1,
    text: (
      <Typography
        sx={{
          borderTopRightRadius: "25px",
          fontSize: { xl: 18, lg: 18, md: 18, sm: 14, xs: 14 },
          fontFamily: "calibri",
          color: "black",
          flexGrow: 1,
        }}
      >
        Our group, Living Evidence to Inform Health Decisions, will be actively
        participating in the EBHC (Evidence-Based Health Care) Conference 2023,
        scheduled for Taormina. This event offers a valuable platform for our
        team to share the latest insights, innovations, and best practices in
        evidence-based healthcare. We anticipate productive interactions with
        experts, professionals, and enthusiasts at the conference as we
        contribute to the field of health decision-making. Stay tuned for
        updates on our involvement in the{" "}
        <Box fontWeight="bold" display="inline">
          #EBHC2023
        </Box>
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
          fontFamily: "calibri",
          color: "black",
          flexGrow: 1,
        }}
      >
        At the VII ISPOR Colombia Congress, our delegate Dra. María Ximena
        Rojas-Reyes, delivered an enriching experience through the 'Living
        Evidence to Inform Health Decisions' workshop. The training session
        facilitated a comprehensive exploration for planning and developing
        living evidence synthesis. Attendees acquired valuable insights and
        knowledge, fostering the continuous advancement of healthcare
        decision-making. We express our sincere appreciation to all participants
        for their active engagement and eagerly anticipate future collaborations
        in this pivotal field{" "}
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
          fontFamily: "calibri",
          color: "black",
          flexGrow: 1,
        }}
      >
        The LE-IHD group participated in this year's prestigious Cochrane
        Conference, which took place in London. At this esteemed event, we had
        the privilege of presenting our program, 'Living Evidence to Inform
        Health Decisions', with a particular emphasis on its knowledge transfer
        capacity building core, the LE-IHD framework developed, and our latest
        research advancements in the field of living evidence. Our presentation
        was met with keen interest from a distinguished audience of healthcare
        professionals, researchers, and subject matter experts. This conference
        provided a priceless opportunity to reaffirm our resolute dedication to
        evidence-based healthcare{" "}
        <Box fontWeight="bold" display="inline">
          #CochraneLondon2023
        </Box>
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
          marginTop: "30px",
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
          interval={5000}
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
                      height: 270,
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
