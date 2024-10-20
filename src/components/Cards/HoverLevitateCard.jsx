import { Paper } from "@mui/material";
import React from "react";

const HoverLevitateCard = ({ content }) => {
  return (
    <Paper
      className="levitateOnHover"
      elevation={7}
      sx={{
        px: 5,
        py: 5,
        m: 2,
        borderRadius: 3,
        transition: "transform 0.5s ease", // Smooth transition for the levitation
        "&:hover": {
          transform: "translateY(-5px)", // Move the card up by 4px on hover
        },
      }}
    >
      {content}
    </Paper>
  );
};

export default HoverLevitateCard;
