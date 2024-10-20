import React from "react";
import { Box, Typography } from "@mui/material";
import { colors } from "../config/colorPalette";

const Ribbon = () => {
  return (
    <Box bgcolor={colors.primary.main}>
      <Box display="flex" justifyContent="space-between" px={3} py={5}>
        <Box color={colors.white}>
          <Typography variant="h6">Flexible Classes</Typography>
          <Typography>You Pick schedule</Typography>
        </Box>
        <Box color={colors.white}>
          <Typography variant="h6">Flexible Classes</Typography>
          <Typography>You Pick schedule</Typography>
        </Box>
        <Box color={colors.white}>
          <Typography variant="h6">Flexible Classes</Typography>
          <Typography>You Pick schedule</Typography>
        </Box>
        <Box color={colors.white}>
          <Typography variant="h6">Flexible Classes</Typography>
          <Typography>You Pick schedule</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Ribbon;
