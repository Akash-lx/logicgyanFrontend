import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { properties } from "../../config/poperties";

const BCards = ({ blogsData }) => {
  return (
    <>
      <Box px={5}>
        <Grid container rowGap={2}>
          {blogsData?.map((ele) => (
            <Grid size={8}>
              <Box>
                <Stack
                  direction={{ xs: "column-reverse", md: "row" }}
                  p={2}
                  border="1px solid black"
                  borderRadius={2}
                >
                  <Box mr={2} mt={{ xs: 2 }} width="90%">
                    <Typography
                      variant="h5"
                      fontWeight={600}
                      mb={3}
                      lineHeight={1.2}
                    >
                      {ele.bheading}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="#5a7184"
                      mb={3}
                      sx={{
                        display: "-webkit-box",
                        overflow: "hidden",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 3, // Number of lines before truncating
                      }}
                    >
                      {ele.bdescription}
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
                        src={`${properties.URLS.BASE_URL_IMG_ONRENDER}/uploads/blogs/${ele.bimage}`}
                        alt="blgImg"
                        style={{ objectFit: "cover", width: "100%" }}
                      />
                    </Box>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default BCards;
