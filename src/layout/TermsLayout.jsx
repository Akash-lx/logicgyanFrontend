import React, { Children } from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const TermsLayout = ({ children }) => {
  return (
    <Box width="100%">
      {/* <Box width="100%">{children}</Box> */}
      <Box width="100%">{children}</Box>
    </Box>
  );
};

export default TermsLayout;
