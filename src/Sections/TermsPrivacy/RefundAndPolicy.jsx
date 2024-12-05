import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import { Typography, Container, Divider } from "@mui/material";
import { colors } from "../../config/colorPalette";

const RefundAndPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box
      py={25}
      sx={{
        backgroundColor: "rgb(201,238,229)",
        background:
          "linear-gradient(180deg, rgba(201,238,229,1) 15%, rgba(255,255,255,1) 100%)",
      }}
    >
      <Box textAlign="center">
        <Typography variant="h1" fontWeight={700} color={colors.primary.main}>
          Refund And Policy
        </Typography>
      </Box>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Divider sx={{ my: 2 }} />

        <Box sx={{ my: 5 }}>
          <Typography variant="h6">Eligibility for Refunds</Typography>
          <Typography variant="body1">
            Refunds may be eligible for certain courses, depending on their type
            and specific terms. Refund eligibility will be outlined before
            purchase.
          </Typography>
        </Box>

        <Box sx={{ my: 5 }}>
          <Typography variant="h6">Refund Request Process</Typography>
          <Typography variant="body1">
            To request a refund, please contact us within [specified time frame]
            of your purchase. Provide your order details and a brief reason for
            the refund request.
          </Typography>
        </Box>

        <Box sx={{ my: 5 }}>
          <Typography variant="h6">Conditions for Refunds</Typography>
          <Typography variant="body1">
            Refunds will only be granted if the course has not been
            significantly used or if issues were encountered that prevented
            usage. Specific conditions will vary based on course type.
          </Typography>
        </Box>

        <Box sx={{ my: 5 }}>
          <Typography variant="h6">Non-Refundable Purchases</Typography>
          <Typography variant="body1">
            Some services, including subscriptions and limited-time offers, may
            be non-refundable. This information will be clearly provided before
            any purchase.
          </Typography>
        </Box>

        <Box sx={{ my: 5 }}>
          <Typography variant="h6">Refund Processing</Typography>
          <Typography variant="body1">
            Approved refunds will be processed within [specified time, e.g.,
            7-10 business days] and credited back to your original payment
            method.
          </Typography>
        </Box>

        <Box sx={{ my: 5 }}>
          <Typography variant="h6">Contact Us</Typography>
          <Typography variant="body1">
            For questions or concerns regarding refunds, please reach out at
            [your contact information].
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default RefundAndPolicy;
