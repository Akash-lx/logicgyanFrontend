import { Box, Typography, useMediaQuery, Button, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import { colors } from "../../config/colorPalette";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const HeroSection = () => {
  // const isTab = useMediaQuery("(min-width:786px)");
  return (
    <Box
      className="mainContainer"
      sx={{
        // backgroundColor: "rgb(201,238,229)",
        // background:
        //   "linear-gradient(180deg, rgba(201,238,229,1) 15%, rgba(255,255,255,1) 100%)",
        backgroundImage: `url('/bg1.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      pt={20}
      pb={5}
      mb={10}
    >
      {/* <img
        src="/bg-wired.png"
        style={{ position: "absolute" }}
        height="100px"
        width="800px"
      />
      <img
        src="/bg-wired-vertical.png"
        style={{ position: "absolute", right: "100px" }}
        height="800px"
        width="100px"
      /> */}

      <Grid container>
        <Grid size={{ sm: 12, md: 6 }}>
          <Box
            mb={{ sm: 10, md: 0 }}
            pt={{ xs: 5, lg: 10 }}
            px={{ xs: 5, sm: 0 }}
            pl={{ sm: 15 }}
            position="relative"
          >
            <Box position="absolute" top={5}>
              <Typography
                fontSize={{ xs: "4rem", sm: "5rem", md: "6rem", lg: "7rem" }}
                fontWeight={700}
                color="rgba(3, 99, 75, 0.1)"
              >
                LogicGyan
              </Typography>
            </Box>

            <Box
              zIndex={2}
              className="animate__animated animate__backInDown"
              style={{ animationDuration: "1.7" }}
            >
              <Typography
                // variant="h1"
                lineHeight={1}
                mb={3}
                fontWeight={800}
                color={colors.primary.main}
                sx={{ fontSize: { xs: "1.7rem", sm: "2.5rem", lg: "3.2rem" } }}
              >
                Unlock Your Potential with{" "}
                <Typography variant="span" color={colors.secondry.highlited}>
                  LogicGyan
                </Typography>
              </Typography>
              <Typography
                variant="body1"
                lineHeight={1}
                color="#038788"
                fontWeight={600}
                fontSize="1.2rem"
                mb={5}
              >
                Join thousands of learners and gain{" "}
                <Typography
                  variant="span"
                  color={colors.secondry.highlited}
                  fontSize="1.4rem"
                >
                  on-demand skills
                </Typography>{" "}
                with{" "}
                <Typography
                  variant="span"
                  color={colors.secondry.highlited}
                  fontSize="1.4rem"
                >
                  expert-led courses
                </Typography>{" "}
                that fit your schedule.
              </Typography>
            </Box>
            <Box
              component={Stack}
              direction={{ xs: "column", sm: "row" }}
              spacing={3}
              className="animate__animated animate__backInLeft"
              style={{ animationDuration: "2s" }}
            >
              <Button
                variant="contained"
                sx={{
                  py: 1,
                  px: 3,
                  backgroundColor: colors.white,
                  color: colors.primary.main,
                  display: "flex",
                  borderRadius: 10,
                  alignItems: "center",
                  transition: "transform all 1s ease-in",
                  "&:hover": {
                    background:
                      "linear-gradient(180deg, rgba(6,178,135,1) 30%, rgba(1,52,55,1) 100%)",
                    color: colors.white,
                  },
                }}
              >
                <Box mr={2}>
                  <img src="/icons/playstore.png" />
                </Box>
                <Box textAlign="left">
                  <Typography fontSize="0.6rem">Get it on </Typography>
                  <Typography variant="button" fontWeight={550}>
                    Playstore
                  </Typography>
                </Box>
              </Button>
              <Button
                variant="contained"
                sx={{
                  py: 1,
                  pr: 4,
                  backgroundColor: colors.white,
                  color: colors.primary.main,
                  borderRadius: 10,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "transform all 1s ease-in",
                  "&:hover": {
                    background:
                      "linear-gradient(180deg, rgba(6,178,135,1) 30%, rgba(1,52,55,1) 100%)",
                    color: colors.white,
                  },
                }}
              >
                <Box mr={2} mb={1}>
                  <DotLottieReact
                    src="lottiefilesIcons/callanimation.lottie"
                    loop
                    autoplay
                    style={{ width: 50, height: 50 }}
                  />
                </Box>
                <Box textAlign="left">
                  <Typography fontSize="0.6rem">Contact us </Typography>
                  <Typography variant="button" fontWeight={550}>
                    Call now
                  </Typography>
                </Box>
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ sm: 12, md: 6 }}>
          <Box
            p={3}
            position="relative"
            className="animate__animated animate__backInUp"
            style={{ animationDuration: "3s" }}
          >
            <Box
              position="absolute"
              left={50}
              width="15%"
              className="heroRocketAnimation"
            >
              <img src="/cloud.png" width="100%" />
            </Box>
            <Box
              pr={10}
              position="absolute"
              width={{ xs: "32%", sm: "25%", md: "30%" }}
              right={1}
              className="heroRocketAnimation"
            >
              <img src="/rocket.png" width="100%" />
            </Box>
            <Box p={3} width={{ xs: "65%", sm: "75%" }} margin="auto">
              <img
                src="/herosecmainmirror.png"
                alt="Logo"
                style={{ objectFit: "cover", width: "100%" }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
