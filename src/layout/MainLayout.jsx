import { Box } from "@mui/material";
import React from "react";
import HeadNavbar from "../components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <Box>
      <HeadNavbar />
      {children}
      {/* <Box>Footer</Box> */}
    </Box>
  );
};

export default MainLayout;
