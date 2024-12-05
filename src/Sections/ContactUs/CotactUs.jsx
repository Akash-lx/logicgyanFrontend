import { Box, Stack, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import ContactUsHero from "../../components/HeroSection/ContactUsHero";
import Grid from "@mui/material/Grid2";
import "./index.css";
import { colors } from "../../config/colorPalette";
import axios from "axios";
import { properties } from "../../config/poperties";
import { toast } from "react-toastify";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

const ContactUs = () => {
  // State to store form input values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    message: "",
  });

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${properties.URLS.BASE_URL_DEV}/api/contact`, formData)
      .then((res) => {
        if (res.status === 201) {
          toast.success("Thanks for conacting we will reach you!");
        }
      })
      .catch((err) => {
        toast.error("oops server not responded");
      });
  };

  return (
    <Box pb={10}>
      <ContactUsHero />
      <Box px={7}>
        <Box mb={5}>
          <Typography variant="h3" fontWeight={700}>
            Send Us A Message
          </Typography>
        </Box>
        <Grid container spacing={{ xs: 5, md: 3 }}>
          <Grid item size={{ xs: 12, md: 7 }}>
            <Box>
              <form onSubmit={handleSubmit}>
                <Stack direction="column" className="formContainer">
                  <input
                    className="contactusInput"
                    placeholder="Enter your name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <input
                    className="contactusInput"
                    placeholder="Enter your email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <input
                    type="tel"
                    className="contactusInput"
                    placeholder="Enter your phone number"
                    name="phonenumber"
                    value={formData.phonenumber}
                    onChange={handleChange}
                  />
                  <textarea
                    className="contactusTextArea"
                    placeholder="Write your message..."
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={7}
                  />
                  <Box mt={2}>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        px: 5,
                        py: 2,
                        color: colors.primary.dark,
                        bgcolor: colors.secondry.main,
                        ":hover": {
                          backgroundColor: colors.primary.light,
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Box>
                </Stack>
              </form>
            </Box>
          </Grid>
          <Grid item size={{ xs: 12, md: 5 }}>
            <Box className="contactInfoContainer" p={3}>
              <Typography variant="h5" fontWeight={700} mb={2}>
                Contact Information
              </Typography>
              <hr />
              <Box mt={3}>
                <Typography variant="h6" mb={3}>
                  Contact Info
                </Typography>
                <Box display="flex">
                  <EmailIcon />
                  <Typography mb={2} ml={1}>
                    info@logixhunt.com
                  </Typography>
                </Box>
                <Box display="flex">
                  <CallIcon />
                  <Typography mb={2} ml={1}>
                    +91-79998 45114
                  </Typography>
                </Box>
                <Box display="flex">
                  <CallIcon />
                  <Typography mb={2} ml={1}>
                    +91-78791 22060
                  </Typography>
                </Box>
              </Box>
              <hr />
              <Box mt={3}>
                <Typography variant="h6" mb={3}>
                  Office Address
                </Typography>
                <Box display="flex">
                  <PlaceIcon />
                  <Typography ml={1}>
                    Plot no 9, Pushpak Nagar, Smriti Nagar Main Road, Beside
                    Dwarika Restaurant, Bhilai ,Chhattisgarh (490023)
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ContactUs;
