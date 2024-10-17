import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Box, Typography, Button } from "@mui/material";
import { colors } from "../config/colorPalette";

const HeadNavbar = () => {
  const [elevate, setElevate] = useState(false);

  // Detect scroll position and set the state accordingly
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setElevate(true); // Add shadow after scrolling 200px
      } else {
        setElevate(false); // Remove shadow before 200px
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      sx={{
        bgcolor: colors.primary.main,
        boxShadow: elevate ? "0px -1px 24px 9px rgba(204,170,0,0.34)" : "none", // Conditional shadow
        transition: "box-shadow 0.3s ease-in-out", // Smooth transition
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo section */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src="/logicgyan.png" alt="Logo" width="125" height="75" />
        </Box>

        {/* Menu options */}
        <Box sx={{ display: "flex", gap: 5 }}>
          <Typography
            className="menuItem"
            sx={{ color: colors.white, cursor: "pointer" }}
          >
            Home
          </Typography>
          <Typography
            className="menuItem"
            sx={{ color: colors.white, cursor: "pointer" }}
          >
            About Us
          </Typography>
          <Typography
            className="menuItem"
            sx={{ color: colors.white, cursor: "pointer" }}
          >
            Features
          </Typography>
          <Typography
            className="menuItem"
            sx={{ color: colors.white, cursor: "pointer" }}
          >
            Contanct Us
          </Typography>
        </Box>
      </Toolbar>
      <hr />
    </AppBar>
  );
};

export default HeadNavbar;
