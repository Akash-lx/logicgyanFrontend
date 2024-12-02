import React, { useState } from "react";
import { TextField, Button, Box, Typography, Container } from "@mui/material";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    // Add your login logic here
  };
  return (
    <Box bgcolor="red">
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
          }}
        >
          <Typography component="h1">Sign Up !</Typography>
          <TextField
            label="Mobile"
            name="mobile"
            type="number"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Confirm Password"
            name="confirmpassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            fullWidth
            required
          />
          <Button type="submit" variant="contained" sx={{ mt: 1 }}>
            Login
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Signup;
