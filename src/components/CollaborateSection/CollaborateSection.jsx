import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import { colors } from "../../config/colorPalette";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const CollaborateSection = () => {
  return (
    <Box className="mainContainer" pt={10} mb={10}>
      <Grid container spacing={2}>
        <Grid size={{ sm: 12, md: 5 }}>
          <Box py={5} px={5}>
            <Typography variant="h1" fontWeight={600} mb={3}>
              Collaborate with your team anytime, anywhere.
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
                    Always in sync
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
                    Work with any team
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
                    Embedded analytics
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Button
                variant="contained"
                sx={{
                  py: 3,
                  px: 5,
                  fontWeight: 700,
                  bgcolor: colors.primary.light,
                  ":hover": {
                    backgroundColor: colors.secondry.main,
                  },
                }}
              >
                Get Started Today
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ sm: 12, md: 7 }}>
          <Box display="flex" justifyContent="center">
            <Box>
              <Box>
                <Box>
                  <img
                    src="/collaborate-hrrd.png"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CollaborateSection;
