import React from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import { colors } from "../../config/colorPalette";
import Grid from "@mui/material/Grid2";
import GroupsIcon from "@mui/icons-material/Groups";

const EverythingOnePlace = () => {
  return (
    <Box className="mainContainer" py={7}>
      <Box className="mainContainer" mb={10}>
        <Grid container spacing={2}>
          <Grid size={{ sm: 12, md: 6 }}>
            <Box>
              <Box p={2} position="relative">
                <Box
                  component={Paper}
                  elevation={4}
                  bgcolor="white"
                  p={{ xs: 2, sm: 3, lg: 5 }}
                  borderRadius={3}
                  position="absolute"
                  top={30}
                  right={100}
                  textAlign="center"
                  className="tiltCard"
                >
                  <Typography mb={2} color="#5a7184">
                    This Month Enrolled Students
                  </Typography>
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <GroupsIcon
                      sx={{ mr: 2, fontSize: "2.5rem", color: "#038788" }}
                    />
                    52
                  </Typography>
                </Box>
                <Box
                  component={Paper}
                  elevation={4}
                  bgcolor="white"
                  p={{ xs: 2, sm: 3, lg: 5 }}
                  borderRadius={3}
                  position="absolute"
                  className="slideCard"
                  bottom={100}
                  left={70}
                >
                  <Typography variant="h6" mb={2} fontWeight={600}>
                    Jenifar Goz
                  </Typography>
                  <Typography variant="body2" color="#5a7184" mb={2}>
                    CEO, Xavale
                  </Typography>
                  <Typography variant="body2" color="#5a7184">
                    Everyone please read these condition ...
                  </Typography>
                </Box>
                <Box>
                  <img
                    src="/everything-hrrd.png"
                    style={{
                      objectFit: "cover",
                      width: "90%",
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid size={{ sm: 12, md: 6 }} py={5} px={5}>
            <Box data-aos="fade-down" data-aos-duration="700">
              <Typography variant="h1" fontWeight={600} mb={3}>
                Everything you need in one place
              </Typography>
            </Box>
            <Box px={2}>
              <Box
                p={3}
                bgcolor="rgba(1, 38, 40, 0.493)"
                borderRadius={2}
                mb={3}
                color="white"
                border="1px solid black"
                sx={{
                  transition: "transform 0.2s ease", // Smooth transition for the levitation
                  "&:hover": {
                    transform: "translateY(-3px)", // Move the card up by 4px on hover
                  },
                }}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <Typography variant="h6">
                  Comprehensive Course Library
                </Typography>
              </Box>
              <Box
                p={3}
                bgcolor="rgba(1, 38, 40, 0.493)"
                borderRadius={2}
                mb={3}
                color="white"
                border="1px solid black"
                sx={{
                  transition: "transform 0.2s ease", // Smooth transition for the levitation
                  "&:hover": {
                    transform: "translateY(-3px)", // Move the card up by 4px on hover
                  },
                }}
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <Typography variant="h6">Integrated Learning Tools</Typography>
              </Box>
              <Box
                p={3}
                bgcolor="rgba(1, 38, 40, 0.493)"
                borderRadius={2}
                mb={3}
                color="white"
                border="1px solid black"
                sx={{
                  transition: "transform 0.2s ease", // Smooth transition for the levitation
                  "&:hover": {
                    transform: "translateY(-3px)", // Move the card up by 4px on hover
                  },
                }}
                data-aos="fade-up"
                data-aos-duration="1400"
              >
                <Typography variant="h6">
                  Seamless Offline and Online Access
                </Typography>
              </Box>
              <Box
                p={3}
                bgcolor="rgba(1, 38, 40, 0.493)"
                borderRadius={2}
                mb={3}
                color="white"
                border="1px solid black"
                sx={{
                  transition: "transform 0.2s ease", // Smooth transition for the levitation
                  "&:hover": {
                    transform: "translateY(-3px)", // Move the card up by 4px on hover
                  },
                }}
                data-aos="fade-up"
                data-aos-duration="1600"
              >
                <Typography variant="h6">
                  Personalized Learning Experience
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default EverythingOnePlace;
