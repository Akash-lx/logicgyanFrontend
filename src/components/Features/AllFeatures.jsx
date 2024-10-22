import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { colors } from "../../config/colorPalette";

const AllFeatures = () => {
  return (
    <Box py={10} bgcolor="#f9f9f9">
      <Box textAlign="center">
        <Typography variant="h3" fontWeight={600} mb={3}>
          See our all service
        </Typography>
        <Typography color="#5a7184" variant="body1" mb={5}>
          We are self-service data analytics software that lets you create
          visually appearing data visualizations and insightful dashboards in
          minutes.
        </Typography>
      </Box>
      <Box px={7}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Box
              bgcolor="white"
              p={3}
              borderRadius={3}
              textAlign="center"
              sx={{
                transition: "transform 0.5s ease",
                "&:hover": {
                  boxShadow: "0px 0px 18px 19px rgba(222,222,222,1)",
                  transform: "translateY(-2px)", // Move the card up by 4px on hover
                },
              }}
            >
              <Box width="100%" mb={3}>
                <img
                  src="account img ph.png"
                  style={{
                    objectFit: "cover",
                    aspectRatio: 1 / 1,
                    borderRadius: 7,
                  }}
                  width="20%"
                />
              </Box>
              <Typography variant="h6" fontWeight={600} mb={5}>
                Web Development
              </Typography>
              <Typography variant="body1" color="#5a7184" mb={3}>
                Web development refers to the building, creating, and
                maintaining of websites. It includes aspects.{" "}
              </Typography>
              <Stack direction="row" justifyContent="center">
                <Typography
                  variant="body1"
                  fontWeight={600}
                  mr={1}
                  color={colors.primary.light}
                >
                  Learn More
                </Typography>
                <ArrowForwardIcon sx={{ color: colors.primary.light }} />
              </Stack>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Box
              bgcolor="white"
              p={3}
              borderRadius={3}
              textAlign="center"
              sx={{
                transition: "transform 0.5s ease",
                "&:hover": {
                  boxShadow: "0px 0px 18px 19px rgba(222,222,222,1)",
                  transform: "translateY(-2px)", // Move the card up by 4px on hover
                },
              }}
            >
              <Box width="100%" mb={3}>
                <img
                  src="account img ph.png"
                  style={{
                    objectFit: "cover",
                    aspectRatio: 1 / 1,
                    borderRadius: 7,
                  }}
                  width="20%"
                />
              </Box>
              <Typography variant="h6" fontWeight={600} mb={5}>
                Web Development
              </Typography>
              <Typography variant="body1" color="#5a7184" mb={3}>
                Web development refers to the building, creating, and
                maintaining of websites. It includes aspects.{" "}
              </Typography>
              <Stack direction="row" justifyContent="center">
                <Typography
                  variant="body1"
                  fontWeight={600}
                  mr={1}
                  color={colors.primary.light}
                >
                  Learn More
                </Typography>
                <ArrowForwardIcon sx={{ color: colors.primary.light }} />
              </Stack>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Box
              bgcolor="white"
              p={3}
              borderRadius={3}
              textAlign="center"
              sx={{
                transition: "transform 0.5s ease",
                "&:hover": {
                  boxShadow: "0px 0px 18px 19px rgba(222,222,222,1)",
                  transform: "translateY(-2px)", // Move the card up by 4px on hover
                },
              }}
            >
              <Box width="100%" mb={3}>
                <img
                  src="account img ph.png"
                  style={{
                    objectFit: "cover",
                    aspectRatio: 1 / 1,
                    borderRadius: 7,
                  }}
                  width="20%"
                />
              </Box>
              <Typography variant="h6" fontWeight={600} mb={5}>
                Web Development
              </Typography>
              <Typography variant="body1" color="#5a7184" mb={3}>
                Web development refers to the building, creating, and
                maintaining of websites. It includes aspects.{" "}
              </Typography>
              <Stack direction="row" justifyContent="center">
                <Typography
                  variant="body1"
                  fontWeight={600}
                  mr={1}
                  color={colors.primary.light}
                >
                  Learn More
                </Typography>
                <ArrowForwardIcon sx={{ color: colors.primary.light }} />
              </Stack>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Box
              bgcolor="white"
              p={3}
              borderRadius={3}
              textAlign="center"
              sx={{
                transition: "transform 0.5s ease",
                "&:hover": {
                  boxShadow: "0px 0px 18px 19px rgba(222,222,222,1)",
                  transform: "translateY(-2px)", // Move the card up by 4px on hover
                },
              }}
            >
              <Box width="100%" mb={3}>
                <img
                  src="account img ph.png"
                  style={{
                    objectFit: "cover",
                    aspectRatio: 1 / 1,
                    borderRadius: 7,
                  }}
                  width="20%"
                />
              </Box>
              <Typography variant="h6" fontWeight={600} mb={5}>
                Web Development
              </Typography>
              <Typography variant="body1" color="#5a7184" mb={3}>
                Web development refers to the building, creating, and
                maintaining of websites. It includes aspects.{" "}
              </Typography>
              <Stack direction="row" justifyContent="center">
                <Typography
                  variant="body1"
                  fontWeight={600}
                  mr={1}
                  color={colors.primary.light}
                >
                  Learn More
                </Typography>
                <ArrowForwardIcon sx={{ color: colors.primary.light }} />
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AllFeatures;
