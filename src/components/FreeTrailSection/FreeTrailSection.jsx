import { Box, Button, Typography, Stack } from "@mui/material";
import React from "react";
import { colors } from "../../config/colorPalette";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import "./index.css";
const FreeTrailSection = () => {
  return (
    <Box px={5} py={12}>
      <Box bgcolor="#012628" px={3} py={7} borderRadius={2} spacing={2}>
        <Box component={Stack} direction={{ xs: "row" }} mb={3}>
          <Box width="20%">
            <Box mb={2}>
              <img
                src="/logicgyan.png"
                style={{ objectFit: "cover", width: "100%" }}
              />
            </Box>
            <Box>
              <img
                src="/get_it_on_playstore.png"
                style={{ objectFit: "cover", width: "100%" }}
              />
            </Box>
          </Box>
          <Box width="80%" textAlign="center">
            <Typography
              variant="h2"
              fontWeight={550}
              color={colors.primary.xlight}
              mb={1}
            >
              🎉 Get LogicGyan on the Play Store! 🎉
            </Typography>
            <Typography variant="body1" color={colors.primary.xlight} mb={3}>
              Unlock your learning potential today!
            </Typography>
            <Typography
              variant="h4"
              fontWeight={550}
              color={colors.primary.light}
              mb={3}
            >
              🌟 Special Offer: Enjoy a 30% Discount! 🌟
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography
            className="LinkContainer"
            variant="h6"
            display="flex"
            justifyContent="center"
            alignItems="center"
            color={colors.primary.xxLight}
            sx={{ cursor: "pointer" }}
          >
            <InsertLinkIcon sx={{ fontSize: "4rem" }} />
            Download Logicgyan
            <InsertLinkIcon sx={{ fontSize: "4rem" }} />
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default FreeTrailSection;

{
  /*  */
}
