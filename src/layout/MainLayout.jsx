import { Box } from "@mui/material";
import React from "react";
import HeadNavbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Box width="100%">
      <Box width="100%">
        <HeadNavbar />
      </Box>
      {/* <Box width="100%">{children}</Box> */}
      <Box width="100%">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default MainLayout;
