import { Button } from "@mui/material";
import React from "react";
import { colors } from "../../config/colorPalette";

const PrimaryButton = ({ title, btnFunction }) => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: colors.secondry.highlited,
        color: colors.primary.dark,
      }}
      onClick={() => {
        btnFunction("contactUs", "Contact");
      }}
    >
      {title}
    </Button>
  );
};

export default PrimaryButton;
