import { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let route = process.env.REACT_APP_API_ROUTE || "http://localhost:5000";

    try {
      const response = await axios.post(`${route}/auth/register`, formData);
      console.log(response.data);
      alert("User registered successfully");
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)",
        overflow: "hidden",
      }}
    >
      <CssBaseline />
      <Grid
        container
        sx={{
          width: "80%",
          height: "70vh",
          borderRadius: "16px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
          overflow: "hidden",
          background: "white",
          maxWidth: "900px",
        }}
      >
        {/* Left Image Panel */}
        <Grid
          item
          xs={12}
          sm={5}
          sx={{
            backgroundImage: "url(https://picsum.photos/1600/900)", // Use a fixed local image
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            minHeight: "100%",
          }}
        />

        {/* Right Form Panel */}
        <Grid
          item
          xs={12}
          sm={7}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "40px",
            background: "rgba(255, 255, 255, 0.95)",
          }}
        >
          <Typography component="h1" variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            Create Account
          </Typography>
          <Typography variant="body1" sx={{ color: "gray", mb: 3 }}>
            Register to get started
          </Typography>

          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Username"
              name="username"
              autoFocus
              onChange={handleChange}
              sx={{ borderRadius: "8px" }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={handleChange}
              sx={{ borderRadius: "8px" }}
            />

            {/* Register Button */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: "#fdbb2d", // Change color to match the gradient
                "&:hover": { bgcolor: "#b21f1f" },
                borderRadius: "8px",
              }}
            >
              Register
            </Button>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Register;
