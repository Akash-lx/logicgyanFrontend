import React, { useState } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import api from "../../api/api.js";
import Grid from "@mui/material/Grid2";
import { colors } from "../../config/colorPalette.js";

const Login = () => {
  const [user, setUser] = useState("student");
  const [formData, setFormData] = useState({
    semail: "",
    spassword: "",
    userType: "student",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await api.post("/user/user-login", formData);
    if (response.status == 200) {
      console.log(response.data);
      localStorage.setItem("userId", response.data.data.userId);
      localStorage.setItem("sname", response.data.data.sname);
      localStorage.setItem("token", response.data.data.token);
    }
  };
  return (
    <Box
      sx={{
        background:
          "linear-gradient(180deg, rgba(201,238,229,1) 15%, rgba(255,255,255,1) 100%)",
      }}
      pt={25}
    >
      <Grid container spacing={5}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box textAlign="center">
            <Typography variant="h4">Welcome Back !</Typography>
          </Box>
          <Box px={10}>
            <img
              src="/logi-06.png"
              style={{ objectFit: "cover", width: "100%" }}
            />
          </Box>
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          display="flex"
          alignItems="center"
          flexDirection="column"
        >
          <Box
            p={{ xs: 1, md: 3, lg: 5 }}
            width={{ xs: "90%", sm: "80%", md: "85%", lg: "65%" }}
            component="form"
            onSubmit={handleSubmit}
            className="loginCard"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Box width="100%">
              <Box
                mb={2}
                width="100%"
                display="flex"
                justifyContent="space-around"
              >
                <Typography
                  sx={{
                    border: user === "student" ? "" : "1px solid",
                    py: 1,
                    px: 2,
                    borderRadius: 2,
                    backgroundColor:
                      user === "student" ? colors.primary.light : null,
                    color:
                      user === "student" ? colors.white : colors.primary.light,
                  }}
                  onClick={() => {
                    setUser("student");
                  }}
                >
                  Student
                </Typography>
                <Typography
                  sx={{
                    border: user === "mentor" ? "" : "1px solid",
                    py: 1,
                    px: 2,
                    borderRadius: 2,
                    backgroundColor:
                      user === "mentor" ? colors.primary.light : null,
                    color:
                      user === "mentor" ? colors.white : colors.primary.light,
                  }}
                  onClick={() => {
                    setUser("mentor");
                  }}
                >
                  Mentor
                </Typography>
              </Box>
              <hr />
            </Box>
            <TextField
              label="Email"
              name="semail"
              type="email"
              value={formData.semail}
              onChange={handleChange}
              fullWidth
              required
              color={colors.primary.main}
            />
            <TextField
              label="Password"
              name="spassword"
              type="password"
              value={formData.spassword}
              onChange={handleChange}
              required
              fullWidth
              color={colors.primary.main}
            />
            <Button
              onClick={handleSubmit}
              variant="contained"
              sx={{ mt: 1, backgroundColor: colors.primary.light }}
              fullWidth
            >
              Login
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
