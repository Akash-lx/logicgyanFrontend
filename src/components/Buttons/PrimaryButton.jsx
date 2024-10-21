import { Button } from "@mui/material";
import React from "react";
import { colors } from "../../config/colorPalette";

const PrimaryButton = ({ title, btnFunction }) => {
  return (
    <Button
      variant="contained"
      sx={{ backgroundColor: colors.secondry.main }}
      onClick={() => {
        btnFunction("contactUs");
      }}
    >
      {title}
    </Button>
  );
};

export default PrimaryButton;
