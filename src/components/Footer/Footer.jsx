import React from "react";
import Grid from "@mui/material/Grid2";
import { Box, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import IconButton from "@mui/material/IconButton";
import XIcon from "@mui/icons-material/X";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { colors } from "../../config/colorPalette";
import "./footer.css";
import { useNavigate } from "react-router-dom";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CropLandscapeIcon from "@mui/icons-material/CropLandscape";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Box py={7} px={3}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 3, lg: 4 }}>
          <Box>
            <Box>
              <img
                src="/logicgyan4.png"
                style={{
                  objectFit: "cover",
                  width: "60%",
                }}
              />
            </Box>
            <Typography variant="body1" fontWeight={600} color="#5a7184" mb={3}>
              Professionally scale cross functional human capital and extensive
              technology.
            </Typography>
            <Box mb={2}>
              <IconButton
                size="large"
                sx={{ "&:hover": { backgroundColor: colors.primary.xxlight } }}
              >
                <LinkedInIcon fontSize="inherit" />
              </IconButton>
              <IconButton
                size="large"
                sx={{ "&:hover": { backgroundColor: colors.primary.xxlight } }}
              >
                <InstagramIcon fontSize="inherit" />
              </IconButton>
              <IconButton
                size="large"
                sx={{ "&:hover": { backgroundColor: colors.primary.xxlight } }}
              >
                <FacebookIcon fontSize="inherit" />
              </IconButton>
              <IconButton
                size="large"
                sx={{ "&:hover": { backgroundColor: colors.primary.xxlight } }}
              >
                <XIcon fontSize="inherit" />
              </IconButton>
              <IconButton
                size="large"
                sx={{ "&:hover": { backgroundColor: colors.primary.xxlight } }}
              >
                <WhatsAppIcon fontSize="inherit" />
              </IconButton>
            </Box>
            {/* <Box>
              <Typography
                variant="caption"
                mr={1}
                className="captioncontent"
                onClick={() => {
                  navigate("/TermsAndCondition");
                }}
              >
                T&C
              </Typography>
              <Typography
                variant="caption"
                mr={1}
                className="captioncontent"
                onClick={() => {
                  navigate("/RefundAndPolicy");
                }}
              >
                Refund Policy
              </Typography>
              <Typography
                variant="caption"
                className="captioncontent"
                onClick={() => {
                  navigate("/PrivacyAndPolicy");
                }}
              >
                Privacy Policy
              </Typography>
            </Box> */}
          </Box>
        </Grid>
        <Grid size={{ xs: 6, md: 2 }} py={2}>
          <Box mb={3} display="flex">
            <Typography
              variant="h6"
              fontWeight={600}
              borderBottom="3px solid"
              borderColor={colors.secondry.dark}
              color={colors.primary.light}
            >
              Features
            </Typography>
          </Box>
          <Box>
            <ul className="footerList">
              <li className="footerListItem">
                <Typography variant="body1" className="listItemContent">
                  <KeyboardDoubleArrowRightIcon /> Documentation
                </Typography>
              </li>
              <li className="footerListItem">
                <Typography variant="body1" className="listItemContent">
                  <KeyboardDoubleArrowRightIcon />
                  Design
                </Typography>
              </li>
              <li className="footerListItem">
                <Typography variant="body1" className="listItemContent">
                  <KeyboardDoubleArrowRightIcon />
                  Themes
                </Typography>
              </li>
              <li className="footerListItem">
                <Typography variant="body1" className="listItemContent">
                  <KeyboardDoubleArrowRightIcon />
                  Illustrations
                </Typography>
              </li>
            </ul>
          </Box>
        </Grid>
        <Grid size={{ xs: 6, md: 2 }} py={2}>
          <Box mb={3} display="flex">
            <Typography
              variant="h6"
              fontWeight={600}
              borderBottom="3px solid"
              borderColor={colors.secondry.dark}
              color={colors.primary.light}
            >
              Resource
            </Typography>
          </Box>
          <Box>
            <ul className="footerList">
              <li className="footerListItem">
                <Typography
                  variant="body1"
                  className="listItemContent"
                  onClick={() => {
                    navigate("/about");
                  }}
                >
                  <KeyboardDoubleArrowRightIcon />
                  About
                </Typography>
              </li>
              <li className="footerListItem">
                <Typography
                  variant="body1"
                  className="listItemContent"
                  onClick={() => {
                    navigate("/TermsAndCondition");
                  }}
                >
                  <KeyboardDoubleArrowRightIcon />
                  Terms & Condition
                </Typography>
              </li>
              <li className="footerListItem">
                <Typography
                  variant="body1"
                  className="listItemContent"
                  onClick={() => {
                    navigate("/PrivacyAndPolicy");
                  }}
                >
                  <KeyboardDoubleArrowRightIcon />
                  Privacy Policy
                </Typography>
              </li>
              <li className="footerListItem">
                <Typography
                  variant="body1"
                  className="listItemContent"
                  onClick={() => {
                    navigate("/RefundAndPolicy");
                  }}
                >
                  <KeyboardDoubleArrowRightIcon />
                  Refund Policy
                </Typography>
              </li>
            </ul>
          </Box>
        </Grid>
        <Grid size={{ xs: 6, md: 2 }} py={2}>
          <Box mb={3} display="flex">
            <Typography
              variant="h6"
              fontWeight={600}
              borderBottom="3px solid"
              borderColor={colors.secondry.dark}
              color={colors.primary.light}
            >
              Job Info
            </Typography>
          </Box>
          <Box>
            <ul className="footerList">
              <li className="footerListItem">
                <Typography variant="body1" className="listItemContent">
                  <KeyboardDoubleArrowRightIcon />
                  Select
                </Typography>
              </li>
              <li className="footerListItem">
                <Typography variant="body1" className="listItemContent">
                  <KeyboardDoubleArrowRightIcon />
                  Service
                </Typography>
              </li>
              <li className="footerListItem">
                <Typography variant="body1" className="listItemContent">
                  <KeyboardDoubleArrowRightIcon />
                  Payment
                </Typography>
              </li>
            </ul>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3, lg: 2 }} py={2}>
          <Box mb={3} display="flex">
            <Typography
              variant="h6"
              fontWeight={600}
              borderBottom="3px solid"
              borderColor={colors.secondry.dark}
              color={colors.primary.light}
            >
              Contact
            </Typography>
          </Box>
          <Box>
            <ul className="footerList">
              <li className="footerListItem" style={{ display: "flex" }}>
                <CallIcon sx={{ color: colors.primary.light }} />
                <Typography color="black" mr={0.5} ml={0.5}>
                  Call :{" "}
                </Typography>
                <Typography variant="body1">+91-79998 45114</Typography>
              </li>
              <li className="footerListItem" style={{ display: "flex" }}>
                <CallIcon sx={{ color: colors.primary.light }} />
                <Typography color="black" mr={0.5} ml={0.5}>
                  Call :{" "}
                </Typography>
                <Typography variant="body1">+91-78791 22060</Typography>
              </li>
              <li className="footerListItem" style={{ display: "flex" }}>
                <EmailIcon sx={{ color: colors.primary.light }} />
                <Typography color="black" mr={0.5} ml={0.5}>
                  Email :{" "}
                </Typography>
                <Typography variant="body1">info@logixhunt.com</Typography>
              </li>
              <li
                className="footerListItem"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <Box sx={{ display: "flex", mb: 2 }}>
                  <LocationOnIcon
                    sx={{
                      color: colors.primary.light,
                    }}
                  />
                  <Typography color="black" mr={0.5} ml={0.5}>
                    Address
                  </Typography>
                </Box>
                <Typography variant="body1">
                  Plot no 9, Pushpak Nagar, Smriti Nagar Main Road, Beside
                  Dwarika Restaurant, Bhilai ,Chhattisgarh (490023)
                </Typography>
              </li>
            </ul>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
