import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import Features from "../../components/Features/Features";
import PricingSection from "../../components/PricingSection/PricingSection";
import IntricateYourApps from "../../components/IntricateYourApps";

const HomeSection = () => {
  return (
    <>
      <HeroSection />
      <Features />
      {/* <IntricateYourApps /> */}
      <PricingSection />
    </>
  );
};

export default HomeSection;
