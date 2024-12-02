import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import Features from "../../components/Features/Features";
import PricingSection from "../../components/PricingSection/PricingSection";
import IntricateYourApps from "../../components/IntricateYourApps";
import CollaborateSection from "../../components/CollaborateSection/CollaborateSection";
import FreeTrailSection from "../../components/FreeTrailSection/FreeTrailSection";
import EverythingOnePlace from "../../components/EverythingOnePlace/EverythingOnePlace";
import ImgBanner from "../../components/Banner/ImgBanner";
import LandingPageCourse from "../../components/CoursesDisplay/LandingPageCourse";

const HomeSection = () => {
  return (
    <>
      <HeroSection />
      <Features />
      <EverythingOnePlace />
      <LandingPageCourse />
      <CollaborateSection />
      <IntricateYourApps />
      <PricingSection />
      <ImgBanner />
    </>
  );
};

export default HomeSection;
