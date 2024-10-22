import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { colors } from "../config/colorPalette";
import Grid from "@mui/material/Grid2";

const IntricateYourApps = () => {
  return (
    <Box bgcolor="#E5FFF9" py={10}>
      <Box>
        <Typography
          variant="h3"
          fontWeight={600}
          lineHeight={1.2}
          textAlign="center"
          mb={5}
        >
          Easy to Intricate <br />
          <Typography component="span" variant="h3" fontWeight={600}>
            Your Apps
          </Typography>
        </Typography>
      </Box>
      <Box px={{ xs: 3, md: 8 }}>
        <Grid container spacing={{ xs: 2 }}>
          <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
            <Box
              bgcolor="white"
              p={4}
              borderRadius={3}
              component={Paper}
              elevation={5}
              textAlign="center"
              sx={{
                transition: "transform 0.5s ease", // Smooth transition for the levitation
                "&:hover": {
                  backgroundColor: "#ccaa00",
                  boxShadow: " 0px 0px 18px 19px rgba(204,170,0,0.17)",
                  transform: "translateY(-2px)", // Move the card up by 4px on hover
                },
              }}
            >
              <Typography variant="body1" fontWeight={500}>
                ThemeForest
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
            <Box
              bgcolor="white"
              p={4}
              borderRadius={3}
              component={Paper}
              elevation={5}
              textAlign="center"
              sx={{
                transition: "transform 0.5s ease", // Smooth transition for the levitation
                "&:hover": {
                  backgroundColor: "#ccaa00",
                  boxShadow: " 0px 0px 18px 19px rgba(204,170,0,0.17)",
                  transform: "translateY(-2px)", // Move the card up by 4px on hover
                },
              }}
            >
              <Typography variant="body1" fontWeight={500}>
                ThemeForest
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
            <Box
              bgcolor="white"
              p={4}
              borderRadius={3}
              component={Paper}
              elevation={5}
              textAlign="center"
              sx={{
                transition: "transform 0.5s ease", // Smooth transition for the levitation
                "&:hover": {
                  backgroundColor: "#ccaa00",
                  boxShadow: " 0px 0px 18px 19px rgba(204,170,0,0.17)",
                  transform: "translateY(-2px)", // Move the card up by 4px on hover
                },
              }}
            >
              <Typography variant="body1" fontWeight={500}>
                ThemeForest
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
            <Box
              bgcolor="white"
              p={4}
              borderRadius={3}
              component={Paper}
              elevation={5}
              textAlign="center"
              sx={{
                transition: "transform 0.5s ease", // Smooth transition for the levitation
                "&:hover": {
                  backgroundColor: "#ccaa00",
                  boxShadow: " 0px 0px 18px 19px rgba(204,170,0,0.17)",
                  transform: "translateY(-2px)", // Move the card up by 4px on hover
                },
              }}
            >
              <Typography variant="body1" fontWeight={500}>
                ThemeForest
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
            <Box
              bgcolor="white"
              p={4}
              borderRadius={3}
              component={Paper}
              elevation={5}
              textAlign="center"
              sx={{
                transition: "transform 0.5s ease", // Smooth transition for the levitation
                "&:hover": {
                  backgroundColor: "#ccaa00",
                  boxShadow: " 0px 0px 18px 19px rgba(204,170,0,0.17)",
                  transform: "translateY(-2px)", // Move the card up by 4px on hover
                },
              }}
            >
              <Typography variant="body1" fontWeight={500}>
                ThemeForest
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }}>
            <Box
              bgcolor="white"
              p={4}
              borderRadius={3}
              component={Paper}
              elevation={5}
              textAlign="center"
              sx={{
                transition: "transform 0.5s ease", // Smooth transition for the levitation
                "&:hover": {
                  backgroundColor: "#ccaa00",
                  boxShadow: " 0px 0px 18px 19px rgba(204,170,0,0.17)",
                  transform: "translateY(-2px)", // Move the card up by 4px on hover
                },
              }}
            >
              <Typography variant="body1" fontWeight={500}>
                ThemeForest
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default IntricateYourApps;
