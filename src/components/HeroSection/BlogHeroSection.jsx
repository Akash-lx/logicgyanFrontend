import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import { colors } from "../../config/colorPalette";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const BlogHeroSection = () => {
  return (
    <Box
      className="mainContainer"
      sx={{
        backgroundColor: "rgb(201,238,229)",
        background:
          "linear-gradient(180deg, rgba(201,238,229,1) 15%, rgba(255,255,255,1) 100%)",
      }}
      pt={10}
      mb={10}
    >
      <Box py={10}>
        <Typography variant="h1" fontWeight={700} textAlign="center">
          Blog
        </Typography>
        <Typography variant="body1" fontWeight={700} textAlign="center">
          Home{" "}
          <Typography variant="span" color={colors.primary.light}>
            / Blog
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default BlogHeroSection;
