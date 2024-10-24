import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import Features from "../../components/Features/Features";
import PricingSection from "../../components/PricingSection/PricingSection";
import IntricateYourApps from "../../components/IntricateYourApps";
import CollaborateSection from "../../components/CollaborateSection/CollaborateSection";
import FreeTrailSection from "../../components/FreeTrailSection/FreeTrailSection";
import EverythingOnePlace from "../../components/EverythingOnePlace/EverythingOnePlace";

const HomeSection = () => {
  return (
    <>
      <HeroSection />
      <Features />
      <EverythingOnePlace />
      <CollaborateSection />
      <IntricateYourApps />
      <PricingSection />
      <FreeTrailSection />
    </>
  );
};

export default HomeSection;
