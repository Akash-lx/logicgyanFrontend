import { Box, Typography, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";
import { colors } from "../../config/colorPalette";

const HeroSection = () => {
  // const isTab = useMediaQuery("(min-width:786px)")
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

      <Grid container alignItems="center">
        <Grid size={{ sm: 12, md: 6 }}>
          <Box py={3} px={{ xs: 5, sm: 0 }} pl={{ sm: 15 }}>
            <Typography
              // variant="h1"
              lineHeight={1}
              mb={3}
              fontWeight={750}
              color={colors.primary.main}
              sx={{ fontSize: { xs: "1.7rem", sm: "2.5rem", lg: "4rem" } }}
            >
              Unlock Your Potential with LogicGyan!
            </Typography>
            <Typography
              variant="h5"
              lineHeight={1.3}
              color="#038788"
              fontWeight={600}
            >
              Join thousands of learners and gain{" "}
              <Typography variant="span" color="#012628" lineHeight={1.3}>
                on-demand skills
              </Typography>{" "}
              with{" "}
              <Typography variant="span" color="#012628" lineHeight={1.3}>
                expert-led courses
              </Typography>{" "}
              that fit your schedule.
            </Typography>
          </Box>
        </Grid>
        <Grid size={{ sm: 12, md: 6 }}>
          <Box p={3}>
            {" "}
            <img
              src="/herosection.png"
              alt="Logo"
              style={{ objectFit: "cover", width: "100%" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
