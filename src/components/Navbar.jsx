import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Box, Typography, Button } from "@mui/material";
import { colors } from "../config/colorPalette";
import PrimaryButton from "./Buttons/PrimaryButton";
import { useNavigate } from "react-router-dom";

const HeadNavbar = () => {
  const [elevate, setElevate] = useState(false);

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    if (path !== undefined || path === null) {
      navigate(`/${path}`);
    } else {
      navigate(`/`);
    }
  };

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
        backgroundColor: elevate ? "rgba(1, 38, 40, 0.75)" : "#c9eee5",
        boxShadow: elevate ? "0px -1px 24px 9px rgba(204,170,0,0.34)" : "none", // Conditional shadow
        transition: "box-shadow 0.3s ease-in-out", // Smooth transition
      }}
    >
      <Box px={10}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo section */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: elevate ? "none" : colors.primary.main,
              transition: "background-color 0.75s ease",
            }}
          >
            <img src="/logicgyan.png" alt="Logo" width="125" height="75" />
          </Box>
          {/* Menu options */}
          <Box sx={{ display: "flex", gap: 5 }}>
            <Typography
              className="menuItem"
              fontWeight={550}
              sx={{
                color: elevate ? colors.white : colors.primary.main,
                cursor: "pointer",
              }}
              onClick={() => {
                handleNavigate();
              }}
            >
              Home
            </Typography>
            <Typography
              className="menuItem"
              fontWeight={550}
              sx={{
                color: elevate ? colors.white : colors.primary.main,
                cursor: "pointer",
              }}
              onClick={() => {
                handleNavigate("about");
              }}
            >
              About Us
            </Typography>
            <Typography
              className="menuItem"
              fontWeight={550}
              sx={{
                color: elevate ? colors.white : colors.primary.main,
                cursor: "pointer",
              }}
              onClick={() => {
                handleNavigate("feature");
              }}
            >
              Features
            </Typography>
            <Typography
              className="menuItem"
              fontWeight={550}
              sx={{
                color: elevate ? colors.white : colors.primary.main,
                cursor: "pointer",
              }}
              onClick={() => {
                handleNavigate("blog");
              }}
            >
              Blogs
            </Typography>
          </Box>
          <Box>
            <PrimaryButton title="Contact Us" btnFunction={handleNavigate} />
          </Box>
        </Toolbar>
      </Box>
      {elevate ? <hr className="navbarHr" /> : null}
    </AppBar>
  );
};

export default HeadNavbar;
