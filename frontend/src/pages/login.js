import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container, CircularProgress } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getCookieValue } from "../utils/tasksUtility";

const Login = ({ settoken }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false); // Added loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Start loading
    let route = process.env.ROUTE || "http://localhost:5000";

    try {
      const response = await axios.post(`${route}/auth/login`, formData, {
        withCredentials: true,
      });

      if (response.data.user) {
        settoken(getCookieValue("token"));
        navigate("/"); // Redirect to home after successful login
      }
      alert("User logged in!");
    } catch (error) {
      alert("Login error");
      console.error(error);
    } finally {
      setLoading(false); // Stop loading
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
            backgroundImage: "url(https://picsum.photos/1600/900)",
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
            Welcome Back
          </Typography>
          <Typography variant="body1" sx={{ color: "gray", mb: 3 }}>
            Sign in to continue
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

            {/* Login Button */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: "#b21f1f",
                "&:hover": { bgcolor: "#8e1a1a" },
                borderRadius: "8px",
              }}
            >
              {loading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "Login"}
            </Button>

            {/* Redirect to Register Button */}
            <Button
              fullWidth
              variant="text"
              sx={{
                mt: 2,
                color: "#1a237e",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "rgba(26, 35, 126, 0.1)",
                  transition: "background-color 0.3s ease",
                },
              }}
              onClick={() => navigate("/register")}
            >
              Don't have an account? Register here
            </Button>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
