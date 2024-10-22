import { Box, Typography } from "@mui/material";
import React from "react";
import { colors } from "../../config/colorPalette";
import Grid from "@mui/material/Grid2";
import WorkCards from "../../components/Cards/WorkCards";

const LatestWork = () => {
  return (
    <Box bgcolor="#f0fffb" py={10}>
      <Box>
        <Typography variant="h3" mb={3} fontWeight={600} textAlign="center">
          Our Latest Work
        </Typography>
        <Typography
          variant="body1"
          fontWeight={600}
          color="#5a7184"
          textAlign="center"
        >
          We Create custom landing pages with Saasland and converts more
          visitors than any website. visually appearing.
        </Typography>
      </Box>
      <Box px={{ xs: 5, sm: 10 }} py={10}>
        <Grid container spacing={5}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <WorkCards />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <WorkCards />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <WorkCards />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <WorkCards />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <WorkCards />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default LatestWork;
