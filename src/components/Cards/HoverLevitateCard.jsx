import { Paper } from "@mui/material";
import React from "react";

const HoverLevitateCard = ({ content }) => {
  return (
    <Paper
      className="levitateOnHover"
      elevation={7}
      sx={{
        px: 3,
        py: 5,
        m: 2,
        borderRadius: 3,
        cursor: "pointer",
        transition: "transform 0.6s ease-in", // Smooth transition for the levitation
        "&:hover": {
          boxShadow: "0px 0px 40px -1px rgba(0,0,0,0.75)",
          transform: "translateY(-5px)", // Move the card up by 4px on hover
        },
      }}
    >
      {content}
    </Paper>
  );
};

export default HoverLevitateCard;
