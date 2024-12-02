import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import { colors } from "../config/colorPalette";
import PrimaryButton from "./Buttons/PrimaryButton";
import { useNavigate } from "react-router-dom";
import NavBarDrawer from "./Drawer/NavBarDrawer";

const HeadNavbar = () => {
  const [elevate, setElevate] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Home");

  const isMobile = useMediaQuery("(max-width:1023px)");
  const isScreen = useMediaQuery("(min-width:1023px)");

  const navigate = useNavigate();

  const handleNavigate = (path, title) => {
    if (path !== undefined || path === null || path === "") {
      navigate(`/${path}`);
    } else {
      navigate(`/`);
    }
    setActiveMenu(title);
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
        backgroundColor: elevate
          ? "rgba(1, 38, 40, 0.75)"
          : "rgba(255, 255, 255, 0)",
        boxShadow: elevate ? "0px -1px 24px -8px rgba(204,170,0,1)" : "none", // Conditional shadow
        transition: "box-shadow 0.3s ease-in-out", // Smooth transition
      }}
    >
      <Box px={{ md: 10 }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo section */}
          <Box display="flex" alignItems="center">
            {elevate ? (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  transition: "background-color 0.75s ease",
                }}
              >
                <img src="/logicgyan.png" alt="Logo" width="175" height="50" />
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  py: 2,
                  transition: "background-color 0.75s ease",
                }}
              >
                <img src="/logicgyan6.png" alt="Logo" width="175" height="50" />
              </Box>
            )}
            {isMobile ? (
              <Box>
                <NavBarDrawer />
              </Box>
            ) : null}
          </Box>
          {/* Menu options */}
          {isScreen ? (
            <Box sx={{ display: "flex", gap: 5 }}>
              <Typography
                className={activeMenu === "Home" ? "" : "menuItem"}
                fontWeight={550}
                sx={{
                  color:
                    activeMenu === "Home"
                      ? elevate
                        ? colors.secondry.highlited
                        : colors.secondry.highlited
                      : elevate
                      ? colors.white
                      : colors.primary.main,
                  fontSize: "1.3rem",
                  borderBottom: activeMenu === "Home" ? "2px solid" : "",
                  px: 0.5,
                  cursor: "pointer",
                }}
                onClick={() => {
                  handleNavigate("", "Home");
                }}
              >
                Home
              </Typography>

              <Typography
                className={activeMenu === "About" ? "" : "menuItem"}
                fontWeight={550}
                sx={{
                  color:
                    activeMenu === "About"
                      ? elevate
                        ? colors.secondry.highlited
                        : colors.secondry.highlited
                      : elevate
                      ? colors.white
                      : colors.primary.main,
                  fontSize: "1.3rem",
                  borderBottom: activeMenu === "About" ? "2px solid" : "",
                  px: 0.5,

                  cursor: "pointer",
                }}
                onClick={() => {
                  handleNavigate("about", "About");
                }}
              >
                About Us
              </Typography>
              <Typography
                className={activeMenu === "Feature" ? "" : "menuItem"}
                fontWeight={550}
                sx={{
                  color:
                    activeMenu === "Feature"
                      ? elevate
                        ? colors.secondry.highlited
                        : colors.secondry.highlited
                      : elevate
                      ? colors.white
                      : colors.primary.main,
                  fontSize: "1.3rem",
                  borderBottom: activeMenu === "Feature" ? "2px solid" : "",
                  px: 0.5,

                  cursor: "pointer",
                }}
                onClick={() => {
                  handleNavigate("feature", "Feature");
                }}
              >
                Features
              </Typography>
              <Typography
                className={activeMenu === "Blog" ? "" : "menuItem"}
                fontWeight={550}
                sx={{
                  color:
                    activeMenu === "Blog"
                      ? elevate
                        ? colors.secondry.highlited
                        : colors.secondry.highlited
                      : elevate
                      ? colors.white
                      : colors.primary.main,
                  fontSize: "1.3rem",
                  borderBottom: activeMenu === "Blog" ? "2px solid" : "",
                  px: 0.5,

                  cursor: "pointer",
                }}
                onClick={() => {
                  handleNavigate("blog", "Blog");
                }}
              >
                Blogs
              </Typography>
            </Box>
          ) : null}
          {isScreen ? (
            <Box>
              <PrimaryButton title="Contact Us" btnFunction={handleNavigate} />
              <Button
                variant="outlined"
                sx={{
                  color: elevate ? colors.secondry.main : colors.primary.dark,
                  borderColor: elevate
                    ? colors.secondry.main
                    : colors.primary.dark,
                  ml: 1,
                }}
                onClick={() => {
                  navigate("/auth/login");
                }}
              >
                Login
              </Button>
            </Box>
          ) : null}
        </Toolbar>
      </Box>
      {elevate ? <hr className="navbarHr" /> : null}
    </AppBar>
  );
};

export default HeadNavbar;
