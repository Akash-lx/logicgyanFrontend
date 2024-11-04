import React from "react";
import { Button, Typography } from "@mui/material";
import { colors } from "../../config/colorPalette";

const PricingButtons = ({ title, bgColor, textColor }) => {
  return (
    <Button
      sx={{
        px: 5,
        py: 1,
        backgroundColor: bgColor,
        width: "85%",
      }}
      variant="contained"
    >
      <Typography variant="caption" color={textColor}>
        {title}
      </Typography>
    </Button>
  );
};

export default PricingButtons;
