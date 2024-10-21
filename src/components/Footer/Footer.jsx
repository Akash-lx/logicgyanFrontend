import React from "react";
import Grid from "@mui/material/Grid2";
import { Box, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";
import { colors } from "../../config/colorPalette";

const Footer = () => {
  return (
    <Box py={10} px={3}>
      <Grid container spacing={3}>
        <Grid size={4}>
          <Box>
            <Box width="100%">
              <img
                src="/logicgyan.png"
                style={{
                  objectFit: "cover",
                  width: "50%",
                }}
              />
            </Box>
            <Typography variant="body1" fontWeight={600} color="#5a7184" mb={3}>
              Professionally scale cross functional human capital and extensive
              technology.
            </Typography>
            <Box>
              <IconButton size="large">
                <LinkedInIcon fontSize="inherit" />
              </IconButton>
              <IconButton size="large">
                <LinkedInIcon fontSize="inherit" />
              </IconButton>
              <IconButton size="large">
                <LinkedInIcon fontSize="inherit" />
              </IconButton>
            </Box>
          </Box>
        </Grid>
        <Grid size={2}>
          <Box>
            <Typography variant="h6" fontWeight={600}>
              Features
            </Typography>
          </Box>
        </Grid>
        <Grid size={2}>
          <Box>
            <Typography variant="h6" fontWeight={600}>
              Community
            </Typography>
          </Box>
        </Grid>
        <Grid size={2}>
          <Box>
            <Typography variant="h6" fontWeight={600}>
              Job Info
            </Typography>
          </Box>
        </Grid>
        <Grid size={2}>
          <Box>
            <Typography variant="h6" fontWeight={600}>
              Contact
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
