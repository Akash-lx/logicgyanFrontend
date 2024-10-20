import { Button } from "@mui/material";
import React from "react";
import { colors } from "../../config/colorPalette";

const PrimaryButton = ({ title }) => {
  return (
    <Button variant="contained" sx={{ backgroundColor: colors.secondry.main }}>
      {title}
    </Button>
  );
};

export default PrimaryButton;