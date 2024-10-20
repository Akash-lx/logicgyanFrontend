import { Box, Typography } from "@mui/material";
import React from "react";

import Slider from "react-slick";

const ClientReviewCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default slides shown
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // screen width < 1024px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600, // screen width < 600px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box>
      <Box sx={{ width: "100%" }}>
        <Slider {...settings}>
          <Box px={2} py={1}>
            <Box
              p={2}
              borderRadius={3}
              border="2px solid #ededed8a"
              bgcolor="white"
            >
              <Box mb={3} display="flex" alignItems="center">
                <Box width="15%" mr={2}>
                  <img
                    src="/account img ph.png"
                    style={{ aspectRatio: 1 / 1, borderRadius: "49%" }}
                    width="100%"
                  />
                </Box>
                <Box width="100%">
                  <Typography variant="h6">John Deo</Typography>
                </Box>
              </Box>
              <Box mb={3} px={3}>
                <hr className="lightHr" />
              </Box>
              <Box>
                <Typography variant="body2">
                  I’ve downloaded Hrrd from my Google Play about 1 years ago.
                  This make the prototype process so easy and faster. I feel it
                  is a best app for prototype.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box px={2} py={1}>
            <Box
              p={2}
              borderRadius={3}
              border="2px solid #ededed8a"
              bgcolor="white"
            >
              <Box mb={3} display="flex" alignItems="center">
                <Box width="15%" mr={2}>
                  <img
                    src="/account img ph.png"
                    style={{ aspectRatio: 1 / 1, borderRadius: "49%" }}
                    width="100%"
                  />
                </Box>
                <Box width="100%">
                  <Typography variant="h6">John Wick</Typography>
                </Box>
              </Box>
              <Box mb={3} px={5}>
                <hr className="lightHr" />
              </Box>
              <Box>
                <Typography variant="body2">
                  I’ve downloaded Hrrd from my Google Play about 1 years ago.
                  This make the prototype process so easy and faster. I feel it
                  is a best app for prototype.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box px={2} py={1}>
            <Box
              p={2}
              borderRadius={3}
              border="2px solid #ededed8a"
              bgcolor="white"
            >
              <Box mb={3} display="flex" alignItems="center">
                <Box width="15%" mr={2}>
                  <img
                    src="/account img ph.png"
                    style={{ aspectRatio: 1 / 1, borderRadius: "49%" }}
                    width="100%"
                  />
                </Box>
                <Box width="100%">
                  <Typography variant="h6">Korlapu Abhishek</Typography>
                </Box>
              </Box>
              <Box mb={3} px={3}>
                <hr className="lightHr" />
              </Box>
              <Box>
                <Typography variant="body2">
                  I’ve downloaded Hrrd from my Google Play about 1 years ago.
                  This make the prototype process so easy and faster. I feel it
                  is a best app for prototype.
                </Typography>
              </Box>
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

export default ClientReviewCarousel;
