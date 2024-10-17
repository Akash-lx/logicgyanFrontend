import { Box } from "@mui/material";
import React from "react";
import HeadNavbar from "../components/Navbar";
import HeroSection from "../Sections/HeroSection";
import Courses from "../Sections/Courses/Courses";
import AboutUs from "../Sections/About/AboutUs";

const MainLayout = () => {
  return (
    <Box>
      <HeadNavbar />
      <HeroSection />
      <AboutUs />
      <Courses />
      <Box>Footer</Box>
    </Box>
  );
};

export default MainLayout;
