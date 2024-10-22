import React from "react";
import { Box, Typography } from "@mui/material";
import { colors } from "../../config/colorPalette";
import Carousel from "../carousel/carousel";
import HoverLevitateCard from "../Cards/HoverLevitateCard";
import {
  featuredCardContent,
  featuredCardContent2,
} from "../../config/content";

const Features = () => {
  return (
    <Box
      py={5}
      px={3}
      mb={10}
      sx={{
        backgroundImage: `url('/bg-compelete.png')`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box mb={3}>
        <Typography
          variant="h3"
          fontWeight={600}
          color={colors.primary.main}
          textAlign="center"
        >
          Featured We
        </Typography>
        <br />
        <Typography
          variant="h3"
          fontWeight={600}
          color={colors.primary.main}
          textAlign="center"
        >
          Provide for You
        </Typography>
      </Box>

      <Box display="flex" flexWrap="wrap" justifyContent="center">
        {featuredCardContent.map((ele) => (
          <HoverLevitateCard content={cardContent(ele)} />
        ))}
      </Box>
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        {featuredCardContent2.map((ele) => (
          <HoverLevitateCard content={cardContent(ele)} />
        ))}
      </Box>
    </Box>
  );
};

const cardContent = (data) => (
  <Box display="flex">
    <Box width="20%">
      <img
        src={`/icons_logos/${data.img}`}
        width="80%"
        style={{ objectFit: "cover", aspectRatio: 1 / 1, padding: 1 }}
      />
    </Box>
    <Box>
      <Typography variant="h6" mb={3} fontWeight={550}>
        {data.head}
      </Typography>
      <Typography variant="body2" color="#5a7184" fontWeight={550}>
        {data.contentPara}
      </Typography>
    </Box>
  </Box>
);

export default Features;
