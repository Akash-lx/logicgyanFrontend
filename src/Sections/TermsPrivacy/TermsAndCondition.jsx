import React from "react";
import Box from "@mui/material/Box";
import { Typography, Divider, Container } from "@mui/material";
import { colors } from "../../config/colorPalette";

const TermsAndCondition = () => {
  return (
    <Box
      py={10}
      sx={{
        backgroundColor: "rgb(201,238,229)",
        background:
          "linear-gradient(180deg, rgba(201,238,229,1) 15%, rgba(255,255,255,1) 100%)",
      }}
    >
      <Container>
        <Box textAlign="center">
          <Typography variant="h1" fontWeight={700} color={colors.primary.main}>
            Terms and Condition
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ my: 5 }}>
          <Typography variant="h6">Introduction</Typography>
          <Typography variant="body1">
            Welcome to LogicGyan! These Terms and Conditions govern your use of
            our app. By accessing or using LogicGyan, you agree to comply with
            these terms. If you do not agree with any part of the terms, please
            refrain from using our app.
          </Typography>
        </Box>

        <Box sx={{ my: 5 }}>
          <Typography variant="h6">Services</Typography>
          <Typography variant="body1">
            LogicGyan offers a variety of online courses, both recorded and live
            sessions, covering in-demand skills and topics. We strive to provide
            up-to-date, accurate, and reliable content, although we make no
            guarantees regarding the suitability, reliability, or accuracy of
            the courses.
          </Typography>
        </Box>

        <Box sx={{ my: 5 }}>
          <Typography variant="h6">Account Registration</Typography>
          <Typography variant="body1">
            To access our courses, you may be required to create an account. You
            agree to provide accurate and complete information, and to keep your
            account information updated. You are responsible for the security of
            your account and any activities under your account.
          </Typography>
        </Box>

        <Box sx={{ my: 5 }}>
          <Typography variant="h6">Usage of Content</Typography>
          <Typography variant="body1">
            All content on LogicGyan, including videos, materials, and lectures,
            is owned or licensed by us. You are granted a limited,
            non-exclusive, and non-transferable license to use this content
            solely for personal, non-commercial educational purposes.
            Unauthorized distribution, copying, or commercial use is strictly
            prohibited.
          </Typography>
        </Box>

        <Box sx={{ my: 5 }}>
          <Typography variant="h6">Payments and Refunds</Typography>
          <Typography variant="body1">
            Certain courses and services on LogicGyan may require payment. All
            fees are clearly outlined before purchase. Refunds are subject to
            our refund policy, which may vary depending on course type and
            specific terms.
          </Typography>
        </Box>

        <Box sx={{ my: 5 }}>
          <Typography variant="h6">Intellectual Property</Typography>
          <Typography variant="body1">
            All content, branding, and logos related to LogicGyan are the
            intellectual property of LogicGyan and its licensors. Unauthorized
            use of these materials is prohibited without prior written consent.
          </Typography>
        </Box>

        <Box sx={{ my: 5 }}>
          <Typography variant="h6">Third-Party Links</Typography>
          <Typography variant="body1">
            LogicGyan may contain links to third-party websites or services that
            are not owned or controlled by us. We are not responsible for the
            content, privacy policies, or practices of any third-party websites
            or services.
          </Typography>
        </Box>

        <Box sx={{ my: 5 }}>
          <Typography variant="h6">Limitations of Liability</Typography>
          <Typography variant="body1">
            LogicGyan, its affiliates, and its employees are not liable for any
            indirect, incidental, or consequential damages arising from the use
            or inability to use the services offered.
          </Typography>
        </Box>

        <Box sx={{ my: 5 }}>
          <Typography variant="h6">Modifications to Terms</Typography>
          <Typography variant="body1">
            We reserve the right to modify these Terms and Conditions at any
            time. Changes will be posted on this page, and your continued use of
            the app following the posting of any changes constitutes your
            acceptance of the new terms.
          </Typography>
        </Box>

        <Box sx={{ my: 5 }}>
          <Typography variant="h6">Contact Us</Typography>
          <Typography variant="body1">
            If you have any questions or concerns regarding these Terms and
            Conditions, please contact us at [your contact information].
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default TermsAndCondition;
