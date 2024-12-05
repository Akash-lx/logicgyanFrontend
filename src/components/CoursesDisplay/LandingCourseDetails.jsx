import React from "react";
import { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { colors } from "../../config/colorPalette";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import GroupsIcon from "@mui/icons-material/Groups";
import StarsIcon from "@mui/icons-material/Stars";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

const LandingCourseDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box
      pt={20}
      px={{ xs: 3 }}
      sx={{
        backgroundColor: "white",
        backgroundImage: `url("/waves/wave1.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <Box p={{ xs: 1 }} borderRadius={3} display="flex" flexDirection="column">
        <Grid
          container
          spacing={5}
          mb={5}
          sx={{ flexDirection: { xs: "column", md: "row-reverse" } }}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Box mr={2} width="100%">
              <img
                src="/phImg.jpg"
                className="courseDetailsImg"
                style={{
                  objectFit: "cover",
                  borderRadius: 10,
                  width: "100%",
                }}
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box color={colors.primary.light} px={0.5}>
              <Typography variant="h4" fontWeight={550} mb={1.5}>
                Master Photoshop CS6 in 2 Months
              </Typography>
              <Typography variant="h6" mb={3}>
                By: Harsh Agarwal
              </Typography>
              <Box
                display="flex"
                justifyContent="space-between"
                flexDirection={{ xs: "column", md: "row" }}
                pr={3}
                mb={3}
              >
                <Box mb={{ xs: 3, sm: 0 }}>
                  <Typography variant="h4" color={colors.secondry.dark}>
                    ₹4,999{" "}
                    <Typography component="span" variant="h6">
                      <s>₹7,999</s>
                    </Typography>
                  </Typography>
                  <Typography>For 2 months</Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body1"
                    mb={1}
                    display="flex"
                    alignItems="center"
                  >
                    <>15 modules</> <MenuBookIcon sx={{ ml: 1 }} />
                  </Typography>
                  <Typography
                    variant="body1"
                    display="flex"
                    alignItems="center"
                  >
                    <>105 enrollments</> <GroupsIcon sx={{ ml: 1 }} />
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  sx={{ bgcolor: colors.primary.main }}
                >
                  <LibraryBooksIcon sx={{ mr: 0.5 }} /> Download brochure
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box color={colors.primary.light} px={0.5}>
          <Box>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 7 }}>
                <Box mb={3}>
                  <Typography variant="h5" mb={2} fontWeight={550}>
                    Course Overview
                  </Typography>
                  <Typography lineHeight={2} variant="body1">
                    Lorem ipsum dolor sit amet consectetur. Bibendum mauris
                    netus hac tincidunt porta ultrices at egestas ut. Libero
                    habitasse placerat vitae lacus quam venenatis. Vel elit orci
                    tincidunt molestie neque feugiat vestibulum lacus. Massa
                    lectus in ut lacus gravida ut venenatis. Lorem ipsum dolor
                    sit amet consectetur. Bibendum mauris netus hac tincidunt
                    porta ultrices at egestas ut. Libero habitasse placerat
                    vitae lacus quam venenatis. Vel elit orci tincidunt molestie
                    neque feugiat vestibulum lacus. Massa lectus in ut lacus
                    gravida ut venenatis.
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 5 }} textAlign="center">
                <Box p={3}>
                  <img
                    src="/courseoverView.jpg"
                    style={{
                      objectFit: "cover",
                      width: "70%",
                      borderRadius: 7,
                    }}
                  />
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 5 }} textAlign="center">
                <Box p={3}>
                  <img
                    src="/keyhighlights.jpg"
                    style={{
                      objectFit: "cover",
                      width: "70%",
                      borderRadius: 7,
                    }}
                  />
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 7 }} mb={5}>
                <Box>
                  <Typography variant="h5" fontWeight={550} mb={1.5}>
                    Key Highlights
                  </Typography>
                  <Box display="flex">
                    <StarsIcon sx={{ fontSize: "1.3rem" }} />
                    <Typography variant="body1" ml={1} mb={1}>
                      Lorem ipsum dolor sit amet consectetur. Bibendum mauris
                      netus hac tincidunt porta ultrices at egestas ut.
                    </Typography>
                  </Box>
                  <Box display="flex">
                    <StarsIcon sx={{ fontSize: "1.3rem" }} />
                    <Typography variant="body1" ml={1} mb={1} lineHeight={2}>
                      Lorem ipsum dolor sit amet consectetur. Bibendum mauris
                      netus hac tincidunt porta ultrices at egestas ut.Lorem
                      ipsum dolor sit amet consectetur. Bibendum mauris netus
                      hac tincidunt porta ultrices at egestas ut.Lorem ipsum
                      dolor sit amet consectetur. Bibendum mauris netus hac
                      tincidunt porta ultrices at egestas ut.
                    </Typography>
                  </Box>
                  <Box display="flex">
                    <StarsIcon sx={{ fontSize: "1.3rem" }} />
                    <Typography variant="body1" ml={1} mb={1} lineHeight={2}>
                      Lorem ipsum dolor sit amet consectetur. Bibendum mauris
                      netus hac tincidunt porta ultrices at egestas ut.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box>
                  <Typography variant="h5" fontWeight={550}>
                    Certification
                  </Typography>
                  <Box display="flex">
                    <Typography variant="body1" mr={5} lineHeight={2}>
                      Lorem ipsum dolor sit amet consectetur. Bibendum mauris
                      netus hac tincidunt porta ultrices at egestas ut. Libero
                      habitasse placerat vitae lacus quam venenatis. Vel elit
                      orci tincidunt molestie neque feugiat vestibulum lacus.
                      Massa lectus in ut lacus gravida ut venenatis. Lorem ipsum
                      dolor sit amet consectetur. Bibendum mauris netus hac
                      tincidunt porta ultrices at egestas ut. Libero habitasse
                      placerat vitae lacus quam venenatis. Vel elit orci
                      tincidunt molestie neque feugiat vestibulum lacus. Massa
                      lectus in ut lacus gravida ut venenatis.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid size={12}>
                <Box p={2} borderRadius={3}>
                  <img
                    src="/phCertificateImg.jpg"
                    alt="certImg"
                    style={{ objectFit: "cover", width: "100%" }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingCourseDetails;
