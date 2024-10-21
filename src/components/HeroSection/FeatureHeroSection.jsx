import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { colors } from "../../config/colorPalette";
import Grid from "@mui/material/Grid2";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

const FeatureHeroSection = () => {
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
          Features
        </Typography>
        <Typography variant="body1" fontWeight={700} textAlign="center">
          Home{" "}
          <Typography variant="span" color={colors.primary.light}>
            / Features
          </Typography>
        </Typography>
      </Box>
      <Box className="mainContainer" mb={10}>
        <Grid container spacing={2}>
          <Grid size={{ sm: 12, md: 5 }}>
            <Box py={5} px={5}>
              <Typography variant="h1" fontWeight={600} mb={3}>
                We provide best business solutions
              </Typography>
              <Typography variant="body1" fontWeight={550} color="#5a7184">
                Saasland is a exclusive project management agency. we provide
                better solutions for you. We Create custom landing pages with
                Saasland and converts more visitors than any website. create
                visually appearing data visualizations and insightful dashboards
                in minutes.
              </Typography>
            </Box>
            <Box py={5} px={5}>
              <Box>
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
                    mr: 2,
                  }}
                >
                  Get Started Today
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    py: 3,
                    px: 5,
                    fontWeight: 700,
                    bgcolor: colors.secondry.main,
                    ":hover": {
                      backgroundColor: colors.primary.light,
                    },
                  }}
                >
                  <PlayCircleIcon />
                  {"  "}
                  Watch Demo
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
                      src="/service-solution.png"
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
    </Box>
  );
};

export default FeatureHeroSection;
