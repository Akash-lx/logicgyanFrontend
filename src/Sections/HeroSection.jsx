import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import { colors } from "../config/colorPalette";

const HeroSection = () => {
  return (
    <Box className="mainContainer" bgcolor={colors.primary.main} pt={10}>
      <Grid container alignItems="center">
        <Grid size={6}>
          <Box p={3}>
            <Typography variant="h1" fontSize={50} color="white">
              Transform Your Career with
              <br /> On-Demand Skills –{"  "}
              <Typography
                variant="span"
                fontSize={60}
                color={colors.primary.xlight}
              >
                <br />
                Join Logic Gyan!
              </Typography>
            </Typography>
          </Box>
        </Grid>
        <Grid size={6}>
          <Box p={3}>
            {" "}
            <img src="/logicgyan.png" alt="Logo" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
