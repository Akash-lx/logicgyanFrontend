import React from "react";
import Switch from "@mui/material/Switch";
import { Box, Stack, Typography } from "@mui/material";
import Pricings from "./Pricings";
const PricingSection = () => {
  return (
    <Box bgcolor="#e5fff9">
      <Box py={5}>
        <Typography variant="h3" mb={5} fontWeight={600} textAlign="center">
          Affordable Pricing
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          sx={{ justifyContent: "center", alignItems: "center" }}
          mb={5}
        >
          <Typography variant="h5">Annually</Typography>
          <Switch
            name="loading"
            sx={{
              "& .MuiSwitch-switchBase.Mui-checked": {
                color: "#04775a", // Thumb color when checked
                "&:hover": {
                  backgroundColor: "rgba(45, 248, 197, 0.08)", // Hover effect when checked
                },
              },
              "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                backgroundColor: "#04775a", // Track color when checked
              },
              "& .MuiSwitch-switchBase": {
                color: "#ccaa00", // Thumb color when unchecked
                "&:hover": {
                  backgroundColor: "rgba(245, 0, 87, 0.08)", // Hover effect when unchecked
                },
              },
              "& .MuiSwitch-track": {
                backgroundColor: "#ccaa00", // Track color when unchecked
              },
            }}
          />
          <Typography variant="h5">Monthly</Typography>
        </Stack>
        <Box px={5}>
          <Pricings />
        </Box>
      </Box>
    </Box>
  );
};

export default PricingSection;
