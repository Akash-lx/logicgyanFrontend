import React from "react";
import { Box, Typography } from "@mui/material";
import Slider from "react-slick";

const PictureCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Default slides shown
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // screen width < 1024px
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600, // screen width < 600px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box>
      <Box sx={{ width: "100%" }}>
        <Slider {...settings}>
          <Box p={2}>
            <Box width="100%" mb={2}>
              <img
                src="/account img ph.png"
                width="100%"
                style={{ objectFit: "cover", borderRadius: 15 }}
              />
            </Box>
            <Box textAlign="center">
              <Typography variant="h6" mb={1}>
                Daniyel Vettori
              </Typography>
              <Typography variant="subtitle2">Web Developer</Typography>
            </Box>
          </Box>
          <Box p={2}>
            <Box width="100%" mb={2}>
              <img
                src="/account img ph.png"
                width="100%"
                style={{ objectFit: "cover", borderRadius: 15 }}
              />
            </Box>
            <Box textAlign="center">
              <Typography variant="h6" mb={1}>
                Daniyel Vettori
              </Typography>
              <Typography variant="subtitle2">Web Developer</Typography>
            </Box>
          </Box>
          <Box p={2}>
            <Box width="100%" mb={2}>
              <img
                src="/account img ph.png"
                width="100%"
                style={{ objectFit: "cover", borderRadius: 15 }}
              />
            </Box>
            <Box textAlign="center">
              <Typography variant="h6" mb={1}>
                Daniyel Vettori
              </Typography>
              <Typography variant="subtitle2">Web Developer</Typography>
            </Box>
          </Box>
          <Box p={2}>
            <Box width="100%" mb={2}>
              <img
                src="/account img ph.png"
                width="100%"
                style={{ objectFit: "cover", borderRadius: 15 }}
              />
            </Box>
            <Box textAlign="center">
              <Typography variant="h6" mb={1}>
                Daniyel Vettori
              </Typography>
              <Typography variant="subtitle2">Web Developer</Typography>
            </Box>
          </Box>
          <Box p={2}>
            <Box width="100%" mb={2}>
              <img
                src="/account img ph.png"
                width="100%"
                style={{ objectFit: "cover", borderRadius: 15 }}
              />
            </Box>
            <Box textAlign="center">
              <Typography variant="h6" mb={1}>
                Daniyel Vettori
              </Typography>
              <Typography variant="subtitle2">Web Developer</Typography>
            </Box>
          </Box>

          {/* <div>
        <img src="/path/to/image2.jpg" alt="Slide 2" />
      </div>
      <div>
        <img src="/path/to/image3.jpg" alt="Slide 3" />
      </div> */}
          {/* Add more slides as needed */}
        </Slider>
      </Box>
    </Box>
  );
};

export default PictureCarousel;
