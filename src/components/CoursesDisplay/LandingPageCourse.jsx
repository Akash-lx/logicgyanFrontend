import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { colors } from "../../config/colorPalette";
import StarIcon from "@mui/icons-material/Star";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const LandingPageCourse = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        backgroundColor: "rgb(201,238,229)",
        background:
          "linear-gradient(180deg, rgba(201,238,229,1) 0%, rgba(255,255,255,1) 100%)",
        py: 7,
        px: 5,
      }}
    >
      <Box>
        <Typography
          variant="h3"
          fontWeight={600}
          lineHeight={1.2}
          textAlign="center"
          mb={7}
          color={colors.primary.main}
        >
          Everyday 10+ <br />
          <Typography component="span" variant="h3" fontWeight={600}>
            Courses are registred
          </Typography>
        </Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid size={3}>
          <Box
            color={colors.primary.main}
            borderRadius={4}
            display="flex"
            alignItems="center"
            flexDirection="column"
            p={2}
            sx={{
              backgroundColor: "transparent",

              transition: "all 1s",
              "&:hover": {
                backgroundColor: colors.primary.xlight,
                color: colors.white,
                scale: "1.05",
                boxShadow: " 10px 10px 25px -11px rgba(0,0,0,0.75)",
              },
            }}
          >
            <Box mb={2}>
              <img
                src="/phImg.jpg"
                alt="crsImg"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  borderRadius: 7,
                }}
              />
            </Box>
            <Box
              width="100%"
              display="flex"
              justifyContent="space-between"
              alignItems="flex-end"
              mb={1.5}
            >
              <Typography variant="h6" fontWeight={550}>
                Web-Dev(HTML,CSS,JS)
              </Typography>
              <Box
                color={colors.secondry.main}
                display="flex"
                alignItems="flex-start"
                border="1.5px solid black"
                px={1}
                pt={0.3}
                borderRadius={3}
              >
                <Typography fontSize="1.2rem" fontWeight="550">
                  5
                </Typography>
                <StarIcon sx={{ ml: 0.2, fontSize: "1.5rem" }} />
              </Box>
            </Box>
            <Box width="100%">
              <Button
                variant="contained"
                fullWidth
                sx={{
                  bgcolor: colors.secondry.main,
                  color: colors.primary.dark,
                }}
                onClick={() => {
                  navigate("/courseDetails");
                }}
              >
                Know More
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid size={3}>
          <Box
            color={colors.primary.main}
            borderRadius={4}
            display="flex"
            alignItems="center"
            flexDirection="column"
            p={2}
            sx={{
              backgroundColor: "transparent",

              transition: "all 1s",
              "&:hover": {
                backgroundColor: colors.primary.xlight,
                color: colors.white,
                scale: "1.05",
                boxShadow: " 10px 10px 25px -11px rgba(0,0,0,0.75)",
              },
            }}
          >
            <Box mb={2}>
              <img
                src="/phImg.jpg"
                alt="crsImg"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  borderRadius: 7,
                }}
              />
            </Box>
            <Box
              width="100%"
              display="flex"
              justifyContent="space-between"
              alignItems="flex-end"
              mb={1.5}
            >
              <Typography variant="h6" fontWeight={550}>
                Web-Dev(HTML,CSS,JS)
              </Typography>
              <Box
                color={colors.secondry.main}
                display="flex"
                alignItems="flex-start"
                border="1.5px solid black"
                px={1}
                pt={0.3}
                borderRadius={3}
              >
                <Typography fontSize="1.2rem" fontWeight="550">
                  5
                </Typography>
                <StarIcon sx={{ ml: 0.2, fontSize: "1.5rem" }} />
              </Box>
            </Box>
            <Box width="100%">
              <Button
                variant="contained"
                fullWidth
                sx={{
                  bgcolor: colors.secondry.main,
                  color: colors.primary.dark,
                }}
                onClick={() => {
                  navigate("/courseDetails");
                }}
              >
                Know More
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid size={3}>
          <Box
            color={colors.primary.main}
            borderRadius={4}
            display="flex"
            alignItems="center"
            flexDirection="column"
            p={2}
            sx={{
              backgroundColor: "transparent",

              transition: "all 1s",
              "&:hover": {
                backgroundColor: colors.primary.xlight,
                color: colors.white,
                scale: "1.05",
                boxShadow: " 10px 10px 25px -11px rgba(0,0,0,0.75)",
              },
            }}
          >
            <Box mb={2}>
              <img
                src="/phImg.jpg"
                alt="crsImg"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  borderRadius: 7,
                }}
              />
            </Box>
            <Box
              width="100%"
              display="flex"
              justifyContent="space-between"
              alignItems="flex-end"
              mb={1.5}
            >
              <Typography variant="h6" fontWeight={550}>
                Web-Dev(HTML,CSS,JS)
              </Typography>
              <Box
                color={colors.secondry.main}
                display="flex"
                alignItems="flex-start"
                border="1.5px solid black"
                px={1}
                pt={0.3}
                borderRadius={3}
              >
                <Typography fontSize="1.2rem" fontWeight="550">
                  5
                </Typography>
                <StarIcon sx={{ ml: 0.2, fontSize: "1.5rem" }} />
              </Box>
            </Box>
            <Box width="100%">
              <Button
                variant="contained"
                fullWidth
                sx={{
                  bgcolor: colors.secondry.main,
                  color: colors.primary.dark,
                }}
                onClick={() => {
                  navigate("/courseDetails");
                }}
              >
                Know More
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid size={3}>
          <Box
            color={colors.primary.main}
            borderRadius={4}
            display="flex"
            alignItems="center"
            flexDirection="column"
            p={2}
            sx={{
              backgroundColor: "transparent",

              transition: "all 1s",
              "&:hover": {
                backgroundColor: colors.primary.xlight,
                color: colors.white,
                scale: "1.05",
                boxShadow: " 10px 10px 25px -11px rgba(0,0,0,0.75)",
              },
            }}
          >
            <Box mb={2}>
              <img
                src="/phImg.jpg"
                alt="crsImg"
                style={{
                  objectFit: "cover",
                  width: "100%",
                  borderRadius: 7,
                }}
              />
            </Box>
            <Box
              width="100%"
              display="flex"
              justifyContent="space-between"
              alignItems="flex-end"
              mb={1.5}
            >
              <Typography variant="h6" fontWeight={550}>
                Web-Dev(HTML,CSS,JS)
              </Typography>
              <Box
                color={colors.secondry.main}
                display="flex"
                alignItems="flex-start"
                border="1.5px solid black"
                px={1}
                pt={0.3}
                borderRadius={3}
              >
                <Typography fontSize="1.2rem" fontWeight="550">
                  5
                </Typography>
                <StarIcon sx={{ ml: 0.2, fontSize: "1.5rem" }} />
              </Box>
            </Box>
            <Box width="100%">
              <Button
                variant="contained"
                fullWidth
                sx={{
                  bgcolor: colors.secondry.main,
                  color: colors.primary.dark,
                }}
                onClick={() => {
                  navigate("/courseDetails");
                }}
              >
                Know More
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LandingPageCourse;
