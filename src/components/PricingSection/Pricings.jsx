import React from "react";
import { Box, Paper, Stack, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { colors } from "../../config/colorPalette";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PricingButtons from "../Buttons/PricingButtons";

const Pricings = () => {
  return (
    <Box>
      <Grid container>
        <Grid size={{ xs: 12, md: 4 }} justifyItems="end">
          <Box
            sx={{
              borderRadius: 3,
            }}
            p={3}
            textAlign="center"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <Typography variant="h6" mb={3} fontWeight={600}>
              Basic Plan
            </Typography>
            <Typography
              mb={5}
              variant="h4"
              fontWeight={700}
              color={colors.primary.light}
            >
              $39
              <Typography
                variant="subtitle2"
                component="span"
                color={colors.primary.light}
              >
                {"  "}/ year{" "}
              </Typography>
            </Typography>
            <Box mb={7}>
              <Stack direction="row" mb={3} alignItems="end">
                <CheckCircleIcon sx={{ fontSize: 35 }} />
                <Typography variant="body1" ml={1}>
                  Access to editing all blocks
                </Typography>
              </Stack>
              <Stack direction="row" mb={3} alignItems="end">
                <CheckCircleIcon sx={{ fontSize: 35 }} />
                <Typography variant="body1" ml={1}>
                  Editing blocks together
                </Typography>
              </Stack>
              <Stack direction="row" mb={3} alignItems="end">
                <CheckCircleIcon sx={{ fontSize: 35 }} />
                <Typography ml={1} variant="body1">
                  Access to all premium icons
                </Typography>
              </Stack>
              <Stack direction="row" mb={3} alignItems="end">
                <CheckCircleIcon sx={{ fontSize: 35 }} />
                <Typography ml={1} variant="body1">
                  A dedicated domain
                </Typography>
              </Stack>
            </Box>
            <Box textAlign="center">
              <PricingButtons
                title="Try for Free"
                bgColor={colors.primary.light}
              />
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }} px={2} justifyItems="center">
          <Box
            component={Paper}
            elevation={7}
            sx={{
              borderRadius: 3,
              backgroundColor: "white",
            }}
            p={3}
            textAlign="center"
          >
            <Typography variant="h6" mb={3} fontWeight={600}>
              Basic Plan
            </Typography>
            <Typography
              mb={5}
              variant="h4"
              fontWeight={700}
              color={colors.primary.light}
            >
              $39
              <Typography
                variant="subtitle2"
                component="span"
                color={colors.primary.light}
              >
                {"  "}/ year{" "}
              </Typography>
            </Typography>
            <Box mb={7}>
              <Stack direction="row" mb={3} alignItems="end">
                <CheckCircleIcon sx={{ fontSize: 35 }} />
                <Typography variant="body1" ml={1}>
                  Access to editing all blocks
                </Typography>
              </Stack>
              <Stack direction="row" mb={3} alignItems="end">
                <CheckCircleIcon sx={{ fontSize: 35 }} />
                <Typography variant="body1" ml={1}>
                  Editing blocks together
                </Typography>
              </Stack>
              <Stack direction="row" mb={3} alignItems="end">
                <CheckCircleIcon sx={{ fontSize: 35 }} />
                <Typography ml={1} variant="body1">
                  Access to all premium icons
                </Typography>
              </Stack>
              <Stack direction="row" mb={3} alignItems="end">
                <CheckCircleIcon sx={{ fontSize: 35 }} />
                <Typography ml={1} variant="body1">
                  A dedicated domain
                </Typography>
              </Stack>
            </Box>
            <Box textAlign="center">
              <PricingButtons
                title="Try for Free"
                bgColor={colors.secondry.main}
              />
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }} px={2} justifyItems="start">
          <Box
            sx={{
              borderRadius: 3,
            }}
            p={3}
            textAlign="center"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <Typography variant="h6" mb={3} fontWeight={600}>
              Basic Plan
            </Typography>
            <Typography
              mb={5}
              variant="h4"
              fontWeight={700}
              color={colors.primary.light}
            >
              $39
              <Typography
                variant="subtitle2"
                component="span"
                color={colors.primary.light}
              >
                {"  "}/ year{" "}
              </Typography>
            </Typography>
            <Box mb={7}>
              <Stack direction="row" mb={3} alignItems="end">
                <CheckCircleIcon sx={{ fontSize: 35 }} />
                <Typography variant="body1" ml={1}>
                  Access to editing all blocks
                </Typography>
              </Stack>
              <Stack direction="row" mb={3} alignItems="end">
                <CheckCircleIcon sx={{ fontSize: 35 }} />
                <Typography variant="body1" ml={1}>
                  Editing blocks together
                </Typography>
              </Stack>
              <Stack direction="row" mb={3} alignItems="end">
                <CheckCircleIcon sx={{ fontSize: 35 }} />
                <Typography ml={1} variant="body1">
                  Access to all premium icons
                </Typography>
              </Stack>
              <Stack direction="row" mb={3} alignItems="end">
                <CheckCircleIcon sx={{ fontSize: 35 }} />
                <Typography ml={1} variant="body1">
                  A dedicated domain
                </Typography>
              </Stack>
            </Box>
            <Box>
              <PricingButtons
                title="Try for Free"
                bgColor={colors.primary.light}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Pricings;
