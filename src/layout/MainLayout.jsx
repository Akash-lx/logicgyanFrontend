import { Box } from "@mui/material";
import React from "react";
import HeadNavbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <Box>
      <HeadNavbar />
      {children}
      {/* <Footer /> */}
    </Box>
  );
};

export default MainLayout;
