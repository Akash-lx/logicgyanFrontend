import React from "react";
import Box from "@mui/material/Box";
import { Typography, Divider, Container } from "@mui/material";
import { colors } from "../../config/colorPalette";

const PrivacyAndPolicy = () => {
  return (
    <Box
      py={10}
      sx={{
        backgroundColor: "rgb(201,238,229)",
        background:
          "linear-gradient(180deg, rgba(201,238,229,1) 15%, rgba(255,255,255,1) 100%)",
      }}
    >
      <Box textAlign="center">
        <Typography variant="h1" fontWeight={700} color={colors.primary.main}>
          Privacy and policy
        </Typography>
      </Box>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Divider sx={{ my: 2 }} />

        <Box sx={{ my: 5 }}>
          <Typography variant="h6">Introduction</Typography>
          <Typography variant="body1">
            At LogicGyan, we value your privacy. This Privacy Policy outlines
            the information we collect, how we use it, and your rights regarding
            your personal data.
          </Typography>
        </Box>

        <Box sx={{ my: 5 }}>
          <Typography variant="h6">Information We Collect</Typography>
          <Typography variant="body1">
            We may collect information you provide directly, such as your name,
            email, and payment details, as well as data gathered from your
            interaction with our app, like usage and device information.
          </Typography>
        </Box>

        <Box sx={{ my: 5 }}>
          <Typography variant="h6">How We Use Your Information</Typography>
          <Typography variant="body1">
            Your information is used to provide, maintain, and improve our
            services, process payments, personalize your experience, and
            communicate updates or promotional offers.
          </Typography>
        </Box>

        <Box sx={{ my: 5 }}>
          <Typography variant="h6">Data Sharing and Disclosure</Typography>
          <Typography variant="body1">
            We do not share your personal data with third parties except as
            necessary for our operations, like payment processing or legal
            compliance. Third-party access is strictly controlled.
          </Typography>
        </Box>

        <Box sx={{ my: 5 }}>
          <Typography variant="h6">Data Security</Typography>
          <Typography variant="body1">
            We implement security measures to protect your data, including
            encryption and access controls, but cannot guarantee absolute
            security over the internet.
          </Typography>
        </Box>

        <Box sx={{ my: 5 }}>
          <Typography variant="h6">Your Rights</Typography>
          <Typography variant="body1">
            You have the right to access, update, or delete your personal
            information, as well as to limit or object to certain data uses.
            Contact us for any requests regarding your data.
          </Typography>
        </Box>

        <Box sx={{ my: 5 }}>
          <Typography variant="h6">Changes to This Policy</Typography>
          <Typography variant="body1">
            We may update our Privacy Policy periodically. Any changes will be
            posted on this page, and your continued use of LogicGyan constitutes
            acceptance of the updated terms.
          </Typography>
        </Box>

        <Box sx={{ my: 5 }}>
          <Typography variant="h6">Contact Us</Typography>
          <Typography variant="body1">
            If you have questions or concerns regarding our Privacy Policy,
            please contact us at [your contact information].
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default PrivacyAndPolicy;
