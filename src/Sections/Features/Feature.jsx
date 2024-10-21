import React from "react";
import { Box } from "@mui/material";
import FeatureHeroSection from "../../components/HeroSection/FeatureHeroSection";
import AllFeatures from "../../components/Features/AllFeatures";
import PricingSection from "../../components/PricingSection/PricingSection";
import FreeTrailSection from "../../components/FreeTrailSection/FreeTrailSection";

const Feature = () => {
  return (
    <Box>
      <FeatureHeroSection />
      <AllFeatures />
      <PricingSection />
      <FreeTrailSection />
    </Box>
  );
};

export default Feature;
