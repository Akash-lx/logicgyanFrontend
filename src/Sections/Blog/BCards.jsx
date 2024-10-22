import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const BCards = () => {
  return (
    <Box px={5}>
      <Grid container>
        <Grid size={8}>
          <Box>
            <Stack
              direction={{ xs: "column-reverse", md: "row" }}
              p={2}
              border="1px solid black"
              borderRadius={2}
            >
              <Box mr={2} mt={{ xs: 2 }}>
                <Typography
                  variant="h5"
                  fontWeight={600}
                  mb={3}
                  lineHeight={1.2}
                >
                  The best remote UX and UI design conferences to attend in 2020
                </Typography>
                <Typography variant="body1" color="#5a7184" mb={3}>
                  Quickly drive clicks-and-mortar catalysts for change before
                  vertical architectures. Credibly intermediate backend ideas
                  for platform.
                </Typography>
                <Button>
                  Read More <ArrowForwardIosIcon />
                </Button>
              </Box>
              <Box
                p={1}
                bgcolor="#f0fffb"
                border="1px solid #2df7c5"
                borderRadius={2}
              >
                <Box>
                  <img
                    src="/blog-1.png"
                    alt="blgImg"
                    style={{ objectFit: "cover", width: "100%" }}
                  />
                </Box>
              </Box>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BCards;
