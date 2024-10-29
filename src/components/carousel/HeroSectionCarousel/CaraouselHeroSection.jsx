import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./index.css";

const CaraouselHeroSection = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <Box className="carousel-container" width="100%">
      <IconButton
        onClick={handlePrevious}
        className="carousel-button prev-button"
        sx={{ pr: 2 }}
      >
        <ArrowBackIosIcon />
      </IconButton>

      <Box className="carousel-slide" sx={{ width: "100%" }}>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      </Box>

      <IconButton
        onClick={handleNext}
        className="carousel-button next-button"
        sx={{ pl: 2 }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default CaraouselHeroSection;
