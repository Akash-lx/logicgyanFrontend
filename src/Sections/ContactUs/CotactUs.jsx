import { Box, Stack, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import ContactUsHero from "../../components/HeroSection/ContactUsHero";
import Grid from "@mui/material/Grid";
import "./index.css";
import { colors } from "../../config/colorPalette";
import axios from "axios";
import { properties } from "../../config/poperties";
import { toast } from "react-toastify";

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
        <Grid container spacing={{ xs: 5, md: 2 }}>
          <Grid item xs={12} md={7}>
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
          <Grid item xs={12} md={5}>
            <Box className="contactInfoContainer" p={3}>
              <Typography variant="h5" fontWeight={700} mb={2}>
                Contact Information
              </Typography>
              <hr />
              <Box mt={3}>
                <Typography variant="h6" mb={3}>
                  Contact Info
                </Typography>
                <Typography mb={2}>Support@saasland.com</Typography>
                <Typography mb={2}>+44 (0) 30 546 7865</Typography>
              </Box>
              <hr />
              <Box mt={3}>
                <Typography variant="h6" mb={3}>
                  Office Address
                </Typography>
                <Typography>
                  100 Banbridge Road, London, United Kingdom
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ContactUs;
