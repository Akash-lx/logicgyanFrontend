import React from "react";
import { Box, Typography } from "@mui/material";
import { colors } from "../../config/colorPalette";
import Carousel from "../../components/carousel/carousel";

const AboutUs = () => {
  return (
    <Box bgcolor="#04775a" py={5} px={3}>
      <Box mb={3}>
        <Typography
          variant="h1"
          fontSize={50}
          color={colors.white}
          textAlign="center"
        >
          About{" "}
          <Typography variant="span" color={colors.primary.xlight}>
            LogicGyan
          </Typography>
        </Typography>
      </Box>
      <Box mb={3}>
        <Typography variant="body2" color={colors.white} textAlign="center">
          At{" "}
          <Typography color={colors.primary.xlight} variant="span">
            LogicGyan
          </Typography>
          , we believe that learning has no boundaries. We are committed to
          providing world-class education to anyone, anywhere, at any time. Our
          platform offers a vast array of expertly crafted courses designed to
          help you gain the skills you need to succeed in today’s fast-paced
          world.
        </Typography>
      </Box>
      <Box>
        <Carousel images={["PHimage1.png", "PHimage2.png", "logicgyan.png"]} />
      </Box>
    </Box>
  );
};

export default AboutUs;
