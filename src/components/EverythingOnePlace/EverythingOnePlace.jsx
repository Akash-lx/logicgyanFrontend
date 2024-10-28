import React from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import { colors } from "../../config/colorPalette";
import Grid from "@mui/material/Grid2";
import GroupsIcon from "@mui/icons-material/Groups";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
// import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import EastIcon from "@mui/icons-material/East";

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
                sx={{
                  cursor: "pointer",
                  transition: "transform 0.3s ease-in", // Smooth transition for the levitation
                  "&:hover": {
                    transform: "translateY(-5px)", // Move the card up by 4px on hover
                  },
                }}
              >
                <Box
                  px={3}
                  py={1.5}
                  bgcolor="#fbce66"
                  borderRadius={2}
                  mb={3}
                  color="white"
                  sx={{
                    boxShadow: "-2px 9px 13px -6px rgba(0,0,0,0.75)",
                  }}
                  data-aos="fade-up"
                  data-aos-duration="1600"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box display="flex" alignItems="center">
                    <FiberManualRecordIcon
                      fontSize="xs"
                      sx={{ color: colors.primary.main }}
                    />
                    <Typography
                      fontSize="1.5rem"
                      color={colors.primary.dark}
                      fontWeight={550}
                      ml={1}
                    >
                      Comprehensive Course Library
                    </Typography>
                  </Box>
                  <EastIcon sx={{ color: colors.primary.main }} />
                </Box>
              </Box>
              <Box
                sx={{
                  cursor: "pointer",
                  transition: "transform 0.3s ease-in", // Smooth transition for the levitation
                  "&:hover": {
                    transform: "translateY(-5px)", // Move the card up by 4px on hover
                  },
                }}
              >
                <Box
                  px={3}
                  py={1.5}
                  bgcolor="#37e0f5"
                  borderRadius={2}
                  mb={3}
                  color="white"
                  sx={{
                    boxShadow: "-2px 9px 13px -6px rgba(0,0,0,0.75)",
                  }}
                  data-aos="fade-up"
                  data-aos-duration="1600"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box display="flex" alignItems="center">
                    <FiberManualRecordIcon
                      fontSize="xs"
                      sx={{ color: colors.primary.main }}
                    />
                    <Typography
                      ml={1}
                      fontSize="1.5rem"
                      color={colors.primary.dark}
                      fontWeight={550}
                    >
                      Integrated Learning Tools
                    </Typography>
                  </Box>
                  <EastIcon sx={{ color: colors.primary.main }} />
                </Box>
              </Box>
              <Box
                sx={{
                  cursor: "pointer",
                  transition: "transform 0.3s ease-in", // Smooth transition for the levitation
                  "&:hover": {
                    transform: "translateY(-5px)", // Move the card up by 4px on hover
                  },
                }}
              >
                <Box
                  px={3}
                  py={1.5}
                  bgcolor="#fbce66"
                  borderRadius={2}
                  mb={3}
                  color="white"
                  sx={{
                    boxShadow: "-2px 9px 13px -6px rgba(0,0,0,0.75)",
                  }}
                  data-aos="fade-up"
                  data-aos-duration="1600"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box display="flex" alignItems="center">
                    <FiberManualRecordIcon
                      fontSize="xs"
                      sx={{ color: colors.primary.main }}
                    />
                    <Typography
                      ml={1}
                      fontSize="1.5rem"
                      color={colors.primary.dark}
                      fontWeight={550}
                    >
                      Seamless Offline and Online Access
                    </Typography>
                  </Box>
                  <EastIcon sx={{ color: colors.primary.main }} />
                </Box>
              </Box>
              <Box
                sx={{
                  cursor: "pointer",
                  transition: "transform 0.3s ease-in", // Smooth transition for the levitation
                  "&:hover": {
                    transform: "translateY(-5px)", // Move the card up by 4px on hover
                  },
                }}
              >
                <Box
                  px={3}
                  py={1.5}
                  bgcolor="#37e0f5"
                  borderRadius={2}
                  mb={3}
                  color="white"
                  sx={{
                    boxShadow: "-2px 9px 13px -6px rgba(0,0,0,0.75)",
                  }}
                  data-aos="fade-up"
                  data-aos-duration="1600"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box display="flex" alignItems="center">
                    <FiberManualRecordIcon
                      fontSize="xs"
                      sx={{ color: colors.primary.main }}
                    />
                    <Typography
                      fontSize="1.5rem"
                      ml={1}
                      color={colors.primary.xdark}
                      fontWeight={550}
                    >
                      Personalized Learning Experience
                    </Typography>
                  </Box>
                  <EastIcon sx={{ color: colors.primary.main }} />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default EverythingOnePlace;
