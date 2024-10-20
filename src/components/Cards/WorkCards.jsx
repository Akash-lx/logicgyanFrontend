import React from "react";
import "./workCard.css";
import { Box } from "@mui/material";

const WorkCards = () => {
  return (
    <Box>
      <div class="card">
        <div class="img"></div>
        <div class="content">
          <h3>Science</h3>
          <p>
            The science of today is the technology of tomorrow – Edward Teller
          </p>
          <a href="#">
            <button>Explore</button>
          </a>
        </div>
      </div>
    </Box>
  );
};

export default WorkCards;
