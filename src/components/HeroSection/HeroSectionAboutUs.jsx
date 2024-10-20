import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import { colors } from "../../config/colorPalette";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const HeroSectionAboutUs = () => {
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
          About Us
        </Typography>
        <Typography variant="body1" fontWeight={700} textAlign="center">
          Home{" "}
          <Typography variant="span" color={colors.primary.light}>
            / About Us
          </Typography>
        </Typography>
      </Box>
      <Grid container>
        <Grid size={{ sm: 12, md: 5 }}>
          <Box py={5} px={5}>
            <Typography variant="h1" fontWeight={600} mb={3}>
              An Exceptionally unique experience Tailored to you
            </Typography>
            <Typography variant="body1" fontWeight={550} color="#5a7184">
              Continually administrate process-centric human capital rather than
              bleeding-edge methodologies. Distinctively supply accurate methods
              of empowerment before
            </Typography>
          </Box>
          <Box py={5} px={5}>
            <Grid container>
              <Grid size={{ xs: 12, md: 6 }} mb={3}>
                <Box
                  sx={{
                    transition: "transform 0.7s ease-in-out",
                    "&:hover": {
                      transform: "translateX(5px)", // Moves the Box 5px on the X-axis when hovered
                      "& .icon": {
                        color: "#2df8c5", // Changes icon color on hover
                      },
                    },
                  }}
                >
                  <Typography
                    fontSize="1.5rem"
                    display="flex"
                    alignItems="center"
                  >
                    <CheckCircleIcon
                      className="icon"
                      sx={{ color: "inherit" }}
                    />
                    Organize your data
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }} mb={3}>
                <Box
                  sx={{
                    transition: "transform 0.7s ease-in-out",
                    "&:hover": {
                      transform: "translateX(5px)", // Moves the Box 5px on the X-axis when hovered
                      "& .icon": {
                        color: "#2df8c5", // Changes icon color on hover
                      },
                    },
                  }}
                >
                  <Typography
                    fontSize="1.5rem"
                    display="flex"
                    alignItems="center"
                  >
                    <CheckCircleIcon
                      className="icon"
                      sx={{ color: "inherit" }}
                    />
                    Organize your data
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    transition: "transform 0.7s ease-in-out",
                    "&:hover": {
                      transform: "translateX(5px)", // Moves the Box 5px on the X-axis when hovered
                      "& .icon": {
                        color: "#2df8c5", // Changes icon color on hover
                      },
                    },
                  }}
                >
                  <Typography
                    fontSize="1.5rem"
                    display="flex"
                    alignItems="center"
                  >
                    <CheckCircleIcon
                      className="icon"
                      sx={{ color: "inherit" }}
                    />
                    Organize your data
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    transition: "transform 0.7s ease-in-out",
                    "&:hover": {
                      transform: "translateX(5px)", // Moves the Box 5px on the X-axis when hovered
                      "& .icon": {
                        color: "#2df8c5", // Changes icon color on hover
                      },
                    },
                  }}
                >
                  <Typography
                    fontSize="1.5rem"
                    display="flex"
                    alignItems="center"
                  >
                    <CheckCircleIcon
                      className="icon"
                      sx={{ color: "inherit" }}
                    />
                    Organize your data
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid size={{ sm: 12, md: 4 }}>
          <Box
            sx={{
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-5px)", // Moves the Box 5px on the X-axis when hovered
              },
            }}
          >
            <Box>
              <img
                src="/about-us-hero-img.png"
                style={{
                  objectFit: "cover",
                  border: "3px solid #ccaa00",
                  borderRadius: "20px",
                  boxShadow: "-1px -1px 18px -4px rgba(204,170,0,0.73)",
                }}
              />
            </Box>
          </Box>
        </Grid>
        <Grid size={{ sm: 12, md: 3 }}>
          <Box py={3} px={3}>
            <Box mb={3}>
              <Typography
                variant="h5"
                fontWeight={600}
                mb={3}
                color={colors.primary.main}
              >
                Our Customer
              </Typography>
              <Typography variant="body1" fontWeight={550} color="#5a7184">
                Business advisory service advises current and future business
                prospects of a client, with the aim of customers.
              </Typography>
            </Box>
            <Box mb={3}>
              <Typography
                variant="h5"
                fontWeight={600}
                mb={3}
                color={colors.primary.main}
              >
                Our Product
              </Typography>
              <Typography variant="body1" fontWeight={550} color="#5a7184">
                Business advisory service advises current and future business
                prospects of a client, with the aim of customers.
              </Typography>
            </Box>
            <Box mb={3}>
              <Typography
                variant="h5"
                fontWeight={600}
                mb={3}
                color={colors.primary.main}
              >
                Our Services
              </Typography>
              <Typography variant="body1" fontWeight={550} color="#5a7184">
                Business advisory service advises current and future business
                prospects of a client, with the aim of customers.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSectionAboutUs;
