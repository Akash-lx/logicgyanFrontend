import { Box, Stack, Typography, Button } from "@mui/material";
import React from "react";
import ContactUsHero from "../../components/HeroSection/ContactUsHero";
import Grid from "@mui/material/Grid2";
import "./index.css";
import { colors } from "../../config/colorPalette";

const CotactUs = () => {
  return (
    <Box>
      <ContactUsHero />
      <Box px={7}>
        <Box mb={5}>
          <Typography variant="h3" fontWeight={700}>
            Send Us A Message
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid size={7}>
            <Box>
              <form>
                <Stack direction="column" className="formContainer">
                  <input
                    className="contactusInput"
                    placeholder="Enter your name"
                    type="text"
                  />
                  <input
                    className="contactusInput"
                    placeholder="Enter your email"
                  />
                  <textarea
                    className="contactusTextArea"
                    placeholder="Write your message..."
                    type="text"
                    rows={7}
                  />
                  <Box mt={2}>
                    <Box display="flex">
                      <input type="checkbox" />
                      <Typography ml={1}>
                        Save my name, email, and website in this browser for the
                        next time.
                      </Typography>
                    </Box>
                  </Box>
                  <Box mt={2}>
                    <Button
                      variant="contained"
                      sx={{
                        px: 5,
                        py: 2,
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
          <Grid size={5}>
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

export default CotactUs;
