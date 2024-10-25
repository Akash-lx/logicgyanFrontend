import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { colors } from "../../config/colorPalette";
import Grid from "@mui/material/Grid2";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { FaGooglePlay } from "react-icons/fa";

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
                Explore the Features of LogicGyan
              </Typography>
              <Typography variant="body1" fontWeight={550} color="#5a7184">
                At LogicGyan, we offer a range of innovative features tailored
                to provide you with a seamless and engaging educational journey.
                From flexible learning options to expert guidance, discover how
                our platform empowers you to succeed in your learning goals.
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
                    mb: { xs: 2, sm: 2, md: 2, lg: 0 },
                  }}
                >
                  <FaGooglePlay style={{ marginRight: 10 }} />
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
            <Box position="relative">
              <Box
                bgcolor="white"
                p={{ xs: 2, sm: 3, lg: 5 }}
                borderRadius={3}
                sx={{ boxShadow: "-1px 0px 22px 1px rgba(0,0,0,0.75)" }}
                position="absolute"
                top={{ xs: 30 }}
                left={25}
                textAlign="center"
                className="tiltCard"
              >
                <Typography variant="h6" mb={2} fontWeight={600}>
                  82%
                </Typography>
                <Typography color="#5a7184">Engament of work</Typography>
              </Box>
              <Box
                bgcolor="white"
                p={{ xs: 2, sm: 3, lg: 5 }}
                borderRadius={3}
                sx={{ boxShadow: "-1px 0px 22px 1px rgba(0,0,0,0.75)" }}
                position="absolute"
                className="slideCard"
                bottom={{ xs: 20 }}
                right={45}
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
              <Box p={1}>
                <Box>
                  <img
                    src="/service-solution.png"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
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
