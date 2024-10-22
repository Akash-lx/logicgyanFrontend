import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { colors } from "../../config/colorPalette";
import Grid from "@mui/material/Grid2";

const EverythingOnePlace = () => {
  return (
    <Box className="mainContainer" py={7}>
      <Box className="mainContainer" mb={10}>
        <Grid container spacing={2}>
          <Grid size={{ sm: 12, md: 6 }}>
            <Box>
              <Box p={2} position="relative">
                <Box
                  bgcolor="white"
                  p={{ xs: 2, sm: 3, lg: 5 }}
                  borderRadius={3}
                  sx={{ boxShadow: "-1px 0px 22px 1px rgba(0,0,0,0.75)" }}
                  position="absolute"
                  top={30}
                  right={100}
                  textAlign="center"
                  className="tiltCard"
                >
                  <Typography mb={2} color="#5a7184">
                    Income This Month
                  </Typography>
                  <Typography variant="h6" fontWeight={600}>
                    $50.36
                  </Typography>
                </Box>
                <Box
                  bgcolor="white"
                  p={{ xs: 2, sm: 3, lg: 5 }}
                  borderRadius={3}
                  sx={{ boxShadow: "-1px 0px 22px 1px rgba(0,0,0,0.75)" }}
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
            <Box>
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
              >
                <Typography variant="h6">Real-time Data</Typography>
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
              >
                <Typography variant="h6">End-to-end encryption</Typography>
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
              >
                <Typography variant="h6">FDIC Insured</Typography>
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
              >
                <Typography variant="h6">REST API enabled</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default EverythingOnePlace;
