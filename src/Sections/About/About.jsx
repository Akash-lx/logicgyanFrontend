import React from "react";
import Features from "../../components/Features/Features";
import HeroSectionAboutUs from "../../components/HeroSection/HeroSectionAboutUs";
import LatestWork from "./LatestWork";
import { Box, Typography } from "@mui/material";
import ClientReviewCarousel from "../../components/ClientReviewCarousel";
import PictureCarousel from "../../components/PictureCarousel";
import FreeTrailSection from "../../components/FreeTrailSection/FreeTrailSection";

const About = () => {
  return (
    <>
      <HeroSectionAboutUs />
      <Features />
      <LatestWork />
      <Box
        py={10}
        px={5}
        sx={{
          background:
            "linear-gradient(180deg, rgba(240,255,251,1) 0%, rgba(249,249,249,1) 83%)",
        }}
      >
        <Box
          pl={2}
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          mb={5}
          alignItems="center"
        >
          <Typography
            variant="h3"
            fontWeight={600}
            mr={10}
            mb={{ xs: 3, sm: 0 }}
          >
            Best dedicated team
          </Typography>
          <Box display="flex" alignItems="center">
            <Box className="verticalRule"></Box>
            <Typography variant="body2" ml={1}>
              We have 700 plus official workers and thousands of remote workers.
              They
              <br />
              do work them dedicated and they are expert in the particular
              topic.
            </Typography>
          </Box>
        </Box>
        <Box>
          <PictureCarousel />
        </Box>
      </Box>
      <Box bgcolor="#F9F9F9" py={10} px={5}>
        <Box
          pl={2}
          display="flex"
          mb={5}
          alignItems="center"
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <Typography
            variant="h3"
            fontWeight={600}
            mr={10}
            mb={{ xs: 3, sm: 0 }}
          >
            What our client say
          </Typography>
          <Box display="flex" alignItems="center">
            <Box className="verticalRule"></Box>
            <Typography variant="body2" ml={1}>
              Trusted by over 40,000 worldwide customer since 2010. It’s awesome
              <br />
              service. Land from day very fill that midst stars one dominion.
            </Typography>
          </Box>
        </Box>
        <Box>
          <ClientReviewCarousel />
        </Box>
      </Box>
      <FreeTrailSection />
    </>
  );
};

export default About;
