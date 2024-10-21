import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { colors } from "../../config/colorPalette";

const FreeTrailSection = () => {
  return (
    <Box px={5} py={12}>
      <Box
        bgcolor={colors.primary.light}
        px={3}
        py={7}
        borderRadius={2}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography variant="h2" fontWeight={600} mb={3} color="white">
          Start Your 15 Days Free Trail!
        </Typography>
        <Typography variant="subtitle1" color="white" mb={7}>
          Start Your 15 Days Free Trail!
        </Typography>
        <Box width="100%" display="flex" justifyContent="center">
          <Box
            className="containerEmailField"
            p={2}
            display="flex"
            alignItems="center"
            bgcolor="white"
            borderRadius={3}
          >
            <input
              type="email"
              placeholder="Email"
              className="trailEmailField"
            />
            <Button
              sx={{
                height: "70px",
                width: "30%",
                ml: 2,
                backgroundColor: colors.secondry.main,
                color: "white",
                fontWeight: 600,
                ":hover": {
                  backgroundColor: colors.primary.light,
                },
              }}
            >
              Submit Now
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FreeTrailSection;
