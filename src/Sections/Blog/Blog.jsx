import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import BlogHeroSection from "../../components/HeroSection/BlogHeroSection";
import BlogContent from "./BlogContent";

const Blog = () => {
  return (
    <Box>
      <BlogHeroSection />
      <BlogContent />
    </Box>
  );
};

export default Blog;
