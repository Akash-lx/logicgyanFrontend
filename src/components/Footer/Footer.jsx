import React from "react";
import Grid from "@mui/material/Grid2";
import { Box, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";
import { colors } from "../../config/colorPalette";
import "./footer.css";

const Footer = () => {
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
            <Box>
              <IconButton size="large">
                <LinkedInIcon fontSize="inherit" />
              </IconButton>
              <IconButton size="large">
                <LinkedInIcon fontSize="inherit" />
              </IconButton>
              <IconButton size="large">
                <LinkedInIcon fontSize="inherit" />
              </IconButton>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 6, md: 2 }} py={2}>
          <Box mb={3}>
            <Typography variant="h6" fontWeight={600}>
              Features
            </Typography>
          </Box>
          <Box>
            <ul className="footerList">
              <li className="footerListItem">
                <Typography variant="body1">Documentation</Typography>
              </li>
              <li className="footerListItem">
                <Typography variant="body1">Design</Typography>
              </li>
              <li className="footerListItem">
                <Typography variant="body1">Themes</Typography>
              </li>
              <li className="footerListItem">
                <Typography variant="body1">Illustrations</Typography>
              </li>
            </ul>
          </Box>
        </Grid>
        <Grid size={{ xs: 6, md: 2 }} py={2}>
          <Box mb={3}>
            <Typography variant="h6" fontWeight={600}>
              Community
            </Typography>
          </Box>
          <Box>
            <ul className="footerList">
              <li className="footerListItem">
                <Typography variant="body1">About</Typography>
              </li>
              <li className="footerListItem">
                <Typography variant="body1">Terms</Typography>
              </li>
              <li className="footerListItem">
                <Typography variant="body1">Privacy Policy</Typography>
              </li>
              <li className="footerListItem">
                <Typography variant="body1">Careers</Typography>
              </li>
            </ul>
          </Box>
        </Grid>
        <Grid size={{ xs: 6, md: 2 }} py={2}>
          <Box mb={3}>
            <Typography variant="h6" fontWeight={600}>
              Job Info
            </Typography>
          </Box>
          <Box>
            <ul className="footerList">
              <li className="footerListItem">
                <Typography variant="body1">Select</Typography>
              </li>
              <li className="footerListItem">
                <Typography variant="body1">Service</Typography>
              </li>
              <li className="footerListItem">
                <Typography variant="body1">Payment</Typography>
              </li>
            </ul>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3, lg: 2 }} py={2}>
          <Box mb={3}>
            <Typography variant="h6" fontWeight={600}>
              Contact
            </Typography>
          </Box>
          <Box>
            <ul className="footerList">
              <li className="footerListItem" style={{ display: "flex" }}>
                <Typography color="black" mr={0.5}>
                  Call :{" "}
                </Typography>
                <Typography variant="body1">+91-9715546963</Typography>
              </li>
              <li className="footerListItem" style={{ display: "flex" }}>
                <Typography color="black" mr={0.5}>
                  Email :{" "}
                </Typography>
                <Typography variant="body1">admin@gmail.com</Typography>
              </li>
              <li className="footerListItem" style={{ display: "flex" }}>
                <Typography color="black" mr={0.5}>
                  Address :{" "}
                </Typography>
                <Typography variant="body1">Bhilai</Typography>
              </li>
            </ul>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
