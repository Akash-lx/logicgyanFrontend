import { Box, Typography } from "@mui/material";
import React from "react";
import { colors } from "../config/colorPalette";
import Grid from "@mui/material/Grid2";

const IntricateYourApps = () => {
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
    <Box bgcolor="#E5FFF9" py={5}>
      <Box>
        <Typography
          variant="h3"
          fontWeight={600}
          lineHeight={1.2}
          textAlign="center"
        >
          Easy to Intricate <br />
          <Typography component="span" variant="h3" fontWeight={600}>
            Your Apps
          </Typography>
        </Typography>
      </Box>
      <Box>
        <Grid container>
          <Grid size={2}>
            <Box>Hello</Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default IntricateYourApps;
