import { Box, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material";

const BlogCards = () => {
  return (
    <Box>
      <Grid container>
        <Grid size={8} bgcolor="red">
          <Box>
            <Stack>
              <Typography variant="h6">
                The best remote UX and UI design conferences to attend in 2020
              </Typography>
              <Typography variant="body1">
                Quickly drive clicks-and-mortar catalysts for change before
                vertical architectures. Credibly intermediate backend ideas for
                platform.
              </Typography>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BlogCards;
