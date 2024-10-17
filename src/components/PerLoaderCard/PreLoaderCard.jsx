import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import "./index.css";
import React from "react";

const PreLoaderCard = () => {
  return (
    <Box padding={2}>
      <Grid container>
        <Grid size={3} p={1}>
          <Box className="card-loader card-loader--tabs"></Box>
        </Grid>
        <Grid size={3} p={1}>
          <Box className="card-loader card-loader--tabs"></Box>
        </Grid>
        <Grid size={3} p={1}>
          <Box className="card-loader card-loader--tabs"></Box>
        </Grid>
        <Grid size={3} p={1}>
          <Box className="card-loader card-loader--tabs"></Box>
        </Grid>
        <Grid size={3} p={1}>
          <Box className="card-loader card-loader--tabs"></Box>
        </Grid>
        <Grid size={3} p={1}>
          <Box className="card-loader card-loader--tabs"></Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PreLoaderCard;
