import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import { colors } from "../../config/colorPalette";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { FaGooglePlay } from "react-icons/fa";

const CollaborateSection = () => {
  return (
    <Box className="mainContainer" pt={10} mb={10}>
      <Grid container spacing={2}>
        <Grid size={{ sm: 12, md: 6 }}>
          <Box py={5} px={5}>
            <Typography variant="h1" fontWeight={600} mb={3}>
              Collaborate with your team anytime, anywhere.
            </Typography>
            <Typography variant="body1" fontWeight={550} color="#5a7184">
              At LogicGyan, our team of qualified educators is dedicated to
              providing an exceptional learning experience. Through interactive
              teaching methods and real-world applications, instructors engage
              students and foster a collaborative environment. With personalized
              guidance and continuous feedback, we empower learners to achieve
              their goals and build confidence in their skills.
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
                    fontSize="1.2rem"
                    display="flex"
                    alignItems="center"
                  >
                    <DotLottieReact
                      src="lottiefilesIcons/checkMark.lottie"
                      loop
                      autoplay
                      style={{ width: 50, height: 50 }}
                    />
                    Qualified Educators
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
                    fontSize="1.2rem"
                    display="flex"
                    alignItems="center"
                  >
                    <DotLottieReact
                      src="lottiefilesIcons/checkMark.lottie"
                      loop
                      autoplay
                      style={{ width: 50, height: 50 }}
                    />
                    Interactive Learning Environment
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
                    fontSize="1.2rem"
                    display="flex"
                    alignItems="center"
                  >
                    <DotLottieReact
                      src="lottiefilesIcons/checkMark.lottie"
                      loop
                      autoplay
                      style={{ width: 50, height: 50 }}
                    />
                    Real-World Applications
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
                    fontSize="1.2rem"
                    display="flex"
                    alignItems="center"
                  >
                    <DotLottieReact
                      src="lottiefilesIcons/checkMark.lottie"
                      loop
                      autoplay
                      style={{ width: 50, height: 50 }}
                    />
                    Personalized Guidance
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
                <Box mr={2}>
                  <FaGooglePlay />
                </Box>
                Get Started Today
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ sm: 12, md: 6 }}>
          <Box position="relative">
            <Box
              bgcolor="white"
              p={{ xs: 2, sm: 3, lg: 5 }}
              borderRadius={3}
              sx={{ boxShadow: "-1px 0px 22px 1px rgba(0,0,0,0.75)" }}
              position="absolute"
              className="slideCard"
              bottom={50}
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
            <Box p={2}>
              <img
                src="/collaborate-hrrd.png"
                alt="collab Logo"
                style={{ objectFit: "cover", width: "100%" }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CollaborateSection;
